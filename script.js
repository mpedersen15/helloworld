var displayed = 1;
$(document).ready(function(){
	$('.body#2').hide();
	$('.body#3').hide();
	$('.body#4').hide();
	
	
	$('#btn1').click(function(){
		switch(displayed){
			case 1:	
			break;
			case 2:
				$('#2').hide("slide",{direction:"right"},500,function(){
					$('#1').show("slide",{direction:"left"},500);
				});
				displayed = 1;
			break;
			case 3:
				$('#3').slideUp(500,function(){
				$('#1').slideDown(500);});
				displayed = 1;
			break;
			case 4:
				$('#4').slideUp(500,function(){
				$('#1').slideDown(500);});
				displayed = 1;
			break;
		}
	});
	
	$('#btn2').click(function(){
		switch(displayed){
			case 1:
				$('#1').slideUp(500,function(){
				$('#2').slideDown(500);});
				displayed = 2;
			break;
			case 2:
			break;
			case 3:
				$('#3').slideUp(500,function(){
				$('#2').slideDown(500);});
				displayed = 3;
			break;
			case 4:
				$('#4').slideUp(500,function(){
				$('#2').slideDown(500);});
				displayed = 4;
			break;
		}
	});
	$('#btn3').click(function(){
		switch(displayed){
			case 1:
				$('#1').slideUp(500,function(){
				$('#3').slideDown(500);});
				displayed = 3;
			break;
			case 2:
				$('#2').slideUp(500,function(){
				$('#3').slideDown(500);});
				displayed = 3;
			break;
			case 3:
			break;
			case 4:
				$('#4').slideUp(500,function(){
				$('#3').slideDown(500);});
				displayed = 3;
			break;
		}
	});
	$('#btn4').click(function(){
		switch(displayed){
			case 1:
				$('#1').slideUp(500,function(){
				$('#4').slideDown(500);});
				displayed = 4;
			break;
			case 2:
				$('#2').slideUp(500,function(){
				$('#4').slideDown(500);});
				displayed = 4;
			break;
			case 3:
				$('#3').slideUp(500,function(){
				$('#4').slideDown(500);});
				displayed = 4;
			break;
			case 4:
			break;
		}
	});
});