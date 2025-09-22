/*class
* -> 객체를 만들어 내는 틀
* */

class Student {
    // 필드
    name;
    age;
    grade;
    constructor({name, age, grade}) {
        this.age = age;
        this.name = name;
        this.grade = grade
    }
    study(){
        console.log('열시미 스터디!')
    }
    introduce(){
        console.log(`안녕 난 ${this.name} 이야`)
    }
}


class StudentDeveloper extends Student{
    favoriteSkill;

    constructor({name, age, grade, favoriteSkill}) {
        super({name, age, grade});
        this.favoriteSkill = favoriteSkill
    }

    programming(){
        console.log(`${this.favoriteSkill} is good!`)
    }

}

// class 이용해서 만든객체 : 인스턴스
const studentA = new Student({
    name : 'hennie',
    age : 30,
    grade : 'A+'
})


const studentB = new StudentDeveloper({
    name : 'hennie',
    age : 30,
    grade : 'A+',
    favoriteSkill : 'typescript'
})
console.log('studentA', studentA)
console.log('studentB', studentB)

