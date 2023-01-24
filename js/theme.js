// scroll to end of bottom scrollbar onload
const btmMenu = document.querySelector('.bottomright')
btmMenu.scrollTo(parseFloat(btmMenu.clientWidth), 0)

// toggle theme
const themeBtn = document.querySelector('[data-toggletheme]')
themeBtn.onclick = () => {
  if (themeBtn.getAttribute('data-toggletheme') === 'light') {
    document.querySelectorAll('[data-theme]')[1].setAttribute('data-theme', 'dark')
    themeBtn.setAttribute('data-toggletheme', 'dark')
    themeBtn.innerHTML = '<i class="fa fa-light fa-moon"></i>'
  } else {
    document.querySelectorAll('[data-theme]')[1].setAttribute('data-theme', 'light')
    themeBtn.setAttribute('data-toggletheme', 'light')
    themeBtn.innerHTML = '<i class="fa fa-light fa-sun"></i>'
  }
}