import { localStoragee } from './localStorage.js';
export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    element.innerHTML = html;
}
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
    if ('user' in localStoragee) {
        return localStoragee.user;
    }
    return null;
}
export function getFavoritesAmount(favoritesAmount) {
    if (favoritesAmount == null) {
        return null;
    }
    if (`favoritesAmount` in localStoragee) {
        return localStoragee.favoritesAmount;
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFakQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxTQUFpQixFQUFFLElBQVk7SUFDekQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNsRCxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtBQUMxQixDQUFDO0FBWUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxPQUEwQixFQUFFLE1BQTBCO0lBQ2hGLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQTtJQUVwQixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7UUFDbkIsV0FBVyxHQUFHOytDQUM2QixPQUFPLENBQUMsSUFBSTthQUM5QyxPQUFPLENBQUMsSUFBSTt5Q0FDZ0IsQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsSUFBSSxLQUFJLFNBQVM7O0tBRTdELENBQUE7S0FDRjtJQUVELFdBQVcsQ0FDVCxhQUFhLEVBQ2IsV0FBVyxDQUNaLENBQUE7SUFFRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFDM0QsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7WUFDZixJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQzVDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTthQUNqQjtZQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQixDQUFDLENBQUE7S0FDRjtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQWM7SUFDeEMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFBO0tBQ1o7SUFFRCxJQUFJLE1BQU0sSUFBSSxhQUFhLEVBQUU7UUFDM0IsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDO0tBQzNCO0lBRUQsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDO0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLGVBQXdCO0lBQ3pELElBQUksZUFBZSxJQUFJLElBQUksRUFBRTtRQUMzQixPQUFPLElBQUksQ0FBQTtLQUNaO0lBRUQsSUFBSSxpQkFBaUIsSUFBSSxhQUFhLEVBQUU7UUFDdEMsT0FBTyxhQUFhLENBQUMsZUFBZSxDQUFDO0tBQ3RDO0lBRUQsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9jYWxTdG9yYWdlZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQmxvY2soZWxlbWVudElkOiBzdHJpbmcsIGh0bWw6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKVxuICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWxcbn1cblxuaW50ZXJmYWNlIEFuc3dlclJlbmRlclRvYXN0IHtcbiAgdGV4dDogc3RyaW5nLFxuICB0eXBlOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIEFjdGlvblJlbmRlclRvYXN0IHtcbiAgbmFtZTogc3RyaW5nLFxuICBoYW5kbGVyOiBGdW5jdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9hc3QobWVzc2FnZTogQW5zd2VyUmVuZGVyVG9hc3QsIGFjdGlvbj86IEFjdGlvblJlbmRlclRvYXN0KTogdm9pZCB7XG4gIGxldCBtZXNzYWdlVGV4dCA9ICcnXG5cbiAgaWYgKG1lc3NhZ2UgIT0gbnVsbCkge1xuICAgIG1lc3NhZ2VUZXh0ID0gYFxuICAgICAgPGRpdiBpZD1cImluZm8tYmxvY2tcIiBjbGFzcz1cImluZm8tYmxvY2sgJHttZXNzYWdlLnR5cGV9XCI+XG4gICAgICAgIDxwPiR7bWVzc2FnZS50ZXh0fTwvcD5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInRvYXN0LW1haW4tYWN0aW9uXCI+JHthY3Rpb24/Lm5hbWUgfHwgJ9CX0LDQutGA0YvRgtGMJ308L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGBcbiAgfVxuXG4gIHJlbmRlckJsb2NrKFxuICAgICd0b2FzdC1ibG9jaycsXG4gICAgbWVzc2FnZVRleHRcbiAgKVxuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2FzdC1tYWluLWFjdGlvbicpXG4gIGlmIChidXR0b24gIT0gbnVsbCkge1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGFjdGlvbiAhPSBudWxsICYmIGFjdGlvbi5oYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgYWN0aW9uLmhhbmRsZXIoKVxuICAgICAgfVxuICAgICAgcmVuZGVyVG9hc3QobnVsbClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJEYXRhKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB8IHsgdXNlcm5hbWU6IHN0cmluZywgYXZhdGFyVXJsOiBzdHJpbmcgfSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmICgndXNlcicgaW4gbG9jYWxTdG9yYWdlZSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VlLnVzZXI7XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmF2b3JpdGVzQW1vdW50KGZhdm9yaXRlc0Ftb3VudDogdW5rbm93bik6IG51bWJlciB8IGJvb2xlYW4ge1xuICBpZiAoZmF2b3JpdGVzQW1vdW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKGBmYXZvcml0ZXNBbW91bnRgIGluIGxvY2FsU3RvcmFnZWUpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlZS5mYXZvcml0ZXNBbW91bnQ7XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuIl19