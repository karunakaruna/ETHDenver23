function injectTheScript() {
    
    console.log("overlay toggled")
    
    // Query the active tab, which will be only one tab and inject the script in it.
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['iframe.bundle.js']})
    })
}

document.getElementById('loadiFrame').addEventListener('click', injectTheScript)