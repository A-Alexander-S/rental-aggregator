import { renderBlock } from './lib.js'

export function renderUserBlock(nameUser: string, linkToAvatar: string, favoriteItemsAmount: number) {
  const favoritesCaption = favoriteItemsAmount && favoriteItemsAmount >= 0 ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount > 0 ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="./img/avatar.png" alt="Wade Warren" />
      <div class="info">
          <p class="name">${nameUser}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
