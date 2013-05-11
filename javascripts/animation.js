$(function(){
	for (var i = 0; i < 10 ;i++) {
		var outerDiv = jQuery("<div/>");	
		outerDiv.attr("class","line");
		jQuery("#animation_container").append(outerDiv);
		for(var j = 0; j < 10; j++){
				var innerDiv =jQuery("<div/>");
				outerDiv.append(innerDiv);
				innerDiv.attr("class","animation_box");
		}
	}
});
