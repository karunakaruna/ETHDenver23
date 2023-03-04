function getURL() {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        // Get the URL of the active tab
        var url = tabs[0].url;

        // Save the URL to a string
        var urlStr = url.toString();

        // Set the URL of the current tab to the value of the target URL string
        chrome.tabs.update({ url: targetUrl });

        // Use the URL string as needed
        console.log("url: " + urlStr);
    });
}

