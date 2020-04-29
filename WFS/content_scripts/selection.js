chrome.runtime.sendMessage({
	type : "check"
}, function (res) {
	if (res.running) {
		$(document).ready(function(){
			console.log("hooked selection");
			$("h1[class='ufss-widget-title']").text("Schedule your order: Whole Foods Bot Running! Last Updated: " + new Date($.now()));
			setTimeout(function(){ 
				console.log("refresh");
				window.location.href = window.location.href;
			}, 1000*60);
			setTimeout(function(){ 
				for(var i = 0; i < $("div[class='ufss-slotselect-container'] button[aria-pressed='false']").length; i++){
					$("div[class='ufss-slotselect-container'] button[aria-pressed='false']")[i].click();
					
					setTimeout(function(){ 
						window.location.href = window.location.href;
					}, 1000*6);	
				}
				// $("button[aria-pressed='false']")[0].attr('aria-pressed', 'true');
				
				setTimeout(function(){ 
					for(var i = 0; i < $("input[class='a-button-input']").length; i++){
						$("input[class='a-button-input']")[i].click();
					}
				}, 1000*3);
			}, 1000*1);
		});
	} else {
		$(document).ready(function(){
			console.log("hooked selection");
			$("h1[class='ufss-widget-title']").text("Schedule your order: Whole Foods Bot NOT Running (May Need to Refresh Page)");
		});
	}
});