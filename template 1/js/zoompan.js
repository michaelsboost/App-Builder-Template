initZoomPan = () => {
  // variables
  const rotateCanvas  = document.querySelector('[data-rotate]')
  const userDevice    = document.querySelector('[data-device]')
  let canvas          = document.querySelector('[data-canvas]')
  let canvasH         = parseFloat(canvas.clientHeight)
  let canvasW         = parseFloat(canvas.clientWidth / 2)

  // init panzoom
  let instance = panzoom(canvas, {
    bounds: true,
    boundsPadding: 0.1
  })

  centerCanvas = () => {
    canvasW = parseFloat(canvas.clientWidth)
    canvasH = parseFloat(canvas.clientHeight)

    // detect if canvas is in portrait mode
    if (canvasW < canvasH) {
      // ratio for zoom
      let zoomRatio = 0.75
    
      // to center the canvas horizontally we first need to...
      // get half the body & canvas's width
      let bodyW   = parseFloat(document.body.clientWidth / 2)
      canvasW = parseFloat(canvas.clientWidth / 2)
      // then add them together
      let initialXPos = parseFloat(parseFloat(bodyW) - parseFloat(canvasW) * zoomRatio)
    
      // to center the canvas vertically we first need to...
      // get the size of both the body and the canvas
      let bodyH   = parseFloat(document.body.clientHeight)
      bodyH   = bodyH / 2
      canvasH = canvasH / 2
      // then add them together
      let initialYPos = parseFloat(parseFloat(canvasH) - parseFloat(bodyH) * zoomRatio)
    
      // set initial zoom
      instance.zoomAbs(
        initialXPos, // initial x position
        initialYPos, // initial y position
        zoomRatio // initial zoom
      );
      instance.moveTo(initialXPos, initialYPos);
      return false
    }

    // ratio for zoom
    let zoomRatio = 0.75

    // to center the canvas horizontally we first need to...
    // get half the body & canvas's width
    let bodyW   = parseFloat(document.body.clientWidth / 2)
    canvasW = parseFloat(canvas.clientWidth / 2)
    // then add them together
    let initialXPos = parseFloat(parseFloat(bodyW) - parseFloat(canvasW) * zoomRatio)

    // to center the canvas vertically we first need to...
    // get the size of both the body and the canvas
    let bodyH   = parseFloat(document.body.clientHeight)
    bodyH   = bodyH / 2
    canvasH = canvasH / 2
    // then add them together
    let initialYPos = parseFloat(parseFloat(bodyH) - parseFloat(canvasH) * zoomRatio)

    // set initial zoom
    instance.zoomAbs(
      initialXPos, // initial x position
      initialYPos, // initial y position
      zoomRatio // initial zoom
    );
    instance.moveTo(initialXPos, initialYPos);
  }
  centerCanvas()

  // enable disable zoom/pan
  const zoomIcon = document.querySelector('[data-zoom]')
  zoomIcon.onclick = () => {
    if (zoomIcon.getAttribute('data-zoom') === 'true') {
      canvas.selection = false;
      instance.pause();
      zoomIcon.innerHTML = '<i class="fa fa-light fa-magnifying-glass-minus"></i>'
      zoomIcon.setAttribute('data-zoom', false)
      zoomIcon.classList.remove('text-blue-500')
    } else {
      canvas.selection = true;
      instance.resume();
      zoomIcon.innerHTML = '<i class="fa fa-light fa-magnifying-glass-plus"></i>'
      zoomIcon.setAttribute('data-zoom', true)
      zoomIcon.classList.add('text-blue-500')
    }
  }

  // rotate canvas
  rotateCanvas.onclick = () => {
    canvasW = parseFloat(canvas.clientWidth)
    canvasH = parseFloat(canvas.clientHeight)

    canvas.style.width  = canvasH + 'px'
    canvas.style.height = canvasW + 'px'
    centerCanvas()
  }

  // toggle between mobile and desktop view
  userDevice.onclick = () => {
    if (userDevice.getAttribute('data-device') === 'mobile') {
      userDevice.setAttribute('data-device', 'desktop')
      userDevice.innerHTML = '<i class="fa fa-desktop"></i>'
      
      let multiple = 4
    
      if (canvasW > canvasH) {
        // landscape
        canvas.style.width  = canvasW * multiple + 'px'
        canvas.style.height = canvasH * multiple + 'px'
        centerCanvas()
        return false
      }
    
      canvas.style.width  = canvasH * multiple + 'px'
      canvas.style.height = canvasW * multiple + 'px'
      centerCanvas()
    } else {
      userDevice.setAttribute('data-device', 'mobile')
      userDevice.innerHTML = '<i class="fa fa-mobile"></i>'

      if (canvasW > canvasH) {
        // landscape
        canvas.style.width  = canvasH + 'px'
        canvas.style.height = canvasW + 'px'
        centerCanvas()
        return false
      }
    
      canvas.style.width  = canvasW + 'px'
      canvas.style.height = canvasH + 'px'
      centerCanvas()
    }
  }
}
initZoomPan()