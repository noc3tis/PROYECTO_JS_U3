$(document).ready(function(){
	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacion --
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.slider li').hide(); // Ocultanos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide
	$('.pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 4000);

	// FUNCIONES =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

	//Script del switch
	$('.checkbox').click(function(){
		if ($('input.checkbox').is(':checked')) {
			$('.theme').attr('href', 'css/dark.css');
		}else{
			$('.theme').attr('href', 'css/styles1.css');
		}
	})

	//===
	// VARIABLES
	//===
	const DATE_TARGET = new Date('04/13/2025 0:01 AM');
	// DOM for render
	const SPAN_DAYS = document.querySelector('span#days');
	const SPAN_HOURS = document.querySelector('span#hours');
	const SPAN_MINUTES = document.querySelector('span#minutes');
	const SPAN_SECONDS = document.querySelector('span#seconds');
	// Milliseconds for the calculations
	const MILLISECONDS_OF_A_SECOND = 1000;
	const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
	const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
	const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

	//===
	// FUNCTIONS
	//===

	/**
	 * Method that updates the countdown and the sample
	 */
	function updateCountdown() {
		// Calcs
		const NOW = new Date()
		const DURATION = DATE_TARGET - NOW;
		const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
		const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
		const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
		const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
		

		// Render
		SPAN_DAYS.textContent = REMAINING_DAYS;
		SPAN_HOURS.textContent = REMAINING_HOURS;
		SPAN_MINUTES.textContent = REMAINING_MINUTES;
		SPAN_SECONDS.textContent = REMAINING_SECONDS;
	}

	//===
	// INIT
	//===
	updateCountdown();
	// Refresh every second
	setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);

	const stars = document.querySelectorAll('.star');

	stars.forEach(function(star, index) {
		star.addEventListener('click', function(){
			for (let i = 0; i <= index; i++) {
				stars[i].classList.add('checked');
			}
			for (let i = index+1; i <stars.length; i++) {
				stars[i].classList.remove('checked');
			}
		})
	});

},1000);
		



