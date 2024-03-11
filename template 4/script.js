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
  activePage: 0,
  libraries: [],
  blocks: [
    {
      category: "Basic",
      items: [
        {
          name: "Box",
          image: "box.svg",
          code: `<div>hello</div>`,
        },
        {
          name: "Text",
          image: "text.svg",
          code: `<span>hello</span>`,
        },
        {
          name: "Image",
          image: "image.svg",
          code: `<img src="https://tailwindcss.com/img/card-top.jpg">`,
        },
        {
          name: "Video",
          image: "video.svg",
          code: `<video controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
          <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>`,
        },
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
          name: "Button",
          image: "button.svg",
          code: `<button>button</button>`,
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
          name: "Textarea",
          image: "textarea.svg",
          code: `<textarea></textarea>`,
        },
        {
          name: "Custom",
          image: "custom.svg",
          code: ``,
        }
      ]
    }
  ],

  // Function to handle storage and display of library/framework
  fetchSuggestions: searchText => {
    fetch(
      `https://api.cdnjs.com/libraries?search=${searchText}&fields=filename,description,version`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        if (data && data.results && data.results.length > 0) {
          const libraries = data.results.map(result => result);
          app.displaySuggestions(libraries);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  },
  displaySuggestions: suggestions => {
    const suggestionsList = document.getElementById("suggestions");
    suggestionsList.innerHTML = ""; // Clear previous suggestions

    suggestions.forEach(result => {
      const listItem = document.createElement("li");
      listItem.className = "list-none";
      listItem.innerHTML = `<div class="flex justify-between mb-2 font-bold text-1xl">
            <span>${result.name}</span>
            <span>${result.version}</span>
        </div>
        <div class="text-sm">${result.description}<br><hr></div>`;
      listItem.onclick = () => {
        // Add the clicked suggestion to the libraries array
        const url = result.latest; // Assuming 'latest' holds the URL
        app.libraries.push(url);
        // Clear the suggestions list
        suggestionsList.innerHTML = "";
        // Display the libraries display
        app.displayLibrariesArray();
        searchBox.value = "";
      };
      suggestionsList.appendChild(listItem);
    });
  },
  displayLibrariesArray: () => {
    const librariesArray = app.libraries;
    let sortLibrariesContainer = document.getElementById("sortLibraries");
    sortLibrariesContainer.innerHTML = "";
    const embedArray = (result, index) => {
      const newNav = document.createElement("nav");
      newNav.className = "flex justify-between py-2";
      newNav.setAttribute("data-index", index);

      const newInput = document.createElement("input");
      newInput.type = "text";
      newInput.placeholder =
        "https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.2/Sortable.min.js";
      newInput.setAttribute("data", "library");
      newInput.className = "w-full p-3 pr-0 rounded-md rounded-r-none bg-gray-800";
      newInput.value = result;
      newInput.onkeyup = () => {
        // Update the value of the librariesArray at the corresponding index
        librariesArray[index] = newInput.value.trim();
      };

      const deleteButton = document.createElement("button");
      deleteButton.className =
        // "delete-button p-3 bg-red-400 rounded-md rounded-l-none";
        "delete-button p-3 bg-gray-800 rounded-md rounded-l-none";
      deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
      deleteButton.onclick = () => {
        // Remove the library from the array by its index
        app.libraries.splice(index, 1);
        // Re-render the libraries array
        app.displayLibrariesArray();
      };

      newNav.appendChild(newInput);
      newNav.appendChild(deleteButton);
      sortLibrariesContainer.appendChild(newNav);
    };

    // Embed each library into a new input field and delete button
    librariesArray.forEach((input, index) => {
      embedArray(librariesArray[index], index);
    });

    // Check if the last input field is empty, and append an additional empty input field if needed
    if (
      librariesArray.length === 0 ||
      librariesArray[librariesArray.length - 1].trim() !== ""
    ) {
      embedArray("", librariesArray.length);
    }
  },

  // Ajax function to download over http
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
          bottomNav.classList.remove('hidden');
        } else {
          iframenav.classList.add('hidden');
          bottomNav.classList.add('hidden');
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
  
  // Function to update previews
  updatePreview: (initLiveRender = false) => {
    const generateHtmlCode = () => {
      const showConsole = project.settings.console
        ? `<script type="module" src="js/dom-console.js" defer></script>`
        : "";
      const tailwindStyle =
        ".wrapper_yOR7u {left: 0!important; width: 100%!important; border-radius: 15px 15px 0 0!important; z-index: 99999999;} .btn_yOR7u { background: inherit; padding: 0 0.5rem; margin: inherit; margin-right: 0px; border: inherit; color: #fff!important; } .nav_yOR7u {padding-bottom: 14px!important;} .line_yOR7u {background: inherit!important;}";
      const consoleStyle = `<style>${tailwindStyle}</style>`;
      const addConsoleCSS = project.settings.console ? consoleStyle : "";

      // Determine whether to make the body content editable based on the state of the checkbox
      const contentEditableAttr = initLiveRender
        ? ""
        : 'contenteditable="true"';

      return `<!DOCTYPE html>
<html>
  <head>
    <title>${project.pages[app.activePage].title}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="${
      project.pages[app.activePage].description
    }">
    <meta name="author" content="${project.pages[app.activePage].author}">
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
    frame.className = "w-full h-full";
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
        newBlock.className = "pl-4 rounded-md mb-0";

        // Set the ID for the newBlock
        const blockId = Math.floor(Math.random() * 1000); // Generate a random ID
        newBlock.id = `block_${blockId}`;
    
        // Create navigation bar
        const navBar = document.createElement('nav');
        navBar.className = 'flex justify-between items-center p-0 h-12 pr-2 mb-1 rounded-md';
    
        // Check if the element has nested children
        const hasNestedChildren = Array.from(element.childNodes).some(child => child.nodeType === Node.ELEMENT_NODE);
    
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
            }
            if (selectedItem.classList.contains("fa-trash")) {
              element.remove();
            
              // Update project HTML with the modified content
              const updatedHtml = body.innerHTML;
              project.pages[app.activePage].html = updatedHtml;
        
              // Update the display content
              app.updatePreview();
              app.updateLayersContent(app.activePage);
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
      const isHighlighted = blockNameButton.closest('nav').classList.contains('bg-indigo-900');
      
      // If the block is already active and highlighted, remove the active state
      if (isCurrentlyActive && isHighlighted) {
        element.classList.remove('activeElm4Polyrise');
        blockNameButton.closest('nav').classList.remove('bg-indigo-900');
        app.activeHTML = element.closest('body').innerHTML;
      } else {
        // Toggle on the active state for the clicked block
        const currentActiveBlock = document.querySelector('.bg-indigo-900');
        if (currentActiveBlock) {
          currentActiveBlock.classList.remove('bg-indigo-900');
          currentActiveBlock.classList.remove('activeElm4Polyrise');
          app.clearAttributes();
        }
        blockNameButton.parentNode.closest('nav').classList.add('bg-indigo-900');
        element.classList.add('activeElm4Polyrise');
        app.activeHTML = element.closest('body').innerHTML;
      }
    });
  },
  
  // Exports zip file
  exportZip: () => {
    let zip = new JSZip();
    
    // Iterate over each library
    app.libraries.forEach(library => {
      app.getFile(library, data => {
        // Get the name of the library file from its URL
        let parts = library.split("/");
        let name = parts[parts.length - 1];
  
        // Add the downloaded file to the zip archive
        zip.file(name, data);
  
        // Check if all files are added, then generate and download the zip file
        if (Object.keys(zip.files).length === app.libraries.length) {
          let content = zip.generate({ type: "blob" });
          saveAs(content, `libraries-${new Date().getFullYear()}.zip`);
        }
      });
    });
  },

  // Initiate function
  init: () => {
    // Place app name and version
    document.getElementById("appName").textContent = app.appName;
    document.getElementById("appVersion").textContent = app.appVersion;
    document.getElementById("appUrl").href = app.appUrl;
    document.getElementById("appLicense").href = app.appLicense;
    
    // Place project name and version
    document.getElementById("projectLogo").src = project.logo;
    document.getElementById("projectName").value = project.name;
    document.getElementById("projectVersion").value = project.version;
    document.getElementById("projectUrl").value = project.url;
    document.getElementById("projectTitle").value = project.pages[app.activePage].title;
    document.getElementById("projectDesc").value = project.pages[app.activePage].description;
    document.getElementById("projectMeta").value = project.meta;

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
    
    // init layers
    app.updateLayersContent(app.activePage);
    
    // init live preview
    app.updatePreview(liverender.checked ? true : false);
    
    // init zooming and panning
    app.initZoomPan();
    
    // toggle live render
    liverender.onchange = () => {
      app.updatePreview(liverender.checked ? true : false);
    };
    
    // toggle console
    toggleconsole.onchange = () => {
      project.settings.console = toggleconsole.checked;
      app.updatePreview(liverender.checked);
    };

    // displays and handles libraries array
    app.displayLibrariesArray();
    const sortLibrariesContainer = document.getElementById("sortLibraries");
    const searchBox = document.getElementById("searchBox");
    const suggestionsList = document.getElementById("suggestions");
    const searchFunc = () => {
      const searchText = searchBox.value.trim();
      suggestionsList.innerHTML = "";
      if (!searchBox.value) {
        suggestionsList.innerHTML = "";
        return false;
      }

      if (searchText.length <= 0) {
        suggestionsList.innerHTML = "";
        return false;
      } else {
        app.fetchSuggestions(searchText);
      }
    };
    searchBox.onkeyup = () => searchFunc();
    searchBox.onchange = () => searchFunc();
    
    // render blocks to add to canvas
    const blocksContainer = document.querySelector('[data-blocksContainer]');
    blocksContainer.innerHTML = "";
    
    app.blocks.forEach(block => {
      const collapse = document.createElement('div');
      collapse.classList.add('collapse', 'collapse-plus', 'capitalize');

      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('checked', '');
      collapse.appendChild(input);

      const collapseTitle = document.createElement('div');
      collapseTitle.classList.add('collapse-title');
      collapseTitle.textContent = block.category.toLowerCase();
      collapse.appendChild(collapseTitle);

      const collapseContent = document.createElement('div');
      collapseContent.dataset.blocks = block.category.toLowerCase();
      collapseContent.classList.add('collapse-content', 'grid', 'grid-cols-2', 'lg:grid-cols-4', 'capitalize', 'text-center');

      block.items.forEach(item => {
        const article = document.createElement('article');
        article.classList.add('m-4', 'p-4', 'rounded-lg', 'bg-gray-800', 'shadow-lg');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('cursor-pointer', 'mb-2');

        const img = document.createElement('img');
        img.classList.add('w-full', 'rounded-lg');
        img.src = `imgs/svgs/${item.image}`;

        imgContainer.appendChild(img);
        article.appendChild(imgContainer);

        const itemName = document.createElement('div');
        itemName.textContent = item.name.toLowerCase();
        article.appendChild(itemName);

        collapseContent.appendChild(article);
      });

      collapse.appendChild(collapseContent);
      blocksContainer.appendChild(collapse);
    });
  }
};

// check if FileReader API is available
if (!window.FileReader) {
  alert("File API & FileReader API not supported!");
}

app.init();