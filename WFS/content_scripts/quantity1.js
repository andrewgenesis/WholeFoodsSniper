chrome.runtime.sendMessage({
	type : "check"
}, function (res) {
	if (res.running) {
		$(document).ready(function(){
			console.log("hooked quantity1");
			setTimeout(function(){
				$("input[name='continue-top']")[0].click();
			}, 1000);
		});
	}
});