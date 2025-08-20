// Enum type
// 여러가지 값들에 각각 이름을 부여해 열거해두어 사용하는 타입

enum Role {
    ADMIN,
    USER,
    GUEST
}
enum Language {
    korean = 'ko',
    english = 'en'
}

const user1 = {
    name  : 'Alice',
    role : Role.ADMIN,
    language : Language.korean
    // role : 0 // 관리자
}

const user2 = {
    name  : 'Bob',
    role : Role.USER,
    language : Language.english

    // role : 1 // 일반유저
}
const user3 = {
    name  : 'Charlie',
    role : Role.GUEST, // role : 2 // 게스트
    language : Language.english
}

console.log(user1, user2, user3) // Alice 0