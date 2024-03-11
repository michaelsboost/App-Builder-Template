// project json
let appJSON = {
  name: 'AppName',
  title: 'An attractive title',
  description: 'The most attractive description ever!',
  version: '0.1',
  author: 'BrikzBuildr',
  website: '',
  scratchpad: '',
  analytics: '',
  logo: logo.src,
  theme: false,
  console: true,
  libraries: {
    chartjs: false
  },
  data: {},
  html: `<nav class="absolute inset-x-0 px-4">
  <ul>
    <li>
      <a href="javascript:void(0)">
        <i class="fa fa-bars"></i>
      </a>
    </li>
  </ul>
  <ul>
    <li><strong>Brand</strong></li>
  </ul>
  <ul>
    <li>
      <a href="javascript:void(0)">
        <i class="fa fa-cog"></i>
      </a>
    </li>
  </ul>
</nav>

<div class="absolute inset-0 mt-14 p-4 overflow-auto">
  <button>
    button
  </button>
  <p>
    paragraph
  </p>
</div>`,
  functions: {}
};

const app = {
  // holds external libraries url and source code grabbed through ajax
  checkedLibsArr: {
    id: [],
    data: []
  },
    
  // toggle console
  toggleConsole: () => {
    app.updateStorage();
    app.updatePreview();
  },

  // update iframe preview function
  updatePreview: () => {
    let showConsole = (toggleconsole.checked) ? '<script type="module" src="js/dom-console.js" defer></script>\n    ' : '';

    // console
    let tailwindStyle = '.wrapper_yOR7u {left: 0;width: 100%!important; border-radius: 15px 15px 0 0!important;} .btn_yOR7u { cursor: pointer; background: inherit; padding: 0 0.5rem; margin: inherit; margin-right: 10px; border: inherit; color: #fff!important; } .nav_yOR7u {padding-bottom: 14px!important;} .line_yOR7u {background: inherit!important;}';
    let consoleStyle  = `<style>${tailwindStyle}</style>`;
    let addConsoleCSS = (toggleconsole.checked) ? consoleStyle : '';

    let darkorlight   = (theme.checked) ? 'dark' : 'light';

    // render checked libraries
    let checkedLibs = '';
    if (charts.checked) {
      checkedLibs = `<script src="libraries/chartjs/Chart.min.js" defer></script>`;
    }

    let htmlCode  = `<!DOCTYPE html>
<html data-theme="${darkorlight}">
  <head>
    <title>${appJSON.title}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="${appJSON.description}">
    ${addConsoleCSS}
    <link rel="stylesheet" href="css/style.css" />
    ${checkedLibs}
    ${showConsole}
  </head>
  <body>
    ${appJSON.html}
    
    <script>
      setTimeout(function() {${appJSON.javascript}}, 100);
    </script>
  </body>
</html>`;

    previewElm.innerHTML = "";
    let frame            = document.createElement("iframe");
    frame.setAttribute("id", "preview");
    frame.setAttribute("title", appJSON.name);
    frame.setAttribute("class", "w-full h-full overflow-auto");
    frame.setAttribute("sandbox", "allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts");
    previewElm.appendChild(frame);
    let previewFrame = document.getElementById("preview");
    let preview      = previewFrame.contentDocument ||  previewFrame.contentWindow.document;

    preview.open();
    preview.write(htmlCode);
    preview.close();
  },
    
  // share project
  shareProject: () => {
    cssLibrary = (css.value == 'picocss') ? 'https://cdnjs.cloudflare.com/ajax/libs/picocss/1.5.7/pico.classless.min.css' : 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css';
  
    let checkTheme  = (theme.checked) ? 'dark' : 'light';
    let picotheme   = `document.querySelector('html').setAttribute('data-theme', '${checkTheme}');\n\n`;
    let istailwind  = (css.value === 'tailwind') ? '' : picotheme;
  
    var data = {
      title        : appJSON.name,
      html         : appJSON.html,
      js           : `// Shared from kodeWeave\n${istailwind}${jsEditor.getValue()}`,
      css_external : cssLibrary,
      editors: '000'
    };
    var JSONstring = JSON.stringify(data).replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    
    var form = 
    '<form id="tempForm" action="https://codepen.io/pen/define" method="POST" target="_blank" style="display: none;">' + 
      '<input type="hidden" name="data" value=\'' + 
        JSONstring + 
        '\'>' + 
      '<button id="tempBtn">Create New Pen with Prefilled Data</button>' +
    '</form>';
  
    // append click then remove
    document.body.innerHTML += form;
    tempBtn.click();
    document.querySelector('#tempForm').remove();
    location.reload(true);
  },

  // function to load an image as base64
  loadFile: (input) => {
    let reader = new FileReader();
  
    reader.onload = (e) => {
      // grab file
      appJSON = JSON.parse(e.target.result);
  
      let js = appJSON.javascript;
      title.value                 = appJSON.name;
      description.value           = appJSON.description;
      version.value               = appJSON.version;
      author.value                = appJSON.author;
      website.value               = appJSON.website;
      googleanalytics.value       = appJSON.analytics;
      logo.src                    = appJSON.logo;
      scratchpad.value            = appJSON.scratchpad;
      charts.checked              = (appJSON.libraries.chartjs) ? true : false;
      css.value                   = appJSON.css;
      theme.checked               = (appJSON.theme) ? true : false;
      if (css.value === 'tailwind') theme.parentElement.parentElement.classList.add('hidden');
      toggleconsole.checked       = (appJSON.console) ? true : false;
      charts.onchange();
    };
    reader.readAsText(input.files[0]);

    // close the left side menu
    document.querySelector('[data-opened=left].menu.meta.block button[aria-close]').onclick();
  },
  
  // function to load logo
  loadLogo: (input) => {
    let reader = new FileReader();
  
    reader.onload = (e) => {
      // grab file
      logo.src     = e.target.result;
      app.updateStorage();
    };
    reader.readAsDataURL(input.files[0]);
  },
  
  // clear data from localStorage
  newProject: () => {
    localStorage.clear();
    location.reload(true);
  },

  // Convert logo to png images for manifest.json
  embedImage: (source, size) => {
    let image = new Image();
    image.src = source;
    image.onload = () => {
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
  
  // export json
  exportJSON: () => {
    var blob = new Blob([JSON.stringify(appJSON)], {type: "application/json"});
    saveAs(blob, `${appJSON.name.toString().toLowerCase().replace(/ /g,"")}-kodeWeave.json`);
  },
  
  // ajax function to get source of a file
  getFile: (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
  
    xhr.onreadystatechange = (data) => {
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
  
  // export zip
  exportZip: () => {
    // convert create logo image sizes for manifest.json
    let imageArr = ['192', '256', '384', '512', logo.width];
    for (let i of imageArr) {
      app.embedImage(logo.src, i);
    }

    // join font awesome library into users new project
    JSZipUtils.getBinaryContent("../zips/font-awesome.zip", function(err, data) {
      if(err) {
        throw err; // or handle err
      }
  
      let zip = new JSZip(data);

      // save css libraries/frameworks
      let cssortailwind, forJSfile = '';
      if (css.value === 'picocss') {
        zip.file("libraries/pico/pico.classless.min.css", cssObj.data[0]);

        // variable for the service worker
        cssortailwind = "./libraries/pico/pico.classless.min.css";
      }
      if (css.value === 'tailwind') {
        zip.file("libraries/tailwind/tailwind.min.js",  cssObj.data[0]);
        zip.file("libraries/tailwind/tailwind.min.css", cssObj.data[1]);

        // variable for the app.min.js file
        forJSfile = cssObj.data[0];

        // variable for the service worker
        cssortailwind = `"./libraries/tailwind/tailwind.min.css",
  "./libraries/tailwind/tailwind.min.js"`;
      }
      if (css.value === 'both') {
        zip.file("libraries/pico/pico.classless.min.css", cssObj.data[0]);
        zip.file("libraries/tailwind/tailwind-mod.min.css", cssObj.data[1]);

        // variable for the service worker
        cssortailwind = `"./libraries/pico/pico.classless.min.css",
  "./libraries/tailwind/tailwind-mod.min.css"`;
      }
  
      const base64Content = logo.src;
      // base64 encoded data doesn't contain commas    
      let base64ContentArray = base64Content.split(",");
      // base64 content cannot contain whitespaces but nevertheless skip if there are!
      let mimeType = base64ContentArray[0].match(/[^:\s*]\w+\/[\w-+\d.]+(?=[;| ])/)[0];
  
      let logoType;
      if (mimeType === 'image/png') {
        zip.file("imgs/logo.png", logo.src.split('base64,')[1],{base64: true});
        logoType = 'png';
      }
      if (mimeType === 'image/jpeg') {
        zip.file("imgs/logo.jpeg", logo.src.split('base64,')[1],{base64: true});
        logoType = 'jpeg';
      }
      if (mimeType === 'image/svg+xml') {
        zip.file("imgs/logo.svg", logo.src.split('base64,')[1],{base64: true});
        logoType = 'svg';
      }

      // save images for manifest.json
      zip.file("imgs/icon-192x192.png", document.querySelectorAll('[data-image]')[0].src.split('base64,')[1],{base64: true});
      zip.file("imgs/icon-256x256.png", document.querySelectorAll('[data-image]')[1].src.split('base64,')[1],{base64: true});
      zip.file("imgs/icon-384x384.png", document.querySelectorAll('[data-image]')[2].src.split('base64,')[1],{base64: true});
      zip.file("imgs/icon-512x512.png", document.querySelectorAll('[data-image]')[3].src.split('base64,')[1],{base64: true});
      zip.file("imgs/logo.png",         document.querySelectorAll('[data-image]')[4].src.split('base64,')[1],{base64: true});

      zip.file("js/app.js", appJSON.javascript);
      zip.file("js/app.min.js", `${forJSfile}${checkedLibsArr.data[0]}${appJSON.javascript.toString().replace(/\/\*[\s\S]*?\*\/|\/\/.*\n|\s{2,}|\n|\t|\v|\s(?=function\(.*?\))|\s(?=\=)|\s(?=\{)/g,"").replace(/\s?function\s?\(/g,"function(").replace(/\s?\{\s?/g,"{").replace(/\s?\}\s?/g,"}").replace(/\,\s?/g,",").replace(/if\s?/g,"if")}`);
      zip.file("manifest.json", `{
        "theme_color":      "hsl(207, 31%, 11%)",
        "background_color": "hsl(207, 31%, 11%)",
        "display":      "standalone",
        "start_url":    "./index.html",
        "lang":         "en-US",
        "name":         "${appJSON.name.toString().trim()}",
        "short_name":   "${appJSON.name.toString().trim()}",
        "description" : "${appJSON.description}",
        "icons": [
          {
            "src":     "./imgs/icon-192x192.png",
            "sizes":   "192x192",
            "type":    "image/png",
            "purpose": "any"
          },
          {
            "src":     "./imgs/icon-256x256.png",
            "sizes":   "256x256",
            "type":    "image/png",
            "purpose": "any"
          },
          {
            "src":     "./imgs/icon-384x384.png",
            "sizes":   "384x384",
            "type":    "image/png",
            "purpose": "any"
          },
          {
            "src":     "./imgs/icon-512x512.png",
            "sizes":   "512x512",
            "type":    "image/png",
            "purpose": "maskable"
          }
        ]
      }`);

      let cssLib, cssImport, picotheme = '';

      // if user is just using picocss
      if (css.value === 'picocss') {
        cssLib    = `<link rel="stylesheet" href="css/style.css" />`;
        cssImport = `@import url('../libraries/pico/pico.classless.min.css');`;

        if (appJSON.theme === true) {
          picotheme = `data-theme="dark"`;
        }
        if (appJSON.theme === false) {
          picotheme = `data-theme="light"`;
        }
      }
      // if user is just using tailwind
      if (css.value === 'tailwind') {
        cssLib = `<link rel="stylesheet" href="css/style.css" />`;
        cssImport = `@import url('../libraries/tailwind/tailwind.min.css');`;
      }

      // if user is using picocss and tailwind
      if (css.value === 'both') {
        cssLib = `<link rel="stylesheet" href="css/style.css" />`;
        cssImport = `@import url('../libraries/pico/pico.classless.min.css');
@import url('../libraries/tailwind/tailwind-mod.min.css');`;

        if (appJSON.theme === true) {
          picotheme = `data-theme="dark"`;
        }
        if (appJSON.theme === false) {
          picotheme = `data-theme="light"`;
        }
      }

      // render checked libraries
      let checkedLibs = '';
      if (charts.checked) {
        zip.file("libraries/chartjs/Chart.min.js", checkedLibsArr.data[0]);

        // variable for the service worker
        checkedLibs = `"./libraries/chartjs/Chart.min.js",`;
      }

      zip.file("css/style.css", `/* imports */
${cssImport}
@import url('../libraries/font-awesome/css/all.min.css');`);
      zip.file("index.html", `<!DOCTYPE html>
<html lang="en-US" ${picotheme}>
<head>
  <title>${appJSON.title}</title>
  <meta charset="utf-8">
  <meta name="description" content="${appJSON.description}">
  <meta name="author" content="${appJSON.author}">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="manifest" href="manifest.json">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="application-name" content="${appJSON.name.toString().trim()}">
  <meta name="apple-mobile-web-app-title" content="${appJSON.title}">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="theme-color" content="hsl(207, 31%, 11%)">
  <meta name="msapplication-navbutton-color" content="hsl(207, 31%, 11%)">
  <meta name="msapplication-starturl" content="./index.html">
  <link rel="apple-touch-icon" href="imgs/logo.${logoType}">
  <link rel="icon" href="imgs/logo.${logoType}" type="image/x-icon" />
  ${cssLib}
  <script src="js/app.min.js" defer></script>
</head>
<body>
${htmlEditor.getValue()}

  <script>
    // service worker for progressive web app
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js');
      });
    }
  </script>
</body>
</html>`);
      zip.file("README.md", `${appJSON.name.toString().trim()}
===================

${appJSON.description}

Version
-------------

${appJSON.version}

License
-------------

MIT

This app was created and exported with [kodeWeave](https://michaelsboost.github.io/kodeWeave/)`);
      zip.file("package.json", `{
"name": "${appJSON.name.toString().toLowerCase().trim()}",
"version": "${appJSON.version}",
"description": "${appJSON.description}",
"main": "index.js",
"scripts": {
  "serve": "http-server -p 1336 build -c-1"
},
"author": "${appJSON.author}",
"license": "MIT"
}`);
      zip.file("LICENSE.md", `The MIT License (MIT)
Copyright (c) ${new Date().getFullYear()} ${appJSON.author}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`);

      zip.file("sw.js", `let cacheName    = "${appJSON.name.toString().trim()}";
let filesToCache = [
  "./",
  ${cssortailwind},
  ${checkedLibs}
  "./manifest.json",
  "./imgs/logo.png",
  "./imgs/logo.svg",
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./js/app.min.js",
  "./libraries/font-awesome/css/all.css",
  "./libraries/font-awesome/css/all.min.css",
  "./libraries/font-awesome/css/brands.css",
  "./libraries/font-awesome/css/brands.min.css",
  "./libraries/font-awesome/css/fontawesome.css",
  "./libraries/font-awesome/css/fontawesome.min.css",
  "./libraries/font-awesome/css/regular.css",
  "./libraries/font-awesome/css/regular.min.css",
  "./libraries/font-awesome/css/solid.css",
  "./libraries/font-awesome/css/solid.min.css",
  "./libraries/font-awesome/css/svg-with-js.css",
  "./libraries/font-awesome/css/svg-with-js.min.css",
  "./libraries/font-awesome/css/v4-font-face.css",
  "./libraries/font-awesome/css/v4-font-face.min.css",
  "./libraries/font-awesome/css/v4-shims.css",
  "./libraries/font-awesome/css/v4-shims.min.css",
  "./libraries/font-awesome/css/v5-font-face.css",
  "./libraries/font-awesome/css/v5-font-face.min.css",
  "./libraries/font-awesome/js/all.js",
  "./libraries/font-awesome/js/all.min.js",
  "./libraries/font-awesome/js/brands.js",
  "./libraries/font-awesome/js/brands.min.js",
  "./libraries/font-awesome/js/conflict-detection.js",
  "./libraries/font-awesome/js/conflict-detection.min.js",
  "./libraries/font-awesome/js/fontawesome.js",
  "./libraries/font-awesome/js/fontawesome.min.js",
  "./libraries/font-awesome/js/regular.js",
  "./libraries/font-awesome/js/regular.min.js",
  "./libraries/font-awesome/js/solid.js",
  "./libraries/font-awesome/js/solid.min.js",
  "./libraries/font-awesome/js/v4-shims.js",
  "./libraries/font-awesome/js/v4-shims.min.js",
  "./libraries/font-awesome/LICENSE.txt",
  "./libraries/font-awesome/sprites/brands.svg",
  "./libraries/font-awesome/sprites/regular.svg",
  "./libraries/font-awesome/sprites/solid.svg",
  "./libraries/font-awesome/svgs/brands/42-group.svg",
  "./libraries/font-awesome/svgs/brands/500px.svg",
  "./libraries/font-awesome/svgs/brands/accessible-icon.svg",
  "./libraries/font-awesome/svgs/brands/accusoft.svg",
  "./libraries/font-awesome/svgs/brands/adn.svg",
  "./libraries/font-awesome/svgs/brands/adversal.svg",
  "./libraries/font-awesome/svgs/brands/affiliatetheme.svg",
  "./libraries/font-awesome/svgs/brands/airbnb.svg",
  "./libraries/font-awesome/svgs/brands/algolia.svg",
  "./libraries/font-awesome/svgs/brands/alipay.svg",
  "./libraries/font-awesome/svgs/brands/amazon-pay.svg",
  "./libraries/font-awesome/svgs/brands/amazon.svg",
  "./libraries/font-awesome/svgs/brands/amilia.svg",
  "./libraries/font-awesome/svgs/brands/android.svg",
  "./libraries/font-awesome/svgs/brands/angellist.svg",
  "./libraries/font-awesome/svgs/brands/angrycreative.svg",
  "./libraries/font-awesome/svgs/brands/angular.svg",
  "./libraries/font-awesome/svgs/brands/app-store-ios.svg",
  "./libraries/font-awesome/svgs/brands/app-store.svg",
  "./libraries/font-awesome/svgs/brands/apper.svg",
  "./libraries/font-awesome/svgs/brands/apple-pay.svg",
  "./libraries/font-awesome/svgs/brands/apple.svg",
  "./libraries/font-awesome/svgs/brands/artstation.svg",
  "./libraries/font-awesome/svgs/brands/asymmetrik.svg",
  "./libraries/font-awesome/svgs/brands/atlassian.svg",
  "./libraries/font-awesome/svgs/brands/audible.svg",
  "./libraries/font-awesome/svgs/brands/autoprefixer.svg",
  "./libraries/font-awesome/svgs/brands/avianex.svg",
  "./libraries/font-awesome/svgs/brands/aviato.svg",
  "./libraries/font-awesome/svgs/brands/aws.svg",
  "./libraries/font-awesome/svgs/brands/bandcamp.svg",
  "./libraries/font-awesome/svgs/brands/battle-net.svg",
  "./libraries/font-awesome/svgs/brands/behance.svg",
  "./libraries/font-awesome/svgs/brands/bilibili.svg",
  "./libraries/font-awesome/svgs/brands/bimobject.svg",
  "./libraries/font-awesome/svgs/brands/bitbucket.svg",
  "./libraries/font-awesome/svgs/brands/bitcoin.svg",
  "./libraries/font-awesome/svgs/brands/bity.svg",
  "./libraries/font-awesome/svgs/brands/black-tie.svg",
  "./libraries/font-awesome/svgs/brands/blackberry.svg",
  "./libraries/font-awesome/svgs/brands/blogger-b.svg",
  "./libraries/font-awesome/svgs/brands/blogger.svg",
  "./libraries/font-awesome/svgs/brands/bluetooth-b.svg",
  "./libraries/font-awesome/svgs/brands/bluetooth.svg",
  "./libraries/font-awesome/svgs/brands/bootstrap.svg",
  "./libraries/font-awesome/svgs/brands/bots.svg",
  "./libraries/font-awesome/svgs/brands/btc.svg",
  "./libraries/font-awesome/svgs/brands/buffer.svg",
  "./libraries/font-awesome/svgs/brands/buromobelexperte.svg",
  "./libraries/font-awesome/svgs/brands/buy-n-large.svg",
  "./libraries/font-awesome/svgs/brands/buysellads.svg",
  "./libraries/font-awesome/svgs/brands/canadian-maple-leaf.svg",
  "./libraries/font-awesome/svgs/brands/cc-amazon-pay.svg",
  "./libraries/font-awesome/svgs/brands/cc-amex.svg",
  "./libraries/font-awesome/svgs/brands/cc-apple-pay.svg",
  "./libraries/font-awesome/svgs/brands/cc-diners-club.svg",
  "./libraries/font-awesome/svgs/brands/cc-discover.svg",
  "./libraries/font-awesome/svgs/brands/cc-jcb.svg",
  "./libraries/font-awesome/svgs/brands/cc-mastercard.svg",
  "./libraries/font-awesome/svgs/brands/cc-paypal.svg",
  "./libraries/font-awesome/svgs/brands/cc-stripe.svg",
  "./libraries/font-awesome/svgs/brands/cc-visa.svg",
  "./libraries/font-awesome/svgs/brands/centercode.svg",
  "./libraries/font-awesome/svgs/brands/centos.svg",
  "./libraries/font-awesome/svgs/brands/chrome.svg",
  "./libraries/font-awesome/svgs/brands/chromecast.svg",
  "./libraries/font-awesome/svgs/brands/cloudflare.svg",
  "./libraries/font-awesome/svgs/brands/cloudscale.svg",
  "./libraries/font-awesome/svgs/brands/cloudsmith.svg",
  "./libraries/font-awesome/svgs/brands/cloudversify.svg",
  "./libraries/font-awesome/svgs/brands/cmplid.svg",
  "./libraries/font-awesome/svgs/brands/codepen.svg",
  "./libraries/font-awesome/svgs/brands/codiepie.svg",
  "./libraries/font-awesome/svgs/brands/confluence.svg",
  "./libraries/font-awesome/svgs/brands/connectdevelop.svg",
  "./libraries/font-awesome/svgs/brands/contao.svg",
  "./libraries/font-awesome/svgs/brands/cotton-bureau.svg",
  "./libraries/font-awesome/svgs/brands/cpanel.svg",
  "./libraries/font-awesome/svgs/brands/creative-commons-by.svg",
  "./libraries/font-awesome/svgs/brands/creative-commons-nc-eu.svg",
  "./libraries/font-awesome/svgs/brands/creative-commons-nc-jp.svg",
  "./libraries/font-awesome/svgs/brands/creative-commons-nc.svg",
  "./libraries/font-awesome/svgs/brands/creative-commons-nd.svg",
  "./libraries/font-awesome/svgs/brands/creative-commons-pd-alt.svg",
  "./libraries/font-awesome/svgs/brands/creative-commons-pd.svg",
  "./libraries/font-awesome/svgs/brands/creative-commons-remix.svg",
  "./libraries/font-awesome/svgs/brands/creative-commons-sa.svg",
  "./libraries/font-awesome/svgs/brands/creative-commons-sampling-plus.svg",
  "./libraries/font-awesome/svgs/brands/creative-commons-sampling.svg",
  "./libraries/font-awesome/svgs/brands/creative-commons-share.svg",
  "./libraries/font-awesome/svgs/brands/creative-commons-zero.svg",
  "./libraries/font-awesome/svgs/brands/creative-commons.svg",
  "./libraries/font-awesome/svgs/brands/critical-role.svg",
  "./libraries/font-awesome/svgs/brands/css3-alt.svg",
  "./libraries/font-awesome/svgs/brands/css3.svg",
  "./libraries/font-awesome/svgs/brands/cuttlefish.svg",
  "./libraries/font-awesome/svgs/brands/d-and-d-beyond.svg",
  "./libraries/font-awesome/svgs/brands/d-and-d.svg",
  "./libraries/font-awesome/svgs/brands/dailymotion.svg",
  "./libraries/font-awesome/svgs/brands/dashcube.svg",
  "./libraries/font-awesome/svgs/brands/deezer.svg",
  "./libraries/font-awesome/svgs/brands/delicious.svg",
  "./libraries/font-awesome/svgs/brands/deploydog.svg",
  "./libraries/font-awesome/svgs/brands/deskpro.svg",
  "./libraries/font-awesome/svgs/brands/dev.svg",
  "./libraries/font-awesome/svgs/brands/deviantart.svg",
  "./libraries/font-awesome/svgs/brands/dhl.svg",
  "./libraries/font-awesome/svgs/brands/diaspora.svg",
  "./libraries/font-awesome/svgs/brands/digg.svg",
  "./libraries/font-awesome/svgs/brands/digital-ocean.svg",
  "./libraries/font-awesome/svgs/brands/discord.svg",
  "./libraries/font-awesome/svgs/brands/discourse.svg",
  "./libraries/font-awesome/svgs/brands/dochub.svg",
  "./libraries/font-awesome/svgs/brands/docker.svg",
  "./libraries/font-awesome/svgs/brands/draft2digital.svg",
  "./libraries/font-awesome/svgs/brands/dribbble.svg",
  "./libraries/font-awesome/svgs/brands/dropbox.svg",
  "./libraries/font-awesome/svgs/brands/drupal.svg",
  "./libraries/font-awesome/svgs/brands/dyalog.svg",
  "./libraries/font-awesome/svgs/brands/earlybirds.svg",
  "./libraries/font-awesome/svgs/brands/ebay.svg",
  "./libraries/font-awesome/svgs/brands/edge-legacy.svg",
  "./libraries/font-awesome/svgs/brands/edge.svg",
  "./libraries/font-awesome/svgs/brands/elementor.svg",
  "./libraries/font-awesome/svgs/brands/ello.svg",
  "./libraries/font-awesome/svgs/brands/ember.svg",
  "./libraries/font-awesome/svgs/brands/empire.svg",
  "./libraries/font-awesome/svgs/brands/envira.svg",
  "./libraries/font-awesome/svgs/brands/erlang.svg",
  "./libraries/font-awesome/svgs/brands/ethereum.svg",
  "./libraries/font-awesome/svgs/brands/etsy.svg",
  "./libraries/font-awesome/svgs/brands/evernote.svg",
  "./libraries/font-awesome/svgs/brands/expeditedssl.svg",
  "./libraries/font-awesome/svgs/brands/facebook-f.svg",
  "./libraries/font-awesome/svgs/brands/facebook-messenger.svg",
  "./libraries/font-awesome/svgs/brands/facebook.svg",
  "./libraries/font-awesome/svgs/brands/fantasy-flight-games.svg",
  "./libraries/font-awesome/svgs/brands/fedex.svg",
  "./libraries/font-awesome/svgs/brands/fedora.svg",
  "./libraries/font-awesome/svgs/brands/figma.svg",
  "./libraries/font-awesome/svgs/brands/firefox-browser.svg",
  "./libraries/font-awesome/svgs/brands/firefox.svg",
  "./libraries/font-awesome/svgs/brands/first-order-alt.svg",
  "./libraries/font-awesome/svgs/brands/first-order.svg",
  "./libraries/font-awesome/svgs/brands/firstdraft.svg",
  "./libraries/font-awesome/svgs/brands/flickr.svg",
  "./libraries/font-awesome/svgs/brands/flipboard.svg",
  "./libraries/font-awesome/svgs/brands/fly.svg",
  "./libraries/font-awesome/svgs/brands/font-awesome.svg",
  "./libraries/font-awesome/svgs/brands/fonticons-fi.svg",
  "./libraries/font-awesome/svgs/brands/fonticons.svg",
  "./libraries/font-awesome/svgs/brands/fort-awesome-alt.svg",
  "./libraries/font-awesome/svgs/brands/fort-awesome.svg",
  "./libraries/font-awesome/svgs/brands/forumbee.svg",
  "./libraries/font-awesome/svgs/brands/foursquare.svg",
  "./libraries/font-awesome/svgs/brands/free-code-camp.svg",
  "./libraries/font-awesome/svgs/brands/freebsd.svg",
  "./libraries/font-awesome/svgs/brands/fulcrum.svg",
  "./libraries/font-awesome/svgs/brands/galactic-republic.svg",
  "./libraries/font-awesome/svgs/brands/galactic-senate.svg",
  "./libraries/font-awesome/svgs/brands/get-pocket.svg",
  "./libraries/font-awesome/svgs/brands/gg-circle.svg",
  "./libraries/font-awesome/svgs/brands/gg.svg",
  "./libraries/font-awesome/svgs/brands/git-alt.svg",
  "./libraries/font-awesome/svgs/brands/git.svg",
  "./libraries/font-awesome/svgs/brands/github-alt.svg",
  "./libraries/font-awesome/svgs/brands/github.svg",
  "./libraries/font-awesome/svgs/brands/gitkraken.svg",
  "./libraries/font-awesome/svgs/brands/gitlab.svg",
  "./libraries/font-awesome/svgs/brands/gitter.svg",
  "./libraries/font-awesome/svgs/brands/glide-g.svg",
  "./libraries/font-awesome/svgs/brands/glide.svg",
  "./libraries/font-awesome/svgs/brands/gofore.svg",
  "./libraries/font-awesome/svgs/brands/golang.svg",
  "./libraries/font-awesome/svgs/brands/goodreads-g.svg",
  "./libraries/font-awesome/svgs/brands/goodreads.svg",
  "./libraries/font-awesome/svgs/brands/google-drive.svg",
  "./libraries/font-awesome/svgs/brands/google-pay.svg",
  "./libraries/font-awesome/svgs/brands/google-play.svg",
  "./libraries/font-awesome/svgs/brands/google-plus-g.svg",
  "./libraries/font-awesome/svgs/brands/google-plus.svg",
  "./libraries/font-awesome/svgs/brands/google-wallet.svg",
  "./libraries/font-awesome/svgs/brands/google.svg",
  "./libraries/font-awesome/svgs/brands/gratipay.svg",
  "./libraries/font-awesome/svgs/brands/grav.svg",
  "./libraries/font-awesome/svgs/brands/gripfire.svg",
  "./libraries/font-awesome/svgs/brands/grunt.svg",
  "./libraries/font-awesome/svgs/brands/guilded.svg",
  "./libraries/font-awesome/svgs/brands/gulp.svg",
  "./libraries/font-awesome/svgs/brands/hacker-news.svg",
  "./libraries/font-awesome/svgs/brands/hackerrank.svg",
  "./libraries/font-awesome/svgs/brands/hashnode.svg",
  "./libraries/font-awesome/svgs/brands/hips.svg",
  "./libraries/font-awesome/svgs/brands/hire-a-helper.svg",
  "./libraries/font-awesome/svgs/brands/hive.svg",
  "./libraries/font-awesome/svgs/brands/hooli.svg",
  "./libraries/font-awesome/svgs/brands/hornbill.svg",
  "./libraries/font-awesome/svgs/brands/hotjar.svg",
  "./libraries/font-awesome/svgs/brands/houzz.svg",
  "./libraries/font-awesome/svgs/brands/html5.svg",
  "./libraries/font-awesome/svgs/brands/hubspot.svg",
  "./libraries/font-awesome/svgs/brands/ideal.svg",
  "./libraries/font-awesome/svgs/brands/imdb.svg",
  "./libraries/font-awesome/svgs/brands/instagram.svg",
  "./libraries/font-awesome/svgs/brands/instalod.svg",
  "./libraries/font-awesome/svgs/brands/intercom.svg",
  "./libraries/font-awesome/svgs/brands/internet-explorer.svg",
  "./libraries/font-awesome/svgs/brands/invision.svg",
  "./libraries/font-awesome/svgs/brands/ioxhost.svg",
  "./libraries/font-awesome/svgs/brands/itch-io.svg",
  "./libraries/font-awesome/svgs/brands/itunes-note.svg",
  "./libraries/font-awesome/svgs/brands/itunes.svg",
  "./libraries/font-awesome/svgs/brands/java.svg",
  "./libraries/font-awesome/svgs/brands/jedi-order.svg",
  "./libraries/font-awesome/svgs/brands/jenkins.svg",
  "./libraries/font-awesome/svgs/brands/jira.svg",
  "./libraries/font-awesome/svgs/brands/joget.svg",
  "./libraries/font-awesome/svgs/brands/joomla.svg",
  "./libraries/font-awesome/svgs/brands/js.svg",
  "./libraries/font-awesome/svgs/brands/jsfiddle.svg",
  "./libraries/font-awesome/svgs/brands/kaggle.svg",
  "./libraries/font-awesome/svgs/brands/keybase.svg",
  "./libraries/font-awesome/svgs/brands/keycdn.svg",
  "./libraries/font-awesome/svgs/brands/kickstarter-k.svg",
  "./libraries/font-awesome/svgs/brands/kickstarter.svg",
  "./libraries/font-awesome/svgs/brands/korvue.svg",
  "./libraries/font-awesome/svgs/brands/laravel.svg",
  "./libraries/font-awesome/svgs/brands/lastfm.svg",
  "./libraries/font-awesome/svgs/brands/leanpub.svg",
  "./libraries/font-awesome/svgs/brands/less.svg",
  "./libraries/font-awesome/svgs/brands/line.svg",
  "./libraries/font-awesome/svgs/brands/linkedin-in.svg",
  "./libraries/font-awesome/svgs/brands/linkedin.svg",
  "./libraries/font-awesome/svgs/brands/linode.svg",
  "./libraries/font-awesome/svgs/brands/linux.svg",
  "./libraries/font-awesome/svgs/brands/lyft.svg",
  "./libraries/font-awesome/svgs/brands/magento.svg",
  "./libraries/font-awesome/svgs/brands/mailchimp.svg",
  "./libraries/font-awesome/svgs/brands/mandalorian.svg",
  "./libraries/font-awesome/svgs/brands/markdown.svg",
  "./libraries/font-awesome/svgs/brands/mastodon.svg",
  "./libraries/font-awesome/svgs/brands/maxcdn.svg",
  "./libraries/font-awesome/svgs/brands/mdb.svg",
  "./libraries/font-awesome/svgs/brands/medapps.svg",
  "./libraries/font-awesome/svgs/brands/medium.svg",
  "./libraries/font-awesome/svgs/brands/medrt.svg",
  "./libraries/font-awesome/svgs/brands/meetup.svg",
  "./libraries/font-awesome/svgs/brands/megaport.svg",
  "./libraries/font-awesome/svgs/brands/mendeley.svg",
  "./libraries/font-awesome/svgs/brands/meta.svg",
  "./libraries/font-awesome/svgs/brands/microblog.svg",
  "./libraries/font-awesome/svgs/brands/microsoft.svg",
  "./libraries/font-awesome/svgs/brands/mix.svg",
  "./libraries/font-awesome/svgs/brands/mixcloud.svg",
  "./libraries/font-awesome/svgs/brands/mixer.svg",
  "./libraries/font-awesome/svgs/brands/mizuni.svg",
  "./libraries/font-awesome/svgs/brands/modx.svg",
  "./libraries/font-awesome/svgs/brands/monero.svg",
  "./libraries/font-awesome/svgs/brands/napster.svg",
  "./libraries/font-awesome/svgs/brands/neos.svg",
  "./libraries/font-awesome/svgs/brands/nfc-directional.svg",
  "./libraries/font-awesome/svgs/brands/nfc-symbol.svg",
  "./libraries/font-awesome/svgs/brands/nimblr.svg",
  "./libraries/font-awesome/svgs/brands/node-js.svg",
  "./libraries/font-awesome/svgs/brands/node.svg",
  "./libraries/font-awesome/svgs/brands/npm.svg",
  "./libraries/font-awesome/svgs/brands/ns8.svg",
  "./libraries/font-awesome/svgs/brands/nutritionix.svg",
  "./libraries/font-awesome/svgs/brands/octopus-deploy.svg",
  "./libraries/font-awesome/svgs/brands/odnoklassniki.svg",
  "./libraries/font-awesome/svgs/brands/old-republic.svg",
  "./libraries/font-awesome/svgs/brands/opencart.svg",
  "./libraries/font-awesome/svgs/brands/openid.svg",
  "./libraries/font-awesome/svgs/brands/opera.svg",
  "./libraries/font-awesome/svgs/brands/optin-monster.svg",
  "./libraries/font-awesome/svgs/brands/orcid.svg",
  "./libraries/font-awesome/svgs/brands/osi.svg",
  "./libraries/font-awesome/svgs/brands/padlet.svg",
  "./libraries/font-awesome/svgs/brands/page4.svg",
  "./libraries/font-awesome/svgs/brands/pagelines.svg",
  "./libraries/font-awesome/svgs/brands/palfed.svg",
  "./libraries/font-awesome/svgs/brands/patreon.svg",
  "./libraries/font-awesome/svgs/brands/paypal.svg",
  "./libraries/font-awesome/svgs/brands/perbyte.svg",
  "./libraries/font-awesome/svgs/brands/periscope.svg",
  "./libraries/font-awesome/svgs/brands/phabricator.svg",
  "./libraries/font-awesome/svgs/brands/phoenix-framework.svg",
  "./libraries/font-awesome/svgs/brands/phoenix-squadron.svg",
  "./libraries/font-awesome/svgs/brands/php.svg",
  "./libraries/font-awesome/svgs/brands/pied-piper-alt.svg",
  "./libraries/font-awesome/svgs/brands/pied-piper-hat.svg",
  "./libraries/font-awesome/svgs/brands/pied-piper-pp.svg",
  "./libraries/font-awesome/svgs/brands/pied-piper.svg",
  "./libraries/font-awesome/svgs/brands/pinterest-p.svg",
  "./libraries/font-awesome/svgs/brands/pinterest.svg",
  "./libraries/font-awesome/svgs/brands/pix.svg",
  "./libraries/font-awesome/svgs/brands/playstation.svg",
  "./libraries/font-awesome/svgs/brands/product-hunt.svg",
  "./libraries/font-awesome/svgs/brands/pushed.svg",
  "./libraries/font-awesome/svgs/brands/python.svg",
  "./libraries/font-awesome/svgs/brands/qq.svg",
  "./libraries/font-awesome/svgs/brands/quinscape.svg",
  "./libraries/font-awesome/svgs/brands/quora.svg",
  "./libraries/font-awesome/svgs/brands/r-project.svg",
  "./libraries/font-awesome/svgs/brands/raspberry-pi.svg",
  "./libraries/font-awesome/svgs/brands/ravelry.svg",
  "./libraries/font-awesome/svgs/brands/react.svg",
  "./libraries/font-awesome/svgs/brands/reacteurope.svg",
  "./libraries/font-awesome/svgs/brands/readme.svg",
  "./libraries/font-awesome/svgs/brands/rebel.svg",
  "./libraries/font-awesome/svgs/brands/red-river.svg",
  "./libraries/font-awesome/svgs/brands/reddit-alien.svg",
  "./libraries/font-awesome/svgs/brands/reddit.svg",
  "./libraries/font-awesome/svgs/brands/redhat.svg",
  "./libraries/font-awesome/svgs/brands/renren.svg",
  "./libraries/font-awesome/svgs/brands/replyd.svg",
  "./libraries/font-awesome/svgs/brands/researchgate.svg",
  "./libraries/font-awesome/svgs/brands/resolving.svg",
  "./libraries/font-awesome/svgs/brands/rev.svg",
  "./libraries/font-awesome/svgs/brands/rocketchat.svg",
  "./libraries/font-awesome/svgs/brands/rockrms.svg",
  "./libraries/font-awesome/svgs/brands/rust.svg",
  "./libraries/font-awesome/svgs/brands/safari.svg",
  "./libraries/font-awesome/svgs/brands/salesforce.svg",
  "./libraries/font-awesome/svgs/brands/sass.svg",
  "./libraries/font-awesome/svgs/brands/schlix.svg",
  "./libraries/font-awesome/svgs/brands/screenpal.svg",
  "./libraries/font-awesome/svgs/brands/scribd.svg",
  "./libraries/font-awesome/svgs/brands/searchengin.svg",
  "./libraries/font-awesome/svgs/brands/sellcast.svg",
  "./libraries/font-awesome/svgs/brands/sellsy.svg",
  "./libraries/font-awesome/svgs/brands/servicestack.svg",
  "./libraries/font-awesome/svgs/brands/shirtsinbulk.svg",
  "./libraries/font-awesome/svgs/brands/shopify.svg",
  "./libraries/font-awesome/svgs/brands/shopware.svg",
  "./libraries/font-awesome/svgs/brands/simplybuilt.svg",
  "./libraries/font-awesome/svgs/brands/sistrix.svg",
  "./libraries/font-awesome/svgs/brands/sith.svg",
  "./libraries/font-awesome/svgs/brands/sitrox.svg",
  "./libraries/font-awesome/svgs/brands/sketch.svg",
  "./libraries/font-awesome/svgs/brands/skyatlas.svg",
  "./libraries/font-awesome/svgs/brands/skype.svg",
  "./libraries/font-awesome/svgs/brands/slack.svg",
  "./libraries/font-awesome/svgs/brands/slideshare.svg",
  "./libraries/font-awesome/svgs/brands/snapchat.svg",
  "./libraries/font-awesome/svgs/brands/soundcloud.svg",
  "./libraries/font-awesome/svgs/brands/sourcetree.svg",
  "./libraries/font-awesome/svgs/brands/space-awesome.svg",
  "./libraries/font-awesome/svgs/brands/speakap.svg",
  "./libraries/font-awesome/svgs/brands/speaker-deck.svg",
  "./libraries/font-awesome/svgs/brands/spotify.svg",
  "./libraries/font-awesome/svgs/brands/square-behance.svg",
  "./libraries/font-awesome/svgs/brands/square-dribbble.svg",
  "./libraries/font-awesome/svgs/brands/square-facebook.svg",
  "./libraries/font-awesome/svgs/brands/square-font-awesome-stroke.svg",
  "./libraries/font-awesome/svgs/brands/square-font-awesome.svg",
  "./libraries/font-awesome/svgs/brands/square-git.svg",
  "./libraries/font-awesome/svgs/brands/square-github.svg",
  "./libraries/font-awesome/svgs/brands/square-gitlab.svg",
  "./libraries/font-awesome/svgs/brands/square-google-plus.svg",
  "./libraries/font-awesome/svgs/brands/square-hacker-news.svg",
  "./libraries/font-awesome/svgs/brands/square-instagram.svg",
  "./libraries/font-awesome/svgs/brands/square-js.svg",
  "./libraries/font-awesome/svgs/brands/square-lastfm.svg",
  "./libraries/font-awesome/svgs/brands/square-odnoklassniki.svg",
  "./libraries/font-awesome/svgs/brands/square-pied-piper.svg",
  "./libraries/font-awesome/svgs/brands/square-pinterest.svg",
  "./libraries/font-awesome/svgs/brands/square-reddit.svg",
  "./libraries/font-awesome/svgs/brands/square-snapchat.svg",
  "./libraries/font-awesome/svgs/brands/square-steam.svg",
  "./libraries/font-awesome/svgs/brands/square-tumblr.svg",
  "./libraries/font-awesome/svgs/brands/square-twitter.svg",
  "./libraries/font-awesome/svgs/brands/square-viadeo.svg",
  "./libraries/font-awesome/svgs/brands/square-vimeo.svg",
  "./libraries/font-awesome/svgs/brands/square-whatsapp.svg",
  "./libraries/font-awesome/svgs/brands/square-xing.svg",
  "./libraries/font-awesome/svgs/brands/square-youtube.svg",
  "./libraries/font-awesome/svgs/brands/squarespace.svg",
  "./libraries/font-awesome/svgs/brands/stack-exchange.svg",
  "./libraries/font-awesome/svgs/brands/stack-overflow.svg",
  "./libraries/font-awesome/svgs/brands/stackpath.svg",
  "./libraries/font-awesome/svgs/brands/staylinked.svg",
  "./libraries/font-awesome/svgs/brands/steam-symbol.svg",
  "./libraries/font-awesome/svgs/brands/steam.svg",
  "./libraries/font-awesome/svgs/brands/sticker-mule.svg",
  "./libraries/font-awesome/svgs/brands/strava.svg",
  "./libraries/font-awesome/svgs/brands/stripe-s.svg",
  "./libraries/font-awesome/svgs/brands/stripe.svg",
  "./libraries/font-awesome/svgs/brands/studiovinari.svg",
  "./libraries/font-awesome/svgs/brands/stumbleupon-circle.svg",
  "./libraries/font-awesome/svgs/brands/stumbleupon.svg",
  "./libraries/font-awesome/svgs/brands/superpowers.svg",
  "./libraries/font-awesome/svgs/brands/supple.svg",
  "./libraries/font-awesome/svgs/brands/suse.svg",
  "./libraries/font-awesome/svgs/brands/swift.svg",
  "./libraries/font-awesome/svgs/brands/symfony.svg",
  "./libraries/font-awesome/svgs/brands/teamspeak.svg",
  "./libraries/font-awesome/svgs/brands/telegram.svg",
  "./libraries/font-awesome/svgs/brands/tencent-weibo.svg",
  "./libraries/font-awesome/svgs/brands/the-red-yeti.svg",
  "./libraries/font-awesome/svgs/brands/themeco.svg",
  "./libraries/font-awesome/svgs/brands/themeisle.svg",
  "./libraries/font-awesome/svgs/brands/think-peaks.svg",
  "./libraries/font-awesome/svgs/brands/tiktok.svg",
  "./libraries/font-awesome/svgs/brands/trade-federation.svg",
  "./libraries/font-awesome/svgs/brands/trello.svg",
  "./libraries/font-awesome/svgs/brands/tumblr.svg",
  "./libraries/font-awesome/svgs/brands/twitch.svg",
  "./libraries/font-awesome/svgs/brands/twitter.svg",
  "./libraries/font-awesome/svgs/brands/typo3.svg",
  "./libraries/font-awesome/svgs/brands/uber.svg",
  "./libraries/font-awesome/svgs/brands/ubuntu.svg",
  "./libraries/font-awesome/svgs/brands/uikit.svg",
  "./libraries/font-awesome/svgs/brands/umbraco.svg",
  "./libraries/font-awesome/svgs/brands/uncharted.svg",
  "./libraries/font-awesome/svgs/brands/uniregistry.svg",
  "./libraries/font-awesome/svgs/brands/unity.svg",
  "./libraries/font-awesome/svgs/brands/unsplash.svg",
  "./libraries/font-awesome/svgs/brands/untappd.svg",
  "./libraries/font-awesome/svgs/brands/ups.svg",
  "./libraries/font-awesome/svgs/brands/usb.svg",
  "./libraries/font-awesome/svgs/brands/usps.svg",
  "./libraries/font-awesome/svgs/brands/ussunnah.svg",
  "./libraries/font-awesome/svgs/brands/vaadin.svg",
  "./libraries/font-awesome/svgs/brands/viacoin.svg",
  "./libraries/font-awesome/svgs/brands/viadeo.svg",
  "./libraries/font-awesome/svgs/brands/viber.svg",
  "./libraries/font-awesome/svgs/brands/vimeo-v.svg",
  "./libraries/font-awesome/svgs/brands/vimeo.svg",
  "./libraries/font-awesome/svgs/brands/vine.svg",
  "./libraries/font-awesome/svgs/brands/vk.svg",
  "./libraries/font-awesome/svgs/brands/vnv.svg",
  "./libraries/font-awesome/svgs/brands/vuejs.svg",
  "./libraries/font-awesome/svgs/brands/watchman-monitoring.svg",
  "./libraries/font-awesome/svgs/brands/waze.svg",
  "./libraries/font-awesome/svgs/brands/weebly.svg",
  "./libraries/font-awesome/svgs/brands/weibo.svg",
  "./libraries/font-awesome/svgs/brands/weixin.svg",
  "./libraries/font-awesome/svgs/brands/whatsapp.svg",
  "./libraries/font-awesome/svgs/brands/whmcs.svg",
  "./libraries/font-awesome/svgs/brands/wikipedia-w.svg",
  "./libraries/font-awesome/svgs/brands/windows.svg",
  "./libraries/font-awesome/svgs/brands/wirsindhandwerk.svg",
  "./libraries/font-awesome/svgs/brands/wix.svg",
  "./libraries/font-awesome/svgs/brands/wizards-of-the-coast.svg",
  "./libraries/font-awesome/svgs/brands/wodu.svg",
  "./libraries/font-awesome/svgs/brands/wolf-pack-battalion.svg",
  "./libraries/font-awesome/svgs/brands/wordpress-simple.svg",
  "./libraries/font-awesome/svgs/brands/wordpress.svg",
  "./libraries/font-awesome/svgs/brands/wpbeginner.svg",
  "./libraries/font-awesome/svgs/brands/wpexplorer.svg",
  "./libraries/font-awesome/svgs/brands/wpforms.svg",
  "./libraries/font-awesome/svgs/brands/wpressr.svg",
  "./libraries/font-awesome/svgs/brands/xbox.svg",
  "./libraries/font-awesome/svgs/brands/xing.svg",
  "./libraries/font-awesome/svgs/brands/y-combinator.svg",
  "./libraries/font-awesome/svgs/brands/yahoo.svg",
  "./libraries/font-awesome/svgs/brands/yammer.svg",
  "./libraries/font-awesome/svgs/brands/yandex-international.svg",
  "./libraries/font-awesome/svgs/brands/yandex.svg",
  "./libraries/font-awesome/svgs/brands/yarn.svg",
  "./libraries/font-awesome/svgs/brands/yelp.svg",
  "./libraries/font-awesome/svgs/brands/yoast.svg",
  "./libraries/font-awesome/svgs/brands/youtube.svg",
  "./libraries/font-awesome/svgs/brands/zhihu.svg",
  "./libraries/font-awesome/svgs/regular/address-book.svg",
  "./libraries/font-awesome/svgs/regular/address-card.svg",
  "./libraries/font-awesome/svgs/regular/bell-slash.svg",
  "./libraries/font-awesome/svgs/regular/bell.svg",
  "./libraries/font-awesome/svgs/regular/bookmark.svg",
  "./libraries/font-awesome/svgs/regular/building.svg",
  "./libraries/font-awesome/svgs/regular/calendar-check.svg",
  "./libraries/font-awesome/svgs/regular/calendar-days.svg",
  "./libraries/font-awesome/svgs/regular/calendar-minus.svg",
  "./libraries/font-awesome/svgs/regular/calendar-plus.svg",
  "./libraries/font-awesome/svgs/regular/calendar-xmark.svg",
  "./libraries/font-awesome/svgs/regular/calendar.svg",
  "./libraries/font-awesome/svgs/regular/chart-bar.svg",
  "./libraries/font-awesome/svgs/regular/chess-bishop.svg",
  "./libraries/font-awesome/svgs/regular/chess-king.svg",
  "./libraries/font-awesome/svgs/regular/chess-knight.svg",
  "./libraries/font-awesome/svgs/regular/chess-pawn.svg",
  "./libraries/font-awesome/svgs/regular/chess-queen.svg",
  "./libraries/font-awesome/svgs/regular/chess-rook.svg",
  "./libraries/font-awesome/svgs/regular/circle-check.svg",
  "./libraries/font-awesome/svgs/regular/circle-dot.svg",
  "./libraries/font-awesome/svgs/regular/circle-down.svg",
  "./libraries/font-awesome/svgs/regular/circle-left.svg",
  "./libraries/font-awesome/svgs/regular/circle-pause.svg",
  "./libraries/font-awesome/svgs/regular/circle-play.svg",
  "./libraries/font-awesome/svgs/regular/circle-question.svg",
  "./libraries/font-awesome/svgs/regular/circle-right.svg",
  "./libraries/font-awesome/svgs/regular/circle-stop.svg",
  "./libraries/font-awesome/svgs/regular/circle-up.svg",
  "./libraries/font-awesome/svgs/regular/circle-user.svg",
  "./libraries/font-awesome/svgs/regular/circle-xmark.svg",
  "./libraries/font-awesome/svgs/regular/circle.svg",
  "./libraries/font-awesome/svgs/regular/clipboard.svg",
  "./libraries/font-awesome/svgs/regular/clock.svg",
  "./libraries/font-awesome/svgs/regular/clone.svg",
  "./libraries/font-awesome/svgs/regular/closed-captioning.svg",
  "./libraries/font-awesome/svgs/regular/comment-dots.svg",
  "./libraries/font-awesome/svgs/regular/comment.svg",
  "./libraries/font-awesome/svgs/regular/comments.svg",
  "./libraries/font-awesome/svgs/regular/compass.svg",
  "./libraries/font-awesome/svgs/regular/copy.svg",
  "./libraries/font-awesome/svgs/regular/copyright.svg",
  "./libraries/font-awesome/svgs/regular/credit-card.svg",
  "./libraries/font-awesome/svgs/regular/envelope-open.svg",
  "./libraries/font-awesome/svgs/regular/envelope.svg",
  "./libraries/font-awesome/svgs/regular/eye-slash.svg",
  "./libraries/font-awesome/svgs/regular/eye.svg",
  "./libraries/font-awesome/svgs/regular/face-angry.svg",
  "./libraries/font-awesome/svgs/regular/face-dizzy.svg",
  "./libraries/font-awesome/svgs/regular/face-flushed.svg",
  "./libraries/font-awesome/svgs/regular/face-frown-open.svg",
  "./libraries/font-awesome/svgs/regular/face-frown.svg",
  "./libraries/font-awesome/svgs/regular/face-grimace.svg",
  "./libraries/font-awesome/svgs/regular/face-grin-beam-sweat.svg",
  "./libraries/font-awesome/svgs/regular/face-grin-beam.svg",
  "./libraries/font-awesome/svgs/regular/face-grin-hearts.svg",
  "./libraries/font-awesome/svgs/regular/face-grin-squint-tears.svg",
  "./libraries/font-awesome/svgs/regular/face-grin-squint.svg",
  "./libraries/font-awesome/svgs/regular/face-grin-stars.svg",
  "./libraries/font-awesome/svgs/regular/face-grin-tears.svg",
  "./libraries/font-awesome/svgs/regular/face-grin-tongue-squint.svg",
  "./libraries/font-awesome/svgs/regular/face-grin-tongue-wink.svg",
  "./libraries/font-awesome/svgs/regular/face-grin-tongue.svg",
  "./libraries/font-awesome/svgs/regular/face-grin-wide.svg",
  "./libraries/font-awesome/svgs/regular/face-grin-wink.svg",
  "./libraries/font-awesome/svgs/regular/face-grin.svg",
  "./libraries/font-awesome/svgs/regular/face-kiss-beam.svg",
  "./libraries/font-awesome/svgs/regular/face-kiss-wink-heart.svg",
  "./libraries/font-awesome/svgs/regular/face-kiss.svg",
  "./libraries/font-awesome/svgs/regular/face-laugh-beam.svg",
  "./libraries/font-awesome/svgs/regular/face-laugh-squint.svg",
  "./libraries/font-awesome/svgs/regular/face-laugh-wink.svg",
  "./libraries/font-awesome/svgs/regular/face-laugh.svg",
  "./libraries/font-awesome/svgs/regular/face-meh-blank.svg",
  "./libraries/font-awesome/svgs/regular/face-meh.svg",
  "./libraries/font-awesome/svgs/regular/face-rolling-eyes.svg",
  "./libraries/font-awesome/svgs/regular/face-sad-cry.svg",
  "./libraries/font-awesome/svgs/regular/face-sad-tear.svg",
  "./libraries/font-awesome/svgs/regular/face-smile-beam.svg",
  "./libraries/font-awesome/svgs/regular/face-smile-wink.svg",
  "./libraries/font-awesome/svgs/regular/face-smile.svg",
  "./libraries/font-awesome/svgs/regular/face-surprise.svg",
  "./libraries/font-awesome/svgs/regular/face-tired.svg",
  "./libraries/font-awesome/svgs/regular/file-audio.svg",
  "./libraries/font-awesome/svgs/regular/file-code.svg",
  "./libraries/font-awesome/svgs/regular/file-excel.svg",
  "./libraries/font-awesome/svgs/regular/file-image.svg",
  "./libraries/font-awesome/svgs/regular/file-lines.svg",
  "./libraries/font-awesome/svgs/regular/file-pdf.svg",
  "./libraries/font-awesome/svgs/regular/file-powerpoint.svg",
  "./libraries/font-awesome/svgs/regular/file-video.svg",
  "./libraries/font-awesome/svgs/regular/file-word.svg",
  "./libraries/font-awesome/svgs/regular/file-zipper.svg",
  "./libraries/font-awesome/svgs/regular/file.svg",
  "./libraries/font-awesome/svgs/regular/flag.svg",
  "./libraries/font-awesome/svgs/regular/floppy-disk.svg",
  "./libraries/font-awesome/svgs/regular/folder-closed.svg",
  "./libraries/font-awesome/svgs/regular/folder-open.svg",
  "./libraries/font-awesome/svgs/regular/folder.svg",
  "./libraries/font-awesome/svgs/regular/font-awesome.svg",
  "./libraries/font-awesome/svgs/regular/futbol.svg",
  "./libraries/font-awesome/svgs/regular/gem.svg",
  "./libraries/font-awesome/svgs/regular/hand-back-fist.svg",
  "./libraries/font-awesome/svgs/regular/hand-lizard.svg",
  "./libraries/font-awesome/svgs/regular/hand-peace.svg",
  "./libraries/font-awesome/svgs/regular/hand-point-down.svg",
  "./libraries/font-awesome/svgs/regular/hand-point-left.svg",
  "./libraries/font-awesome/svgs/regular/hand-point-right.svg",
  "./libraries/font-awesome/svgs/regular/hand-point-up.svg",
  "./libraries/font-awesome/svgs/regular/hand-pointer.svg",
  "./libraries/font-awesome/svgs/regular/hand-scissors.svg",
  "./libraries/font-awesome/svgs/regular/hand-spock.svg",
  "./libraries/font-awesome/svgs/regular/hand.svg",
  "./libraries/font-awesome/svgs/regular/handshake.svg",
  "./libraries/font-awesome/svgs/regular/hard-drive.svg",
  "./libraries/font-awesome/svgs/regular/heart.svg",
  "./libraries/font-awesome/svgs/regular/hospital.svg",
  "./libraries/font-awesome/svgs/regular/hourglass-half.svg",
  "./libraries/font-awesome/svgs/regular/hourglass.svg",
  "./libraries/font-awesome/svgs/regular/id-badge.svg",
  "./libraries/font-awesome/svgs/regular/id-card.svg",
  "./libraries/font-awesome/svgs/regular/image.svg",
  "./libraries/font-awesome/svgs/regular/images.svg",
  "./libraries/font-awesome/svgs/regular/keyboard.svg",
  "./libraries/font-awesome/svgs/regular/lemon.svg",
  "./libraries/font-awesome/svgs/regular/life-ring.svg",
  "./libraries/font-awesome/svgs/regular/lightbulb.svg",
  "./libraries/font-awesome/svgs/regular/map.svg",
  "./libraries/font-awesome/svgs/regular/message.svg",
  "./libraries/font-awesome/svgs/regular/money-bill-1.svg",
  "./libraries/font-awesome/svgs/regular/moon.svg",
  "./libraries/font-awesome/svgs/regular/newspaper.svg",
  "./libraries/font-awesome/svgs/regular/note-sticky.svg",
  "./libraries/font-awesome/svgs/regular/object-group.svg",
  "./libraries/font-awesome/svgs/regular/object-ungroup.svg",
  "./libraries/font-awesome/svgs/regular/paper-plane.svg",
  "./libraries/font-awesome/svgs/regular/paste.svg",
  "./libraries/font-awesome/svgs/regular/pen-to-square.svg",
  "./libraries/font-awesome/svgs/regular/rectangle-list.svg",
  "./libraries/font-awesome/svgs/regular/rectangle-xmark.svg",
  "./libraries/font-awesome/svgs/regular/registered.svg",
  "./libraries/font-awesome/svgs/regular/share-from-square.svg",
  "./libraries/font-awesome/svgs/regular/snowflake.svg",
  "./libraries/font-awesome/svgs/regular/square-caret-down.svg",
  "./libraries/font-awesome/svgs/regular/square-caret-left.svg",
  "./libraries/font-awesome/svgs/regular/square-caret-right.svg",
  "./libraries/font-awesome/svgs/regular/square-caret-up.svg",
  "./libraries/font-awesome/svgs/regular/square-check.svg",
  "./libraries/font-awesome/svgs/regular/square-full.svg",
  "./libraries/font-awesome/svgs/regular/square-minus.svg",
  "./libraries/font-awesome/svgs/regular/square-plus.svg",
  "./libraries/font-awesome/svgs/regular/square.svg",
  "./libraries/font-awesome/svgs/regular/star-half-stroke.svg",
  "./libraries/font-awesome/svgs/regular/star-half.svg",
  "./libraries/font-awesome/svgs/regular/star.svg",
  "./libraries/font-awesome/svgs/regular/sun.svg",
  "./libraries/font-awesome/svgs/regular/thumbs-down.svg",
  "./libraries/font-awesome/svgs/regular/thumbs-up.svg",
  "./libraries/font-awesome/svgs/regular/trash-can.svg",
  "./libraries/font-awesome/svgs/regular/user.svg",
  "./libraries/font-awesome/svgs/regular/window-maximize.svg",
  "./libraries/font-awesome/svgs/regular/window-minimize.svg",
  "./libraries/font-awesome/svgs/regular/window-restore.svg",
  "./libraries/font-awesome/svgs/solid/0.svg",
  "./libraries/font-awesome/svgs/solid/1.svg",
  "./libraries/font-awesome/svgs/solid/2.svg",
  "./libraries/font-awesome/svgs/solid/3.svg",
  "./libraries/font-awesome/svgs/solid/4.svg",
  "./libraries/font-awesome/svgs/solid/5.svg",
  "./libraries/font-awesome/svgs/solid/6.svg",
  "./libraries/font-awesome/svgs/solid/7.svg",
  "./libraries/font-awesome/svgs/solid/8.svg",
  "./libraries/font-awesome/svgs/solid/9.svg",
  "./libraries/font-awesome/svgs/solid/a.svg",
  "./libraries/font-awesome/svgs/solid/address-book.svg",
  "./libraries/font-awesome/svgs/solid/address-card.svg",
  "./libraries/font-awesome/svgs/solid/align-center.svg",
  "./libraries/font-awesome/svgs/solid/align-justify.svg",
  "./libraries/font-awesome/svgs/solid/align-left.svg",
  "./libraries/font-awesome/svgs/solid/align-right.svg",
  "./libraries/font-awesome/svgs/solid/anchor-circle-check.svg",
  "./libraries/font-awesome/svgs/solid/anchor-circle-exclamation.svg",
  "./libraries/font-awesome/svgs/solid/anchor-circle-xmark.svg",
  "./libraries/font-awesome/svgs/solid/anchor-lock.svg",
  "./libraries/font-awesome/svgs/solid/anchor.svg",
  "./libraries/font-awesome/svgs/solid/angle-down.svg",
  "./libraries/font-awesome/svgs/solid/angle-left.svg",
  "./libraries/font-awesome/svgs/solid/angle-right.svg",
  "./libraries/font-awesome/svgs/solid/angle-up.svg",
  "./libraries/font-awesome/svgs/solid/angles-down.svg",
  "./libraries/font-awesome/svgs/solid/angles-left.svg",
  "./libraries/font-awesome/svgs/solid/angles-right.svg",
  "./libraries/font-awesome/svgs/solid/angles-up.svg",
  "./libraries/font-awesome/svgs/solid/ankh.svg",
  "./libraries/font-awesome/svgs/solid/apple-whole.svg",
  "./libraries/font-awesome/svgs/solid/archway.svg",
  "./libraries/font-awesome/svgs/solid/arrow-down-1-9.svg",
  "./libraries/font-awesome/svgs/solid/arrow-down-9-1.svg",
  "./libraries/font-awesome/svgs/solid/arrow-down-a-z.svg",
  "./libraries/font-awesome/svgs/solid/arrow-down-long.svg",
  "./libraries/font-awesome/svgs/solid/arrow-down-short-wide.svg",
  "./libraries/font-awesome/svgs/solid/arrow-down-up-across-line.svg",
  "./libraries/font-awesome/svgs/solid/arrow-down-up-lock.svg",
  "./libraries/font-awesome/svgs/solid/arrow-down-wide-short.svg",
  "./libraries/font-awesome/svgs/solid/arrow-down-z-a.svg",
  "./libraries/font-awesome/svgs/solid/arrow-down.svg",
  "./libraries/font-awesome/svgs/solid/arrow-left-long.svg",
  "./libraries/font-awesome/svgs/solid/arrow-left.svg",
  "./libraries/font-awesome/svgs/solid/arrow-pointer.svg",
  "./libraries/font-awesome/svgs/solid/arrow-right-arrow-left.svg",
  "./libraries/font-awesome/svgs/solid/arrow-right-from-bracket.svg",
  "./libraries/font-awesome/svgs/solid/arrow-right-long.svg",
  "./libraries/font-awesome/svgs/solid/arrow-right-to-bracket.svg",
  "./libraries/font-awesome/svgs/solid/arrow-right-to-city.svg",
  "./libraries/font-awesome/svgs/solid/arrow-right.svg",
  "./libraries/font-awesome/svgs/solid/arrow-rotate-left.svg",
  "./libraries/font-awesome/svgs/solid/arrow-rotate-right.svg",
  "./libraries/font-awesome/svgs/solid/arrow-trend-down.svg",
  "./libraries/font-awesome/svgs/solid/arrow-trend-up.svg",
  "./libraries/font-awesome/svgs/solid/arrow-turn-down.svg",
  "./libraries/font-awesome/svgs/solid/arrow-turn-up.svg",
  "./libraries/font-awesome/svgs/solid/arrow-up-1-9.svg",
  "./libraries/font-awesome/svgs/solid/arrow-up-9-1.svg",
  "./libraries/font-awesome/svgs/solid/arrow-up-a-z.svg",
  "./libraries/font-awesome/svgs/solid/arrow-up-from-bracket.svg",
  "./libraries/font-awesome/svgs/solid/arrow-up-from-ground-water.svg",
  "./libraries/font-awesome/svgs/solid/arrow-up-from-water-pump.svg",
  "./libraries/font-awesome/svgs/solid/arrow-up-long.svg",
  "./libraries/font-awesome/svgs/solid/arrow-up-right-dots.svg",
  "./libraries/font-awesome/svgs/solid/arrow-up-right-from-square.svg",
  "./libraries/font-awesome/svgs/solid/arrow-up-short-wide.svg",
  "./libraries/font-awesome/svgs/solid/arrow-up-wide-short.svg",
  "./libraries/font-awesome/svgs/solid/arrow-up-z-a.svg",
  "./libraries/font-awesome/svgs/solid/arrow-up.svg",
  "./libraries/font-awesome/svgs/solid/arrows-down-to-line.svg",
  "./libraries/font-awesome/svgs/solid/arrows-down-to-people.svg",
  "./libraries/font-awesome/svgs/solid/arrows-left-right-to-line.svg",
  "./libraries/font-awesome/svgs/solid/arrows-left-right.svg",
  "./libraries/font-awesome/svgs/solid/arrows-rotate.svg",
  "./libraries/font-awesome/svgs/solid/arrows-spin.svg",
  "./libraries/font-awesome/svgs/solid/arrows-split-up-and-left.svg",
  "./libraries/font-awesome/svgs/solid/arrows-to-circle.svg",
  "./libraries/font-awesome/svgs/solid/arrows-to-dot.svg",
  "./libraries/font-awesome/svgs/solid/arrows-to-eye.svg",
  "./libraries/font-awesome/svgs/solid/arrows-turn-right.svg",
  "./libraries/font-awesome/svgs/solid/arrows-turn-to-dots.svg",
  "./libraries/font-awesome/svgs/solid/arrows-up-down-left-right.svg",
  "./libraries/font-awesome/svgs/solid/arrows-up-down.svg",
  "./libraries/font-awesome/svgs/solid/arrows-up-to-line.svg",
  "./libraries/font-awesome/svgs/solid/asterisk.svg",
  "./libraries/font-awesome/svgs/solid/at.svg",
  "./libraries/font-awesome/svgs/solid/atom.svg",
  "./libraries/font-awesome/svgs/solid/audio-description.svg",
  "./libraries/font-awesome/svgs/solid/austral-sign.svg",
  "./libraries/font-awesome/svgs/solid/award.svg",
  "./libraries/font-awesome/svgs/solid/b.svg",
  "./libraries/font-awesome/svgs/solid/baby-carriage.svg",
  "./libraries/font-awesome/svgs/solid/baby.svg",
  "./libraries/font-awesome/svgs/solid/backward-fast.svg",
  "./libraries/font-awesome/svgs/solid/backward-step.svg",
  "./libraries/font-awesome/svgs/solid/backward.svg",
  "./libraries/font-awesome/svgs/solid/bacon.svg",
  "./libraries/font-awesome/svgs/solid/bacteria.svg",
  "./libraries/font-awesome/svgs/solid/bacterium.svg",
  "./libraries/font-awesome/svgs/solid/bag-shopping.svg",
  "./libraries/font-awesome/svgs/solid/bahai.svg",
  "./libraries/font-awesome/svgs/solid/baht-sign.svg",
  "./libraries/font-awesome/svgs/solid/ban-smoking.svg",
  "./libraries/font-awesome/svgs/solid/ban.svg",
  "./libraries/font-awesome/svgs/solid/bandage.svg",
  "./libraries/font-awesome/svgs/solid/bangladeshi-taka-sign.svg",
  "./libraries/font-awesome/svgs/solid/barcode.svg",
  "./libraries/font-awesome/svgs/solid/bars-progress.svg",
  "./libraries/font-awesome/svgs/solid/bars-staggered.svg",
  "./libraries/font-awesome/svgs/solid/bars.svg",
  "./libraries/font-awesome/svgs/solid/baseball-bat-ball.svg",
  "./libraries/font-awesome/svgs/solid/baseball.svg",
  "./libraries/font-awesome/svgs/solid/basket-shopping.svg",
  "./libraries/font-awesome/svgs/solid/basketball.svg",
  "./libraries/font-awesome/svgs/solid/bath.svg",
  "./libraries/font-awesome/svgs/solid/battery-empty.svg",
  "./libraries/font-awesome/svgs/solid/battery-full.svg",
  "./libraries/font-awesome/svgs/solid/battery-half.svg",
  "./libraries/font-awesome/svgs/solid/battery-quarter.svg",
  "./libraries/font-awesome/svgs/solid/battery-three-quarters.svg",
  "./libraries/font-awesome/svgs/solid/bed-pulse.svg",
  "./libraries/font-awesome/svgs/solid/bed.svg",
  "./libraries/font-awesome/svgs/solid/beer-mug-empty.svg",
  "./libraries/font-awesome/svgs/solid/bell-concierge.svg",
  "./libraries/font-awesome/svgs/solid/bell-slash.svg",
  "./libraries/font-awesome/svgs/solid/bell.svg",
  "./libraries/font-awesome/svgs/solid/bezier-curve.svg",
  "./libraries/font-awesome/svgs/solid/bicycle.svg",
  "./libraries/font-awesome/svgs/solid/binoculars.svg",
  "./libraries/font-awesome/svgs/solid/biohazard.svg",
  "./libraries/font-awesome/svgs/solid/bitcoin-sign.svg",
  "./libraries/font-awesome/svgs/solid/blender-phone.svg",
  "./libraries/font-awesome/svgs/solid/blender.svg",
  "./libraries/font-awesome/svgs/solid/blog.svg",
  "./libraries/font-awesome/svgs/solid/bold.svg",
  "./libraries/font-awesome/svgs/solid/bolt-lightning.svg",
  "./libraries/font-awesome/svgs/solid/bolt.svg",
  "./libraries/font-awesome/svgs/solid/bomb.svg",
  "./libraries/font-awesome/svgs/solid/bone.svg",
  "./libraries/font-awesome/svgs/solid/bong.svg",
  "./libraries/font-awesome/svgs/solid/book-atlas.svg",
  "./libraries/font-awesome/svgs/solid/book-bible.svg",
  "./libraries/font-awesome/svgs/solid/book-bookmark.svg",
  "./libraries/font-awesome/svgs/solid/book-journal-whills.svg",
  "./libraries/font-awesome/svgs/solid/book-medical.svg",
  "./libraries/font-awesome/svgs/solid/book-open-reader.svg",
  "./libraries/font-awesome/svgs/solid/book-open.svg",
  "./libraries/font-awesome/svgs/solid/book-quran.svg",
  "./libraries/font-awesome/svgs/solid/book-skull.svg",
  "./libraries/font-awesome/svgs/solid/book-tanakh.svg",
  "./libraries/font-awesome/svgs/solid/book.svg",
  "./libraries/font-awesome/svgs/solid/bookmark.svg",
  "./libraries/font-awesome/svgs/solid/border-all.svg",
  "./libraries/font-awesome/svgs/solid/border-none.svg",
  "./libraries/font-awesome/svgs/solid/border-top-left.svg",
  "./libraries/font-awesome/svgs/solid/bore-hole.svg",
  "./libraries/font-awesome/svgs/solid/bottle-droplet.svg",
  "./libraries/font-awesome/svgs/solid/bottle-water.svg",
  "./libraries/font-awesome/svgs/solid/bowl-food.svg",
  "./libraries/font-awesome/svgs/solid/bowl-rice.svg",
  "./libraries/font-awesome/svgs/solid/bowling-ball.svg",
  "./libraries/font-awesome/svgs/solid/box-archive.svg",
  "./libraries/font-awesome/svgs/solid/box-open.svg",
  "./libraries/font-awesome/svgs/solid/box-tissue.svg",
  "./libraries/font-awesome/svgs/solid/box.svg",
  "./libraries/font-awesome/svgs/solid/boxes-packing.svg",
  "./libraries/font-awesome/svgs/solid/boxes-stacked.svg",
  "./libraries/font-awesome/svgs/solid/braille.svg",
  "./libraries/font-awesome/svgs/solid/brain.svg",
  "./libraries/font-awesome/svgs/solid/brazilian-real-sign.svg",
  "./libraries/font-awesome/svgs/solid/bread-slice.svg",
  "./libraries/font-awesome/svgs/solid/bridge-circle-check.svg",
  "./libraries/font-awesome/svgs/solid/bridge-circle-exclamation.svg",
  "./libraries/font-awesome/svgs/solid/bridge-circle-xmark.svg",
  "./libraries/font-awesome/svgs/solid/bridge-lock.svg",
  "./libraries/font-awesome/svgs/solid/bridge-water.svg",
  "./libraries/font-awesome/svgs/solid/bridge.svg",
  "./libraries/font-awesome/svgs/solid/briefcase-medical.svg",
  "./libraries/font-awesome/svgs/solid/briefcase.svg",
  "./libraries/font-awesome/svgs/solid/broom-ball.svg",
  "./libraries/font-awesome/svgs/solid/broom.svg",
  "./libraries/font-awesome/svgs/solid/brush.svg",
  "./libraries/font-awesome/svgs/solid/bucket.svg",
  "./libraries/font-awesome/svgs/solid/bug-slash.svg",
  "./libraries/font-awesome/svgs/solid/bug.svg",
  "./libraries/font-awesome/svgs/solid/bugs.svg",
  "./libraries/font-awesome/svgs/solid/building-circle-arrow-right.svg",
  "./libraries/font-awesome/svgs/solid/building-circle-check.svg",
  "./libraries/font-awesome/svgs/solid/building-circle-exclamation.svg",
  "./libraries/font-awesome/svgs/solid/building-circle-xmark.svg",
  "./libraries/font-awesome/svgs/solid/building-columns.svg",
  "./libraries/font-awesome/svgs/solid/building-flag.svg",
  "./libraries/font-awesome/svgs/solid/building-lock.svg",
  "./libraries/font-awesome/svgs/solid/building-ngo.svg",
  "./libraries/font-awesome/svgs/solid/building-shield.svg",
  "./libraries/font-awesome/svgs/solid/building-un.svg",
  "./libraries/font-awesome/svgs/solid/building-user.svg",
  "./libraries/font-awesome/svgs/solid/building-wheat.svg",
  "./libraries/font-awesome/svgs/solid/building.svg",
  "./libraries/font-awesome/svgs/solid/bullhorn.svg",
  "./libraries/font-awesome/svgs/solid/bullseye.svg",
  "./libraries/font-awesome/svgs/solid/burger.svg",
  "./libraries/font-awesome/svgs/solid/burst.svg",
  "./libraries/font-awesome/svgs/solid/bus-simple.svg",
  "./libraries/font-awesome/svgs/solid/bus.svg",
  "./libraries/font-awesome/svgs/solid/business-time.svg",
  "./libraries/font-awesome/svgs/solid/c.svg",
  "./libraries/font-awesome/svgs/solid/cable-car.svg",
  "./libraries/font-awesome/svgs/solid/cake-candles.svg",
  "./libraries/font-awesome/svgs/solid/calculator.svg",
  "./libraries/font-awesome/svgs/solid/calendar-check.svg",
  "./libraries/font-awesome/svgs/solid/calendar-day.svg",
  "./libraries/font-awesome/svgs/solid/calendar-days.svg",
  "./libraries/font-awesome/svgs/solid/calendar-minus.svg",
  "./libraries/font-awesome/svgs/solid/calendar-plus.svg",
  "./libraries/font-awesome/svgs/solid/calendar-week.svg",
  "./libraries/font-awesome/svgs/solid/calendar-xmark.svg",
  "./libraries/font-awesome/svgs/solid/calendar.svg",
  "./libraries/font-awesome/svgs/solid/camera-retro.svg",
  "./libraries/font-awesome/svgs/solid/camera-rotate.svg",
  "./libraries/font-awesome/svgs/solid/camera.svg",
  "./libraries/font-awesome/svgs/solid/campground.svg",
  "./libraries/font-awesome/svgs/solid/candy-cane.svg",
  "./libraries/font-awesome/svgs/solid/cannabis.svg",
  "./libraries/font-awesome/svgs/solid/capsules.svg",
  "./libraries/font-awesome/svgs/solid/car-battery.svg",
  "./libraries/font-awesome/svgs/solid/car-burst.svg",
  "./libraries/font-awesome/svgs/solid/car-on.svg",
  "./libraries/font-awesome/svgs/solid/car-rear.svg",
  "./libraries/font-awesome/svgs/solid/car-side.svg",
  "./libraries/font-awesome/svgs/solid/car-tunnel.svg",
  "./libraries/font-awesome/svgs/solid/car.svg",
  "./libraries/font-awesome/svgs/solid/caravan.svg",
  "./libraries/font-awesome/svgs/solid/caret-down.svg",
  "./libraries/font-awesome/svgs/solid/caret-left.svg",
  "./libraries/font-awesome/svgs/solid/caret-right.svg",
  "./libraries/font-awesome/svgs/solid/caret-up.svg",
  "./libraries/font-awesome/svgs/solid/carrot.svg",
  "./libraries/font-awesome/svgs/solid/cart-arrow-down.svg",
  "./libraries/font-awesome/svgs/solid/cart-flatbed-suitcase.svg",
  "./libraries/font-awesome/svgs/solid/cart-flatbed.svg",
  "./libraries/font-awesome/svgs/solid/cart-plus.svg",
  "./libraries/font-awesome/svgs/solid/cart-shopping.svg",
  "./libraries/font-awesome/svgs/solid/cash-register.svg",
  "./libraries/font-awesome/svgs/solid/cat.svg",
  "./libraries/font-awesome/svgs/solid/cedi-sign.svg",
  "./libraries/font-awesome/svgs/solid/cent-sign.svg",
  "./libraries/font-awesome/svgs/solid/certificate.svg",
  "./libraries/font-awesome/svgs/solid/chair.svg",
  "./libraries/font-awesome/svgs/solid/chalkboard-user.svg",
  "./libraries/font-awesome/svgs/solid/chalkboard.svg",
  "./libraries/font-awesome/svgs/solid/champagne-glasses.svg",
  "./libraries/font-awesome/svgs/solid/charging-station.svg",
  "./libraries/font-awesome/svgs/solid/chart-area.svg",
  "./libraries/font-awesome/svgs/solid/chart-bar.svg",
  "./libraries/font-awesome/svgs/solid/chart-column.svg",
  "./libraries/font-awesome/svgs/solid/chart-gantt.svg",
  "./libraries/font-awesome/svgs/solid/chart-line.svg",
  "./libraries/font-awesome/svgs/solid/chart-pie.svg",
  "./libraries/font-awesome/svgs/solid/chart-simple.svg",
  "./libraries/font-awesome/svgs/solid/check-double.svg",
  "./libraries/font-awesome/svgs/solid/check-to-slot.svg",
  "./libraries/font-awesome/svgs/solid/check.svg",
  "./libraries/font-awesome/svgs/solid/cheese.svg",
  "./libraries/font-awesome/svgs/solid/chess-bishop.svg",
  "./libraries/font-awesome/svgs/solid/chess-board.svg",
  "./libraries/font-awesome/svgs/solid/chess-king.svg",
  "./libraries/font-awesome/svgs/solid/chess-knight.svg",
  "./libraries/font-awesome/svgs/solid/chess-pawn.svg",
  "./libraries/font-awesome/svgs/solid/chess-queen.svg",
  "./libraries/font-awesome/svgs/solid/chess-rook.svg",
  "./libraries/font-awesome/svgs/solid/chess.svg",
  "./libraries/font-awesome/svgs/solid/chevron-down.svg",
  "./libraries/font-awesome/svgs/solid/chevron-left.svg",
  "./libraries/font-awesome/svgs/solid/chevron-right.svg",
  "./libraries/font-awesome/svgs/solid/chevron-up.svg",
  "./libraries/font-awesome/svgs/solid/child-combatant.svg",
  "./libraries/font-awesome/svgs/solid/child-dress.svg",
  "./libraries/font-awesome/svgs/solid/child-reaching.svg",
  "./libraries/font-awesome/svgs/solid/child.svg",
  "./libraries/font-awesome/svgs/solid/children.svg",
  "./libraries/font-awesome/svgs/solid/church.svg",
  "./libraries/font-awesome/svgs/solid/circle-arrow-down.svg",
  "./libraries/font-awesome/svgs/solid/circle-arrow-left.svg",
  "./libraries/font-awesome/svgs/solid/circle-arrow-right.svg",
  "./libraries/font-awesome/svgs/solid/circle-arrow-up.svg",
  "./libraries/font-awesome/svgs/solid/circle-check.svg",
  "./libraries/font-awesome/svgs/solid/circle-chevron-down.svg",
  "./libraries/font-awesome/svgs/solid/circle-chevron-left.svg",
  "./libraries/font-awesome/svgs/solid/circle-chevron-right.svg",
  "./libraries/font-awesome/svgs/solid/circle-chevron-up.svg",
  "./libraries/font-awesome/svgs/solid/circle-dollar-to-slot.svg",
  "./libraries/font-awesome/svgs/solid/circle-dot.svg",
  "./libraries/font-awesome/svgs/solid/circle-down.svg",
  "./libraries/font-awesome/svgs/solid/circle-exclamation.svg",
  "./libraries/font-awesome/svgs/solid/circle-h.svg",
  "./libraries/font-awesome/svgs/solid/circle-half-stroke.svg",
  "./libraries/font-awesome/svgs/solid/circle-info.svg",
  "./libraries/font-awesome/svgs/solid/circle-left.svg",
  "./libraries/font-awesome/svgs/solid/circle-minus.svg",
  "./libraries/font-awesome/svgs/solid/circle-nodes.svg",
  "./libraries/font-awesome/svgs/solid/circle-notch.svg",
  "./libraries/font-awesome/svgs/solid/circle-pause.svg",
  "./libraries/font-awesome/svgs/solid/circle-play.svg",
  "./libraries/font-awesome/svgs/solid/circle-plus.svg",
  "./libraries/font-awesome/svgs/solid/circle-question.svg",
  "./libraries/font-awesome/svgs/solid/circle-radiation.svg",
  "./libraries/font-awesome/svgs/solid/circle-right.svg",
  "./libraries/font-awesome/svgs/solid/circle-stop.svg",
  "./libraries/font-awesome/svgs/solid/circle-up.svg",
  "./libraries/font-awesome/svgs/solid/circle-user.svg",
  "./libraries/font-awesome/svgs/solid/circle-xmark.svg",
  "./libraries/font-awesome/svgs/solid/circle.svg",
  "./libraries/font-awesome/svgs/solid/city.svg",
  "./libraries/font-awesome/svgs/solid/clapperboard.svg",
  "./libraries/font-awesome/svgs/solid/clipboard-check.svg",
  "./libraries/font-awesome/svgs/solid/clipboard-list.svg",
  "./libraries/font-awesome/svgs/solid/clipboard-question.svg",
  "./libraries/font-awesome/svgs/solid/clipboard-user.svg",
  "./libraries/font-awesome/svgs/solid/clipboard.svg",
  "./libraries/font-awesome/svgs/solid/clock-rotate-left.svg",
  "./libraries/font-awesome/svgs/solid/clock.svg",
  "./libraries/font-awesome/svgs/solid/clone.svg",
  "./libraries/font-awesome/svgs/solid/closed-captioning.svg",
  "./libraries/font-awesome/svgs/solid/cloud-arrow-down.svg",
  "./libraries/font-awesome/svgs/solid/cloud-arrow-up.svg",
  "./libraries/font-awesome/svgs/solid/cloud-bolt.svg",
  "./libraries/font-awesome/svgs/solid/cloud-meatball.svg",
  "./libraries/font-awesome/svgs/solid/cloud-moon-rain.svg",
  "./libraries/font-awesome/svgs/solid/cloud-moon.svg",
  "./libraries/font-awesome/svgs/solid/cloud-rain.svg",
  "./libraries/font-awesome/svgs/solid/cloud-showers-heavy.svg",
  "./libraries/font-awesome/svgs/solid/cloud-showers-water.svg",
  "./libraries/font-awesome/svgs/solid/cloud-sun-rain.svg",
  "./libraries/font-awesome/svgs/solid/cloud-sun.svg",
  "./libraries/font-awesome/svgs/solid/cloud.svg",
  "./libraries/font-awesome/svgs/solid/clover.svg",
  "./libraries/font-awesome/svgs/solid/code-branch.svg",
  "./libraries/font-awesome/svgs/solid/code-commit.svg",
  "./libraries/font-awesome/svgs/solid/code-compare.svg",
  "./libraries/font-awesome/svgs/solid/code-fork.svg",
  "./libraries/font-awesome/svgs/solid/code-merge.svg",
  "./libraries/font-awesome/svgs/solid/code-pull-request.svg",
  "./libraries/font-awesome/svgs/solid/code.svg",
  "./libraries/font-awesome/svgs/solid/coins.svg",
  "./libraries/font-awesome/svgs/solid/colon-sign.svg",
  "./libraries/font-awesome/svgs/solid/comment-dollar.svg",
  "./libraries/font-awesome/svgs/solid/comment-dots.svg",
  "./libraries/font-awesome/svgs/solid/comment-medical.svg",
  "./libraries/font-awesome/svgs/solid/comment-slash.svg",
  "./libraries/font-awesome/svgs/solid/comment-sms.svg",
  "./libraries/font-awesome/svgs/solid/comment.svg",
  "./libraries/font-awesome/svgs/solid/comments-dollar.svg",
  "./libraries/font-awesome/svgs/solid/comments.svg",
  "./libraries/font-awesome/svgs/solid/compact-disc.svg",
  "./libraries/font-awesome/svgs/solid/compass-drafting.svg",
  "./libraries/font-awesome/svgs/solid/compass.svg",
  "./libraries/font-awesome/svgs/solid/compress.svg",
  "./libraries/font-awesome/svgs/solid/computer-mouse.svg",
  "./libraries/font-awesome/svgs/solid/computer.svg",
  "./libraries/font-awesome/svgs/solid/cookie-bite.svg",
  "./libraries/font-awesome/svgs/solid/cookie.svg",
  "./libraries/font-awesome/svgs/solid/copy.svg",
  "./libraries/font-awesome/svgs/solid/copyright.svg",
  "./libraries/font-awesome/svgs/solid/couch.svg",
  "./libraries/font-awesome/svgs/solid/cow.svg",
  "./libraries/font-awesome/svgs/solid/credit-card.svg",
  "./libraries/font-awesome/svgs/solid/crop-simple.svg",
  "./libraries/font-awesome/svgs/solid/crop.svg",
  "./libraries/font-awesome/svgs/solid/cross.svg",
  "./libraries/font-awesome/svgs/solid/crosshairs.svg",
  "./libraries/font-awesome/svgs/solid/crow.svg",
  "./libraries/font-awesome/svgs/solid/crown.svg",
  "./libraries/font-awesome/svgs/solid/crutch.svg",
  "./libraries/font-awesome/svgs/solid/cruzeiro-sign.svg",
  "./libraries/font-awesome/svgs/solid/cube.svg",
  "./libraries/font-awesome/svgs/solid/cubes-stacked.svg",
  "./libraries/font-awesome/svgs/solid/cubes.svg",
  "./libraries/font-awesome/svgs/solid/d.svg",
  "./libraries/font-awesome/svgs/solid/database.svg",
  "./libraries/font-awesome/svgs/solid/delete-left.svg",
  "./libraries/font-awesome/svgs/solid/democrat.svg",
  "./libraries/font-awesome/svgs/solid/desktop.svg",
  "./libraries/font-awesome/svgs/solid/dharmachakra.svg",
  "./libraries/font-awesome/svgs/solid/diagram-next.svg",
  "./libraries/font-awesome/svgs/solid/diagram-predecessor.svg",
  "./libraries/font-awesome/svgs/solid/diagram-project.svg",
  "./libraries/font-awesome/svgs/solid/diagram-successor.svg",
  "./libraries/font-awesome/svgs/solid/diamond-turn-right.svg",
  "./libraries/font-awesome/svgs/solid/diamond.svg",
  "./libraries/font-awesome/svgs/solid/dice-d20.svg",
  "./libraries/font-awesome/svgs/solid/dice-d6.svg",
  "./libraries/font-awesome/svgs/solid/dice-five.svg",
  "./libraries/font-awesome/svgs/solid/dice-four.svg",
  "./libraries/font-awesome/svgs/solid/dice-one.svg",
  "./libraries/font-awesome/svgs/solid/dice-six.svg",
  "./libraries/font-awesome/svgs/solid/dice-three.svg",
  "./libraries/font-awesome/svgs/solid/dice-two.svg",
  "./libraries/font-awesome/svgs/solid/dice.svg",
  "./libraries/font-awesome/svgs/solid/disease.svg",
  "./libraries/font-awesome/svgs/solid/display.svg",
  "./libraries/font-awesome/svgs/solid/divide.svg",
  "./libraries/font-awesome/svgs/solid/dna.svg",
  "./libraries/font-awesome/svgs/solid/dog.svg",
  "./libraries/font-awesome/svgs/solid/dollar-sign.svg",
  "./libraries/font-awesome/svgs/solid/dolly.svg",
  "./libraries/font-awesome/svgs/solid/dong-sign.svg",
  "./libraries/font-awesome/svgs/solid/door-closed.svg",
  "./libraries/font-awesome/svgs/solid/door-open.svg",
  "./libraries/font-awesome/svgs/solid/dove.svg",
  "./libraries/font-awesome/svgs/solid/down-left-and-up-right-to-center.svg",
  "./libraries/font-awesome/svgs/solid/down-long.svg",
  "./libraries/font-awesome/svgs/solid/download.svg",
  "./libraries/font-awesome/svgs/solid/dragon.svg",
  "./libraries/font-awesome/svgs/solid/draw-polygon.svg",
  "./libraries/font-awesome/svgs/solid/droplet-slash.svg",
  "./libraries/font-awesome/svgs/solid/droplet.svg",
  "./libraries/font-awesome/svgs/solid/drum-steelpan.svg",
  "./libraries/font-awesome/svgs/solid/drum.svg",
  "./libraries/font-awesome/svgs/solid/drumstick-bite.svg",
  "./libraries/font-awesome/svgs/solid/dumbbell.svg",
  "./libraries/font-awesome/svgs/solid/dumpster-fire.svg",
  "./libraries/font-awesome/svgs/solid/dumpster.svg",
  "./libraries/font-awesome/svgs/solid/dungeon.svg",
  "./libraries/font-awesome/svgs/solid/e.svg",
  "./libraries/font-awesome/svgs/solid/ear-deaf.svg",
  "./libraries/font-awesome/svgs/solid/ear-listen.svg",
  "./libraries/font-awesome/svgs/solid/earth-africa.svg",
  "./libraries/font-awesome/svgs/solid/earth-americas.svg",
  "./libraries/font-awesome/svgs/solid/earth-asia.svg",
  "./libraries/font-awesome/svgs/solid/earth-europe.svg",
  "./libraries/font-awesome/svgs/solid/earth-oceania.svg",
  "./libraries/font-awesome/svgs/solid/egg.svg",
  "./libraries/font-awesome/svgs/solid/eject.svg",
  "./libraries/font-awesome/svgs/solid/elevator.svg",
  "./libraries/font-awesome/svgs/solid/ellipsis-vertical.svg",
  "./libraries/font-awesome/svgs/solid/ellipsis.svg",
  "./libraries/font-awesome/svgs/solid/envelope-circle-check.svg",
  "./libraries/font-awesome/svgs/solid/envelope-open-text.svg",
  "./libraries/font-awesome/svgs/solid/envelope-open.svg",
  "./libraries/font-awesome/svgs/solid/envelope.svg",
  "./libraries/font-awesome/svgs/solid/envelopes-bulk.svg",
  "./libraries/font-awesome/svgs/solid/equals.svg",
  "./libraries/font-awesome/svgs/solid/eraser.svg",
  "./libraries/font-awesome/svgs/solid/ethernet.svg",
  "./libraries/font-awesome/svgs/solid/euro-sign.svg",
  "./libraries/font-awesome/svgs/solid/exclamation.svg",
  "./libraries/font-awesome/svgs/solid/expand.svg",
  "./libraries/font-awesome/svgs/solid/explosion.svg",
  "./libraries/font-awesome/svgs/solid/eye-dropper.svg",
  "./libraries/font-awesome/svgs/solid/eye-low-vision.svg",
  "./libraries/font-awesome/svgs/solid/eye-slash.svg",
  "./libraries/font-awesome/svgs/solid/eye.svg",
  "./libraries/font-awesome/svgs/solid/f.svg",
  "./libraries/font-awesome/svgs/solid/face-angry.svg",
  "./libraries/font-awesome/svgs/solid/face-dizzy.svg",
  "./libraries/font-awesome/svgs/solid/face-flushed.svg",
  "./libraries/font-awesome/svgs/solid/face-frown-open.svg",
  "./libraries/font-awesome/svgs/solid/face-frown.svg",
  "./libraries/font-awesome/svgs/solid/face-grimace.svg",
  "./libraries/font-awesome/svgs/solid/face-grin-beam-sweat.svg",
  "./libraries/font-awesome/svgs/solid/face-grin-beam.svg",
  "./libraries/font-awesome/svgs/solid/face-grin-hearts.svg",
  "./libraries/font-awesome/svgs/solid/face-grin-squint-tears.svg",
  "./libraries/font-awesome/svgs/solid/face-grin-squint.svg",
  "./libraries/font-awesome/svgs/solid/face-grin-stars.svg",
  "./libraries/font-awesome/svgs/solid/face-grin-tears.svg",
  "./libraries/font-awesome/svgs/solid/face-grin-tongue-squint.svg",
  "./libraries/font-awesome/svgs/solid/face-grin-tongue-wink.svg",
  "./libraries/font-awesome/svgs/solid/face-grin-tongue.svg",
  "./libraries/font-awesome/svgs/solid/face-grin-wide.svg",
  "./libraries/font-awesome/svgs/solid/face-grin-wink.svg",
  "./libraries/font-awesome/svgs/solid/face-grin.svg",
  "./libraries/font-awesome/svgs/solid/face-kiss-beam.svg",
  "./libraries/font-awesome/svgs/solid/face-kiss-wink-heart.svg",
  "./libraries/font-awesome/svgs/solid/face-kiss.svg",
  "./libraries/font-awesome/svgs/solid/face-laugh-beam.svg",
  "./libraries/font-awesome/svgs/solid/face-laugh-squint.svg",
  "./libraries/font-awesome/svgs/solid/face-laugh-wink.svg",
  "./libraries/font-awesome/svgs/solid/face-laugh.svg",
  "./libraries/font-awesome/svgs/solid/face-meh-blank.svg",
  "./libraries/font-awesome/svgs/solid/face-meh.svg",
  "./libraries/font-awesome/svgs/solid/face-rolling-eyes.svg",
  "./libraries/font-awesome/svgs/solid/face-sad-cry.svg",
  "./libraries/font-awesome/svgs/solid/face-sad-tear.svg",
  "./libraries/font-awesome/svgs/solid/face-smile-beam.svg",
  "./libraries/font-awesome/svgs/solid/face-smile-wink.svg",
  "./libraries/font-awesome/svgs/solid/face-smile.svg",
  "./libraries/font-awesome/svgs/solid/face-surprise.svg",
  "./libraries/font-awesome/svgs/solid/face-tired.svg",
  "./libraries/font-awesome/svgs/solid/fan.svg",
  "./libraries/font-awesome/svgs/solid/faucet-drip.svg",
  "./libraries/font-awesome/svgs/solid/faucet.svg",
  "./libraries/font-awesome/svgs/solid/fax.svg",
  "./libraries/font-awesome/svgs/solid/feather-pointed.svg",
  "./libraries/font-awesome/svgs/solid/feather.svg",
  "./libraries/font-awesome/svgs/solid/ferry.svg",
  "./libraries/font-awesome/svgs/solid/file-arrow-down.svg",
  "./libraries/font-awesome/svgs/solid/file-arrow-up.svg",
  "./libraries/font-awesome/svgs/solid/file-audio.svg",
  "./libraries/font-awesome/svgs/solid/file-circle-check.svg",
  "./libraries/font-awesome/svgs/solid/file-circle-exclamation.svg",
  "./libraries/font-awesome/svgs/solid/file-circle-minus.svg",
  "./libraries/font-awesome/svgs/solid/file-circle-plus.svg",
  "./libraries/font-awesome/svgs/solid/file-circle-question.svg",
  "./libraries/font-awesome/svgs/solid/file-circle-xmark.svg",
  "./libraries/font-awesome/svgs/solid/file-code.svg",
  "./libraries/font-awesome/svgs/solid/file-contract.svg",
  "./libraries/font-awesome/svgs/solid/file-csv.svg",
  "./libraries/font-awesome/svgs/solid/file-excel.svg",
  "./libraries/font-awesome/svgs/solid/file-export.svg",
  "./libraries/font-awesome/svgs/solid/file-image.svg",
  "./libraries/font-awesome/svgs/solid/file-import.svg",
  "./libraries/font-awesome/svgs/solid/file-invoice-dollar.svg",
  "./libraries/font-awesome/svgs/solid/file-invoice.svg",
  "./libraries/font-awesome/svgs/solid/file-lines.svg",
  "./libraries/font-awesome/svgs/solid/file-medical.svg",
  "./libraries/font-awesome/svgs/solid/file-pdf.svg",
  "./libraries/font-awesome/svgs/solid/file-pen.svg",
  "./libraries/font-awesome/svgs/solid/file-powerpoint.svg",
  "./libraries/font-awesome/svgs/solid/file-prescription.svg",
  "./libraries/font-awesome/svgs/solid/file-shield.svg",
  "./libraries/font-awesome/svgs/solid/file-signature.svg",
  "./libraries/font-awesome/svgs/solid/file-video.svg",
  "./libraries/font-awesome/svgs/solid/file-waveform.svg",
  "./libraries/font-awesome/svgs/solid/file-word.svg",
  "./libraries/font-awesome/svgs/solid/file-zipper.svg",
  "./libraries/font-awesome/svgs/solid/file.svg",
  "./libraries/font-awesome/svgs/solid/fill-drip.svg",
  "./libraries/font-awesome/svgs/solid/fill.svg",
  "./libraries/font-awesome/svgs/solid/film.svg",
  "./libraries/font-awesome/svgs/solid/filter-circle-dollar.svg",
  "./libraries/font-awesome/svgs/solid/filter-circle-xmark.svg",
  "./libraries/font-awesome/svgs/solid/filter.svg",
  "./libraries/font-awesome/svgs/solid/fingerprint.svg",
  "./libraries/font-awesome/svgs/solid/fire-burner.svg",
  "./libraries/font-awesome/svgs/solid/fire-extinguisher.svg",
  "./libraries/font-awesome/svgs/solid/fire-flame-curved.svg",
  "./libraries/font-awesome/svgs/solid/fire-flame-simple.svg",
  "./libraries/font-awesome/svgs/solid/fire.svg",
  "./libraries/font-awesome/svgs/solid/fish-fins.svg",
  "./libraries/font-awesome/svgs/solid/fish.svg",
  "./libraries/font-awesome/svgs/solid/flag-checkered.svg",
  "./libraries/font-awesome/svgs/solid/flag-usa.svg",
  "./libraries/font-awesome/svgs/solid/flag.svg",
  "./libraries/font-awesome/svgs/solid/flask-vial.svg",
  "./libraries/font-awesome/svgs/solid/flask.svg",
  "./libraries/font-awesome/svgs/solid/floppy-disk.svg",
  "./libraries/font-awesome/svgs/solid/florin-sign.svg",
  "./libraries/font-awesome/svgs/solid/folder-closed.svg",
  "./libraries/font-awesome/svgs/solid/folder-minus.svg",
  "./libraries/font-awesome/svgs/solid/folder-open.svg",
  "./libraries/font-awesome/svgs/solid/folder-plus.svg",
  "./libraries/font-awesome/svgs/solid/folder-tree.svg",
  "./libraries/font-awesome/svgs/solid/folder.svg",
  "./libraries/font-awesome/svgs/solid/font-awesome.svg",
  "./libraries/font-awesome/svgs/solid/font.svg",
  "./libraries/font-awesome/svgs/solid/football.svg",
  "./libraries/font-awesome/svgs/solid/forward-fast.svg",
  "./libraries/font-awesome/svgs/solid/forward-step.svg",
  "./libraries/font-awesome/svgs/solid/forward.svg",
  "./libraries/font-awesome/svgs/solid/franc-sign.svg",
  "./libraries/font-awesome/svgs/solid/frog.svg",
  "./libraries/font-awesome/svgs/solid/futbol.svg",
  "./libraries/font-awesome/svgs/solid/g.svg",
  "./libraries/font-awesome/svgs/solid/gamepad.svg",
  "./libraries/font-awesome/svgs/solid/gas-pump.svg",
  "./libraries/font-awesome/svgs/solid/gauge-high.svg",
  "./libraries/font-awesome/svgs/solid/gauge-simple-high.svg",
  "./libraries/font-awesome/svgs/solid/gauge-simple.svg",
  "./libraries/font-awesome/svgs/solid/gauge.svg",
  "./libraries/font-awesome/svgs/solid/gavel.svg",
  "./libraries/font-awesome/svgs/solid/gear.svg",
  "./libraries/font-awesome/svgs/solid/gears.svg",
  "./libraries/font-awesome/svgs/solid/gem.svg",
  "./libraries/font-awesome/svgs/solid/genderless.svg",
  "./libraries/font-awesome/svgs/solid/ghost.svg",
  "./libraries/font-awesome/svgs/solid/gift.svg",
  "./libraries/font-awesome/svgs/solid/gifts.svg",
  "./libraries/font-awesome/svgs/solid/glass-water-droplet.svg",
  "./libraries/font-awesome/svgs/solid/glass-water.svg",
  "./libraries/font-awesome/svgs/solid/glasses.svg",
  "./libraries/font-awesome/svgs/solid/globe.svg",
  "./libraries/font-awesome/svgs/solid/golf-ball-tee.svg",
  "./libraries/font-awesome/svgs/solid/gopuram.svg",
  "./libraries/font-awesome/svgs/solid/graduation-cap.svg",
  "./libraries/font-awesome/svgs/solid/greater-than-equal.svg",
  "./libraries/font-awesome/svgs/solid/greater-than.svg",
  "./libraries/font-awesome/svgs/solid/grip-lines-vertical.svg",
  "./libraries/font-awesome/svgs/solid/grip-lines.svg",
  "./libraries/font-awesome/svgs/solid/grip-vertical.svg",
  "./libraries/font-awesome/svgs/solid/grip.svg",
  "./libraries/font-awesome/svgs/solid/group-arrows-rotate.svg",
  "./libraries/font-awesome/svgs/solid/guarani-sign.svg",
  "./libraries/font-awesome/svgs/solid/guitar.svg",
  "./libraries/font-awesome/svgs/solid/gun.svg",
  "./libraries/font-awesome/svgs/solid/h.svg",
  "./libraries/font-awesome/svgs/solid/hammer.svg",
  "./libraries/font-awesome/svgs/solid/hamsa.svg",
  "./libraries/font-awesome/svgs/solid/hand-back-fist.svg",
  "./libraries/font-awesome/svgs/solid/hand-dots.svg",
  "./libraries/font-awesome/svgs/solid/hand-fist.svg",
  "./libraries/font-awesome/svgs/solid/hand-holding-dollar.svg",
  "./libraries/font-awesome/svgs/solid/hand-holding-droplet.svg",
  "./libraries/font-awesome/svgs/solid/hand-holding-hand.svg",
  "./libraries/font-awesome/svgs/solid/hand-holding-heart.svg",
  "./libraries/font-awesome/svgs/solid/hand-holding-medical.svg",
  "./libraries/font-awesome/svgs/solid/hand-holding.svg",
  "./libraries/font-awesome/svgs/solid/hand-lizard.svg",
  "./libraries/font-awesome/svgs/solid/hand-middle-finger.svg",
  "./libraries/font-awesome/svgs/solid/hand-peace.svg",
  "./libraries/font-awesome/svgs/solid/hand-point-down.svg",
  "./libraries/font-awesome/svgs/solid/hand-point-left.svg",
  "./libraries/font-awesome/svgs/solid/hand-point-right.svg",
  "./libraries/font-awesome/svgs/solid/hand-point-up.svg",
  "./libraries/font-awesome/svgs/solid/hand-pointer.svg",
  "./libraries/font-awesome/svgs/solid/hand-scissors.svg",
  "./libraries/font-awesome/svgs/solid/hand-sparkles.svg",
  "./libraries/font-awesome/svgs/solid/hand-spock.svg",
  "./libraries/font-awesome/svgs/solid/hand.svg",
  "./libraries/font-awesome/svgs/solid/handcuffs.svg",
  "./libraries/font-awesome/svgs/solid/hands-asl-interpreting.svg",
  "./libraries/font-awesome/svgs/solid/hands-bound.svg",
  "./libraries/font-awesome/svgs/solid/hands-bubbles.svg",
  "./libraries/font-awesome/svgs/solid/hands-clapping.svg",
  "./libraries/font-awesome/svgs/solid/hands-holding-child.svg",
  "./libraries/font-awesome/svgs/solid/hands-holding-circle.svg",
  "./libraries/font-awesome/svgs/solid/hands-holding.svg",
  "./libraries/font-awesome/svgs/solid/hands-praying.svg",
  "./libraries/font-awesome/svgs/solid/hands.svg",
  "./libraries/font-awesome/svgs/solid/handshake-angle.svg",
  "./libraries/font-awesome/svgs/solid/handshake-simple-slash.svg",
  "./libraries/font-awesome/svgs/solid/handshake-simple.svg",
  "./libraries/font-awesome/svgs/solid/handshake-slash.svg",
  "./libraries/font-awesome/svgs/solid/handshake.svg",
  "./libraries/font-awesome/svgs/solid/hanukiah.svg",
  "./libraries/font-awesome/svgs/solid/hard-drive.svg",
  "./libraries/font-awesome/svgs/solid/hashtag.svg",
  "./libraries/font-awesome/svgs/solid/hat-cowboy-side.svg",
  "./libraries/font-awesome/svgs/solid/hat-cowboy.svg",
  "./libraries/font-awesome/svgs/solid/hat-wizard.svg",
  "./libraries/font-awesome/svgs/solid/head-side-cough-slash.svg",
  "./libraries/font-awesome/svgs/solid/head-side-cough.svg",
  "./libraries/font-awesome/svgs/solid/head-side-mask.svg",
  "./libraries/font-awesome/svgs/solid/head-side-virus.svg",
  "./libraries/font-awesome/svgs/solid/heading.svg",
  "./libraries/font-awesome/svgs/solid/headphones-simple.svg",
  "./libraries/font-awesome/svgs/solid/headphones.svg",
  "./libraries/font-awesome/svgs/solid/headset.svg",
  "./libraries/font-awesome/svgs/solid/heart-circle-bolt.svg",
  "./libraries/font-awesome/svgs/solid/heart-circle-check.svg",
  "./libraries/font-awesome/svgs/solid/heart-circle-exclamation.svg",
  "./libraries/font-awesome/svgs/solid/heart-circle-minus.svg",
  "./libraries/font-awesome/svgs/solid/heart-circle-plus.svg",
  "./libraries/font-awesome/svgs/solid/heart-circle-xmark.svg",
  "./libraries/font-awesome/svgs/solid/heart-crack.svg",
  "./libraries/font-awesome/svgs/solid/heart-pulse.svg",
  "./libraries/font-awesome/svgs/solid/heart.svg",
  "./libraries/font-awesome/svgs/solid/helicopter-symbol.svg",
  "./libraries/font-awesome/svgs/solid/helicopter.svg",
  "./libraries/font-awesome/svgs/solid/helmet-safety.svg",
  "./libraries/font-awesome/svgs/solid/helmet-un.svg",
  "./libraries/font-awesome/svgs/solid/highlighter.svg",
  "./libraries/font-awesome/svgs/solid/hill-avalanche.svg",
  "./libraries/font-awesome/svgs/solid/hill-rockslide.svg",
  "./libraries/font-awesome/svgs/solid/hippo.svg",
  "./libraries/font-awesome/svgs/solid/hockey-puck.svg",
  "./libraries/font-awesome/svgs/solid/holly-berry.svg",
  "./libraries/font-awesome/svgs/solid/horse-head.svg",
  "./libraries/font-awesome/svgs/solid/horse.svg",
  "./libraries/font-awesome/svgs/solid/hospital-user.svg",
  "./libraries/font-awesome/svgs/solid/hospital.svg",
  "./libraries/font-awesome/svgs/solid/hot-tub-person.svg",
  "./libraries/font-awesome/svgs/solid/hotdog.svg",
  "./libraries/font-awesome/svgs/solid/hotel.svg",
  "./libraries/font-awesome/svgs/solid/hourglass-end.svg",
  "./libraries/font-awesome/svgs/solid/hourglass-half.svg",
  "./libraries/font-awesome/svgs/solid/hourglass-start.svg",
  "./libraries/font-awesome/svgs/solid/hourglass.svg",
  "./libraries/font-awesome/svgs/solid/house-chimney-crack.svg",
  "./libraries/font-awesome/svgs/solid/house-chimney-medical.svg",
  "./libraries/font-awesome/svgs/solid/house-chimney-user.svg",
  "./libraries/font-awesome/svgs/solid/house-chimney-window.svg",
  "./libraries/font-awesome/svgs/solid/house-chimney.svg",
  "./libraries/font-awesome/svgs/solid/house-circle-check.svg",
  "./libraries/font-awesome/svgs/solid/house-circle-exclamation.svg",
  "./libraries/font-awesome/svgs/solid/house-circle-xmark.svg",
  "./libraries/font-awesome/svgs/solid/house-crack.svg",
  "./libraries/font-awesome/svgs/solid/house-fire.svg",
  "./libraries/font-awesome/svgs/solid/house-flag.svg",
  "./libraries/font-awesome/svgs/solid/house-flood-water-circle-arrow-right.svg",
  "./libraries/font-awesome/svgs/solid/house-flood-water.svg",
  "./libraries/font-awesome/svgs/solid/house-laptop.svg",
  "./libraries/font-awesome/svgs/solid/house-lock.svg",
  "./libraries/font-awesome/svgs/solid/house-medical-circle-check.svg",
  "./libraries/font-awesome/svgs/solid/house-medical-circle-exclamation.svg",
  "./libraries/font-awesome/svgs/solid/house-medical-circle-xmark.svg",
  "./libraries/font-awesome/svgs/solid/house-medical-flag.svg",
  "./libraries/font-awesome/svgs/solid/house-medical.svg",
  "./libraries/font-awesome/svgs/solid/house-signal.svg",
  "./libraries/font-awesome/svgs/solid/house-tsunami.svg",
  "./libraries/font-awesome/svgs/solid/house-user.svg",
  "./libraries/font-awesome/svgs/solid/house.svg",
  "./libraries/font-awesome/svgs/solid/hryvnia-sign.svg",
  "./libraries/font-awesome/svgs/solid/hurricane.svg",
  "./libraries/font-awesome/svgs/solid/i-cursor.svg",
  "./libraries/font-awesome/svgs/solid/i.svg",
  "./libraries/font-awesome/svgs/solid/ice-cream.svg",
  "./libraries/font-awesome/svgs/solid/icicles.svg",
  "./libraries/font-awesome/svgs/solid/icons.svg",
  "./libraries/font-awesome/svgs/solid/id-badge.svg",
  "./libraries/font-awesome/svgs/solid/id-card-clip.svg",
  "./libraries/font-awesome/svgs/solid/id-card.svg",
  "./libraries/font-awesome/svgs/solid/igloo.svg",
  "./libraries/font-awesome/svgs/solid/image-portrait.svg",
  "./libraries/font-awesome/svgs/solid/image.svg",
  "./libraries/font-awesome/svgs/solid/images.svg",
  "./libraries/font-awesome/svgs/solid/inbox.svg",
  "./libraries/font-awesome/svgs/solid/indent.svg",
  "./libraries/font-awesome/svgs/solid/indian-rupee-sign.svg",
  "./libraries/font-awesome/svgs/solid/industry.svg",
  "./libraries/font-awesome/svgs/solid/infinity.svg",
  "./libraries/font-awesome/svgs/solid/info.svg",
  "./libraries/font-awesome/svgs/solid/italic.svg",
  "./libraries/font-awesome/svgs/solid/j.svg",
  "./libraries/font-awesome/svgs/solid/jar-wheat.svg",
  "./libraries/font-awesome/svgs/solid/jar.svg",
  "./libraries/font-awesome/svgs/solid/jedi.svg",
  "./libraries/font-awesome/svgs/solid/jet-fighter-up.svg",
  "./libraries/font-awesome/svgs/solid/jet-fighter.svg",
  "./libraries/font-awesome/svgs/solid/joint.svg",
  "./libraries/font-awesome/svgs/solid/jug-detergent.svg",
  "./libraries/font-awesome/svgs/solid/k.svg",
  "./libraries/font-awesome/svgs/solid/kaaba.svg",
  "./libraries/font-awesome/svgs/solid/key.svg",
  "./libraries/font-awesome/svgs/solid/keyboard.svg",
  "./libraries/font-awesome/svgs/solid/khanda.svg",
  "./libraries/font-awesome/svgs/solid/kip-sign.svg",
  "./libraries/font-awesome/svgs/solid/kit-medical.svg",
  "./libraries/font-awesome/svgs/solid/kitchen-set.svg",
  "./libraries/font-awesome/svgs/solid/kiwi-bird.svg",
  "./libraries/font-awesome/svgs/solid/l.svg",
  "./libraries/font-awesome/svgs/solid/land-mine-on.svg",
  "./libraries/font-awesome/svgs/solid/landmark-dome.svg",
  "./libraries/font-awesome/svgs/solid/landmark-flag.svg",
  "./libraries/font-awesome/svgs/solid/landmark.svg",
  "./libraries/font-awesome/svgs/solid/language.svg",
  "./libraries/font-awesome/svgs/solid/laptop-code.svg",
  "./libraries/font-awesome/svgs/solid/laptop-file.svg",
  "./libraries/font-awesome/svgs/solid/laptop-medical.svg",
  "./libraries/font-awesome/svgs/solid/laptop.svg",
  "./libraries/font-awesome/svgs/solid/lari-sign.svg",
  "./libraries/font-awesome/svgs/solid/layer-group.svg",
  "./libraries/font-awesome/svgs/solid/leaf.svg",
  "./libraries/font-awesome/svgs/solid/left-long.svg",
  "./libraries/font-awesome/svgs/solid/left-right.svg",
  "./libraries/font-awesome/svgs/solid/lemon.svg",
  "./libraries/font-awesome/svgs/solid/less-than-equal.svg",
  "./libraries/font-awesome/svgs/solid/less-than.svg",
  "./libraries/font-awesome/svgs/solid/life-ring.svg",
  "./libraries/font-awesome/svgs/solid/lightbulb.svg",
  "./libraries/font-awesome/svgs/solid/lines-leaning.svg",
  "./libraries/font-awesome/svgs/solid/link-slash.svg",
  "./libraries/font-awesome/svgs/solid/link.svg",
  "./libraries/font-awesome/svgs/solid/lira-sign.svg",
  "./libraries/font-awesome/svgs/solid/list-check.svg",
  "./libraries/font-awesome/svgs/solid/list-ol.svg",
  "./libraries/font-awesome/svgs/solid/list-ul.svg",
  "./libraries/font-awesome/svgs/solid/list.svg",
  "./libraries/font-awesome/svgs/solid/litecoin-sign.svg",
  "./libraries/font-awesome/svgs/solid/location-arrow.svg",
  "./libraries/font-awesome/svgs/solid/location-crosshairs.svg",
  "./libraries/font-awesome/svgs/solid/location-dot.svg",
  "./libraries/font-awesome/svgs/solid/location-pin-lock.svg",
  "./libraries/font-awesome/svgs/solid/location-pin.svg",
  "./libraries/font-awesome/svgs/solid/lock-open.svg",
  "./libraries/font-awesome/svgs/solid/lock.svg",
  "./libraries/font-awesome/svgs/solid/locust.svg",
  "./libraries/font-awesome/svgs/solid/lungs-virus.svg",
  "./libraries/font-awesome/svgs/solid/lungs.svg",
  "./libraries/font-awesome/svgs/solid/m.svg",
  "./libraries/font-awesome/svgs/solid/magnet.svg",
  "./libraries/font-awesome/svgs/solid/magnifying-glass-arrow-right.svg",
  "./libraries/font-awesome/svgs/solid/magnifying-glass-chart.svg",
  "./libraries/font-awesome/svgs/solid/magnifying-glass-dollar.svg",
  "./libraries/font-awesome/svgs/solid/magnifying-glass-location.svg",
  "./libraries/font-awesome/svgs/solid/magnifying-glass-minus.svg",
  "./libraries/font-awesome/svgs/solid/magnifying-glass-plus.svg",
  "./libraries/font-awesome/svgs/solid/magnifying-glass.svg",
  "./libraries/font-awesome/svgs/solid/manat-sign.svg",
  "./libraries/font-awesome/svgs/solid/map-location-dot.svg",
  "./libraries/font-awesome/svgs/solid/map-location.svg",
  "./libraries/font-awesome/svgs/solid/map-pin.svg",
  "./libraries/font-awesome/svgs/solid/map.svg",
  "./libraries/font-awesome/svgs/solid/marker.svg",
  "./libraries/font-awesome/svgs/solid/mars-and-venus-burst.svg",
  "./libraries/font-awesome/svgs/solid/mars-and-venus.svg",
  "./libraries/font-awesome/svgs/solid/mars-double.svg",
  "./libraries/font-awesome/svgs/solid/mars-stroke-right.svg",
  "./libraries/font-awesome/svgs/solid/mars-stroke-up.svg",
  "./libraries/font-awesome/svgs/solid/mars-stroke.svg",
  "./libraries/font-awesome/svgs/solid/mars.svg",
  "./libraries/font-awesome/svgs/solid/martini-glass-citrus.svg",
  "./libraries/font-awesome/svgs/solid/martini-glass-empty.svg",
  "./libraries/font-awesome/svgs/solid/martini-glass.svg",
  "./libraries/font-awesome/svgs/solid/mask-face.svg",
  "./libraries/font-awesome/svgs/solid/mask-ventilator.svg",
  "./libraries/font-awesome/svgs/solid/mask.svg",
  "./libraries/font-awesome/svgs/solid/masks-theater.svg",
  "./libraries/font-awesome/svgs/solid/mattress-pillow.svg",
  "./libraries/font-awesome/svgs/solid/maximize.svg",
  "./libraries/font-awesome/svgs/solid/medal.svg",
  "./libraries/font-awesome/svgs/solid/memory.svg",
  "./libraries/font-awesome/svgs/solid/menorah.svg",
  "./libraries/font-awesome/svgs/solid/mercury.svg",
  "./libraries/font-awesome/svgs/solid/message.svg",
  "./libraries/font-awesome/svgs/solid/meteor.svg",
  "./libraries/font-awesome/svgs/solid/microchip.svg",
  "./libraries/font-awesome/svgs/solid/microphone-lines-slash.svg",
  "./libraries/font-awesome/svgs/solid/microphone-lines.svg",
  "./libraries/font-awesome/svgs/solid/microphone-slash.svg",
  "./libraries/font-awesome/svgs/solid/microphone.svg",
  "./libraries/font-awesome/svgs/solid/microscope.svg",
  "./libraries/font-awesome/svgs/solid/mill-sign.svg",
  "./libraries/font-awesome/svgs/solid/minimize.svg",
  "./libraries/font-awesome/svgs/solid/minus.svg",
  "./libraries/font-awesome/svgs/solid/mitten.svg",
  "./libraries/font-awesome/svgs/solid/mobile-button.svg",
  "./libraries/font-awesome/svgs/solid/mobile-retro.svg",
  "./libraries/font-awesome/svgs/solid/mobile-screen-button.svg",
  "./libraries/font-awesome/svgs/solid/mobile-screen.svg",
  "./libraries/font-awesome/svgs/solid/mobile.svg",
  "./libraries/font-awesome/svgs/solid/money-bill-1-wave.svg",
  "./libraries/font-awesome/svgs/solid/money-bill-1.svg",
  "./libraries/font-awesome/svgs/solid/money-bill-transfer.svg",
  "./libraries/font-awesome/svgs/solid/money-bill-trend-up.svg",
  "./libraries/font-awesome/svgs/solid/money-bill-wave.svg",
  "./libraries/font-awesome/svgs/solid/money-bill-wheat.svg",
  "./libraries/font-awesome/svgs/solid/money-bill.svg",
  "./libraries/font-awesome/svgs/solid/money-bills.svg",
  "./libraries/font-awesome/svgs/solid/money-check-dollar.svg",
  "./libraries/font-awesome/svgs/solid/money-check.svg",
  "./libraries/font-awesome/svgs/solid/monument.svg",
  "./libraries/font-awesome/svgs/solid/moon.svg",
  "./libraries/font-awesome/svgs/solid/mortar-pestle.svg",
  "./libraries/font-awesome/svgs/solid/mosque.svg",
  "./libraries/font-awesome/svgs/solid/mosquito-net.svg",
  "./libraries/font-awesome/svgs/solid/mosquito.svg",
  "./libraries/font-awesome/svgs/solid/motorcycle.svg",
  "./libraries/font-awesome/svgs/solid/mound.svg",
  "./libraries/font-awesome/svgs/solid/mountain-city.svg",
  "./libraries/font-awesome/svgs/solid/mountain-sun.svg",
  "./libraries/font-awesome/svgs/solid/mountain.svg",
  "./libraries/font-awesome/svgs/solid/mug-hot.svg",
  "./libraries/font-awesome/svgs/solid/mug-saucer.svg",
  "./libraries/font-awesome/svgs/solid/music.svg",
  "./libraries/font-awesome/svgs/solid/n.svg",
  "./libraries/font-awesome/svgs/solid/naira-sign.svg",
  "./libraries/font-awesome/svgs/solid/network-wired.svg",
  "./libraries/font-awesome/svgs/solid/neuter.svg",
  "./libraries/font-awesome/svgs/solid/newspaper.svg",
  "./libraries/font-awesome/svgs/solid/not-equal.svg",
  "./libraries/font-awesome/svgs/solid/notdef.svg",
  "./libraries/font-awesome/svgs/solid/note-sticky.svg",
  "./libraries/font-awesome/svgs/solid/notes-medical.svg",
  "./libraries/font-awesome/svgs/solid/o.svg",
  "./libraries/font-awesome/svgs/solid/object-group.svg",
  "./libraries/font-awesome/svgs/solid/object-ungroup.svg",
  "./libraries/font-awesome/svgs/solid/oil-can.svg",
  "./libraries/font-awesome/svgs/solid/oil-well.svg",
  "./libraries/font-awesome/svgs/solid/om.svg",
  "./libraries/font-awesome/svgs/solid/otter.svg",
  "./libraries/font-awesome/svgs/solid/outdent.svg",
  "./libraries/font-awesome/svgs/solid/p.svg",
  "./libraries/font-awesome/svgs/solid/pager.svg",
  "./libraries/font-awesome/svgs/solid/paint-roller.svg",
  "./libraries/font-awesome/svgs/solid/paintbrush.svg",
  "./libraries/font-awesome/svgs/solid/palette.svg",
  "./libraries/font-awesome/svgs/solid/pallet.svg",
  "./libraries/font-awesome/svgs/solid/panorama.svg",
  "./libraries/font-awesome/svgs/solid/paper-plane.svg",
  "./libraries/font-awesome/svgs/solid/paperclip.svg",
  "./libraries/font-awesome/svgs/solid/parachute-box.svg",
  "./libraries/font-awesome/svgs/solid/paragraph.svg",
  "./libraries/font-awesome/svgs/solid/passport.svg",
  "./libraries/font-awesome/svgs/solid/paste.svg",
  "./libraries/font-awesome/svgs/solid/pause.svg",
  "./libraries/font-awesome/svgs/solid/paw.svg",
  "./libraries/font-awesome/svgs/solid/peace.svg",
  "./libraries/font-awesome/svgs/solid/pen-clip.svg",
  "./libraries/font-awesome/svgs/solid/pen-fancy.svg",
  "./libraries/font-awesome/svgs/solid/pen-nib.svg",
  "./libraries/font-awesome/svgs/solid/pen-ruler.svg",
  "./libraries/font-awesome/svgs/solid/pen-to-square.svg",
  "./libraries/font-awesome/svgs/solid/pen.svg",
  "./libraries/font-awesome/svgs/solid/pencil.svg",
  "./libraries/font-awesome/svgs/solid/people-arrows.svg",
  "./libraries/font-awesome/svgs/solid/people-carry-box.svg",
  "./libraries/font-awesome/svgs/solid/people-group.svg",
  "./libraries/font-awesome/svgs/solid/people-line.svg",
  "./libraries/font-awesome/svgs/solid/people-pulling.svg",
  "./libraries/font-awesome/svgs/solid/people-robbery.svg",
  "./libraries/font-awesome/svgs/solid/people-roof.svg",
  "./libraries/font-awesome/svgs/solid/pepper-hot.svg",
  "./libraries/font-awesome/svgs/solid/percent.svg",
  "./libraries/font-awesome/svgs/solid/person-arrow-down-to-line.svg",
  "./libraries/font-awesome/svgs/solid/person-arrow-up-from-line.svg",
  "./libraries/font-awesome/svgs/solid/person-biking.svg",
  "./libraries/font-awesome/svgs/solid/person-booth.svg",
  "./libraries/font-awesome/svgs/solid/person-breastfeeding.svg",
  "./libraries/font-awesome/svgs/solid/person-burst.svg",
  "./libraries/font-awesome/svgs/solid/person-cane.svg",
  "./libraries/font-awesome/svgs/solid/person-chalkboard.svg",
  "./libraries/font-awesome/svgs/solid/person-circle-check.svg",
  "./libraries/font-awesome/svgs/solid/person-circle-exclamation.svg",
  "./libraries/font-awesome/svgs/solid/person-circle-minus.svg",
  "./libraries/font-awesome/svgs/solid/person-circle-plus.svg",
  "./libraries/font-awesome/svgs/solid/person-circle-question.svg",
  "./libraries/font-awesome/svgs/solid/person-circle-xmark.svg",
  "./libraries/font-awesome/svgs/solid/person-digging.svg",
  "./libraries/font-awesome/svgs/solid/person-dots-from-line.svg",
  "./libraries/font-awesome/svgs/solid/person-dress-burst.svg",
  "./libraries/font-awesome/svgs/solid/person-dress.svg",
  "./libraries/font-awesome/svgs/solid/person-drowning.svg",
  "./libraries/font-awesome/svgs/solid/person-falling-burst.svg",
  "./libraries/font-awesome/svgs/solid/person-falling.svg",
  "./libraries/font-awesome/svgs/solid/person-half-dress.svg",
  "./libraries/font-awesome/svgs/solid/person-harassing.svg",
  "./libraries/font-awesome/svgs/solid/person-hiking.svg",
  "./libraries/font-awesome/svgs/solid/person-military-pointing.svg",
  "./libraries/font-awesome/svgs/solid/person-military-rifle.svg",
  "./libraries/font-awesome/svgs/solid/person-military-to-person.svg",
  "./libraries/font-awesome/svgs/solid/person-praying.svg",
  "./libraries/font-awesome/svgs/solid/person-pregnant.svg",
  "./libraries/font-awesome/svgs/solid/person-rays.svg",
  "./libraries/font-awesome/svgs/solid/person-rifle.svg",
  "./libraries/font-awesome/svgs/solid/person-running.svg",
  "./libraries/font-awesome/svgs/solid/person-shelter.svg",
  "./libraries/font-awesome/svgs/solid/person-skating.svg",
  "./libraries/font-awesome/svgs/solid/person-skiing-nordic.svg",
  "./libraries/font-awesome/svgs/solid/person-skiing.svg",
  "./libraries/font-awesome/svgs/solid/person-snowboarding.svg",
  "./libraries/font-awesome/svgs/solid/person-swimming.svg",
  "./libraries/font-awesome/svgs/solid/person-through-window.svg",
  "./libraries/font-awesome/svgs/solid/person-walking-arrow-loop-left.svg",
  "./libraries/font-awesome/svgs/solid/person-walking-arrow-right.svg",
  "./libraries/font-awesome/svgs/solid/person-walking-dashed-line-arrow-right.svg",
  "./libraries/font-awesome/svgs/solid/person-walking-luggage.svg",
  "./libraries/font-awesome/svgs/solid/person-walking-with-cane.svg",
  "./libraries/font-awesome/svgs/solid/person-walking.svg",
  "./libraries/font-awesome/svgs/solid/person.svg",
  "./libraries/font-awesome/svgs/solid/peseta-sign.svg",
  "./libraries/font-awesome/svgs/solid/peso-sign.svg",
  "./libraries/font-awesome/svgs/solid/phone-flip.svg",
  "./libraries/font-awesome/svgs/solid/phone-slash.svg",
  "./libraries/font-awesome/svgs/solid/phone-volume.svg",
  "./libraries/font-awesome/svgs/solid/phone.svg",
  "./libraries/font-awesome/svgs/solid/photo-film.svg",
  "./libraries/font-awesome/svgs/solid/piggy-bank.svg",
  "./libraries/font-awesome/svgs/solid/pills.svg",
  "./libraries/font-awesome/svgs/solid/pizza-slice.svg",
  "./libraries/font-awesome/svgs/solid/place-of-worship.svg",
  "./libraries/font-awesome/svgs/solid/plane-arrival.svg",
  "./libraries/font-awesome/svgs/solid/plane-circle-check.svg",
  "./libraries/font-awesome/svgs/solid/plane-circle-exclamation.svg",
  "./libraries/font-awesome/svgs/solid/plane-circle-xmark.svg",
  "./libraries/font-awesome/svgs/solid/plane-departure.svg",
  "./libraries/font-awesome/svgs/solid/plane-lock.svg",
  "./libraries/font-awesome/svgs/solid/plane-slash.svg",
  "./libraries/font-awesome/svgs/solid/plane-up.svg",
  "./libraries/font-awesome/svgs/solid/plane.svg",
  "./libraries/font-awesome/svgs/solid/plant-wilt.svg",
  "./libraries/font-awesome/svgs/solid/plate-wheat.svg",
  "./libraries/font-awesome/svgs/solid/play.svg",
  "./libraries/font-awesome/svgs/solid/plug-circle-bolt.svg",
  "./libraries/font-awesome/svgs/solid/plug-circle-check.svg",
  "./libraries/font-awesome/svgs/solid/plug-circle-exclamation.svg",
  "./libraries/font-awesome/svgs/solid/plug-circle-minus.svg",
  "./libraries/font-awesome/svgs/solid/plug-circle-plus.svg",
  "./libraries/font-awesome/svgs/solid/plug-circle-xmark.svg",
  "./libraries/font-awesome/svgs/solid/plug.svg",
  "./libraries/font-awesome/svgs/solid/plus-minus.svg",
  "./libraries/font-awesome/svgs/solid/plus.svg",
  "./libraries/font-awesome/svgs/solid/podcast.svg",
  "./libraries/font-awesome/svgs/solid/poo-storm.svg",
  "./libraries/font-awesome/svgs/solid/poo.svg",
  "./libraries/font-awesome/svgs/solid/poop.svg",
  "./libraries/font-awesome/svgs/solid/power-off.svg",
  "./libraries/font-awesome/svgs/solid/prescription-bottle-medical.svg",
  "./libraries/font-awesome/svgs/solid/prescription-bottle.svg",
  "./libraries/font-awesome/svgs/solid/prescription.svg",
  "./libraries/font-awesome/svgs/solid/print.svg",
  "./libraries/font-awesome/svgs/solid/pump-medical.svg",
  "./libraries/font-awesome/svgs/solid/pump-soap.svg",
  "./libraries/font-awesome/svgs/solid/puzzle-piece.svg",
  "./libraries/font-awesome/svgs/solid/q.svg",
  "./libraries/font-awesome/svgs/solid/qrcode.svg",
  "./libraries/font-awesome/svgs/solid/question.svg",
  "./libraries/font-awesome/svgs/solid/quote-left.svg",
  "./libraries/font-awesome/svgs/solid/quote-right.svg",
  "./libraries/font-awesome/svgs/solid/r.svg",
  "./libraries/font-awesome/svgs/solid/radiation.svg",
  "./libraries/font-awesome/svgs/solid/radio.svg",
  "./libraries/font-awesome/svgs/solid/rainbow.svg",
  "./libraries/font-awesome/svgs/solid/ranking-star.svg",
  "./libraries/font-awesome/svgs/solid/receipt.svg",
  "./libraries/font-awesome/svgs/solid/record-vinyl.svg",
  "./libraries/font-awesome/svgs/solid/rectangle-ad.svg",
  "./libraries/font-awesome/svgs/solid/rectangle-list.svg",
  "./libraries/font-awesome/svgs/solid/rectangle-xmark.svg",
  "./libraries/font-awesome/svgs/solid/recycle.svg",
  "./libraries/font-awesome/svgs/solid/registered.svg",
  "./libraries/font-awesome/svgs/solid/repeat.svg",
  "./libraries/font-awesome/svgs/solid/reply-all.svg",
  "./libraries/font-awesome/svgs/solid/reply.svg",
  "./libraries/font-awesome/svgs/solid/republican.svg",
  "./libraries/font-awesome/svgs/solid/restroom.svg",
  "./libraries/font-awesome/svgs/solid/retweet.svg",
  "./libraries/font-awesome/svgs/solid/ribbon.svg",
  "./libraries/font-awesome/svgs/solid/right-from-bracket.svg",
  "./libraries/font-awesome/svgs/solid/right-left.svg",
  "./libraries/font-awesome/svgs/solid/right-long.svg",
  "./libraries/font-awesome/svgs/solid/right-to-bracket.svg",
  "./libraries/font-awesome/svgs/solid/ring.svg",
  "./libraries/font-awesome/svgs/solid/road-barrier.svg",
  "./libraries/font-awesome/svgs/solid/road-bridge.svg",
  "./libraries/font-awesome/svgs/solid/road-circle-check.svg",
  "./libraries/font-awesome/svgs/solid/road-circle-exclamation.svg",
  "./libraries/font-awesome/svgs/solid/road-circle-xmark.svg",
  "./libraries/font-awesome/svgs/solid/road-lock.svg",
  "./libraries/font-awesome/svgs/solid/road-spikes.svg",
  "./libraries/font-awesome/svgs/solid/road.svg",
  "./libraries/font-awesome/svgs/solid/robot.svg",
  "./libraries/font-awesome/svgs/solid/rocket.svg",
  "./libraries/font-awesome/svgs/solid/rotate-left.svg",
  "./libraries/font-awesome/svgs/solid/rotate-right.svg",
  "./libraries/font-awesome/svgs/solid/rotate.svg",
  "./libraries/font-awesome/svgs/solid/route.svg",
  "./libraries/font-awesome/svgs/solid/rss.svg",
  "./libraries/font-awesome/svgs/solid/ruble-sign.svg",
  "./libraries/font-awesome/svgs/solid/rug.svg",
  "./libraries/font-awesome/svgs/solid/ruler-combined.svg",
  "./libraries/font-awesome/svgs/solid/ruler-horizontal.svg",
  "./libraries/font-awesome/svgs/solid/ruler-vertical.svg",
  "./libraries/font-awesome/svgs/solid/ruler.svg",
  "./libraries/font-awesome/svgs/solid/rupee-sign.svg",
  "./libraries/font-awesome/svgs/solid/rupiah-sign.svg",
  "./libraries/font-awesome/svgs/solid/s.svg",
  "./libraries/font-awesome/svgs/solid/sack-dollar.svg",
  "./libraries/font-awesome/svgs/solid/sack-xmark.svg",
  "./libraries/font-awesome/svgs/solid/sailboat.svg",
  "./libraries/font-awesome/svgs/solid/satellite-dish.svg",
  "./libraries/font-awesome/svgs/solid/satellite.svg",
  "./libraries/font-awesome/svgs/solid/scale-balanced.svg",
  "./libraries/font-awesome/svgs/solid/scale-unbalanced-flip.svg",
  "./libraries/font-awesome/svgs/solid/scale-unbalanced.svg",
  "./libraries/font-awesome/svgs/solid/school-circle-check.svg",
  "./libraries/font-awesome/svgs/solid/school-circle-exclamation.svg",
  "./libraries/font-awesome/svgs/solid/school-circle-xmark.svg",
  "./libraries/font-awesome/svgs/solid/school-flag.svg",
  "./libraries/font-awesome/svgs/solid/school-lock.svg",
  "./libraries/font-awesome/svgs/solid/school.svg",
  "./libraries/font-awesome/svgs/solid/scissors.svg",
  "./libraries/font-awesome/svgs/solid/screwdriver-wrench.svg",
  "./libraries/font-awesome/svgs/solid/screwdriver.svg",
  "./libraries/font-awesome/svgs/solid/scroll-torah.svg",
  "./libraries/font-awesome/svgs/solid/scroll.svg",
  "./libraries/font-awesome/svgs/solid/sd-card.svg",
  "./libraries/font-awesome/svgs/solid/section.svg",
  "./libraries/font-awesome/svgs/solid/seedling.svg",
  "./libraries/font-awesome/svgs/solid/server.svg",
  "./libraries/font-awesome/svgs/solid/shapes.svg",
  "./libraries/font-awesome/svgs/solid/share-from-square.svg",
  "./libraries/font-awesome/svgs/solid/share-nodes.svg",
  "./libraries/font-awesome/svgs/solid/share.svg",
  "./libraries/font-awesome/svgs/solid/sheet-plastic.svg",
  "./libraries/font-awesome/svgs/solid/shekel-sign.svg",
  "./libraries/font-awesome/svgs/solid/shield-cat.svg",
  "./libraries/font-awesome/svgs/solid/shield-dog.svg",
  "./libraries/font-awesome/svgs/solid/shield-halved.svg",
  "./libraries/font-awesome/svgs/solid/shield-heart.svg",
  "./libraries/font-awesome/svgs/solid/shield-virus.svg",
  "./libraries/font-awesome/svgs/solid/shield.svg",
  "./libraries/font-awesome/svgs/solid/ship.svg",
  "./libraries/font-awesome/svgs/solid/shirt.svg",
  "./libraries/font-awesome/svgs/solid/shoe-prints.svg",
  "./libraries/font-awesome/svgs/solid/shop-lock.svg",
  "./libraries/font-awesome/svgs/solid/shop-slash.svg",
  "./libraries/font-awesome/svgs/solid/shop.svg",
  "./libraries/font-awesome/svgs/solid/shower.svg",
  "./libraries/font-awesome/svgs/solid/shrimp.svg",
  "./libraries/font-awesome/svgs/solid/shuffle.svg",
  "./libraries/font-awesome/svgs/solid/shuttle-space.svg",
  "./libraries/font-awesome/svgs/solid/sign-hanging.svg",
  "./libraries/font-awesome/svgs/solid/signal.svg",
  "./libraries/font-awesome/svgs/solid/signature.svg",
  "./libraries/font-awesome/svgs/solid/signs-post.svg",
  "./libraries/font-awesome/svgs/solid/sim-card.svg",
  "./libraries/font-awesome/svgs/solid/sink.svg",
  "./libraries/font-awesome/svgs/solid/sitemap.svg",
  "./libraries/font-awesome/svgs/solid/skull-crossbones.svg",
  "./libraries/font-awesome/svgs/solid/skull.svg",
  "./libraries/font-awesome/svgs/solid/slash.svg",
  "./libraries/font-awesome/svgs/solid/sleigh.svg",
  "./libraries/font-awesome/svgs/solid/sliders.svg",
  "./libraries/font-awesome/svgs/solid/smog.svg",
  "./libraries/font-awesome/svgs/solid/smoking.svg",
  "./libraries/font-awesome/svgs/solid/snowflake.svg",
  "./libraries/font-awesome/svgs/solid/snowman.svg",
  "./libraries/font-awesome/svgs/solid/snowplow.svg",
  "./libraries/font-awesome/svgs/solid/soap.svg",
  "./libraries/font-awesome/svgs/solid/socks.svg",
  "./libraries/font-awesome/svgs/solid/solar-panel.svg",
  "./libraries/font-awesome/svgs/solid/sort-down.svg",
  "./libraries/font-awesome/svgs/solid/sort-up.svg",
  "./libraries/font-awesome/svgs/solid/sort.svg",
  "./libraries/font-awesome/svgs/solid/spa.svg",
  "./libraries/font-awesome/svgs/solid/spaghetti-monster-flying.svg",
  "./libraries/font-awesome/svgs/solid/spell-check.svg",
  "./libraries/font-awesome/svgs/solid/spider.svg",
  "./libraries/font-awesome/svgs/solid/spinner.svg",
  "./libraries/font-awesome/svgs/solid/splotch.svg",
  "./libraries/font-awesome/svgs/solid/spoon.svg",
  "./libraries/font-awesome/svgs/solid/spray-can-sparkles.svg",
  "./libraries/font-awesome/svgs/solid/spray-can.svg",
  "./libraries/font-awesome/svgs/solid/square-arrow-up-right.svg",
  "./libraries/font-awesome/svgs/solid/square-caret-down.svg",
  "./libraries/font-awesome/svgs/solid/square-caret-left.svg",
  "./libraries/font-awesome/svgs/solid/square-caret-right.svg",
  "./libraries/font-awesome/svgs/solid/square-caret-up.svg",
  "./libraries/font-awesome/svgs/solid/square-check.svg",
  "./libraries/font-awesome/svgs/solid/square-envelope.svg",
  "./libraries/font-awesome/svgs/solid/square-full.svg",
  "./libraries/font-awesome/svgs/solid/square-h.svg",
  "./libraries/font-awesome/svgs/solid/square-minus.svg",
  "./libraries/font-awesome/svgs/solid/square-nfi.svg",
  "./libraries/font-awesome/svgs/solid/square-parking.svg",
  "./libraries/font-awesome/svgs/solid/square-pen.svg",
  "./libraries/font-awesome/svgs/solid/square-person-confined.svg",
  "./libraries/font-awesome/svgs/solid/square-phone-flip.svg",
  "./libraries/font-awesome/svgs/solid/square-phone.svg",
  "./libraries/font-awesome/svgs/solid/square-plus.svg",
  "./libraries/font-awesome/svgs/solid/square-poll-horizontal.svg",
  "./libraries/font-awesome/svgs/solid/square-poll-vertical.svg",
  "./libraries/font-awesome/svgs/solid/square-root-variable.svg",
  "./libraries/font-awesome/svgs/solid/square-rss.svg",
  "./libraries/font-awesome/svgs/solid/square-share-nodes.svg",
  "./libraries/font-awesome/svgs/solid/square-up-right.svg",
  "./libraries/font-awesome/svgs/solid/square-virus.svg",
  "./libraries/font-awesome/svgs/solid/square-xmark.svg",
  "./libraries/font-awesome/svgs/solid/square.svg",
  "./libraries/font-awesome/svgs/solid/staff-snake.svg",
  "./libraries/font-awesome/svgs/solid/stairs.svg",
  "./libraries/font-awesome/svgs/solid/stamp.svg",
  "./libraries/font-awesome/svgs/solid/stapler.svg",
  "./libraries/font-awesome/svgs/solid/star-and-crescent.svg",
  "./libraries/font-awesome/svgs/solid/star-half-stroke.svg",
  "./libraries/font-awesome/svgs/solid/star-half.svg",
  "./libraries/font-awesome/svgs/solid/star-of-david.svg",
  "./libraries/font-awesome/svgs/solid/star-of-life.svg",
  "./libraries/font-awesome/svgs/solid/star.svg",
  "./libraries/font-awesome/svgs/solid/sterling-sign.svg",
  "./libraries/font-awesome/svgs/solid/stethoscope.svg",
  "./libraries/font-awesome/svgs/solid/stop.svg",
  "./libraries/font-awesome/svgs/solid/stopwatch-20.svg",
  "./libraries/font-awesome/svgs/solid/stopwatch.svg",
  "./libraries/font-awesome/svgs/solid/store-slash.svg",
  "./libraries/font-awesome/svgs/solid/store.svg",
  "./libraries/font-awesome/svgs/solid/street-view.svg",
  "./libraries/font-awesome/svgs/solid/strikethrough.svg",
  "./libraries/font-awesome/svgs/solid/stroopwafel.svg",
  "./libraries/font-awesome/svgs/solid/subscript.svg",
  "./libraries/font-awesome/svgs/solid/suitcase-medical.svg",
  "./libraries/font-awesome/svgs/solid/suitcase-rolling.svg",
  "./libraries/font-awesome/svgs/solid/suitcase.svg",
  "./libraries/font-awesome/svgs/solid/sun-plant-wilt.svg",
  "./libraries/font-awesome/svgs/solid/sun.svg",
  "./libraries/font-awesome/svgs/solid/superscript.svg",
  "./libraries/font-awesome/svgs/solid/swatchbook.svg",
  "./libraries/font-awesome/svgs/solid/synagogue.svg",
  "./libraries/font-awesome/svgs/solid/syringe.svg",
  "./libraries/font-awesome/svgs/solid/t.svg",
  "./libraries/font-awesome/svgs/solid/table-cells-large.svg",
  "./libraries/font-awesome/svgs/solid/table-cells.svg",
  "./libraries/font-awesome/svgs/solid/table-columns.svg",
  "./libraries/font-awesome/svgs/solid/table-list.svg",
  "./libraries/font-awesome/svgs/solid/table-tennis-paddle-ball.svg",
  "./libraries/font-awesome/svgs/solid/table.svg",
  "./libraries/font-awesome/svgs/solid/tablet-button.svg",
  "./libraries/font-awesome/svgs/solid/tablet-screen-button.svg",
  "./libraries/font-awesome/svgs/solid/tablet.svg",
  "./libraries/font-awesome/svgs/solid/tablets.svg",
  "./libraries/font-awesome/svgs/solid/tachograph-digital.svg",
  "./libraries/font-awesome/svgs/solid/tag.svg",
  "./libraries/font-awesome/svgs/solid/tags.svg",
  "./libraries/font-awesome/svgs/solid/tape.svg",
  "./libraries/font-awesome/svgs/solid/tarp-droplet.svg",
  "./libraries/font-awesome/svgs/solid/tarp.svg",
  "./libraries/font-awesome/svgs/solid/taxi.svg",
  "./libraries/font-awesome/svgs/solid/teeth-open.svg",
  "./libraries/font-awesome/svgs/solid/teeth.svg",
  "./libraries/font-awesome/svgs/solid/temperature-arrow-down.svg",
  "./libraries/font-awesome/svgs/solid/temperature-arrow-up.svg",
  "./libraries/font-awesome/svgs/solid/temperature-empty.svg",
  "./libraries/font-awesome/svgs/solid/temperature-full.svg",
  "./libraries/font-awesome/svgs/solid/temperature-half.svg",
  "./libraries/font-awesome/svgs/solid/temperature-high.svg",
  "./libraries/font-awesome/svgs/solid/temperature-low.svg",
  "./libraries/font-awesome/svgs/solid/temperature-quarter.svg",
  "./libraries/font-awesome/svgs/solid/temperature-three-quarters.svg",
  "./libraries/font-awesome/svgs/solid/tenge-sign.svg",
  "./libraries/font-awesome/svgs/solid/tent-arrow-down-to-line.svg",
  "./libraries/font-awesome/svgs/solid/tent-arrow-left-right.svg",
  "./libraries/font-awesome/svgs/solid/tent-arrow-turn-left.svg",
  "./libraries/font-awesome/svgs/solid/tent-arrows-down.svg",
  "./libraries/font-awesome/svgs/solid/tent.svg",
  "./libraries/font-awesome/svgs/solid/tents.svg",
  "./libraries/font-awesome/svgs/solid/terminal.svg",
  "./libraries/font-awesome/svgs/solid/text-height.svg",
  "./libraries/font-awesome/svgs/solid/text-slash.svg",
  "./libraries/font-awesome/svgs/solid/text-width.svg",
  "./libraries/font-awesome/svgs/solid/thermometer.svg",
  "./libraries/font-awesome/svgs/solid/thumbs-down.svg",
  "./libraries/font-awesome/svgs/solid/thumbs-up.svg",
  "./libraries/font-awesome/svgs/solid/thumbtack.svg",
  "./libraries/font-awesome/svgs/solid/ticket-simple.svg",
  "./libraries/font-awesome/svgs/solid/ticket.svg",
  "./libraries/font-awesome/svgs/solid/timeline.svg",
  "./libraries/font-awesome/svgs/solid/toggle-off.svg",
  "./libraries/font-awesome/svgs/solid/toggle-on.svg",
  "./libraries/font-awesome/svgs/solid/toilet-paper-slash.svg",
  "./libraries/font-awesome/svgs/solid/toilet-paper.svg",
  "./libraries/font-awesome/svgs/solid/toilet-portable.svg",
  "./libraries/font-awesome/svgs/solid/toilet.svg",
  "./libraries/font-awesome/svgs/solid/toilets-portable.svg",
  "./libraries/font-awesome/svgs/solid/toolbox.svg",
  "./libraries/font-awesome/svgs/solid/tooth.svg",
  "./libraries/font-awesome/svgs/solid/torii-gate.svg",
  "./libraries/font-awesome/svgs/solid/tornado.svg",
  "./libraries/font-awesome/svgs/solid/tower-broadcast.svg",
  "./libraries/font-awesome/svgs/solid/tower-cell.svg",
  "./libraries/font-awesome/svgs/solid/tower-observation.svg",
  "./libraries/font-awesome/svgs/solid/tractor.svg",
  "./libraries/font-awesome/svgs/solid/trademark.svg",
  "./libraries/font-awesome/svgs/solid/traffic-light.svg",
  "./libraries/font-awesome/svgs/solid/trailer.svg",
  "./libraries/font-awesome/svgs/solid/train-subway.svg",
  "./libraries/font-awesome/svgs/solid/train-tram.svg",
  "./libraries/font-awesome/svgs/solid/train.svg",
  "./libraries/font-awesome/svgs/solid/transgender.svg",
  "./libraries/font-awesome/svgs/solid/trash-arrow-up.svg",
  "./libraries/font-awesome/svgs/solid/trash-can-arrow-up.svg",
  "./libraries/font-awesome/svgs/solid/trash-can.svg",
  "./libraries/font-awesome/svgs/solid/trash.svg",
  "./libraries/font-awesome/svgs/solid/tree-city.svg",
  "./libraries/font-awesome/svgs/solid/tree.svg",
  "./libraries/font-awesome/svgs/solid/triangle-exclamation.svg",
  "./libraries/font-awesome/svgs/solid/trophy.svg",
  "./libraries/font-awesome/svgs/solid/trowel-bricks.svg",
  "./libraries/font-awesome/svgs/solid/trowel.svg",
  "./libraries/font-awesome/svgs/solid/truck-arrow-right.svg",
  "./libraries/font-awesome/svgs/solid/truck-droplet.svg",
  "./libraries/font-awesome/svgs/solid/truck-fast.svg",
  "./libraries/font-awesome/svgs/solid/truck-field-un.svg",
  "./libraries/font-awesome/svgs/solid/truck-field.svg",
  "./libraries/font-awesome/svgs/solid/truck-front.svg",
  "./libraries/font-awesome/svgs/solid/truck-medical.svg",
  "./libraries/font-awesome/svgs/solid/truck-monster.svg",
  "./libraries/font-awesome/svgs/solid/truck-moving.svg",
  "./libraries/font-awesome/svgs/solid/truck-pickup.svg",
  "./libraries/font-awesome/svgs/solid/truck-plane.svg",
  "./libraries/font-awesome/svgs/solid/truck-ramp-box.svg",
  "./libraries/font-awesome/svgs/solid/truck.svg",
  "./libraries/font-awesome/svgs/solid/tty.svg",
  "./libraries/font-awesome/svgs/solid/turkish-lira-sign.svg",
  "./libraries/font-awesome/svgs/solid/turn-down.svg",
  "./libraries/font-awesome/svgs/solid/turn-up.svg",
  "./libraries/font-awesome/svgs/solid/tv.svg",
  "./libraries/font-awesome/svgs/solid/u.svg",
  "./libraries/font-awesome/svgs/solid/umbrella-beach.svg",
  "./libraries/font-awesome/svgs/solid/umbrella.svg",
  "./libraries/font-awesome/svgs/solid/underline.svg",
  "./libraries/font-awesome/svgs/solid/universal-access.svg",
  "./libraries/font-awesome/svgs/solid/unlock-keyhole.svg",
  "./libraries/font-awesome/svgs/solid/unlock.svg",
  "./libraries/font-awesome/svgs/solid/up-down-left-right.svg",
  "./libraries/font-awesome/svgs/solid/up-down.svg",
  "./libraries/font-awesome/svgs/solid/up-long.svg",
  "./libraries/font-awesome/svgs/solid/up-right-and-down-left-from-center.svg",
  "./libraries/font-awesome/svgs/solid/up-right-from-square.svg",
  "./libraries/font-awesome/svgs/solid/upload.svg",
  "./libraries/font-awesome/svgs/solid/user-astronaut.svg",
  "./libraries/font-awesome/svgs/solid/user-check.svg",
  "./libraries/font-awesome/svgs/solid/user-clock.svg",
  "./libraries/font-awesome/svgs/solid/user-doctor.svg",
  "./libraries/font-awesome/svgs/solid/user-gear.svg",
  "./libraries/font-awesome/svgs/solid/user-graduate.svg",
  "./libraries/font-awesome/svgs/solid/user-group.svg",
  "./libraries/font-awesome/svgs/solid/user-injured.svg",
  "./libraries/font-awesome/svgs/solid/user-large-slash.svg",
  "./libraries/font-awesome/svgs/solid/user-large.svg",
  "./libraries/font-awesome/svgs/solid/user-lock.svg",
  "./libraries/font-awesome/svgs/solid/user-minus.svg",
  "./libraries/font-awesome/svgs/solid/user-ninja.svg",
  "./libraries/font-awesome/svgs/solid/user-nurse.svg",
  "./libraries/font-awesome/svgs/solid/user-pen.svg",
  "./libraries/font-awesome/svgs/solid/user-plus.svg",
  "./libraries/font-awesome/svgs/solid/user-secret.svg",
  "./libraries/font-awesome/svgs/solid/user-shield.svg",
  "./libraries/font-awesome/svgs/solid/user-slash.svg",
  "./libraries/font-awesome/svgs/solid/user-tag.svg",
  "./libraries/font-awesome/svgs/solid/user-tie.svg",
  "./libraries/font-awesome/svgs/solid/user-xmark.svg",
  "./libraries/font-awesome/svgs/solid/user.svg",
  "./libraries/font-awesome/svgs/solid/users-between-lines.svg",
  "./libraries/font-awesome/svgs/solid/users-gear.svg",
  "./libraries/font-awesome/svgs/solid/users-line.svg",
  "./libraries/font-awesome/svgs/solid/users-rays.svg",
  "./libraries/font-awesome/svgs/solid/users-rectangle.svg",
  "./libraries/font-awesome/svgs/solid/users-slash.svg",
  "./libraries/font-awesome/svgs/solid/users-viewfinder.svg",
  "./libraries/font-awesome/svgs/solid/users.svg",
  "./libraries/font-awesome/svgs/solid/utensils.svg",
  "./libraries/font-awesome/svgs/solid/v.svg",
  "./libraries/font-awesome/svgs/solid/van-shuttle.svg",
  "./libraries/font-awesome/svgs/solid/vault.svg",
  "./libraries/font-awesome/svgs/solid/vector-square.svg",
  "./libraries/font-awesome/svgs/solid/venus-double.svg",
  "./libraries/font-awesome/svgs/solid/venus-mars.svg",
  "./libraries/font-awesome/svgs/solid/venus.svg",
  "./libraries/font-awesome/svgs/solid/vest-patches.svg",
  "./libraries/font-awesome/svgs/solid/vest.svg",
  "./libraries/font-awesome/svgs/solid/vial-circle-check.svg",
  "./libraries/font-awesome/svgs/solid/vial-virus.svg",
  "./libraries/font-awesome/svgs/solid/vial.svg",
  "./libraries/font-awesome/svgs/solid/vials.svg",
  "./libraries/font-awesome/svgs/solid/video-slash.svg",
  "./libraries/font-awesome/svgs/solid/video.svg",
  "./libraries/font-awesome/svgs/solid/vihara.svg",
  "./libraries/font-awesome/svgs/solid/virus-covid-slash.svg",
  "./libraries/font-awesome/svgs/solid/virus-covid.svg",
  "./libraries/font-awesome/svgs/solid/virus-slash.svg",
  "./libraries/font-awesome/svgs/solid/virus.svg",
  "./libraries/font-awesome/svgs/solid/viruses.svg",
  "./libraries/font-awesome/svgs/solid/voicemail.svg",
  "./libraries/font-awesome/svgs/solid/volcano.svg",
  "./libraries/font-awesome/svgs/solid/volleyball.svg",
  "./libraries/font-awesome/svgs/solid/volume-high.svg",
  "./libraries/font-awesome/svgs/solid/volume-low.svg",
  "./libraries/font-awesome/svgs/solid/volume-off.svg",
  "./libraries/font-awesome/svgs/solid/volume-xmark.svg",
  "./libraries/font-awesome/svgs/solid/vr-cardboard.svg",
  "./libraries/font-awesome/svgs/solid/w.svg",
  "./libraries/font-awesome/svgs/solid/walkie-talkie.svg",
  "./libraries/font-awesome/svgs/solid/wallet.svg",
  "./libraries/font-awesome/svgs/solid/wand-magic-sparkles.svg",
  "./libraries/font-awesome/svgs/solid/wand-magic.svg",
  "./libraries/font-awesome/svgs/solid/wand-sparkles.svg",
  "./libraries/font-awesome/svgs/solid/warehouse.svg",
  "./libraries/font-awesome/svgs/solid/water-ladder.svg",
  "./libraries/font-awesome/svgs/solid/water.svg",
  "./libraries/font-awesome/svgs/solid/wave-square.svg",
  "./libraries/font-awesome/svgs/solid/weight-hanging.svg",
  "./libraries/font-awesome/svgs/solid/weight-scale.svg",
  "./libraries/font-awesome/svgs/solid/wheat-awn-circle-exclamation.svg",
  "./libraries/font-awesome/svgs/solid/wheat-awn.svg",
  "./libraries/font-awesome/svgs/solid/wheelchair-move.svg",
  "./libraries/font-awesome/svgs/solid/wheelchair.svg",
  "./libraries/font-awesome/svgs/solid/whiskey-glass.svg",
  "./libraries/font-awesome/svgs/solid/wifi.svg",
  "./libraries/font-awesome/svgs/solid/wind.svg",
  "./libraries/font-awesome/svgs/solid/window-maximize.svg",
  "./libraries/font-awesome/svgs/solid/window-minimize.svg",
  "./libraries/font-awesome/svgs/solid/window-restore.svg",
  "./libraries/font-awesome/svgs/solid/wine-bottle.svg",
  "./libraries/font-awesome/svgs/solid/wine-glass-empty.svg",
  "./libraries/font-awesome/svgs/solid/wine-glass.svg",
  "./libraries/font-awesome/svgs/solid/won-sign.svg",
  "./libraries/font-awesome/svgs/solid/worm.svg",
  "./libraries/font-awesome/svgs/solid/wrench.svg",
  "./libraries/font-awesome/svgs/solid/x-ray.svg",
  "./libraries/font-awesome/svgs/solid/x.svg",
  "./libraries/font-awesome/svgs/solid/xmark.svg",
  "./libraries/font-awesome/svgs/solid/xmarks-lines.svg",
  "./libraries/font-awesome/svgs/solid/y.svg",
  "./libraries/font-awesome/svgs/solid/yen-sign.svg",
  "./libraries/font-awesome/svgs/solid/yin-yang.svg",
  "./libraries/font-awesome/svgs/solid/z.svg",
  "./libraries/font-awesome/webfonts/fa-brands-400.ttf",
  "./libraries/font-awesome/webfonts/fa-brands-400.woff2",
  "./libraries/font-awesome/webfonts/fa-regular-400.ttf",
  "./libraries/font-awesome/webfonts/fa-regular-400.woff2",
  "./libraries/font-awesome/webfonts/fa-solid-900.ttf",
  "./libraries/font-awesome/webfonts/fa-solid-900.woff2",
  "./libraries/font-awesome/webfonts/fa-v4compatibility.ttf",
  "./libraries/font-awesome/webfonts/fa-v4compatibility.woff2"
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});`);
  
      let content = zip.generate({type:"blob"});
      saveAs(content, `${appJSON.name.toString().toLowerCase().replace(/ /g,"")}.zip`);

      // remove images after save
      document.querySelectorAll('[data-image]').forEach((child, index) => {
        child.remove();
      });
      return false;
    });
  },

  // initalize application function
  init: () => {
    // init zooming and panning
    // variables
    const canvas        = document.querySelector('[data-canvas]');
    const treeview      = document.querySelector('[data-treeview]');
    const userDevice    = document.querySelector('[data-device]');
    let canvasH         = parseFloat(canvas.clientHeight);
    let canvasW         = parseFloat(canvas.clientWidth / 2);
  
    // init panzoom
    let instance  = panzoom(canvas, {
      bounds: true,
      boundsPadding: 0.1
    });
    let instance2 = panzoom(treeview, {
      bounds: true,
      boundsPadding: 0.1
    });
  
    centerCanvas = () => {
      canvasW = parseFloat(canvas.clientWidth);
      canvasH = parseFloat(canvas.clientHeight);
  
      // ratio for zoom
      let zoomRatio = 0.75;
    
      // to center the canvas horizontally we first need to...
      // get half the body & canvas's width
      let bodyW   = parseFloat(canvas.parentElement.clientWidth / 2);
      canvasW     = parseFloat(canvas.clientWidth / 2);
      // then add them together
      let initialXPos = parseFloat(parseFloat(bodyW) - parseFloat(canvasW) * zoomRatio);
    
      // to center the canvas vertically we first need to...
      // get the size of both the body and the canvas
      let bodyH   = parseFloat(canvas.parentElement.parentElement.clientHeight / 2);
      canvasH     = parseFloat(canvas.clientHeight / 2);
      canvasH     = canvasH / 4.5;
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
    rotateCanvas.onclick = () => {
      canvasW = parseFloat(canvas.clientWidth);
      canvasH = parseFloat(canvas.clientHeight);
  
      canvas.style.width  = canvasH + 'px';
      canvas.style.height = canvasW + 'px';
      centerCanvas();
    };

    // reset canvas dimentions and center it
    resetCanvas = (w, h) => {
      canvasW = w;
      canvasH = h;

      if (canvasW > canvasH) {
        // landscape
        canvas.style.width  = canvasW + 'px';
        canvas.style.height = canvasH + 'px';
        centerCanvas();
        return false;
      }
    
      canvas.style.width  = canvasH + 'px';
      canvas.style.height = canvasW + 'px';
      centerCanvas();
    };
  
    // toggle between mobile and desktop view
    userDevice.onclick = () => {
      if (userDevice.getAttribute('data-device') === 'mobile') {
        userDevice.setAttribute('data-device', 'tablet');
        userDevice.innerHTML = '<i class="fa fa-tablet"></i>';
        
        // reset canvas dimensions and center it
        // dimensions of iPad Mini used
        resetCanvas(1024, 768);
        return false;
      }
      
      if (userDevice.getAttribute('data-device') === 'tablet') {
        userDevice.setAttribute('data-device', 'desktop');
        userDevice.innerHTML = '<i class="fa fa-desktop"></i>';
  
        // reset canvas dimensions and center it
        // 2012 macbook pro dimensions used
        resetCanvas(1440, 834);
        return false;
      }

      if (userDevice.getAttribute('data-device') === 'desktop') {
        userDevice.setAttribute('data-device', 'mobile');
        userDevice.innerHTML = '<i class="fa fa-mobile"></i>';
  
        // reset canvas dimensions and center it
        // dimensions of Galaxy S8+ used
        resetCanvas(360, 740);
        return false;
      }
    };

    // init preview
    app.updatePreview();
    
    // toggle between light and dark theme
    theme.onchange = () => {
      const elm  = document.querySelector('html[data-theme]');
      const icon = document.querySelectorAll('label[for=theme] i');

      if (elm.getAttribute('data-theme') === 'dark') {
        elm.setAttribute('data-theme', 'light');
        previewElm.setAttribute('data-theme', 'light');

        // update icon
        icon.forEach((child) => {
          child.classList.add('fa-sun');
          child.classList.remove('fa-moon');
        });
      } else {
        elm.setAttribute('data-theme', 'dark');
        previewElm.setAttribute('data-theme', 'dark');

        // update icon
        icon.forEach((child) => {
          child.classList.remove('fa-sun');
          child.classList.add('fa-moon');
        });
      }

      app.updateStorage();
      app.updatePreview();
    };

    // show/hide menus
    let menuBtns = document.querySelectorAll('[data-open]');
    menuBtns.forEach((child) => {
      child.onclick = () => {
        let getElm = child.getAttribute('data-open');
        let setElm = document.querySelector(`[data-opened=${getElm}]`);
        (setElm.setAttribute('open', true)) ? setElm.setAttribute('open', false) : setElm.setAttribute('open', true);

        // hide treeview
        if (getElm === 'functions' || 'elmSettings') {
          let treeview = document.querySelector('[data-treeview]');
          treeview.classList.add('hidden');
          instance2.pause();
        }
      };
    });

    // close visible dialog
    document.querySelectorAll('dialog').forEach((child) => {
      child.onclick = (e) => {
        // if this dialog is within the editing section
        if (child.getAttribute('data-opened') === 'functions' || 'elmSettings') {
          let treeview = document.querySelector('[data-treeview]');
          treeview.classList.remove('hidden');
          instance2.resume();
        }

        // if button is clicked
        if (e.target.tagName.toLowerCase() === 'button' || 'i') {
          if (e.target.hasAttribute('aria-close') || e.target.classList.contains('fa-times') || e.target.classList.contains('fa-angle-left')) {
            // detect if closing the sitemap
            if (e.target.closest('dialog').getAttribute('data-opened') === 'sitemap') {
              // grab sitemap code
              appJSON.html = document.querySelector('[data-body]').innerHTML.replace(/data-selected="true"/g, '');
              app.updatePreview();
            }

            // hide modal if visible
            if (document.querySelector('[data-modify].block')) {
              document.querySelector('[data-modify].block').classList.add('hidden');
              document.querySelector('[data-modify].block').classList.remove('block');
            }

            e.target.closest('dialog').setAttribute('open', false);
          }
        }

        // if dialog is clicked
        if (e.target.tagName.toLowerCase() === 'dialog') {
          if (e.target.closest('dialog').getAttribute('data-opened') === 'sitemap') {
            // grab sitemap code
            appJSON.html = document.querySelector('[data-body]').innerHTML.replace(/data-selected="true"/g, '');
            app.updatePreview();
          }

          // hide modal if visible
          if (document.querySelector('[data-modify].block')) {
            document.querySelector('[data-modify].block').classList.add('hidden');
            document.querySelector('[data-modify].block').classList.remove('block');
          }

          e.target.setAttribute('open', false);
          return false;
        }
      };
    });

    // grab source code for libraries
    charts.onchange = () => {
      app.checkedLibsArr.data = [];
      if (charts.checked) {
        let urls  = ["libraries/chartjs/Chart.min.js"];
        app.checkedLibsArr.id = urls;
        for (let i of urls) {
          getFile(i, (source) => {
            app.checkedLibsArr.data = [...app.checkedLibsArr.data, source];
          });
        }
      }

      app.updateStorage();
      app.updatePreview();
    };

    // after everything has been loaded trigger change on css to grab the source code
    charts.onchange();
  },

  // update localStorage
  updateStorage: () => {

  }
};

// check if FileReader API is available
if (!window.FileReader) {
  alert('File API & FileReader API not supported!');
}

// initialize application
app.init();