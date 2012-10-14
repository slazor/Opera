var bg = opera.extension.bgProcess;
var tt = bg.tt;

window.addEventListener('DOMContentLoaded', function() {
	isLoggedIn();
	
	var lists = tt.getListData();
	addLists(lists);

}, false);


// Checks if loggedin and redirects to login page if not
function isLoggedIn() {
	if(widget.preferences.request_token == undefined) {
		window.location.href = 'login.html';
	}
}

// Adds lists to options page
function addLists(lists) {

	var data = '<table>';

	if(lists != false) {
		data = data + '<thead><th class="head-name">List name</th><th>Last update</th><th></th></thead>';
		for(var i in lists) {
			data = data + formatList(lists[i], true);
		}
	} else {
		var none = new Object();
		none.list_name = 'You have no lists!';
		data = data + formatList(none, false);
	}
	data = data + '</table>';
	
	$('#container').append(data);
	
	return true;
}

// Generates html output for list item
function formatList(list, show) {
	var data = '';
	data = data + '<tr class="item">';
	data = data + '<td class="list-item list-name">'+list.list_name+'</td>';
	if(show) {
		data = data + '<td class="list-item last-update">2012-10-14</td>';
		data = data + '<td class="list-item edit-list"><a href="">Edit</a></td>';
	}
	data = data + '</tr>';
	return data;
}