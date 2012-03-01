var current	 = Math.floor(Math.random()*texts.length);
var splitted = texts[current].split("\n\r");

if(splitted.length > 0) {
	document.getElementById('par1').value = splitted[0];
}
if(splitted.length > 1) {
	document.getElementById('par2').value = splitted[0]+" \n\r"+splitted[1];
	document.getElementById('par2').select();
}
if(splitted.length > 2) {
	document.getElementById('par3').value = splitted[0]+" \n\r"+splitted[1]+" \n\r"+splitted[2];
}

function showHide(type) {	
	var tags = document.getElementsByTagName('textarea');
	for(var i=0;i<tags.length;i++) { tags[i].style.display = 'none'; }; // Hide all textareas
	
	if(type == 'small') {
		document.getElementById('par1').style.display = 'block';
		document.getElementById('par1').select();
	} else if(type == 'medium') {
		document.getElementById('par2').style.display = 'block';
		document.getElementById('par2').select();
	} else if(type == 'large') {
		document.getElementById('par3').style.display = 'block';
		document.getElementById('par3').select();
	}
}