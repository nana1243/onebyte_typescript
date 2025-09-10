/*
함수 오버 로딩
:: 함수 오버로딩은 동일한 함수 이름으로 여러 개의 함수 시그니처를 정의하는 기능입니다.
:: TypeScript는 호출 시점에 전달된 인수에 따라 적절한 함수 시그니처를 선택합니다.
(javascript는 지원하지 않으나, typescript는 지원함)
*/

// 함수 오버로딩 예제

// 버전들
function func(a: number): number; // 첫 번째 시그니처
function func(a: number, b: number , c:number): number; // 두 번째 시그니처

// 실제 구현
function func(a: number, b?: number, c?: number): number {
    if (b !== undefined && c !== undefined) {
        return a + b + c; // 세 개의 매개변수가 모두 제공된 경우
    }
    return a * 2; // 하나의 매개변수만 제공된 경우
}

func(10);
func(10, 20, 30);
// func(10, 20); // Error: No overload matches this call.