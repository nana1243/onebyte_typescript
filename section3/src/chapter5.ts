/*
* 타입 추론
* -> 어떤 상황에서 추론하는지
*/

// 타입스크립트는 변수 선언 시 타입을 명시하지 않아도, 타입을 잘 추론함
// 즉, 변수의 초기값을 보고 타입을 자동으로 결정함

let a = 10; // 자동으로 number 타입으로 추론된다.
let b = 'hello'; // 자동으로 string 타입으로 추론된다.

let c = {
    id : 1,
    name: 'hennie',
    profile : {
        nickname: 'Dudu',
    },
    urls : 'https://naver.com'
}

let {id,name, profile, urls} = c; // 구조 분해 할당을 통해 변수에 타입이 자동으로 추론된다.
let {nickname} = profile; // profile 객체의 nickname 속성도 자동으로 string 타입으로 추론된다.


// 매개변수의 기본값이 있을 경우 및 함수의 리턴값이 있을 경우
function func(message = 'hello') {
    return "hello"
}

let d; //any로 현재 추론이됨
d=10;
d.toFixed()

d= 'hello'; // 문자열로 재할당 해도 상관이 없긴함
d.toLowerCase(); // 문자열 메서드를 호출할 수 있다.

// 타입을 추론시, 최적의 공통 타입을 찾는다.
let arr = [1, 'string'];
arr.push(2); // 배열에 숫자를 추가할 수 있다.
arr.push('another string'); // 배열에 문자열을 추가할 수 있다.