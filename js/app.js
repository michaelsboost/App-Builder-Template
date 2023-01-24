// variables
const topCenterMenu = document.querySelector('.topcenter')
const pagesElm      = document.querySelector('[data-pages]')
const mainAssets    = document.querySelector('[data-assets]')
let pagesList       = document.querySelectorAll('[data-pages] li')
let openPages       = document.querySelectorAll('[data-openpage]')
let renameBtns      = document.querySelectorAll('[data-renamepage]')
let cloneBtns       = document.querySelectorAll('[data-clonepage]')

let appJSON = {
  title: 'Your App',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis inventore iure facere dicta corrupti et alias id repellat commodi, sapiente nesciunt recusandae quasi laborum? Iure libero id doloribus fugit qui.',
  palette: 'blue',
  html: []
}

// check if FileReader API is available
if (!window.FileReader) {
  mainAssets.textContent = 'File API & FileReader API not supported'
}

// function to load an image as base64
function displayPreview(input) {
  var reader = new FileReader()

  reader.onload = function(e) {
    // store the asset inside the json array
    img = e.target.result
    mainAssets.innerHTML += '<img src="'+ img +'" onclick="imgAsset(this)">'
  }
  reader.readAsDataURL(input)
}

// delete images
imgAsset = (img) => {
  if (deleteimgs.checked) {
    img.remove()
  }
}

// input to load in an asset
document.querySelector('[data-file]').onchange = function(e) {
  for (let numbers in e.target.files) {
    var file = e.target.files[numbers]
    displayPreview(file)
  }
}

// clear input value if checked or unchecked
deleteimgs.onchange = () => {
  document.querySelector('[data-file]').value = ''
}

// remember title if changed
document.querySelector('[data-title]').onkeyup = () => {
  appJSON.title = this.value
  updateStorage()
}
document.querySelector('[data-title]').onchange = () => {
  appJSON.title = this.value
  updateStorage()
}

// remember description if changed
document.querySelector('[data-description]').onkeyup = () => {
  appJSON.description = this.value
  updateStorage()
}
document.querySelector('[data-description]').onchange = () => {
  appJSON.description = this.value
  updateStorage()
}

// remember data in localStorage
function updateStorage() {
  appJSON.title       = document.querySelector('[data-title]').value
  appJSON.description = document.querySelector('[data-description]').value
  appJSON.palette     = document.querySelector('[data-color].picked').getAttribute('data-color')
  appJSON.html = canvas.querySelector('.body').innerHTML

  // left to push is logic and data

  localStorage.setItem('AppBuilderTemplate', JSON.stringify(appJSON));
}

// clear data from localStorage
clearData = () => {
  localStorage.clear()
  location.reload(true)
}

// export
exportSite = () => {
  alert('Stricktly for demo purposes only!')
}

// check localStorage
if (!localStorage.getItem('AppBuilderTemplate')) {
  document.querySelector('[data-title]').value = appJSON.title
  document.querySelector('[data-description]').value = appJSON.description
} else {
  appJSON = JSON.parse(localStorage.getItem('AppBuilderTemplate'))
  
  document.querySelector('[data-title]').value = appJSON.title
  document.querySelector('[data-description]').value = appJSON.description
  canvas.querySelector('.body').innerHTML = appJSON.html

  // trigger color palette
  if (appJSON.palette != 'blue') {
    document.querySelector('[data-color='+ appJSON.palette +']').click()
  }
}