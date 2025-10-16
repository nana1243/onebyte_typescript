/*
* promise 객체
* -> 타입을 지정하면 resolve 함수의 매개변수 타입이 지정됨
* -> 타입을 지정하지 않으면 resolve함수의 매개변수는 unknown 타입이 됨
* */

const promise = new Promise<number>((resolve, reject)=>{
    setTimeout(()=>{
        // resolve(1234)
        reject(new Error('실패'))
    }, 1000)

    promise.then((response)=>{
        console.log(response * 10)
    }).catch((error)=>{
        console.log(error)
    })
})
/*
* promive를 반환하는 함수의 타입을 정의
* 1. fetchPost() : Promise<Post> : 반환타입을 통해 하거나
* 2. new Promise<Post>( (resolve, reject)로 정의 할 수 있다.
* */

interface Post {
    id:number;
    title:string;
    content:string;
}

function fetchPost() : Promise<Post> {
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            resolve({
                id:1,
                title:'hello',
                content:'hi'
            })
        },1000)
    })
}

const postRequest = fetchPost();
postRequest.then((post)=>{
    console.log(post.id)
})