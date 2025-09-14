/*
* 선언 합침 : 두개의 인터페이스가 같은 이름을 가질 때, 하나로 합쳐지는 것
* */

interface Person {
  name: string;
}
interface Person {
  age: number;
}

const person :Person = {
    name : 'John',
    age : 30
}