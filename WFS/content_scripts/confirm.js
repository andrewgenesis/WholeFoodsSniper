chrome.runtime.sendMessage({
	type : "check"
}, function (res) {
	if (res.running) {
		console.log("hooked confirm");
		setTimeout(function(){ 
			$("input#continue-top").click();
			setTimeout(function(){ 
				window.location.href = window.location.href;
			}, 1000*2);	
		}, 1000);
	}
});