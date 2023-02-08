initComponents = () => {
  // variables
  let cardText, componentCard, componentImgs, elmCode = [];
  const componentHead       = document.querySelectorAll('[data-dialog=rightmenu] h5')
  const componentsContainer = document.querySelectorAll('[data-component]')
  const componentsHome      = document.querySelector('[data-navcontainer]')
  const searchElm           = document.querySelector('input[list=componentstoadd]')
  const canvas              = document.querySelector('[data-canvas]')

  // components are stored in this object
  let componentsArr = ['basic', 'input', 'components'];
  let components = {
    basic: [
      {
        text: 'button',
        image: 'imgs/svgs/button.svg',
        code: '<button class="px-4 py-2 bg-blue-500 text-white rounded-md">Button</button>'
      },
      {
        text: 'text',
        image: 'imgs/svgs/text.svg',
        code: '<span class="text-[1rem]">text</span>'
      },
      {
        text: 'image',
        image: 'imgs/svgs/image.svg',
        code: '<img src="imgs/image.jpeg">'
      },
      {
        text: 'video',
        image: 'imgs/svgs/video.svg',
        code: '<iframe width="923" height="519" src="https://www.youtube.com/embed/YI0a_PzIZk0" title="Introducing TouchDrawer - a free and open source svg vector drawing app" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }
    ],
    input: [
      {
        text: 'checkbox',
        image: 'imgs/svgs/checkbox.svg',
        code: '<input id="checkbox1" type="checkbox" name="checkbox"> <label for="checkbox1">Item 1</label>\n<input id="checkbox2" type="checkbox" name="checkbox"> <label for="checkbox2">Item 2</label>\n<input id="checkbox3" type="checkbox" name="checkbox"> <label for="checkbox3">Item 3</label>'
      },
      {
        text: 'radio buttons',
        image: 'imgs/svgs/radio.svg',
        code: '<input id="radio1" type="radio" name="radio"> <label for="radio1">Item 1</label>\n<input id="radio2" type="radio" name="radio"> <label for="radio2">Item 2</label>\n<input id="radio3" type="radio" name="radio"> <label for="radio3">Item 3</label>'
      },
      {
        text: 'text field',
        image: 'imgs/svgs/textfield.svg',
        code: '<input class="inline-block w-[calc(100%-4rem)] py-3 pl-4 order border-solid rounded-md text-lg" type="text" name="text" placeholder="Type something">'
      },
      {
        text: 'search field',
        image: 'imgs/svgs/searchfield.svg',
        code: '<input class="inline-block w-[calc(100%-4rem)] py-3 pl-4 border border-solid rounded-md text-lg" id="search" type="search" placeholder="Search">'
      },
      {
        text: 'textarea',
        image: 'imgs/svgs/textarea.svg',
        code: '<textarea class="w-full h-40 py-3 p-4 border border-solid rounded-md text-lg" placeholder="Type something"></textarea>'
      },
      {
        text: 'file',
        image: 'imgs/svgs/file.svg',
        code: '<input id="file" type="file" name="file">'
      },
      {
        text: 'range',
        image: 'imgs/svgs/range.svg',
        code: '<input id="range" type="range" name="range" min="0" max="100" value="50">'
      },
      {
        text: 'date',
        image: 'imgs/svgs/date.svg',
        code: '<input class="inline-block w-[calc(100%-4rem)] py-3 pl-4 border border-solid rounded-md text-lg" id="date" type="date" name="date" placeholder="mm/dd/yyy">'
      },
      {
        text: 'time',
        image: 'imgs/svgs/time.svg',
        code: '<input class="inline-block w-[calc(100%-4rem)] py-3 pl-4 border border-solid rounded-md text-lg" id="time" type="time" name="time" placeholder="00:00 AM">'
      },
      {
        text: 'number',
        image: 'imgs/svgs/number.svg',
        code: '<input class="inline-block w-[calc(100%-4rem)] py-3 pl-4 border border-solid rounded-md text-lg" id="number" type="number" name="number" placeholder="0">'
      },
      {
        text: 'color picker',
        image: 'imgs/svgs/colorpicker.svg',
        code: '<input type="color" name="color" value="#0000ff" placeholder="#0000ff">'
      }
    ],
    components: [
      {
        text: 'top navbar 1',
        image: 'imgs/components/topnav1.png',
        code: '\n        <nav class="flex flex-row justify-between">\n            <span>\n              <button class="flex-1 px-3 h-12 text-blue-500">\n                appname\n              </button>\n            </span>\n\n            <span>\n              <button class="flex-1 w-12 h-12 -mx-1">\n                <i class="fa fa-add"></i>\n              </button>\n              <button class="flex-1 w-12 h-12 -mx-1">\n                <i class="fa fa-search"></i>\n              </button>\n              <button class="flex-1 mr-3 w-12 h-12 -mx-1">\n                <i class="fa fa-comment"></i>\n                <span class="absolute -ml-2 -mt-[2px] inline-block w-4 h-4 bg-red-500 text-white rounded-full leading-4 text-[8px] transform origin-center scale-[.75]">\n                  31\n                </span>\n              </button>\n            </span>\n          </nav>\n'
      },
      {
        text: 'top navbar 2',
        image: 'imgs/components/topnav2.png',
        code: '\n        <nav class="flex flex-row border-b border-gray-500">\n            <button class="flex-1 w-12 h-12 -mx-1 text-blue-500">\n              <i class="fa fa-house"></i>\n            </button>\n            <button class="flex-1 w-12 h-12 -mx-1">\n              <i class="fa fa-user-group"></i>\n              <span class="absolute -ml-2 -mt-[2px] inline-block w-4 h-4 bg-red-500 text-white rounded-full leading-4 text-[8px] transform origin-center scale-[.75]">\n                1\n              </span>\n            </button>\n            <button class="flex-1 w-12 h-12 -mx-1">\n              <i class="fa fa-store"></i>\n            </button>\n            <button class="flex-1 w-12 h-12 -mx-1">\n              <i class="fa fa-play"></i>\n            </button>\n            <button class="flex-1 w-12 h-12 -mx-1">\n              <i class="fa fa-bell"></i>\n              <span class="absolute -ml-2 -mt-[2px] inline-block w-4 h-4 bg-red-500 text-white rounded-full leading-4 text-[8px] transform origin-center scale-[.75]">\n                1\n              </span>\n            </button>\n            <button class="flex-1 w-12 h-12 -mx-1">\n              <i class="fa fa-cog"></i>\n            </button>\n          </nav>\n'
      },
      {
        text: 'top navbar 3',
        image: 'imgs/components/topnav3.png',
        code: '\n        <nav class="flex flex-row justify-between">\n        <span>\n          <button class="flex-1 w-12 h-12 -mx-1">\n            <i class="fa fa-angle-left"></i>\n          </button>\n          <button class="flex-1 px-3 h-12 text-blue-500">\n            appname\n          </button>\n        </span>\n\n        <span>\n          <button class="flex-1 w-12 h-12 -mx-1">\n            <i class="fa fa-add"></i>\n          </button>\n          <button class="flex-1 w-12 h-12 -mx-1">\n            <i class="fa fa-search"></i>\n          </button>\n        </span>\n      </nav>\n'
      },
      {
        text: 'top navbar 4',
        image: 'imgs/components/topnav4.png',
        code: '\n        <nav class="flex flex-row border-b border-gray-500 overflow-auto">\n        <a href="#" class="flex-1 px-4 py-2 text-blue-500 border-r border-gray-500">\n          Link\n        </a>\n        <a href="#" class="flex-1 px-4 py-2 border-r border-gray-500">\n          Link\n        </a>\n        <a href="#" class="flex-1 px-4 py-2 border-r border-gray-500">\n          Link\n        </a>\n        <a href="#" class="flex-1 px-4 py-2 border-r border-gray-500">\n          Link\n        </a>\n        <a href="#" class="flex-1 px-4 py-2">\n          Link\n        </a>\n      </nav>\n'
      },
      {
        text: 'top navbar 5',
        image: 'imgs/components/topnav5.png',
        code: '\n        <nav class="text-right">\n        <button class="mr-3 text-[2rem]">\n          <i class="fa fa-times"></i>\n        </button>\n      </nav>\n'
      },
      {
        text: 'top searchbar 1',
        image: 'imgs/components/topsearchbar1.png',
        code: '\n        <div class="p-4">\n        <input class="inline-block w-[calc(100%-4rem)] py-3 pl-4 order border-solid rounded-md text-lg" type="search" name="search" placeholder="Search">\n        <button class="mt-2 mr-2 float-right text-3xl">\n          <i class="fa fa-times"></i>\n        </button>\n      </div>\n'
      },
      {
        text: 'hero 1',
        image: 'imgs/components/hero1.png',
        code: '\n          <div class="p-4 h-full text-center bg-[url(\'imgs/polyuibg.jpeg\')] bg-cover overflow-auto">\n        <hgroup class="p-4 pb-8 text-white">\n          <h3 class="text-2xl mb-8 font-bold uppercase">\n            free website builder\n          </h3>\n          <h2 class="text-4xl">\n            Create awesome <strong>mobile-friendly</strong> websites! No coding, Free and Open Source.\n          </h2>\n        </hgroup>\n\n        <div class="mb-5 text-white">\n          <button class="px-10 py-2 mb-4 max-w-[12rem] bg-blue-500 border border-blue-500 rounded-full uppercase">\n            <span class="text-xs">\n              Launch\n            </span>\n          </button>\n          <button class="px-10 py-2 mb-4 max-w-[12rem] bg-transparent border border-white rounded-full uppercase">\n            <span class="text-xs">\n              Learn more\n            </span>\n          </button>\n        </div>\n\n        <img class="mx-auto" src="imgs/pexels-photo-834949.jpeg" alt="Screenshot">\n      </div>\n'
      },
      {
        text: 'hero 2',
        image: 'imgs/components/hero2.png',
        code: '\n          <div class="grid place-items-center p-4 h-full text-center overflow-auto">\n        <div>\n          <hgroup class="p-4 pb-8">\n            <h3 class="text-6xl mb-8 font-bold uppercase">\n              see it in action\n            </h3>\n            <h2 class="text-2xl w-auto max-w-4xl">\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eum molestiae deleniti unde possimus, neque fugit maiores? Quo aliquid quam veniam dolor, delectus neque illo vel ipsa commodi hic quas.\n            </h2>\n          </hgroup>\n\n          <div class="mb-5">\n            <button class="mb-2 mx-auto block">\n              <i class="mr-1 text-[4rem] fa fa-play"></i>\n            </button>\n\n            <span class="text-xs capitalize">\n              watch video\n            </span>\n          </div>\n        </div>\n      </div>\n'
      },
      {
        text: 'hero 3',
        image: 'imgs/components/hero3.png',
        code: '\n          <div class="p-4 h-full bg-gradient-to-bl from-[#e5658a] to-[#fbac7f] overflow-auto text-white">\n        <div class="py-4 w-auto max-w-4xl mx-auto">\n          <hgroup class="pb-8">\n            <h3 class="inline-block text-[1.5rem] mb-8 italic uppercase">\n              my awesome sub-headline\n            </h3>\n            <h2 class="text-[2.5rem] font-bold">\n              My awesome headline\n            </h2>\n          </hgroup>\n\n          <p class="text-[2rem]">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est debitis placeat iusto natus, architecto dicta, magnam ab.\n          </p>\n\n          <div class="my-5">\n            <button class="px-10 py-2 mb-4 max-w-[12rem] bg-blue-500 border border-blue-500 rounded-full uppercase">\n              <span class="text-xs">\n                learn more\n              </span>\n            </button>\n            <button class="px-10 py-2 mb-4 max-w-[12rem] bg-transparent border border-white rounded-full uppercase">\n              <span class="text-xs">\n                live demo\n              </span>\n            </button>\n          </div>\n        </div>\n      </div>\n'
      },
      {
        text: 'card house listing',
        image: 'imgs/components/cardhouselisting.png',
        code: '\n          <div class="shadow-lg w-auto max-w-4xl mx-auto">\n        <img class="w-full" src="imgs/polyuipic.jpeg" alt="Photo">\n\n        <div class="p-4">\n          <hgroup class="py-2">\n            <h2 class="font-bold capitalize">\n              My awesome heading\n            </h2>\n            <h3>\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n            </h3>\n          </hgroup>\n\n          <div>\n            <i class="text-yellow-400 text-[1.25rem] fa fa-star"></i>\n            <span class="capitalize">\n              5/5 rating\n            </span>\n          </div>\n        </div>\n      </div>\n'
      },
      {
        text: 'card lesson',
        image: 'imgs/components/cardlesson.png',
        code: '\n          <div class="p-4 flex place-items-center shadow-lg w-auto max-w-4xl mx-auto">\n        <img class="w-[5rem] h-[5rem] rounded-full mr-2" src="imgs/polyuipic.jpeg" alt="Photo">\n\n        <hgroup class="p-2 w-3/4 h-3/4">\n          <h2 class="font-bold capitalize">\n            lesson name\n          </h2>\n          <h3>\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n          </h3>\n        </hgroup>\n      </div>\n'
      },
      {
        text: 'card paywall feature',
        image: 'imgs/components/cardpaywallfeature.png',
        code: '\n          <div class="p-4 shadow-2xl w-auto max-w-xl m-auto">\n        <div class="font-bold capitalize">\n          <span class="text-[1.5rem]">\n            1 year\n          </span>\n          <span class="float-right text-[1.5rem] text-blue-600">\n            $300\n          </span>\n        </div>\n\n        <div class="text-blue-600 capitalize">membership</div>\n\n        <p class="py-4">\n          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum deleniti laborum, exercitationem cupiditate officiis officia. Suscipit sapiente incidunt alias. Laudantium itaque error maiores perspiciatis aperiam, aliquam eligendi debitis provident quis?\n        </p>\n\n        <button class="px-4 py-2 border border-blue-400 text-blue-400 capitalize rounded-md">\n          save 20%\n        </button>\n        <button class="float-right px-8 py-3 border border-blue-500 bg-blue-500 text-white capitalize rounded-md">\n          buy now\n        </button>\n      </div>\n'
      },
      {
        text: 'card order widget',
        image: 'imgs/components/cardorderwidget.png',
        code: '\n          <div class="p-4 shadow-lg w-auto max-w-4xl mx-auto">\n        <div class="px-2 border-l-4 border-blue-500">\n          <div class="flex flex-row justify-between capitalize">\n            <span class="font-bold text-blue-500">\n              pending order\n            </span>\n            <span>\n              order summary\n            </span>\n          </div>\n          <div class="flex flex-row justify-between capitalize">\n            <span>\n              estimated pickup time\n            </span>\n            <span class="font-bold">\n              $25.40\n            </span>\n          </div>\n          <div class="mt-1 flex flex-row justify-between capitalize">\n            <span class="font-bold text-[1.5rem]">\n              2:00pm\n            </span>\n            <span class="mt-3">\n              4 items\n            </span>\n          </div>\n        </div>\n      </div>\n'
      },
      {
        text: 'card details',
        image: 'imgs/components/carddetails.png',
        code: '\n          <div class="p-4">\n        <a href="#" class="relative inline-block p-4 rounded-lg shadow-2xl capitalize">\n          <img class=" rounded-lg" src="imgs/polyuipic.jpeg" alt="Photo">\n\n          <hgroup class="my-4">\n            <h3>oil change</h3>\n            <h2 class="font-bold">name of car</h2>\n          </hgroup>\n          <div class="grid grid-cols-2">\n            <span>\n              <i class="fa fa-clock"></i> <span>in preparation</span>\n            </span>\n            <span class="text-right font-bold">2:00pm</span>\n          </div>\n        </a>\n      </div>\n'
      },
      {
        text: 'card rating 1',
        image: 'imgs/components/cardrating1.png',
        code: '\n          <div class="p-4 shadow-xl w-auto max-w-4xl mx-auto rounded-lg">\n        <div class="flex flex-row justify-between place-items-center">\n          <span class="flex-1">\n            <img class="inline-block w-1/4 h-1/4 rounded-full mr-1" src="imgs/avatar.png" alt="Avatar">\n\n            <span class="flex-1 font-bold capitalize">\n              john doe\n            </span>\n          </span>\n          <div class="flex-1 text-right">\n            <h2 class="capitalize">\n              overall\n            </h2>\n            <div class="text-[1.25rem]">\n              <span class="font-bold">5</span> <i class="fa fa-star text-yellow-500"></i>\n            </div>\n          </div>\n        </div>\n\n        <p class="py-4">\n          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quasi pariatur ducimus aliquam explicabo quaerat a.\n        </p>\n      </div>\n'
      },
      {
        text: 'card rating 2',
        image: 'imgs/components/cardrating2.png',
        code: '\n          <div class="p-4 shadow-xl w-auto max-w-4xl mx-auto rounded-lg">\n        <div class="flex flex-row justify-between place-items-center">\n          <div class="flex-1">\n            <h2 class="capitalize font-bold text-[1.25rem]">\n              1 year\n            </h2>\n            <button class="text-[1rem]">\n              <i class="fa fa-star text-yellow-500"></i>\n            </button>\n            <button class="text-[1rem]">\n              <i class="fa fa-star text-yellow-500"></i>\n            </button>\n            <button class="text-[1rem]">\n              <i class="fa fa-star text-yellow-500"></i>\n            </button>\n            <button class="text-[1rem]">\n              <i class="fa fa-star text-yellow-500"></i>\n            </button>\n            <button class="text-[1rem]">\n              <i class="fa fa-star text-yellow-500"></i>\n            </button>\n          </div>\n          <button class="flex-1 text-right">\n            <img class="inline-block w-1/4 h-1/4 rounded-full" src="imgs/avatar.png" alt="Avatar">\n          </button>\n        </div>\n\n        <p class="py-4">\n          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quasi pariatur ducimus aliquam explicabo quaerat a.\n        </p>\n      </div>\n'
      },
      {
        text: 'video card',
        image: 'imgs/components/videocard.png',
        code: '\n          <div class="flex place-items-center shadow-lg w-auto max-w-4xl mx-auto rounded-md">\n        <div class="relative">\n          <img class="w-[6rem] h-[6rem] mr-2" src="imgs/polyuipic.jpeg" alt="Photo">\n          <button class="absolute bottom-0 left-0 text-[.8rem]">\n            <i class="fa fa-play p-3 m-1 bg-white text-black rounded-full leading-[0.9]"></i>\n          </button>\n        </div>\n\n        <div class="p-2 w-3/4 h-3/4">\n          <h2 class="font-bold capitalize">\n            Title of the video\n          </h2>\n          <div>\n            4:00 min\n          </div>\n          <div class="mt-2">\n            <img class="inline-block w-[1.5rem] h-[1.5rem] rounded-full mr-2" src="imgs/avatar.png" alt="Photo">\n            <span class="font-bold capitalize">\n              author\n            </span>\n          </div>\n        </div>\n      </div>\n'
      },
      {
        text: 'video lesson card',
        image: 'imgs/components/videolessoncard.png',
        code: '\n          <div class="p-4 shadow-xl w-auto max-w-4xl mx-auto rounded-lg">\n        <div class="flex place-items-center">\n          <div class="relative">\n            <img class="w-[6rem] h-[4rem] mr-2 rounded-lg" src="imgs/polyuipic.jpeg" alt="Photo">\n            <button class="absolute bottom-0 right-0 px-1 m-1 text-[.8rem] text-white bg-[rgb(0_0_0_/_50%)] rounded-sm">\n              02:00\n            </button>\n          </div>\n          <div class="p-2 w-3/4 h-3/4 font-bold capitalize">\n            lesson name\n          </div>\n        </div>\n        <div class="my-4">\n          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium velit repudiandae id ex quae.\n        </div>\n\n        <div class="border-t-2 border-blue-500">\n          <button class="mt-4 font-bold">\n            <i class="fa fa-credit-card mr-1"></i>\n            Purchase\n          </button>\n        </div>\n      </div>\n'
      },
      {
        text: 'center card',
        image: 'imgs/components/centercard.png',
        code: '\n          <div class="p-4 h-full grid place-items-center">\n        <div class="text-center">\n          <img class="inline-block w-1/2 rounded-full" src="imgs/avatar.png" alt="Avatar">\n\n          <p class="py-4">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos sint ipsam facere quod, unde, veritatis.\n          </p>\n\n          <div class="text-[1.3rem]">\n            <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n              <i class="fa fa-brands fa-facebook"></i>\n            </a>\n            <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n              <i class="fa fa-brands fa-twitter"></i>\n            </a>\n            <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n              <i class="fa fa-brands fa-google-plus"></i>\n            </a>\n            <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n              <i class="fa fa-brands fa-linkedin"></i>\n            </a>\n            <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n              <i class="fa fa-brands fa-instagram"></i>\n            </a>\n            <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n              <i class="fa fa-brands fa-deviantart"></i>\n            </a>\n            <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n              <i class="fa fa-brands fa-behance"></i>\n            </a>\n            <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n              <i class="fa fa-brands fa-youtube"></i>\n            </a>\n            <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n              <i class="fa fa-brands fa-twitch"></i>\n            </a>\n            <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n              <i class="fa fa-brands fa-github"></i>\n            </a>\n          </div>\n        </div>\n      </div>\n'
      },
      {
        text: 'blog 1',
        image: 'imgs/components/blog1.png',
        code: '\n          <div class="p-4 text-center">\n        <div class="inline-block p-4 max-w-xs mx-4 shadow-2xl text-left">\n          <button class="py-2 underline">\n            Category\n          </button>\n          <h2 class="text-[1.4rem] italic uppercase">\n            my awesome headline\n          </h2>\n\n          <div class="my-4">\n            <div>\n              <i class="fa fa-user"></i>\n              <span class="ml-2">John Doe</span>\n            </div>\n            <div>\n              <i class="fa fa-clock"></i>\n              <span class="ml-2">February 13, 1992</span>\n            </div>\n          </div>\n\n          <p class="my-4">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est debitis placeat iusto natus, architecto dicta, magnam ab.\n          </p>\n\n          <img class="w-full" src="imgs/polyuipic.jpeg" alt="Photo">\n        </div>\n      </div>\n'
      },
      {
        text: 'icon grid group',
        image: 'imgs/components/icongridgroup.png',
        code: '\n          <div class="grid grid-cols-4 gap-4 p-4">\n        <span class="text-center">\n          <i class="text-6xl fa fa-columns"></i>\n\n          <div class="mt-6">\n            Multi Layout\n          </div>\n        </span>\n        <span class="text-center">\n          <i class="text-6xl fa fa-rocket"></i>\n\n          <div class="mt-6">\n            Creative Idea\n          </div>\n        </span>\n        <span class="text-center">\n          <i class="text-6xl fa fa-globe"></i>\n\n          <div class="mt-6">\n            Open Source\n          </div>\n        </span>\n        <span class="text-center">\n          <i class="text-6xl fa fa-heart"></i>\n\n          <div class="mt-6">\n            Free\n          </div>\n        </span>\n      </div>\n'
      },
      {
        text: 'button group',
        image: 'imgs/components/buttongroup.png',
        code: '\n          <footer class="grid grid-cols-2 gap-2 p-4">\n        <button class="px-4 py-2 bg-gray-500 text-white rounded-md">\n          Cancel\n        </button>\n        <button class="px-4 py-2 bg-blue-500 text-white rounded-md">\n          Confirm\n        </button>\n      </footer>\n'
      },
      {
        text: 'header group 1',
        image: 'imgs/components/hgroup1.png',
        code: '\n          <hgroup class="px-1 py-4 text-center">\n        <h2 class="text-xl font-bold">\n          Take a look at this amazing headline\n        </h2>\n        <h3 class="text-base">\n          Don\'t forget about the subtitle\n        </h3>\n      </hgroup>\n'
      },
      {
        text: 'header group 2',
        image: 'imgs/components/hgroup2.png',
        code: '\n          <hgroup class="px-1 py-4 text-center">\n        <h3 class="mb-2 text-base">\n          Take a look at this amazing headline\n        </h3>\n        <h2 class="text-xl font-bold">\n          Don\'t forget about the subtitle\n        </h2>\n      </hgroup>\n'
      },
      {
        text: 'quote 1',
        image: 'imgs/components/quote1.png',
        code: '\n          <div class="p-4 bg-yellow-400">\n        <div class="mb-4 text-center">\n          <img class="w-8 mr-2 inline-block rounded-full" src="imgs/avatar.png" alt="Person">\n          <span class="font-bold pr-1">John Doe</span>\n          <span class="italic pl-2 border-l border-gray-500 text-xs">Review on Google Play!</span>\n        </div>\n\n        <div class="p-3 pb-5 mb-4 bg-white rounded-lg">\n          <h2 class="h-3 text-3xl text-left text-gray-600">🙶</h2>\n          <p class="px-10 text-sm text-gray-600">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel ducimus autem accusantium ipsa ullam aspernatur, mollitia laudantium quis quisquam nemo aliquid laborum accusamus, animi possimus consequatur eaque quidem pariatur.\n          </p>\n          <h2 class="h-3 text-3xl text-right text-gray-600">🙷</h2>\n        </div>\n      </div>\n'
      },
      {
        text: 'quote 2',
        image: 'imgs/components/quote2.png',
        code: '\n          <div class="p-4 bg-yellow-400">\n        <div class="p-3 mb-4 bg-white rounded-lg">\n          <h2 class="h-3 text-3xl text-left text-gray-600">🙶</h2>\n          <p class="px-10 text-sm text-gray-600">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel ducimus autem accusantium ipsa ullam aspernatur, mollitia laudantium quis quisquam nemo aliquid laborum accusamus, animi possimus consequatur eaque quidem pariatur.\n          </p>\n          <h2 class="h-3 text-3xl text-right text-gray-600">🙷</h2>\n        </div>\n\n        <div class="text-center">\n          <img class="w-8 mr-2 inline-block rounded-full" src="imgs/avatar.png" alt="Person">\n          <span class="font-bold pr-1">John Doe</span>\n          <span class="italic pl-2 border-l border-gray-500 text-xs">Review on Google Play!</span>\n        </div>\n      </div>\n'
      },
      {
        text: 'list 1',
        image: 'imgs/components/list1.png',
        code: '\n          <ul class="p-4">\n        <li class="py-2">\n          <button>\n            <i class="w-6 pr-4 fa fa-home"></i>\n            <span>Home</span>\n          </button>\n        </li>\n        <li class="py-2">\n          <button>\n            <i class="w-6 pr-4 fa fa-book"></i>\n            <span>About</span>\n          </button>\n        </li>\n        <li class="py-2">\n          <button>\n            <i class="w-6 pr-4 fa fa-comment"></i>\n            <span>Contact</span>\n          </button>\n        </li>\n      </ul>\n'
      },
      {
        text: 'list 2',
        image: 'imgs/components/list2.png',
        code: '\n          <ul class="p-4">\n        <li class="flex flex-row justify-between">\n          <span>\n            <button class="flex-1">index.html</button>\n          </span>\n          <span>\n            <button class="flex-1 mx-2">\n              <i class="fa fa-font"></i>\n            </button>\n            <button class="flex-1 mx-2">\n              <i class="fa fa-clone"></i>\n            </button>\n            <button class="flex-1 mx-2">\n              <i class="fa fa-trash"></i>\n            </button>\n          </span>\n        </li>\n        <li class="flex flex-row justify-between">\n          <span>\n            <button class="flex-1">about.html</button>\n          </span>\n          <span>\n            <button class="flex-1 mx-2">\n              <i class="fa fa-font"></i>\n            </button>\n            <button class="flex-1 mx-2">\n              <i class="fa fa-clone"></i>\n            </button>\n            <button class="flex-1 mx-2">\n              <i class="fa fa-trash"></i>\n            </button>\n          </span>\n        </li>\n        <li class="flex flex-row justify-between">\n          <span>\n            <button class="flex-1">contact.html</button>\n          </span>\n          <span>\n            <button class="flex-1 mx-2">\n              <i class="fa fa-font"></i>\n            </button>\n            <button class="flex-1 mx-2">\n              <i class="fa fa-clone"></i>\n            </button>\n            <button class="flex-1 mx-2">\n              <i class="fa fa-trash"></i>\n            </button>\n          </span>\n        </li>\n      </ul>\n'
      },
      {
        text: 'create post',
        image: 'imgs/components/createpost.png',
        code: '\n          <div class="p-4 shadow-lg w-auto max-w-4xl mx-auto">\n          <div class="flex flex-row justify-between p-4">\n            <img class="inline-block w-16 h-16 mt-2 rounded-full" src="imgs/svgs/profile-circle.svg" alt="Profile Photo">\n            <textarea class="inline-block w-full p-1 ml-4 h-20 border border-gray-500 resize-none" placeholder="Type something"></textarea>\n          </div>\n\n          <hr class="mx-4 border-gray-500">\n\n          <nav class="flex flex-row justify-between p-4">\n            <span>\n              <button class="mt-2 pr-4 text-1xl">\n                <i class="fa fa-image"></i>\n              </button>\n              <button class="mt-2 px-4 text-1xl">\n                <i class="fa fa-play"></i>\n              </button>\n              <button class="mt-2 px-4 text-1xl">\n                <i class="fa fa-microphone"></i>\n              </button>\n              <button class="mt-2 pl-4 text-1xl">\n                <i class="fa fa-location-dot"></i>\n              </button>\n            </span>\n\n            <span>\n              <button class="py-2 px-4 bg-blue-500 text-white rounded-lg">\n                Post\n              </button>\n            </span>\n          </nav>\n        </div>\n'
      },
      {
        text: 'cart item',
        image: 'imgs/components/cartitem.png',
        code: '\n          <div class="p-2 m-4 flex flex-row justify-between place-items-center border border-gray-500 w-5/6 max-w-4xl mx-auto rounded-md">\n        <div class="flex-0">\n          <img class="w-[3rem] h-[3rem] mr-2 rounded-lg" src="imgs/polyuipic.jpeg" alt="Photo">\n        </div>\n        <div class="flex-1 text-[0.9rem]">\n          <hgroup class="inline-block capitalize">\n            <h2 class="font-bold text-[1.2rem]">\n              item name\n            </h2>\n            <h2>\n              secondary text\n            </h2>\n          </hgroup>\n        </div>\n        <span class="flex-0">\n          $1.50\n        </span>\n      </div>\n'
      },
      {
        text: 'price breakdown',
        image: 'imgs/components/pricebreakdown.png',
        code: '\n          <div class="p-4 w-full capitalize">\n        <div class="mb-1 font-bold">\n          price breakdown\n        </div>\n        <div class="mb-2 grid grid-cols-2 justify-between content-between">\n          <span>\n            base price\n          </span>\n          <span class="text-right">\n            $4.99\n          </span>\n          <span>\n            taxes\n          </span>\n          <span class="text-right">\n            $4.99\n          </span>\n          <span>\n            cleaning fee\n          </span>\n          <span class="text-right">\n            $4.99\n          </span>\n        </div>\n        <hgroup class="grid grid-cols-2 font-bold">\n          <h3 class="text-[1.25rem]">total</h3>\n          <h2 class="text-[1.5rem] text-right">$14.97</h2>\n        </hgroup>\n      </div>\n'
      },
      {
        text: 'on demand listing',
        image: 'imgs/components/ondemandlisting.png',
        code: '\n          <div class="p-4 text-center">\n        <a href="#" class="relative inline-block p-4 rounded-lg shadow-2xl text-left">\n          <span class="absolute z-10 top-6 right-6 px-2 py-1 bg-blue-500 capitalize text-white rounded-md text-[0.75rem]">\n            open\n          </span>\n          <img class=" rounded-lg" src="imgs/polyuipic.jpeg" alt="Photo">\n\n          <hgroup class="capitalize my-4">\n            <h2 class="font-bold">popular projects</h2>\n            <h3>project description</h3>\n          </hgroup>\n          <div class="grid grid-cols-2">\n            <span>\n              <i class="fa fa-star text-yellow-400"></i> <span>5</span>\n            </span>\n            <span class="text-right">$20/hr</span>\n          </div>\n        </a>\n      </div>\n'
      },
      {
        text: 'flight card',
        image: 'imgs/components/flightcard.png',
        code: '\n          <div class="p-4 shadow-lg w-auto max-w-4xl mx-auto">\n        <div class="flex flex-row justify-between capitalize">\n          <span>\n            departure\n          </span>\n          <span>\n            arrival\n          </span>\n        </div>\n        <div class="flex flex-row justify-between capitalize font-bold text-[1.25rem]">\n          <span>\n            new york\n          </span>\n          <span>\n            <i class="fa fa-plane"></i>\n          </span>\n          <span>\n            rome\n          </span>\n        </div>\n        <div class="flex flex-row justify-between uppercase">\n          <span>\n            (jfk)\n          </span>\n          <span>\n            (fco)\n          </span>\n        </div>\n        <div class="flex flex-row justify-between capitalize">\n          <span>\n            2 nov <span class="font-bold text-blue-500">6:00am</span>\n          </span>\n          <span>\n            2 nov <span class="font-bold text-blue-500">15:35pm</span>\n          </span>\n        </div>\n      </div>\n'
      },
      {
        text: 'share to',
        image: 'imgs/components/shareto.png',
        code: '\n          <div class="p-4 text-center">\n        <h2 class="pb-4 text-xl font-bold">\n          Share This Page!\n        </h2>\n\n        <a href="#" class="text-[#4862A3] text-2xl mx-4">\n          <i class="fa fa-brands fa-facebook"></i>\n        </a>\n        <a href="#" class="text-[#1DA1F2] text-2xl mx-4">\n          <i class="fa fa-brands fa-twitter"></i>\n        </a>\n        <a href="#" class="text-[#0077B5] text-2xl mx-4">\n          <i class="fa fa-brands fa-linkedin"></i>\n        </a>\n      </div>\n'
      },
      {
        text: 'audio player',
        image: 'imgs/components/audioplayer.png',
        code: '\n          <div class="p-4 relative w-auto h-full max-w-lg mx-auto">\n        <div class="w-full h-[calc(100%-8rem)] bg-[url(\'imgs/avatar.png\')] bg-[50%_50%] bg-no-repeat"></div>\n\n        <div class="flex flex-row justify-between place-items-center">\n          <div class="py-4 flex-1 text-[0.9rem]">\n            <hgroup class="inline-block capitalize">\n              <h2 class="font-bold">\n                song name\n              </h2>\n              <a href="#">\n                john doe\n              </a>\n            </hgroup>\n          </div>\n          <button class="flex-0">\n            <i class="fa fa-ellipsis"></i>\n          </button>\n        </div>\n\n        <div class="absolute bottom-0 inset-x-0 p-4">\n          <input class="w-full" type="range" min="0" max="100" value="0">\n\n          <div class="mt-4 flex flex-row justify-between place-items-center">\n            <button class="flex-1">\n              <i class="fa fa-repeat"></i>\n            </button>\n            <button class="flex-1">\n              <i class="fa fa-backward-step"></i>\n            </button>\n            <button class="flex-1">\n              <i class="fa fa-play"></i>\n            </button>\n            <button class="flex-1">\n              <i class="fa fa-forward-step"></i>\n            </button>\n            <button class="flex-1">\n              <i class="fa fa-shuffle"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n'
      },
      {
        text: 'lottie animation',
        image: 'imgs/components/lottieanimation.png',
        code: '\n          <div class="p-4 h-full grid items-center">\n        <div>\n          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>\n          <lottie-player class="w-full h-auto" src="https://assets2.lottiefiles.com/packages/lf20_fx6yx9fn.json" background="transparent" speed="1" loop autoplay></lottie-player>\n          <h2 class="capitalize text-lg font-bold text-center">\n            loading\n          </h2>\n        </div>\n      </div>\n'
      },
      {
        text: 'main',
        image: 'imgs/components/main.png',
        code: '\n        <main class="p-4 shadow-lg w-auto h-full max-w-4xl mx-auto overflow-auto">\n          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quaerat necessitatibus tempore quia perferendis ipsum sapiente id labore pariatur velit, beatae tenetur rerum neque corrupti aut. Dolores explicabo inventore sed!\n        </main>\n'
      },
      {
        text: 'footer 1',
        image: 'imgs/components/footer1.png',
        code: '\n        <div class="p-4 py-10 text-center bg-gray-800">\n        <a href="https://michaelsboost.github.io/" target="_blank">\n          <img class="w-20 mx-auto rounded-full" src="imgs/avatar.png" alt="Avatar">\n        </a>\n\n        <p class="mt-5 text-white">\n          Made with <span class="fa fa-heart text-[#f66]"></span> and <span class="fa fa-coffee text-[#52bab3]"></span> by <a class="underline" href="https://michaelsboost.github.io/" target="_blank">Michael</a> &amp; others.\n        </p>\n      </div>\n'
      },
      {
        text: 'footer 2',
        image: 'imgs/components/footer2.png',
        code: '\n        <div class="p-4 py-10 text-center bg-gray-800 text-white capitalize">\n        © copyright 2023 your app - all rights reserved\n      </div>\n'
      },
      {
        text: 'footer 3',
        image: 'imgs/components/footer3.png',
        code: '\n        <div class="p-4 py-10 text-center bg-gray-800 text-white capitalize">\n        <div class="py-4 text-white text-[1rem]">\n          <a class="px-4" href="#">\n            about us\n          </a>\n          <a class="px-4" href="#">\n            services\n          </a>\n          <a class="px-4" href="#">\n            get in touch\n          </a>\n          <a class="px-4" href="#">\n            careers\n          </a>\n          <a class="px-4" href="#">\n            work\n          </a>\n        </div>\n\n        <div class="py-4 text-gray-500 text-[1.3rem]">\n          <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n            <i class="fa fa-brands fa-facebook"></i>\n          </a>\n          <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n            <i class="fa fa-brands fa-twitter"></i>\n          </a>\n          <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n            <i class="fa fa-brands fa-google-plus"></i>\n          </a>\n          <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n            <i class="fa fa-brands fa-linkedin"></i>\n          </a>\n          <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n            <i class="fa fa-brands fa-instagram"></i>\n          </a>\n          <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n            <i class="fa fa-brands fa-deviantart"></i>\n          </a>\n          <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n            <i class="fa fa-brands fa-behance"></i>\n          </a>\n          <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n            <i class="fa fa-brands fa-youtube"></i>\n          </a>\n          <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n            <i class="fa fa-brands fa-twitch"></i>\n          </a>\n          <a class="mx-[0.2rem]" href="http://michaelsboost.github.io/" target="_blank">\n            <i class="fa fa-brands fa-github"></i>\n          </a>\n        </div>\n\n        <div class="py-4 text-[0.5rem]">\n          © copyright 2023 your app - all rights reserved\n        </div>\n      </div>\n'
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