// project JSON
let appJSON = {
  theme: 'light',
  title: 'Your App',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis inventore iure facere dicta corrupti et alias id repellat commodi, sapiente nesciunt recusandae quasi laborum? Iure libero id doloribus fugit qui.',
  scratchpad: '',
  website: '',
  analytics: '',
  html: ''
}

// theme
document.querySelector('[data-toggletheme]').onclick = () => {
  if (appJSON.theme === 'light') {
    appJSON.theme = 'dark'
    document.querySelector('[data-toggletheme] i').classList.remove('fa-sun')
    document.querySelector('[data-toggletheme] i').classList.add('fa-moon')
  } else {
    appJSON.theme = 'light'
    document.querySelector('[data-toggletheme] i').classList.remove('fa-moon')
    document.querySelector('[data-toggletheme] i').classList.add('fa-sun')
  }
  document.querySelector('[data-toggletheme]').setAttribute('data-toggletheme', appJSON.theme)
  document.querySelector('[data-canvas]').setAttribute('data-theme', appJSON.theme)
  updateStorage()
}

// remember data in localStorage
function updateStorage() {
  appJSON.theme       = document.querySelector('[data-canvas]').getAttribute('data-theme')
  appJSON.title       = document.querySelector('[data-title]').value
  appJSON.description = document.querySelector('[data-description]').value
  appJSON.scratchpad  = document.querySelector('[data-scratchpad]').value
  appJSON.html        = document.querySelector('[data-canvas]').innerHTML
  appJSON.website     = document.querySelector('[data-website]').value
  appJSON.analytics   = document.querySelector('[data-googleanalytics]').value

  // left to push is logic and data
  localStorage.setItem('AppDesignerTemplate', JSON.stringify(appJSON))
}

// clear data from localStorage
clearData = () => {
  localStorage.clear()
  location.reload(true)
}

// export
exportSite = () => {
  alert('Strictly for demo purposes only!')
}

// check localStorage
if (!localStorage.getItem('AppDesignerTemplate')) {
  document.querySelector('[data-title]').value       = appJSON.title
  document.querySelector('[data-description]').value = appJSON.description
} else {
  appJSON = JSON.parse(localStorage.getItem('AppDesignerTemplate'))
  
  document.querySelector('[data-title]').value            = appJSON.title
  document.querySelector('[data-description]').value      = appJSON.description
  document.querySelector('[data-scratchpad]').value       = appJSON.scratchpad
  document.querySelector('[data-website]').value          = appJSON.website
  document.querySelector('[data-googleanalytics]').value  = appJSON.analytics
  document.querySelector('[data-canvas]').innerHTML       = appJSON.html
  document.querySelector('[data-canvas][data-theme]').setAttribute('data-theme', appJSON.theme)
  if (appJSON.theme === 'dark') {
    document.querySelector('[data-toggletheme] i').classList.remove('fa-sun')
    document.querySelector('[data-toggletheme] i').classList.add('fa-moon')
  }
}
