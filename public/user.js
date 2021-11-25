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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFHdEMsTUFBTSxVQUFVLGVBQWUsQ0FBQyxRQUFnQixFQUFFLFlBQW9CLEVBQUUsbUJBQTRCO0lBQ2xHLE1BQU0sZ0JBQWdCLEdBQW9CLG1CQUFtQixJQUFJLG1CQUFtQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQTtJQUM5SCxNQUFNLGdCQUFnQixHQUFZLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFFeEUsV0FBVyxDQUNULFlBQVksRUFDWjs7Ozs0QkFJd0IsUUFBUTs7a0NBRUYsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLGdCQUFnQjs7OztLQUl2RixDQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcbmltcG9ydCB7IGxvY2FsU3RvcmFnZWUgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclVzZXJCbG9jayhuYW1lVXNlcjogc3RyaW5nLCBsaW5rVG9BdmF0YXI6IHN0cmluZywgZmF2b3JpdGVJdGVtc0Ftb3VudD86IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBmYXZvcml0ZXNDYXB0aW9uOiBudW1iZXIgfCBzdHJpbmcgPSBmYXZvcml0ZUl0ZW1zQW1vdW50ICYmIGZhdm9yaXRlSXRlbXNBbW91bnQgPj0gMCA/IGZhdm9yaXRlSXRlbXNBbW91bnQgOiAn0L3QuNGH0LXQs9C+INC90LXRgidcbiAgY29uc3QgaGFzRmF2b3JpdGVJdGVtczogYm9vbGVhbiA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPiAwID8gdHJ1ZSA6IGZhbHNlXG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3VzZXItYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cImF2YXRhclwiIHNyYz1cIi4vaW1nL2F2YXRhci5wbmdcIiBhbHQ9XCJXYWRlIFdhcnJlblwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7bmFtZVVzZXJ9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZmF2XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImhlYXJ0LWljb24ke2hhc0Zhdm9yaXRlSXRlbXMgPyAnIGFjdGl2ZScgOiAnJ31cIj48L2k+JHtmYXZvcml0ZXNDYXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuIl19