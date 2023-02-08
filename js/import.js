// load quill
dynamicallyLoadScript = (url) => {
  var script = document.createElement("script");  // create a script DOM node
  script.src = url;  // set its src to the provided URL
  script.setAttribute('defer', '')
 
  // add it to the end of the head section of the page
  // (could change 'head' to 'body' to add it to the end of the body section instead)
  document.head.appendChild(script);
}

dynamicallyLoadScript('libraries/tailwind/tailwind.min.js')
dynamicallyLoadScript('libraries/panzoom/panzoom.mod.js')
dynamicallyLoadScript('js/zoompan.js')
dynamicallyLoadScript('js/dialogs.js')
dynamicallyLoadScript('js/components.js')
dynamicallyLoadScript('js/app.js')