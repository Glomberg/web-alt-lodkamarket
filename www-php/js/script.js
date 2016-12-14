$(document).ready(function(){
	//для touch-screen
	!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);
	
	//раздаем всем столбикам гистограммы нужные высоты
	var histogram_elements = $('#histogram > div');
	for (var i = 0, len = histogram_elements.length; i < len; i++) {
		var histogram_element = $('#histogram > div:eq(' + i + ')');
		var data_attribute = parseInt(histogram_element.attr('data-prices-count'));
		histogram_element.css('height', data_attribute * 7); // множитель для высоты столбиков
		histogram_element.css('opacity', 1); //плавное появление
	}
		
	//ползунок
	var slider_element = $('#slider'); //div в котором формируется ползунок
	var min_value = parseInt(slider_element.attr('data-min-value')); //считываем атрибут для минимального значения
	var max_value = parseInt(slider_element.attr('data-max-value')); //считываем атрибут для максимального значения
	
	slider_element.slider({ //запускаем ползунок
		min: min_value,
		max: max_value,
		values: [min_value,max_value],
		range: true,
		create: function(event, ui) {
			$("input#minCost").val($("#slider").slider("values",0));
			$("input#maxCost").val($("#slider").slider("values",1));
			$('.ui-slider-handle:first').attr('data-current-value',$("#slider").slider("values",0));
			$('.ui-slider-handle:last').attr('data-current-value',$("#slider").slider("values",1));
		},
		stop: function(event, ui) {
			$("input#minCost").val($("#slider").slider("values",0));
			$('.ui-slider-handle:first').attr('data-current-value',$("#slider").slider("values",0));
			$("input#maxCost").val($("#slider").slider("values",1));
			$('.ui-slider-handle:last').attr('data-current-value',$("#slider").slider("values",1));
		},
		slide: function(event, ui){
			$("input#minCost").val($("#slider").slider("values",0));
			$('.ui-slider-handle:first').attr('data-current-value',$("#slider").slider("values",0));
			$("input#maxCost").val($("#slider").slider("values",1));
			$('.ui-slider-handle:last').attr('data-current-value',$("#slider").slider("values",1));
		}
	});
	
	$("input#minCost").change(function(){
		var value1=$("input#minCost").val();
		var value2=$("input#maxCost").val();

		if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#minCost").val(value1);
		}
		$("#slider").slider("values",0,value1);	
	});

		
	$("input#maxCost").change(function(){
		var value1=$("input#minCost").val();
		var value2=$("input#maxCost").val();
		
		if (value2 > 1000) { value2 = 1000; $("input#maxCost").val(1000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost").val(value2);
		}
		$("#slider").slider("values",1,value2);
	});

	
	
});