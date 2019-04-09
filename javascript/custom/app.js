$(function() {

  $('#menu-tabs li').click(function(){
  	var thisClass = this.className.slice(0,2);
  	$('ul.t1').hide();
  	$('ul.t2').hide();
  	$('ul.t3').hide();
  	$('ul.' + thisClass).fadeIn(500);
  	$('#menu-tabs li').removeClass('active');
  	$(this).addClass('active');
  	return false;
  });
  $('li.t1').click();



});
