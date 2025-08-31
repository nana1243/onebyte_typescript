/*
서로소 유니온 타입
: 교집합이 없는 타입으로만 만든 유니온 타입
* */

type Admin = {
    tag : 'ADMIN';
    name: string;
    kickCount: number;
};
type Member = {
    tag : 'MEMBER';
    name: string;
    point: number;
};
type Guest = {
    tag : 'GUEST';
    name: number;
    visitCount: number;
};

type User = Admin | Member | Guest; // 서로소 유니온 타입


// Admin -> {name}님 현재까지 {kickCount}회 강퇴당함
// Member -> {name}님 현재까지 {point}점 보유중
// Guest -> {name}님 현재까지 {visitCount}회 방문중

function login(user: Admin| Member | Guest) :void{
    if('kickCount' in user){
        console.log(`${user.name}님 현재까지 ${user.kickCount}회 강퇴당함`);
    } else if ('point' in user){
        console.log(`${user.name}님 현재까지 ${user.point}점 보유중`);
    } else {
        console.log(`${user.name}님 현재까지 ${user.visitCount}회 방문중`);
    }
}


function loginV2(user:Admin| Member | Guest) {
    switch (user.tag) {
        case "ADMIN":
            console.log(`${user.name}님 현재까지 ${user.kickCount}회 강퇴당함`);
            break;
        case "MEMBER":
            console.log(`${user.name}님 현재까지 ${user.point}점 보유중`);
            break;
        case "GUEST":
            console.log(`${user.name}님 현재까지 ${user.visitCount}회 방문중`);
            break;
    }
}

/*
* 복습 겸 다른 예시
* */
// 비동기 작업의 결과를 처리하는 객체

type SuccessResponse = {
    status: 'SUCCESS';
    data: string;
};
type ErrorResponse = {
    status: 'ERROR';
    error: string;
};
type LoadingResponse = {
    status: 'LOADING';
};
type Response = SuccessResponse | ErrorResponse | LoadingResponse; // 서로소 유니온 타입
// Response 타입을 처리하는 함수
function handleResponse(response: Response) {
    switch (response.status) {
        case 'SUCCESS':
            console.log(`Data: ${response.data}`);
            break;
        case 'ERROR':
            console.log(`Error: ${response.error}`);
            break;
        case 'LOADING':
            console.log('Loading...');
            break;
    }
}