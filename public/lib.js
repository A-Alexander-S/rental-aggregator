/**
 * @param elementId {string} - id элемента
 * @param html {string} - html для вставки в верстку
 */
export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    element.innerHTML = html;
}
/**
 * @param message {AnswerRenderToast} - объект с сообщение, которое покажется пользователю
 * @param action {ActionRenderToast} - объект с методом, который выводит в консоль текст при закрытии уведомления
 */
export function renderToast(message, action) {
    let messageText = '';
    if (message != null) {
        messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${(action === null || action === void 0 ? void 0 : action.name) || 'Закрыть'}</button>
      </div>
    `;
    }
    renderBlock('toast-block', messageText);
    const button = document.getElementById('toast-main-action');
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
            renderToast(null);
        };
    }
}
export function getUserData(value) {
    if (value == null) {
        return null;
    }
    if ('user' in localStorage) {
        return localStorage["user"];
    }
    return null;
}
export function getFavoritesAmount(favoritesAmount) {
    if (favoritesAmount == null) {
        return null;
    }
    if (`favoritesAmount` in localStorage) {
        return +localStorage["favoritesAmount"];
    }
    return null;
}
/**
 * @param count {number} - количество todo, которое нужно отобразить
 */
export function getTodosByCount(count) {
    for (let i = 1; i <= count; i++) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
            .then(response => response.json())
            .then((json) => {
            if (typeof json.userId == 'number'
                && typeof json.id == 'number'
                && typeof json.title == 'string'
                && typeof json.completed == 'boolean') {
                console.log(json);
            }
            else {
                console.log('Пришли не правильные данные');
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLFNBQWlCLEVBQUUsSUFBWTtJQUN6RCxNQUFNLE9BQU8sR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMvRCxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtBQUMxQixDQUFDO0FBV0Q7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxPQUFpQyxFQUFFLE1BQWlDO0lBQzlGLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQTtJQUVwQixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7UUFDbkIsV0FBVyxHQUFHOytDQUM2QixPQUFPLENBQUMsSUFBSTthQUM5QyxPQUFPLENBQUMsSUFBSTt5Q0FDZ0IsQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsSUFBSSxLQUFJLFNBQVM7O0tBRTdELENBQUE7S0FDRjtJQUVELFdBQVcsQ0FDVCxhQUFhLEVBQ2IsV0FBVyxDQUNaLENBQUE7SUFFRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFDM0QsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7WUFDZixJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQzVDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTthQUNqQjtZQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQixDQUFDLENBQUE7S0FDRjtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQWM7SUFDeEMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFBO0tBQ1o7SUFFRCxJQUFJLE1BQU0sSUFBSSxZQUFZLEVBQUU7UUFDMUIsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDN0I7SUFFRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUM7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsZUFBd0I7SUFDekQsSUFBSSxlQUFlLElBQUksSUFBSSxFQUFFO1FBQzNCLE9BQU8sSUFBSSxDQUFBO0tBQ1o7SUFFRCxJQUFJLGlCQUFpQixJQUFJLFlBQVksRUFBRTtRQUNyQyxPQUFPLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDekM7SUFFRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUM7QUFTRDs7R0FFRztBQUNILE1BQU0sVUFBVSxlQUFlLENBQUMsS0FBYTtJQUUzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxFQUFFLENBQUM7YUFDckQsSUFBSSxDQUFRLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3hDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2IsSUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUTttQkFDM0IsT0FBTyxJQUFJLENBQUMsRUFBRSxJQUFJLFFBQVE7bUJBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRO21CQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxFQUNyQztnQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ2xCO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQTthQUMzQztRQUNILENBQUMsQ0FBQyxDQUFBO0tBQ0w7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0gZWxlbWVudElkIHtzdHJpbmd9IC0gaWQg0Y3Qu9C10LzQtdC90YLQsFxuICogQHBhcmFtIGh0bWwge3N0cmluZ30gLSBodG1sINC00LvRjyDQstGB0YLQsNCy0LrQuCDQsiDQstC10YDRgdGC0LrRg1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQmxvY2soZWxlbWVudElkOiBzdHJpbmcsIGh0bWw6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZClcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sXG59XG5cbmludGVyZmFjZSBBbnN3ZXJSZW5kZXJUb2FzdCB7XG4gIHRleHQ6IHN0cmluZyxcbiAgdHlwZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBBY3Rpb25SZW5kZXJUb2FzdCB7XG4gIG5hbWU6IHN0cmluZyxcbiAgaGFuZGxlcjogRnVuY3Rpb25cbn1cbi8qKlxuICogQHBhcmFtIG1lc3NhZ2Uge0Fuc3dlclJlbmRlclRvYXN0fSAtINC+0LHRitC10LrRgiDRgSDRgdC+0L7QsdGJ0LXQvdC40LUsINC60L7RgtC+0YDQvtC1INC/0L7QutCw0LbQtdGC0YHRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y5cbiAqIEBwYXJhbSBhY3Rpb24ge0FjdGlvblJlbmRlclRvYXN0fSAtINC+0LHRitC10LrRgiDRgSDQvNC10YLQvtC00L7QvCwg0LrQvtGC0L7RgNGL0Lkg0LLRi9Cy0L7QtNC40YIg0LIg0LrQvtC90YHQvtC70Ywg0YLQtdC60YHRgiDQv9GA0Lgg0LfQsNC60YDRi9GC0LjQuCDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb2FzdChtZXNzYWdlOiBBbnN3ZXJSZW5kZXJUb2FzdCB8IG51bGwsIGFjdGlvbj86IEFjdGlvblJlbmRlclRvYXN0IHwgbnVsbCk6IHZvaWQge1xuICBsZXQgbWVzc2FnZVRleHQgPSAnJ1xuXG4gIGlmIChtZXNzYWdlICE9IG51bGwpIHtcbiAgICBtZXNzYWdlVGV4dCA9IGBcbiAgICAgIDxkaXYgaWQ9XCJpbmZvLWJsb2NrXCIgY2xhc3M9XCJpbmZvLWJsb2NrICR7bWVzc2FnZS50eXBlfVwiPlxuICAgICAgICA8cD4ke21lc3NhZ2UudGV4dH08L3A+XG4gICAgICAgIDxidXR0b24gaWQ9XCJ0b2FzdC1tYWluLWFjdGlvblwiPiR7YWN0aW9uPy5uYW1lIHx8ICfQl9Cw0LrRgNGL0YLRjCd9PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gIH1cblxuICByZW5kZXJCbG9jayhcbiAgICAndG9hc3QtYmxvY2snLFxuICAgIG1lc3NhZ2VUZXh0XG4gIClcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3QtbWFpbi1hY3Rpb24nKVxuICBpZiAoYnV0dG9uICE9IG51bGwpIHtcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChhY3Rpb24gIT0gbnVsbCAmJiBhY3Rpb24uaGFuZGxlciAhPSBudWxsKSB7XG4gICAgICAgIGFjdGlvbi5oYW5kbGVyKClcbiAgICAgIH1cbiAgICAgIHJlbmRlclRvYXN0KG51bGwpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyRGF0YSh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4gfCBudWxsIHwgeyB1c2VybmFtZTogc3RyaW5nLCBhdmF0YXJVcmw6IHN0cmluZyB9IHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKCd1c2VyJyBpbiBsb2NhbFN0b3JhZ2UpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlW1widXNlclwiXTtcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGYXZvcml0ZXNBbW91bnQoZmF2b3JpdGVzQW1vdW50OiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmIChmYXZvcml0ZXNBbW91bnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAoYGZhdm9yaXRlc0Ftb3VudGAgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgcmV0dXJuICtsb2NhbFN0b3JhZ2VbXCJmYXZvcml0ZXNBbW91bnRcIl07XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvZG9zIHtcbiAgdXNlcklkOiBudW1iZXIsXG4gIGlkOiBudW1iZXIsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGNvbXBsZXRlZDogYm9vbGVhblxufVxuXG4vKipcbiAqIEBwYXJhbSBjb3VudCB7bnVtYmVyfSAtINC60L7Qu9C40YfQtdGB0YLQstC+IHRvZG8sINC60L7RgtC+0YDQvtC1INC90YPQttC90L4g0L7RgtC+0LHRgNCw0LfQuNGC0YxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9zQnlDb3VudChjb3VudDogbnVtYmVyKTogdm9pZCB7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gY291bnQ7IGkrKykge1xuICAgIGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvJHtpfWApXG4gICAgICAudGhlbjxUb2Rvcz4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHR5cGVvZiBqc29uLnVzZXJJZCA9PSAnbnVtYmVyJ1xuICAgICAgICAgICYmIHR5cGVvZiBqc29uLmlkID09ICdudW1iZXInXG4gICAgICAgICAgJiYgdHlwZW9mIGpzb24udGl0bGUgPT0gJ3N0cmluZydcbiAgICAgICAgICAmJiB0eXBlb2YganNvbi5jb21wbGV0ZWQgPT0gJ2Jvb2xlYW4nXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ9Cf0YDQuNGI0LvQuCDQvdC1INC/0YDQsNCy0LjQu9GM0L3Ri9C1INC00LDQvdC90YvQtScpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cbiJdfQ==