import { renderBlock } from './lib.js';
export function renderUserBlock(nameUser, linkToAvatar, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount && favoriteItemsAmount >= 0 ? favoriteItemsAmount : 'ничего нет';
    const hasFavoriteItems = favoriteItemsAmount > 0 ? true : false;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="./img/avatar.png" alt="Wade Warren" />
      <div class="info">
          <p class="name">${nameUser}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsTUFBTSxVQUFVLGVBQWUsQ0FBQyxRQUFnQixFQUFFLFlBQW9CLEVBQUUsbUJBQTJCO0lBQ2pHLE1BQU0sZ0JBQWdCLEdBQW9CLG1CQUFtQixJQUFJLG1CQUFtQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQTtJQUM5SCxNQUFNLGdCQUFnQixHQUFZLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFFeEUsV0FBVyxDQUNULFlBQVksRUFDWjs7Ozs0QkFJd0IsUUFBUTs7a0NBRUYsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLGdCQUFnQjs7OztLQUl2RixDQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclVzZXJCbG9jayhuYW1lVXNlcjogc3RyaW5nLCBsaW5rVG9BdmF0YXI6IHN0cmluZywgZmF2b3JpdGVJdGVtc0Ftb3VudDogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IGZhdm9yaXRlc0NhcHRpb246IG51bWJlciB8IHN0cmluZyA9IGZhdm9yaXRlSXRlbXNBbW91bnQgJiYgZmF2b3JpdGVJdGVtc0Ftb3VudCA+PSAwID8gZmF2b3JpdGVJdGVtc0Ftb3VudCA6ICfQvdC40YfQtdCz0L4g0L3QtdGCJ1xuICBjb25zdCBoYXNGYXZvcml0ZUl0ZW1zOiBib29sZWFuID0gZmF2b3JpdGVJdGVtc0Ftb3VudCA+IDAgPyB0cnVlIDogZmFsc2VcblxuICByZW5kZXJCbG9jayhcbiAgICAndXNlci1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiLi9pbWcvYXZhdGFyLnBuZ1wiIGFsdD1cIldhZGUgV2FycmVuXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHtuYW1lVXNlcn08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtaWNvbiR7aGFzRmF2b3JpdGVJdGVtcyA/ICcgYWN0aXZlJyA6ICcnfVwiPjwvaT4ke2Zhdm9yaXRlc0NhcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG4iXX0=