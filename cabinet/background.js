browser.commands.onCommand.addListener((command) => {
    if (command == "open-popup"){
      browser.browserAction.openPopup()
    }
});

browser.runtime.onMessage.addListener(function(request, sender) {
  browser.tabs.create({url: request.link})
});
