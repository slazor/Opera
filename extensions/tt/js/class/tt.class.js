function TT() {
	
	// Resize popup window height
	this.resizePopup = function(height) {
		if (height) {
			window.button.popup.height = height;
		}
	}
	
	// Get a single list
	this.getSingleList = function(listId) {
		var list = localStorage.getItem('list_'+listId);
		if(list != undefined) {
			return JSON.parse(list);
		}
	}
	
	// Gets all lists
	this.getListData = function() {
		var lists = JSON.parse(widget.preferences.lists);
		var returnLists = new Array();
		
		for(var i in lists.lists) {
			var list = localStorage.getItem('list_'+lists.lists[i]);
			if(list != undefined) {
				returnLists[returnLists.length] = JSON.parse(localStorage.getItem('list_'+lists.lists[i]));
			}
		}
		
		if(returnLists == '') {
			returnLists = false;
		}
		
		return returnLists;
	}
	
	// Add token to api send data
	this.addToken = function(data) {
		if(data == false) {
			return {'request_token':widget.preferences.request_token};
		} else {
			data.request_token = widget.preferences.request_token;
			return data;
		}
	}
	
	// Makes an array into a string for api send data
	this.makeString = function(arr) {
		var string = '';
		for(var i in arr) {
			string = string + i + '=' + arr[i];
		}
		return string;
	}
	
	// Updates localstorage
	this.updateLocalStorage = function(lists) {
		// Update available lists
		var listIds = {};
		listIds.lists = lists.list_ids
		listIds = JSON.stringify(listIds);
		widget.preferences.lists = listIds;
		
		// Update list data
		for(var i in lists.lists) {
			var listId = lists.lists[i].list_id;
			localStorage.setItem('list_'+listId, JSON.stringify(lists.lists[i]));
		}
		
	}
	
	
	/* API functions */
	
	// Sends request to API for token
	this.userLogin = function(data) {
		var call = api.apiCall('POST', 'User/Login/', data);
		if(call.token) {
			return call.token;
		} else {
			console.log(call);
			return call;
		}
		
	}
	
	// Get users information from API
	this.userGetInfo = function(token) {
		var data = JSON.stringify({'request_token':token});
		
		return api.apiCall('POST', 'User/', data);
	}
	
	// Get all users lists from API
	this.getLists = function() {
		var data = JSON.stringify(this.addToken(false));
		var call = api.apiCall('POST', 'Lists/', data);
		this.updateLocalStorage(call);
		return call;
	}
	
	// Adds a list through the API
	this.addList = function(data) {
		data = JSON.stringify(this.addToken(data));
		var call = api.apiCall('POST', 'Lists/Add/', data);
		var lists = this.getLists();
		return lists;
	}
	
	// Updates an existing list through the API
	this.updateList = function(listId, data) {
		data = JSON.stringify(this.addToken(data));
		var call = api.apiCall('POST', 'Lists/Update/'+listId+'/', data);
		return call.status;
	}
	

}