function Popup() {

	this.addExampleData = function() {
		if(widget.preferences.lists == undefined) {
			widget.preferences.lists = '{"lists":[1,2]}';
		}
		
		var install_one = localStorage.getItem('list_1');
		if(install_one == undefined) {
			localStorage.setItem('list_1', '{"list_id":1,"list_name":"Gintama","list_data":[{"title":"[HorribleSubs] Gintama - 254 [720p].mkv","link":"Oct 11 2012, 10:05 UTC"},{"title":"[HorribleSubs] Gintama - 253 [720p].mkv","link":"Oct 04 2012, 10:05 UTC"},{"title":"[HorribleSubs] Gintama - 252 [720p].mkv","link":"Sept 28 2012, 10:05 UTC"}]}');
		}
		
		var install_two = localStorage.getItem('list_2');
		if(install_two == undefined) {
			localStorage.setItem('list_2', '{"list_id":2,"list_name":"Little Busters!","list_data":[{"title":"[Hatsuyuki]_Little_Busters!_-_03_[10bit][1280x720][071B9D84].mkv","link":"Oct 9 2012, 23:30 UTC"},{"title":"[Hatsuyuki]_Little_Busters!_-_02_[10bit][1280x720][071B9D84].mkv","link":"Oct 2 2012, 23:30 UTC"},{"title":"[Hatsuyuki]_Little_Busters!_-_01_[10bit][1280x720][071B9D84].mkv","link":"Sept 26 2012, 10:05 UTC"}]}');
		}
	}

	this.addLists = function() {
		var lists = tt.getListData();

		for(var i in lists) {
			var data = '<li class="item">'; 
			data = data + '<h3 class="item-title">'+lists[i].list_name+'</h3>';
			data = data + '<div class="item-details">';
			for(var j in lists[i].list_data) {
				data = data + lists[i].list_data[j].title+'<br />';
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