function Popup() {

	this.addLists = function() {
		var lists = tt.getListData();

		for(var i in lists) {
			var list = lists[i]
			var data = '<li class="item">'; 
			data = data + '<h3 class="item-title">'+list.title+'</h3>';
			data = data + '<div class="item-details">';
			for(var j in list.items) {
				for(var k in list.items[j]) {
					var item = list.items[j][k];
					data = data + '<a style="display: block;" href="'+item.link+'">'+item.title+'</a>';
				}
			}
			data = data + '</div>';
			data = data + '</li>';
			$('#container').append(data);
		}

		tt.resizePopup(document.body.offsetHeight);
	}

	this.toggleList = function($this) {
		var step = 0;
		$this.find('.item-details').stop().animate({height: 'toggle'}, {
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