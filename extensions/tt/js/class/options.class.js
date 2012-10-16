function Options() {

	// Checks if loggedin and redirects to login page if not
	this.isLoggedIn = function() {
		if(widget.preferences.request_token == undefined) {
			window.location.href = 'login.html';
		}
	}
	
	// Return GET variable
	this.getVar = function() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
			vars[key] = value;
		});
		return vars;
	}
	
	// Adds lists to options page
	this.addLists = function(lists) {
		var data = '<table>';

		if(lists != false) {
			data = data + '<thead><th class="head-name">List name</th><th>Last update</th><th></th></thead>';
			for(var i in lists) {
				data = data + this.formatList(lists[i], true);
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
	this.formatList = function(list, show) {
		var data = '';
		data = data + '<tr class="item">';
		data = data + '<td class="list-item list-name">'+list.list_name+'</td>';
		if(show) {
			data = data + '<td class="list-item last-update">2012-10-14</td>';
			data = data + '<td class="list-item edit-list"><a href="editlist.html?list='+list.list_id+'">Edit</a></td>';
		}
		data = data + '</tr>';
		return data;
	}

}