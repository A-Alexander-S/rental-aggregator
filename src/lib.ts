/**
 * @param elementId {string} - id элемента
 * @param html {string} - html для вставки в верстку
 */
export function renderBlock(elementId: string, html: string): void {
  const element: HTMLElement = document.getElementById(elementId)
  element.innerHTML = html
}

interface AnswerRenderToast {
  text: string,
  type: string
}

interface ActionRenderToast {
  name: string,
  handler: Function
}
/**
 * @param message {AnswerRenderToast} - объект с сообщение, которое покажется пользователю
 * @param action {ActionRenderToast} - объект с методом, который выводит в консоль текст при закрытии уведомления
 */
export function renderToast(message: AnswerRenderToast | null, action?: ActionRenderToast | null): void {
  let messageText = ''

  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }

  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null)
    }
  }
}

export function getUserData(value: unknown): boolean | null | { username: string, avatarUrl: string } {
  if (value == null) {
    return null
  }

  if ('user' in localStorage) {
    return localStorage["user"];
  }

  return null
}

export function getFavoritesAmount(favoritesAmount: unknown): number | null {
  if (favoritesAmount == null) {
    return null
  }

  if (`favoritesAmount` in localStorage) {
    return +localStorage["favoritesAmount"];
  }

  return null
}

export interface Todos {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

/**
 * @param count {number} - количество todo, которое нужно отобразить
 */
export function getTodosByCount(count: number): void {

  for (let i = 1; i <= count; i++) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
      .then<Todos>(response => response.json())
      .then((json) => {
        if (
          typeof json.userId == 'number'
          && typeof json.id == 'number'
          && typeof json.title == 'string'
          && typeof json.completed == 'boolean'
        ) {
          console.log(json)
        } else {
          console.log('Пришли не правильные данные')
        }
      })
  }
}
