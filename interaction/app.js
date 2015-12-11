$(document).ready(function(){
	init();
});

function init(){
	enable();
}

function enable(){
	$("#container").on('click', '.yupper', yupperClick);
	$("#container").on('click', '.meow', meowClick);
	$("#kittyFoo").on('click', appendDom);
}

function disable(){
	//
}

function appendDom(){
	$('#container').append("<button class='yupper'>Yupper do!</button>");
}

function meowClick(){
	alert("meow");
}

function yupperClick(){
	$("#container").append("<button class='meow'>Meow</button>");
}