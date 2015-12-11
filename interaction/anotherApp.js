
function Person(first, last, age, eye){
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
}

var scott = new Person("Scott", "Bromander", "52", "Green");
var kristy = new Person("Kristy", "Wessel", "104", "Black");

scott.firstName = "Prescott";
console.log(scott.firstName);