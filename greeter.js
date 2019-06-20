// let decimal: number = 6;
// let isDone: boolean = false;
// let color: string = 'red';
// color = 'red';
//
// let fullName:string = "Bob Dylan";
// let age:number = 100;
// let sentence:string = `Hello, my name is ${ fullName }.
// I'll be ${ age + 1 } years old next month.
// `;
// let list: number[] = [1,2,3,4,5,6,7,8,9,10]; //Way one
// let list: Array<number> = [1,2,3,4,5,6,7,8,9,10]; //way two
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
