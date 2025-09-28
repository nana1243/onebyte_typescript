
class EmployeeV2 implements IEmployee{
    protected name: string; // protected : 상속받은 클래스에서 접근 가능
    private age : number; // private : 클래스 내부에서만 접근 가능
    public position : string; // public : 클래스 내부, 외부, 상속받은 클래스에서 모두 접근 가능

    constructor({name, age, position} : {name: string, age:number, position:string}) {
        this.name = name;
        this.age = age;
        this.position = position
    }
    work() :void{
        console.log('일함')
    }

}

const employeeA = new EmployeeV2({
    name : 'hennie',
    age : 24,
    position : 'developer'
});

