dialogs = () => {
  // variables
  const openDialog   = document.querySelectorAll('[data-opendialog]')
  const dialog       = document.querySelectorAll('[data-dialog]')
  const modalContent = document.querySelectorAll('[data-modal]')
  const closeDialog  = document.querySelectorAll('[data-dialog] > article > a:first-child')

  // open and close dialogs
  for (i = 0; i < openDialog.length; i++) {
    let dialogType = openDialog[i].getAttribute('data-opendialog')
    let openModal  = openDialog[i].getAttribute('data-open')

    openDialog[i].onclick = () => {
      let getDialog = document.querySelector('[data-dialog='+ dialogType +']')

      // open dialog
      getDialog.classList.add('block')
      getDialog.classList.remove('hidden')

      // if has open=modal name
      modalContent.forEach(child => {
        child.classList.add('hidden')
      })
      if (openModal) {
        if (openModal === openModal) {
          document.querySelector('[data-modal='+ openModal +']').classList.remove('hidden')
        }
      }

      // close dialog
      for (i = 0; i < closeDialog.length; i++) {
        getDialog.onclick = (e) => {
          if (e.target.getAttribute('data-dialog') || e.target.getAttribute('data-close')) {
            getDialog.classList.add('hidden')
          }
        }
      }
    }
  }
}
dialogs()