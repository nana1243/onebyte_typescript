/*
* 인덱스드 엑세스 타입
* */

interface Post {
    title : string;
    content : string;
    author : {
        name : string;
        age : number;
    }
}
/*
* 인덱스드타입을 사용하면 아래와 같이 타입을 재사용할 수 있으며, Post의 타입이 변환되면
* prinAuthorInfo의 타입도 자동으로 변환된다.
* 예를 들어 prinAuthorInfo의 author 타입을 아래와 같이 정의했다면
*   function prinAuthorInfo(author:{name : string; age : number})
*   -> function prinAuthorInfo(author:Post['author'])
* *
 */
function prinAuthorInfo(author:Post['author']) {
    console.log(author.name);
    console.log(author.age);
}

const post :Post = {
    title : 'typescript',
    content : 'hello world',
    author : {
        name : 'kim',
        age : 20
    }
}

prinAuthorInfo(post.author);