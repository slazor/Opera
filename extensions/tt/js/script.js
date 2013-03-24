var bg		= opera.extension.bgProcess;
var tt		= bg.tt;
var popup	= new Popup();

window.addEventListener('DOMContentLoaded', function() {
	popup.isLoggedIn();
	popup.addLists();
	
	$('.list .title').bind('click', function() {
		popup.toggleList($(this).parent('.list').find('.items'));
	});

});
