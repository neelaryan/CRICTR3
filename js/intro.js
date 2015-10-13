$(function() {

	new WOW().init();

	var a='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	$('#arrow_up').one(a,function(){
		var circle = new ProgressBar.Circle('#progress2', {
        	color: '#479AED',
        	duration: 2000,
        	easing: 'easeInOut',
        	strokeWidth: 4
    	});
    	circle.animate(1);
	});
	$('#arrow_left').one(a,function(){
		var circle = new ProgressBar.Circle('#progress1', {
        	color: '#479AED',
        	duration: 2000,
        	easing: 'easeInOut',
        	strokeWidth: 4
    	});
    	circle.animate(1);
	});
	$('#arrow_right').one(a,function(){
		var circle = new ProgressBar.Circle('#progress3', {
        	color: '#479AED',
        	duration: 2000,
        	easing: 'easeInOut',
        	strokeWidth: 4
    	});
    	circle.animate(1);

    	$('#lock_left').animate({
    		'opacity':0.75
    	},8500);
		$('#lock_right').animate({
			'opacity':0.75
		},8500);
	});
	
	$('#lock_right').one(a,function(){
		setTimeout(function(){
			$('#cloud').removeClass('wow fadeIn').addClass('wow fadeOut').one(a,function(){
				$(this).hide();
			});
			$('#laptop').removeClass('wow fadeInDown').addClass('wow fadeOutUp').one(a,function(){
				$(this).hide();
			});
			$('#phone').removeClass('wow fadeInLeft').addClass('wow fadeOutRight').one(a,function(){
				$(this).hide();
			});
			$('#tablet').removeClass('wow fadeInRight').addClass('wow fadeOutLeft').one(a,function(){
				$(this).hide();
			});
			$('#arrow_up').removeClass('wow fadeIn').addClass('wow fadeOut').one(a,function(){
				$(this).hide();
			});
			$('#arrow_left').removeClass('wow fadeIn').addClass('wow fadeOut').one(a,function(){
				$(this).hide();
			});
			$('#arrow_right').removeClass('wow fadeIn').addClass('wow fadeOut').one(a,function(){
				$(this).hide();
			});
			$('#progress1').removeClass('wow progress').hide();
			$('#progress2').removeClass('wow progress').hide();
			$('#progress3').removeClass('wow progress').hide();

			setTimeout(function(){
				$('#lock_right').removeClass('wow fadeIn slideInRight').addClass('wow fadeOut').one(a,function(){
					$(this).hide();
				});
				$('#lock_left').removeClass('wow fadeIn slideInLeft').addClass('wow fadeOut').one(a,function(){
					$(this).hide();
					$('#main').bgswitcher({
						images: ["images/intro/back_1.png"],
						interval: 1000,
						duration: 750
					});
				});
			}, 1500);
		},2000);
		
	});

	$('#iiitmk_logo').one(a,function(){
		$(this).animate({marginLeft: "-=250"}, 1000);

	});
	
});