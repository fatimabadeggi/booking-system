$(document).ready(function(){	
	
/* launch menu */
	var isMenuOpen = false;
	
	$("body").on("click", ".launch-menu-button", function(){
		openMenu();
	})
	$("body").on("click", ".launch-menu-mask, .launch-menu-close", function(){
		closeMenu();
	})
	$(document).keyup(function(e) {
		if (e.keyCode == 27 && isMenuOpen == true){
			closeMenu();
		}
	});
	
	function openMenu()
	{
		if($(".launch-menu-mask").length == 0)
		{
			$("body").append('<div class="launch-menu-mask"></div>');
		}
		$(".launch-menu-mask").show();
		$(".launch-menu").animate({
			right: "0px"
		}, 300);
		isMenuOpen = true;
	}
	
	function closeMenu()
	{
		$(".launch-menu-mask").hide();
		$(".launch-menu").animate({
			right: "-"+$(".launch-menu").width()+"px"
		}, 300);
		isMenuOpen = false;
	}

/* launch random background */
	$(".launch-image-banner.random").each(function(index, item){
		var images = $(".image-list li img", item),
			randomIndex = Math.floor(Math.random() * images.length);
		$(item).css("background-image", "url('" + $(images.get(randomIndex)).attr('src') + "')");
	})

/* launch accordion */
	$("ul[data-provide='accordion']").on("click", "li > h4", function(){
		var $item = $(this).parent().closest('li');
		if( $item.hasClass('active') || $item.hasClass('open')  )
		{
			accordionCollapse($item);
		}
		else
		{
			accordionExpand($item);
		}
	})
	
	function accordionExpand(item)
	{
		$list = $(item).parents('ul').first();
		$("li.active, li.open", $list).each(function(key, value){
			accordionCollapse($(this));
		});
		$(item).children('div').first().slideDown(300, function(){
			$(item).addClass('active');
		});
	}
	
	function accordionCollapse(item)
	{
		$(item).removeClass('active');
		$(item).children('div').first().slideUp(300, function(){
			$(item).removeClass('open')
		});
	}
	
});