import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { renderBlock } from './lib.js'
import { getTodosByCount } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('user',
    JSON.stringify({
      username: "Wade Warren",
      avatarUrl: "./img/avatar.png"
    }))

  localStorage.setItem('favoritesAmount', '10')
  console.log(localStorage.getItem('user'))

  renderUserBlock(
    JSON.parse(localStorage.getItem('user')!).username,
    JSON.parse(localStorage.getItem('user')!).avatarUrl,
    +localStorage.getItem('favoritesAmount')!)

  renderSearchFormBlock()
  renderSearchStubBlock()
  // renderToast(
  //   { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
  //   { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  // )
  getTodosByCount(2)
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
})
