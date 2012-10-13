var bg		= opera.extension.bgProcess;
var tt			= bg.tt;
var popup	= new Popup();

popup.addExampleData();
	
window.addEventListener('DOMContentLoaded', function() {

	popup.addLists();
		
	$('.item').click(function() {
		popup.toggleList($(this));
	});
	
});
