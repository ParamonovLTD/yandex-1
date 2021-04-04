const templates = [
  {
    alias: 'leaders',
    getTemplate(data) {
      return `
        <div class="leaders story">
          <h1 class="story__title">${data.title}</h1>
          <h2 class="story__subtitle">${data.subtitle}</h2>
          <ul class="leaders__list">
            <li class="leaders__item leaders__item-first-place">
              <div class="leaders__member leader leader--winner">
                <div class="leader__user">
                  <div class="leader__avatar-wrapper">
                    <span class="story__avatar-winner-emoji">${
                      data.emoji
                    }</span>
                    <img
                      class="story__user-avatar"
                      src="./images/1x/${data.users[0].avatar}"
                      width="64"
                      height="64"
                      alt="Фотография участника"
                    />
                  </div>
                  <p class="story__user-name">${data.users[0].name}</p>
                  <p class="leader__score">${data.users[0].valueText}</p>
                </div>
                <div class="leader__bar"><span>1</span></div>
              </div>
            </li>
            <li class="leaders__item leaders__item-second-place">
              <div class="leaders__member leader">
                <div class="leader__user">
                  <div class="leader__avatar-wrapper">
                    <img
                      class="story__user-avatar"
                      src="./images/1x/${data.users[1].avatar}"
                      width="64"
                      height="64"
                      alt="Фотография участника"
                    />
                  </div>
                  <p class="story__user-name">${data.users[1].name}</p>
                  <p class="leader__score">${data.users[1].valueText}</p>
                </div>
                <div class="leader__bar"><span>2</span></div>
              </div>
            </li>
            <li class="leaders__item leaders__item-third-place">
              <div class="leaders__member leader">
                <div class="leader__user">
                  <div class="leader__avatar-wrapper">
                    <img
                      class="story__user-avatar"
                      src="./images/1x/${data.users[2].avatar}"
                      width="64"
                      height="64"
                      alt="Фотография участника"
                    />
                  </div>
                  <p class="story__user-name">${data.users[2].name}</p>
                  <p class="leader__score">${data.users[2].valueText}</p>
                </div>
                <div class="leader__bar"><span>3</span></div>
              </div>
            </li>
            <li class="leaders__item leaders__item-fourth-place">
              <div class="leaders__member leader">
                <div class="leader__user">
                  <div class="leader__avatar-wrapper">
                    <img
                      class="story__user-avatar"
                      src="./images/1x/${data.users[3].avatar}"
                      width="64"
                      height="64"
                      alt="Фотография участника"
                    />
                  </div>
                  <p class="story__user-name">${data.users[3].name}</p>
                  <p class="leader__score">${data.users[3].valueText}</p>
                </div>
                <div class="leader__bar"><span>4</span></div>
              </div>
            </li>
            ${
              !data.selectedUserId
                ? `
            <li class="leaders__item leaders__item-fifth-place">
              <div class="leaders__member leader">
                <div class="leader__user">
                  <div class="leader__avatar-wrapper">
                    <img
                      class="story__user-avatar"
                      src="./images/1x/${data.users[4].avatar}"
                      width="64"
                      height="64"
                      alt="Фотография участника"
                    />
                  </div>
                  <p class="story__user-name">${data.users[4].name}</p>
                  <p class="leader__score">${data.users[4].valueText}</p>
                </div>
                <div class="leader__bar"><span>5</span></div>
              </div>
            </li>`
                : `<li class="leaders__item leaders__item-fifth-place leaders__item--choosen-user">
            <div class="leaders__member leader">
              <div class="leader__user">
                <div class="leader__avatar-wrapper">
                  <img
                    class="story__user-avatar"
                    src="./images/1x/${
                      data.selectedUserId
                        ? data.users.find(
                            user => user.id === data.selectedUserId
                          ).avatar
                        : ''
                    }"
                    width="64"
                    height="64"
                    alt="Фотография участника"
                  />
                </div>
                <p class="story__user-name">${
                  data.selectedUserId
                    ? data.users.find(user => user.id === data.selectedUserId)
                        .name
                    : ''
                }</p>
                <p class="leader__score">${
                  data.selectedUserId
                    ? data.users.find(user => user.id === data.selectedUserId)
                        .valueText
                    : ''
                }</p>
              </div>
              <div class="leader__bar"><span>${
                data.users.indexOf(
                  data.users.find(user => user.id === data.selectedUserId)
                ) + 1
              }</span></div>
            </div>
          </li>`
            }
          </ul>
        </div>
      `
    },
  },
  {
    alias: 'vote',
    getTemplate(data) {
      return `
      <div class="vote story">
      <h1 class="story__title">${data.title}</h1>
      <h2 class="story__subtitle">${data.subtitle}</h2>
      <div class="vote__slider slider">
        <div class="slider__user slider__user-1">
          <div class="slider__avatar-wrapper">
            <img
              class="story__user-avatar"
              src="./images/1x/${data.users[0].avatar}"
              width="64"
              height="64"
              alt="Фотография пользователя"
            />
          </div>
          <p class="story__user-name">${data.users[0].name}</p>
        </div>
        <div class="slider__user slider__user-2 slider__user--choosen">
          <div class="slider__avatar-wrapper">
            <span class="story__avatar-winner-emoji">👍</span>
            <img
              class="story__user-avatar"
              src="./images/1x/${data.users[1].avatar}"
              width="64"
              height="64"
              alt="Фотография пользователя"
            />
          </div>
          <p class="story__user-name">${data.users[1].name}</p>
        </div>
        <div class="slider__user slider__user-3">
          <div class="slider__avatar-wrapper">
            <img
              class="story__user-avatar"
              src="./images/1x/${data.users[2].avatar}"
              width="64"
              height="64"
              alt="Фотография пользователя"
            />
          </div>
          <p class="story__user-name">${data.users[2].name}</p>
        </div>
        <div class="slider__user slider__user-4">
          <div class="slider__avatar-wrapper">
            <img
              class="story__user-avatar"
              src="./images/1x/${data.users[3].avatar}"
              width="64"
              height="64"
              alt="Фотография пользователя"
            />
          </div>
          <p class="story__user-name">${data.users[3].name}</p>
        </div>
        <div class="slider__user slider__user-5">
          <div class="slider__avatar-wrapper">
            <img
              class="story__user-avatar"
              src="./images/1x/${data.users[4].avatar}"
              width="64"
              height="64"
              alt="Фотография пользователя"
            />
          </div>
          <p class="story__user-name">${data.users[4].name}</p>
        </div>
        <div class="slider__user slider__user-6">
          <div class="slider__avatar-wrapper">
            <img
              class="story__user-avatar"
              src="./images/1x/${data.users[5].avatar}"
              width="64"
              height="64"
              alt="Фотография пользователя"
            />
          </div>
          <p class="story__user-name">${data.users[5].name}</p>
        </div>
        <div class="slider__user slider__user-7">
          <div class="slider__avatar-wrapper">
            <img
              class="story__user-avatar"
              src="./images/1x/${data.users[6].avatar}"
              width="64"
              height="64"
              alt="Фотография пользователя"
            />
          </div>
          <p class="story__user-name">${data.users[6].name}</p>
        </div>
        <div class="slider__user slider__user-8">
          <div class="slider__avatar-wrapper">
            <img
              class="story__user-avatar"
              src="./images/1x/${data.users[7].avatar}"
              width="64"
              height="64"
              alt="Фотография пользователя"
            />
          </div>
          <p class="story__user-name">${data.users[7].name}</p>
        </div>
        <button
          class="slider__button slider__button--up"
          aria-label="Листнуть слайдер вверх"
          disabled
        >
          <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z"/>
</svg>
        </button>
        <button
          class="slider__button slider__button--down"
          aria-label="Листнуть слайдер вниз"
        >
          <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62ZM32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM59 32C59 46.9117 46.9117 59 32 59C17.0883 59 5 46.9117 5 32C5 17.0883 17.0883 5 32 5C46.9117 5 59 17.0883 59 32ZM25.0607 27.9393C24.4749 27.3536 23.5251 27.3536 22.9393 27.9393C22.3536 28.5251 22.3536 29.4749 22.9393 30.0607L30.9393 38.0607C31.5251 38.6464 32.4749 38.6464 33.0607 38.0607L41.0607 30.0607C41.6464 29.4749 41.6464 28.5251 41.0607 27.9393C40.4749 27.3536 39.5251 27.3536 38.9393 27.9393L32 34.8787L25.0607 27.9393Z"/>
</svg>
        </button>
      </div>
    </div>
      `
    },
  },
]

window.renderTemplate = function (alias, data) {
  return templates.find(template => template.alias === alias).getTemplate(data)
}

// document.body.innerHTML = window.renderTemplate('vote', {
//   title: 'Самый🔎внимательный разработчик',
//   subtitle: 'Спринт № 213',
//   emoji: '🔎',
//   selectedUserId: 4,
//   users: [
//     {
//       id: 1,
//       name: 'Евгений Дементьев',
//       avatar: '1.jpg',
//       valueText: '22 голоса',
//     },
//     { id: 4, name: 'Вадим Пацев', avatar: '4.jpg', valueText: '19 голосов' },
//     {
//       id: 10,
//       name: 'Яна Берникова',
//       avatar: '10.jpg',
//       valueText: '17 голосов',
//     },
//     {
//       id: 12,
//       name: 'Алексей Ярошевич',
//       avatar: '12.jpg',
//       valueText: '16 голосов',
//     },
//     {
//       id: 11,
//       name: 'Юрий Фролов',
//       avatar: '11.jpg',
//       valueText: '11 голосов',
//     },
//     {
//       id: 2,
//       name: 'Александр Шлейко',
//       avatar: '2.jpg',
//       valueText: '10 голосов',
//     },
//     {
//       id: 5,
//       name: 'Александр Николаичев',
//       avatar: '5.jpg',
//       valueText: '9 голосов',
//     },
//     {
//       id: 6,
//       name: 'Андрей Мокроусов',
//       avatar: '6.jpg',
//       valueText: '8 голосов',
//     },
//     {
//       id: 8,
//       name: 'Александр Иванков',
//       avatar: '8.jpg',
//       valueText: '7 голосов',
//     },
//     {
//       id: 7,
//       name: 'Дмитрий Андриянов',
//       avatar: '7.jpg',
//       valueText: '6 голосов',
//     },
//     {
//       id: 3,
//       name: 'Дарья Ковалева',
//       avatar: '3.jpg',
//       valueText: '5 голосов',
//     },
//     {
//       id: 9,
//       name: 'Сергей Бережной',
//       avatar: '9.jpg',
//       valueText: '4 голоса',
//     },
//   ],
// })

// const culcBarHeight = () => {
//   let maxBarHeight = window.orientation === 0 ? 48.65 : 28.72

//   const scores = Array.from(
//     document.querySelectorAll('.leaders__item .leader__score')
//   )
//   const bars = Array.from(
//     document.querySelectorAll('.leaders__item .leader__bar')
//   )

//   bars.forEach((bar, index) => {
//     let currentScore = parseInt(scores[index].textContent.split(' ')[0])

//     if (
//       window.orientation === 0 &&
//       bar.parentNode.parentNode.classList.contains(
//         'leaders__item--choosen-user'
//       )
//     ) {
//       bar.style.height = 'auto'
//     } else {
//       bar.style.height =
//         (maxBarHeight / scores[0].textContent.split(' ')[0]) * currentScore +
//         'vh'
//     }
//   })
// }

// function setChoosenUserVisibility() {
//   const userOnFifthPlace = document.querySelector('.leaders__item-fifth-place')
//   const choosenUser = document.querySelector('.leaders__item--choosen-user')
//   if (choosenUser) {
//     const choosenUserPlace = choosenUser.querySelector('.leader__bar > span')
//       .textContent

//     userOnFifthPlace.style.display = choosenUserPlace > 4 ? 'none' : 'block'

//     choosenUser.style.display =
//       choosenUserPlace > 4 || window.orientation === 0 ? 'block' : 'none'

//     choosenUser.classList.add('leaders__item-fifth-place')
//   }
// }

// culcBarHeight()
// setChoosenUserVisibility()
// window.addEventListener('orientationchange', () => {
//   culcBarHeight()
//   setChoosenUserVisibility()
// })

function getUrlParamValue(key) {
  let url = window.location.search
  url = url.match(new RegExp(key + '=([^&=]+)'))
  return url ? url[1] : false
}

function setTheme() {
  const themeValue = getUrlParamValue('theme')

  document.body.classList.forEach(className => {
    if (className.startsWith('theme') && themeValue !== false) {
      document.body.classList.remove(className)
    }
  })
  if (themeValue) {
    document.body.classList.add(`theme_${themeValue}`)
  }
}
setTheme()
