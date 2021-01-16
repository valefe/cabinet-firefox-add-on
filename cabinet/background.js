browser.runtime.onMessage.addListener(function(request, sender) {
  browser.tabs.create({url: request.link})
});
