/*
* 제네릭 인터페이스
*  타입변수(공식문서) : T, V
*   - 종종 다른 문서에는 타입 파라미터(type parameter)
* */

interface KeyPair<T, V> {
    key: T;
    value: V;
}

const keyPair1: KeyPair<string,number> = {
    key : "key",
    value : 123
}

/*
* 인덱스 시그니처
* */

interface NumberMap {
    [key: string] : number;
}

const numberMap: NumberMap = {
    'key1' : 123,
    'key2' : 456
}

interface MapArray<V>{
    [key:string] : V;
}

const booleanMap: MapArray<boolean> = {
    'key1' : true,
    'key2' : false
}

/*
* 제네릭 타입 별칭
* */

type MapArrayV2<V> = {
    [key:string] : V;
}

/*
* 제네릭 인터페이스 활용 예시
*  -> 유저 관리 프로그램
*   -> 유저 구분 : 학생유저, 개발자
* */

interface Student{
    type: "student";
    school: string;
 }

 interface Developer {
     type: "developer";
     skill: string;
 }

 interface User<T> {
    name: string;
    profile :T;
 }

 const studentUser: User<Student> = {
    name: "Alice",
    profile: {
        type: "student",
        school: "MIT"
    }
 }

const developerUser: User<Developer> = {
    name: "Bob",
    profile: {
        type: "developer",
        skill: "JavaScript"
    }
}