let project = {
  name: "App name",
  version: "0.1",
  url: "https://michaelsboost.com/",
  meta: "",
  logo: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNTEyIgogICBoZWlnaHQ9IjUxMiIKICAgdmlld0JveD0iMCAwIDEzNS40NjY2NiAxMzUuNDY2NjciCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzUiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPGcKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuODMwNjQyO2ZpbGw6IzQ3NDdmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6Ny45Mzc1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtwYWludC1vcmRlcjptYXJrZXJzIHN0cm9rZSBmaWxsIgogICAgICAgaWQ9InBhdGgxODQiCiAgICAgICBjeD0iNjcuNzMzMzMiCiAgICAgICBjeT0iNjcuNzMzMzMiCiAgICAgICByPSI2Ny43MzMzMyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjMyMjQzMXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDc0LjU4MzQxMiw2My43NjcwNDQgODUuMzI0MTY3LDIzLjY4MTk5MiAzOC4xODAxMzgsNzAuODI2MDIzIDYwLjg4MzI1Niw3MS42OTk2MjIgNTAuMTQyNTAxLDExMS43ODQ2NyA5Ny4yODY1MjksNjQuNjQwNjQzIFoiCiAgICAgICBpZD0icGF0aDg5OC0zIiAvPgogIDwvZz4KPC9zdmc+Cg==",
  settings: {
    theme: false,
    console: false,
    scratchpad: "",
  },
  assets: {
    images: [],
    videos: [],
    audio: []
  },
  pages: [
    {
      theme: "light",
      name: "index",
      title: "An attractive title",
      description: "The most attractive description ever!",
      author: "John Doe",
      website: "https://website.com/",
      analytics: "",
      html: `<div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
  <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-600 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#photography</span>
    <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#travel</span>
    <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">#winter</span>
  </div>
</div>`,
      actionBlocks: []
    }
  ]
};
const jsonData = {
  tables: [
    {
      name: "Contacts",
      fields: [
        { name: "ID", type: "number" },
        { name: "Name", type: "text" },
        { name: "Email", type: "email" },
        { name: "Phone", type: "text" },
        { name: "Address", type: "text" }
      ],
      data: [
        [1, "John Doe", "john@example.com", "123-456-7890", "123 Main St"],
        [2, "Jane Smith", "jane@example.com", "987-654-3210", "456 Oak Ave"]
      ]
    },
    {
      name: "Books",
      fields: [
        { name: "ID", type: "number" },
        { name: "Title", type: "text" },
        { name: "Author", type: "text" },
        { name: "Published Year", type: "number" }
      ],
      data: [
        [1, "The Great Gatsby", "F. Scott Fitzgerald", 1925],
        [2, "To Kill a Mockingbird", "Harper Lee", 1960]
      ]
    }
  ]
};

const app = {
  appName: "App Builder Template",
  appVersion: "0.0.1",
  appUrl: "https://github.com/michaelsboost/App-Builder-Template/tree/gh-pages",
  appLicense: "https://github.com/michaelsboost/App-Builder-Template/blob/gh-pages/LICENSE",
  blocks: [
    {
      category: "Navbars",
      items: [
        {
          name: "Simple Navbar",
          code: `<nav class="flex justify-between px-4 border-gray-500 border-b">
  <ul>
    <li class="m-0">
      <button class="border-0">
        <i class="fa fa-bars"></i>
      </button>
    </li>
    <li class="ml-2">
      <button class="border-0">
        ${project.projectName}
      </button>
    </li>
  </ul>
  <ul>
    <li class="m-0">
      <button class="border-0">
        <i class="fa fa-search"></i>
      </button>
    </li>
    <li class="m-0">
      <button class="border-0">
        <i class="fa fa-cog"></i>
      </button>
    </li>
  </ul>
</nav>`,
        }
      ]
    }
  ],
  
  // To keep track of the active page
  activePage: 0,

  // zooming and panning function
	initZoomPan: () => {
		// variables
		let canvas = document.getElementById('previewElm');
		let canvasH = parseFloat(canvas.clientHeight);
		let canvasW = parseFloat(canvas.clientWidth / 2);

		// init panzoom
		let instance = panzoom(canvas, {
			bounds: true,
			boundsPadding: 0.1
		});

		let centerCanvas = () => {
      let canvas = document.getElementById('previewElm');
			let canvasH = parseFloat(canvas.clientHeight);
			let canvasW = parseFloat(canvas.clientWidth / 2);
			canvasW = parseFloat(canvas.clientWidth);
			canvasH = parseFloat(canvas.clientHeight);

			// detect if canvas is in portrait mode
			if (canvasW < canvasH) {
				// ratio for zoom
				let zoomRatio = 0.75;

				// to center the canvas horizontally we first need to...
				// get half the body & canvas's width
				let bodyW = parseFloat(canvas.parentElement.clientWidth / 2);
				canvasW = parseFloat(canvas.clientWidth / 2);
				// then add them together
				let initialXPos = parseFloat(parseFloat(bodyW) - parseFloat(canvasW) * zoomRatio);

				// to center the canvas vertically we first need to...
				// get the size of both the body and the canvas
				let bodyH = parseFloat(canvas.parentElement.clientHeight);
				bodyH = bodyH / 2;
				canvasH = canvasH / 2;
				// then add them together
				let initialYPos = parseFloat(parseFloat(canvasH) - parseFloat(bodyH) * zoomRatio);

				// set initial zoom
				instance.zoomAbs(
					initialXPos, // initial x position
					initialYPos, // initial y position
					zoomRatio // initial zoom
				);
				instance.moveTo(initialXPos, initialYPos);
				return false;
			}

			// ratio for zoom
			let zoomRatio = 0.75;

			// to center the canvas horizontally we first need to...
			// get half the body & canvas's width
			let bodyW = parseFloat(canvas.parentElement.clientWidth / 2);
			canvasW = parseFloat(canvas.clientWidth / 2);
			// then add them together
			let initialXPos = parseFloat(parseFloat(bodyW) - parseFloat(canvasW) * zoomRatio);

			// to center the canvas vertically we first need to...
			// get the size of both the body and the canvas
			let bodyH = parseFloat(canvas.parentElement.clientHeight);
			bodyH = bodyH / 2;
			canvasH = canvasH / 2;
			// then add them together
			let initialYPos = parseFloat(parseFloat(bodyH) - parseFloat(canvasH) * zoomRatio);

			// set initial zoom
			instance.zoomAbs(
				initialXPos, // initial x position
				initialYPos, // initial y position
				zoomRatio // initial zoom
			);
			instance.moveTo(initialXPos, initialYPos);
		};
		centerCanvas();

		// enable disable zoom/pan
		const zoomIcon = document.querySelector('[data-zoom]');
		zoomIcon.onclick = () => {
			if (zoomIcon.getAttribute('data-zoom') === 'true') {
				canvas.selection = false;
				instance.pause();
				zoomIcon.innerHTML = '<i class="fa fa-light fa-magnifying-glass-minus"></i>';
				zoomIcon.setAttribute('data-zoom', false);
				fill.classList.add('hidden');
			} else {
				canvas.selection = true;
				instance.resume();
				zoomIcon.innerHTML = '<i class="fa fa-light fa-magnifying-glass-plus"></i>';
				zoomIcon.setAttribute('data-zoom', true);
				fill.classList.remove('hidden');
			}
		};

		// rotate canvas
		let rotateview = () => {
			canvasW = parseFloat(canvas.clientWidth);
			canvasH = parseFloat(canvas.clientHeight);

			canvas.style.width = canvasH + 'px';
			canvas.style.height = canvasW + 'px';
			centerCanvas();
		};

		// reset canvas dimentions and center it
		let resetCanvas = (w, h) => {
			if (w > h) {
				// landscape
				canvas.style.width = w + 'px';
				canvas.style.height = h + 'px';
				centerCanvas();
				return false;
			}

			canvas.style.width = h + 'px';
			canvas.style.height = w + 'px';
			centerCanvas();
		};

		// reset canvas dimensions and center it
		// dimensions of Galaxy S8+ used
		mobilep.onclick = () => {
			resetCanvas(360, 740);
			rotateview();
		};
		mobilel.onclick = () => {
			resetCanvas(360, 740);
		};

		// reset canvas dimensions and center it
		// dimensions of iPad Mini used
		tabletp.onclick = () => {
			resetCanvas(1024, 768);
			rotateview();
		};
		tabletl.onclick = () => {
			resetCanvas(1024, 768);
		};

		// reset canvas dimensions and center it
		// 2012 macbook pro dimensions used
		desktopsize.onclick = () => {
			resetCanvas(1440, 834);
		};
	},

  // toggle top nav
  toggleTopNav: e => {
    const inactiveClass = "capitalize border-0 mx-2 px-2 py-2 bg-transparent border-solid border-white border-0";
    const activeClass = "capitalize border-0 mx-2 px-2 py-2 bg-transparent border-solid border-blue-500 border-b text-blue-500";

    const hideDivs = () => {
      document.querySelectorAll('[data-topNavContent]').forEach(elm => {
        elm.classList.add('hidden');
      });
      document.querySelectorAll(`[data-openTop]`).forEach(btn => {
        btn.className = inactiveClass;
      });
    };
  
    const openTopNav = element => {
      hideDivs();
      element.className = activeClass;
      document.querySelector(`[data-topNavContent=${e}]`).classList.remove('hidden');
    };
  
    // Only shows main side navigation
    document.querySelectorAll(`[data-openTop=${e}]`).forEach((btn, i) => {
      btn.onclick = () => {
        openTopNav(document.querySelectorAll(`[data-openTop=${e}]`)[i]);
        if (e === "iframe") {
          iframenav.classList.remove('hidden');
        } else {
          iframenav.classList.add('hidden');
        }
      };
    });
  },

  // toggle side nav
  toggleSideNav: e => {
    const hideLists = () => {
      document.querySelectorAll('#sidenav ul').forEach(list => {
        list.classList.add('hidden');
      });
    };
  
    const openSideNav = targetId => {
      hideLists();
      document.getElementById(targetId).classList.remove('hidden');
    };
  
    // Only shows main side navigation
    document.querySelectorAll(`[data-openSide=${e}]`).forEach(btn => {
      btn.onclick = () => {
        openSideNav(e);
      };
    });
  
    // Open sub menu in side navigation
    document.querySelectorAll(`[data-closeSide=${e}]`).forEach(btn => {
      btn.onclick = () => {
        hideLists();
        mainsidenav.classList.remove('hidden'); // Assuming mainsidenav is defined somewhere
      };
    });
  },  

  // toggle settings
  initSettings: () => {
    projectLogo.src = project.logo;
    document.getElementById("projectName").value = project.name;
    document.getElementById("projectVersion").value = project.version;
    document.getElementById("projectUrl").value = project.url;
    document.getElementById("projectMeta").value = project.meta;
  },

  // Initiate function
  init: () => {
    // Place app name and version
    document.getElementById("appName").textContent = app.appName;
    document.getElementById("appVersion").textContent = app.appVersion;
    document.getElementById("appUrl").href = app.appUrl;
    document.getElementById("appLicense").href = app.appLicense;

    // init toggle top navigation
    app.toggleTopNav('iframe');
    app.toggleTopNav('data');
    app.toggleTopNav('blocks');
    document.querySelector("[data-openTop=iframe]").onclick();

    // Place project meta data
    app.initSettings();

    // init toggle settings and history for side nav
    app.toggleSideNav('settings');
    app.toggleSideNav('historyStack');

    // toggle menu
    menu.onchange = () => {
      document.querySelector('label[for=menu]').classList.toggle('text-blue-500');
      sidenav.classList.toggle('hidden');
    };

    // init tabs
    const tabButtons = document.querySelectorAll("[data-toggletab]");
    const tabContent = document.querySelectorAll("[data-tabcontent]");

    tabButtons.forEach(button => {
      button.addEventListener("click", function () {
        // Check if the clicked button already has the text-blue-500 class
        const isAlreadyActive = this.classList.contains("text-blue-500");

        // Remove text-blue-500 from all buttons
        tabButtons.forEach(btn => btn.classList.remove("text-blue-500", "border-b", "border-blue-500"));

        // Hide all tab contents
        tabContent.forEach(tab => tab.classList.add("hidden"));

        if (!isAlreadyActive) {
          // If the clicked button wasn't active, add text-blue-500 and show corresponding tab
          this.classList.add("text-blue-500", "border-b", "border-blue-500");
          const tabName = this.getAttribute("data-toggletab");
          const selectedTab = document.querySelector(
            `[data-tabcontent="${tabName}"]`
          );
          selectedTab.classList.remove("hidden");
        } else {
          // If the clicked button was already active, hide it's content
          const tabName = this.getAttribute("data-toggletab");
          const selectedTab = document.querySelector(
            `[data-toggletab="${tabName}"]`);
          const selectedTabContent = document.querySelector(
            `[data-tabcontent="${tabName}"]`);
          selectedTab.classList.remove("text-blue-500", "border-b", "border-blue-500");
          selectedTabContent.classList.add("hidden");
        }
      });
    });
    
    // init zooming and panning
    app.initZoomPan();
  }
};

// check if FileReader API is available
if (!window.FileReader) {
  alert("File API & FileReader API not supported!");
}

app.init();