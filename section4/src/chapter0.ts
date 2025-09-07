
// 어떤 타입의 매개변수를 받고, 어떤 타입의 결과값을 반환하는지 이야기
// 어떤 [타입의] 값을 받고, 어떤 [타입의] 값을 반환하는지 이야기
function add(a: number, b: number): number {
    return a + b;
}

/*
* 화살표 함수의 타입을 정의하는 방법
* */

const add2 = (a:number,b: number) : number => a+b;

/*
* 함수의 매개변수 : 기본값을 기반으로 타입을 유추
* 선택적 매개변수 `?` : 있어도 되고 없어도 되는 매개변수
* 필수 매개변수는 선택적 매개변수보다 항상 앞에 선언되어 있어야한다.
* */
function introduce(name = 'kim', tall? : number ) {
    console.log(`name : ${name}`);
    // tall이 undefined일 수도 있기 때문에 에러 발생
    // 타입가드를 통해 해결
    if(tall){
        console.log(`tall : ${tall + 10}`);
    }
}

introduce('park', 180);


// rest parameter

function sum(...numbers: number[]): number {
    const result = numbers.reduce((acc, cur) => acc + cur, 0);
    console.log(`result :: ${result}`);
    return result;
}

sum(1,2,3,4,5);
sum(1,2,3,4,5,6,7,8,9,10);


// 튜플타입을 통해 인수 갯수 제한하기
function sumV2(...rest : [number, number, number]) {
    const result = rest.reduce((acc, cur) => acc + cur, 0);
    console.log(`result in sumV2 :: ${result}`);
    return result;
}

sumV2(1,2,3); //3개의 인수까지 허용