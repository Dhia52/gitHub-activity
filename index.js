$(function(){
	$('#button').on('click', function(){
		$('body').css('color', 'green');
		$('p:eq(0)').html("T'as vu ? Tout le texte est coloré en vert maintenant !");
		$('#button').hide();
	});
});
