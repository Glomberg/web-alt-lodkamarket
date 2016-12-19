$(document).ready(function(){
	//для touch-screen
	!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);
	
	//нажатие на элемент меню и отображение нужного раздела фильтра
	$('.tabs__container > div[id]').each(function(){
		$(this).hide();
	});
	$('.filter-page ul a').on('click', function(e){
		e.preventDefault();
		if (!$(this).parent('li').hasClass('active')) {
			var target = $(this).attr('href');
			$('.filter-page ul li').removeAttr('class');
			$(this).parent('li').addClass('active');
			$('.tabs__container > div[id]').hide();
			$('.tabs__container > div[id="'+target.substr(1)+'"]').slideDown();
		}
	});
	
	
	//ползунок-1 (длина лодки и подобные)
	$('.slider-1').each(function(){
		var slider_1 = $('#slider_' + $(this).attr('id'));
		var true_values_sting = slider_1.attr('data-values');
		var true_values = true_values_sting.split(',');
		var input_min = parseInt(slider_1.siblings('input[name="min_value"]').val());
		var input_max = parseInt(slider_1.siblings('input[name="max_value"]').val());
		var values = [];
		var key_min = 0;
		var key_max = 0;
		
		for (var y=0; y<true_values.length; y++) {
			true_values[y] = parseInt(true_values[y]);
			values[y] = y + 1;
			if (input_min == true_values[y]) { key_min = y; }
			if (input_max == true_values[y]) { key_max = y; }
		}
		if ( key_min == 0 ) { key_min = 0; }
		if ( key_max == 0 ) { key_max = values.length - 1; }
		
		slider_1.slider({ //запускаем ползунок
			range: true,
			min: values[0],
			max: values[values.length - 1],
			values: [values[key_min],values[key_max]],
			step: 1,
			/*animate: true,*/
			create: function(event, ui) {
				slider_1.append('<div class="scale"></div>');
				for (var z=0; z<true_values.length; z++) {
					/*slider_1.children('.scale').append('<div style="left:'+ 100/(true_values.length-1)*z +'%;"><span>'+ true_values[z] +'<span></div>');*/ // это старый вариант
					/*slider_1.children('.scale').append('<div style="left:'+ 100/(true_values.length-1)*z +'%;width:'+ 100/(true_values.length-1) +'%;"><span>'+ Math.floor((true_values[z]+true_values[z+1])/2)  +'<span></div>');*/ // это еще один старый вариант
					slider_1.children('.scale').append('<div style="left:'+ 100/(true_values.length-1)*z +'%;width:'+ 100/(true_values.length-1) +'%;"><span>'+ true_values[z] +'<span></div>');
				}
				var current_min = true_values[slider_1.slider("values",0)-1];
				var current_max = true_values[slider_1.slider("values",1)-1];
				slider_1.siblings('input[name="min_value"]').val(current_min);
				slider_1.siblings('input[name="max_value"]').val(current_max);
				// белый текст внутри слайдера
				slider_1.find('.ui-slider-range').children('div').remove();
				for (var j = 0, k = slider_1.slider("values",0); j < slider_1.slider("values",1) - slider_1.slider("values",0); j++, k++) {
					slider_1.find('.ui-slider-range').append('<div style="width:'+100/(slider_1.slider("values",1) - slider_1.slider("values",0))+'%;">'+true_values[k-1]+'</div>');
				}
			},
			stop: function(event, ui) {
				var current_min = true_values[slider_1.slider("values",0)-1];
				var current_max = true_values[slider_1.slider("values",1)-1];
				slider_1.siblings('input[name="min_value"]').val(current_min);
				slider_1.siblings('input[name="max_value"]').val(current_max);
			},
			slide: function(event, ui){
				if (ui.values[0] + 1 > ui.values[1]) { return false; }
				var current_min = true_values[slider_1.slider("values",0)-1];
				var current_max = true_values[slider_1.slider("values",1)-1];
				slider_1.siblings('input[name="min_value"]').val(current_min);
				slider_1.siblings('input[name="max_value"]').val(current_max);
				// белый текст внутри слайдера
				slider_1.find('.ui-slider-range').children('div').remove();
				for (var j = 0, k = ui.values[0]; j < ui.values[1] - ui.values[0]; j++, k++) {
					slider_1.find('.ui-slider-range').append('<div style="width:'+100/(ui.values[1] - ui.values[0])+'%;">'+true_values[k-1]+'</div>');
				}
			}
		});
	});
	
		
	//ползунок-2 (цена)
	var slider_element = $('#slider_price'); //div в котором формируется ползунок
	var min_value = parseInt(slider_element.attr('data-min-value')); //считываем атрибут для минимального значения
	var max_value = parseInt(slider_element.attr('data-max-value')); //считываем атрибут для максимального значения
	if (!$("input#minCost").val() == '') {
		min_value_handle = parseInt($("input#minCost").val());
	} else {
		min_value_handle = min_value;
	}
	if (!$("input#maxCost").val() == '') {
		max_value_handle = parseInt($("input#maxCost").val());
	} else {
		max_value_handle = max_value;
	}
	
	slider_element.slider({ //запускаем ползунок
		min: min_value,
		max: max_value,
		values: [min_value_handle,max_value_handle],
		range: true,
		create: function(event, ui) {
			$("input#minCost").val($("#slider_price").slider("values",0));
			$("input#maxCost").val($("#slider_price").slider("values",1));
			$('#slider_price .ui-slider-handle:first').attr('data-current-value',$("#slider_price").slider("values",0));
			$('#slider_price .ui-slider-handle:last').attr('data-current-value',$("#slider_price").slider("values",1));
		},
		stop: function(event, ui) {
			$("input#minCost").val($("#slider_price").slider("values",0));
			$('#slider_price .ui-slider-handle:first').attr('data-current-value',$("#slider_price").slider("values",0));
			$("input#maxCost").val($("#slider_price").slider("values",1));
			$('#slider_price .ui-slider-handle:last').attr('data-current-value',$("#slider_price").slider("values",1));
		},
		slide: function(event, ui){
			$("input#minCost").val($("#slider_price").slider("values",0));
			$('#slider_price .ui-slider-handle:first').attr('data-current-value',$("#slider_price").slider("values",0));
			$("input#maxCost").val($("#slider_price").slider("values",1));
			$('#slider_price .ui-slider-handle:last').attr('data-current-value',$("#slider_price").slider("values",1));
		}
	});
	
	$("input#minCost").change(function(){
		var value1=$("input#minCost").val();
		var value2=$("input#maxCost").val();

		if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#minCost").val(value1);
		}
		$("#slider_price").slider("values",0,value1);	
	});

		
	$("input#maxCost").change(function(){
		var value1=$("input#minCost").val();
		var value2=$("input#maxCost").val();
		
		if (value2 > 1000) { value2 = 1000; $("input#maxCost").val(1000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost").val(value2);
		}
		$("#slider_price").slider("values",1,value2);
	});
	//раздаем всем столбикам гистограммы нужные высоты
	var histogram_elements = $('#histogram > div');
	for (var i = 0, len = histogram_elements.length; i < len; i++) {
		var histogram_element = $('#histogram > div:eq(' + i + ')');
		var data_attribute = parseInt(histogram_element.attr('data-prices-count'));
		histogram_element.css('height', data_attribute * 7); // множитель для высоты столбиков
		histogram_element.css('opacity', 1); //плавное появление
	}
	
	
});