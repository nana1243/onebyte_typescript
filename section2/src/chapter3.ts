const user: {
    id: number
    name: string
} = {
    id: 1,
    name: 'hennie'
}

// object를 사용하면 객체에 대한 프로퍼티에 대한 정보를 알 수 없다

//1.객체 리터럴 타입
//구조적 기준으로 타입을 선언하기 때문에 구조적 타입 시스템이라고 한다.

const dog: {
    name: string;
    color: string
} = {
    name: 'lemon',
    color: 'blue',
}

// 옵셔널 프로퍼티 선언방식
const user1: {
    name?: string; // 선택적, 옵셔널 프로퍼티
    age: number
} = {
    age: 4
}
// 값을 바꾸는 행위를 막아준다

const config: { readonly apikey: string } = {apikey: 'Hello My Key'};

// config.apikey = 'TEST'; => 읽기 전용 속성