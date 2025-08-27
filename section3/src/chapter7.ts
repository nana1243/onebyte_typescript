/*
* 타입 좁히기
* 조건문 등을 이용해 넓은 타입에 대해 좁은 타입을 유추하는 방법
* if (typeof === …) 처럼 조건문과 함께 사용해 타입을 좁히는 이런 표현들을 “타입 가드”라고 부릅니다. 정리하면 타입 가드를 이용해 타입을 좁혀 사용할 수 있습니다.
*   instanceof를 이용하면 내장 클래스 타입을 보장할 수 있는 타입가드를 만들 수 있습니다.
*   우리가 직접 만든 타입과 함께 사용하려면 다음과 같이 in 연산자를 이용해야 합니다.
*
**/

type Person = {
    name: string;
    age: number;

}

function func(value: string | number | Date| null |Person) {
    const isTypeString = typeof value === 'string';
    const isTypeNumber = typeof value === 'number';
    const isTypeObject = typeof value === 'object';
    const isTypeDate = value instanceof Date; //instanceof를 이용하면 내장 클래스 타입을 보장할 수 있는 타입가드를 만들 수 있습니다.

    if (isTypeString) {
        console.log(value.toUpperCase());
    } else if (isTypeNumber){
        console.log(value.toFixed(2));
    }
    // else if(isTypeObject){ // null도 object타입이기 때문에 에러가 발생할 수 있음
    //     console.log(value.getTime())
    // }
    else if (isTypeDate){
        console.log(value.getTime())
    }else if(value && 'age' in value){ // 우리가 직접 만든 타입과 함께 사용하려면 다음과 같이 in 연산자를 이용해야 합니다.
        console.log(value.age); //Person 타입으로 좁혀짐
    }
    else{
        console.log('value is neither string nor number');
    }
}