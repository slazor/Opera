var bg	= opera.extension.bgProcess;
var tt		= bg.tt;
var op	= new Options();

window.addEventListener('DOMContentLoaded', function() {
	op.isLoggedIn();
	var lists = tt.getLists();
	opera.postError(lists);
	//var lists = tt.getListData();
	//op.addLists(lists);

}, false);