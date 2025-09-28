/*Generic
*  제네릭 함수란? 타입변수와 함께 여러 타입의 값을 인수로 받아서 범용적으로 사용할 수 있는 함수를 의
* */

// T : 타입 변수
function func<T>(value:T) :T{
    return value;
}

const result1 = func<string>('hello');
const result2 = func<number>(123);
const result3 = func<boolean>(true);
const result4 = func<[number, number, number]>([1,2,3]); // Tuple 타입으로 추론