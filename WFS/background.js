running = false
chrome.runtime.onMessage.addListener(function (r, s, sendResponse) {
	if (r.type == "check") {
		sendResponse({
			running : running
		});
	}
	if (r.type == "run") {
		run();
	}
	if (r.type == "off") {
		stop();
	}
	return true;
});

function run() {
	running = true;
	console.log('running')
	chrome.storage.sync.set({
		running : true
	});
	chrome.browserAction.setIcon({path:"static/img_running.png"});
	chrome.tabs.create({
		url : "https://www.amazon.com/gp/buy/shipoptionselect/handlers/display.html"
	});
}

function stop() {
	running = false;
	chrome.storage.sync.set({
		running : false
	});
	chrome.browserAction.setIcon({path:"static/img_def.png"});
}