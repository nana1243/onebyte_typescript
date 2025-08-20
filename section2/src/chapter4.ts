let user: {
    id: number;
    name: string;
    nickname: string
} = {
    id: 1,
    name: '이창현',
    nickname: 'winter'
}

// user가 여러명일 경우 tpye을 정하는 코드가 많아짐
// 또한 user1, user2 코드가 중복이 됨

//1. 타입 별칭을 사용하면 타입을 변수처럼 사용가능함

type User = {
    id: number;
    name: string;
    nickname: string;
}

const user1: User = {
    id: 1,
    name: '이창현',
    nickname: 'winter'
}
const user2: User = {
    id: 2,
    name: '두창현',
    nickname: 'winter'
}

// 타입 별칭을 사용했을때 조심해야할것들
// 같은 스코프 내에세 다른 변수명으로 사용해야함

function func() {
    type User = {}
}

// index 시그니처
// 어떤 상황에 필요한가? => key 와 value에 대한 규칙으로 유연하게 선언 하는 방식

type CountryCode = {
    Korea: string;
    UnitedStates: string;
    UnitedKingdom: string
};

type CountryCodeV2 = {
    [key: string]: string
}

let countryCode: CountryCodeV2 = {
    Korea: 'ks',
    UnitedStates: 'us',
    UnitedKingdom: 'uk'
}
type CountryNumberCode = {
    [key: string]: number;
    Korea : number; // 무조건 Korea키값을 가져야한다. 그리고 인덱스 시그니처에 선언한 타입과 동일/ 호환 되는 타입을 선언해야함
}

let countryNumberCode : CountryNumberCode = {
    Korea: 410,
    UnitedStates: 840
}
// 빈객체일때 오류가 안남
let countryNumberCode2 : CountryNumberCode = {
    Korea : 410
};