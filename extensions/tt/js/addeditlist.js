var bg	= opera.extension.bgProcess;
var tt		= bg.tt;
var op	= new Options();

window.addEventListener('DOMContentLoaded', function() {
	op.isLoggedIn();
	
	if(op.isAddList()) {
	
		op.setPageTitle('TT Add list', 'Add a list');
		
	} else {
	
		op.setPageTitle('TT Edit list', 'Edit a list');
		
		var listId = op.getVar()['list'];
		var list = tt.getSingleList(listId);
	
		$('#list-title').text(list.list_name);
		
		$('#list-id').val(list.list_id);
		
		for(var i in list.list_tags) {
			op.addTag(list.list_tags[i]);
		}
		
	}
	
	$("#tag-field").keyup(function(event){
		if(event.keyCode == 13){
			$('#add-tag-button').click();
		}
	});
	
	$('#list-form').submit(function(event) {
		return false;
	});
	
	$('#add-tag-button').click(function() {
		op.addTag($('#tag-field').val());
		$('#tag-field').val('');
	});
	
	$('.remove-tag').live('click', function() {
		$(this).parent('li').remove();
	});
	
	$('#submit').click(function(event) {
		op.saveForm();
	});
	
}, false);