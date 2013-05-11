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

	var func = function(){
		var indexX = Math.floor( Math.random() * 10 );
		var indexY = Math.floor( Math.random() * 10 );
		var elem = jQuery(jQuery(".line")[indexY]).find("div")[indexX];
		jQuery(elem).css({"background-color":"blue"});
		console.log(indexX);
		console.log(indexY);
		setTimeout(function(){
			func();
		},1000);
	}
	setTimeout(function(){
		func();
	},1000);
});
