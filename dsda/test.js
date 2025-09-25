class Person {
    constructor(){
        console.log("person constructor");
    }
    getData(){
        console.log("hi i'm person");
    }
}
class Student extends Person {

    constructor(){
        super();
        console.log("student constructor");
    }
}
const s = new Student();


