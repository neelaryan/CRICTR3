$(function() {
	var animationend='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	$('#table').css('visibility','visible').addClass('animated slideInUp').one(animationend,function(){
		$(this).removeClass('animated slideInUp');
		$('#phone').css('visibility','visible').addClass('animated slideInLeft').one(animationend,function(){
			$(this).removeClass('animated slideInLeft');
			$('#laptop').css('visibility','visible').addClass('animated fadeInDown').one(animationend,function(){
				$(this).removeClass('animated fadeInDown');
				$('#tablet').css('visibility','visible').addClass('animated slideInRight').one(animationend,function(){
					$(this).removeClass('animated slideInRight');
					$('#cloud').css('visibility','visible').addClass('animated fadeInRight').one(animationend,function(){
						$(this).removeClass('animated fadeInRight');
						$('#connectInternet').css('visibility','visible').one(animationend,function(){

							$('#virus_attack').css('visibility','visible').addClass('animated tada').one(animationend,function(){
								$(this).removeClass('animated tada');
								$('.path').css({
									'stroke': 'none',
									'fill': '#FF0000'}
								);
								$('#shaker').addClass('animated tada').one(animationend,function(){
									$(this).removeClass('animated tada');
									$('#connectInternet').addClass('animated flash').one(animationend,function(){
										$(this).removeClass('animated flash').addClass('animated fadeOut').one(animationend,function(){
											$(this).removeClass('animated fadeOut').css('visibility','hidden');
											$('#cloud').animate({opacity: 0.5}, 250);
											$('#cross').css('visibility','visible').addClass('animated fadeIn').one(animationend,function() {
												$(this).removeClass('animated fadeIn');
												$('#tablet').animate({opacity: 0.5}, 250);
												$('#laptop').animate({opacity: 0.5}, 250);
												$('#phone').animate({opacity: 0.5}, 250);
												$('#table').animate({opacity: 0.5}, 250);
												$('#cross').css('visibility','hidden');
												$('#cloud').css('visibility','hidden');
												$('#main').css('background','linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%');
												$('#virus_attack').animate({marginTop: "+=100"}, 1000);
												$('#virus_attack').animate({marginLeft: "+=350"}, 1000);
												$('#virus_attack').css({
													'-webkit-animation-iteration-count': '3',
													'-moz-animation-iteration-count': '3',
													'-ms-animation-iteration-count': '3',
													'-o-animation-iteration-count': '3'
												});
												$('#virus_attack').addClass('animated pulse').one(animationend,function(){
													$('#phone').animate({opacity: 0.75}, 500);
													$('#phone').addClass('animated shake').one(animationend,function(){
														$(this).removeClass('animated shake');
														$('#phone').animate({opacity: 1}, 500);
														$('#virus_attack').removeClass('animated pulse');
														$('#phone').addClass('animated shake').one(animationend,function(){
															$(this).removeClass('animated shake');
															$('#laptop').animate({opacity: 1}, 250).css('order',3);
															$('#table').animate({opacity: 1}, 250).css('order',1);
															$('#phone').css('order',2);
															$('#tablet').animate({opacity: 1}, 250).css('order',2);
															$('#main').css({
																'background': '',
																'background-color': '#99CCFF'
															});

															$('#virus_attack').css('order',4).addClass('animated pulse');
															$('#virus_attack').animate({marginTop: "-=100", marginLeft: "-=350"},1500);
															$('#virus_attack').css({
																'-webkit-animation-iteration-count': '1',
																'-moz-animation-iteration-count': '1',
																'-ms-animation-iteration-count': '1',
																'-o-animation-iteration-count': '1'
															});
															$('#virus_attack').addClass('animated zoomOutUp').one(animationend,function(){
																$(this).removeClass('animated zoomOutUp').css('visibility','hidden');
																$('#cloud').css('visibility','visible').animate({opacity: 1}, 1000);
																$('#right').css('visibility','visible').addClass('animated fadeIn').one(animationend,function(){
																	$(this).removeClass('animated fadeIn');
																	$('#shaker').addClass('animated tada').one(animationend,function(){
																		$(this).removeClass('animated tada');
																		$('#right').addClass('animated fadeOut').one(animationend,function(){
																			$(this).removeClass('animated fadeOut').css('visibility','hidden');
																			$('.path').css({
																				'stroke': '#2F2F2F',
																				'fill': '#414141'
																			});
																			$('#connectInternet').css('visibility','visible').addClass('animated fadeIn').one(animationend,function(){
																				$(this).removeClass('animated fadeIn').addClass('animated flash').one(animationend,function(){
																					$('.path').css({
																						'animation': '',
																						'animation-duration': '',
																						'animation-delay': ''
																					}).css({
																						'animation': 'dash 0.5s linear infinite',
																						'animation-duration': '2s',
																						'animation-delay': '1s'
																					});
																					setTimeout(function(){
																						$('.path').css({
																							'animation': '',
																							'animation-duration': '',
																							'animation-delay': ''
																						});
																						$('#connectInternet').css('visibility','hidden');
																						$('#cloud').addClass('animated fadeOutRight').one(animationend,function(){
																							$(this).css('visibility','hidden').removeClass('animated fadeOutRight');
																							$('#tablet').css({
																								'-webkit-animation-duration': '2s',
																								'-moz-animation-duration': '2s',
																								'-ms-animation-duration': '2s',
																								'-o-animation-duration': '2s'
																							});
																							$('#laptop').css({
																								'-webkit-animation-duration': '2s',
																								'-moz-animation-duration': '2s',
																								'-ms-animation-duration': '2s',
																								'-o-animation-duration': '2s'
																							});
																							/*$('#table').css({
																								'-webkit-animation-duration': '2s',
																								'-moz-animation-duration': '2s',
																								'-ms-animation-duration': '2s',
																								'-o-animation-duration': '2s'
																							});
																							$('#phone').css({
																								'-webkit-animation-duration': '2s',
																								'-moz-animation-duration': '2s',
																								'-ms-animation-duration': '2s',
																								'-o-animation-duration': '2s'
																							});*/
																							$('#tablet').animate({opacity: 0}, 500);
																							$('#laptop').animate({opacity: 0}, 500);
																							$('#phone').animate({opacity: 0}, 750);
																							$('#table').animate({opacity: 0}, 750);
																							$('#iiitmk_logo').css('visibility','visible').addClass('animated zoomInDown').one(animationend,function(){
																								$(this).removeClass('animated zoomInDown');
																								$(this).animate({
																									marginLeft: "-=275",
																									//marginTop: "-=50",
																									/*top: "+=" + $(this).height()*0.5,
																									left: "+=" + $(this).width()*0.5,
																									width: $(this).width()*0.5,
																									height: $(this).height()*0.5*/
																								}, 1500);
																							});
																						});
																					}, 3000);
																				});
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});

});