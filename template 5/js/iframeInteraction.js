// Script to handle drop event within iframe
window.addEventListener('DOMContentLoaded', () => {
  const droppable = document.body; // Change this selector to target the appropriate element where you want to drop the components
  droppable.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
  droppable.addEventListener('drop', (event) => {
    event.preventDefault();
    // Handle drop operation within iframe
    // You can access the dragged element's data from event.dataTransfer.getData()
    const draggedData = event.dataTransfer.getData('text/plain');
    console.log('Element dropped:', draggedData);
  });
});

// Listen for messages from the parent window
window.addEventListener('message', event => {
  const { type, styleType } = event.data;
  if (type === 'applyTextStyle') {
    app.applyTextStyle(styleType);
  }
});