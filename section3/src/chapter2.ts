/*
Unknown
*
*/
function unKnownExample() {
    let a: unknown = 1; //upcasting
    let b: unknown = 'hello'; //upcasting
    let c: unknown = true;  //upcasting
    let d: unknown = null;  //upcasting
    let e: unknown = undefined; //upcasting

    let unknownVar: unknown;
    // let num: number = unknownVar // 에러 발생, unknown 타입은 어떤 타입으로도 할당할 수 없다
    let str: string = unknownVar as string; // 타입 단언을 통해 unknown 타입을 string으로 변환
}

/*
*  Never
* */

function neverExample() {
    // never 타입은 절대 발생하지 않는 값을 나타낸다.
    // 예를 들어, 함수가 항상 예외를 던지거나 무한 루프에 빠지는 경우에 사용된다.

    function throwError(): never {
        throw new Error('This is an error');
    }

    function infiniteLoop(): never {
        while (true) {
            // 무한 루프
        }
    }

    let num: number = infiniteLoop(); // 이 코드는 실행되지 않으며, num 변수는 never 타입으로 추론된다.
    let str: string = throwError(); // 이 코드는 실행되지 않으며, str 변수는 never 타입으로 추론된다.


    // never 타입은 다른 타입으로 할당할 수 없다.
    let neverVar: never;
    // let num: number = neverVar; // 에러 발생, never 타입은 어떤 타입으로도 할당할 수 없다
}

/*
*  Void : undefined의 슈퍼타입이다
* */

function voidExample() {

    function voidFun(): void {
        console.log('This function returns nothing.')
    }
    let voidVar: void = undefined //upcasting
}


/*
* any
* */

function anyExample() {
    let unknownVar : unknown;
    let anyVar2: any;
    let neverVar : never;

    // any 타입은 모든 타입을 허용한다.
    let anyVar: any = 1; // upcasting
    anyVar = 'hello'; // upcasting

    //downcasting
    let num: number = anyVar; // any 타입은 어떤 타입으로도 할당할 수 있다.

    //never타입은 어떤 타입으로도 할당할 수 없다.
    // let num2: number = neverVar; // 에러 발생, never 타입은 어떤 타입으로도 할당할 수 없다
}