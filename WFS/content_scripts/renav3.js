chrome.runtime.sendMessage({
	type : "check"
}, function (res) {
	if (res.running) {
		$(document).ready(function(){
			console.log("hooked renav3");
			setTimeout(function(){$("a[name='proceedToCheckout'")[0].click();}, 1000);	
		});
	}
});