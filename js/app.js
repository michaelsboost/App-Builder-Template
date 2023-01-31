// project JSON
let appJSON = {
  title: 'Your App',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis inventore iure facere dicta corrupti et alias id repellat commodi, sapiente nesciunt recusandae quasi laborum? Iure libero id doloribus fugit qui.',
  website: '',
  analytics: '',
  html: []
}

// remember data in localStorage
function updateStorage() {
  appJSON.title       = document.querySelector('[data-title]').value
  appJSON.description = document.querySelector('[data-description]').value
  appJSON.html        = document.querySelector('[data-canvas]').innerHTML
  appJSON.website     = document.querySelector('[data-website]').value
  appJSON.analytics   = document.querySelector('[data-googleanalytics]').value

  // left to push is logic and data
  localStorage.setItem('BrikzBuildr', JSON.stringify(appJSON));
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
  
  document.querySelector('[data-title]').value       = appJSON.title
  document.querySelector('[data-description]').value = appJSON.description
  document.querySelector('[data-website]').value  = appJSON.website
  document.querySelector('[data-googleanalytics]').value  = appJSON.analytics
}
