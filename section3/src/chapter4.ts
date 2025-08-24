/*
* 대수타입
* -> 여러 개의 타입을 합성 해서 새롭게 만들어낸 타입
* -> 합집합 타입과 교집합 타입이 존재한다.
* */

// 1. 합집합 타입 (Union Type)

let a : string | number; // string과 number 타입을 합성한 합집합 타입
a = 'hello'; // string 타입으로 할당
a = 123; // number 타입으로 할당
// a = true; // 에러 발생, boolean 타입은 할당할 수 없다

let arr : (string | number)[]; // string과 number 타입을 요소로 가지는 배열
arr = ['hello', 123]; // string과 number 타입의 요소를 포함하는 배열

type Dog = {
    name: string;
    color: string;
}
type Person = {
    name : string;
    language: string;
}

type Union = Dog | Person; // Dog 타입과 Person 타입을 합성한 합집합 타입

let union1 : Union = {
    name: 'Buddy',
    color: 'brown'
};

let union2 : Union = {
    name : 'hennie',
    language: 'Korean'
}

let union3 : Union = {
    name : 'Dudu',
    color: 'black',
    language: 'English' // Dog 타입과 Person 타입의 속성을 모두 포함하는 객체
}

// 에러 발생, Dog 타입과 Person 타입의 속성을 모두 포함하지 않는 객체는 Union 타입으로 할당할 수 없다
// let union4 : Union = {
//     name: 'Dudu',
// }


// 2. 교집합 타입 (Intersection Type)

// 에러 발생, number 타입과 string 타입은 교집합이 없으므로 할당할 수 없다
let variable : number & string; // number 타입과 string 타입을 합성한 교집합 타입

type Intersection = Dog & Person; // Dog 타입과 Person 타입을 합성한 교집합 타입


let interseciton1 : Intersection = {
    name: 'Buddy',
    color: 'brown',
    language: 'English' // Dog 타입과 Person 타입의 속성을 모두 포함하는 객체
}
