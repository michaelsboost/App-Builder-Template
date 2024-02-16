let project = {
  projectName: "App name",
  version: "0.0.3",
  dark: false,
  console: false,
  scratchpad: "",
  assets: {
    images: [],
    videos: [],
    audio: []
  },
  pages: [
    {
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
    },
    {
      name: "test",
      title: "An attractive title",
      description: "The most attractive description ever!",
      author: "Jane Doe",
      website: "https://website.com/",
      analytics: "",
      html: `<div class="h-screen w-screen bg-indigo-400 overflow-hidden absolute flex items-center">
  <div class="w-screen h-64 absolute top-0 opacity-50 left-0 -my-40 -mx-64 bg-indigo-300 rounded-full"></div>
  <div class="w-64 h-64 -mx-32 bg-indigo-300 opacity-50 rounded-full"></div>
  <div class="w-64 h-64 ml-auto relative opacity-50 -mr-32 bg-indigo-300 rounded-full"></div>
  <div class="w-screen h-64 absolute opacity-50 bottom-0 right-0 -my-40 -mx-64 bg-indigo-300 rounded-full"></div>
</div>

<div class="container mx-auto h-screen py-16 px-8 relative">
  <div class="flex w-full rounded-lg h-full lg:overflow-hidden overflow-auto lg:flex-row flex-col shadow-2xl">
    <div class="lg:w-1/2 bg-white text-gray-800 flex flex-col">
      <div class="p-8 shadow-md relative bg-white">
        <div class="flex items-center">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" class="w-10 h-10 block rounded object-cover object-top" />
          <div class="text-indigo-600 font-medium ml-3">Holden Caulfield</div>
          <button class="bg-indigo-100 text-indigo-400 ml-auto w-8 h-8 flex items-center justify-center rounded">
            <svg stroke="currentColor" class="w-4 h-4" viewBox="0 0 24 24" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
          </button>
        </div>
        <h1 class="font-medium text-lg mt-6">Contact List</h1>
        <p class="text-gray-600 text-sm">Fingerstache godard blog, cornhole meh hoodie</p>
        <div class="mt-6 flex">
          <button class="bg-indigo-500 text-white py-2 text-sm px-3 rounded focus:outline-none">New Contact</button>
          <button class="ml-4 text-gray-600 py-2 text-sm px-3 rounded focus:outline-none border border-gray-400">New Task</button>
          <div class="relative ml-auto flex-1 pl-8 sm:block hidden">
            <input placeholder="Search" type="text" class="w-full border rounded border-gray-400 h-full focus:outline-none pl-4 pr-8 text-gray-700 text-sm text-gray-500">
            <svg stroke="currentColor" class="w-4 h-4 absolute right-0 top-0 mt-3 mr-2 text-gray-500" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>`,
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
  // To keep track of the active page
  activePage: 0,

  // To store the active block
  activeId: null,

  // ajax function to get source of a file
  getFile: (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onreadystatechange = data => {
      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.status === 200) {
        callback(xhr.responseText);
      } else {
        console.warn("request_error");
      }
    };
  },

  // easier way to query array for neater node
  elm: selector => {
    return document.querySelector(`[data-selector=${selector}]`);
  },

  // Function to load a project file and convert images as base64
  loadFile: input => {
    // append preloader to show status of import
    document.body.innerHTML += `<div data-selector="preloader" class="fixed inset-0 bg-white bg-opacity-75 backdrop-filter backdrop-blur-lg" style="z-index: 999999999;">
    <div class="p-4 h-full grid place-items-center">
      <div class="w-full text-center">
        <h2 class="p-0">Importing Project</h2>

        <progress></progress>
      </div>
    </div>
  </div>`;

    let reader = new FileReader();

    reader.onload = e => {
      // grab file
      project = JSON.parse(e.target.result);

      // always have index.html as the default page
      app.activePage = 0;
      app.createPageButtonList();

      // update preview
      app.updatePreview(liverender.checked);

      // remove preloader
      app.elm("preloader").remove();
    };
    reader.readAsText(input.files[0]);
  },

  // function to load logo
  loadLogo: input => {
    let reader = new FileReader();

    reader.onload = e => {
      // grab file
      logo.src = e.target.result;

      // update logo in project file
      project.logo = app.elm("logo").src;

      // remove images if they already exist for exporting
      if (document.querySelector("[data-image]")) {
        document.querySelectorAll("[data-image]").forEach((child, index) => {
          child.remove();
        });
      }

      // convert create logo image sizes for manifest.json
      let imageArr = ["192", "256", "384", "512", app.elm("logo").width];
      for (let i of imageArr) {
        app.embedImage(app.elm("logo").src, i);
      }
    };
    reader.readAsDataURL(input.files[0]);
  },

  // converts all images into a dataurl for easy saving
  img2DataURL: (url, callback) => {
    // Load images
    let image = new Image();
    image.src = url;
    image.onload = function () {
      if (image.src.substring(0, 4).toLowerCase() === "http") {
        let canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, image.width, image.height);
        ctx.drawImage(this, 0, 0, image.width, image.height);
        callback(canvas.toDataURL("image/png"));
        canvas.remove();
        return false;
      }

      callback(image.src);
    };
  },

  // Convert logo to png images for manifest.json
  embedImage: (source, size) => {
    // Load images
    let image = new Image();
    image.src = source;
    image.onload = function () {
      let canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(this, 0, 0, size, size);
      let imageURL = canvas.toDataURL("image/png");
      let newImage = document.createElement("img");
      newImage.classList.add("hidden");
      newImage.setAttribute("data-image", "");
      newImage.src = imageURL;

      // Append new image
      document.body.appendChild(newImage);
    };
  },

  // Function to show the specified tab content in the assets tab
  showAssetTab: e => {
    const activeButton = document.querySelector(
      '[data-tabcontent="assets"] ul li button.text-blue-500'
    );

    if (e.textContent !== activeButton.textContent) {
      const tabButtons = document.querySelectorAll(
        '[data-tabcontent="assets"] ul li button'
      );
      tabButtons.forEach(
        button => (button.className = "text-current bg-transparent border-0")
      );

      e.className = "text-blue-500 bg-transparent border-0";

      // show assets for respected category
      app.renderAssets(e.textContent.toLowerCase().trim());
    }
  },

  // Functions to import and render assets in the assets tab
  importAssets: (input, type, name) => {
    let file = input.files[0]; // Access the first file from the input

    if (file) {
      let reader = new FileReader();

      reader.onloadend = e => {
        // Determine the category based on the provided type
        let category;
        if (file.type.includes("image")) {
          category = "images";
        } else if (file.type.includes("video")) {
          category = "videos";
        } else if (file.type.includes("audio")) {
          category = "audio";
        }

        // Push the asset to the correct category
        project.assets[category].push({
          type: file.type,
          name: file.name,
          result: e.target.result
        });

        // Render the assets for the specific category
        app.renderAssets(category);
      };

      // Pass the file to readAsDataURL
      reader.readAsDataURL(file);
    }
  },
  renderAssets: category => {
    // Make sure correct asset is shown upon render
    const tabButtons = document.querySelectorAll(
      '[data-tabcontent="assets"] ul li button'
    );
    tabButtons.forEach(button => {
      if (button.textContent.toLowerCase().trim() === category) {
        button.click();
      }
    });

    const assetsContainer = document.querySelector(`[data-assetscontent]`);
    assetsContainer.innerHTML = "";

    project.assets[category].forEach(asset => {
      const assetElement = document.createElement("article");
      assetElement.classList.add(
        "relative",
        "p-0",
        "m-0",
        "mb-4",
        "mr-4",
        "text-center",
        "rounded-lg",
        "shadow-lg"
      );

      const deleteButton = document.createElement("button");
      deleteButton.classList.add(
        "absolute",
        "top-0",
        "right-0",
        "m-4",
        "bg-red-500",
        "rounded-full",
        "border-0",
        "w-auto",
        "px-4",
        "py-2",
        "z-10"
      );
      deleteButton.innerHTML = '<i class="fa fa-times"></i>';
      deleteButton.onclick = function () {
        app.deleteAsset(category, asset);
      };

      const content = document.createElement("div");
      content.classList.add("p-0");
      const mediaElement = document.createElement(
        category.includes("audio")
          ? "audio"
          : category.includes("video")
          ? "video"
          : "img"
      );
      mediaElement.src = asset.result;
      mediaElement.type = category;
      mediaElement.classList.add("w-full", "rounded-lg", "cursor-pointer");
      mediaElement.onclick = function () {
        app.copyAsset(asset);
      };

      const nameElement = document.createElement("div");
      nameElement.classList.add("cursor-pointer", "py-2", "text-center");
      nameElement.innerHTML = asset.name; // Assuming asset has a 'name' property
      nameElement.onclick = function () {
        app.copyAsset(asset);
      };

      content.appendChild(deleteButton);
      content.appendChild(mediaElement);
      content.appendChild(nameElement);

      assetElement.appendChild(content);
      assetsContainer.appendChild(assetElement);
    });
  },

  // copy image to clipboard
  copyAsset: type => {
    console.log(type.type);
    // copy to clipboard
    let category;
    navigator.clipboard.writeText(type.result);
  },

  // delete asset
  deleteAsset: (category, asset) => {
    // Clear the corresponding asset from the project.assets array
    const assetIndex = project.assets[category].findIndex(
      a => a.result === asset.result
    );
    if (assetIndex !== -1) {
      project.assets[category].splice(assetIndex, 1);
    }

    // Refresh assets
    app.renderAssets(category);
  },

  // export json
  exportProjectFile: () => {
    // append preloader to show status of import
    document.body.innerHTML += `<div data-selector="preloader" class="fixed inset-0 bg-white bg-opacity-75 backdrop-filter backdrop-blur-lg" style="z-index: 999999999;">
      <div class="p-4 h-full grid place-items-center">
        <div class="w-full text-center">
          <h2 class="p-0">Exporting Project</h2>
  
          <progress></progress>
        </div>
      </div>
    </div>`;

    let blob = new Blob([JSON.stringify(project)], {
      type: "application/json"
    });
    saveAs(
      blob,
      `${project.projectName
        .toString()
        .toLowerCase()
        .replace(/ /g, "")}-polyrise.json`
    );

    // remove preloader
    app.elm("preloader").remove();
  },

  // This is what acts as the user's database
  data: { tables: [] },

  // History stack to store undo actions
  historyStack: [],

  // Store the initial project state
  initialProject: {},
  initialActivePage: 0,

  // Function to add an action to the history stack
  addToHistory: (action, description) => {
    // Assuming you want to store project and activePage information in history
    const historyItem = {
      projectData: structuredClone(project), // Create a copy of the project data
      activePageIndex: app.activePage,
      action,
      description,
      timestamp: new Date().toLocaleString()
    };

    app.historyStack.push(historyItem);

    // Update the UI to show the history
    app.renderHistory();
  },

  // Function to render history from the history stack
  renderHistory: () => {
    const historyTabContent = document.querySelector("[data-historystack]");
    historyTabContent.innerHTML = "";

    for (const historyItem of app.historyStack) {
      const historyEntry = document.createElement("nav");
      historyEntry.innerHTML = `
        <div class="capitalize inline-block -mt-4 font-bold text-sm">
          <div>${historyItem.action}: ${historyItem.description}</div>
          <div class="font-normal">${historyItem.timestamp}</div>
        </div>
        <div>
          <button class="inline-block w-auto">
            <i class="fa fa-check" onclick="app.restoreFromHistory(${app.historyStack.indexOf(
              historyItem
            )})"></i>
          </button>
          <button class="inline-block w-auto bg-red-500 border-red-400" onclick="app.deleteHistoryItem(${app.historyStack.indexOf(
            historyItem
          )})">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      `;

      // Always push newest history entry to the top
      historyTabContent.prepend(historyEntry);
    }
  },

  // Function to restore the project from a specific history index
  restoreFromHistory: index => {
    const historyItem = app.historyStack[index];
    const message = `"${historyItem.action}: ${historyItem.description}"`;

    if (historyItem && historyItem.projectData) {
      const { projectData, activePageIndex } = historyItem;

      // Check if projectData has the expected structure
      if (
        projectData &&
        projectData.pages &&
        activePageIndex < projectData.pages.length
      ) {
        // Update project with the restored data
        project = projectData;

        // Check if the activePageIndex is valid
        if (activePageIndex >= 0 && activePageIndex < project.pages.length) {
          const activePage = project.pages[activePageIndex];

          // Check if the active page has the 'title' property
          if (activePage.title) {
            // Update the active page
            const button = document.querySelector(
              "[data-pagecontent] div:nth-child(" +
                (activePageIndex + 1) +
                ") button"
            );

            const newActivePageButton = button;

            app.activatePage(newActivePageButton, activePageIndex);

            // push to history stack
            app.addToHistory("Restored", `${message}`);

            // refresh ui
            app.refreshUI();
          } else {
            console.error(
              "Missing title property in the active page:",
              activePage
            );
          }
        } else {
          console.error("Invalid activePageIndex:", activePageIndex);
        }
      } else {
        console.error(
          "Invalid project data structure or activePageIndex in historyItem:",
          projectData,
          activePageIndex
        );
      }
    } else {
      console.error("Invalid historyItem:", historyItem);
    }
  },

  // Function to delete a history item at a specific index
  deleteHistoryItem: index => {
    if (index >= 0 && index < app.historyStack.length) {
      app.historyStack.splice(index, 1);
      // Refresh history
      app.renderHistory();
    }
  },

  // Function to clear history
  clearHistory: () => {
    // Assuming you want to store project and activePage information in history
    app.historyStack = [];

    // Notify user history stack has been cleared
    app.addToHistory("Cleared", "History");

    // Update the UI to show the history
    app.renderHistory();
  },

  // Function to refresh the UI after restoring from history or deleting an item
  refreshUI: () => {
    // Refresh history tab
    app.renderHistory();

    // Refresh your UI logic here
    app.updatePreview(liverender.checked);

    // Create the "pages" button list
    app.createPageButtonList();
  },

  // Funtion to create button list of total pages
  createPageButtonList: () => {
    // clear site pages before refresh
    const pagesTab = document.querySelector("[data-pagecontent]");
    pagesTab.innerHTML = "";

    // render page buttons
    for (let i = 0; i < project.pages.length; i++) {
      let val = project.pages[i].name;

      let pageButton = `<button class="name inline-block ${
        i === app.activePage
          ? "activepage"
          : "text-current bg-transparent border-current"
      } mb-2" onclick="app.activatePage(${i})">
                    ${val}
                  </button>`;
      pageButton = "";
      let pageName = `<div class="name ${
        i === app.activePage
          ? "text-blue-500 activepage"
          : "text-current bg-transparent border-current"
      } mb-2" onclick="app.activatePage(${i})">
                    ${val}
                  </div>`;

      if (i === 0) {
        pagesTab.innerHTML += `
          <div class="h-full">
            ${pageName}
            <article class="relative h-full m-0 p-0">
              <div id="previewElm${i}" class="rounded-md w-full h-full"></div>
              <div class="absolute inset-0 
                " onclick="app.activatePage(${i})"></div>
                
                <section class="mt-2">
                  ${pageButton}
                  <div class="grid grid-cols-1 gap-1">
                    <button class="inline-block text-current bg-transparent border-current" onclick="app.clonePage(${i})">
                      <i class="fa fa-clone"></i>
                    </button>
                  </div>
                </section>
            </article>
          </div>
          `;
      } else {
        pagesTab.innerHTML += `
          <div class="h-full">
            ${pageName}
            <article class="relative h-full m-0 p-0">
              <div id="previewElm${i}" class="rounded-md w-full h-full"></div>
              <div class="absolute inset-0 
                " onclick="app.activatePage(${i})"></div>
                
                <section class="mt-2">
                  ${pageButton}
                  <div class="grid grid-cols-3 gap-1">
                    <button class="inline-block text-current bg-transparent border-current" onclick="app.renamePage(${i})">
                      <i class="fa fa-font"></i>
                    </button>
                    <button class="inline-block text-current bg-transparent border-current" onclick="app.clonePage(${i})">
                      <i class="fa fa-clone"></i>
                    </button>
                    <button class="inline-block text-current bg-transparent border-current" onclick="app.deletePage(${i})">
                      <i class="fa fa-trash"></i>
                    </button>
                  </div>
                </section>
            </article>
          </div>
          `;
      }
    }
    app.renderPagePreviews();
  },

  // Funtion to add a page
  addPage: () => {
    // first detect if user can clone a page
    if (!projectTitle.value || !description.value) {
      alert(
        "Error: Website is missing the title and/or description meta information!"
      );
      return false;
    }

    // value for the new page name
    let val = prompt("What's the page's file name?").toLowerCase();

    // detect if page name already exists
    for (let i in project.pages) {
      if (project.pages[i].name === val) {
        alert("Operation aborted: Page name already exists!");
        return false;
      }
    }

    // push page info to object
    let tempObj = {
      name: val,
      title: `${projectTitle.value}`,
      description: `${description.value}`,
      author: `${author.value}`,
      website: `${website.value}`,
      analytics: `${analytics.value}`,
      blocks: []
    };
    project.pages.push(tempObj);

    // push to history stack
    app.addToHistory("addedPage", `${val}`);

    // refresh pages list
    app.createPageButtonList();
  },

  // Funtion to rename a page
  renamePage: index => {
    // value for page name
    let val = prompt("What's the page's file name?").toLowerCase();

    // detect if page name already exists
    for (let i in project.pages) {
      if (project.pages[i].name === val) {
        alert("Operation aborted: Page name already exists!");
        return false;
      }
    }

    // remember old name
    const oldName = project.pages[index].name;

    // renames the object
    project.pages[index].name = val;

    // apply the new name to the page button
    this.textContenr = val;

    // push to history stack
    app.addToHistory("renamePage", `${oldName} to ${val}`);

    // refresh pages list
    app.createPageButtonList();
  },

  // Funtion to clone a page
  clonePage: i => {
    // Clone the object
    let originalPage = project.pages[i];
    let clonedPage = {};

    // Copy each property individually
    for (let key in originalPage) {
      if (originalPage.hasOwnProperty(key)) {
        clonedPage[key] = originalPage[key];
      }
    }

    // Apply the new name to the cloned object
    clonedPage.name = `${originalPage.name}_clone${project.pages.length}`;

    // Push the cloned object to the pages object array
    project.pages.push(clonedPage);

    // push to history stack
    app.addToHistory("clonePage", `${originalPage.name}`);

    // Refresh pages list
    app.createPageButtonList();
  },

  // Funtion to delete a page
  deletePage: i => {
    // Remember page name for history stack
    const pageName = project.pages[i].name;

    // delete page from object
    project.pages.splice(i, 1);

    // refresh pages list
    app.createPageButtonList();

    // if user deletes the active page, make the index the active page
    if (i === app.activePage) {
      const buttons = document.querySelectorAll("[data-pagecontent] button");
      const newActivePageButton = buttons[0];

      app.activatePage(0, newActivePageButton);
    }

    // push to history stack
    app.addToHistory("deletePage", `${pageName}`);
  },

  // Funtion to make page active
  activatePage: i => {
    app.activePage = i;
    const projectTitle = document.getElementById("projectTitle");

    // Check if project has pages and the index is within bounds
    if (project.pages && project.pages.length > i && project.pages[i]) {
      const currentPage = project.pages[i];

      // Update input values
      projectTitle.value = currentPage.title || "";
      description.value = currentPage.description || "";
      author.value = currentPage.author || "";
      website.value = currentPage.website || "";
      analytics.value = currentPage.analytics || "";

      // Remove old active page color indicator
      let activePageBtn = document.querySelector(
        "[data-pagecontent] .activepage"
      );
      if (activePageBtn) {
        activePageBtn.classList.remove("text-blue-500", "activepage");
      }

      // Add new active page color indicator
      activePageBtn = document.querySelectorAll("[data-pagecontent] .name")[i];
      activePageBtn.classList.add("text-blue-500", "activepage");

      // Update preview to show the active page
      app.updatePreview(liverender.checked);
    } else {
      console.error(
        "Invalid page data at index",
        i,
        "in pages array:",
        project.pages
      );
      console.log("Current project state:", project);
    }
  },
  
  // Function to apply various text styles
  applyTextStyle: styleType => {
    if (!styleType) {
      console.error('Missing style type.');
      return;
    }
    
    const iframe = document.getElementById('preview');
    const idoc = iframe.contentDocument || iframe.contentWindow.document;
    const range = idoc.getSelection().getRangeAt(0);
    let selection = range.toString();
  
    let styledElement;
  
    switch (styleType) {
      case 'bold':
        styledElement = idoc.createElement('strong');
        break;
      case 'italic':
        styledElement = idoc.createElement('em');
        break;
      case 'underline':
        styledElement = idoc.createElement('u');
        break;
      case 'strike':
        styledElement = idoc.createElement('del');
        break;
      case 'mark':
        styledElement = idoc.createElement('mark');
        break;
      case 'sub':
        styledElement = idoc.createElement('sub');
        break;
      case 'sup':
        styledElement = idoc.createElement('sup');
        break;
      case 'hr':
        styledElement = idoc.createElement('hr');
        break;
      case 'ul':
        styledElement = idoc.createElement('ul');
        styledElement.className = "list-disc";
        list = idoc.createElement(`li`);
        list.textContent = selection;
        range.deleteContents();
        styledElement.appendChild(list);
        break;
      case 'ol':
        styledElement = idoc.createElement('ol');
        styledElement.className = "list-decimal";
        list = idoc.createElement(`li`);
        list.textContent = selection;
        range.deleteContents();
        styledElement.appendChild(list);
        break;
      case 'kbd':
        styledElement = idoc.createElement('kbd');
        break;
      default:
        console.error('Unsupported style type:', styleType);
        return;
    }
    
    // Update the html stored in project
    const updateProject = () => {
      const bodyHtml = idoc.body.cloneNode(true); // Clone the body element
      const scriptTags = bodyHtml.getElementsByTagName('script'); // Get all script tags
      
      // Remove script tags from the cloned body element
      for (let i = scriptTags.length - 1; i >= 0; i--) {
        scriptTags[i].parentNode.removeChild(scriptTags[i]);
      }
      project.pages[app.activePage].html = bodyHtml.innerHTML;
    };

    // detect if there's a selection
    if (selection) {
      // if parent element is null
      if (!range.commonAncestorContainer.firstElementChild) {
        styledElement.appendChild(range.extractContents());
        range.insertNode(styledElement);
        updateProject();
        return false;
      }

      // otherwise detect if parent is the same so user can toggle bold/italic/etc
      if (range.commonAncestorContainer.childNodes.length > 0) {
        if (range.commonAncestorContainer.firstElementChild.tagName.toLowerCase() === styledElement.tagName.toLowerCase()) {
          range.deleteContents();
          range.insertNode(document.createTextNode(selection));
          updateProject();
          return false;
        }

        // if parent is not the same allow user to have option to have both bold and italic
        styledElement.appendChild(range.extractContents());
        range.insertNode(styledElement);
        updateProject();
      }

      return false;
    }
  
    // Replace the current selection with the styled element
    let text = document.createTextNode('Text');
    range.deleteContents();
    range.insertNode(styledElement);
    updateProject();
  },
  
  // Generates breadcrumbs based on the text cursor location in the iframe
  generateBreadcrumbs: () => {
    const iframe = document.getElementById('preview');
    const idoc = iframe.contentDocument || iframe.contentWindow.document;
    const range = idoc.getSelection().getRangeAt(0);
    const ancestorElements = [];

    // Traverse up the DOM hierarchy to identify ancestors
    let currentElement = range.commonAncestorContainer;
    while (currentElement !== idoc.body) {
      ancestorElements.push(currentElement);
      currentElement = currentElement.parentNode;
    }

    // Generate breadcrumbs based on ancestor elements
    const breadcrumbs = ancestorElements.reverse().map(element => {
      const tagName = element.tagName.toLowerCase();
      const textContent = element.textContent.trim().substring(0, 20); // Truncate text content if needed
      return `<a href="#">${tagName}</a>`;
    });

    // Display breadcrumbs in a designated area
    const breadcrumbsContainer = document.getElementById('breadcrumbs');
    breadcrumbsContainer.innerHTML = breadcrumbs.join(' > ');
  },
  
  // Function to update tge projects html
  updateProjectHtml: doc => {
    if (!doc) {
      const iframe = document.getElementById('preview');
      const idoc = iframe.contentDocument || iframe.contentWindow.document;
    }
    const bodyHtml = idoc.body.cloneNode(true); // Clone the body element
    const scriptTags = bodyHtml.getElementsByTagName('script'); // Get all script tags
    
    // Remove script tags from the cloned body element
    for (let i = scriptTags.length - 1; i >= 0; i--) {
      scriptTags[i].parentNode.removeChild(scriptTags[i]);
    }
    project.pages[app.activePage].html = bodyHtml.innerHTML;
  },

  // Update iframe preview function
  updatePreview: (initLiveRender = false) => {
    // Modified draggable code in the parent window
    draggable.addEventListener("dragstart", event => {
      event.dataTransfer.setData("text/plain", "dragged");
      // Send drag data to iframe
      const iframe = document.getElementById("preview");
      iframe.contentWindow.postMessage("dragged", "*");
    });

    const generateHtmlCode = () => {
      const showConsole = project.console
        ? `<script type="module" src="js/dom-console.js" defer></script>`
        : "";
      const tailwindStyle =
        ".wrapper_yOR7u {width: 100%!important; border-radius: 15px 15px 0 0!important; z-index: 99999999;} .btn_yOR7u { background: inherit; padding: 0 0.5rem; margin: inherit; margin-right: 10px; border: inherit; color: #fff!important; } .nav_yOR7u {padding-bottom: 14px!important;} .line_yOR7u {background: inherit!important;}";
      const consoleStyle = `<style>${tailwindStyle}</style>`;
      const addConsoleCSS = project.console ? consoleStyle : "";

      // Determine whether to make the body content editable based on the state of the checkbox
      const contentEditableAttr = initLiveRender
        ? ""
        : 'contenteditable="true"';

      return `<!DOCTYPE html>
<html>
  <head>
    <title>${project.projectName}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="${
      project.pages[app.activePage].description
    }">
    <meta name="author" content="${project.pages[app.activePage].author}">
    <link rel="stylesheet" href="libraries/tailwind/tailwind.min.css">
    ${addConsoleCSS}
    ${showConsole}
  </head>
  <body ${contentEditableAttr}>
    ${project.pages[app.activePage].html}
    
    <script>
      setTimeout(() => console.log('hello 👋'), 100);
    </script>
    <script src="js/iframeInteraction.js" defer></script>
  </body>
</html>`;
    };

    // Clear existing content in the preview element
    previewElm.innerHTML = "";

    // Create iframe and set attributes
    const frame = document.createElement("iframe");
    frame.setAttribute("id", "preview");
    frame.setAttribute("title", "test");
    frame.setAttribute(
      "sandbox",
      "allow-scripts allow-same-origin allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups"
    );

    // Append iframe to the preview element
    previewElm.appendChild(frame);

    // Get the content document of the iframe
    const previewFrame = document.getElementById("preview");
    const previewDoc =
      previewFrame.contentDocument || previewFrame.contentWindow.document;

    // Open, write HTML code, and close the content document
    previewDoc.open();
    previewDoc.write(generateHtmlCode());
    previewDoc.close();
    
    // Listen for events within the iframe's content window
    const idoc = previewDoc;
    if (initLiveRender = false) {
      idoc.addEventListener('keyup', () => {
        app.updateProjectHtml(idoc);
      });
      idoc.addEventListener('change', () => {
        app.updateProjectHtml(idoc);
      });
    }
  },
  renderPagePreviews: () => {
    const generateHtmlCode = initPage => {
      const showConsole = project.console
        ? `<script type="module" src="js/dom-console.js" defer></script>`
        : "";
      const tailwindStyle =
        ".wrapper_yOR7u {width: 100%!important; border-radius: 15px 15px 0 0!important; z-index: 99999999;} .btn_yOR7u { background: inherit; padding: 0 0.5rem; margin: inherit; margin-right: 10px; border: inherit; color: #fff!important; } .nav_yOR7u {padding-bottom: 14px!important;} .line_yOR7u {background: inherit!important;}";
      const consoleStyle = `<style>${tailwindStyle}</style>`;
      const addConsoleCSS = project.console ? consoleStyle : "";

      return `<!DOCTYPE html>
<html>
  <head>
    <title>${project.projectName}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="${
      project.pages[app.activePage].description
    }">
    <meta name="author" content="${project.pages[app.activePage].author}">
    <link rel="stylesheet" href="libraries/tailwind/tailwind.min.css">
    ${addConsoleCSS}
    ${showConsole}
  </head>
  <body>
    ${project.pages[initPage].html}
    
    <script>
      setTimeout(() => console.log('hello 👋'), 100)
    </script>
  </body>
</html>`;
    };
    const outputPage = (pageid, pageframe, indexCode) => {
      // Clear existing content in the preview element
      let container = document.getElementById(`${pageid}`);
      container.innerHTML = ""; // Clear existing content

      // Create iframe and set attributes
      const frame = document.createElement("iframe");
      frame.setAttribute("id", pageframe);
      frame.setAttribute("title", "test");

      // Apply Tailwind CSS classes and inline styles to the iframe
      frame.className = "transform scale-50"; // Apply Tailwind classes for transform
      frame.style.width = "200%";
      frame.style.height = "200%";
      frame.style.transformOrigin = "top left"; // Set transform origin to center

      // Append iframe to the preview element
      container.appendChild(frame);

      // Get the content document of the iframe
      const previewFrame = document.getElementById(`${pageframe}`);
      const previewDoc =
        previewFrame.contentDocument || previewFrame.contentWindow.document;

      // Open, write HTML code, and close the content document
      previewDoc.open();
      previewDoc.write(generateHtmlCode(indexCode));
      previewDoc.close();
    };
    for (let i = 0; i < project.pages.length; i++) {
      setTimeout(() => outputPage(`previewElm${i}`, `preview${i}`, i), 100);
    }
  },

  // Function to add data
  addTable: tableName => {
    const newTable = {
      name: tableName,
      data: []
    };

    app.data.tables.push(newTable);

    // console the data result
    console.log(app.data);

    // Update the UI to show the new table
    app.renderTables();
  },

  // Function to render data
  renderTables: () => {
    const tablesContainer = document.querySelector("[data-datacontent]");
    tablesContainer.innerHTML = ""; // Clear previous content

    // Render existing tables
    app.data.tables.forEach(table => {
      const tableElement = document.createElement("div");
      tableElement.innerHTML = `
        <div class="table">
          <h2>${table.name}</h2>
          <!-- Other table details here -->
        </div>
      `;
      tablesContainer.appendChild(tableElement);
    });

    tablesContainer.appendChild(addTableButton);
  },

  // Function to render json to html table
  jsonToHtmlTable: (e, json) => {
    let html = "<table>";

    // Adding the table header
    html += "<thead><tr>";
    json.tables[0].fields.forEach(field => (html += `<th>${field.name}</th>`));
    html += "</tr></thead>";

    // Adding the table body
    html += "<tbody>";
    json.tables.forEach(table => {
      table.data.forEach(row => {
        html += "<tr>";
        row.forEach(cell => (html += `<td>${cell}</td>`));
        html += "</tr>";
      });
    });
    html += "</tbody>";

    // Adding the table footer
    html += "<tfoot><tr>";
    json.tables[0].fields.forEach(() => (html += "<th>Total</th>"));
    html += "</tr></tfoot>";
    html += "</table>";

    // return html
    document.querySelector(`${e}`).innerHTML = html;
  },

  // Functions to render json as string for a textarea element
  formatJSONForTextarea: (e, json) => {
    try {
      // Parse JSON to handle any potential syntax errors
      const parsedJSON = JSON.parse(json);

      // Stringify with indentation for readability
      const formattedJSON = JSON.stringify(parsedJSON, null, 2);

      document.querySelector(`${e}`).value = formattedJSON;
    } catch (error) {
      console.error("Error parsing or formatting JSON:", error.message);
      return json; // Return original input if there's an error
    }
  },
  formatJSONObjectForTextarea: (e, json) => {
    try {
      const jsonString = JSON.stringify(json, null, 2);

      document.querySelector(`${e}`).value = jsonString;
    } catch (error) {
      console.error("Error parsing or formatting JSON:", error.message);
      return json; // Return original input if there's an error
    }
  },

  // zooming and panning function
  initZoomPan: () => {
    // variables
    const userDevice = document.querySelector("[data-device]");
    let canvas = document.querySelector("[data-canvas]");
    let canvasH = parseFloat(canvas.clientHeight);
    let canvasW = parseFloat(canvas.clientWidth / 2);

    // init panzoom
    let instance = panzoom(canvas, {
      bounds: true,
      boundsPadding: 0.1
    });

    let centerCanvas = () => {
      let canvas = document.querySelector("[data-canvas]");
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
        let initialXPos = parseFloat(
          parseFloat(bodyW) - parseFloat(canvasW) * zoomRatio
        );

        // to center the canvas vertically we first need to...
        // get the size of both the body and the canvas
        let bodyH = parseFloat(canvas.parentElement.clientHeight);
        bodyH = bodyH / 2;
        canvasH = canvasH / 2;
        // then add them together
        let initialYPos = parseFloat(
          parseFloat(canvasH) - parseFloat(bodyH) * zoomRatio
        );

        // set initial zoom
        instance.zoomAbs(
          initialXPos, // initial x position
          initialYPos, // initial y position
          zoomRatio // initial zoom
        );
        instance.moveTo(initialXPos, initialYPos);

        // display size
        viewx.value = parseInt(canvas.style.width);
        viewy.value = parseInt(canvas.style.height);
        return false;
      }

      // ratio for zoom
      let zoomRatio = 0.75;

      // to center the canvas horizontally we first need to...
      // get half the body & canvas's width
      let bodyW = parseFloat(canvas.parentElement.clientWidth / 2);
      canvasW = parseFloat(canvas.clientWidth / 2);
      // then add them together
      let initialXPos = parseFloat(
        parseFloat(bodyW) - parseFloat(canvasW) * zoomRatio
      );

      // to center the canvas vertically we first need to...
      // get the size of both the body and the canvas
      let bodyH = parseFloat(canvas.parentElement.clientHeight);
      bodyH = bodyH / 2;
      canvasH = canvasH / 2;
      // then add them together
      let initialYPos = parseFloat(
        parseFloat(bodyH) - parseFloat(canvasH) * zoomRatio
      );

      // set initial zoom
      instance.zoomAbs(
        initialXPos, // initial x position
        initialYPos, // initial y position
        zoomRatio // initial zoom
      );
      instance.moveTo(initialXPos, initialYPos);

      // display size
      viewx.value = parseInt(canvas.style.width);
      viewy.value = parseInt(canvas.style.height);
    };
    centerCanvas();

    // enable disable zoom/pan
    const zoomIcon = document.querySelector("[data-zoom]");
    zoomIcon.onclick = () => {
      if (zoomIcon.getAttribute("data-zoom") === "true") {
        canvas.selection = false;
        instance.pause();
        zoomIcon.innerHTML =
          '<i class="text-xl fa fa-light fa-magnifying-glass-minus"></i>';
        zoomIcon.setAttribute("data-zoom", false);
        fill.classList.add("hidden");
        
        // rich text editor
        if (!liverender.checked) {
          tabsNav.classList.add('top-12');
          tabsNav.classList.remove('top-0');
          wysiwyg.classList.remove('hidden');
        } else {
          tabsNav.classList.add('top-0');
          tabsNav.classList.remove('top-12');
          wysiwyg.classList.add('hidden');
        }
      } else {
        canvas.selection = true;
        instance.resume();
        zoomIcon.innerHTML =
          '<i class="text-xl fa fa-light fa-magnifying-glass-plus"></i>';
        zoomIcon.setAttribute("data-zoom", true);
        fill.classList.remove("hidden");
        
        // rich text editor
        tabsNav.classList.add('top-0');
        tabsNav.classList.remove('top-12');
        wysiwyg.classList.add('hidden');
      }
    };

    // rotate canvas
    let rotateview = () => {
      canvasW = parseFloat(canvas.clientWidth);
      canvasH = parseFloat(canvas.clientHeight);

      canvas.style.width = canvasH + "px";
      canvas.style.height = canvasW + "px";
      centerCanvas();
    };

    // reset canvas dimentions and center it
    let resetCanvas = (w, h) => {
      canvasW = w;
      canvasH = h;

      if (canvasW > canvasH) {
        // landscape
        canvas.style.width = canvasW + "px";
        canvas.style.height = canvasH + "px";
        centerCanvas();
        return false;
      }

      canvas.style.width = canvasH + "px";
      canvas.style.height = canvasW + "px";
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

    // manually reset canvas dimensions and center it
    viewx.onkeyup = () => {
      resetCanvas(viewx.value, viewy.value);
    };
    viewy.onkeyup = () => {
      resetCanvas(viewx.value, viewy.value);
    };
  },

  // Initiate function
  init: () => {
    // toggle console
    toggleconsole.onchange = () => {
      project.console = toggleconsole.checked;
      app.updatePreview(liverender.checked);
    };
    // init zooming and panning
    app.initZoomPan();

    // Create the "pages" button list
    app.createPageButtonList();

    // Create data tables
    const addDataBtn = document.getElementById("addDataBtn");
    addDataBtn.addEventListener("click", () => {
      const tableName = prompt("Enter the name for the new data table:");

      // Logical AND (`&&`) operator used instead of an if statement
      tableName && app.addTable(tableName);
    });

    // render default table
    app.jsonToHtmlTable("#outputtable", jsonData);
    // display json in textarea
    app.formatJSONObjectForTextarea("#jsonvalue", jsonData);

    // Render HTML in the iframe using your existing function
    app.updatePreview(liverender.checked);
    darkmode.onchange = () => {
      project.dark = darkmode.checked;
      document
        .querySelector("html[data-theme]")
        .setAttribute("data-theme", project.dark ? "dark" : "light");
    };

    // Initializing the to store the initial state
    app.addToHistory("initialize", "Initialized project with initial page");

    // init tabs
    const tabButtons = document.querySelectorAll("[data-toggletab]");
    const tabContent = document.querySelectorAll("[data-tabcontent]");

    tabButtons.forEach(button => {
      button.addEventListener("click", function () {
        // Check if the clicked button already has the text-blue-500 class
        const isAlreadyActive = this.classList.contains("text-blue-500");

        // Remove text-blue-500 from all buttons
        tabButtons.forEach(btn => btn.classList.remove("text-blue-500"));

        // Hide all tab contents
        tabContent.forEach(tab => tab.classList.add("hidden"));

        if (!isAlreadyActive) {
          // If the clicked button wasn't active, add text-blue-500 and show corresponding tab
          this.classList.add("text-blue-500");
          const tabName = this.getAttribute("data-toggletab");
          const selectedTab = document.querySelector(
            `[data-tabcontent="${tabName}"]`
          );
          selectedTab.classList.remove("hidden");

          // Check for the selected tabs
          if (tabName === "pages") {
            // render page previews
            app.renderPagePreviews();
          }
        } else {
          // If the clicked button was already active, show the random tab
          const randomTab = document.querySelector(
            '[data-tabcontent="random"]'
          );
          selectedTab = document.querySelector(`[data-toggletab="random"]`);
          selectedTab.classList.add("text-blue-500");
          randomTab.classList.remove("hidden");
        }
      });
    });
  }
};

// check if FileReader API is available
if (!window.FileReader) {
  alert("File API & FileReader API not supported!");
}

app.init();