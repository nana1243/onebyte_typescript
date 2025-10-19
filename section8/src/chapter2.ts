/*
* mapped type example
* -> 맵드 타입은 기존의 객체 타입을 기반으로 새로운 객체 타입을 만드는 마법같은 타입 조작 기능입니다.
* -> 인터페이스는 사용할 수 없다. type에서만 사용가능하다.
* */

interface User{
    id: number;
    name :string;
    age: number;

}
type PartialUser = {
    [key in keyof User]?: User[key];
}

type BooleanUser = {
    [key in keyof User]: boolean;
}

type ReadonlyUser = {
    readonly [key in keyof User]: User[key]
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser():ReadonlyUser {
    return {
        id: 1,
        name: 'kim',
        age: 20
    }
}

// 수정하고픈 프로퍼티만 보내고 싶은 경우
function updateUser(user:PartialUser) {

}

// updateUser({id:1, name:'lee', age:25})
updateUser({ name:'lee' })
const user = fetchUser();
// user.id = 2;