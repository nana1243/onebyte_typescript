// 배열
const numArr: number[] = [1, 2, 3];
const stringArr: string[] = ['hello', 'i', 'am', 'hennie'];

const boolArr: boolean[] = [true, false];
const boolArr2: Array<boolean> = [true, false]; //generic 문법

// 배열에 들어 가는 요소 들의 타입이 다양할 경우

// union type
let multiArr: (string | number)[] = [1, 'hello'];


let doubleArr: number[][] = [numArr, [4, 5, 6]];
let doubleArr2: (string | number)[][] = [numArr, stringArr];


//tuple : 길이와 타입이 고정된 배열 , 타입스크립트 에서만 제공되는 기능

const tupleA: [number, number] = [1, 2];
const tupleB: [number, string, boolean] = [1, 'hello', false];

tupleA.push(3); // 배열메서드 모두 가능하긴함.

// tuple을 사용할떄 : 아래처럼 규칙이 있을때(index위치에 따라 규칙이 있는경우, 오류를 방지 할 수 있다)

const users: [string, number][] = [
    ['이정환', 1],
    ['투정환', 2],
    ['스정환', 3]
]

