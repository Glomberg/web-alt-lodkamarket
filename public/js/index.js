'use strict';

(function () {

    /*Анимация про нажатии на кнопки в карточке товара*/
    $(".card__buy").on("click", function () {
        $('.mini-cart').addClass('mini-cart--shaked');
        setTimeout(function () {
            $('.mini-cart').removeClass('mini-cart--shaked');
        }, 1000);
    });

    $(".card__compare").on("click", function () {
        $('.mini-compare').addClass('mini-compare--shaked');
        setTimeout(function () {
            $('.mini-compare').removeClass('mini-compare--shaked');
        }, 1000);
    });
    /*************************************************/


    /*Окно уведомления в личном кабинете*/
    $('.personal-notification > .personal-notification__item').on('click', function () {
        $('.personal-notification__overload').addClass('personal-notification__overload--show');
    });

    $('.personal-notification__close').on('click', function () {
        $('.personal-notification__overload').removeClass('personal-notification__overload--show');
    });
    /************************************/

    /*Zoom при наведении на изображение в карточке товара*/
    /*$(".detail-card__image").elevateZoom({
        scrollZoom: true,
        zoomWindowWidth: 400,
        zoomWindowHeight: 400,
        zoomWindowOffetx: 20,
        zoomWindowOffety: 5
    });*/
    /*****************************************************/


    /*Изменение изображений в карточке товара*/
    /*$('.detail-card__mini-image').on('click', function () {
        var data = $(this).find('img').attr('src');
        var imagePath = 'url(../' + data.toString() + ')';
        $('.detail-card__image').css('backgroundImage', imagePath);
        var bigImage = $(this).data('big');
        $('.detail-card__image').data('zoom-image', bigImage).attr('data-zoom-image', bigImage);
        $(".detail-card__image").elevateZoom({
            scrollZoom: true,
            zoomWindowWidth: 400,
            zoomWindowHeight: 400,
            zoomWindowOffetx: 20,
            zoomWindowOffety: 5
        });
    });*/
    /***************************************/


    /*Изменение изображений в подробном каталоге*/
    /*$('.card-row__mini-image').on('click', function () {
        var data = $(this).find('img').attr('src');
        var imagePath = 'url(../' + data.toString() + ')';
        $(this).parent().parent().find('.card-row__image').css('backgroundImage', imagePath);
        $(this).parent().parent().find('.card-row__image').attr('href', data);
    });*/
    /*******************************************/


    $('.main-menu__flex').on('click', function () {
        $(this).parent().parent().toggleClass('mobile-opened');
    });

    $('.pod-menu__item').on('click', function () {
        $('.pod-menu__item').removeClass('mobile-opened');
        $(this).toggleClass('mobile-opened');
    });


    var firstTabId = $('.card-characterisics__table-wrap .card-characterisics__header:first-child').data('link');
    $('.card-characterisics__table[data-name=' + firstTabId + ']').show(300);


    $('.card-characterisics__header').on('click', function () {
        var id = $(this).data('link');
        if ($('.card-characterisics__table[data-name=' + id + ']').css('display') != 'block') {
            $('.card-characterisics__table').hide(300);
            $('.card-characterisics__table[data-name=' + id + ']').show(300);
        }

        $('.card-characterisics__header').removeClass('active');
        $(this).addClass('active');
    });

    $('.filter__rangeElems__slider').each(function () {
        var sliderValues = $(this).data('values').split(',');

        $(this).ionRangeSlider({
            type: "double",
            values: sliderValues,
            grid: true,
            hide_min_max: true
        });
    });

    $('.filter__rangeElems__slider-from-to').each(function () {

    	var sliderValues = $(this).data('values');
		var sliderValuesFrom, sliderValuesTo;


    	if(sliderValues.length <= 0){
			sliderValuesFrom = $(this).data('from');
			sliderValuesTo = $(this).data('to');
		}else{
			var sValuesArray;
			if(typeof sliderValues === 'string'){
				sValuesArray = sliderValues.split(',');
			}else{
				sValuesArray = [sliderValues,sliderValues];
			}



			sliderValuesFrom = sValuesArray[0];
			sliderValuesTo = sValuesArray[sValuesArray.length - 1];
		}

        var inputFrom = $(this).parent().find('.filter__rangeElems__from');
        var inputTo = $(this).parent().find('.filter__rangeElems__to');

        $(this).ionRangeSlider({
            type: "double",
            min: sliderValuesFrom,
            max: sliderValuesTo,
            grid: true,
            hide_min_max: true,
            onChange: function (data) {
            	if(typeof sValuesArray !== 'undefined'){
					// sValuesArray
					inputFrom.val(sValuesArray[data.from]);
					inputTo.val(sValuesArray[data.to]);
				}else{
					inputFrom.val(data.from);
					inputTo.val(data.to);
				}
            }
        });

        var slider = $(this).data("ionRangeSlider");

        inputFrom.change(function(){
            slider.update({
                from: $(this).val()
            });
        });

        inputTo.change(function(){
            slider.update({
                to: $(this).val()
            });
        });
    });

    $(".card-review__images").mCustomScrollbar({
        axis: "x"
    });
    $(".card-review__description").mCustomScrollbar();

    $(".personal-notification__overload").mCustomScrollbar();

    var $owl = $('.main-slider__slider');
    var owldata = $owl.data('owlCarousel');

    $owl.on('initialized.owl.carousel', function (event) {
        var $itemsWrap = $owl.find(".owl-stage"); // or use Owl's .owl-stage class
        var items = event.item.count;
        var $owlControls = $(this).find('div.owl-controls');
        items < 2 ? $owlControls.hide() : $owlControls.show();
        //console.log(event.item.count);
    });

    $owl.owlCarousel({
        items: 1,
        navigation: false,
        pagination: true,
        dotsContainer: '.main-slider-controllers__dots',
        singleItem: true,
        autoplay: true,
        autoplayTimeout: 10000,
        loop: $owl.children().length > 1
    });

    $('.catalog-categories-slider').owlCarousel({
        items: 5,
        loop: false,
        nav: true,
        dots: false,
        margin: 18,
        navText: [
            '<div class="catalog-categories-slider__left"></div>',
            '<div class="catalog-categories-slider__right"></div>'
        ]
    });

    $('.phone-mask').mask("+7 (999) 999-9999");


    $('.mobile-burger').on('click', function () {
        $('.top-menu__menu').toggleClass('top-menu__menu--show');
    });


    $('.compare-header__slider').owlCarousel({
        items: 3,
        nav: true,
        dots: false,
        margin: 20,
        navText: [
            '<div class="compare-header__left"></div>',
            '<div class="compare-header__right"></div>'
        ]
    });

    $('.compare__slider').owlCarousel({
        items: 3,
        nav: true,
        dots: false,
        margin: 20,
        navText: [
            '<div class="compare-header__left"></div>',
            '<div class="compare-header__right"></div>'
        ]
    });

    $('.sub-slider').owlCarousel({
        items: 4,
        nav: true,
        dots: false,
        margin: 20,
        navText: [
            '<div class="compare-header__left"></div>',
            '<div class="compare-header__right"></div>'
        ],
        responsive: {
            980: {
                items: 4
            },
            768:  {
                items: 3
            },
            479: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });

    $(".counter__top").click(function () {
        var $input = $(this).parent().parent().find('input');
        if (!$input.data("max") || $input.val() < $input.data("max")) {
            if ($input.val() === "") {
                $input.val(0);
            }
            var count = parseInt($input.val()) + 1;
            $input.val(count);
            $input.change();
            return false;
        }
    });

    $(".counter__bottom").click(function () {
        var $input = $(this).parent().parent().find('input');
        if ($input.val() === "") {
            $input.val(0);
        }
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });


    $(".counter input").change(function () {
        if ($(this).val() > $(this).data("max")) {
            $(this).val($(this).data("max"));
        }
    });

    $('.counter input').keyup(function () {
        var val = $(this).val();
        var rep = /[-;":'a-zA-Zа-яА-Я\\=`ё/\*++!@#$%\^&_№?><]/;
        if (rep.test(val)) {
            val = val.replace(rep, '');
            $(this).val(val);
            $(this).change();
        }
    });

    $('.more-tovars').owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: false,
        margin: 20,
        navText: [
            '<div class="more-tovars__left"></div>',
            '<div class="more-tovars__right"></div>'
        ]
    });

    $('.main-slider-controllers__dot').on('click', function () {
        var index = $(this).data('slide');
        $owl.trigger('owl.goTo', index);
    });

    $owl.on('initialized.owl.carousel', function (event) {
        //console.log(event);
    })

    $('.cart-form__type input').change(function () {
        if ($("#ur").prop("checked")) {
            $('.order-type__left-form').addClass('order-type__left-form--showed');
            $('.order-type__right-form').removeClass('order-type__right-form--hidden');
            $('#pay1').attr('disabled', true);
            $('.pay-types__disabled-message').addClass('pay-types__disabled-message--show');
        } else {
            $('.order-type__left-form').removeClass('order-type__left-form--showed');
            $('.order-type__right-form').addClass('order-type__right-form--hidden');
            $('#pay1').attr('disabled', false);
            $('.pay-types__disabled-message').removeClass('pay-types__disabled-message--show');
        }
    });

    $('.js-ripple').click(function (e) {

        $('.ripple').remove();

        var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight = $(this).height();

        $(this).prepend('<span class="ripple"></span>');

        if (buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }

        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;

        $('.ripple').css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + 'px',
            left: x + 'px'
        }).addClass('rippleEffect');
    });


    $('body').on('click', '.header-middle__search-icon', function () {
        $('.header-middle__search-wrap input').addClass('fixedSearch');
        $('.header-middle__search-wrap').removeClass('header-middle__search-wrap--closed');
    });

    $('body').on('blur', '.fixedSearch', function () {
        $(this).removeClass('fixedSearch');
        $('.header-middle__search-wrap').addClass('header-middle__search-wrap--closed');
    });


    // $('.catalog-menu__main-wrapper').on( 'click', function() {
    // 		$('.catalog-menu__main-wrapper').toggleClass('catalog-menu__main-wrapper--showed');
    // 		$('.main-background').toggleClass('main-background--show');
    // 		$('.main-categories').toggleClass('main-categories--hidden');
    // 		$('.main-menu').toggleClass('main-menu--showed');
    //  	});

    $('.grid-menu__item').on('mouseenter', function () {
        $(this).parent().find('.grid-menu__header').addClass('activity');
    });

    $('.grid-menu__item').on('mouseleave', function () {
        $('.grid-menu__header').removeClass('activity');
    });

    // $grid.imagesLoaded().progress( function() {
    //   $grid.masonry('layout');
    // });
    //
    //


    $('.galleries__item').on('mouseenter', function () {
        var height = $(this).find('.galleries__text').outerHeight();
        var headerHeight = $('.galleries__item').outerHeight();
        $(this).find('.galleries__text').css('top', headerHeight - height + 'px');
    });

    $('.galleries__item').on('mouseleave', function () {
        $(this).find('.galleries__text').css('top', '82%');
    });

    $('.galleries__name').each(function () {
        if ($(this).outerHeight() > 55) {
            $(this).addClass('galleries__name--double');
        }
    })

    $('.catalog-menu__main-wrapper').on('mouseenter', function () {
        $('.catalog-menu__main-wrapper').addClass('catalog-menu__main-wrapper--showed');
        $('.main-background').addClass('main-background--show');
        $('.main-categories').addClass('main-categories--hidden');
        $('.main-menu').addClass('main-menu--showed');
    });

    $('.catalog-menu__main-wrapper').on('mouseleave', function () {
        $('.catalog-menu__main-wrapper').removeClass('catalog-menu__main-wrapper--showed');
        $('.main-background').removeClass('main-background--show');
        $('.main-categories').removeClass('main-categories--hidden');
        $('.main-menu').removeClass('main-menu--showed');
    });


    $('.main-background').on('click', function () {
        if ($('.main-menu').hasClass('main-menu--showed')) {
            $('.catalog-menu__main-wrapper').removeClass('catalog-menu__main-wrapper--showed');
            $('.main-background').removeClass('main-background--show');
            $('.main-categories').removeClass('main-categories--hidden');
            $('.main-menu').removeClass('main-menu--showed');
        }
    });


    $('.mini-cart').bind("mouseenter focus", function () {
        $('.mini-cart').css('z-index', '20');
        if ($('.mini-cart__item').length) {
            $('.mini-cart').addClass('hover');
            $('.main-background').addClass('main-background--show');
        }
    }).bind("mouseleave", function () {
        $('.mini-cart').css('z-index', '20');
        $('.mini-cart').removeClass('hover');
        $('.main-background').removeClass('main-background--show');
    });


    $('.tabs__name').on('click', function () {
        var data = $(this).data('tab');
        $('.tabs__name').removeClass('active');
        $(this).addClass('active');
        $('.tabs__item').hide();
        $('#' + data).show();
    });

    var firstTab = $('.tabs__name:first-child').data('tab');
    $('.tabs__name:first-child').addClass('active');
    $('#' + firstTab).show();


    window.onload = init();

})();

$(document).ready(function () {
    
	/*************************************/
	/* start Внтуренняя страница галереи */
	
	var $grid = $('.gallery').packery({
		itemSelector: '.gallery__item',
		gutter: 0
	});

	$grid.on( 'click', '.gallery__item', function( event ) {
		$('.gallery__item').removeClass('gallery__item--full');
		$(  event.currentTarget  ).toggleClass('gallery__item--full');
		$grid.packery('layout');
		setTimeout(function(){
			$("body,html").stop().animate({ scrollTop: $(  event.currentTarget  ).offset().top - 85 }, 1000);
		}, 400);
	});
	$grid.on( 'click', '.gallery__item--full', function( event ) {
		$('.gallery__item').removeClass('gallery__item--full');
		$grid.packery('layout');
	});
	$grid.on( 'layoutComplete', function( event, laidOutItems ) {
		//тут код, который выполнится после каждого перестроения галереи
	} )
	function ajax_append_images(items) { //items: Element, jQuery Object, NodeList, or Array of Elements
		$grid.append( items ).packery( 'appended', items ); //метод, который добавляет элементы в сетку
	}
	
	/* end Внтуренняя страница галереи */
	/*************************************/
	
	/*************************************/
	// start Меню на странице сравнения
	
	$('.compare .owl-next, .compare .owl-prev').on('click', function(){
		$('.transform-menu-new-elements-wrapper').attr('style', $('.compare .owl-stage').attr('style'));
	});
	
	function menu_transform_in() {
		$('.header-middle .container').append('<div class="row transform"></div>');
		$('.transform').append('<div class="col-xl-5 col-lg-5"><div><strong>СРАВНЕНИЕ ТОВАРОВ</strong></div></div>');
		$('.transform').append('<div class="col-xs-15 col-lg-15 transform-menu-new-elements"><div class="transform-menu-new-elements-wrapper"></div></div>');
		$('.transform-menu-new-elements-wrapper').attr('style', $('.compare .owl-stage').attr('style'));
		var compare_items = $('.compare .owl-item').length;
		for (var y = 0; y < compare_items; y++) {
			var item_width = $('.compare .owl-item:eq('+y+')').css('width');
			var item_mr = $('.compare .owl-item:eq('+y+')').css('margin-right');
			$('.transform-menu-new-elements-wrapper').append('<div class="transform-menu-item"></div>');
			$('.transform-menu-item:eq('+y+')').css('width', item_width).css('margin-right', item_mr);
			$('.compare .owl-item:eq('+y+') .card__name').clone().appendTo('.transform-menu-item:eq('+y+')');
			$('.compare .owl-item:eq('+y+') .card__bottom-block').clone().appendTo('.transform-menu-item:eq('+y+')');
		}
		$('.transform').hide().slideDown();
	}
	function menu_transform_out() {
		$('.transform').remove();
	}
	
	if ($('.compare').length >= 1) {
		var menu_rebuild_offset = $('.compare__item-wrap .card').offset().top + $('.compare__item-wrap .card').height() - $('.header-middle').height();
		$(window).scroll(function(){
			if ($(document).scrollTop() > menu_rebuild_offset) {
				if (!$('.transform').length >= 1) {
					menu_transform_in()
				}
				
			} else {
				if ($('.transform').length >= 1) {
					menu_transform_out()
				}
			}
		});
	}
	// end Меню на странице сравнения
	/*************************************/
	
});

function init() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 150,
            header = $(".header-middle");
        if (distanceY > shrinkOn) {
            header.addClass('fixed-header');
            //$('.header-main').css('margin-bottom', '70px');
            $('.header-main').addClass('header-main--fixed');
            $('.header-middle__search-wrap').addClass('header-middle__search-wrap--closed');
        } else {
            if (header.hasClass('fixed-header')) {
                header.removeClass('fixed-header');
                //$('.header-main').css('margin-bottom', '0');
                $('.header-main').removeClass('header-main--fixed');
                $('.header-middle__search-wrap').removeClass('header-middle__search-wrap--closed');
            }
        }
    });
}


// var bar, slider, info;

// function init(){
// 	bar = document.getElementById('bar');
// 	slider = document.getElementById('slider');
// 	info = document.getElementById('info');
// 	bar.addEventListener('mousedown', startSlide, false);
// 	bar.addEventListener('mouseup', stopSlide, false);
// }

// function startSlide(event){
// 	var set_perc = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
// 	info.innerHTML = 'start' + set_perc + '%';
// 	bar.addEventListener('mousemove', moveSlide, false);
// 	slider.style.width = (set_perc * 100) + '%';
// }

// function moveSlide(event){
// 	var set_perc = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
// 	info.innerHTML = 'moving : ' + set_perc + '%';
// 	slider.style.width = (set_perc * 100) + '%';
// }

// function stopSlide(event){
// 	var set_perc = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
// 	info.innerHTML = 'done : ' + set_perc + '%';
// 	bar.removeEventListener('mousemove', moveSlide, false);
// 	slider.style.width = (set_perc * 100) + '%';
// }

// init();