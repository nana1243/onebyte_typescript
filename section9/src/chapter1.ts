/*분산적인 조건부 타입*/

type StringNumberSwitch<T> = T extends number ? number : string;

let a: StringNumberSwitch<number> = 123; // a는 number 타입이 된다.
let b: StringNumberSwitch<string> = 'hello'; // b는 string 타입이 된다.
let c: StringNumberSwitch<number | string> = 123; // c는 number | string 타입이 된다.

let d : StringNumberSwitch<boolean | number| string> = 'hello'; // d는 string | number | string 타입이 된다.


// 실용적 예제

type Exclude<T, U> = T extends U ? never : T;
type MyExclude = Exclude<"a" | "b" | "c", "a" | "c">; // MyExclude는 "b" 타입이 된다.


