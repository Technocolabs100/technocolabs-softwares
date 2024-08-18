/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js


****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});


	////////////////////////////////////////////////////
	// 02. Mobile Menu Js
	$('#tp-mobile-menu').meanmenu({
		meanMenuContainer: '.tp-mobile-menu-pos',
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fa-regular fa-angle-down"></i>']
	});


	// last child menu
	$('.wp-menu nav > ul > li').slice(-4).addClass('menu-last');


	////////////////////////////////////////////////////
	// 03. Offcanvas Js
	$(".offcanvas-open-btn").on("click", function () {
		$(".offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas-close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 04. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});


	$(".cartmini-open-btn").on("click", function () {
		$(".cartmini__area").addClass("cartmini-opened");
		$(".body-overlay").addClass("opened");
	});


	$(".cartmini-close-btn").on("click", function () {
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});



	////////////////////////////////////////////////////
	// 06. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();	
		if (scroll < 100) {
			$("#header-sticky").removeClass("tp-header-sticky");
		} else {
			$("#header-sticky").addClass("tp-header-sticky");
		}
	});
	

	if ($('.tp-header-height').length > 0) {
		var headerHeight = document.querySelector(".tp-header-height");
			  
		var setHeaderHeight = headerHeight.offsetHeight;
			  
		$(".tp-header-height").each(function () {
			$(this).css({
				'height' : setHeaderHeight + 'px'
			});
		});
	}


	///////////////////////////////////////////////////
	// 02. SubMenu Dropdown Toggle
	var header_icon = 
	`<span class="header-icon">
		<svg width="11" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.04088 0L0.535156 4.125V11H4.26484V8.59381C4.26484 7.64165 5.05698 6.87506 6.04088 6.87506C7.02477 6.87506 7.81692 7.64165 7.81692 8.59381V11H11.5466V4.125L6.04088 0Z" fill="#05DAC3"/></svg>
	</span>`;
  	$(header_icon).insertBefore('.menu-icon nav');



	// for header language
	if ($("#tp-header-lang-toggle").length > 0) {
		window.addEventListener('click', function(e){
	
			if (document.getElementById('tp-header-lang-toggle').contains(e.target)){
				$(".tp-lang-list").toggleClass("tp-lang-list-open");
			}
			else{
				$(".tp-lang-list").removeClass("tp-lang-list-open");
			}
		});
	}

	// for header usd
	if ($("#tp-header-usd-toggle").length > 0) {
		window.addEventListener('click', function(e){
	
			if (document.getElementById('tp-header-usd-toggle').contains(e.target)){
				$(".tp-usd-list").toggleClass("tp-usd-list-open");
			}
			else{
				$(".tp-usd-list").removeClass("tp-usd-list-open");
			}
		});
	}


	/////// add tag //////
	$('.tp-main-menu ul li a').each(function(){
		$(this).wrapInner("<span></span>");
		});
	

	////////////////////////////////////////////////////
	// 03. Search Js
	$(".search-open-btn").on("click", function () {
		$(".search__popup").addClass("search-opened");
		$(".search-popup-overlay").addClass("search-popup-overlay-open");
	});

	
	$(".search-close-btn").on("click", function () {
		$(".search__popup").removeClass("search-opened");
		$(".search-popup-overlay").removeClass("search-popup-overlay-open");
	});

	////////////////////////////////////////////////////
	// 07. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	////////////////////////////////////////////////////
	// 14. tp btn hover
	if ($(".tp-btn-hover").length > 0) {
		$('.tp-btn-hover').on('mouseenter', function (e) {
				var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
				$(this).find('b').css({ top: relY, left: relX })
		});
	
		$('.tp-btn-hover').on('mouseout', function (e) {
	
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('b').css({ top: relY, left: relX })
	
		});
	}

	if ($(".tp-btn-hover-clear").length > 0) {
		$('.tp-btn-hover-clear').on('mouseenter', function (e) {
				var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
				$(this).find('b').css({ top: relY, left: relX })
		});
	
		$('.tp-btn-hover-clear').on('mouseout', function (e) {
	
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('b').css({ top: relY, left: relX })
	
		});
	}


	

	// settings append in body
	function tp_settings_append($x){
		var settings = $('body');
		let dark;
		$x == true ? dark = 'd-block' : dark = 'd-none';
		var settings_html = `<div class="tp-theme-settings-area transition-3">
		<div class="tp-theme-wrapper">
		   <div class="tp-theme-header text-center">
			  <h4 class="tp-theme-header-title">Harry Theme Settings</h4>
		   </div>

		   <!-- THEME TOGGLER -->
		   <div class="tp-theme-toggle mb-20 ${dark}">
			  <label class="tp-theme-toggle-main" for="tp-theme-toggler">
				 <span class="tp-theme-toggle-dark"><i class="fa-light fa-moon"></i> Dark</span>
					<input type="checkbox" id="tp-theme-toggler">
					<i class="tp-theme-toggle-slide"></i>
				 <span class="tp-theme-toggle-light active"><i class="fa-light fa-sun-bright"></i> Light</span>
			  </label>
		   </div>

		   <!--  RTL SETTINGS -->
		   <div class="tp-theme-dir mb-20">
			  <label class="tp-theme-dir-main" for="tp-dir-toggler">
				 <span class="tp-theme-dir-rtl"> RTL</span>
					<input type="checkbox" id="tp-dir-toggler">
					<i class="tp-theme-dir-slide"></i>
				 <span class="tp-theme-dir-ltr active"> LTR</span>
			  </label>
		   </div>

		   <!-- COLOR SETTINGS -->
		   <div class="tp-theme-settings">
			  <div class="tp-theme-settings-wrapper">
				 <div class="tp-theme-settings-open">
					<button class="tp-theme-settings-open-btn">
					   <span class="tp-theme-settings-gear">
						  <i class="fa-light fa-gear"></i>
					   </span>
					   <span class="tp-theme-settings-close">
						  <i class="fa-regular fa-xmark"></i>
					   </span>
					</button>
				 </div>
				 <div class="row row-cols-4 gy-2 gx-2">
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn d-none" data-color-default="#F50963" type="button" data-color="#F50963"></button>
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#F50963"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#008080"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#AB6C56"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#3661FC"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#2CAE76"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#FF5A1B"></button>
					   </div>
					</div>
					<div class="col">
                        <div class="tp-theme-color-item tp-color-active">
                           <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#03041C"></button>
                        </div>
                     </div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#ED212C"></button>
					   </div>
					</div>
				 </div>
			  </div>
			  <div class="tp-theme-color-input">
				 <h6>Choose Custom Color</h6>
				 <input type="color" id="tp-color-setings-input" value="#F50963">
				 <label id="tp-theme-color-label" for="tp-color-setings-input"></label>
			  </div>
		   </div>
		</div>
	 </div>`;
	 settings.append(settings_html);
	}
	// tp_settings_append(true); // if want to enable dark light mode then send "true";

	// settings open btn
	$(".tp-theme-settings-open-btn").on("click", function () {
		$(".tp-theme-settings-area").toggleClass("settings-opened");
	});

	// rtl settings
	function tp_rtl_settings() {

		$('#tp-dir-toggler').on("change", function () {
			toggle_rtl();

		});


		// set toggle theme scheme
		function tp_set_scheme(tp_dir) {
			localStorage.setItem('tp_dir', tp_dir);
			document.documentElement.setAttribute("dir", tp_dir);

			if (tp_dir === 'rtl') {
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap-rtl.css");
			} else {
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap.css");
			}
		}

		// toogle theme scheme
		function toggle_rtl() {
			if (localStorage.getItem('tp_dir') === 'rtl') {
				tp_set_scheme('ltr');
				var list = $("[href='assets/css/bootstrap-rtl.css']");
				$(list).attr("href", "assets/css/bootstrap.css");
			} else {
				tp_set_scheme('rtl');
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap-rtl.css");
			}
		}

		// set the first theme scheme
		function tp_init_dir() {
			if (localStorage.getItem('tp_dir') === 'rtl') {
				tp_set_scheme('rtl');
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap-rtl.css");
				document.getElementById('tp-dir-toggler').checked = true;
			} else {
				tp_set_scheme('ltr');
				document.getElementById('tp-dir-toggler').checked = false;
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap.css");
			}
		}
		tp_init_dir();
	}
	if ($("#tp-dir-toggler").length > 0) {
		tp_rtl_settings();
	}

	// dark light mode toggler
	function tp_theme_toggler() {

		$('#tp-theme-toggler').on("change", function () {
			toggleTheme();

		});


		// set toggle theme scheme
		function tp_set_scheme(tp_theme) {
			localStorage.setItem('tp_theme_scheme', tp_theme);
			document.documentElement.setAttribute("tp-theme", tp_theme);
		}

		// toogle theme scheme
		function toggleTheme() {
			if (localStorage.getItem('tp_theme_scheme') === 'tp-theme-dark') {
				tp_set_scheme('tp-theme-light');
			} else {
				tp_set_scheme('tp-theme-dark');
			}
		}

		// set the first theme scheme
		function tp_init_theme() {
			if (localStorage.getItem('tp_theme_scheme') === 'tp-theme-dark') {
				tp_set_scheme('tp-theme-dark');
				document.getElementById('tp-theme-toggler').checked = true;
			} else {
				tp_set_scheme('tp-theme-light');
				document.getElementById('tp-theme-toggler').checked = false;
			}
		}
		tp_init_theme();
	}
	if ($("#tp-theme-toggler").length > 0) {
		tp_theme_toggler();
	}


	// color settings
	function tp_color_settings() {

		// set color scheme
		function tp_set_color(tp_color_scheme) {
			localStorage.setItem('tp_color_scheme', tp_color_scheme);
			document.querySelector(':root').style.setProperty('--tp-theme-1', tp_color_scheme);
			document.getElementById("tp-color-setings-input").value = tp_color_scheme;
			document.getElementById("tp-theme-color-label").style.backgroundColor = tp_color_scheme;
		}

		// set color
		function tp_set_input() {
			var color = localStorage.getItem('tp_color_scheme');
			document.getElementById("tp-color-setings-input").value = color;
			document.getElementById("tp-theme-color-label").style.backgroundColor = color;


		}
		tp_set_input();

		function tp_init_color() {
			var defaultColor = $(".tp-color-settings-btn").attr('data-color-default');
			var setColor = localStorage.getItem('tp_color_scheme');

			if (setColor != null) {

			} else {
				setColor = defaultColor;
			}

			if (defaultColor !== setColor) {
				document.querySelector(':root').style.setProperty('--tp-theme-1', setColor);
				document.getElementById("tp-color-setings-input").value = setColor;
				document.getElementById("tp-theme-color-label").style.backgroundColor = setColor;
				tp_set_color(setColor);
			} else {
				document.querySelector(':root').style.setProperty('--tp-theme-1', defaultColor);
				document.getElementById("tp-color-setings-input").value = defaultColor;
				document.getElementById("tp-theme-color-label").style.backgroundColor = defaultColor;
				tp_set_color(defaultColor);
			}
		}
		tp_init_color();


		let themeButtons = document.querySelectorAll('.tp-color-settings-btn');

		themeButtons.forEach(color => {
			color.addEventListener('click', () => {
				let datacolor = color.getAttribute('data-color');
				document.querySelector(':root').style.setProperty('--tp-theme-1', datacolor);
				document.getElementById("tp-theme-color-label").style.backgroundColor = datacolor;
				tp_set_color(datacolor);
			});
		});



		const colorInput = document.querySelector('#tp-color-setings-input');
		const colorVariable = '--tp-theme-1';


		colorInput.addEventListener('change', function (e) {
			var clr = e.target.value;
			document.documentElement.style.setProperty(colorVariable, clr);
			tp_set_color(clr);
			tp_set_check(clr);
		});


		function tp_set_check(clr){
			const arr = Array.from(document.querySelectorAll('[data-color]'));
	
			var a = localStorage.getItem('tp_color_scheme');

			let test =  arr.map(color =>{
				let datacolor = color.getAttribute('data-color');
				
				return datacolor;
			}).filter(color => color == a);
			
			var arrLength = test.length;

			if(arrLength == 0){
				$('.tp-color-active').removeClass('active');
			}else{
				$('.tp-color-active').addClass('active');
			}
		}

		function tp_check_color(){
			var a = localStorage.getItem('tp_color_scheme');

			var list = $(`[data-color="${a}"]`);

			list.parent().addClass('active').parent().siblings().find('.tp-color-active').removeClass('active')		
		}
		tp_check_color();

		$('.tp-color-active').on('click', function () {
			$(this).addClass('active').parent().siblings().find('.tp-color-active').removeClass('active');
		});

	}
	if (($(".tp-color-settings-btn").length > 0) && ($("#tp-color-setings-input").length > 0) && ($("#tp-theme-color-label").length > 0)) {
		tp_color_settings();
	}


	////////////////////////////////////////////////////
	// 07. Nice Select Js
	$('select').niceSelect();

	////////////////////////////////////////////////////
	// 07. Smooth Scroll Js
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothSctoll();

	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();

	var tp_rtl = localStorage.getItem('tp_dir');
	let rtl_setting = tp_rtl == 'rtl' ? true : false;



	var slider = new Swiper('.active-class', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		rtl: rtl_setting,
		pagination: {
			el: ".testimonial-pagination-6",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
			},
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	var postboxSlider = new Swiper('.postbox__slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		autoplay: {
			delay: 3000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".postbox-slider-button-next",
			prevEl: ".postbox-slider-button-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 13. Masonary Js
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 14. Wow Js
	new WOW().init();

	function tp_ecommerce() {
		$('.tp-cart-minus').on('click', function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
	
		$('.tp-cart-plus').on('click', function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});
	
	
		////////////////////////////////////////////////////
		// 17. Show Login Toggle Js
		$('#showlogin').on('click', function () {
			$('#checkout-login').slideToggle(900);
		});
	
		////////////////////////////////////////////////////
		// 18. Show Coupon Toggle Js
		$('#showcoupon').on('click', function () {
			$('#checkout_coupon').slideToggle(900);
		});
	
		////////////////////////////////////////////////////
		// 19. Create An Account Toggle Js
		$('#cbox').on('click', function () {
			$('#cbox_info').slideToggle(900);
		});
	
		////////////////////////////////////////////////////
		// 20. Shipping Box Toggle Js
		$('#ship-box').on('click', function () {
			$('#ship-box-info').slideToggle(1000);
		});
	}
	tp_ecommerce();


	////////////////////////////////////////////////////
	// 23. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});

	$('.activebsba').on("click", function () {
		$('#services-item-thumb').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});

	if ($('#nft-slider').length > 0) {
		var stepsSlider = document.getElementById('nft-slider');
		var input0 = document.getElementById('input-with-keypress-0');
		var input1 = document.getElementById('input-with-keypress-1');
		var inputs = [input0, input1];

		noUiSlider.create(stepsSlider, {
			start: [0, 4],
			connect: true,
			range: {
				'min': [0],
				'max': 10
			}
		});

		stepsSlider.noUiSlider.on('update', function (values, handle) {
			inputs[handle].value = values[handle];
		});
	}

	if ($('.tp-tilt-effect').length > 0) {
		VanillaTilt.init(document.querySelector(".tp-tilt-effect"), {
			reverse: false,  // reverse the tilt direction
			max: 20,     // max tilt rotation (degrees)
			startX: 0,      // the starting tilt on the X axis, in degrees.
			startY: 0,      // the starting tilt on the Y axis, in degrees.
			perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
			scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
			speed: 300,    // Speed of the enter/exit transition
			transition: true,   // Set a transition on enter/exit.
			axis: null,   // What axis should be disabled. Can be X or Y.
			reset: true,   // If the tilt effect has to be reset on exit.
			easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
			glare: false,  // if it should have a "glare" effect
			"max-glare": 1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
			"glare-prerender": false,
			"mouse-event-element": null,   // css-selector or link to HTML-element what will be listen mouse events
			gyroscope: true,   // Boolean to enable/disable device orientation detection,
			gyroscopeMinAngleX: -10,    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
			gyroscopeMaxAngleX: 10,     // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
			gyroscopeMinAngleY: -10,    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
			gyroscopeMaxAngleY: 10,     // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
		});
	}


	//////////////////////////
	// scroll rotate
	let reloadClassName = document.getElementById("reload");

	if(reloadClassName !== null){
		window.onscroll = function () {
			scrollRotate();
		};
		function scrollRotate() {
			reloadClassName.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
		}
	}


	////////////////////////////////////////////////////
	// 21. Counter Js
	new PureCounter();


	// Jquery Appear raidal
	if (typeof ($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
		var $this = $(this),
		knobVal = $this.attr('data-rel');

		$this.knob({
		'draw': function () {
			$(this.i).val(this.cv + '%')
		}
		});

		$this.appear(function () {
		$({
			value: 0
		}).animate({
			value: knobVal
		}, {
			duration: 2000,
			easing: 'swing',
			step: function () {
			$this.val(Math.ceil(this.value)).trigger('change');
			}
		});
		}, {
		accX: 0,
		accY: -150
		});
	});
	}


	//////////////////////////
	// hero 1 active
	if ($('.hero-active-1').length > 0) {
	var slider = new Swiper('.hero-active-1', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		effect: 'fade',
		autoplay: {
			delay: 5000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".hero-button-next-1",
			prevEl: ".hero-button-prev-1",
		},
		});
		}


	//////////////////////////
	// hero 2 active
	if ($('.hero-active-2').length > 0) {
	var slider = new Swiper('.hero-active-2', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		// Navigation arrows
		navigation: {
			nextEl: ".hero-button-next-1",
			prevEl: ".hero-button-prev-1",
		},
		breakpoints: {
			'1200': {
				
			},
			'992': {
				
			},
			'768': {
				
			},
			'576': {
				
			},
			'0': {
				
			},
		},
		});
		}

	// hero 3 active
	if ($('.hero-active-3').length > 0) {
		var slider = new Swiper('.hero-active-3', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			effect: 'fade',
			autoplay: {
				delay: 5000,
			},
			watchSlidesProgress: true,
			// Navigation arrows
			navigation: {
				nextEl: ".hero-button-next-1",
				prevEl: ".hero-button-prev-1",
			},
			breakpoints: {
				'1200': {
					
				},
				'992': {
					
				},
				'768': {
					
				},
				'576': {
					
				},
				'0': {
					
				},
			},
		});
		}
		

	// about active
	if ($('.about-active').length > 0) {
	var slider = new Swiper('.about-active', {
		slidesPerView: 3,
		spaceBetween: 82,
		loop: true,
		// Navigation arrows
		navigation: {
			nextEl: ".about-button-next-1",
			prevEl: ".about-button-prev-1",
		},
		breakpoints: {
			'1860': {
				
			},
			'1800': {
				spaceBetween: 40,
			},
			'1701': {
				
			},
			'1600': {
				
			},
			'1560': {
				
			},
			'1400': {
				spaceBetween:60,
			},
			'1200': {
				spaceBetween:30,
				slidesPerView: 2,
			},
			'992': {
				spaceBetween:60,
				slidesPerView: 2,
			},
			'767': {
				slidesPerView:2
			},
			'576': {
				slidesPerView:2
			},
			'0': {
				slidesPerView:1
			},
		},
	});
	}


	// about active
	if ($('.blog-img-active').length > 0) {
	var slider = new Swiper('.blog-img-active', {
		slidesPerView: 1,
		loop: true,
		// Navigation arrows
		navigation: {
			nextEl: ".blog-button-next-1",
			prevEl: ".blog-button-prev-1",
		},
		});
		}


	// testimonial active
	if ($('.testimonial-active').length > 0) {
	var slider = new Swiper('.testimonial-active', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		breakpoints: {
			'991': {
			},
			'768': {
				slidesPerView:2,
			},
			'767': {
				slidesPerView:1,
				spaceBetween:15,
			},
			'576': {
				slidesPerView:1,
			},
			'0': {
				slidesPerView:1,
			},
			},
			});
		}


	// testimonial active
	if ($('.testimonial-2-active').length > 0) {
	var slider = new Swiper('.testimonial-2-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		// Navigation arrows
		navigation: {
			nextEl: ".testimonial-button-next-1",
			prevEl: ".testimonial-button-prev-1",
		},
		});
	}


	// service slider
	if ($('.service-active').length > 0) {
		new Splide('.service-active', {
			type   : 'loop',
			drag   : 'free',
			pagination: false,
			arrows: false,
			perPage: 5,
			gap:'30px',
			breakpoints: {
				1800: {
					perPage: 5,
				},
				1500: {
					perPage: 4,
				},
				1200: {
					perPage: 3,
				},
				800: {
					perPage: 2,
				},
				566: {
					perPage: 1,
				},
			  },
		  }).mount();
		}


	if ($(".tp-text-active").length > 0) {
		$('.tp-text-active').slick({
			speed: 3000,
			autoplay: true,
			autoplaySpeed: 0,
			cssEase: 'linear',
			slidesToShow: 3,
			slidesToScroll: 1,
			variableWidth: true,
			infinite: true,
			initialSlide: 1,
			arrows: false,
			buttons: false,
			pauseOnFocus: false,
			pauseOnHover: true,
			rtl: rtl_setting,
		  });
	}


	// portfolio slider
	if ($('.tp-feature-active-2').length > 0) {
		new Splide('.tp-feature-active-2', {
			type   : 'loop',
			pagination: false,
			arrows: false,
			focus: 'center',
			perPage: 1,
			gap:'30px',
			padding: '25%',
			throttle: 300,
			breakpoints: {
				991: {
					padding: '15%'
				},
				765: {
					padding: '12%',
					gap:'25px',
				},
				575: {
					arrows: false,
					padding: '0%',
				},
			  },
		  }).mount();
		}


	// feature active
	if ($('.feature-3-active').length > 0) {
		var slider = new Swiper('.feature-3-active', {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			centeredSlides: true,
			breakpoints: {
				'1700':{
					slidesPerView:4,
				},
				'1400':{
					slidesPerView:3,
				},
				'1200':{
					slidesPerView:2,
				},
				'767': {
					slidesPerView:2,
				},
				'576': {
					slidesPerView:1,
				},
				'0': {
					slidesPerView:1,
				},
				},
				});
			}


	//   testimonial active
	if ($('.testimonial-3-active').length > 0) {
		var main = new Splide( '.testimonial-3-active', {
		  pagination : true,
		  arrows     : false,
		  type   	   : 'loop',
		  breakpoints : {
			  576: {
				  perPage: 1
			  },
			},
		} );
		
		var thumbnails = new Splide( '.testimonial-navigation-active', {
		  gap        : 0,
		  pagination : false,
		  arrows     : false,
		  type   : 'loop',
		  perPage: 1,
		  isNavigation : true,
		} );
		
		main.sync( thumbnails );
		main.mount();
		thumbnails.mount();
	  }


	// Brand
	var slider = new Swiper('.brand-3-active', {
		slidesPerView: 5,
		loop: true,
		autoplay: {
			delay: 100,
		},
		autoplay : true,
		breakpoints: {
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});



	// team active
	if ($('.team-active').length > 0) {
		var slider = new Swiper('.team-active', {
			slidesPerView: 5,
			spaceBetween: 25,
			loop: true,
			centeredSlides: true,
			// Navigation arrows
			navigation: {
				nextEl: ".team-button-next-1",
				prevEl: ".team-button-prev-1",
			},
			breakpoints: {
				'1400':{
					slidesPerView: 5,
				},
				'1200':{
					slidesPerView: 4,
				},
				'992':{
					slidesPerView:3,
				},
				'767': {
					slidesPerView:3,
				},
				'576': {
					slidesPerView:2,
				},
				'0': {
					slidesPerView:1,
				},
				},
				});
			}


		// click to add remove class
		$('.tp-faq-tab-content .accordion-item').on("click", function(){
			$(this).addClass('tp-faq-active').siblings().removeClass('tp-faq-active');
		});



		//////////// mouse move js////////////
		function bubbleMove(n, m){
			if ((n).length > 0) {
				var mousee = document.getElementById(m); 
				
				mousee?.addEventListener('mousemove', function(e) {
				// Get dimensions of mousemove element
				var r = this.getBoundingClientRect();
				
				// Set x and y values prop values based on center of mousemove element
				this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
				this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
				});
				
				mousee?.addEventListener('mouseleave', function() {
				// Reset x and y prop values when no longer hovering
				this.style.setProperty('--x', 1)
				this.style.setProperty('--y', 1) 
				});
			}
		}

		if (('#mousemove').length > 0) {
			bubbleMove('mousemove', 'mousemove');
		}

		/////// bubble effects////////
		var $bubbles = $('.bubbles');

		function bubbles() {
		// Settings
		var min_bubble_count = 20, // Minimum number of bubbles
			max_bubble_count = 60, // Maximum number of bubbles
			min_bubble_size = 3, // Smallest possible bubble diameter (px)
			max_bubble_size = 12; // Maximum bubble blur amount (px)
		
		// Calculate a random number of bubbles based on our min/max
		var bubbleCount = min_bubble_count + Math.floor(Math.random() * (max_bubble_count + 1));
		
		// Create the bubbles
		for (var i = 0; i < bubbleCount; i++) {
			$bubbles.append('<div class="bubble-container"><div class="bubble"></div></div>');
		}
		
		// Now randomise the various bubble elements
		$bubbles.find('.bubble-container').each(function(){
			
			// Randomise the bubble positions (0 - 100%)
			var pos_rand = Math.floor(Math.random() * 101);
			
			// Randomise their size
			var size_rand = min_bubble_size + Math.floor(Math.random() * (max_bubble_size + 15));
			
			// Randomise the time they start rising (0-15s)
			var delay_rand = Math.floor(Math.random() * 16);
			
			// Randomise their speed (3-8s)
			var speed_rand = 3 + Math.floor(Math.random() * 9);
			
			// Random blur
			var blur_rand = Math.floor(Math.random() * 3);
			
			// Cache the this selector
			var $this = $(this);
			
			// Apply the new styles
			$this.css({
			'left' : pos_rand + '%',
			
			'-webkit-animation-duration' : speed_rand + 's',
			'-moz-animation-duration' : speed_rand + 's',
			'-ms-animation-duration' : speed_rand + 's',
			'animation-duration' : speed_rand + 's',
			
			'-webkit-animation-delay' : delay_rand + 's',
			'-moz-animation-delay' : delay_rand + 's',
			'-ms-animation-delay' : delay_rand + 's',
			'animation-delay' : delay_rand + 's',
			
			'-webkit-filter' : 'blur(' + blur_rand  + 'px)',
			'-moz-filter' : 'blur(' + blur_rand  + 'px)',
			'-ms-filter' : 'blur(' + blur_rand  + 'px)',
			'filter' : 'blur(' + blur_rand  + 'px)',
			});
			
			$this.children('.bubble').css({
			'width' : size_rand + 'px',
			'height' : size_rand + 'px'
			});
			
		});
		}
		bubbles();



		/////////////////////////
		// gsap animation
		// title animation gsap
		if ($('.title-anim-1').length > 0) {
			// 25. Title Animation
			let splitTitleLines = gsap.utils.toArray(".title-anim-1");
			splitTitleLines.forEach(splitTextLine => {
				const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
				});
	
				const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
				gsap.set(splitTextLine, { perspective: 300});
				itemSplitted.split({ type: "lines" })
				tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -60, force3D: true, transformOrigin: "top center -50", stagger: 0.2 });
			});	
			}


			// Text Animation
			let splitTextLines = gsap.utils.toArray("title-anime-2");

			splitTextLines.forEach((splitTextLine) => {
			const tl = gsap.timeline({
				scrollTrigger: {
				trigger: splitTextLine,
				start: "top 90%",
				duration: 2,
				end: "bottom 60%",
				// scrub: false,
				markers: false,
				toggleActions: "play none none none",
				},
			});
		
			const itemSplitted = new SplitText(splitTextLine, { type: "lines", linesClass: "lineChild" });
			gsap.set(splitTextLine, { perspective: 400 });
			itemSplitted.split({ type: "lines", linesClass: "lineChild" });
			tl.from(itemSplitted.lines, {
				duration: 1,
				delay: 0.5,
				opacity: 0,
				rotationX: -80,
				force3D: true,
				transformOrigin: "top center -50",
				stagger: 0.1,
			});
			});
		
			if ($('.title-anime-2').length > 0) {
			// Title Animation-2
			let char_come = gsap.utils.toArray(".title-anime-2");
			char_come.forEach(splitTextLine => {
				const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
				});
				const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
				gsap.set(splitTextLine, { perspective: 300 });
				itemSplitted.split({ type: "chars, words" })
				tl.from(itemSplitted.chars,
				{
					duration: 1.2,
					opacity: 0,
					scale: 0,
					y: 60,
					rotationX: 180,
					transformOrigin: "0% 30% -30%",
					stagger: 0.02
				});
			});
			}


		   // Fade in Left Animation
			let fadeLeft = document.getElementsByClassName("fadeLeft");
			if(fadeLeft){
				gsap.set(fadeLeft, { x:-100, autoAlpha: 0 });
			
				const fadeLeftArray = gsap.utils.toArray(fadeLeft)
				fadeLeftArray.forEach((item, i) => {
					let fadeTl = gsap.timeline({
					scrollTrigger: {
						trigger: item,
						start: "top bottom-=150",
					}
					})
					fadeTl.to(item, {
					x: 0,
					autoAlpha: 1,
					ease: "power2.out",
					duration: 1.3,
					})
				})
			}


			// fade in right animation
			let fadeRight = document.getElementsByClassName("fadeRight");

			if(fadeRight){
				gsap.set(fadeRight, { x:100, autoAlpha: 0 });

				const fadeRightArray = gsap.utils.toArray(fadeRight)
				fadeRightArray.forEach((item, i) => {
				let fadeTl = gsap.timeline({
					scrollTrigger: {
					trigger: item,
					start: "top bottom-=150",
					}
				})
				fadeTl.to(item, {
					x: 0,
					autoAlpha: 1,
					ease: "power2.out",
					duration: 1.3,
				})
				})
			}


			// fade in up animate
			gsap.set(".fadeUp", { y: 30, opacity: 0 });
			const fadeUpArray = gsap.utils.toArray(".fadeUp")
			fadeUpArray.forEach((item, i) => {
				let fadeTl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top bottom-=150",
				}
				})
				fadeTl.to(item, {
				y: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 1.3,
				})
			})

			// fade one by one animation
			var oneByOne = document.querySelectorAll('.OneByOne');
			gsap.set(oneByOne, { x: -30, opacity: 0 });
			gsap.to(oneByOne, {
			  scrollTrigger: {
				trigger: oneByOne,
				start: "top center+=250",
			  },
			  x: 0,
			  opacity: 1,
			  ease: "back.out(1)",
			  duration: 1,
			  stagger: 0.3,
			})



		// scrollTo moving
		var controller = new ScrollMagic.Controller();

		if ($('.scroll-moving-text').length > 0) {
		$(".scroll-moving-text").each( function () {
			var $this = $(this);
			var $thisheight =  $(this).height() + window.innerHeight;
			var $thiswidth = $(this).outerWidth(true) - window.innerWidth;
			// Add tweenmax for backgroundParallax
			gsap.set($this,{x:-$thiswidth});
			var parallax = gsap.to( $this, 1, {x: 0 , ease:Linear.easeNone});
			
			// Create scrollmagic scene
			var parallaxScene = new ScrollMagic.Scene({
				triggerElement: this, // <-- Use this to select current element
				triggerHook: 1,
				duration:$thisheight,
			})
			.setTween(parallax)
			.addTo(controller);
			
			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					parallaxScene.refresh()
				});
			}
		});
		}


	// document.addEventListener('contextmenu', function(event) {
	// 	event.preventDefault();
	//   });

})(jQuery);


