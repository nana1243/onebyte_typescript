/* `typescript`의 class*/

interface IEmployee {
    name: string;
    age: number;
    position: string;
    work(): void;
}

class Employee implements IEmployee{
    name: string;
    age : number;
    position : string;

    constructor({name, age, position} : {name: string, age:number, position:string}) {
        this.name = name;
        this.age = age;
        this.position = position
    }
    work() :void{
        console.log('일함')
    }

}

class ExecutiveOfficer extends Employee{
    officeNumber:number;

    constructor({name,age, position, officeNumber}) {
        super({name,age,position})
        this.officeNumber = officeNumber
    }
}


const employeeA = new Employee({
    name : 'hennie',
    age : 24,
    position : 'developer'
})

// 클래스가 타입으로도 됨
const employeeC : Employee = {
    name : 'hennie',
    age : 20,
    position : 'test',
    work() {
    }
}

