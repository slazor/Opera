var bg	= opera.extension.bgProcess;
var tt		= bg.tt;
var op	= new Options();

window.addEventListener('DOMContentLoaded', function() {
	op.isLoggedIn();
	
	var listId = op.getVar()['list'];
	var list = tt.getSingleList(listId);
	
	$('#list-title').text(list.list_name);
	
}, false);