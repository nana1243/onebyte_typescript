/*
인터페이스 확장
1. extends 키워드 사용
2. 프로퍼티 재 정의하기
*/

// extends 키워드를 사용하여 인터페이스를 확장할 수 있습니다.(상속)
interface Animal{
    name : string;
    age : number;
}

// type으로도 상속이 가능함.
// type Animal = {
//     name : string;
//     age : number;
// }

interface Dog extends Animal{
    name : "Badook"; // 원본 프로퍼티의 서브타입이 되어야함.
    isBark : boolean;
}
interface Cat extends Animal{
    isScratch : boolean;
}


// 다중확장

interface Pet extends Dog, Cat{
    owner : string;
}

const pet : Pet = {
    name : "Badook",
    age : 3,
    isBark : true,
    isScratch : false,
    owner : "John"
}