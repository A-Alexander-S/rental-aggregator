import { renderBlock } from './lib.js';
import { renderToast } from './lib.js';
export function renderSearchFormBlock(dateArrival, dateOfDeparture) {
    let defaultDateArrival = String(new Date().getFullYear()) + '-' + String(new Date().getMonth()) + '-' + String(new Date().getDate() + 1);
    console.log(defaultDateArrival);
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
            <input id="check-in-date" type="date" value=${defaultDateArrival} min=${defaultDateArrival} max="2021-06-30" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${defaultDateOfDeparture} min=${defaultDateOfDeparture} max="2021-06-30" name="checkout" />
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
    // if (dateArrival >= (String(new Date().getFullYear()) + '-' + String(new Date().getMonth()) + '-' + String(new Date().getDate())) && (dateArrival < (String(new Date().getFullYear()) + '-' + String(new Date().getMonth() + 1) + '-' + '28'))) {
    // } else {
    // }
    let btnSend = document.querySelector(".send");
    // console.log(btnSend)
    btnSend.addEventListener('click', () => {
        let checkInDateSend = document.querySelector("#check-in-date");
        let checkOutDate = document.querySelector("#check-out-date");
        console.log(checkInDateSend.value);
        console.log(checkOutDate.value);
        console.log(new Date(checkInDateSend.value) == new Date(checkOutDate.value));
        console.log(new Date(checkInDateSend.value) > new Date(checkOutDate.value));
        console.log(new Date(checkInDateSend.value) < new Date(checkOutDate.value));
        // console.log(btncheckInDateSend.value < checkOutDate.value)
        // renderSearchFormBlock()
        if (new Date(checkInDateSend.value) >= new Date(checkOutDate.value)) {
            console.log("ok");
        }
        else {
            renderToast({ text: 'Минимальная дата въезда, которую можно выбрать это дата сегодняшнего дня, а максимальная дата - последний день следующего месяца.', type: 'success' }, { name: 'Понял', handler: () => { console.log('Уведомление закрыто'); } });
        }
    });
}
