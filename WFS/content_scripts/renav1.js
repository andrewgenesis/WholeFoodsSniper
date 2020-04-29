chrome.runtime.sendMessage({
	type : "check"
}, function (res) {
	if (res.running) {
		$(document).ready(function(){
			console.log("hooked renav1");
			setTimeout(function(){ $("a[id='nav-cart']")[0].click();}, 1000);
		});
	}
});