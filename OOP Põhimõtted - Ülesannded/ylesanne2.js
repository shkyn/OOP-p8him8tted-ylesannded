class Person {
    constructor() {
        this.firstname = "";
        this.lastname = "";
        this.age = 0;
    }
}  


class Student {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}


const person1 = new Person();
person1.firstname = "Alex";
person1.lastname = "Mets";
person1.age = 14;

const person2 = new Person();
person2.firstname = "Rasmus";
person2.lastname = "Ritson";
person2.age = 17;

const person3 = new Person();
person3.firstname = "Pille";
person3.lastname = "Laine";
person3.age = 36;

