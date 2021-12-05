import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getTodosByCount } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('user',
    JSON.stringify({
      username: "Wade Warren",
      avatarUrl: "./img/avatar.png"
    }))

  localStorage.setItem('favoritesAmount', '10')

  renderUserBlock(
    JSON.parse(localStorage.getItem('user')).username,
    JSON.parse(localStorage.getItem('user')).avatarUrl,
    +localStorage.getItem('favoritesAmount'))

  renderSearchFormBlock()
  renderSearchStubBlock()
  // renderToast(
  //   { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
  //   { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  // )
  getTodosByCount(2)
})
