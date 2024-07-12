document.addEventListener('DOMContentLoaded', function() {
    // Use event delegation to handle click events on dynamically created elements
    document.querySelector('#preview-content').addEventListener('click', function(event) {
      if (event.target.closest('.mmd-clipboard-copy-container')) {
        // Get the value from the ClipboardButton element
        const clipboardButton = event.target.closest('.mmd-clipboard-copy-container').querySelector('.ClipboardButton');
        const valueToCopy = clipboardButton.getAttribute('value');
  
        // Use the Clipboard API to copy text to the clipboard
        navigator.clipboard.writeText(valueToCopy).then(function() {
          alert('CSS code copied to clipboard!');
          // Optional: Toggle the check icon visibility
          const copyIcon = clipboardButton.querySelector('.mmd-clipboard-copy-icon');
          const checkIcon = clipboardButton.querySelector('.mmd-clipboard-check-icon');
          copyIcon.style.display = 'none';
          checkIcon.style.display = 'inline';
        }).catch(function(error) {
          console.error('Error copying text: ', error);
        });
      }
    });
  });
  