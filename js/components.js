// variables
let cardText, componentCard, componentImgs, elmCode = [];
const componentHead       = document.querySelectorAll('[data-dialog=rightmenu] h5')
const componentsContainer = document.querySelectorAll('[data-component]')
const componentsHome      = document.querySelector('[data-navcontainer]')
const searchElm           = document.querySelector('input[list=componentstoadd]')

// components are stored in this object
let componentsArr = ['components', 'layout'];
let components = {
  components: [
    {
      text: 'navigation',
      image: 'imgs/image.jpeg',
      code: '<nav class="container-fluid">\n      <ul>\n        <li>\n          Company name\n        </li>\n      </ul>\n      <ul>\n        <li>\n          <a href="#">\n            Examples\n          </a>\n        </li>\n        <li>\n          <a href="#">\n            Docs\n          </a>\n        </li>\n        <li>\n          <a href="#">\n            <i class="fa-brands fa-github-alt"></i>\n          </a>\n        </li>\n      </ul>\n    </nav>'
    }
  ],
  layout: [
    {
      text: 'hero',
      image: 'imgs/image.jpeg',
      code: '<header>\n      <div class="container">\n        <hgroup>\n          <h1 class="animated slideInLeft">My Awesome Heading</h1>\n          <h3 class="animated zoomInDown">My awesome sub-heading</h3>\n        </hgroup>\n        <p class="animated zoomInUp">\n          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, nesciunt.\n        </p>\n        <p>\n          <a href="#" role="button" class="secondary animated bounce">Link</a>\n          <a href="#" role="button" class="contrast outline animated bounce">Link</a>\n        </p>\n      </div>\n    </header>'
    },
    {
      text: 'grid',
      image: 'imgs/image.jpeg',
      code: '<main class="animated fadeIn">\n      <section>\n        <div class="container">\n          <hgroup>\n            <h1>My Awesome Heading</h1>\n            <h3>My awesome sub-heading</h3>\n          </hgroup>\n          <div class="grid">\n            <div>\n              <i class="fa fa-star"></i>\n              <h4>My awesome title</h4>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, autem.</p>\n            </div>\n            <div>\n              <i class="fa fa-star"></i>\n              <h4>My awesome title</h4>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, autem.</p>\n            </div>\n            <div>\n              <i class="fa fa-star"></i>\n              <h4>My awesome title</h4>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, autem.</p>\n            </div>\n            <div>\n              <i class="fa fa-star"></i>\n              <h4>My awesome title</h4>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, autem.</p>\n            </div>\n          </div>\n        </div>\n      </section>\n    </main>'
    }
  ]
}

// first append the components array
for (i = 0; i < componentsArr.length; i++) {
  document.querySelector('[data-navcontainer]').innerHTML += '<li><div><h5>'+ componentsArr[i] +'</h5><section data-component="'+ componentsArr[i] +'"></section></div></li>'

  // first add image
  let search = components[componentsArr[i]]
  str = ''
  for (num = 0; num < search.length; num++) {
    str += '<article><p><a href="#"><img src="'+ search[num].image +'"></a></p><p>'+ search[num].text +'</p></article>'
    componentCard = document.querySelector('[data-component='+ componentsArr[i] +']')
    componentCard.innerHTML = str
    componentImgs = document.querySelector('[data-navcontainer]').querySelectorAll('img')

    // if image is clicked append code
    elmCode.push(search[num].code)

    // update searchbox datalist
    document.getElementById('componentstoadd').innerHTML += '<option value="'+ search[num].text +'"></option>'
  }
}
componentImgs.forEach((e, index) => {
  e.onclick = () => {
    // add to the canvas
    canvas.querySelector('.body').innerHTML += elmCode[index]
    updateStorage()
  }
})

// search
searchFunction = () => {
  cardText = componentsHome.querySelectorAll('li > div > section > article > p:last-child')
  let val = searchElm.value.toLowerCase()

  // display all components if there's no value
  if (!val) {
    for (i = 0; i < cardText.length; i++) {
      let a = cardText[i]

      let categoryContainer = a.parentElement.parentElement.parentElement
      let componentsContainer = componentsHome.querySelectorAll('li > div')

      a.parentElement.style.display = ''
      for (num = 0; num < componentsContainer.length; num++) {
        componentsContainer[num].style.display = ''
      }
    }
    return false
  }

  // only show elements that match search critera
  for (i = 0; i < cardText.length; i++) {
    let a = cardText[i]
    txtValue = a.textContent;

    // check if component text matches search value
    if (txtValue.toLowerCase().indexOf(val) > -1) {
      // filtered item category (div)
      let categoryContainer = a.parentElement.parentElement.parentElement
      let componentsContainer = componentsHome.querySelectorAll('li > div')

      // only show filtered item
      a.parentElement.style.display = ''

      // handles display of the parent category name
      for (num = 0; num < componentsContainer.length; num++) {
        componentsContainer[num].style.display = 'none'
        categoryContainer.style.display = ''
      }
    } else {
      a.parentElement.style.display = 'none'
      for (num = 0; num < componentsContainer.length; num++) {
        componentsContainer[num].style.display = 'none'
      }
    }
  }
}