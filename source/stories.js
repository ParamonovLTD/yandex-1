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
                    <span class="leader__avatar-winner-emoji">${
                      data.emoji
                    }</span>
                    <img
                      class="leader__avatar"
                      src="./images/1x/${data.users[0].avatar}"
                      width="64"
                      height="64"
                      alt="Фотография участника"
                    />
                  </div>
                  <p class="leader__name">${data.users[0].name}</p>
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
                      class="leader__avatar"
                      src="./images/1x/${data.users[1].avatar}"
                      width="64"
                      height="64"
                      alt="Фотография участника"
                    />
                  </div>
                  <p class="leader__name">${data.users[1].name}</p>
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
                      class="leader__avatar"
                      src="./images/1x/${data.users[2].avatar}"
                      width="64"
                      height="64"
                      alt="Фотография участника"
                    />
                  </div>
                  <p class="leader__name">${data.users[2].name}</p>
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
                      class="leader__avatar"
                      src="./images/1x/${data.users[3].avatar}"
                      width="64"
                      height="64"
                      alt="Фотография участника"
                    />
                  </div>
                  <p class="leader__name">${data.users[3].name}</p>
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
                      class="leader__avatar"
                      src="./images/1x/${data.users[4].avatar}"
                      width="64"
                      height="64"
                      alt="Фотография участника"
                    />
                  </div>
                  <p class="leader__name">${data.users[4].name}</p>
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
                    class="leader__avatar"
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
                <p class="leader__name">${
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
]

window.renderTemplate = function (alias, data) {
  return templates.find(template => template.alias === alias).getTemplate(data)
}

document.body.insertAdjacentHTML(
  'afterbegin',
  window.renderTemplate('leaders', {
    title: 'Больше всего коммитов',
    subtitle: 'Спринт № 213',
    emoji: '👑',
    users: [
      { id: 3, name: 'Дарья Ковалева', avatar: '3.jpg', valueText: '32' },
      { id: 9, name: 'Сергей Бережной', avatar: '9.jpg', valueText: '27' },
      { id: 7, name: 'Дмитрий Андриянов', avatar: '7.jpg', valueText: '22' },
      { id: 6, name: 'Андрей Мокроусов', avatar: '6.jpg', valueText: '20' },
      { id: 8, name: 'Александр Иванков', avatar: '8.jpg', valueText: '19' },
    ],
  })
)

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
