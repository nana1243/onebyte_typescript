/*
* key of 연산자
* ->e.g)  key: keyof Person
* -> keyof Person 으로 정의하면 Person 인터페이스의 모든 키들을 유니온 타입으로 묶어준다.
* :: 만약에 key : "name" | "age" 로 정의했다면 key에 들어갈 수 있는 값은 "name" 또는 "age" 밖에 들어갈 수 없다.
* ->  "name" | "age"  이렇게 정의하는건 좋지 않는 방법이다. 왜냐하면 Person 인터페이스가 변경되었을 때 일일이 수정을 해줘야 하기 때문이다.
*
* */

interface Person{
    name : string;
    age: number;
}

// key of 연산자는 뒤에 무조건 타입이 와야한다.
// e.g) key of person -> X
function getPropertyKey(person: Person, key: keyof Person){
    return person[key];
}

const person : Person = {
    name : 'lee',
    age : 30
}
getPropertyKey(person, 'name')

// keyof typeof person 같은 형식으로 사용할 수 있다.
function getPropertyV2(person: Person, key: keyof typeof person){
    return person[key];
}
