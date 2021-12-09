import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { getTodosByCount } from './lib.js';
window.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('user', JSON.stringify({
        username: "Wade Warren",
        avatarUrl: "./img/avatar.png"
    }));
    localStorage.setItem('favoritesAmount', '10');
    console.log(localStorage.getItem('user'));
    renderUserBlock(JSON.parse(localStorage.getItem('user')).username, JSON.parse(localStorage.getItem('user')).avatarUrl, +localStorage.getItem('favoritesAmount'));
    renderSearchFormBlock();
    renderSearchStubBlock();
    // renderToast(
    //   { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    //   { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
    // )
    getTodosByCount(2);
    // renderBlock(
    //   'search-results-block',
    //   `<div class="figure">
    //     <div class="rectangle" style="width:60px;height:20px; background:red;"><div/>
    //   <div/>`
    // )
    // document.querySelector('.rectangle').addEventListener('click', () => {
    //   document.querySelector('.rectangle').style.marginLeft = `40px`;
    //   console.log(parseInt(document.querySelector('.rectangle').style.marginLeft))
    // })
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUczQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBRTFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDL0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDYixRQUFRLEVBQUUsYUFBYTtRQUN2QixTQUFTLEVBQUUsa0JBQWtCO0tBQzlCLENBQUMsQ0FBQyxDQUFBO0lBRUwsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUV6QyxlQUFlLENBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUMsUUFBUSxFQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQyxTQUFTLEVBQ25ELENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBRSxDQUFDLENBQUE7SUFFNUMscUJBQXFCLEVBQUUsQ0FBQTtJQUN2QixxQkFBcUIsRUFBRSxDQUFBO0lBQ3ZCLGVBQWU7SUFDZiw0RkFBNEY7SUFDNUYsNkVBQTZFO0lBQzdFLElBQUk7SUFDSixlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbEIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsb0ZBQW9GO0lBRXBGLFlBQVk7SUFDWixJQUFJO0lBQ0oseUVBQXlFO0lBQ3pFLG9FQUFvRTtJQUNwRSxpRkFBaUY7SUFDakYsS0FBSztBQUNQLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyU2VhcmNoRm9ybUJsb2NrIH0gZnJvbSAnLi9zZWFyY2gtZm9ybS5qcydcbmltcG9ydCB7IHJlbmRlclNlYXJjaFN0dWJCbG9jayB9IGZyb20gJy4vc2VhcmNoLXJlc3VsdHMuanMnXG5pbXBvcnQgeyByZW5kZXJVc2VyQmxvY2sgfSBmcm9tICcuL3VzZXIuanMnXG5pbXBvcnQgeyByZW5kZXJUb2FzdCB9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7IGdldFRvZG9zQnlDb3VudCB9IGZyb20gJy4vbGliLmpzJ1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLFxuICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHVzZXJuYW1lOiBcIldhZGUgV2FycmVuXCIsXG4gICAgICBhdmF0YXJVcmw6IFwiLi9pbWcvYXZhdGFyLnBuZ1wiXG4gICAgfSkpXG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlc0Ftb3VudCcsICcxMCcpXG4gIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXG5cbiAgcmVuZGVyVXNlckJsb2NrKFxuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSEpLnVzZXJuYW1lLFxuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSEpLmF2YXRhclVybCxcbiAgICArbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlc0Ftb3VudCcpISlcblxuICByZW5kZXJTZWFyY2hGb3JtQmxvY2soKVxuICByZW5kZXJTZWFyY2hTdHViQmxvY2soKVxuICAvLyByZW5kZXJUb2FzdChcbiAgLy8gICB7IHRleHQ6ICfQrdGC0L4g0L/RgNC40LzQtdGAINGD0LLQtdC00L7QvNC70LXQvdC40Y8uINCY0YHQv9C+0LvRjNC30YPQudGC0LUg0LXQs9C+INC/0YDQuCDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLQuCcsIHR5cGU6ICdzdWNjZXNzJyB9LFxuICAvLyAgIHsgbmFtZTogJ9Cf0L7QvdGP0LsnLCBoYW5kbGVyOiAoKSA9PiB7IGNvbnNvbGUubG9nKCfQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC30LDQutGA0YvRgtC+JykgfSB9XG4gIC8vIClcbiAgZ2V0VG9kb3NCeUNvdW50KDIpXG4gIC8vIHJlbmRlckJsb2NrKFxuICAvLyAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gIC8vICAgYDxkaXYgY2xhc3M9XCJmaWd1cmVcIj5cbiAgLy8gICAgIDxkaXYgY2xhc3M9XCJyZWN0YW5nbGVcIiBzdHlsZT1cIndpZHRoOjYwcHg7aGVpZ2h0OjIwcHg7IGJhY2tncm91bmQ6cmVkO1wiPjxkaXYvPlxuXG4gIC8vICAgPGRpdi8+YFxuICAvLyApXG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWN0YW5nbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjdGFuZ2xlJykuc3R5bGUubWFyZ2luTGVmdCA9IGA0MHB4YDtcbiAgLy8gICBjb25zb2xlLmxvZyhwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjdGFuZ2xlJykuc3R5bGUubWFyZ2luTGVmdCkpXG4gIC8vIH0pXG59KVxuIl19