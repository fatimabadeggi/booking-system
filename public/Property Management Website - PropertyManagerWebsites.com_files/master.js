(function(window,$){

	var site = window.site = {};
	site.mapsInitialized = false;
	site.maps = [];
	site.createMap = function(element, options, callback){
		if(site.mapsInitialized){
			callback.apply(null,[ new google.maps.Map(element, options) ]);
		}else{
			site.maps.push( { element : element, options : options, callback : callback } );
		}
	};

	window.initMap = function(){
		var i = 0,
			map = null;
		site.mapsInitialized = true;

		for(i=0;i<site.maps.length;i++){
			map = site.maps[i];
			site.createMap(map.element, map.options, map.callback);
		}
	};



	$(document).ready(function() {
		/* VARS */
		var $body = $("body");

		/* Initialize Free Rental Site Widgets */
		// FRS Widget Code
		(function(d,s,id,p,k,o) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = "//www.freerentalsite.com/widgets/js/?profileID=" + p + "&key=" + ((k) ? encodeURIComponent(k) : '') + "&options=" + encodeURIComponent(o);
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'frs-jssdk',"5526C988-C0B1-401D-9AC0-91D4BCC7D0D5",null,'{ propertiesUrl : "/props", rentedUrl : "/rented" }'));
		/* Home Down Arrow Scroll Script */
		$('.scroll-to').click(function() {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		});

		$("#responsive-menu").change(function(){
			if( this.value ){
				location.href = this.value;
			}
		});

		//Need Help Pop Up for Products Page

		var instance = $('.needHelp').length;
		var overlay_click_state = 0;
		if(instance > 0){
			setTimeout(function(){
				$('.needHelp').fadeIn('slow');
				if(overlay_click_state == 0){
					$('.needHelp-overlay').fadeIn('slow');
					overlay_click_state = 1;
				}else{
					console.log('click state out of sync with help box');
					overlay_click_state = 1;
				}
			}, 60000);
			$(window).keypress(function(){
				$('.needHelp-overlay').fadeOut('slow');
				$('.needHelp').fadeOut('slow');
				overlay_click_state = 0;
			});
			$('.needHelp-overlay').click(function(){
				$('.needHelp-overlay').fadeOut('slow');
				$('.needHelp').fadeOut('slow');
				overlay_click_state = 0;
			});
		}else{
			// Do Nothing
		}

		//Quick Price Compare Drop Down
		var compare_click_state = 0;
		var open_symbol = '&#43;';
		var close_symbol = '&#45;';
		var warning = 'compare_click_state must be either 0 or 1.  Any other value will cause the function to fail';
		$('#quick-compare .text').click(function(){
			$('#quick-compare').removeClass('hideCompare showCompare');
			if(compare_click_state == 0){
				$('#quick-compare').addClass('showCompare');
				$(this).children(".plus").empty().html(close_symbol);
				compare_click_state = 1;
			}else if(compare_click_state == 1){
				$('#quick-compare').addClass('hideCompare');
				$(this).children(".plus").empty().html(open_symbol);
				compare_click_state = 0;
			}else{
				console.log(warning);
			}
		});

		//Pricing Guide Form submit
		var package_type;
		$('.package-sign-up > .btn').click(function(){
			package_type = $(this).parents('.package').attr('id');
			if(!package_type){
				package_type = $(this).parents('.package-sign-up').data('id');
			}
			$('#packages-pricing-signup').fadeIn();
			$('.packages-pricing-overlay').fadeIn();
			$('#packages-pricing-signup > #package-selected > .package#'+package_type).show();
			$('#packages-pricing-signup > form .btn-signup').addClass(package_type);
			$('#packages-pricing-signup form input#signup-package').val(package_type.charAt(0).toUpperCase() + package_type.slice(1).toLowerCase());
		});
		$('.cancel-btn').click(function(){
			$('#packages-pricing-signup').fadeOut();
			$('.packages-pricing-overlay').fadeOut();
			$('#packages-pricing-signup > #package-selected > .package#'+package_type).fadeOut();
			$('#packages-pricing-signup > form .btn-signup').removeClass(package_type);
		});
		$('.packages-pricing-overlay').click(function(){
			$('#packages-pricing-signup').fadeOut();
			$(this).fadeOut();
			$('#packages-pricing-signup > #package-selected > .package#'+package_type).fadeOut();
			$('#packages-pricing-signup > form .btn-signup').removeClass(package_type);
		});

		// CountUp on Scroll
		$(".countup").scrollfire({
			offset: 0,
			topOffset: 150,
			bottomOffset: 150,
			onTopIn: function(elm, distance){
				//$(elm).animate({opacity: 1.0}, 1000);
			},
			onTopOut: function(elm, distance){
				//$(elm).animate({opacity: 0.1}, 1000);
			},
			onBottomIn: function(elm, distance){
				var $item = $(elm),
					countup = new CountUp(elm, $item.data("start"), $item.data("end"), $item.data("decimals") || 0, 2.5, {
						useEasing: true,
						useGrouping: true,
						separator: ',',
						decimal: '.',
						prefix : $item.data("prefix"),
						suffix: ''
					});
				countup.start();
			},
			onBottomOut: function(elm, distance){
				//$(elm).animate({opacity: 0.1}, 1000);
			}
		}).text("   ");

		/// Lazy load effects
		$(".lazy").scrollfire({
			offset: 0,
			topOffset: 50,
			bottomOffset: 0,
			onTopIn: function(elm, distance){
				//$(elm).animate({opacity: 1.0}, 1000);
			},
			onTopOut: function(elm, distance){
				//$(elm).animate({opacity: 0.1}, 1000);
			},
			onBottomIn: function(elm, distance){
				$(elm).removeClass("lazy").addClass("animated zoomIn");
			}
		});
		$(".lazy-slide").scrollfire({
			offset: 0,
			topOffset: 0,
			bottomOffset: 0,
			onBottomIn: function(elm, distance){
				$(elm).addClass("animated slideInRight");
			}
		});
		$(".lazy-slide-l").scrollfire({
			offset: 0,
			topOffset: 0,
			bottomOffset: 0,
			onBottomIn: function(elm, distance){
				$(elm).addClass("animated slideInLeft");
			}
		});
		$(".lazy-slide-u").scrollfire({
			offset: 0,
			topOffset: 0,
			bottomOffset: 0,
			onBottomIn: function(elm, distance){
				$(elm).addClass("animated slideInUp");
			}
		});
		$(".lazy-slide-d").scrollfire({
			offset: 0,
			topOffset: 0,
			bottomOffset: 0,
			onBottomIn: function(elm, distance){
				$(elm).addClass("animated slideInDown");
			}
		});
		$(".lazy-bounce").scrollfire({
			offset: 0,
			topOffset: 0,
			bottomOffset: 0,
			onBottomIn: function(elm, distance){
				$(elm).addClass("animated bounce");
			}
		});
		$(".lazy-roll").scrollfire({
			offset: 0,
			topOffset: 0,
			bottomOffset: 0,
			onBottomIn: function(elm, distance){
				$(elm).addClass("animated rollIn");
			}
		});

		// Stop videos form playing when modal is closed
		$(".modal").on('hidden.bs.modal', function (e) {
			var $iframe = $("iframe", e.target);
			if($iframe.length > 0){
				$iframe.attr("src", $iframe.attr("src"));
			}
		});

	});

}(window, jQuery));
