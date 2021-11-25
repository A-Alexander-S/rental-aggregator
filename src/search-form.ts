import { renderBlock } from './lib.js'
import { renderToast } from './lib.js'

export function renderSearchFormBlock(dateArrival?: string, dateOfDeparture?: string) {

  //Функция возвращает последнее число переданного месяца переданного года
  function getLastDayOfMonth(year: number, month: number): number {
    let date = new Date(year, month, 0);
    return date.getDate();
  }
  // Расчет месяца, который следует за текущим
  let maxDateArrival: number = new Date().getMonth() <= 10 ? new Date().getMonth() + 1 : 0;

  //Дефолтная дата выезда - следующий день от текущей даты
  let defaultDateArrival: string = String(new Date().getFullYear()) + '-' + String(new Date().getMonth()) + '-' + String(new Date().getDate() + 1);
  let maxDefaultDateArrival: string = String(new Date().getFullYear()) + '-' + String(maxDateArrival) + '-' + String(getLastDayOfMonth(new Date().getFullYear(), maxDateArrival));

  //Дата выезда - плюс два дня от даты въезда
  let defaultDateOfDeparture: string = String(new Date().getFullYear()) + '-' + String(new Date().getMonth()) + '-' + String(new Date().getDate() + 1 + 2);

  renderBlock(
    'search-form-block',
    `
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
    `
  )

  document.querySelector(".send").addEventListener('click', (e) => {
    let checkInDate = document.querySelector("#check-in-date");
    let checkOutDate = document.querySelector("#check-out-date");

    if (new Date((checkInDate.value).slice(0, 4) + '-' + (checkInDate.value).slice(5, 7) + '-' + (checkInDate.value).slice(8)) <= new Date((checkOutDate.value).slice(0, 4) + '-' + (checkOutDate.value).slice(5, 7) + '-' + (checkOutDate.value).slice(8))) {
      console.log("ok!")
    } else {
      renderToast(
        { text: 'Минимальная дата въезда, которую можно выбрать это дата сегодняшнего дня, а максимальная дата - последний день следующего месяца.', type: 'success' },
        { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
      )
    }

    searchFromHandler()

    e.preventDefault()
  })
}

interface SearchFormData {
  town: string,
  dateArrival: string,
  dateOfDeparture: string,
  maxPrice: string
}

// Массив данных формы поиска
let searchData: SearchFormData = {
  town: '',
  dateArrival: '',
  dateOfDeparture: '',
  maxPrice: ''
}

// Обработчик собирает данные введенные пользователем и передаёт их в поиск
export function searchFromHandler(): void {


  searchData.town = document.querySelector('#city').value
  searchData.dateArrival = document.querySelector('#check-in-date').value
  searchData.dateOfDeparture = document.querySelector('#check-out-date').value
  searchData.maxPrice = document.querySelector('#max-price').value

  search(searchData.town, searchData.dateArrival, searchData.dateOfDeparture, searchData.maxPrice)
}

// Функция поиска
export function search(town: string, dateArrival: string, dateOfDeparture: string, maxPrice: string): void {
  console.log(town)
  console.log(dateArrival)
  console.log(dateOfDeparture)
  console.log(maxPrice)
}
