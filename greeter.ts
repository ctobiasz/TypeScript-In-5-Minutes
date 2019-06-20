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

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
