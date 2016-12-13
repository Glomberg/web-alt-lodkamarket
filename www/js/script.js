$(document).ready(function(){
	
	var slider_element = $('#slider'); //div в котором формируется ползунок
	var min_value = parseInt(slider_element.attr('data-min-value')); //считываем атрибут для минимального значения
	var max_value = parseInt(slider_element.attr('data-max-value')); //считываем атрибут для максимального значения
	
	slider_element.slider({ //запускаем ползунок
		min: min_value,
		max: max_value,
		values: [min_value,max_value],
		range: true
	});
	
});