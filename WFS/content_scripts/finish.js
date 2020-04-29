chrome.runtime.sendMessage({
	type : "check"
}, function (res) {
	if (res.running) {
		console.log("hooked finish");
		setTimeout(function(){ 
			$("input[name=\"placeYourOrder1\"]")[0].click();
			chrome.runtime.sendMessage({type: "off"}, function(res){});
		}, 1000);
	}
});