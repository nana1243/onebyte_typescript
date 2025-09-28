/*
* 타입 변수 응용 하기
* */

// a, b의 타입이 다른 경우
const swap = <T, U>(a: T, b: U): [U, T] => [b,a];
const result1 = swap<string, number>('hello', 123);


// index 접근해서 타입 추론 해야하는 경우
// rest 파라미터로 받아서 Tuple 타입으로 추론
function returnFirstValue<T>(arr: [T,...unknown[]]): T | null {
    return arr.length !==0 ? arr[0] : null;
}
const first1 = returnFirstValue<number>([1,2,3]);
const first2 = returnFirstValue<string>(['a','b','c']);
// const first3 = returnFirstValue([1,'b',true]);
