$(document).ready(function(){
	$('.friendCard__button').click(function(event){
		event.preventDefault();
	});
});

//===Burger===========

$(document).ready(function(){
	$('.header__container_burger').click(function(event){
		$('.header__container_burger,.header__container_menu').toggleClass('active');
	});
});

//===SliderSettings====

$(document).ready(function(){
	$('.friends__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true
				}
			},
			{
				breakpoint: 767,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});


//===Modals==============
//= Charly =
$(document).ready(function(){
	$('#charlyCard').click(function(){
		$('#charlyModal').addClass('activeM');
	});
	$('#charlyClose').click(function(){
		$('#charlyModal').removeClass('activeM');
	});
});

//= Freddie =
$(document).ready(function(){
	$('#freddieCard').click(function(){
		$('#freddieModal').addClass('activeM');
	});
	$('#freddieClose').click(function(){
		$('#freddieModal').removeClass('activeM');
	});
});

//= Jennifer =
$(document).ready(function(){
	$('#jenniferCard').click(function(){
		$('#jenniferModal').addClass('activeM');
	});
	$('#jenniferClose').click(function(){
		$('#jenniferModal').removeClass('activeM');
	});
});

//= Katrine =
$(document).ready(function(){
	$('#katrineCard').click(function(){
		$('#katrineModal').addClass('activeM');
	});
	$('#katrineClose').click(function(){
		$('#katrineModal').removeClass('activeM');
	});
});

//= Scarlett =
$(document).ready(function(){
	$('#scarlettCard').click(function(){
		$('#scarlettModal').addClass('activeM');
	});
	$('#scarlettClose').click(function(){
		$('#scarlettModal').removeClass('activeM');
	});
});

//= Sophia =
$(document).ready(function(){
	$('#sophiaCard').click(function(){
		$('#sophiaModal').addClass('activeM');
	});
	$('#sophiaClose').click(function(){
		$('#sophiaModal').removeClass('activeM');
	});
});

//= Sophia =
$(document).ready(function(){
	$('#timmyCard').click(function(){
		$('#timmyModal').addClass('activeM');
	});
	$('#timmyClose').click(function(){
		$('#timmyModal').removeClass('activeM');
	});
});

//= Woody =
$(document).ready(function(){
	$('#woodyCard').click(function(){
		$('#woodyModal').addClass('activeM');
	});
	$('#woodyClose').click(function(){
		$('#woodyModal').removeClass('activeM');
	});
});