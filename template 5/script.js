let project = {
  projectName: "App name",
  version: "0.0.3",
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
    const iframeContainers = document.querySelectorAll("[data-iframecontainer]");
    let instances = []; // Array to store all panzoom instances

    iframeContainers.forEach(container => {
        const iframe = container.querySelector("iframe");
        const instance = panzoom(iframe, {
            bounds: true,
            boundsPadding: 0.1
        });
        instance.zoomTo(parseInt(iframe.clientWidth / 2), parseInt(iframe.clientHeight / 2), 0.5);
        instances.push(instance); // Store the instance in the array

        const iframeFill = document.querySelectorAll("[data-iframeFill]");

        const zoomIcon = document.querySelector("[data-zoom]");
        zoomIcon.onclick = () => {
            if (zoomIcon.getAttribute("data-zoom") === "true") {
                container.selection = true;
                instances.forEach(instance => {
                    instance.pause();
                });
                zoomIcon.innerHTML =
                    '<i class="fa fa-light fa-magnifying-glass-minus"></i>';
                zoomIcon.setAttribute("data-zoom", false);
                iframeFill.forEach(fill => {
                    fill.classList.add("hidden");
                });
            } else {
                container.selection = false;
                instances.forEach(instance => {
                    instance.resume();
                });
                zoomIcon.innerHTML =
                    '<i class="fa fa-light fa-magnifying-glass-plus"></i>';
                zoomIcon.setAttribute("data-zoom", true);
                iframeFill.forEach(fill => {
                    fill.classList.remove("hidden");
                });
            }
        };
    });
},

  // Initiate function
  init: () => {
    // Place app name and version
    document.getElementById("appName").textContent = app.appName;
    document.getElementById("appVersion").textContent = app.appVersion;
    document.getElementById("appUrl").href = app.appUrl;
    document.getElementById("appLicense").href = app.appLicense;
    
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