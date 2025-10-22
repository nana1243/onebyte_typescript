/*조건부 타입*/

type A = number extends string ? string : number;
const a: A = 123; // A는 number 타입이 된다.

type ObjA = {
    a:number;
}
type ObjB = {
    a:number;
    b:number;
}
type B = ObjA extends ObjB ? ObjB : ObjA;
const b:B = {
    a:1,
}

/*제네릭과 조건부 타입*/

type StringNumberSwitch<T> = T extends number ? number : string;

let varA :StringNumberSwitch<number> = 123; // varA는 number 타입이 된다.
let varB :StringNumberSwitch<string> = 'hello'; // varB는 string 타입이 된다.


// 오버로딩 시그니처
function removeSpaces<T>(text:T) : T extends string ? string: undefined;

function removeSpaces<T>(text:any){
    if(typeof text === "string") {
        return text.replaceAll(/\s+/g, '');
    }
    return undefined;
}

let result = removeSpaces('   hello   world   '); // result는 string 타입이 된다.
console.log(result); // "helloworld"

let result2 = removeSpaces(12345);
console.log(result2); // undefined
