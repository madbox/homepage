var spinPosition = 0;
var spinItems = '';

function preload(images) {
    if (typeof document.body == "undefined") return;
    try {
        var div = document.createElement("div");
        var s = div.style;
        s.position = "absolute";
        s.top = s.left = 0;
        s.visibility = "hidden";
        document.body.appendChild(div);
        div.innerHTML = "<img src=\"" + images.join("\" /><img src=\"") + "\" />";
    } catch(e) {
        // Error. Do nothing.
    }
}


$(document).ready(function(){
    var images = [];
    spinItems = $('ul#spin-image > li');
    $('ul#spin-image > li > img').each( function(el){
	images.push( jQuery(this).attr('src') );
    } );
    preload([ images ]); 
    jQuery(spinItems.get(spinPosition)).css('display', 'block');
    $('#spin-next-btn').bind('click', function(){spinNext()} );
    $('#spin-prev-btn').bind('click', function(){spinPrev()} );
})

function spinNext(){
    $('#spin-next-btn').unbind('click');
    jQuery(spinItems.get(spinPosition)).fadeOut('fast', function() {
	if ( spinPosition < spinItems.size() - 1 ) {
	    spinPosition += 1;
	} else {
	    spinPosition = 0;
	}
	jQuery(spinItems.get(spinPosition)).fadeIn('fast');
	$('#spin-next-btn').bind('click', function(){spinNext()} );
    });
//    jQuery(spinItems.get(spinPosition)).css('display', 'block');
}
function spinPrev(){
    $('#spin-prev-btn').unbind('click');
    jQuery(spinItems.get(spinPosition)).fadeOut('fast', function() {
	if ( spinPosition > 0 ) {
	    spinPosition -= 1;
	} else {
	    spinPosition = spinItems.size() - 1;
	}
	jQuery(spinItems.get(spinPosition)).fadeIn('fast');
	$('#spin-prev-btn').bind('click', function(){spinPrev()} );
    });
}