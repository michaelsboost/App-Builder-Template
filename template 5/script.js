let project = {
  name: "App name",
  version: "0.1",
  url: "https://michaelsboost.com/",
  meta: "",
  logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNTEyIgogICBoZWlnaHQ9IjUxMiIKICAgdmlld0JveD0iMCAwIDEzNS40NjY2NiAxMzUuNDY2NjciCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzUiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPGcKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuODMwNjQyO2ZpbGw6IzQ3NDdmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6Ny45Mzc1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtwYWludC1vcmRlcjptYXJrZXJzIHN0cm9rZSBmaWxsIgogICAgICAgaWQ9InBhdGgxODQiCiAgICAgICBjeD0iNjcuNzMzMzMiCiAgICAgICBjeT0iNjcuNzMzMzMiCiAgICAgICByPSI2Ny43MzMzMyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjMyMjQzMXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDc0LjU4MzQxMiw2My43NjcwNDQgODUuMzI0MTY3LDIzLjY4MTk5MiAzOC4xODAxMzgsNzAuODI2MDIzIDYwLjg4MzI1Niw3MS42OTk2MjIgNTAuMTQyNTAxLDExMS43ODQ2NyA5Ny4yODY1MjksNjQuNjQwNjQzIFoiCiAgICAgICBpZD0icGF0aDg5OC0zIiAvPgogIDwvZz4KPC9zdmc+Cg==",
  settings: {
    console: false,
    scratchpad: "",
  },
  pages: [
    {
      name: "index",
      title: "An attractive title",
      description: "The most attractive description ever!",
      author: "John Doe",
      website: "https://website.com/",
      blocks: ``,
      actionBlocks: []
    },
    {
      name: "content",
      title: "An attractive title",
      description: "The most attractive description ever!",
      author: "John Doe",
      website: "https://website.com/",
      blocks: ``,
      actionBlocks: []
    }
  ]
};

const app = {
  appName: "AppName",
  appVersion: "0.0.1",
  appUrl: "https://github.com/michaelsboost/App-Builder-Template/tree/gh-pages",
  appLicense: "https://github.com/michaelsboost/App-Builder-Template/blob/gh-pages/LICENSE",
  activePage: 0,
  libraries: [],
  blocks: [
    {
      category: "Basic",
      items: [
        {
          name: "Audio",
          image: "audio.svg",
          code: `<audio controls>
  <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`,
        },
        {
          name: "Box",
          image: "box.svg",
          code: `<div>hello</div>`,
        },
        {
          name: "Button",
          image: "button.svg",
          code: `<button>button</button>`,
        },
        {
          name: "Dropdown",
          image: "dropdown.svg",
          code: `<details>
  <summary>Summary</summary>
  <div>Details</div>
</details>`,
        },
        {
          name: "Image",
          image: "image.svg",
          code: `<img src="https://tailwindcss.com/img/card-top.jpg">`,
        },
        {
          name: "Input",
          image: "textfield.svg",
          code: `<input type="text">`,
        },
        {
          name: "Select",
          image: "select.svg",
          code: `<select>
  <option value="hello">hello</option>
</select>`,
        },
        {
          name: "Text",
          image: "text.svg",
          code: `<span>hello</span>`,
        },
        {
          name: "Textarea",
          image: "textarea.svg",
          code: `<textarea></textarea>`,
        },
        {
          name: "Video",
          image: "video.svg",
          code: `<video controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
          <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>`,
        }
      ]
    }
  ],

  // toggle container via mouseover & mouseleave
  showController: ({ handle, container, animateIn }) => {
    const button = document.querySelector(handle);
    const containerElem = document.querySelector(container);

    if (!containerElem || !button) {
      console.error('Container or button not found');
      return;
    }

    const showContainer = () => {
      if (animateIn === "fade") {
        let opacity = 0;
        containerElem.style.opacity = opacity;
        containerElem.classList.remove("hidden");

        let intervalID = setInterval(function() {
          if (opacity <= 1) {
            opacity = opacity + 0.1;
            containerElem.style.opacity = opacity;
          } else {
            clearInterval(intervalID);
          }
        }, 10);
      } else {
        containerElem.classList.remove("hidden");
      }
    };

    button.addEventListener('mouseover', showContainer);
    containerElem.addEventListener('mouseleave', () => {
      app.hideContainer({
        container: container,
        animateIn: "fade"
      });
    });
  },

  // show container
  showContainer: ({ container, animateIn }) => {
    const containerElem = document.querySelector(container);

    if (!containerElem) {
      console.error('Container not found');
      return;
    }

    const showContainer = () => {
      if (animateIn === "fade") {
        let opacity = 0;
        containerElem.style.opacity = opacity;
        containerElem.classList.remove("hidden");

        let intervalID = setInterval(function() {
          if (opacity <= 1) {
            opacity = opacity + 0.1;
            containerElem.style.opacity = opacity;
          } else {
            clearInterval(intervalID);
          }
        }, 10);
      } else {
        containerElem.classList.remove("hidden");
      }
    };

    return showContainer();
  },

  // hide container
  hideContainer: ({ container, animateOut }) => {
    const containerElem = document.querySelector(container);

    if (!containerElem) {
      console.error('Container or button not found');
      return;
    }

    const hideContainer = () => {
      if (animateOut === "fade") {
        let opacity = 1;
        containerElem.style.opacity = opacity;

        let intervalID = setInterval(() => {
          if (opacity >= 0) {
            opacity = opacity - 0.1;
            containerElem.style.opacity = opacity;
          } else {
            clearInterval(intervalID);
            containerElem.classList.add("hidden");
          }
        }, 10);
      } else {
        containerElem.classList.add("hidden");
      }
    };

    return hideContainer();
  },

  // convert html string to dynamically parse/append element
  parseStringToHTML: (selector, str) => {
    const parser = new DOMParser();
    const newNode = parser.parseFromString(str, 'text/html');
    const childNodes = newNode.body.childNodes;

    const targetElement = document.querySelector(selector);
    childNodes.forEach(node => {
      targetElement.appendChild(node.cloneNode(true));
    });
  },

  // render main menu
  renderMenuContent: selector => {
    const html = `<div class="w-full text-center overflow-auto">
    <div class="cursor-default shadow-none m-0">
      <img class="w-24 inline-block" src="imgs/logo.svg">
      <div class="mt-8 text-2xl">
        About ${app.appName}
      </div>
      <div class="my-2">
        <small>Version ${app.appVersion}</small>
      </div>
      <div>
        <a href="${app.appLicense}" target="_blank">
          Open Source License
        </a>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 p-4">
      <button id="newProject" class="capitalize border-0 px-4 py-3 leading-tight rounded-md text-white bg-blue-500">
        <i class="text-xl fa fa-file"></i>
      </button>
      <button id="importProject" class="capitalize border-0 px-4 py-3 leading-tight rounded-md text-white bg-blue-500">
        <i class="text-xl fa fa-file-import"></i>
      </button>
      <button id="exportProject" class="capitalize border-0 px-4 py-3 leading-tight rounded-md text-white bg-blue-500">
        <i class="text-xl fa fa-file-export"></i>
      </button>
      <button id="exportZip" class="capitalize border-0 px-4 py-3 leading-tight rounded-md text-white bg-blue-500">
        <i class="text-xl fa fa-download"></i>
      </button>
    </div>
  </div>`;

    app.parseStringToHTML(selector, html);

    // Attach event listeners to dynamically created buttons
    const buttons = document.querySelectorAll(`${selector} button`);
    buttons.forEach(button => {
      button.onclick = () => {
        if (button.querySelector('.fa-file')) {
          console.log("new project");
        }
        if (button.querySelector('.fa-file-import')) {
          console.log("load project");
        }
        if (button.querySelector('.fa-file-export')) {
          console.log("export project");
        }
        if (button.querySelector('.fa-download')) {
          console.log("export zip");
        }
      };
    });
  },

  // render page navbar
  renderNavbarContainer: selector => {
    const html = `<ul class="flex p-0 m-0">
    <button class="p-4 capitalize block w-full text-xl">
      <i class="sm:pr-2 fa fa-bars"></i>
    </button>
    <span class="pr-2 py-4 capitalize block w-full text-xl">
      ${app.appName}
    </span>
    <a href="#" target="_blank" class="ml-2 px-2 py-4 capitalize block w-full text-xl">
      <i class="sm:pr-2 fa fa-graduation-cap"></i> 
    </a>
    <a href="https://michaelsboost.com/donate/" target="_blank" class="px-2 py-4 capitalize block w-full text-xl">
      <i class="fa fa-heart text-red-400"></i>
    </a>
  </ul>
  <ul class="p-0">
    <button class="capitalize border-0 ml-2 mb-2 md:mb-0 px-4 py-3 leading-tight rounded-md bg-blue-500">
      <i class="sm:pr-2 fa fa-database"></i>
      <span class="hidden sm:inline-block">
        data
      </span>
    </button>
    <button class="capitalize border-0 ml-2 mb-2 md:mb-0 px-4 py-3 leading-tight rounded-md bg-blue-500">
      <i class="sm:pr-2 fa fa-play"></i>
      <span class="hidden sm:inline-block">
        render
      </span>
    </button>
    <button class="capitalize border-0 ml-2 mb-2 md:mb-0 px-4 py-3 leading-tight rounded-md bg-blue-500">
      <i class="sm:pr-2 fa fa-share"></i> 
      <span class="hidden sm:inline-block">
        share
      </span>
    </button>
  </ul>`;

    app.parseStringToHTML(selector, html);

    // Attach event listeners to dynamically created buttons
    const buttons = document.querySelectorAll(`${selector} button`);
    buttons.forEach(button => {
      button.onclick = () => {
        if (button.querySelector('.fa-bars')) {
          menuContent.classList.toggle("hidden");
          button.classList.toggle("text-blue-500");
        }
        if (button.querySelector('.fa-database')) {
          console.log("toggle database");
        }
        if (button.querySelector('.fa-play')) {
          console.log("toggle render");
        }
        if (button.querySelector('.fa-share')) {
          console.log("toggle render");
        }
      };
    });
  },

  // render blocks to add to canvas
  renderPagesContainer: selector => {
    let pages = "";

    project.pages.forEach((page, index) => {
      let cogButton = `<button class="cursor-pointer ml-4">
        <i class="fa fa-cog"></i>
      </button>`;
      let cloneButton = `<button class="cursor-pointer ml-4">
        <i class="fa fa-clone"></i>
      </button>`;
      let trashButton = '';

      if (index !== 0) {
        trashButton = `<button class="cursor-pointer ml-4">
          <i class="fa fa-trash"></i>
        </button>`;
      }

      pages += `<li class="py-2 flex justify-between">
        <button class="cursor-pointer capitalize block w-full text-left">
          ${page.name}
        </button>
        <div class="flex">
          ${cogButton}
          ${cloneButton}
          ${trashButton}
        </div>
      </li>`;
    });

    const containerHTML = `<div class="absolute inset-2 ring-1 ring-indigo-500 rounded-md bg-indigo-900 shadow-2xl overflow-y-auto">
      <ul class="px-4">
        <li class="py-4 flex justify-between border-b border-indigo-500">
          <button class="cursor-pointer capitalize block w-full text-left text-2xl">
            pages
          </button>
          <button class="cursor-pointer ml-4 p-2 text-2xl">
            <i class="fa fa-plus"></i>
          </button>
          <button class="block md:hidden ml-4 p-2 text-2xl">
            <i class="fa fa-times"></i>
          </button>
        </li>
        ${pages}
      </ul>
    </div>`;

    app.parseStringToHTML(selector, containerHTML);

    // Attach event listeners to dynamically created buttons
    const buttons = document.querySelectorAll(`${selector} button`);
    buttons.forEach(button => {
      button.onclick = () => {
        if (button.querySelector('.fa-plus')) {
          console.log("add page");
        }
        if (button.querySelector('.fa-cog')) {
          console.log("toggle settings");
        }
        if (button.querySelector('.fa-clone')) {
          console.log("clone page");
        }
        if (button.querySelector('.fa-trash')) {
          console.log("delete page");
        }
        if (button.querySelector('.fa-times')) {
          app.hideContainer({
            container: "#leftContainer",
            animateIn: "fade"
          });
        }
      };
    });
  },

  // render blocks to add to canvas
  renderBottomContainer: selector => {
    const html = `<div class="flex align-center place-items-center justify-between pt-2">
    <ul class="flex p-0 m-0">
      <button class="capitalize border-0 ml-2 mb-2 md:mb-0 px-4 py-3 leading-tight rounded-md bg-blue-500">
        <i class="sm:pr-2 fa fa-palette"></i>
        <span class="hidden sm:inline-block">
          styles
        </span>
      </button>
      <button class="capitalize border-0 ml-2 mb-2 md:mb-0 px-4 py-3 leading-tight rounded-md bg-blue-500">
        <i class="sm:pr-2 fa fa-bolt-lightning"></i>
        <span class="hidden sm:inline-block">
          actions
        </span>
      </button>
    </ul>
  </div>
  
  <div class="hidden mt-4 p-4 border-t border-indigo-500">
  <details class="p-4 [&_svg]:open:-rotate-180" open>
    <!-- notice here, we have disabled the summary's default triangle/arrow -->
    <summary class="flex cursor-pointer list-none items-center gap-4 pb-4 border-b border-indigo-500">
      <div>
        <!-- notice here, we added our own triangle/arrow svg -->
        <svg class="rotate-0 transform transition-all duration-300" fill="none" height="20" width="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div>Position</div>
    </summary>

    <div class="p-4">
      content
    </div>
  </details>
  </div>
  
  <div class="hidden mt-4 p-4 border-t border-indigo-500">
    content
  </div>`;

    app.parseStringToHTML(selector, html);

    // Attach event listeners to dynamically created buttons
    const buttons = document.querySelectorAll(`${selector} button`);
    const tabs = document.querySelectorAll(`${selector} > div`);
    buttons.forEach(button => {
      button.onclick = () => {
        if (button.querySelector('.fa-palette')) {
          tabs[2].classList.add("hidden");
          tabs[1].classList.toggle("hidden");
        }
        if (button.querySelector('.fa-bolt-lightning')) {
          tabs[1].classList.add("hidden");
          tabs[2].classList.toggle("hidden");
        }
      };
    });
  },

  // render blocks to add to canvas
  renderBlocksContainer: selector => {
    let htmlBlock = "";
    let category = "";

    app.blocks.forEach(block => {
      category = block.category;
      block.items.forEach(item => {
        htmlBlock += `<div class="m-4 p-4 rounded-lg bg-white text-black">
          <div class="cursor-pointer mb-2">
            <img class="w-full rounded-lg" src="imgs/svgs/${item.image}">
          </div>
          <div>${item.name.toLowerCase()}</div>
        </div>`;
      });
    });

    const containerHTML = `<div class="absolute inset-2 ring-1 ring-indigo-500 rounded-md bg-indigo-900 shadow-2xl overflow-x-hidden overflow-y-auto">
      <nav class="flex justify-between py-2 pr-2 place-items-center">
        <span class="p-3 capitalize ml-4 md:ml-0">${category}</span>
        <div class="relative left-4 md:left-8 w-full flex">
          <input type="search" placeholder="example: box, text, paragraph, etc:" class="w-full p-3 pr-10 rounded-md bg-transparent border border-solid border-indigo-500">
          <button class="relative right-12 p-3">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <button class="block md:hidden p-3 mr-2 text-2xl">
          <i class="fa fa-times"></i>
        </button>
      </nav>
      <div class="grid grid-cols-2 gap-0 capitalize text-center">
        ${htmlBlock}
      </div>
    </div>`;

    app.parseStringToHTML(selector, containerHTML);

    // Attach event listeners to dynamically created buttons
    const buttons = document.querySelectorAll(`${selector} button`);
    buttons.forEach(button => {
      button.onclick = () => {
        if (button.querySelector('.fa-search')) {
          console.log("focus on the input");
        }
        if (button.querySelector('.fa-times')) {
          app.hideContainer({
            container: "#rightContainer",
            animateIn: "fade"
          });
        }
      };
    });

    // Attach event listeners to dynamically created input fields
    const textfields = document.querySelectorAll(`${selector} input`);
    textfields.forEach((textfield) => {
      textfield.addEventListener('input', () => {
        console.log("search blocks");
      });
    });
  },

  // Initiate function
  init: () => {
    // render elements
    app.renderNavbarContainer("#topContainer");
    app.renderPagesContainer("#leftContainer");
    app.renderBlocksContainer("#rightContainer");
    app.renderBottomContainer("#bottomContainer");
    app.renderMenuContent("#menuContent");

    // show/hide panels for touch devices
    topHandle.onclick = () => {
      app.hideContainer({
        container: "#leftContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#rightContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#bottomContainer",
        animateIn: "fade"
      });
      app.showContainer({
        container: "#topContainer",
        animateIn: "fade"
      });
    };
    topContainer.onclick = () => {
      app.hideContainer({
        container: "#leftContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#rightContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#bottomContainer",
        animateIn: "fade"
      });
    };
    leftHandle.onclick = () => {
      app.hideContainer({
        container: "#topContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#rightContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#bottomContainer",
        animateIn: "fade"
      });
      app.showContainer({
        container: "#leftContainer",
        animateIn: "fade"
      });
    };
    leftContainer.onclick = () => {
      app.hideContainer({
        container: "#topContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#rightContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#bottomContainer",
        animateIn: "fade"
      });
    };
    rightHandle.onclick = () => {
      app.hideContainer({
        container: "#topContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#leftContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#bottomContainer",
        animateIn: "fade"
      });
      app.showContainer({
        container: "#rightContainer",
        animateIn: "fade"
      });
    };
    rightContainer.onclick = () => {
      app.hideContainer({
        container: "#topContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#leftContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#bottomContainer",
        animateIn: "fade"
      });
    };
    bottomHandle.onclick = () => {
      app.hideContainer({
        container: "#topContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#leftContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#rightContainer",
        animateIn: "fade"
      });
      app.showContainer({
        container: "#bottomContainer",
        animateIn: "fade"
      });
    };
    bottomContainer.onclick = () => {
      app.hideContainer({
        container: "#topContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#leftContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#rightContainer",
        animateIn: "fade"
      });
    };
    main.onclick = () => {
      app.hideContainer({
        container: "#topContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#leftContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#rightContainer",
        animateIn: "fade"
      });
      app.hideContainer({
        container: "#bottomContainer",
        animateIn: "fade"
      });
    };

    // show/hide panels for mouse
    // app.showController({
    //   handle: "#topHandle",
    //   container: "#topContainer",
    //   animateIn: "fade"
    // });
    // app.showController({
    //   handle: "#leftHandle",
    //   container: "#leftContainer",
    //   animateIn: "fade"
    // });
    // app.showController({
    //   handle: "#rightHandle",
    //   container: "#rightContainer",
    //   animateIn: "fade"
    // });
    // app.showController({
    //   handle: "#bottomHandle",
    //   container: "#bottomContainer",
    //   animateIn: "fade"
    // });
  }
};

// check if FileReader API is available
if (!window.FileReader) {
  alert("File API & FileReader API not supported!");
}

app.init();