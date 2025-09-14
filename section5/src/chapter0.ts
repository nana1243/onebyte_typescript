/*
* interface
* 1. 선택적프로퍼티 : `?` 사용
* 2. 읽기전용 프로퍼티 : `readonly` 사용
* 3. 함수 오버로딩 지원 : 함수 표현식으로는 불가하나, 호출 시그니철르 이용해는 가능함
* 4.
* */


interface Person {
    readonly name : string; // 읽기 전용 프로퍼티
    age? : number;
    sayHello(): void;
    sayHello(a:number, b:number): void;
    nickname?: string | number;
}

const person : Person = {
    name : 'John',
    age : 30,
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    },
}

const person2 : { sayHello(a, b): void; name: string } = {
    name : 'Jane',
    sayHello(a,b) {
        console.log('a+b', a+b)
    }
}

person.sayHello(2,3);
