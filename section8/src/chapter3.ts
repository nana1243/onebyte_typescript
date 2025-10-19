/*
* 템플릿 리터럴 타입
* */

type Color = 'red' | 'blue' | 'green';
type Animal = 'cat' | 'dog';

type ColorfulAnimal = `${Color}-${Animal}`;
const pet1: ColorfulAnimal = 'red-cat'; // 유효
const pet2: ColorfulAnimal = 'blue-dog'; // 유효
// const pet3: ColorfulAnimal = 'yellow-cat'; // 오류: 'yellow'는 Color에 포함되지 않음