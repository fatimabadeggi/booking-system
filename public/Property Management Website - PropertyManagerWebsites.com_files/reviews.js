$(document).ready(function() {
	$("#scroller1,#scroller2,#scroller3").simplyScroll(); 
	$('.reviewLogo > img').each(function() {
		var offset = (118 - $(this).height())/2;
		console.log(offset);
    });
});