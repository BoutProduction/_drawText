$(function () {
	window.addEventListener('message', function (event) {
		var d = event.data 
		var a = event.data.action
		var t = event.data.type

		if (a == "textUI") {
			if (d.state) {
				$(".text-ui").removeClass("fade-out").addClass("fade-in").css("display", "flex");
				$("#ui-key").text(d.key);
				$("#ui-desc").text(d.desc);
			} else {
				$(".text-ui").removeClass("fade-in").addClass("fade-out");
				setTimeout(function() {
					$(".text-ui").css("display", "none");
				}, 300);
			}			
		}

	});
});