var bg		= opera.extension.bgProcess;
var tt		= bg.tt;
var popup	= new Popup();

window.addEventListener('DOMContentLoaded', function() {
	popup.addLists();
	
	$('.item').click(function() {
		popup.toggleList($(this));
	});
});
