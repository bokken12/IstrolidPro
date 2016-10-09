var s = document.createElement('change');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('change.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);
change.recurse_colors();