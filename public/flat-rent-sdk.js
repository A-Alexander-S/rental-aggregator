const database = [
    {
        id: 'vnd331',
        title: 'Radisson Royal Hotel',
        details: 'Отель расположен в 4 минутах ходьбы от станции метро «Маяковская». К услугам гостей фитнес-центр и спа-центр с сауной и гидромассажной ванной.',
        photos: ['vnd331.png', 'vnd331.png'],
        coordinates: [59.9322936, 30.3460129],
        bookedDates: [],
        price: 12000
    },
    {
        id: 'ab2e2',
        title: 'Номера на Садовой',
        details: 'Расположен в 7 минутах ходьбы от Невского проспекта. К услугам гостей круглосуточная стойка регистрации и бесплатный Wi-Fi.',
        photos: ['ab2e2.png', 'ab2e2.png'],
        coordinates: [59.930325, 30.3291592],
        bookedDates: [],
        price: 4500
    },
    {
        id: 'mvm32l',
        title: 'Мини Отель на Невском 136',
        details: 'Мини-отель расположен в Санкт-Петербурге, в 5 минутах ходьбы от станции метро «Площадь Восстания» и Московского железнодорожного вокзала.',
        photos: ['mvm32l.png', 'mvm32l.png'],
        coordinates: [59.9299603, 30.3658932],
        bookedDates: [],
        price: 3800
    },
    {
        id: 'bvep12',
        title: 'Отель Усадьба Державина',
        details: 'Прекрасный отель недалеко от Исаакиевского собора с бесплатным Wi-Fi на всей территории.',
        photos: ['bvep12.png', 'bvep12.png'],
        coordinates: [59.9194966, 30.309389],
        bookedDates: [],
        price: 8700
    }
];
export function cloneDate(date) {
    return new Date(date.getTime());
}
export function addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
}
export const backendPort = 3040;
export const localStorageKey = 'flat-rent-db';
export class FlatRentSdk {
    constructor() {
        this._generateTransactionId = () => {
            const min = 1000;
            const max = 9999;
            const num = Math.random() * (max - min) + min;
            return Math.floor(num);
        };
        if (this._readDatabase() == null) {
            this._writeDatabase(database);
        }
        this.database = this._readDatabase();
    }
    /**
     * Get flat by ID.
     *
     * @param {string} id Flat ID.
     * @returns {Promise<Object|null>} Flat.
     */
    get(id) {
        const flat = this.database.find((item) => {
            return item.id === id;
        });
        return Promise.resolve(flat == null ? flat : this._formatFlatObject(flat));
    }
    /**
     * Search for flats.
     *
     * @param {Object} parameters Search parameters
     * @param {string}parameters.city City name
     * @param {Date} parameters.checkInDate Check-in date
     * @param {Date} parameters.checkOutDate Check-out date
     * @param {number} [parameters.priceLimit] Max price for a night
     * @returns {Object[]} List of suitable flats.
     */
    search(parameters) {
        return new Promise((resolve, reject) => {
            try {
                if (parameters.city != 'Санкт-Петербург') {
                    throw new Error(`Passed unsupported city - "${parameters.city}".`);
                }
                if (!(parameters.checkInDate instanceof Date) || !(parameters.checkOutDate instanceof Date)) {
                    throw new Error(`Passed invalid check-in or check-out date - from "${parameters.checkInDate}" to "${parameters.checkOutDate}".`);
                }
                this._assertDatesAreCorrect(parameters.checkInDate, parameters.checkOutDate);
                if (parameters.priceLimit != null && (isNaN(parameters.priceLimit) || !isFinite(parameters.priceLimit))) {
                    throw new Error(`Passed invalid price limit - "${parameters.priceLimit}".`);
                }
                let flats = this.database;
                if (parameters.priceLimit != null) {
                    flats = flats.filter((flat) => {
                        return flat.price <= parameters.priceLimit;
                    });
                }
                const dateRange = this._generateDateRange(parameters.checkInDate, parameters.checkOutDate);
                flats = flats.filter((flat) => {
                    return this._areAllDatesAvailable(flat, dateRange);
                });
                flats = flats.map((flat) => {
                    return this._formatFlatObject(flat, dateRange.length - 1);
                });
                resolve(flats);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Book flat.
     *
     * @param {number} flatId
     * @param {Date} checkInDate
     * @param {Date} checkOutDate
     * @returns {number}
     */
    book(flatId, checkInDate, checkOutDate) {
        return new Promise((resolve, reject) => {
            try {
                const flat = this.database.find((item) => {
                    return item.id === flatId;
                });
                if (flat == null) {
                    throw new Error('There is no flat with ID "' + flatId + '".');
                }
                this._assertDatesAreCorrect(checkInDate, checkOutDate);
                const datesToBook = this._generateDateRange(checkInDate, checkOutDate);
                if (!this._areAllDatesAvailable(flat, datesToBook)) {
                    throw new Error(`Flat ${flat.id} is not available for dates ${datesToBook.join(",")}.`);
                }
                const bookedDates = datesToBook.map((date) => {
                    return date.getTime();
                });
                flat.bookedDates.push(...bookedDates);
                for (let i = 0; i < this.database.length; i++) {
                    if (this.database[i].id === flat.id) {
                        this.database[i] = flat;
                        break;
                    }
                }
                this._writeDatabase(this.database);
                resolve(this._generateTransactionId());
            }
            catch (error) {
                reject(error);
            }
        });
    }
    _assertDatesAreCorrect(checkInDate, checkOutDate) {
        const today = new Date();
        this._resetTime(today);
        this._resetTime(checkInDate);
        this._resetTime(checkOutDate);
        const diffToday = this._calculateDifferenceInDays(today, checkInDate);
        if (diffToday < 0) {
            throw new Error('Check-in date can\'t be in the past.');
        }
        const diffCheck = this._calculateDifferenceInDays(checkInDate, checkOutDate);
        if (diffCheck < 0) {
            throw new Error('Check-out date must be grater then check-in date.');
        }
    }
    _resetTime(date) {
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
    }
    _calculateDifferenceInDays(startDate, endDate) {
        const difference = endDate.getTime() - startDate.getTime();
        return Math.floor(difference / (1000 * 60 * 60 * 24));
    }
    _generateDateRange(from, to) {
        const dates = [];
        const differenceInDays = this._calculateDifferenceInDays(from, to);
        dates.push(new Date(from.getFullYear(), from.getMonth(), from.getDate()));
        for (let i = 1; i <= differenceInDays; i++) {
            dates.push(new Date(from.getFullYear(), from.getMonth(), from.getDate() + i));
        }
        return dates;
    }
    _areAllDatesAvailable(flat, dateRange) {
        return dateRange.every((date) => {
            return !flat.bookedDates.includes(date.getTime());
        });
    }
    _formatFlatObject(flat, nightNumber) {
        const formattedFlat = Object.assign({}, flat);
        formattedFlat.photos = formattedFlat.photos.map((photoUrl) => {
            return `http://localhost:${backendPort}/img/${photoUrl}`;
        });
        if (nightNumber != null) {
            formattedFlat.totalPrice = nightNumber * formattedFlat.price;
            delete formattedFlat.price;
        }
        return formattedFlat;
    }
    _readDatabase() {
        const data = window.localStorage.getItem(localStorageKey);
        if (data == null) {
            return data;
        }
        return JSON.parse(data);
    }
    _writeDatabase(database) {
        window.localStorage.setItem(localStorageKey, JSON.stringify(database));
    }
    _syncDatabase(database) {
        this._writeDatabase(database);
        this.database = this._readDatabase();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdC1yZW50LXNkay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9mbGF0LXJlbnQtc2RrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sUUFBUSxHQUFHO0lBQ2Y7UUFDRSxFQUFFLEVBQUUsUUFBUTtRQUNaLEtBQUssRUFBRSxzQkFBc0I7UUFDN0IsT0FBTyxFQUFFLGdKQUFnSjtRQUN6SixNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO1FBQ3BDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7UUFDckMsV0FBVyxFQUFFLEVBQUU7UUFDZixLQUFLLEVBQUUsS0FBSztLQUNiO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsT0FBTztRQUNYLEtBQUssRUFBRSxtQkFBbUI7UUFDMUIsT0FBTyxFQUFFLDZIQUE2SDtRQUN0SSxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO1FBQ2xDLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7UUFDcEMsV0FBVyxFQUFFLEVBQUU7UUFDZixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsUUFBUTtRQUNaLEtBQUssRUFBRSwyQkFBMkI7UUFDbEMsT0FBTyxFQUFFLDJJQUEySTtRQUNwSixNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO1FBQ3BDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7UUFDckMsV0FBVyxFQUFFLEVBQUU7UUFDZixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsUUFBUTtRQUNaLEtBQUssRUFBRSx5QkFBeUI7UUFDaEMsT0FBTyxFQUFFLDBGQUEwRjtRQUNuRyxNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO1FBQ3BDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUM7UUFDcEMsV0FBVyxFQUFFLEVB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QUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFN0MsYUFBYSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzNELE9BQU8sb0JBQW9CLFdBQVcsUUFBUSxRQUFRLEVBQUUsQ0FBQTtRQUMxRCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksV0FBVyxJQUFJLElBQUksRUFBRTtZQUN2QixhQUFhLENBQUMsVUFBVSxHQUFHLFdBQVcsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFBO1lBQzVELE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQTtTQUMzQjtRQUVELE9BQU8sYUFBYSxDQUFBO0lBQ3RCLENBQUM7SUFFRCxhQUFhO1FBQ1gsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUE7UUFFekQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFBO1NBQ1o7UUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUFRO1FBQ3JCLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDeEUsQ0FBQztJQUVELGFBQWEsQ0FBQyxRQUFRO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDdEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IGRhdGFiYXNlID0gW1xuICB7XG4gICAgaWQ6ICd2bmQzMzEnLFxuICAgIHRpdGxlOiAnUmFkaXNzb24gUm95YWwgSG90ZWwnLFxuICAgIGRldGFpbHM6ICfQntGC0LXQu9GMINGA0LDRgdC/0L7Qu9C+0LbQtdC9INCyIDQg0LzQuNC90YPRgtCw0YUg0YXQvtC00YzQsdGLINC+0YIg0YHRgtCw0L3RhtC40Lgg0LzQtdGC0YDQviDCq9Cc0LDRj9C60L7QstGB0LrQsNGPwrsuINCaINGD0YHQu9GD0LPQsNC8INCz0L7RgdGC0LXQuSDRhNC40YLQvdC10YEt0YbQtdC90YLRgCDQuCDRgdC/0LAt0YbQtdC90YLRgCDRgSDRgdCw0YPQvdC+0Lkg0Lgg0LPQuNC00YDQvtC80LDRgdGB0LDQttC90L7QuSDQstCw0L3QvdC+0LkuJyxcbiAgICBwaG90b3M6IFsndm5kMzMxLnBuZycsICd2bmQzMzEucG5nJ10sXG4gICAgY29vcmRpbmF0ZXM6IFs1OS45MzIyOTM2LCAzMC4zNDYwMTI5XSxcbiAgICBib29rZWREYXRlczogW10sXG4gICAgcHJpY2U6IDEyMDAwXG4gIH0sXG4gIHtcbiAgICBpZDogJ2FiMmUyJyxcbiAgICB0aXRsZTogJ9Cd0L7QvNC10YDQsCDQvdCwINCh0LDQtNC+0LLQvtC5JyxcbiAgICBkZXRhaWxzOiAn0KDQsNGB0L/QvtC70L7QttC10L0g0LIgNyDQvNC40L3Rg9GC0LDRhSDRhdC+0LTRjNCx0Ysg0L7RgiDQndC10LLRgdC60L7Qs9C+INC/0YDQvtGB0L/QtdC60YLQsC4g0Jog0YPRgdC70YPQs9Cw0Lwg0LPQvtGB0YLQtdC5INC60YDRg9Cz0LvQvtGB0YPRgtC+0YfQvdCw0Y8g0YHRgtC+0LnQutCwINGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0Lgg0LHQtdGB0L/Qu9Cw0YLQvdGL0LkgV2ktRmkuJyxcbiAgICBwaG90b3M6IFsnYWIyZTIucG5nJywgJ2FiMmUyLnBuZyddLFxuICAgIGNvb3JkaW5hdGVzOiBbNTkuOTMwMzI1LCAzMC4zMjkxNTkyXSxcbiAgICBib29rZWREYXRlczogW10sXG4gICAgcHJpY2U6IDQ1MDBcbiAgfSxcbiAge1xuICAgIGlkOiAnbXZtMzJsJyxcbiAgICB0aXRsZTogJ9Cc0LjQvdC4INCe0YLQtdC70Ywg0L3QsCDQndC10LLRgdC60L7QvCAxMzYnLFxuICAgIGRldGFpbHM6ICfQnNC40L3QuC3QvtGC0LXQu9GMINGA0LDRgdC/0L7Qu9C+0LbQtdC9INCyINCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCz0LUsINCyIDUg0LzQuNC90YPRgtCw0YUg0YXQvtC00YzQsdGLINC+0YIg0YHRgtCw0L3RhtC40Lgg0LzQtdGC0YDQviDCq9Cf0LvQvtGJ0LDQtNGMINCS0L7RgdGB0YLQsNC90LjRj8K7INC4INCc0L7RgdC60L7QstGB0LrQvtCz0L4g0LbQtdC70LXQt9C90L7QtNC+0YDQvtC20L3QvtCz0L4g0LLQvtC60LfQsNC70LAuJyxcbiAgICBwaG90b3M6IFsnbXZtMzJsLnBuZycsICdtdm0zMmwucG5nJ10sXG4gICAgY29vcmRpbmF0ZXM6IFs1OS45Mjk5NjAzLCAzMC4zNjU4OTMyXSxcbiAgICBib29rZWREYXRlczogW10sXG4gICAgcHJpY2U6IDM4MDBcbiAgfSxcbiAge1xuICAgIGlkOiAnYnZlcDEyJyxcbiAgICB0aXRsZTogJ9Ce0YLQtdC70Ywg0KPRgdCw0LTRjNCx0LAg0JTQtdGA0LbQsNCy0LjQvdCwJyxcbiAgICBkZXRhaWxzOiAn0J/RgNC10LrRgNCw0YHQvdGL0Lkg0L7RgtC10LvRjCDQvdC10LTQsNC70LXQutC+INC+0YIg0JjRgdCw0LDQutC40LXQstGB0LrQvtCz0L4g0YHQvtCx0L7RgNCwINGBINCx0LXRgdC/0LvQsNGC0L3Ri9C8IFdpLUZpINC90LAg0LLRgdC10Lkg0YLQtdGA0YDQuNGC0L7RgNC40LguJyxcbiAgICBwaG90b3M6IFsnYnZlcDEyLnBuZycsICdidmVwMTIucG5nJ10sXG4gICAgY29vcmRpbmF0ZXM6IFs1OS45MTk0OTY2LCAzMC4zMDkzODldLFxuICAgIGJvb2tlZERhdGVzOiBbXSxcbiAgICBwcmljZTogODcwMFxuICB9XG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZURhdGUoZGF0ZSkge1xuICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGRheXMpIHtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGF5cylcbiAgcmV0dXJuIGRhdGVcbn1cblxuZXhwb3J0IGNvbnN0IGJhY2tlbmRQb3J0ID0gMzA0MFxuZXhwb3J0IGNvbnN0IGxvY2FsU3RvcmFnZUtleSA9ICdmbGF0LXJlbnQtZGInXG5cbmV4cG9ydCBjbGFzcyBGbGF0UmVudFNkayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICh0aGlzLl9yZWFkRGF0YWJhc2UoKSA9PSBudWxsKSB7XG4gICAgICB0aGlzLl93cml0ZURhdGFiYXNlKGRhdGFiYXNlKVxuICAgIH1cblxuICAgIHRoaXMuZGF0YWJhc2UgPSB0aGlzLl9yZWFkRGF0YWJhc2UoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBmbGF0IGJ5IElELlxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEZsYXQgSUQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdHxudWxsPn0gRmxhdC5cbiAgICovXG4gIGdldChpZCkge1xuICAgIGNvbnN0IGZsYXQgPSB0aGlzLmRhdGFiYXNlLmZpbmQoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBpdGVtLmlkID09PSBpZFxuICAgIH0pXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZsYXQgPT0gbnVsbCA/IGZsYXQgOiB0aGlzLl9mb3JtYXRGbGF0T2JqZWN0KGZsYXQpKVxuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBmb3IgZmxhdHMuXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVycyBTZWFyY2ggcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0ge3N0cmluZ31wYXJhbWV0ZXJzLmNpdHkgQ2l0eSBuYW1lXG4gICAqIEBwYXJhbSB7RGF0ZX0gcGFyYW1ldGVycy5jaGVja0luRGF0ZSBDaGVjay1pbiBkYXRlXG4gICAqIEBwYXJhbSB7RGF0ZX0gcGFyYW1ldGVycy5jaGVja091dERhdGUgQ2hlY2stb3V0IGRhdGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwYXJhbWV0ZXJzLnByaWNlTGltaXRdIE1heCBwcmljZSBmb3IgYSBuaWdodFxuICAgKiBAcmV0dXJucyB7T2JqZWN0W119IExpc3Qgb2Ygc3VpdGFibGUgZmxhdHMuXG4gICAqL1xuICBzZWFyY2gocGFyYW1ldGVycykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAocGFyYW1ldGVycy5jaXR5ICE9ICfQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsycpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhc3NlZCB1bnN1cHBvcnRlZCBjaXR5IC0gXCIke3BhcmFtZXRlcnMuY2l0eX1cIi5gKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEocGFyYW1ldGVycy5jaGVja0luRGF0ZSBpbnN0YW5jZW9mIERhdGUpIHx8ICEocGFyYW1ldGVycy5jaGVja091dERhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUGFzc2VkIGludmFsaWQgY2hlY2staW4gb3IgY2hlY2stb3V0IGRhdGUgLSBmcm9tIFwiJHtwYXJhbWV0ZXJzLmNoZWNrSW5EYXRlfVwiIHRvIFwiJHtwYXJhbWV0ZXJzLmNoZWNrT3V0RGF0ZX1cIi5gKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Fzc2VydERhdGVzQXJlQ29ycmVjdChwYXJhbWV0ZXJzLmNoZWNrSW5EYXRlLCBwYXJhbWV0ZXJzLmNoZWNrT3V0RGF0ZSlcblxuICAgICAgICBpZiAocGFyYW1ldGVycy5wcmljZUxpbWl0ICE9IG51bGwgJiYgKGlzTmFOKHBhcmFtZXRlcnMucHJpY2VMaW1pdCkgfHwgIWlzRmluaXRlKHBhcmFtZXRlcnMucHJpY2VMaW1pdCkpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXNzZWQgaW52YWxpZCBwcmljZSBsaW1pdCAtIFwiJHtwYXJhbWV0ZXJzLnByaWNlTGltaXR9XCIuYClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmbGF0cyA9IHRoaXMuZGF0YWJhc2VcblxuICAgICAgICBpZiAocGFyYW1ldGVycy5wcmljZUxpbWl0ICE9IG51bGwpIHtcbiAgICAgICAgICBmbGF0cyA9IGZsYXRzLmZpbHRlcigoZmxhdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZsYXQucHJpY2UgPD0gcGFyYW1ldGVycy5wcmljZUxpbWl0XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGVSYW5nZSA9IHRoaXMuX2dlbmVyYXRlRGF0ZVJhbmdlKHBhcmFtZXRlcnMuY2hlY2tJbkRhdGUsIHBhcmFtZXRlcnMuY2hlY2tPdXREYXRlKVxuICAgICAgICBmbGF0cyA9IGZsYXRzLmZpbHRlcigoZmxhdCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9hcmVBbGxEYXRlc0F2YWlsYWJsZShmbGF0LCBkYXRlUmFuZ2UpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZmxhdHMgPSBmbGF0cy5tYXAoKGZsYXQpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0RmxhdE9iamVjdChmbGF0LCBkYXRlUmFuZ2UubGVuZ3RoIC0gMSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXNvbHZlKGZsYXRzKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQm9vayBmbGF0LlxuICAgKiBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZsYXRJZCBcbiAgICogQHBhcmFtIHtEYXRlfSBjaGVja0luRGF0ZSBcbiAgICogQHBhcmFtIHtEYXRlfSBjaGVja091dERhdGVcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGJvb2soZmxhdElkLCBjaGVja0luRGF0ZSwgY2hlY2tPdXREYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZsYXQgPSB0aGlzLmRhdGFiYXNlLmZpbmQoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PT0gZmxhdElkXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGZsYXQgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgaXMgbm8gZmxhdCB3aXRoIElEIFwiJyArIGZsYXRJZCArICdcIi4nKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Fzc2VydERhdGVzQXJlQ29ycmVjdChjaGVja0luRGF0ZSwgY2hlY2tPdXREYXRlKVxuXG4gICAgICAgIGNvbnN0IGRhdGVzVG9Cb29rID0gdGhpcy5fZ2VuZXJhdGVEYXRlUmFuZ2UoY2hlY2tJbkRhdGUsIGNoZWNrT3V0RGF0ZSlcbiAgICAgICAgaWYgKCF0aGlzLl9hcmVBbGxEYXRlc0F2YWlsYWJsZShmbGF0LCBkYXRlc1RvQm9vaykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZsYXQgJHtmbGF0LmlkfSBpcyBub3QgYXZhaWxhYmxlIGZvciBkYXRlcyAke2RhdGVzVG9Cb29rLmpvaW4oXCIsXCIpfS5gKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm9va2VkRGF0ZXMgPSBkYXRlc1RvQm9vay5tYXAoKGRhdGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRUaW1lKClcbiAgICAgICAgfSlcbiAgICAgICAgZmxhdC5ib29rZWREYXRlcy5wdXNoKC4uLmJvb2tlZERhdGVzKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YWJhc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5kYXRhYmFzZVtpXS5pZCA9PT0gZmxhdC5pZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZVtpXSA9IGZsYXRcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3dyaXRlRGF0YWJhc2UodGhpcy5kYXRhYmFzZSlcblxuICAgICAgICByZXNvbHZlKHRoaXMuX2dlbmVyYXRlVHJhbnNhY3Rpb25JZCgpKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfYXNzZXJ0RGF0ZXNBcmVDb3JyZWN0KGNoZWNrSW5EYXRlLCBjaGVja091dERhdGUpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICB0aGlzLl9yZXNldFRpbWUodG9kYXkpXG4gICAgdGhpcy5fcmVzZXRUaW1lKGNoZWNrSW5EYXRlKVxuICAgIHRoaXMuX3Jlc2V0VGltZShjaGVja091dERhdGUpXG5cbiAgICBjb25zdCBkaWZmVG9kYXkgPSB0aGlzLl9jYWxjdWxhdGVEaWZmZXJlbmNlSW5EYXlzKHRvZGF5LCBjaGVja0luRGF0ZSlcbiAgICBpZiAoZGlmZlRvZGF5IDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGVjay1pbiBkYXRlIGNhblxcJ3QgYmUgaW4gdGhlIHBhc3QuJylcbiAgICB9XG5cbiAgICBjb25zdCBkaWZmQ2hlY2sgPSB0aGlzLl9jYWxjdWxhdGVEaWZmZXJlbmNlSW5EYXlzKGNoZWNrSW5EYXRlLCBjaGVja091dERhdGUpXG4gICAgaWYgKGRpZmZDaGVjayA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2hlY2stb3V0IGRhdGUgbXVzdCBiZSBncmF0ZXIgdGhlbiBjaGVjay1pbiBkYXRlLicpXG4gICAgfVxuICB9XG5cbiAgX3Jlc2V0VGltZShkYXRlKSB7XG4gICAgZGF0ZS5zZXRIb3VycygwKVxuICAgIGRhdGUuc2V0TWludXRlcygwKVxuICAgIGRhdGUuc2V0U2Vjb25kcygwKVxuICAgIGRhdGUuc2V0TWlsbGlzZWNvbmRzKDApXG4gIH1cblxuICBfY2FsY3VsYXRlRGlmZmVyZW5jZUluRGF5cyhzdGFydERhdGUsIGVuZERhdGUpIHtcbiAgICBjb25zdCBkaWZmZXJlbmNlID0gZW5kRGF0ZS5nZXRUaW1lKCkgLSBzdGFydERhdGUuZ2V0VGltZSgpXG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKVxuICB9XG5cbiAgX2dlbmVyYXRlRGF0ZVJhbmdlKGZyb20sIHRvKSB7XG4gICAgY29uc3QgZGF0ZXMgPSBbXVxuICAgIGNvbnN0IGRpZmZlcmVuY2VJbkRheXMgPSB0aGlzLl9jYWxjdWxhdGVEaWZmZXJlbmNlSW5EYXlzKGZyb20sIHRvKVxuXG4gICAgZGF0ZXMucHVzaChuZXcgRGF0ZShmcm9tLmdldEZ1bGxZZWFyKCksIGZyb20uZ2V0TW9udGgoKSwgZnJvbS5nZXREYXRlKCkpKVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRpZmZlcmVuY2VJbkRheXM7IGkrKykge1xuICAgICAgZGF0ZXMucHVzaChuZXcgRGF0ZShmcm9tLmdldEZ1bGxZZWFyKCksIGZyb20uZ2V0TW9udGgoKSwgZnJvbS5nZXREYXRlKCkgKyBpKSlcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZXNcbiAgfVxuXG4gIF9nZW5lcmF0ZVRyYW5zYWN0aW9uSWQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWluID0gMTAwMFxuICAgIGNvbnN0IG1heCA9IDk5OTlcbiAgICBjb25zdCBudW0gPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW5cblxuICAgIHJldHVybiBNYXRoLmZsb29yKG51bSlcbiAgfVxuXG4gIF9hcmVBbGxEYXRlc0F2YWlsYWJsZShmbGF0LCBkYXRlUmFuZ2UpIHtcbiAgICByZXR1cm4gZGF0ZVJhbmdlLmV2ZXJ5KChkYXRlKSA9PiB7XG4gICAgICByZXR1cm4gIWZsYXQuYm9va2VkRGF0ZXMuaW5jbHVkZXMoZGF0ZS5nZXRUaW1lKCkpXG4gICAgfSlcbiAgfVxuXG4gIF9mb3JtYXRGbGF0T2JqZWN0KGZsYXQsIG5pZ2h0TnVtYmVyKSB7XG4gICAgY29uc3QgZm9ybWF0dGVkRmxhdCA9IE9iamVjdC5hc3NpZ24oe30sIGZsYXQpXG5cbiAgICBmb3JtYXR0ZWRGbGF0LnBob3RvcyA9IGZvcm1hdHRlZEZsYXQucGhvdG9zLm1hcCgocGhvdG9VcmwpID0+IHtcbiAgICAgIHJldHVybiBgaHR0cDovL2xvY2FsaG9zdDoke2JhY2tlbmRQb3J0fS9pbWcvJHtwaG90b1VybH1gXG4gICAgfSlcblxuICAgIGlmIChuaWdodE51bWJlciAhPSBudWxsKSB7XG4gICAgICBmb3JtYXR0ZWRGbGF0LnRvdGFsUHJpY2UgPSBuaWdodE51bWJlciAqIGZvcm1hdHRlZEZsYXQucHJpY2VcbiAgICAgIGRlbGV0ZSBmb3JtYXR0ZWRGbGF0LnByaWNlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdHRlZEZsYXRcbiAgfVxuXG4gIF9yZWFkRGF0YWJhc2UoKSB7XG4gICAgY29uc3QgZGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VLZXkpXG5cbiAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpXG4gIH1cblxuICBfd3JpdGVEYXRhYmFzZShkYXRhYmFzZSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KGRhdGFiYXNlKSlcbiAgfVxuXG4gIF9zeW5jRGF0YWJhc2UoZGF0YWJhc2UpIHtcbiAgICB0aGlzLl93cml0ZURhdGFiYXNlKGRhdGFiYXNlKVxuICAgIHRoaXMuZGF0YWJhc2UgPSB0aGlzLl9yZWFkRGF0YWJhc2UoKVxuICB9XG59XG4iXX0=