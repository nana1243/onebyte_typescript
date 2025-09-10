/*
* 함수 타입 호환성
* :: 특정 함수 타입을 함수 타입으로 취급해도 괜찮은가 판단하는
* 1. 반환값의 타입이 호환되는가
* 2. 매개변수의 타입이 호환되는가
* */

//1. 반환값의 타입이 호환되는가

type ReturnTypeA = () => number;
type ReturnTypeB = () => 10;

let a: ReturnTypeA = () => 10;
let b : ReturnTypeB = () => 10;

a = b; // OK
// b = a; // Error : Type 'number' is not assignable to type '10'.

//2. 매개변수의 타입이 호환되는가

//2-1 매개변수의 개수가 같을때
/*
* 결론적으로, 함수 타입의 할당은 안정성을 보장하기 위해 매개변수의 타입이 더 넓은 범위에서
* 더 좁은 범위로 할당되는 것을 허용합니다. (즉, 슈퍼타입이 서브타입으로 할당)
* */
type FuncA = (a: number) => void;
type FuncB = (a: 10) => void;

let funcA :FuncA = (a) => {};
let funcB :FuncB = (a) => {};

//funcA = funcB; //upCasting 일때는 안됨
funcB = funcA; // downCasting 일떄는 됨

type Animal = {
    name: string;
};

type Dog = {
    name: string;
    color: string;
};

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

//animalFunc = dogFunc; // ❌
dogFunc = animalFunc; // ✅

//2-2 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
// func2 = func1; // ❌

