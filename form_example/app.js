var array = [];

$(document).ready(function(){
	$("#employeeinfo").on('submit',function(event){
		event.preventDefault();

		var values = {};

		$.each($("#employeeinfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})
		
		$("#employeeinfo").find("input[type=text]").val("");
		console.log(values);
		appendDom(values);

		array.push(values);
		console.log(array);
	});

});

function appendDom(object){
	$("#container").append("<div></div>");
	var $el = $("#container").children().last();

	$el.append("<p>" + object.employeefirstname + "</p>");
	$el.append("<p>" + object.employeelastname + "</p>");
	$el.append("<p>" + object.employeenumber + "</p>");
}

