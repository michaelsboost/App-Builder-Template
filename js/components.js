initComponents = () => {
  // variables
  let cardText, componentCard, componentImgs, elmCode = [];
  const componentHead       = document.querySelectorAll('[data-dialog=rightmenu] h5')
  const componentsContainer = document.querySelectorAll('[data-component]')
  const componentsHome      = document.querySelector('[data-navcontainer]')
  const searchElm           = document.querySelector('input[list=componentstoadd]')
  const canvas              = document.querySelector('[data-canvas]')

  // components are stored in this object
  let componentsArr = ['basic', 'advanced', 'input', 'components'];
  let components = {
    basic: [
      {
        text: 'button',
        image: 'imgs/image.jpeg',
        code: '<button>Button</button>'
      },
      {
        text: 'text',
        image: 'imgs/image.jpeg',
        code: '<span>text</span>'
      },
      {
        text: 'image',
        image: 'imgs/image.jpeg',
        code: '<img src="imgs/image.jpeg">'
      },
      {
        text: 'video',
        image: 'imgs/image.jpeg',
        code: '<iframe width="923" height="519" src="https://www.youtube.com/embed/YI0a_PzIZk0" title="Introducing TouchDrawer - a free and open source svg vector drawing app" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }
    ],
    advanced: [
      {
        text: 'badge',
        image: 'imgs/image.jpeg',
        code: '<span>card</span>'
      },
      {
        text: 'card',
        image: 'imgs/image.jpeg',
        code: '<span>card</span>'
      },
      {
        text: 'audio player',
        image: 'imgs/image.jpeg',
        code: '<span>audio player</span>'
      },
      {
        text: 'audio player progress indicator',
        image: 'imgs/image.jpeg',
        code: '<span>audio player progress indicator</span>'
      },
      {
        text: 'audio player volume indicator',
        image: 'imgs/image.jpeg',
        code: '<span>audio player volume indicator</span>'
      }
    ],
    input: [
      {
        text: 'checkbox',
        image: 'imgs/image.jpeg',
        code: '<input type="checkbox" name="checkbox">'
      },
      {
        text: 'radio buttons',
        image: 'imgs/image.jpeg',
        code: '<input id="radio1" type="radio" name="radio"> <label for="radio1">Item 1</label>\n<input id="radio2" type="radio" name="radio"> <label for="radio2">Item 2</label>\n<input id="radio3" type="radio" name="radio"> <label for="radio3">Item 3</label>'
      },
      {
        text: 'text field',
        image: 'imgs/image.jpeg',
        code: '<input id="text" type="text" name="text">'
      },
      {
        text: 'search field',
        image: 'imgs/image.jpeg',
        code: '<input id="search" type="search" name="search">'
      },
      {
        text: 'file',
        image: 'imgs/image.jpeg',
        code: '<input id="file" type="file" name="file">'
      },
      {
        text: 'range',
        image: 'imgs/image.jpeg',
        code: '<input id="range" type="range" name="range" min="0" max="100" value="50">'
      },
      {
        text: 'date',
        image: 'imgs/image.jpeg',
        code: '<input id="date" type="date" name="date">'
      },
      {
        text: 'time',
        image: 'imgs/image.jpeg',
        code: '<input id="time" type="time" name="time">'
      },
      {
        text: 'number',
        image: 'imgs/image.jpeg',
        code: '<input id="number" type="number" name="number">'
      },
      {
        text: 'color picker',
        image: 'imgs/image.jpeg',
        code: '<input type="color" name="color" value="#00f">'
      }
    ],
    components: [
      {
        text: 'top navbar',
        image: 'imgs/image.jpeg',
        code: '<span>top navbar</span>'
      }
    ]
  }

  // first append the components array
  for (i = 0; i < componentsArr.length; i++) {
    document.querySelector('[data-navcontainer]').innerHTML += '<li class="mb-12"><div><h5 class="mb-6 text-2xl">'+ componentsArr[i] +'</h5><section data-component="'+ componentsArr[i] +'" class="grid grid-cols-2"></section></div></li>'

    // first add image
    let search = components[componentsArr[i]]
    str = ''
    for (num = 0; num < search.length; num++) {
      str += '<article class="m-4 p-4 text-center rounded-lg bg-[#18232c] shadow-lg"><p><a href="#"><img class="w-full rounded-lg" src="'+ search[num].image +'"></a></p><p class="mt-2">'+ search[num].text +'</p></article>'
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
      canvas.innerHTML += elmCode[index]
      updateStorage()

      // close dialog
      document.querySelector('[data-dialog].block').classList.remove('block')
    }
  })

  // search
  searchFunction = () => {
    const labelBtn = document.querySelector('label[for=searchcomponentstoadd')

    // toggle clear and search icon actions
    if (searchcomponentstoadd.value) {
      labelBtn.innerHTML = '<i class="fa fa-times text-xl -ml-9 cursor-pointer"></i>'
      labelBtn.querySelector('.fa-times').onclick = () => {
        searchcomponentstoadd.value = ''
        labelBtn.innerHTML = '<i class="fa fa-search -ml-9 cursor-text"></i>'
        searchcomponentstoadd.onchange()
      }
    } else {
      labelBtn.innerHTML = '<i class="fa fa-search -ml-9 cursor-text"></i>'
    }

    cardText = componentsHome.querySelectorAll('li > div > section > article > p:last-child')
    let val  = searchElm.value.toLowerCase()

    // display all components if there's no value
    if (!val) {
      // show all lists
      document.querySelectorAll('[data-navcontainer] > li').forEach(child => {
        child.style.display = ''
      })

      // show all component containers
      for (i = 0; i < cardText.length; i++) {
        let a = cardText[i]

        let categoryContainer   = a.parentElement.parentElement.parentElement
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
      let a    = cardText[i]
      txtValue = a.textContent;

      // check if component text matches search value
      if (txtValue.toLowerCase().indexOf(val) > -1) {
        // filtered item category (div)
        let categoryContainer   = a.parentElement.parentElement.parentElement
        let componentsContainer = componentsHome.querySelectorAll('li > div > section > article')

        // only show filtered item
        a.parentElement.style.display = ''

        // hide all lists
        document.querySelectorAll('[data-navcontainer] > li').forEach(child => {
          child.style.display = 'none'
        })

        // only show list for the item that's visible 
        const elm = document.querySelectorAll('[data-navcontainer] > li > div > section > article')
        elm.forEach(child => {
          if (child.style.display === '') {
            child.parentElement.parentElement.parentElement.style.display = ''
          }
        })
      } else {
        a.parentElement.style.display = 'none'
        for (num = 0; num < componentsContainer.length; num++) {
          componentsContainer[num].style.display = 'none'
        }
      }
    }
  }
}
initComponents()