function TT() {

	this.resizePopup = function(height) {
		if (height) {
			window.button.popup.height = height;
		}
	}

	this.userLogin = function(data) {
		var call = api.apiCall('POST', 'User/Login/', data);
		if(call.token) {
			return call.token;
		} else {
			console.log(call);
			return call;
		}
		
	}
	
	this.userGetInfo = function(token) {
		return api.apiCall('GET', 'User/', token);
	}
	
	this.getSingleList = function(listId) {
		var list = localStorage.getItem('list_'+listId);
		if(list != undefined) {
			return JSON.parse(list);
		}
	}
	
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
	
	this.makeString = function(arr) {
		var string = '';
		for(var i in arr) {
			string = string + i + '=' + arr[i];
		}
		return string;
	}

}