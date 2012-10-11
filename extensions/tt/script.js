window.addEventListener('DOMContentLoaded', function() {
	var bg = opera.extension.bgProcess;
	bg.resizePopup(document.body.offsetHeight);
});

var step = 0;

jQuery(function($) {
	var bg = opera.extension.bgProcess;
	
	$('.item').click(function() {
		$(this).find('.item-details').animate({height: 'toggle'}, {
			duration: 200, 
			step: function(now,fx) {
				if(step > 0) {
					bg.resizePopup(document.body.offsetHeight);
				}
				step++;
			}, 
			complete: function() {
				step = 0;
			}
		});
	});
	
});
