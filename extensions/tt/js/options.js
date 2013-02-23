var bg	= opera.extension.bgProcess;
var tt	= bg.tt;
var op	= new Options();

op.isLoggedIn();

window.addEventListener('DOMContentLoaded', function() {
	var lists = tt.getListData();
	op.addLists(lists);
}, false);