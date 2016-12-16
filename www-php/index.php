<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width">
	<title>Range slider with Histogram</title>
	<link rel="stylesheet" href="css/vendor.css">
    <link rel="stylesheet" href="css/styles-prod.css">
	<link rel="stylesheet" href="css/styles.css">
	
	<!--[if lt IE 9]>
	   <script>
		  document.createElement('header');
		  document.createElement('nav');
		  document.createElement('section');
		  document.createElement('article');
		  document.createElement('aside');
		  document.createElement('footer');
	   </script>
	<![endif]-->
</head>
<body class="filter-page">
<nav class="container">
	<div class="row">
		<div class="col-xs-20">
			<ul>
				<li><a href="#series"><span>Серия лодок</span></a></li>
				<li><a href="#length"><span>Длина лодки</span></a></li>
				<li><a href="#passengers"><span>Количество пассажиров</span></a></li>
				<li><a href="#power"><span>Мощность мотора / MAX</span></a></li>
				<li><a href="#weigth"><span>Вес лодки</span></a></li>
				<li><a href="#floor"><span>Тип пола</span></a></li>
				<li><a href="#price"><span>Цена</span></a></li>
			</ul>
		</div>
	</div>
</nav>

<div class="container checboxes" id="series">
	<div class="row">
		<div class="col-xs-20"><p>Серия лодок:</p></div>
	</div>
	<div class="row">
		<div class="col-xs-2"></div>
		<div class="col-xs-16">
			<input type="checkbox" name="" id="series-chbx1"><label for="series-chbx1">Клапан исбыточного давления</label>
			<input type="checkbox" name="" id="series-chbx2"><label for="series-chbx2">Носовой тент</label>
			<input type="checkbox" name="" id="series-chbx3"><label for="series-chbx3">Носовая сумка</label>
			<input type="checkbox" name="" id="series-chbx4"><label for="series-chbx4">Бронированный балон</label>
			<input type="checkbox" name="" id="series-chbx5"><label for="series-chbx5">Носовая сумка</label>
			<input type="checkbox" name="" id="series-chbx6"><label for="series-chbx6">Клапан исбыточного давления</label>
			<input type="checkbox" name="" id="series-chbx7"><label for="series-chbx7">Бронированный балон</label>
		</div>
		<div class="col-xs-2"></div>
	</div>
</div>

<div class="container slider-1" id="length">
	<div class="row">
		<div class="col-xs-20"><p>Выберите длину лодки, см:</p></div>
	</div>
	<div class="row">
		<div class="col-xs-2"></div>
		<div class="col-xs-16">
			<div class="slider-wrapper">
				<div id="slider_length" data-values="320,350,360,380,420,425"></div>
				<input type="hidden" name="min_value" value="" />
				<input type="hidden" name="max_value" value="" />
			</div>
		</div>
		<div class="col-xs-2"></div>
	</div>
</div>

<div class="container slider-1" id="passengers">
	<div class="row">
		<div class="col-xs-20"><p>Выберите число пассажиров:</p></div>
	</div>
	<div class="row">
		<div class="col-xs-2"></div>
		<div class="col-xs-16">
			<div class="slider-wrapper">
				<div id="slider_passengers" data-values="4,5,16"></div>
				<input type="hidden" name="min_value" value="" />
				<input type="hidden" name="max_value" value="" />
			</div>
		</div>
		<div class="col-xs-2"></div>
	</div>
</div>

<div class="container slider-1" id="power">
	<div class="row">
		<div class="col-xs-20"><p>Выберите максимальную мощность двигателя:</p></div>
	</div>
	<div class="row">
		<div class="col-xs-2"></div>
		<div class="col-xs-16">
			<div class="slider-wrapper">
				<div id="slider_power" data-values="4,5,16"></div>
				<input type="hidden" name="min_value" value="" />
				<input type="hidden" name="max_value" value="" />
			</div>
		</div>
		<div class="col-xs-2"></div>
	</div>
</div>

<div class="container slider-1" id="weigth">
	<div class="row">
		<div class="col-xs-20"><p>Выберите вес:</p></div>
	</div>
	<div class="row">
		<div class="col-xs-2"></div>
		<div class="col-xs-16">
			<div class="slider-wrapper">
				<div id="slider_weigth" data-values="4,5,16,1050"></div>
				<input type="hidden" name="min_value" value="" />
				<input type="hidden" name="max_value" value="" />
			</div>
		</div>
		<div class="col-xs-2"></div>
	</div>
</div>

<div class="container checboxes" id="floor">
	<div class="row">
		<div class="col-xs-20"><p>Выберите тип пола:</p></div>
	</div>
	<div class="row">
		<div class="col-xs-2"></div>
		<div class="col-xs-16">
			<input type="checkbox" name="" id="floor-chbx1"><label for="floor-chbx1">Тип 1</label>
			<input type="checkbox" name="" id="floor-chbx2"><label for="floor-chbx2">Тип 2</label>
			<input type="checkbox" name="" id="floor-chbx3"><label for="floor-chbx3">Тип 3</label>
			<input type="checkbox" name="" id="floor-chbx4"><label for="floor-chbx4">Тип 4</label>
		</div>
		<div class="col-xs-2"></div>
	</div>
</div>

<div class="container slider-2" id="price">

<?php
//имеем на сервере массив всех цен. любое количество цен. на входе нужен только он.
$prices = array(28126, 42321, 86601, 90162, 21839, 99160, 83028, 62925, 42611, 12328, 76421, 11329, 10513, 50076, 96430, 82593, 52129, 64374, 52579, 57256, 95307, 85995, 51146, 31747, 54162, 70806, 65452, 27687, 74790, 24931, 46884, 94916, 59252, 33484, 85078, 73092, 32644, 68106, 36016, 67255, 72434, 12437, 70585, 73947, 54513, 67014, 56540, 98643, 31388, 10018);

sort($prices);//упорядочим по возрастанию

$result = array(); // это для отладки
$range = 0;
$min_price = $prices[0];
$max_price = end($prices);
?>

	<div class="row">
		<div class="col-xs-20"><p>Выберите диапазон цен:</p></div>
	</div>
	<div class="row">
		<div class="col-xs-2"></div>
		<div class="col-xs-16">
			<div class="slider-wrapper">
				<div id="histogram">
					<?php 
					//считаем шаг цен
					$x = $max_price - $min_price;
					$range = $x * 5 / 100;
					
					//создаем 20 элементов (столбиков) в гистограмме
					for ($i = 0; $i < 20; $i++) {
						$prices_count = 0;
						$range1 = 0;
						$range2 = 0;
						$range1 = $min_price + ($range * $i);
						$range2 = $min_price + ($range * $i + $range);
						foreach ( $prices as $val ) {
							if ($val >= $range1 && $val <= $range2) {
								$prices_count++;
							} 
						}
						array_push($result, '<span>в диапазоне от ' . $range1 . ' до ' . $range2 . ' - ' . $prices_count . ' шт.</span>'); // массив для отладки
						echo ('<div data-prices-count="' . $prices_count . '"></div>'."\n");
					}
					?>
				</div>
				<div class="slider-bg">
					<div id="slider_price" data-min-value="<?php echo $min_price; ?>" data-max-value="<?php echo $max_price; ?>"></div>
				</div>
			</div>
		</div>
		<div class="col-xs-2"></div>
	</div>
	<div class="row">
		<div class="col-xs-20">
			<label for="minCost">от<input type="text" id="minCost" value=""/></label>
			<label for="maxCost">до<input type="text" id="maxCost" value=""/></label>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-20">
			<br><br><br><p>Это для проверки. Слева массив цен (упорядоченный по возрастанию), а справа текстовое представление гистрограммы.</p>
		</div>
		<div class="col-xs-10"><pre><?php print_r($prices); // вывод для отладки?></pre></div>
		<div class="col-xs-10"><pre><?php print_r($result); // вывод для отладки?></pre></div>
	</div>
</div>

<div class="container controls">
	<div class="row">
		<div class="col-xs-20">
			<a href="#" class="filter-button filter-button-show">Показать</a>
			<a href="#" class="filter-button filter-button-clear">Очистить</a>
		</div>
	</div>
</div>

<script src="js/jquery-1.11.3.min.js"></script>
<script src="js/jquery-ui-min.js"></script>
<script src="js/script.js"></script>
</body>
</html>