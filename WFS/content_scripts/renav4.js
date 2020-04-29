chrome.runtime.sendMessage({
	type : "check"
}, function (res) {
	if (res.running) {
		$(document).ready(function(){
			console.log("hooked renav4");
			setTimeout(function(){$("input[aria-labelledby='subsContinueButton-announce'")[0].click();}, 1000);
		});
	}
});