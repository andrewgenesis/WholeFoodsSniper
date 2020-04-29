chrome.runtime.sendMessage({
	type : "check"
}, function (res) {
	if (res.running) {
		$(document).ready(function(){
			console.log("hooked renav2");
			setTimeout(function(){$("input[class='a-button-input'")[0].click();}, 1000);	
		});
	}
});