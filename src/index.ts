import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getUserData } from './lib.js'
import { getFavoritesAmount } from './lib.js'
import { localStoragee } from './localStorage.js'
import { searchFromHandler } from './search-form.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(localStoragee.user.username, localStoragee.user.avatarUrl, localStoragee.favoritesAmount)
  // renderUserBlock('Wade Warren', 'heart-red.png', 5)
  console.log(new Date())
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
