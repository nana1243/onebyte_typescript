/*
* 사용자 정의 타입 가드
* */
interface Dog {
    name: string;
    isBark: boolean;
}

interface Cat {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;

// 사용자 정의 타입 가드 함수 : 타입스크립트에게 특정 타입임을 알려주는 함수
function isDog(animal:Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}
function isCat(animal:Animal): animal is Cat{
    return (animal as Cat).isScratch !== undefined;

}

function warning(animal: Animal) {
    if(isDog(animal)){
        console.log(`멍멍! ${animal.name}가 짖습니다.`)
    }
    if(isCat(animal)){
        console.log(`야옹! ${animal.name}가 할퀴었습니다.`)
    }

}


