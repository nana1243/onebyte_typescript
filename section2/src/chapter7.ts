function func1(): string {
    return "Hello World!";
}

function func2(): void {
    console.log("Hello World!");
}


let a:void = undefined; // void 타입은 undefined만 할당할 수 있다


// never : 불가능(모순) 타입 -> 함수가 절대 반환하지 않는 타입

function func3(): never {
    while (true){}
}

function func4(): never{
    throw new Error("This function always throws an error");
}