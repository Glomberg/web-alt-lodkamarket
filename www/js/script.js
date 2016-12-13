$(document).ready(function(){
	
	// тестовый массив цен (50 цен от 10т до 100т)
	var prices = [28126, 42321, 86601, 90162, 21839, 99160, 83028, 62925, 42611, 12328, 76421, 11329, 10513, 50076, 96430, 82593, 52129, 64374, 52579, 57256, 95307, 85995, 51146, 31747, 54162, 70806, 65452, 27687, 74790, 24931, 46884, 94916, 59252, 33484, 85078, 73092, 32644, 68106, 36016, 67255, 72434, 12437, 70585, 73947, 54513, 67014, 56540, 98643, 31388, 10018];
	prices = prices.sort(sIncrease);
	function sIncrease(i, ii) { // По возрастанию
		if (i > ii)
		return 1;
		else if (i < ii)
		return -1;
		else
		return 0;
	}
	
	for (var i = 0, len = prices.length; i < len; i++) {
		// ???????? перебрать элементы в #histogram и проставить нужную высоту в зависимости от количества цен определенного уровня
	}
		
	
	var slider_element = $('#slider'); //div в котором формируется ползунок
	var min_value = parseInt(slider_element.attr('data-min-value')); //считываем атрибут для минимального значения
	var max_value = parseInt(slider_element.attr('data-max-value')); //считываем атрибут для максимального значения
	var value1 = parseInt($('#minCost').val());
	var value2 = parseInt($('#maxCost').val());
	
	slider_element.slider({ //запускаем ползунок
		min: min_value,
		max: max_value,
		values: [value1,value2],
		range: true,
		create: function(event, ui) {
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