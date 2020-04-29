
$(function () {
	$('#options-btn').click(function () {
		var optionsUrl = chrome.extension.getURL('options/options.html');

		chrome.tabs.query({
			url : optionsUrl
		}, function (tabs) {
			if (tabs.length) {	
				chrome.tabs.update(tabs[0].id, {
					active : true
				});
			} else {
				chrome.tabs.create({
					url : optionsUrl
				});
			}
		})
	})
	
	$("#start-btn").click(function (e) {
		$('#start-btn').addClass('hidden')
		$('#stop-btn').removeClass('hidden')
		var bgPage = chrome.extension.getBackgroundPage();
		bgPage.run();
	})
	$('#stop-btn').click(function () {
		$('#stop-btn').addClass('hidden')
		$('#start-btn').removeClass('hidden')
		var bgPage = chrome.extension.getBackgroundPage();
		bgPage.stop();
	})

	chrome.runtime.onMessage.addListener(function (req, sender, res) {
		if (req.type == 'off') {
			$('#stop-btn').addClass('hidden')
			$('#start-btn').removeClass('hidden')
			res.running = false;
		}

	})

	function check() {
		chrome.runtime.sendMessage({
			type : "check"
		}, function (res) {
			if (res.running) {
				$('#start-btn').addClass('hidden')
				$('#stop-btn').removeClass('hidden')
			}

		});
	}
	check();
});