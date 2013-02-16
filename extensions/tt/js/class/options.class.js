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
		var data = '<table>';

		if(lists != false) {
			data = data + '<thead><th class="head-name">List name</th><th>Last update</th><th></th></thead>';
			for(var i in lists) {
				data = data + this.formatList(lists[i], true);
			}
		} else {
			var none = new Object();
			none.list_name = 'You have no lists!';
			data = data + this.formatList(none, false);
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
			data = data + '<td class="list-item edit-list"><a href="addeditlist.html?list='+list.list_id+'">Edit</a></td>';
		}
		data = data + '</tr>';
		return data;
	}
	
	this.addTag = function(tag) {
		tag = tag.trim();
		if(tag != undefined && tag != '') {
			$('#tag-list').append('<li><span class="data">'+tag+' </span> <span class="remove-tag">Remove</span></li>');
		}
	}
	
	this.saveForm = function() {
		if(this.addTagsToForm()) {
			var form = $('#list-form').serializeFormJSON();
			var listId = $('#list-id').val().trim();

			if(listId != '') {
				var status = tt.updateList(listId, form);
				alert(status);
			} else {
				var status = tt.addList(form);
				alert("GOT ALL LISTS");
			}
			
		} else {
			alert("NO TAGS");
		}
	}
	
	this.addTagsToForm = function() {
		var amount = 0;
		$tagField = $('#tags');
		
		$('#tag-list li').each(function(i, data) {
			$tagField.val($tagField.val()+$(this).find('.data').html().trim()+'|');
			amount++;
		});
		
		if(amount > 0) {
			return true;
		}
		return false;
	}

}