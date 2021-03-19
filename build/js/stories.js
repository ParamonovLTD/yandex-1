const templates = [
  {
    alias: 'leaders',
    getTemplate(data) {
      return `
        <div class="leaders">
          <h1 class="leaders__title">${data.title}</h1>
          <h2 class="leaders__subtitle">${data.subtitle}</h2>
          <ul class="leaders__list">
            <li class="leaders__item leaders__item-first-place">
              <div class="leaders__member leader leader--winner">
                <div class="leader__user">
                  <div class="leader__avatar-wrapper">
                    <span class="leader__avatar-winner-emoji">${data.emoji}</span>
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
            <li class="leaders__item leaders__item-choosen-user">
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
            </li>
          </ul>
        </div>
      `
    },
  },
]

const culcBarHeight = () => {
  let maxBarHeight = window.orientation === 0 ? 48.65 : 28.72

  const scores = Array.from(
    document.querySelectorAll('.leaders__item .leader__score')
  )
  const bars = Array.from(
    document.querySelectorAll('.leaders__item .leader__bar')
  )

  bars.forEach((bar, index) => {
    let currentScore = parseInt(scores[index].textContent.split(' ')[0])

    if (
      window.orientation === 0 &&
      bar.parentNode.parentNode.classList.contains('leaders__item-choosen-user')
    ) {
      bar.style.height = 'auto'
    } else {
      bar.style.height =
        (maxBarHeight / scores[0].textContent.split(' ')[0]) * currentScore +
        'vh'
    }
  })
}

window.renderTemplate = function (alias, data) {
  return templates.find(template => template.alias === alias).getTemplate(data)
}

document.body.insertAdjacentHTML(
  'afterbegin',
  window.renderTemplate('leaders', {
    title: 'Самый большой коммит',
    subtitle: 'Спринт № 213',
    emoji: '😮',
    users: [
      {
        id: 12,
        name: 'Алексей Ярошевич',
        avatar: '12.jpg',
        valueText: '4001 строка',
      },
      {
        id: 5,
        name: 'Александр Николаичев',
        avatar: '5.jpg',
        valueText: '3845 строк',
      },
      {
        id: 8,
        name: 'Александр Иванков',
        avatar: '8.jpg',
        valueText: '3640 строк',
      },
      {
        id: 10,
        name: 'Яна Берникова',
        avatar: '10.jpg',
        valueText: '3453 строки',
      },
      {
        id: 4,
        name: 'Вадим Пацев',
        avatar: '4.jpg',
        valueText: '2852 строки',
      },
    ],
  })
)

culcBarHeight()
window.addEventListener('orientationchange', () => {
  culcBarHeight()
})

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
// history.replaceState({}, '', oldUrl + '?theme=light')
