/*
* 객체 타입의 호환성
* -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
* * 객체 타입은 속성의 이름과 타입으로 정의된다.
* * -> 객체 타입은 속성의 이름과 타입이 일치하면 호환된다.
* * 예시:
* *   - Animal 타입과 Dog 타입이 있다.
* *   - Animal 타입은 name과 age 속성을 가진다.
* *   - Dog 타입은 Animal 타입의 속성(name, age)과 추가적인 속성(color)을 가진다.
* *   - Animal 타입은 Dog 타입의 모든 속성을 포함하므로 호환된다.
* *   - Dog 타입은 Animal 타입의 모든 속성을 포함하지 않으므로 호환되지 않는다.
* */

type Animal = {
    name: string;
    age: number;
};

type Dog = {
    name: string;
    age: number;
    color: string;
};

let animal: Animal = {
    name: 'Buddy',
    age: 5
};

let dog: Dog = {
    name: 'Buddy',
    age: 5,
    color: 'brown'
};

animal = dog; // Dog 타입은 Animal 타입의 모든 속성을 포함하므로 호환된다.
// dog = animal; // 에러 발생, Animal 타입은 Dog 타입의 모든 속성을 포함하지 않으므로 호환되지 않는다.

type Book = {
    name : string;
    price : string;
}

type ProgrammingBook = {
    name : string;
    price : string;
    skill : string;
}

let book :Book = {
    name: 'JavaScript Basics',
    price: '20$'
};

let programmingBook :ProgrammingBook = {
    name: 'TypeScript Basics',
    price: '30$',
    skill: 'TypeScript'
};


book = programmingBook; // ProgrammingBook 타입은 Book 타입의 모든 속성을 포함하므로 호환된다.
// programmingBook = book; // 에러 발생, Book 타입은 ProgrammingBook 타입의 모든 속성을 포함하지 않으므로 호환되지 않는다.

// 객체 리터럴을 쓸 경우에는 타입 호환성에 주의해야 한다.

let programmingBook2 :Book = {
    name: 'JavaScript Basics',
    price: '20$',
    // skill: 'JavaScript' // 이 속성은 Book 타입에는 없지만 ProgrammingBook 타입에는 있다.
};
