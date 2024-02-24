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
  element: "",
  activeHTML: "",
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
      theme: "light",
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
      
      let pagesTabButton = document.querySelector('[data-toggletab=pages]')
      if (pagesTabButton.classList.contains('text-blue-500')) {
        pagesTabButton.click();
        pagesTabButton.click();
      }
      
      let layersTabButton = document.querySelector('[data-toggletab=layers]')
      if (layersTabButton.classList.contains('text-blue-500')) {
        layersTabButton.click();
        layersTabButton.click();
      }
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
  
  // Function to update te projects html
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

  // Function to update previews
  updatePreview: (initLiveRender = false) => {
    const generateHtmlCode = () => {
		const theme = project.pages[app.activePage].theme;
      const showConsole = project.settings.console
        ? `<script type="module" src="js/dom-console.js" defer></script>`
        : "";
      const tailwindStyle =
        ".wrapper_yOR7u {width: 100%!important; border-radius: 15px 15px 0 0!important; z-index: 99999999;} .btn_yOR7u { background: inherit; padding: 0 0.5rem; margin: inherit; margin-right: 10px; border: inherit; color: #fff!important; } .nav_yOR7u {padding-bottom: 14px!important;} .line_yOR7u {background: inherit!important;}";
      const consoleStyle = `<style>${tailwindStyle}</style>`;
      const addConsoleCSS = project.settings.console ? consoleStyle : "";

      // Determine whether to make the body content editable based on the state of the checkbox
      const contentEditableAttr = initLiveRender
        ? ""
        : 'contenteditable="true"';

      return `<!DOCTYPE html>
<html data-theme="${theme}">
  <head>
    <title>${project.projectName}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="${
      project.pages[app.activePage].description
    }">
    <meta name="author" content="${project.pages[app.activePage].author}">
    <link rel="stylesheet" href="libraries/font-awesome/css/all.min.css">
    <link rel="stylesheet" href="libraries/daisyui/daisyui.css">
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
    
    // Modified draggable code in the parent window
    document.querySelectorAll('[data-block-type]').forEach(draggable => {
        draggable.addEventListener("dragstart", event => {
            event.dataTransfer.setData("text/plain", draggable.dataset.blockType); // Set data to block type
            // Send drag data to iframe
            previewFrame.contentWindow.postMessage("dragged", "*");
        });
    });
    previewDoc.write(generateHtmlCode());
    previewDoc.close();
    
    // Listen for console messages from the iframe
    window.addEventListener('message', event => {
      const { type, message } = event.data;
      switch (type) {
        case 'consoleLog':
          console.log('Log from iframe:', ...message);
          break;
        case 'consoleError':
          console.error('Error from iframe:', ...message);
          break;
        case 'consoleWarn':
          console.warn('Warning from iframe:', ...message);
          break;
        case 'consoleInfo':
          console.info('Info from iframe:', ...message);
          break;
        case 'consoleTable':
          console.table('Table from iframe:', message.data, message.columns);
          break;
        default:
          break;
      }
    });
    
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
		const theme = project.pages[app.activePage].theme;
    const generateHtmlCode = initPage => {
      return `<!DOCTYPE html>
<html data-theme="${theme}">
  <head>
    <title>${project.projectName}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="${
      project.pages[app.activePage].description
    }">
    <meta name="author" content="${project.pages[app.activePage].author}">
    <link rel="stylesheet" href="libraries/font-awesome/css/all.min.css">
    <link rel="stylesheet" href="libraries/daisyui/daisyui.css">
    <link rel="stylesheet" href="libraries/tailwind/tailwind.min.css">
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
  renderBlocksDropdown2: () => {
	  const theme = project.pages[app.activePage].theme;
    const generateHtmlCode = () => {
        return `<!DOCTYPE html>
<html data-theme="${theme}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="libraries/font-awesome/css/all.min.css">
    <link rel="stylesheet" href="libraries/daisyui/daisyui.css">
    <link rel="stylesheet" href="libraries/tailwind/tailwind.min.css">
  </head>
  <body>
    
  </body>
</html>`;
    };
    
    const container = document.querySelector('[data-blocks]');
    container.innerHTML = "";

    // Iterate over blocks array
    blocks.forEach(category => {
      // Create details element
      const details = document.createElement('details');
      // details.setAttribute('open', '');
      container.appendChild(details);

      // Create summary element with category name
      const summary = document.createElement('summary');
      summary.textContent = category.category;
      details.appendChild(summary);

      // Create div to hold blocks
      const blockContainer = document.createElement('div');
      blockContainer.className = "relative grid grid-cols-2 gap-4";
      details.appendChild(blockContainer);
      
      // Create a new HTML document fragment
      const fragment = document.createDocumentFragment();

      // Iterate over blocks in the category
      category.items.forEach(block => {
        // Create article to wrap iframe
        const wrapper = document.createElement('div');
        wrapper.className = "h-auto grid items-center place-items-center rounded-md p-0";
        wrapper.setAttribute('data-theme', theme);
        blockContainer.appendChild(wrapper);
        
        // Create section to center iframe vertically
        const gridContainer = document.createElement('div');
        gridContainer.className = "relative w-full h-full m-auto p-0";
        wrapper.appendChild(gridContainer);
        
        // Create span to display block name
        // const blockName = document.createElement('span');
//         blockName.className = "text-sm";
//         blockName.textContent = block.name;
//         wrapper.appendChild(blockName);
        
        // Create iframe for each block preview
        const iframe = document.createElement('iframe');
        
        // Apply Tailwind CSS classes and inline styles to the iframe
        iframe.className = "transform scale-50 m-auto p-0";
        iframe.style.width = "200%";
        iframe.style.height = "200%";
        iframe.style.transformOrigin = "top left";
        
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('scrolling', 'no');
        gridContainer.appendChild(iframe);

        // Get the content document of the iframe
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        // Open, write HTML code, and close the content document
        iframeDoc.open();
        iframeDoc.write(generateHtmlCode());
        iframeDoc.close();

        // Add event listener to adjust iframe height once content is loaded
        iframe.addEventListener('load', () => {
          // Set the iframe's height to the scroll height of its content
          const contentDiv = document.createElement('div');
          contentDiv.className = "h-full grid items-center place-items-center";
          contentDiv.innerHTML = block.code;
          contentDiv.style.margin = '0'; // Remove any margin
          contentDiv.style.padding = '0'; // Remove any padding
          iframeDoc.body.innerHTML = ''; // Clear existing content
          iframeDoc.body.appendChild(contentDiv); // Append modified content
          setTimeout(() => {
            const contentHeight = contentDiv.offsetHeight; // Use offsetHeight to include margins and paddings
            iframe.style.height = `${contentHeight}px`;
          }, 300);
        });

        // Add click event to iframe to add block to canvas
        iframe.addEventListener('click', () => {
          console.log("block clicked");
        });
      });
    });
  },
  renderBlocksDropdown: () => {
    const theme = project.pages[app.activePage].theme;
    const container = document.querySelector('[data-blocks]');
    container.innerHTML = "";

    // Iterate over blocks array
    const blocks = app.blocks;
    blocks.forEach(category => {
      // Create details element
      const details = document.createElement('details');
      // details.setAttribute('open', '');
      container.appendChild(details);

      // Create summary element with category name
      const summary = document.createElement('summary');
      summary.textContent = category.category;
      details.appendChild(summary);

      // Create div to hold blocks
      const blockContainer = document.createElement('div');
      blockContainer.className = "p-4 grid grid-cols-1 gap-4";
      details.appendChild(blockContainer);

      // Iterate over blocks in the category
      category.items.forEach(block => {
        // Create div to wrap block code
        const blockWrapper = document.createElement('article');
        blockWrapper.className = "relative w-full rounded-md grid grid-cols-1 items-center place-items-center";
        blockWrapper.setAttribute('data-theme', theme);
        blockContainer.appendChild(blockWrapper);

        // Create header for additional content
        const header = document.createElement('header');
        header.className = "bg-transparent";
        blockWrapper.appendChild(header);

        // Create div to insert block code
        const blockCode = document.createElement('main');
        blockCode.className = "w-full h-full m-auto p-0 overflow-auto";
        blockCode.innerHTML = block.code;
        blockWrapper.appendChild(blockCode);

        // Create span to display block name
        const blockName = document.createElement('span');
        blockName.className = "text-sm";
        blockName.textContent = block.name;
        header.appendChild(blockName);

        // Create footer for additional content
        const footer = document.createElement('footer');
        footer.className = "block w-full bg-transparent";
        blockWrapper.appendChild(footer);

        // Create button to add block
        const addBlockButton = document.createElement('button');
        addBlockButton.className = "block w-full text-sm";
        addBlockButton.innerHTML = `<i class="fa fa-plus"></i>`;
        footer.appendChild(addBlockButton);
        addBlockButton.onclick = () => {
          const htmlString = app.activeHTML;
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlString, 'text/html');
          let body = doc.body;
          
          // detect if an active element exists
          if (doc.querySelector('.activeElm4Polyrise')) {
            let elm = doc.querySelector('.activeElm4Polyrise');
            elm.innerHTML += block.code;
            elm.classList.remove('activeElm4Polyrise');
            body = elm.closest('body');
          } else {
            body.innerHTML += block.code;
          }
          
          // push changes
          app.updateHTMLStructure(body.innerHTML);
              
          // Update the display content
          app.updateLayersContent(app.activePage);
        };
      });
    });
  },
  
  // Function to update HTML structure
  updateHTMLStructure: doc => {
    if (doc !== project.pages[app.activePage].html) {
      project.pages[app.activePage].html = doc;
    
      // Update the preview
      app.updatePreview();
    }
  },
  
  // Toggle active state on blockNameButton click
  toggleActiveState: element => {
    element.classList.toggle('activeElm4Polyrise');
  },
  
  // Function to copy element in layers
  copyElement: elm => {
    // Clone block
    let clonedElement = elm.cloneNode(true);
    app.element = clonedElement;
  },
  
  // Function to paste element in layers
  pasteElement: elm => {
    // Insert the cloned element after the original
    elm.parentNode.insertBefore(app.element, elm.nextSibling);
  
    // push changes
    app.updateHTMLStructure(elm.closest('body').innerHTML);
        
    // Update the display content
    app.updateLayersContent(app.activePage);
    
    // update history stack
    app.addToHistory('Pasted To', blockNameButton.textContent);
  },
  
  // Function to update the display tab
  updateLayersContent: activePageIndex => {
    const layersContent = document.querySelector('[data-layerscontent]');
    layersContent.innerHTML = ''; // Clear existing content
  
    const renderHTMLBlocks = (htmlString, parentElement) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, 'text/html');
      const body = doc.body;
    
      const renderElement = (element, parent) => {
        const newBlock = document.createElement('ul');
        // newBlock.className = "rounded-md mb-0"
        newBlock.className = "bg-gray-800 rounded-md mb-0";

        // Set the ID for the newBlock
        const blockId = Math.floor(Math.random() * 1000); // Generate a random ID
        newBlock.id = `block_${blockId}`;
    
        // Create navigation bar
        const navBar = document.createElement('nav');
        navBar.className = 'flex justify-between items-center p-0 h-12 pr-2 mb-1';
    
        // Check if the element has nested children
        const hasNestedChildren = Array.from(element.childNodes).some(child => child.nodeType === Node.ELEMENT_NODE);
        
        // Apply background class only for top-level nested elements
        // if (hasNestedChildren) {
//           newBlock.className = "bg-gray-800 rounded-md mb-0"
//         }
    
        // Button for expanding and collapsing (if has nested children)
        const expandCollapseButton = document.createElement('button');
        expandCollapseButton.classList.add('inline-block', 'w-auto', 'rounded-none', 'm-0', 'ml-2', 'pl-4', 'bg-transparent', 'border-none');
        expandCollapseButton.innerHTML = hasNestedChildren ? '<i class="fa fa-caret-down"></i>' : '';
        expandCollapseButton.style.display = hasNestedChildren ? 'inline-block' : 'none';
    
        // Button for block name
        const blockNameButton = document.createElement('button');
        blockNameButton.classList.add('inline-block', 'w-auto', 'rounded-none', 'm-0', 'ml-2', 'px-0', 'bg-transparent', 'border-none', 'text-white', 'text-xs');
                
        // Get the element's ID
        const elementId = element.getAttribute('id');
        
        // Set button text content based on whether the element has an I
        let tag = element.tagName.toLowerCase();
        if (tag === 'div') tag = 'box';
        if (tag === 'p') tag = 'paragraph';
        if (tag === 'img') tag = 'image';
        if (tag === 'ul') tag = 'bullet list';
        if (tag === 'ol') tag = 'numbered list';
        if (tag === 'li') tag = 'list item';
        if (['h1', 'h2', 'h3', 'h4', 'h5'].includes(tag)) {
            tag = `heading ${tag.slice(1)}`;
        }

        // Check if the element has a class attribute and if it contains the word "grid"
        if (element.classList.contains('grid')) {
            tag = 'grid';
        }

        // Check if the element has a class attribute and if it contains the word "flex"
        if (element.classList.contains('flex')) {
            tag = 'flexbox';
        }
        
        // Check if the element has a data-name4Polyrise attribute and use its value as the tag
        if (element.hasAttribute('data-name4Polyrise')) {
            tag = element.getAttribute('data-name4Polyrise');
        }
        
        blockNameButton.textContent = elementId ? `${element.tagName.toLowerCase()}#${elementId}` : tag;
        // Bind events to blockNameButton
        app.bindBlockNameButtonEvents(blockNameButton, element);
        
        // Create box to group buttons
        const box1 = document.createElement('li');
        box1.className = "text-white text-xs";

        // Append elements to navigation bar
        box1.appendChild(expandCollapseButton);
        box1.appendChild(blockNameButton);
        navBar.appendChild(box1);
        
        const buttonsContainer = document.createElement('ul');
        navBar.appendChild(buttonsContainer);
        newBlock.appendChild(navBar);
    
        // Render nested elements
        element.childNodes.forEach(child => {
          if (child.nodeType === Node.ELEMENT_NODE) {
            renderElement(child, newBlock);
          }
        });
    
        // Render buttons recursively
        const renderButtonsWithDropdown = () => {
          // Create box to group buttons
          const box = document.createElement('li');
          box.className = "text-white text-xs";
          buttonsContainer.appendChild(box);
      
          // Create dropdown container
          const dropdownContainer = document.createElement('div');
          dropdownContainer.className = "dropdown dropdown-end";
          box.appendChild(dropdownContainer);
      
          // Create ellipsis button
          const ellipsisButton = document.createElement('button');
          ellipsisButton.setAttribute('tabindex', '0');
          ellipsisButton.classList.add('inline-block', 'w-auto', 'rounded-none', 'm-0', 'py-1', 'px-3', 'border-none', 'bg-transparent');
          dropdownContainer.appendChild(ellipsisButton);
      
          // Create ellipsis icon
          const ellipsisIcon = document.createElement('i');
          ellipsisIcon.classList.add('fa', 'fa-ellipsis-vertical');
          ellipsisButton.appendChild(ellipsisIcon);
      
          // Create dropdown menu
          const dropdownMenu = document.createElement('ul');
          dropdownMenu.setAttribute('tabindex', '0');
          dropdownMenu.className = "dropdown-content z-[1] menu menu-horizontal p-2 shadow bg-base-100 rounded-box w-64 text-center";
          dropdownContainer.appendChild(dropdownMenu);
          
          // Add items to dropdown menu
          const dropdownItems = ['font', 'copy', 'paste', 'clone', 'trash', 'eye'];
          dropdownItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = "p-0 m-auto";
            const button = document.createElement('button');
            button.className = "m-0 p-2 border-0 bg-transparent text-current text-sm";
            const icon = document.createElement('i');
          
            if (item === 'eye') {
              if (element.style.display === 'none') {
                icon.className = `fa fa-eye-slash`;
              } else {
                icon.className = `fa fa-eye`;
              }
            } else {
              icon.className = `fa fa-${item}`;
            }
            
            button.appendChild(icon);
            listItem.appendChild(button);
            dropdownMenu.appendChild(listItem);
          });
          
          // Add event listener for dropdown menu items
          dropdownMenu.addEventListener('click', (event) => {
            // Handle the selected action based on the button's icon (e.g., copy, paste, clone, delete)
            const selectedItem = event.target;
            if (selectedItem.classList.contains("fa-font")) {
              let newName = prompt('Enter the new name:');
              // Remove any characters that are not lowercase letters, uppercase letters, or numbers
              newName = newName.replace(/[^a-zA-Z0-9]/g, '');
  
              // Set the new name as the text content of the button
              element.setAttribute('data-name4Polyrise', newName);
              // Update project HTML with the modified content
              const updatedHtml = body.innerHTML;
              project.pages[app.activePage].html = updatedHtml;
              // Update the display content
              app.updatePreview();
              app.updateLayersContent(app.activePage);
              
              // Update history stack
              app.addToHistory('Renamed', newName);
            }
            if (selectedItem.classList.contains("fa-copy")) {
              app.copyElement(element);
            }
            if (selectedItem.classList.contains("fa-paste")) {
              app.pasteElement(element);
            }
            if (selectedItem.classList.contains("fa-clone")) {
              // Clone block
              let clonedElement = element.cloneNode(true);
              // Insert the cloned element after the original
              element.parentNode.insertBefore(clonedElement, element.nextSibling);
          
              // Update project HTML with the modified content
              const updatedHtml = body.innerHTML;
              project.pages[app.activePage].html = updatedHtml;
        
              // Update the display content
              app.updatePreview();
              app.updateLayersContent(app.activePage);
              
              // update history stack
              app.addToHistory('Cloned', blockNameButton.textContent);
            }
            if (selectedItem.classList.contains("fa-trash")) {
              element.remove();
            
              // Update project HTML with the modified content
              const updatedHtml = body.innerHTML;
              project.pages[app.activePage].html = updatedHtml;
        
              // Update the display content
              app.updatePreview();
              app.updateLayersContent(app.activePage);
              
              // update history stack
              app.addToHistory('Deleted', blockNameButton.textContent);
            }
            if (selectedItem.classList.contains('fa-eye') || selectedItem.classList.contains('fa-eye-slash')) {
              if (selectedItem.classList.contains('fa-eye')) {
                selectedItem.className = 'fa fa-eye-slash';
                element.style.display = 'none';
              } else if (selectedItem.classList.contains('fa-eye-slash')) {
                selectedItem.className = 'fa fa-eye';
                element.removeAttribute('style');
              }
              // Update project HTML with the modified content
              const updatedHtml = body.innerHTML;
              project.pages[app.activePage].html = updatedHtml;
        
              // Update the display content
              app.updatePreview();
              return false;
            }
          });
        };
        renderButtonsWithDropdown();
    
        // Append the new block to the display area
        parent.appendChild(newBlock);
        
        // Add event listener to the expand/collapse button
        expandCollapseButton.addEventListener('click', () => {
          // Assuming 'newBlock' is the element you want to find direct children of
          const directDivChildren = Array.from(newBlock.children).filter(child => child.tagName.toLowerCase() === 'ul');
    
          // Iterate through direct children and toggle the 'hidden' class
          directDivChildren.forEach(child => {
            child.classList.toggle('hidden');
          });
    
          // Change the caret icon accordingly
          const caretIcon = expandCollapseButton.querySelector('i');
          caretIcon.classList.toggle('fa-caret-down');
          caretIcon.classList.toggle('fa-caret-right');
        });
      }
    
      // Render elements within the body
      body.childNodes.forEach(child => {
        if (child.nodeType === Node.ELEMENT_NODE) {
          renderElement(child, parentElement);
        }
      });
    }
  
    // Render HTML blocks for the active page
    if (project.pages[app.activePage] && project.pages[app.activePage].html) {
      const htmlString = project.pages[app.activePage].html;
      renderHTMLBlocks(htmlString, layersContent);
    }

    // Call the function to render HTML blocks
    renderHTMLBlocks(activePageIndex);
  },

  // Function to bind event listener to blockNameButton
  bindBlockNameButtonEvents: (blockNameButton, element) => {
    blockNameButton.addEventListener('click', () => {
      const isCurrentlyActive = element.classList.contains('activeElm4Polyrise');
      const isHighlighted = blockNameButton.closest('nav').closest('ul').classList.contains('bg-indigo-900');
      
      // If the block is already active and highlighted, remove the active state
      if (isCurrentlyActive && isHighlighted) {
        element.classList.remove('activeElm4Polyrise');
        blockNameButton.closest('nav').closest('ul').classList.remove('bg-indigo-900');
        app.clearAttributes();
        app.activeHTML = element.closest('body').innerHTML;
      } else {
        // Toggle on the active state for the clicked block
        const currentActiveBlock = document.querySelector('.bg-indigo-900');
        if (currentActiveBlock) {
          currentActiveBlock.classList.remove('bg-indigo-900');
          currentActiveBlock.classList.remove('activeElm4Polyrise');
          app.clearAttributes();
        }
        blockNameButton.parentNode.closest('nav').closest('ul').classList.add('bg-indigo-900');
        element.classList.add('activeElm4Polyrise');
        app.renderAttributes(element);
        app.activeHTML = element.closest('body').innerHTML;
      }
    });
  },
  
  // Function to display add edit and remove attributes
  renderAttributes: element => {
    const renderAttributesContainer = document.querySelector('[data-renderAttributes]');
    renderAttributesContainer.innerHTML = ''; // Clear existing content
    
    const container = document.createElement('div');
    const navElm = document.createElement('nav');
    const ulElm = document.createElement('ul');
    const liAttr = document.createElement('li');
    const textboxAttr = document.createElement('input');
    const liValue = document.createElement('li');
    const textboxValue = document.createElement('input');
    const addButton = document.createElement('button');
    const addIcon = document.createElement('i');
    const addListItem = document.createElement('li');
    const addList = document.createElement('ul');
    
    textboxAttr.type = 'text';
    textboxAttr.placeholder = 'Attribute name';
    textboxValue.type = 'text';
    textboxValue.placeholder = 'Attribute value';
    
    addIcon.classList.add('fa', 'fa-plus');
    addButton.appendChild(addIcon);
    addListItem.appendChild(addButton);
    addList.appendChild(addListItem);
    
    liAttr.appendChild(textboxAttr);
    ulElm.appendChild(liAttr);
    
    liValue.appendChild(textboxValue);
    ulElm.appendChild(liValue);
    
    navElm.appendChild(ulElm);
    navElm.appendChild(addList);
    
    container.appendChild(navElm);
    renderAttributesContainer.appendChild(container);
    
    addButton.addEventListener('click', () => {
    if (textboxAttr.toLowerCase().trim() === 'class') {
        return; // Skip rendering 'class' attribute
      }
      element.setAttribute(textboxAttr.value, textboxValue.value);
      
      // push changes
      app.updateHTMLStructure(element.closest('body').innerHTML);
      app.renderAttributes(element); // Re-render attributes after change
      app.updatePreview();
    })
  
    const attributes = Array.from(element.attributes);
    attributes.forEach(attribute => {
      // Skip rendering 'class' attribute if element has 'data-name4Polyrise' attribute
      if (attribute.name === 'class' || attribute.name === 'data-name4polyrise') {
          return // Skip rendering 'class' or data-name4Polyrise attribute
      }
      const div = document.createElement('div');
      const nav = document.createElement('nav');
      const ul = document.createElement('ul');
      const liName = document.createElement('li');
      const spanName = document.createElement('span');
      const liValue = document.createElement('li');
      const inputValue = document.createElement('input');
      const deleteButton = document.createElement('button');
      const deleteIcon = document.createElement('i');
  
      inputValue.type = 'text';
      inputValue.placeholder = 'Attribute Value';
      inputValue.value = attribute.value;
      spanName.textContent = attribute.name;
  
      liName.appendChild(spanName);
      liValue.appendChild(inputValue);
      ul.appendChild(liName);
      ul.appendChild(liValue);
  
      // Create delete button inside its own ul and li tags
      const deleteList = document.createElement('ul');
      const deleteListItem = document.createElement('li');
      deleteIcon.classList.add('fa', 'fa-trash');
      deleteButton.appendChild(deleteIcon);
      deleteListItem.appendChild(deleteButton);
      deleteList.appendChild(deleteListItem);
      nav.appendChild(ul);
      nav.appendChild(deleteList); // Append delete button ul to nav
      div.appendChild(nav);
  
      renderAttributesContainer.appendChild(div);
  
      deleteButton.addEventListener('click', () => {
        element.removeAttribute(attribute.name);
      
        // push changes
        app.updateHTMLStructure(element.closest('body').innerHTML);
        app.renderAttributes(element); // Re-render attributes after deletion
        app.updatePreview();
      })
  
      inputValue.addEventListener('keyup', () => {
        element.setAttribute(attribute.name, inputValue.value);
      
        // push changes
        app.updateHTMLStructure(element.closest('body').innerHTML);
        app.updatePreview();
      })
    })
  },
  clearAttributes: () => {
    const renderAttributesContainer = document.querySelector('[data-renderAttributes]');
    renderAttributesContainer.innerHTML = ''; // Clear existing content
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
    // Place app name and version
    document.getElementById("appName").textContent = app.appName;
    document.getElementById("appVersion").textContent = app.appVersion;
    
    // toggle console
    toggleconsole.onchange = () => {
      project.settings.console = toggleconsole.checked;
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
      project.settings.theme = darkmode.checked;
      document
        .querySelector("html[data-theme]")
        .setAttribute("data-theme", project.settings.theme ? "dark" : "light");
    };
    const themes = ["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter","dim","nord","sunset"];
    
    themes.forEach(theme => {
      let code = `<button class="outline-base-content text-start outline-offset-4 p-0 m-0 bg-transparent border-0" onclick="project.pages[app.activePage].theme = '${theme}'; app.updatePreview(liverender.checked);">
      <span data-theme="${theme}" class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans">
        <span class="grid grid-cols-5 grid-rows-3">
          <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="invisible h-3 w-3 shrink-0">
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
            </svg>
            <span class="flex-grow text-sm">${theme}</span> 
            <span class="flex h-full shrink-0 flex-wrap gap-1">
            <span class="bg-primary rounded-badge w-2"></span> 
            <span class="bg-secondary rounded-badge w-2"></span> 
            <span class="bg-accent rounded-badge w-2"></span> 
            <span class="bg-neutral rounded-badge w-2"></span>
            </span>
          </span>
        </span>
      </span>
    </button>`
    
      document.querySelector('[data-output=themes]').innerHTML += code;
    });

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
          if (tabName === 'layers') {
            // Init blocks/components
            app.renderBlocksDropdown();
            
            app.updateLayersContent(app.activePage);
            // navigator.clipboard.writeText(document.querySelector("[data-layerscontent]").innerHTML);
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