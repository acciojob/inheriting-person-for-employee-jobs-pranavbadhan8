// complete this js code
function Person(name, age) {
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

function Employee(name, age, jobTitle) {
	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.years} years old, and my job title is ${this.jobTitle}`)
	}
}
  
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
