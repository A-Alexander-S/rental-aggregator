import { renderBlock } from './lib.js';
export function renderUserBlock(nameUser, linkToAvatar, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount && favoriteItemsAmount >= 0 ? favoriteItemsAmount : 'ничего нет';
    const temporaryFavoriteItemsAmount = favoriteItemsAmount ? favoriteItemsAmount : 0;
    const hasFavoriteItems = temporaryFavoriteItemsAmount > 0 ? true : false;
    // const hasFavoriteItems: boolean = favoriteItemsAmount > 0 ? true : false
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src=${linkToAvatar} alt="Wade Warren" />
      <div class="info">
          <p class="name">${nameUser}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsTUFBTSxVQUFVLGVBQWUsQ0FBQyxRQUFnQixFQUFFLFlBQW9CLEVBQUUsbUJBQTRCO0lBQ2xHLE1BQU0sZ0JBQWdCLEdBQW9CLG1CQUFtQixJQUFJLG1CQUFtQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQTtJQUM5SCxNQUFNLDRCQUE0QixHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2xGLE1BQU0sZ0JBQWdCLEdBQVksNEJBQTRCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUNqRiwyRUFBMkU7SUFDM0UsV0FBVyxDQUNULFlBQVksRUFDWjs7Z0NBRTRCLFlBQVk7OzRCQUVoQixRQUFROztrQ0FFRixnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsZ0JBQWdCOzs7O0tBSXZGLENBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVXNlckJsb2NrKG5hbWVVc2VyOiBzdHJpbmcsIGxpbmtUb0F2YXRhcjogc3RyaW5nLCBmYXZvcml0ZUl0ZW1zQW1vdW50PzogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IGZhdm9yaXRlc0NhcHRpb246IG51bWJlciB8IHN0cmluZyA9IGZhdm9yaXRlSXRlbXNBbW91bnQgJiYgZmF2b3JpdGVJdGVtc0Ftb3VudCA+PSAwID8gZmF2b3JpdGVJdGVtc0Ftb3VudCA6ICfQvdC40YfQtdCz0L4g0L3QtdGCJ1xuICBjb25zdCB0ZW1wb3JhcnlGYXZvcml0ZUl0ZW1zQW1vdW50ID0gZmF2b3JpdGVJdGVtc0Ftb3VudCA/IGZhdm9yaXRlSXRlbXNBbW91bnQgOiAwXG4gIGNvbnN0IGhhc0Zhdm9yaXRlSXRlbXM6IGJvb2xlYW4gPSB0ZW1wb3JhcnlGYXZvcml0ZUl0ZW1zQW1vdW50ID4gMCA/IHRydWUgOiBmYWxzZVxuICAvLyBjb25zdCBoYXNGYXZvcml0ZUl0ZW1zOiBib29sZWFuID0gZmF2b3JpdGVJdGVtc0Ftb3VudCA+IDAgPyB0cnVlIDogZmFsc2VcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3VzZXItYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cImF2YXRhclwiIHNyYz0ke2xpbmtUb0F2YXRhcn0gYWx0PVwiV2FkZSBXYXJyZW5cIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIj4ke25hbWVVc2VyfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImZhdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJoZWFydC1pY29uJHtoYXNGYXZvcml0ZUl0ZW1zID8gJyBhY3RpdmUnIDogJyd9XCI+PC9pPiR7ZmF2b3JpdGVzQ2FwdGlvbn1cbiAgICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gIClcbn1cbiJdfQ==