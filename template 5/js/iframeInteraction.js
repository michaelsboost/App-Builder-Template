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
  
  // Override console methods to capture all console output
  const originalConsoleLog = console.log;
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;
  const originalConsoleInfo = console.info;
  const originalConsoleTable = console.table;
  
  console.log = function(...args) {
    window.parent.postMessage({ type: 'consoleLog', message: args }, '*');
    originalConsoleLog.apply(console, args);
  };
  
  console.error = function(...args) {
    window.parent.postMessage({ type: 'consoleError', message: args }, '*');
    originalConsoleError.apply(console, args);
  };
  
  console.warn = function(...args) {
    window.parent.postMessage({ type: 'consoleWarn', message: args }, '*');
    originalConsoleWarn.apply(console, args);
  };
  
  console.info = function(...args) {
    window.parent.postMessage({ type: 'consoleInfo', message: args }, '*');
    originalConsoleInfo.apply(console, args);
  };
  
  console.table = function(data, columns) {
    window.parent.postMessage({ type: 'consoleTable', message: { data, columns } }, '*');
    originalConsoleTable.apply(console, [data, columns]);
  };
});