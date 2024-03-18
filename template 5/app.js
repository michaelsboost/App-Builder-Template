let project = {
  name: "App name",
  version: "0.1",
  url: "https://michaelsboost.com/",
  logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNTEyIgogICBoZWlnaHQ9IjUxMiIKICAgdmlld0JveD0iMCAwIDEzNS40NjY2NiAxMzUuNDY2NjciCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzUiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPGcKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuODMwNjQyO2ZpbGw6IzQ3NDdmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6Ny45Mzc1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtwYWludC1vcmRlcjptYXJrZXJzIHN0cm9rZSBmaWxsIgogICAgICAgaWQ9InBhdGgxODQiCiAgICAgICBjeD0iNjcuNzMzMzMiCiAgICAgICBjeT0iNjcuNzMzMzMiCiAgICAgICByPSI2Ny43MzMzMyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjMyMjQzMXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDc0LjU4MzQxMiw2My43NjcwNDQgODUuMzI0MTY3LDIzLjY4MTk5MiAzOC4xODAxMzgsNzAuODI2MDIzIDYwLjg4MzI1Niw3MS42OTk2MjIgNTAuMTQyNTAxLDExMS43ODQ2NyA5Ny4yODY1MjksNjQuNjQwNjQzIFoiCiAgICAgICBpZD0icGF0aDg5OC0zIiAvPgogIDwvZz4KPC9zdmc+Cg==",
  settings: {
    console: false,
    background: "#322e81",
    color: "#ffffff",
    border: "#6366f2",
    scratchpad: "",
  },
  components: [],
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
      name: "main",
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
  handles: {},
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

  // import javascript libraries
  importJS: (url, callback = null) => {
    let script = document.createElement("script");
    script.src = url;
    script.setAttribute("defer", "");
  
    // Execute callback function after script is loaded
    if (callback) {
      script.onload = callback;
    }
  
    document.head.appendChild(script);
  },

  // show container
  showContainer: ({ container, animateIn }) => {
    if (!container) {
      console.error('Container not found');
      return;
    }

    const showContainer = () => {
      if (animateIn === "fade") {
        let opacity = 0;
        container.style.opacity = opacity;
        container.classList.remove("hidden");

        let intervalID = setInterval(function() {
          if (opacity <= 1) {
            opacity = opacity + 0.1;
            container.style.opacity = opacity;
          } else {
            clearInterval(intervalID);
          }
        }, 10);
      } else {
        container.classList.remove("hidden");
      }
    };

    return showContainer();
  },

  // hide container
  hideContainer: ({ container, animateOut }) => {
    if (!container) {
      console.error('Container or button not found');
      return;
    }

    const hideContainer = () => {
      if (animateOut === "fade") {
        let opacity = 1;
        container.style.opacity = opacity;

        let intervalID = setInterval(() => {
          if (opacity >= 0) {
            opacity = opacity - 0.1;
            container.style.opacity = opacity;
          } else {
            clearInterval(intervalID);
            container.classList.add("hidden");
          }
        }, 10);
      } else {
        container.classList.add("hidden");
      }
    };

    return hideContainer();
  },

  // convert html string to dynamically parse/append element
  parseStringToHTML: (selector, str) => {
    const parser = new DOMParser();
    const newNode = parser.parseFromString(str, 'text/html');
    const childNodes = newNode.body.childNodes;

    const targetElement = selector;
    // const targetElement = document.querySelector(selector);
    childNodes.forEach(node => {
      targetElement.appendChild(node.cloneNode(true));
    });
  },

  // clear container
  emptyContainer: selector => {
    selector.innerHTML = "";
  },

  // refresh ui
  refreshColor: ({ type, oldColor, newColor }) => {
    // Function to recursively update color
    const updateColor = ({ element, children = true }) => {
      // Check if the element has the old color class
      if (type === "bg") {
        if (element.classList.contains(`bg-[${oldColor}]`)) {
          // Replace the old color class with the new one
          element.classList.remove(`bg-[${oldColor}]`);
          project.settings.background = newColor;
          element.classList.add(`bg-[${project.settings.background}]`);
        }
      }
      if (type === "text") {
        if (element.classList.contains(`text-[${oldColor}]`)) {
          // Replace the old color class with the new one
          element.classList.remove(`text-[${oldColor}]`);
          project.settings.color = newColor;
          element.classList.add(`text-[${project.settings.color}]`);
        }
      }
      if (type === "border") {
        if (element.classList.contains(`border-[${oldColor}]`) || element.classList.contains(`ring-[${oldColor}]`)) {
          // Replace the old color class with the new one
          element.classList.remove(`border-[${oldColor}]`);
          element.classList.remove(`ring-[${oldColor}]`);
          project.settings.border = newColor;
          element.classList.add(`border-[${project.settings.border}]`);
          element.classList.add(`ring-[${project.settings.border}]`);
        }
      }
      // Recursively check nested elements if children parameter is true
      if (children) {
        const childElements = element.children;
        for (const child of childElements) {
          updateColor({ element: child, children: true });
        }
      }
    };

    // for (const handle of Object.values(app.handles)) {
    //   updateColor({
    //     element: handle,
    //     children: true,
    //   });
    // }
    
    // Loop through each handle and update color
    for (const [key, handle] of Object.entries(app.handles)) {
      if (key === "mainContainer") {
        updateColor({
          element: handle,
          children: false,
        });
      } else if (key === "main") {
        updateColor({
          element: handle,
          children: false,
        });
      } else {
        if (key === "canvasContainer") continue; // Skip main and canvasContainer
        // console.log(`${key}: ${handle}`);
        updateColor({
          element: handle,
          children: true,
        });
      }
    }

    return false;
  },

  // render page navbar
  renderBaseUI: selector => {
    selector = document.querySelector(selector);

    html = `<div class="absolute inset-0 text-[${project.settings.color}] bg-[${project.settings.background}] overflow-hidden">
    <div class="absolute inset-10 bg-white text-black rounded-md">
      <div class="absolute inset-0"></div>
      <div class="hidden absolute inset-0 overflow-y-auto"></div>
      <div class="hidden absolute inset-0"></div>
      <div class="hidden absolute inset-0 grid grid-cols-1 place-items-center overflow-y-auto"></div>
    </div>

    <div class="absolute inset-x-0 flex justify-center p-3 cursor-pointer">
      <i class="fa fa-grip-lines"></i>
    </div>
    <div class="absolute left-0 inset-y-0 flex flex-col justify-center p-4 cursor-pointer">
      <i class="fa fa-grip-lines-vertical"></i>
    </div>
    <div class="absolute right-0 inset-y-0 flex flex-col justify-center p-4 cursor-pointer">
      <i class="fa fa-grip-lines-vertical"></i>
    </div>
    <div class="absolute bottom-0 inset-x-0 flex justify-center p-3 cursor-pointer">
      <i class="fa fa-grip-lines"></i>
    </div>

    <div class="absolute w-full md:w-80 left-0 inset-y-0 p-4 hidden"></div>
    <div class="absolute w-full md:w-96 right-0 inset-y-0 p-4 hidden"></div>
    <div class="absolute bottom-2 inset-x-2 max-h-[50vh] m-auto p-2 ring-1 ring-[${project.settings.border}] rounded-md bg-[${project.settings.background}] shadow-2xl hidden"></div>
    <div class="absolute top-2 inset-x-2 m-auto flex align-center place-items-center justify-between p-2 ring-1 ring-[${project.settings.border}] rounded-md bg-[${project.settings.background}] shadow-2xl hidden"></div>
  </div>`;
    app.parseStringToHTML(selector, html);

    const addHandle = (name, elm) => {
      app.handles[name] = elm;
    };
    const container = document.querySelector(`body > div`);
    addHandle("mainContainer", container);

    // Attach event listeners to dynamically created divs
    const divs = selector.querySelectorAll(`div > div`);
    divs.forEach((div, i) => {
      if (i === 0) addHandle("main", div);
      if (i === 1) addHandle("canvasContainer", div);
      if (i === 2) addHandle("dataContent", div);
      if (i === 3) addHandle("renderContent", div);
      if (i === 4) addHandle("menuContent", div);
      if (i === 5) addHandle("topHandle", div);
      if (i === 6) addHandle("leftHandle", div);
      if (i === 7) addHandle("rightHandle", div);
      if (i === 8) addHandle("bottomHandle", div);
      if (i === 9) addHandle("leftContainer", div);
      if (i === 10) addHandle("rightContainer", div);
      if (i === 11) addHandle("bottomContainer", div);
      if (i === 12) addHandle("topContainer", div);
    });

    let main = app.handles.main;
    let topHandle = app.handles.topHandle;
    let leftHandle = app.handles.leftHandle;
    let rightHandle = app.handles.rightHandle;
    let bottomHandle = app.handles.bottomHandle;
    let topContainer = app.handles.topContainer;
    let leftContainer = app.handles.leftContainer;
    let rightContainer = app.handles.rightContainer;
    let bottomContainer = app.handles.bottomContainer;

    // show/hide panels for touch devices
    topHandle.onclick = () => {
      app.hideContainer({
        container: leftContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: rightContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: bottomContainer,
        animateIn: "fade"
      });
      app.showContainer({
        container: topContainer,
        animateIn: "fade"
      });
    };
    topContainer.onclick = () => {
      app.hideContainer({
        container: leftContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: rightContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: bottomContainer,
        animateIn: "fade"
      });
    };
    leftHandle.onclick = () => {
      app.hideContainer({
        container: topContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: rightContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: bottomContainer,
        animateIn: "fade"
      });
      app.showContainer({
        container: leftContainer,
        animateIn: "fade"
      });
    };
    leftContainer.onclick = () => {
      app.hideContainer({
        container: topContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: rightContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: bottomContainer,
        animateIn: "fade"
      });
    };
    rightHandle.onclick = () => {
      app.hideContainer({
        container: topContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: leftContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: bottomContainer,
        animateIn: "fade"
      });
      app.showContainer({
        container: rightContainer,
        animateIn: "fade"
      });
    };
    rightContainer.onclick = () => {
      app.hideContainer({
        container: topContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: leftContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: bottomContainer,
        animateIn: "fade"
      });
    };
    bottomHandle.onclick = () => {
      app.hideContainer({
        container: topContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: leftContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: rightContainer,
        animateIn: "fade"
      });
      app.showContainer({
        container: bottomContainer,
        animateIn: "fade"
      });
    };
    bottomContainer.onclick = () => {
      app.hideContainer({
        container: topContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: leftContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: rightContainer,
        animateIn: "fade"
      });
    };
    main.onclick = () => {
      app.hideContainer({
        container: topContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: leftContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: rightContainer,
        animateIn: "fade"
      });
      app.hideContainer({
        container: bottomContainer,
        animateIn: "fade"
      });
    };
  },

  // render navbar contents
  renderNavbarContents: selector => {
    const learnLink = `<a href="#" target="_blank" class="ml-2 px-2 py-4 capitalize block w-full text-xl">
  <i class="sm:pr-2 fa fa-graduation-cap"></i> 
</a>`;
    const learnButton = `<button class="p-4 capitalize block w-full text-xl">
    <i class="sm:pr-2 fa fa-graduation-cap"></i>
  </button>`;

    const html = `<ul class="flex p-0 m-0">
    <button class="p-4 capitalize block w-full text-xl">
      <i class="sm:pr-2 fa fa-bars"></i>
    </button>
    <span class="pr-2 py-4 capitalize block w-full text-xl">
      ${app.appName}
    </span>
    ${learnButton}
    <a href="https://michaelsboost.com/donate/" target="_blank" class="px-2 py-4 capitalize block w-full text-xl">
      <i class="fa fa-heart text-red-400"></i>
    </a>
  </ul>
  <ul class="p-0">
    <button class="capitalize border-0 ml-2 mb-2 md:mb-0 px-4 py-3 leading-tight rounded-md bg-blue-500">
      <i class="pr-2 fa fa-database"></i>
      <span>
        data
      </span>
    </button>
    <button class="capitalize border-0 ml-2 mb-2 md:mb-0 px-4 py-3 leading-tight rounded-md bg-blue-500">
      <i class="pr-2 fa fa-cog"></i> 
      <span>
        settings
      </span>
    </button>
  </ul>`;

    app.parseStringToHTML(selector, html);

    const isActive = false;
    // app.emptyContainer(app.handles.menuContent);
    // app.renderMenuContent(app.handles.menuContent);
    // app.renderDataContent(app.handles.menuContent);
    // app.renderAppSettingsContent(app.handles.menuContent);

    // Attach event listeners to dynamically created buttons
    const buttons = selector.querySelectorAll(`button`);
    const icons = ["bars", "database", "cog"];

    function showMenu() {
      app.handles.menuContent.classList.remove("hidden");
    }
    function hideMenu() {
      app.handles.menuContent.classList.add("hidden");
    }
    function clearActiveClass() {
      buttons.forEach(button => {
        let icon = button.querySelector('i').classList.contains("fa-bars");
        button.classList.remove(icon ? "text-blue-500" : "text-current");
      });
    }
    function detectActiveClass() {
      let isActive = false;

      buttons.forEach(button => {
        if (button.classList.contains("text-blue-500") || button.classList.contains("text-current")) {
          isActive = true;
        }
      });

      return isActive;
    }

    buttons.forEach(button => {
      button.onclick = () => {
        // function that's cleared for rendering
        let icon = button.querySelector('i').classList.contains("fa-bars");
        function clearedForRender() {
          button.classList.add(icon ? "text-blue-500" : "text-current");
          showMenu();

          app.emptyContainer(app.handles.menuContent);
          if (button.querySelector('.fa-bars')) {
            app.renderMenuContent(app.handles.menuContent);
          }
          if (button.querySelector('.fa-graduation-cap')) {
            console.log("toggle lessons");
          }
          if (button.querySelector('.fa-database')) {
            app.renderDataContent(app.handles.menuContent);
          }
          if (button.querySelector('.fa-cog')) {
            app.renderAppSettingsContent(app.handles.menuContent);
          }
        }

        if (detectActiveClass()) {
          // active class detected
          if (button.classList.contains("text-blue-500") || button.classList.contains("text-current")) {
            // if active button remove class and hide menu
            button.classList.remove(icon ? "text-blue-500" : "text-current");
            hideMenu();
          } else {
            // if not button add class and show menu
            clearActiveClass();
            clearedForRender();
          }
        } else {
          // if active class is not detected its clear for render
          clearedForRender();
        }
      };
      // if (button.querySelector('.fa-bars')) {
      //   button.querySelector('.fa-bars').closest("button").onclick();
      // }
      // if (button.querySelector('.fa-cog')) {
      //   button.querySelector('.fa-cog').closest("button").onclick();
      // }
    });
  },

  // render main menu content
  renderMenuContent: selector => {
    const btnStyles = "capitalize border-0 px-4 py-3 leading-tight rounded-md text-white bg-blue-500";
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
      <button class="${btnStyles}">
        <i class="text-xl fa fa-file"></i>
      </button>
      <button class="${btnStyles}">
        <i class="text-xl fa fa-file-import"></i>
      </button>
      <button class="${btnStyles}">
        <i class="text-xl fa fa-file-export"></i>
      </button>
      <button class="${btnStyles}">
        <i class="text-xl fa fa-download"></i>
      </button>
    </div>
  </div>`;

    app.parseStringToHTML(selector, html);

    // Attach event listeners to dynamically created buttons
    const buttons = selector.querySelectorAll(`button`);
    buttons.forEach(button => {
      button.onclick = () => {
        if (button.querySelector('.fa-file')) {
          app.newProject();
        }
        if (button.querySelector('.fa-file-import')) {
          app.importProjectFile();
        }
        if (button.querySelector('.fa-file-export')) {
          app.exportProjectFile();
        }
        if (button.querySelector('.fa-download')) {
          console.log("export zip");
        }
      };
      // if (button.querySelector('.fa-file-import')) {
      //   button.querySelector('.fa-file-import').closest("button").onclick();
      // }
    });
  },

  // render main menu content
  renderDataContent: selector => {
    const btnStyles = "capitalize border-0 px-4 py-3 leading-tight rounded-md text-white bg-blue-500";
    const html = `<div class="w-full text-center overflow-auto">
    <div class="grid grid-cols-1 gap-4 p-4">
      coming soon
    </div>
  </div>`;

    app.parseStringToHTML(selector, html);
  },

  // render settings content
  renderAppSettingsContent: selector => {
    const inputBG = "#ffffff";
    const inputBorder = "#6366f2";
    const inputColor = "#000000";
    const listStyle = `py-4 border-b border-[${project.settings.border}]`;
    const inputStyle = `p-4 rounded-md text-[${inputColor}] bg-[${inputBG}] border border-[${inputBorder}] w-full`;

    const html = `<ul class="p-4 w-full">
      <li class="flex justify-between align-center ${listStyle}">
        <span class="py-2">
          Console
        </span>

        <input type="checkbox">
      </li>
      <li class="flex justify-between align-center ${listStyle}">
        <span class="py-2">
          App background color
        </span>

        <input type="color" value="${project.settings.background}">
      </li>
      <li class="flex justify-between align-center ${listStyle}">
        <span class="py-2">
          App text color
        </span>

        <input type="color" value="${project.settings.color}">
      </li>
      <li class="flex justify-between align-center ${listStyle}">
        <span class="py-2">
          App border color
        </span>

        <input type="color" value="${project.settings.border}">
      </li>
      <li class="flex justify-between h-14 align-center ${listStyle}">
        <div class="mb-2">
          Project logo:
        </div>
        <div>
          <img class="h-full" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNTEyIgogICBoZWlnaHQ9IjUxMiIKICAgdmlld0JveD0iMCAwIDEzNS40NjY2NiAxMzUuNDY2NjciCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzUiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPGcKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuODMwNjQyO2ZpbGw6IzQ3NDdmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6Ny45Mzc1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtwYWludC1vcmRlcjptYXJrZXJzIHN0cm9rZSBmaWxsIgogICAgICAgaWQ9InBhdGgxODQiCiAgICAgICBjeD0iNjcuNzMzMzMiCiAgICAgICBjeT0iNjcuNzMzMzMiCiAgICAgICByPSI2Ny43MzMzMyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjMyMjQzMXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDc0LjU4MzQxMiw2My43NjcwNDQgODUuMzI0MTY3LDIzLjY4MTk5MiAzOC4xODAxMzgsNzAuODI2MDIzIDYwLjg4MzI1Niw3MS42OTk2MjIgNTAuMTQyNTAxLDExMS43ODQ2NyA5Ny4yODY1MjksNjQuNjQwNjQzIFoiCiAgICAgICBpZD0icGF0aDg5OC0zIiAvPgogIDwvZz4KPC9zdmc+Cg==" alt="logo">
        </div>
      </li>
      <li class="${listStyle}">
        <div class="mb-2">
          Project name:
        </div>
        <input class="${inputStyle}" type="text" placeholder="Project name" value="${project.name}">
      </li>
      <li class="${listStyle}">
        <div class="my-2">
          Project version:
        </div>
        <input class="${inputStyle}" type="number" min="0" step="0.1" placeholder="Project version" value="${project.version}">
      </li>
      <li class="${listStyle}">
        <div class="my-2">
          Project url:
        </div>
        <input class="${inputStyle}" type="text" placeholder="Project url" value="${project.url}">
      </li>
      <li class="${listStyle}">
        <div class="my-2">
          Scratchpad
        </div>
        <textarea placeholder="Type anything here..." class="${inputStyle} resize-vertical h-56">${project.settings.scratchpad}</textarea>
      </li>
    </ul>`;

    app.parseStringToHTML(selector, html);

    // Attach event listeners to dynamically created buttons
    const buttons = selector.querySelectorAll(`button`);
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

    // Attach event listeners to dynamically created textfields
    const textfields = selector.querySelectorAll(`input[type=text]`);
    const projectVersion = selector.querySelector(`input[type=number]`);
    const colors = selector.querySelectorAll(`input[type=color]`);
    let projectName = textfields[0];
    let projectUrl = textfields[1];
    let bgColor = colors[0];
    let textColor = colors[1];
    let borderColor = colors[2];
    projectName.oninput = () => {
      project.name = projectName.value;
      console.log(project);
    };
    projectUrl.oninput = () => {
      project.url = projectUrl.value;
      console.log(project);
    };
    projectVersion.oninput = () => {
      project.version = projectVersion.value;
      console.log(project);
    };

    // settings
    bgColor.oninput = () => {
      app.refreshColor({
        type: "bg",
        oldColor: project.settings.background,
        newColor: bgColor.value
      });
    };
    textColor.oninput = () => {
      app.refreshColor({
        type: "text",
        oldColor: project.settings.color,
        newColor: textColor.value
      });
    };
    borderColor.oninput = () => {
      app.refreshColor({
        type: "border",
        oldColor: project.settings.border,
        newColor: borderColor.value
      });
    };
    const scratchpad = selector.querySelector(`textarea`);
    scratchpad.oninput = () => {
      project.settings.scratchpad = scratchpad.value;
      console.log(project);
    };
  },

  // render blocks to add to canvas
  renderComponentsContainer: selector => {
    const components = project.components;
    project.components.forEach((component, index) => {
      
    });
    const html = `<div class="absolute inset-2 ring-1 ring-[${project.settings.border}] rounded-md bg-[${project.settings.background}] shadow-2xl overflow-y-auto">
      <ul class="px-4">
        <li class="py-4 flex justify-between border-b border-[${project.settings.border}]">
          <span class="capitalize block w-full text-left text-2xl">
            components
          </span>
          <button class="block md:hidden ml-4 p-2 text-2xl">
            <i class="fa fa-times"></i>
          </button>
        </li>
        ${components}
      </ul>
    </div>`;

    app.parseStringToHTML(selector, html);
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

    const containerHTML = `<div class="absolute inset-2 ring-1 ring-[${project.settings.border}] rounded-md bg-[${project.settings.background}] shadow-2xl overflow-y-auto">
      <ul class="px-4">
        <li class="py-4 flex justify-between border-b border-[${project.settings.border}]">
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
    const buttons = selector.querySelectorAll(`button`);
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
          const leftContainer = app.handles.leftContainer;
          app.hideContainer({
            container: leftContainer,
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
        <span>
          styles
        </span>
      </button>
      <button class="capitalize border-0 ml-2 mb-2 md:mb-0 px-4 py-3 leading-tight rounded-md bg-blue-500">
        <i class="sm:pr-2 fa fa-bolt-lightning"></i>
        <span>
          actions
        </span>
      </button>
    </ul>
  </div>
  
  <div class="hidden mt-4 p-4 border-t border-[${project.settings.border}]">
    <details class="p-4 [&_svg]:open:-rotate-180" open>
      <!-- notice here, we have disabled the summary's default triangle/arrow -->
      <summary class="flex cursor-pointer list-none items-center gap-4 pb-4 border-b border-[${project.settings.border}]">
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
  
  <div class="hidden mt-4 p-4 border-t border-[${project.settings.border}]">
    content
  </div>`;
    app.parseStringToHTML(selector, html);

    // Select the first child div of each div element
    const tabs = Array.from(selector.querySelectorAll('div > div'));

    // Attach event listeners to dynamically created buttons
    const buttons = selector.querySelectorAll(`button`);
    buttons.forEach(button => {
      button.onclick = () => {
        const paletteIcon = button.querySelector('.fa-palette');
        const lightningIcon = button.querySelector('.fa-bolt-lightning');
        
        if (paletteIcon) {
          tabs[1].classList.toggle("hidden");
          tabs[2].classList.add("hidden");
        }
        
        if (lightningIcon) {
          tabs[2].classList.toggle("hidden");
          tabs[1].classList.add("hidden");
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
          <span>${item.name.toLowerCase()}</span>
        </div>`;
      });
    });

    const containerHTML = `<div class="absolute inset-2 ring-1 ring-[${project.settings.border}] rounded-md bg-[${project.settings.background}] shadow-2xl overflow-x-hidden overflow-y-auto">
      <nav class="flex justify-between py-2 pr-2 place-items-center">
        <h1 class="p-3 capitalize ml-4 md:ml-0">${category}</h1>
        <div class="relative left-4 md:left-8 w-full flex">
          <input type="search" placeholder="example: box, text, paragraph, etc:" class="w-full p-3 pr-10 rounded-md bg-transparent border border-solid border-[${project.settings.border}]">
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
    const buttons = selector.querySelectorAll(`button`);
    const textfield = selector.querySelector(`input`);
    buttons.forEach(button => {
      button.onclick = () => {
        if (button.querySelector('.fa-search')) {
          textfield.focus();
        }
        if (button.querySelector('.fa-times')) {
          const rightContainer = app.handles.rightContainer;
          app.hideContainer({
            container: rightContainer,
            animateIn: "fade"
          });
        }
      };
    });

    // Select the first child div of each div element
    const blocks = Array.from(selector.querySelectorAll('span'));

    // Attach event listener to the input field
    textfield.addEventListener('input', () => {
      const searchText = textfield.value.trim().toLowerCase(); // Get the typed text and convert to lowercase
      
      // Iterate over the blocks
      blocks.forEach(block => {
        const blockText = block.textContent.trim().toLowerCase(); // Get the text content of the block and convert to lowercase
        
        // Check if the block text contains the typed text
        // const isMatch = blockText.includes(searchText);
        const isMatch = blockText.startsWith(searchText);
        
        // Show or hide the block based on whether it matches the typed text
        if (isMatch) {
          block.closest("div").classList.remove("hidden");
        } else {
          block.closest("div").classList.add("hidden");
        }
      });
    });
  },

  // init new project
  newProject: () => {
    const confirmMessage = "Are you certain you wish to proceed? Please note, this action is irreversible and will result in the loss of all your data.";
    if (!confirm(confirmMessage)) {
      return; // Exit function if user cancels
    }

    document.body.innerHTML = "";
    app.handles = {};
    app.libraries = [];
    app.activePage = 0;
    project = {
      name: "App name",
      version: "0.1",
      url: "https://michaelsboost.com/",
      logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNTEyIgogICBoZWlnaHQ9IjUxMiIKICAgdmlld0JveD0iMCAwIDEzNS40NjY2NiAxMzUuNDY2NjciCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzUiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPGcKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuODMwNjQyO2ZpbGw6IzQ3NDdmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6Ny45Mzc1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtwYWludC1vcmRlcjptYXJrZXJzIHN0cm9rZSBmaWxsIgogICAgICAgaWQ9InBhdGgxODQiCiAgICAgICBjeD0iNjcuNzMzMzMiCiAgICAgICBjeT0iNjcuNzMzMzMiCiAgICAgICByPSI2Ny43MzMzMyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjMyMjQzMXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDc0LjU4MzQxMiw2My43NjcwNDQgODUuMzI0MTY3LDIzLjY4MTk5MiAzOC4xODAxMzgsNzAuODI2MDIzIDYwLjg4MzI1Niw3MS42OTk2MjIgNTAuMTQyNTAxLDExMS43ODQ2NyA5Ny4yODY1MjksNjQuNjQwNjQzIFoiCiAgICAgICBpZD0icGF0aDg5OC0zIiAvPgogIDwvZz4KPC9zdmc+Cg==",
      settings: {
        console: false,
        background: "#322e81",
        color: "#ffffff",
        border: "#6366f2",
        scratchpad: "",
      },
      components: [],
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
          name: "main",
          title: "An attractive title",
          description: "The most attractive description ever!",
          author: "John Doe",
          website: "https://website.com/",
          blocks: ``,
          actionBlocks: []
        }
      ]
    };
    localStorage.removeItem(`${app.appName}`);
    
    app.init();
  },

	// import project json
  importProjectFile: () => {
    // Create input element
    const input = document.createElement("input");
    input.type = "file";
    
    // Set up event listener for file selection
    input.addEventListener("change", () => {
      const reader = new FileReader();
      reader.onload = e => {
        // grab file
        const project = JSON.parse(e.target.result);
        if (app.appVersion.localeCompare(project.version) > 0) {
          alert("Version must be 1.1.50 or greater!");
          return false;
        }
        console.log(`loaded project`, project);
      };
      reader.readAsText(input.files[0]);
    });
  
    // Click on the input element to trigger file selection
    input.click();
  
    // Remove input element after file selection
    input.remove();
  },

	// export project json
	exportProjectFile: () => {
		let blob = new Blob([JSON.stringify(project, null, 2)], {
			type: "application/json"
		});
		saveAs(blob, `${project.name.toString().toLowerCase().replace(/ /g,"")}-polyrise.json`);
	},

  // Initiate function
  init: () => {
    app.importJS("js/libraries.js");
    app.importJS("libraries/tailwind/tailwind.min.js", () => {
      // render elements
      app.renderBaseUI("body");
      app.renderNavbarContents(app.handles.topContainer);
      app.renderComponentsContainer(app.handles.leftContainer);
      app.renderBlocksContainer(app.handles.rightContainer);
      app.renderBottomContainer(app.handles.bottomContainer);
    });
  }
};

// check if FileReader API is available
if (!window.FileReader) {
  alert("File API & FileReader API not supported!");
}


setTimeout(() => app.init(), 100);