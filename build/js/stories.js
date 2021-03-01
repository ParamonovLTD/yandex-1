const culcBarHeight = () => {
  let maxBarHeight = window.orientation === 0 ? 48.65 : 28.72
  // let maxBarHeight = window.orientation === 0 ? 325 : 108 //28.72

  const scores = Array.from(
    document.querySelectorAll('.leaders__item .leader__score')
  )
  const bars = Array.from(
    document.querySelectorAll('.leaders__item .leader__bar')
  )
  console.log(maxBarHeight + '%')
  bars.forEach((bar, index) => {
    let currentScore = scores[index].textContent
    bar.style.height =
      (maxBarHeight / scores[0].textContent) * currentScore + 'vh'
  })
}

function renderTemplate() {
  return `
    <div class="leaders">
      <h1 class="leaders__title">Больше всего коммитов</h1>
      <h2 class="leaders__subtitle">Спринт № 213</h2>
      <ul class="leaders__list">
        <li class="leaders__item leaders__item-first-place">
          <div class="leaders__member leader leader--winner">
            <div class="leader__user">
              <div class="leader__avatar-wrapper">
                <img
                  class="leader__avatar"
                  src="./images/1x/3.jpg"
                  width="64"
                  height="64"
                  alt="Фотография участника"
                />
              </div>
              <p class="leader__name">Дарья Ковалева</p>
              <p class="leader__score">32</p>
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
                  src="./images/1x/9.jpg"
                  width="64"
                  height="64"
                  alt="Фотография участника"
                />
              </div>
              <p class="leader__name">Сергей Бережной</p>
              <p class="leader__score">27</p>
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
                  src="./images/1x/7.jpg"
                  width="64"
                  height="64"
                  alt="Фотография участника"
                />
              </div>
              <p class="leader__name">Дмитрий Андриянов</p>
              <p class="leader__score">22</p>
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
                  src="./images/1x/6.jpg"
                  width="64"
                  height="64"
                  alt="Фотография участника"
                />
              </div>
              <p class="leader__name">Андрей Мокроусов</p>
              <p class="leader__score">20</p>
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
                  src="./images/1x/8.jpg"
                  width="64"
                  height="64"
                  alt="Фотография участника"
                />
              </div>
              <p class="leader__name">Александр Иванков</p>
              <p class="leader__score">19</p>
            </div>
            <div class="leader__bar"><span>5</span></div>
          </div>
        </li>
      </ul>
    </div>
  `
}

document.body.insertAdjacentHTML('afterbegin', renderTemplate())

culcBarHeight()
window.addEventListener('orientationchange', () => {
  culcBarHeight()
})
