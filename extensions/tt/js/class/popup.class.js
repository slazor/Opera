function Popup() {
	
	// Checks if loggedin and redirects to login page if not
	this.isLoggedIn = function() {
		if(widget.preferences.request_token == undefined) {
			$('#loggedin').hide();
			$('#login').show();
			tt.resizePopup(document.body.offsetHeight);
		}
	}

	this.addLists = function() {
		var lists = tt.getListData();

		for(var i in lists) {
			var list = lists[i]
			var data = '<div class="list">'; 
			data = data + '<div class="title"><h2><i class="icon icon-list"></i> '+list.title+'</h2></div>';
			data = data + '<ul class="items">';
			for(var j in list.items) {
				for(var k in list.items[j]) {
					var item = list.items[j][k];
					data = data + '<li><a href="'+item.link+'"><i class="icon icon-file"></i> '+item.title+'</a></li>';
				}
			}
			data = data + '</ul>';
			data = data + '</div>';
			$('.lists').append(data);
		}

		tt.resizePopup(document.body.offsetHeight);
	}

	this.toggleList = function($this) {
		var step = 0;
		$this.stop().animate({height: 'toggle'}, {
			duration: 100, 
			step: function(now,fx) {
				if(step > 0) {
					tt.resizePopup(document.body.offsetHeight);
				}
				step++;
			}, 
			complete: function() {
				step = 0;
			}
		});
	}

}