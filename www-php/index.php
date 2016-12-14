<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width">
	<title>Range slider with Histogram</title>
	<link rel="stylesheet" type="text/css" href="css/css-reset.css" />
	<link rel="stylesheet" type="text/css" href="css/bootstrap-grid-3.3.1.min.css" />
	<link rel="stylesheet" type="text/css" href="css/styles.css" />
	<link rel="stylesheet" type="text/css" href="css/media.css" />
	
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
<body>
<nav class="container">
	<div class="row">
		<div class="col-xs-12">
			<ul>
				<li><a href="#"><span>Серия лодок</span></a></li>
				<li><a href="#"><span>Длина лодки</span></a></li>
				<li><a href="#"><span>Количество пассажиров</span></a></li>
				<li><a href="#"><span>Мощность мотора / MAX</span></a></li>
				<li><a href="#"><span>Вес лодки</span></a></li>
				<li><a href="#"><span>Тип пола</span></a></li>
				<li class="active"><a href="#"><span>Цена</span></a></li>
			</ul>
		</div>
	</div>
</nav>

<?php
//имеем на сервере массив всех цен. любое количество цен. на входе нужен только он.
$prices = array(28126, 42321, 86601, 90162, 21839, 99160, 83028, 62925, 42611, 12328, 76421, 11329, 10513, 50076, 96430, 82593, 52129, 64374, 52579, 57256, 95307, 85995, 51146, 31747, 54162, 70806, 65452, 27687, 74790, 24931, 46884, 94916, 59252, 33484, 85078, 73092, 32644, 68106, 36016, 67255, 72434, 12437, 70585, 73947, 54513, 67014, 56540, 98643, 31388, 10018);

sort($prices);//упорядочим по возрастанию

$result = array();
$range = 0;
$min_price = $prices[0];
$max_price = end($prices);
?>

<div class="container" id="prices">
	<div class="row">
		<div class="col-xs-12"><p>Выберите диапазон цен:</p></div>
	</div>
	<div class="row">
		<div class="col-xs-1"></div>
		<div class="col-xs-10">
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
					<div id="slider" data-min-value="<?php echo $min_price; ?>" data-max-value="<?php echo $max_price; ?>"></div>
				</div>
			</div>
		</div>
		<div class="col-xs-1"></div>
	</div>
	<div class="row">
		<div class="col-xs-12">
			<label for="minCost">от<input type="text" id="minCost" value=""/></label>
			<label for="maxCost">до<input type="text" id="maxCost" value=""/></label>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-12">
			<br><br><br><p>Это для проверки. Слева массив цен (упорядоченный по возрастанию), а справа текстовое представление гистрограммы.</p>
		</div>
		<div class="col-xs-4"><pre><?php print_r($prices); // вывод для отладки?></pre></div>
		<div class="col-xs-8"><pre><?php print_r($result); // вывод для отладки?></pre></div>
	</div>
</div>

<script src="js/jquery-1.11.3.min.js"></script>
<script src="js/jquery-ui-min.js"></script>
<script src="js/script.js"></script>
</body>
</html>