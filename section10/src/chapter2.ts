// Exclude type

type A = Exclude<string| boolean, boolean>

type ExcludeV2<T,U> = T extends U ? never : T;


// Extract
// Extract<T,U>
// T에서 U를 추출
type B = Extract<string | number | boolean, string | number>

// ReturnType
// -> 함수의 반환 타입을 추출

function funcA() {
    return 'Hello';
}
type C = ReturnType<typeof funcA>

type ReturnTypeV2<T> = T extends (...args: any[]) => infer R ? R : any;