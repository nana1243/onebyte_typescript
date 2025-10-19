interface Post {
    title : string;
    content : string;
    author : {
        name : string;
        age : number;
    }
}
type PostList = Post[];

/*
*  인덱스드타입을 사용하면 아래와 같이 key 사용시 오류가 나고 타입을 사용하면 오류가 나지 않는다.
*  -> 즉, author:Post[keyType] 처럼 인덱스드 타입은 **타입** 이다.
* */
const key = 'author';
type keyType = 'author';
function prinAuthorInfo(author:Post[keyType]) {
    console.log(author.name);
    console.log(author.age);
}

/*
* PostList는 Post[] 타입이므로 PostList[number]는 Post 타입이 된다.
* -> number 타입을 통해 배열의 요소에 접근할 수 있기 때문이다.
* */
const post: PostList[number] = {
    title : 'typescript',
    content : 'hello world',
    author : {
        name : 'kim',
        age : 20
    }
}
// tuple과 사용하는 예제

type Tup = [number, string, boolean];
type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean
// type Tup3 = Tup[3]; // undefined
type Tups = Tup[number]; // number | string | boolean

const tup1 : Tup1 = 'hello';
console.log(tup1);
const tup2 : Tup2 = true;
console.log(tup2);
const tups : Tups = false;
console.log(tups);