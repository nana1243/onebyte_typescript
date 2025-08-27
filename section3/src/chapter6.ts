/*
* `타입 단언`
* */

type Person = {
    name: string;
    age: number;
}
interface IPerson {
    name: string;
    age: number;
}


let person = {} as Person;
// person.name; // 에러 발생, person 객체에 name 속성이 없으므로 접근할 수 없다.

let person2 = <IPerson>{};

person.age = 30;
person.name = 'hennie';

person2.age=25;
person2.name='Dudu';

type Dog = {
    name: string;
    color: string;
}
let dog :Dog = {
    name: 'Buddy',
    color: 'brown'
}
let dog2 = {
    name: 'Buddy',
    color: 'brown',
    bread: 'Golden Retriever'
} as Dog;

/*
타입 단언의 규칙
-> 값 as 단언 <- 단언식
A가 B의 슈퍼타입이거나
A가 B의 서브타입인 경우에만 단언이 가능하다.
* */

let num1 = 10 as unknown; // upcasting, number 타입은 unknown 타입의 서브타입이므로 단언할 수 있다.
let num2 = 1 as never; // upcasting, number 타입은 never 타입의 슈퍼타입이므로 단언할 수 있다.

// let num3 = 10 as string; //에러 발생, number 타입은 string 타입의 슈퍼타입도 서브타입도 아니므로 단언할 수 없다.

/*
* const 단언
* */
let x = 10 as const; // x는 이제 10이라는 값만 가질 수 있다.
// x = 20; // 에러 발생, x는 10이라는 값만 가질 수 있다.

// cat.name = 'Snowy'; // 에러 발생, cat 객체의 속성은 변경할 수 없다.
// 읽기 전용이 된다.(=프로퍼티를 수정할 수 없는)
let cat = {
    name: 'Kitty',
    color: 'white'
} as const;

type Post = {
    title : string;
    content : string;
    author?: string;
}

let post: Post = {
    title : 'TypeScript Basics',
    content : 'This is a post about TypeScript basics.',
    author : "hennie"
}

// Non Null Assertion : undeifined나 null이 아님을 단언

const len: number = post.author!.length; // author 속성이 없을 수도 있으므로 optional chaining을 사용해야 한다.
