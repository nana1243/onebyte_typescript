/*
* 함수 타입 표현식 : 함수의 타입을 별도로 지정 하는 의미
* */

type Operation = (a: number, b: number) => number;


const add:Operation = (a,b) => a + b;
const sub:Operation = (a, b) => a - b;
const mul:Operation = (a, b) => a * b;
const div:Operation = (a, b) => a / b;


const addV2:(a: number, b: number) => number = (a,b)=> a+b;


/*
* 호출 시그니처(콜 시그니처): 호출 시그니쳐(Call Signature)는 함수 타입 표현식과 동일하게 함수의 타입을 별도로 정의하는 방식입니다.
* */

//  위 코드처럼 객체를 정의하듯 함수의 타입을 별도로 정의할 수 있습니다.
// 고로 이때 다음과 같이 호출 시그니쳐 아래에 프로퍼티를 추가 정의하는 것도 가능합니다. 이렇게 할 경우 함수이자 일반 객체를 의미하는 타입으로 정의되며 이를 하이브리드 타입이라고 부릅니다.
type OperationV2 = {
    (a: number, b: number): number;
    description?: string;
}

const mod:OperationV2 = (a,b) => a % b;
mod.description = '나머지 구하는 함수';
mod(5, 2);
console.log(mod.description);