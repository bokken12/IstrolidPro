// var app = chrome.runtime.getBackgroundPage();

function hello() {
  chrome.tabs.executeScript({
    file: 'start_change.js'
  }); 
}

document.getElementById('clickme').addEventListener('click', hello);