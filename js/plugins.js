$(document).ready(function(){
	$('.carousel').carousel(
	{
		interval:6000;
	});
	
	
	//show color-box when click on gear-box
	
	
	$('.gear-check').click(function()
	{	
		$('.color-option').fadeToggle();
		
	});
	
	