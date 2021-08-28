// background.js
var estTraduit;
// Called when the user clicks on the browser action.
browser.browserAction.onClicked.addListener(function(tab) {
    
   browser.browserAction.setIcon({
     path: "iconeOk.png"
      }) 
  // Send a message to the active tab
  browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    browser.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
    estTraduit = true;
});

function updateActiveTab(tabs) {
browser.browserAction.setIcon({
     path: "icone2.png"
      }) 
  
   estTraduit = false;
         
  }


// listen to tab URL changes
browser.tabs.onUpdated.addListener(updateActiveTab);

// listen to tab switching
browser.tabs.onActivated.addListener(updateActiveTab);

// listen for window switching
browser.windows.onFocusChanged.addListener(updateActiveTab);