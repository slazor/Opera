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
	
	this.isAddList = function() {
		if(this.getVar()['list'] == undefined) {
			return true;
		}
		return false;
	}
	
	this.setPageTitle = function(title,headline) {
		$('title').text(title);
		$('h1').text(headline);
	}
	
	// Adds lists to options page
	this.addLists = function(lists) {
		//var data = '<table>';
		var data = '';

		if(lists != false) {
			//data = data + '<thead><th class="head-name">List name</th></thead>';
			for(var i in lists) {
				data = data + this.formatList(lists[i], true);
			}
		} else {
			var none = new Object();
			none.list_name = 'You have no lists!';
			data = data + this.formatList(none, false);
		}
		//data = data + '</table>';
		
		$('#container').find('tbody').append(data);
		
		return true;
	}

	// Generates html output for list item
	this.formatList = function(list, show) {
		var data = '';
		data = data + '<tr class="item">';
		data = data + '<td class="list-item list-name">'+list.title+'</td>';
		//if(show) {
		//	data = data + '<td class="list-item last-update">2012-10-14</td>';
		//}
		data = data + '</tr>';
		return data;
	}

}