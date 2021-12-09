import { renderBlock } from './lib.js';
import { renderToast } from './lib.js';
export function renderSearchFormBlock(dateArrival, dateOfDeparture) {
    var _a;
    /**
   * @param year {number} - настоящий год
   * @param month {number} - месяц
   * @returns {number} - дата последнего дня в переданном месяце месяце
   */
    // Функция возвращает последнее число переданного месяца переданного года
    function getLastDayOfMonth(year, month) {
        let date = new Date(year, month, 0);
        return date.getDate();
    }
    // Расчет месяца, который следует за текущим
    let maxDateArrival = new Date().getMonth() <= 10 ? new Date().getMonth() + 1 : 0;
    // Дефолтная дата въезда - следующий день от текущей даты
    let defaultDateArrival = String(new Date().getFullYear()) + '-' + String(new Date().getMonth()) + '-' + String(new Date().getDate() + 1);
    let maxDefaultDateArrival = String(new Date().getFullYear()) + '-' + String(maxDateArrival) + '-' + String(getLastDayOfMonth(new Date().getFullYear(), maxDateArrival));
    // Дата выезда - плюс два дня от даты въезда
    let defaultDateOfDeparture = String(new Date().getFullYear()) + '-' + String(new Date().getMonth()) + '-' + String(new Date().getDate() + 1 + 2);
    renderBlock('search-form-block', `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${defaultDateArrival} min=${defaultDateArrival}  max=${maxDefaultDateArrival} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${defaultDateOfDeparture} min=${defaultDateOfDeparture}  name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button class="send">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
    (_a = document.querySelector(".send")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
        let checkInDate = document.querySelector("#check-in-date");
        let checkOutDate = document.querySelector("#check-out-date");
        if (new Date((checkInDate.value).slice(0, 4) + '-' + (checkInDate.value).slice(5, 7) + '-' + (checkInDate.value).slice(8)) <= new Date((checkOutDate.value).slice(0, 4) + '-' + (checkOutDate.value).slice(5, 7) + '-' + (checkOutDate.value).slice(8))) {
            console.log("ok!");
        }
        else {
            renderToast({ text: 'Минимальная дата въезда, которую можно выбрать это дата сегодняшнего дня, а максимальная дата - последний день следующего месяца.', type: 'success' }, { name: 'Понял', handler: () => { console.log('Уведомление закрыто'); } });
        }
        handlerFromFormSearch();
        e.preventDefault();
    });
}
/Функция с вероятностью 50 на 50  через 1 секундк выводит либо ошибку либо пустой массив/;
/**
 *@param error {Error} - ошибка
 *@param place {Array<T>} - пустой массив
 */
const callback = (error, place) => {
    let rand = Math.floor(0 + Math.random() * (100 + 1 - 0));
    if (rand < 50) {
        setTimeout(() => console.log(error), 1000);
    }
    else {
        setTimeout(() => console.log(rand), 1000);
    }
};
// Массив данных формы поиска
let searchData = {
    town: '',
    dateArrival: '',
    dateOfDeparture: '',
    maxPrice: 0
};
// Функция поиска
/**
 *@param town {string} - город
 *@param dateArrival {string} - дата въезда
 *@param dateOfDeparture {string} - дата выезда
 *@param maxPrice {number} - максимальная цена
 *@param callback {Callback} - функция Callback
 */
export function search(town, dateArrival, dateOfDeparture, maxPrice, callback) {
    console.log(town);
    console.log(dateArrival);
    console.log(dateOfDeparture);
    console.log(maxPrice);
    callback(new Error, []);
}
// Обработчик собирает данные введенные пользователем и передаёт их в функцию поиска
export function handlerFromFormSearch() {
    const town = document.querySelector('#city');
    const dateArrival = document.querySelector('#check-in-date');
    const dateOfDeparture = document.querySelector('#check-out-date');
    const maxPrice = document.querySelector('#max-price');
    searchData.town = town.value;
    searchData.dateArrival = dateArrival.value;
    searchData.dateOfDeparture = dateOfDeparture.value;
    searchData.maxPrice = +maxPrice.value;
    search(searchData.town, searchData.dateArrival, searchData.dateOfDeparture, searchData.maxPrice, callback);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBRXRDLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxXQUFvQixFQUFFLGVBQXdCOztJQUVsRjs7OztLQUlDO0lBQ0QseUVBQXlFO0lBQ3pFLFNBQVMsaUJBQWlCLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFDcEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsNENBQTRDO0lBQzVDLElBQUksY0FBYyxHQUFXLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXpGLHlEQUF5RDtJQUN6RCxJQUFJLGtCQUFrQixHQUFXLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pKLElBQUkscUJBQXFCLEdBQVcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEdB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QUFlLENBQUMsS0FBSyxDQUFBO0lBQ2xELFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFBO0lBRXJDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBQzVHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHsgcmVuZGVyVG9hc3QgfSBmcm9tICcuL2xpYi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayhkYXRlQXJyaXZhbD86IHN0cmluZywgZGF0ZU9mRGVwYXJ0dXJlPzogc3RyaW5nKTogdm9pZCB7XG5cbiAgLyoqXG4gKiBAcGFyYW0geWVhciB7bnVtYmVyfSAtINC90LDRgdGC0L7Rj9GJ0LjQuSDQs9C+0LRcbiAqIEBwYXJhbSBtb250aCB7bnVtYmVyfSAtINC80LXRgdGP0YZcbiAqIEByZXR1cm5zIHtudW1iZXJ9IC0g0LTQsNGC0LAg0L/QvtGB0LvQtdC00L3QtdCz0L4g0LTQvdGPINCyINC/0LXRgNC10LTQsNC90L3QvtC8INC80LXRgdGP0YbQtSDQvNC10YHRj9GG0LVcbiAqL1xuICAvLyDQpNGD0L3QutGG0LjRjyDQstC+0LfQstGA0LDRidCw0LXRgiDQv9C+0YHQu9C10LTQvdC10LUg0YfQuNGB0LvQviDQv9C10YDQtdC00LDQvdC90L7Qs9C+INC80LXRgdGP0YbQsCDQv9C10YDQtdC00LDQvdC90L7Qs9C+INCz0L7QtNCwXG4gIGZ1bmN0aW9uIGdldExhc3REYXlPZk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCk7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpO1xuICB9XG5cbiAgLy8g0KDQsNGB0YfQtdGCINC80LXRgdGP0YbQsCwg0LrQvtGC0L7RgNGL0Lkg0YHQu9C10LTRg9C10YIg0LfQsCDRgtC10LrRg9GJ0LjQvFxuICBsZXQgbWF4RGF0ZUFycml2YWw6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSA8PSAxMCA/IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEgOiAwO1xuXG4gIC8vINCU0LXRhNC+0LvRgtC90LDRjyDQtNCw0YLQsCDQstGK0LXQt9C00LAgLSDRgdC70LXQtNGD0Y7RidC40Lkg0LTQtdC90Ywg0L7RgiDRgtC10LrRg9GJ0LXQuSDQtNCw0YLRi1xuICBsZXQgZGVmYXVsdERhdGVBcnJpdmFsOiBzdHJpbmcgPSBTdHJpbmcobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKSArICctJyArIFN0cmluZyhuZXcgRGF0ZSgpLmdldE1vbnRoKCkpICsgJy0nICsgU3RyaW5nKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgMSk7XG4gIGxldCBtYXhEZWZhdWx0RGF0ZUFycml2YWw6IHN0cmluZyA9IFN0cmluZyhuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkpICsgJy0nICsgU3RyaW5nKG1heERhdGVBcnJpdmFsKSArICctJyArIFN0cmluZyhnZXRMYXN0RGF5T2ZNb250aChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIG1heERhdGVBcnJpdmFsKSk7XG5cbiAgLy8g0JTQsNGC0LAg0LLRi9C10LfQtNCwIC0g0L/Qu9GO0YEg0LTQstCwINC00L3RjyDQvtGCINC00LDRgtGLINCy0YrQtdC30LTQsFxuICBsZXQgZGVmYXVsdERhdGVPZkRlcGFydHVyZTogc3RyaW5nID0gU3RyaW5nKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSkgKyAnLScgKyBTdHJpbmcobmV3IERhdGUoKS5nZXRNb250aCgpKSArICctJyArIFN0cmluZyhuZXcgRGF0ZSgpLmdldERhdGUoKSArIDEgKyAyKTtcblxuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLWZvcm0tYmxvY2snLFxuICAgIGBcbiAgICA8Zm9ybT5cbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cInNlYXJjaC1maWxlZHNldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+0JPQvtGA0L7QtDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiBkaXNhYmxlZCB2YWx1ZT1cItCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGlzYWJsZWQgdmFsdWU9XCI1OS45Mzg2LDMwLjMxNDFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiaG9teVwiIGNoZWNrZWQgLz4gSG9teTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiZmxhdC1yZW50XCIgY2hlY2tlZCAvPiBGbGF0UmVudDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+LS0hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT0ke2RlZmF1bHREYXRlQXJyaXZhbH0gbWluPSR7ZGVmYXVsdERhdGVBcnJpdmFsfSAgbWF4PSR7bWF4RGVmYXVsdERhdGVBcnJpdmFsfSBuYW1lPVwiY2hlY2tpblwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1vdXQtZGF0ZVwiPtCU0LDRgtCwINCy0YvQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1vdXQtZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9JHtkZWZhdWx0RGF0ZU9mRGVwYXJ0dXJlfSBtaW49JHtkZWZhdWx0RGF0ZU9mRGVwYXJ0dXJlfSAgbmFtZT1cImNoZWNrb3V0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPtCc0LDQutGBLiDRhtC10L3QsCDRgdGD0YLQvtC6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm1heC1wcmljZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBuYW1lPVwicHJpY2VcIiBjbGFzcz1cIm1heC1wcmljZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+PGJ1dHRvbiBjbGFzcz1cInNlbmRcIj7QndCw0LnRgtC4PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Zvcm0+XG4gICAgYFxuICApXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZW5kXCIpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbGV0IGNoZWNrSW5EYXRlOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVjay1pbi1kYXRlXCIpITtcbiAgICBsZXQgY2hlY2tPdXREYXRlOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVjay1vdXQtZGF0ZVwiKSE7XG5cbiAgICBpZiAobmV3IERhdGUoKGNoZWNrSW5EYXRlLnZhbHVlKS5zbGljZSgwLCA0KSArICctJyArIChjaGVja0luRGF0ZS52YWx1ZSkuc2xpY2UoNSwgNykgKyAnLScgKyAoY2hlY2tJbkRhdGUudmFsdWUpLnNsaWNlKDgpKSA8PSBuZXcgRGF0ZSgoY2hlY2tPdXREYXRlLnZhbHVlKS5zbGljZSgwLCA0KSArICctJyArIChjaGVja091dERhdGUudmFsdWUpLnNsaWNlKDUsIDcpICsgJy0nICsgKGNoZWNrT3V0RGF0ZS52YWx1ZSkuc2xpY2UoOCkpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9rIVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXJUb2FzdChcbiAgICAgICAgeyB0ZXh0OiAn0JzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNCw0YLQsCDQstGK0LXQt9C00LAsINC60L7RgtC+0YDRg9GOINC80L7QttC90L4g0LLRi9Cx0YDQsNGC0Ywg0Y3RgtC+INC00LDRgtCwINGB0LXQs9C+0LTQvdGP0YjQvdC10LPQviDQtNC90Y8sINCwINC80LDQutGB0LjQvNCw0LvRjNC90LDRjyDQtNCw0YLQsCAtINC/0L7RgdC70LXQtNC90LjQuSDQtNC10L3RjCDRgdC70LXQtNGD0Y7RidC10LPQviDQvNC10YHRj9GG0LAuJywgdHlwZTogJ3N1Y2Nlc3MnIH0sXG4gICAgICAgIHsgbmFtZTogJ9Cf0L7QvdGP0LsnLCBoYW5kbGVyOiAoKSA9PiB7IGNvbnNvbGUubG9nKCfQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC30LDQutGA0YvRgtC+JykgfSB9XG4gICAgICApXG4gICAgfVxuXG4gICAgaGFuZGxlckZyb21Gb3JtU2VhcmNoKClcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9KVxuXG59XG5cbmludGVyZmFjZSBTZWFyY2hGb3JtRGF0YSB7XG4gIHRvd246IHN0cmluZyxcbiAgZGF0ZUFycml2YWw6IHN0cmluZyxcbiAgZGF0ZU9mRGVwYXJ0dXJlOiBzdHJpbmcsXG4gIG1heFByaWNlOiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIFBsYWNlIHsgfVxuXG5pbnRlcmZhY2UgQ2FsbGJhY2sge1xuICAoZXJyb3I6IEVycm9yLCBwbGFjZTogUGxhY2VbXSk6IHZvaWRcbn1cblxuL9Ck0YPQvdC60YbQuNGPINGBINCy0LXRgNC+0Y/RgtC90L7RgdGC0YzRjiA1MCDQvdCwIDUwICDRh9C10YDQtdC3IDEg0YHQtdC60YPQvdC00Log0LLRi9Cy0L7QtNC40YIg0LvQuNCx0L4g0L7RiNC40LHQutGDINC70LjQsdC+INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LIvXG4vKipcbiAqQHBhcmFtIGVycm9yIHtFcnJvcn0gLSDQvtGI0LjQsdC60LBcbiAqQHBhcmFtIHBsYWNlIHtBcnJheTxUPn0gLSDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXG4gKi9cbmNvbnN0IGNhbGxiYWNrOiBDYWxsYmFjayA9IChlcnJvcjogRXJyb3IsIHBsYWNlOiBBcnJheTxhbnk+KSA9PiB7XG4gIGxldCByYW5kID0gTWF0aC5mbG9vcigwICsgTWF0aC5yYW5kb20oKSAqICgxMDAgKyAxIC0gMCkpO1xuXG4gIGlmIChyYW5kIDwgNTApIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnNvbGUubG9nKGVycm9yKSwgMTAwMClcbiAgfSBlbHNlIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnNvbGUubG9nKHJhbmQpLCAxMDAwKVxuICB9XG59XG5cbi8vINCc0LDRgdGB0LjQsiDQtNCw0L3QvdGL0YUg0YTQvtGA0LzRiyDQv9C+0LjRgdC60LBcbmxldCBzZWFyY2hEYXRhOiBTZWFyY2hGb3JtRGF0YSA9IHtcbiAgdG93bjogJycsXG4gIGRhdGVBcnJpdmFsOiAnJyxcbiAgZGF0ZU9mRGVwYXJ0dXJlOiAnJyxcbiAgbWF4UHJpY2U6IDBcbn1cblxuLy8g0KTRg9C90LrRhtC40Y8g0L/QvtC40YHQutCwXG4vKipcbiAqQHBhcmFtIHRvd24ge3N0cmluZ30gLSDQs9C+0YDQvtC0XG4gKkBwYXJhbSBkYXRlQXJyaXZhbCB7c3RyaW5nfSAtINC00LDRgtCwINCy0YrQtdC30LTQsCBcbiAqQHBhcmFtIGRhdGVPZkRlcGFydHVyZSB7c3RyaW5nfSAtINC00LDRgtCwINCy0YvQtdC30LTQsFxuICpAcGFyYW0gbWF4UHJpY2Uge251bWJlcn0gLSDQvNCw0LrRgdC40LzQsNC70YzQvdCw0Y8g0YbQtdC90LBcbiAqQHBhcmFtIGNhbGxiYWNrIHtDYWxsYmFja30gLSDRhNGD0L3QutGG0LjRjyBDYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoKHRvd246IHN0cmluZywgZGF0ZUFycml2YWw6IHN0cmluZywgZGF0ZU9mRGVwYXJ0dXJlOiBzdHJpbmcsIG1heFByaWNlOiBudW1iZXIsIGNhbGxiYWNrOiBDYWxsYmFjayk6IHZvaWQge1xuICBjb25zb2xlLmxvZyh0b3duKVxuICBjb25zb2xlLmxvZyhkYXRlQXJyaXZhbClcbiAgY29uc29sZS5sb2coZGF0ZU9mRGVwYXJ0dXJlKVxuICBjb25zb2xlLmxvZyhtYXhQcmljZSlcblxuICBjYWxsYmFjayhuZXcgRXJyb3IsIFtdKVxufVxuXG4vLyDQntCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHQuNGA0LDQtdGCINC00LDQvdC90YvQtSDQstCy0LXQtNC10L3QvdGL0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lwg0Lgg0L/QtdGA0LXQtNCw0ZHRgiDQuNGFINCyINGE0YPQvdC60YbQuNGOINC/0L7QuNGB0LrQsFxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZXJGcm9tRm9ybVNlYXJjaCgpOiB2b2lkIHtcbiAgY29uc3QgdG93bjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5JykhXG4gIGNvbnN0IGRhdGVBcnJpdmFsOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrLWluLWRhdGUnKSFcbiAgY29uc3QgZGF0ZU9mRGVwYXJ0dXJlOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrLW91dC1kYXRlJykhXG4gIGNvbnN0IG1heFByaWNlOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21heC1wcmljZScpIVxuXG4gIHNlYXJjaERhdGEudG93biA9IHRvd24udmFsdWVcbiAgc2VhcmNoRGF0YS5kYXRlQXJyaXZhbCA9IGRhdGVBcnJpdmFsLnZhbHVlXG4gIHNlYXJjaERhdGEuZGF0ZU9mRGVwYXJ0dXJlID0gZGF0ZU9mRGVwYXJ0dXJlLnZhbHVlXG4gIHNlYXJjaERhdGEubWF4UHJpY2UgPSArbWF4UHJpY2UudmFsdWVcblxuICBzZWFyY2goc2VhcmNoRGF0YS50b3duLCBzZWFyY2hEYXRhLmRhdGVBcnJpdmFsLCBzZWFyY2hEYXRhLmRhdGVPZkRlcGFydHVyZSwgc2VhcmNoRGF0YS5tYXhQcmljZSwgY2FsbGJhY2spXG59XG4iXX0=