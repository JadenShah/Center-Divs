document.addEventListener('DOMContentLoaded', function () {
    var centerDivsBtn = document.getElementById('centerDivsBtn');
  
    if (centerDivsBtn) {
      centerDivsBtn.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'centerDivs' });
        });
  
        this.classList.toggle('clicked');
      });
    } else {
      console.error('Element with ID "centerDivsBtn" not found.');
    }
  });