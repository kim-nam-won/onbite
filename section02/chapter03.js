// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr; // four = 4는 기본값을 설정한 것이다.
// console.log(one, two, three, four); // 1 2 3

// 2. 객체의 구조 분해 할당
let person = {
  name: "홍길동",
  age: 20,
  gender: "남자",
};
// let { name, age: myAge, gender, extra = "hello" } = person; // extra = "hello"는 기본값을 설정한 것이다.
// console.log(name, myAge, gender, extra); // extra는 undefined // age: myAge는 age를 myAge로 키값 변경

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개 변수를 받는 방법
// 객체를 넘겨주면서 객체의 키값을 받아올 수 있다. 단순한 값 1개를 넘겨주면 그 값이 들어간다.
const func = ({ name, age, gender, extra }) => {
  console.log(name, age, gender, extra);
};
func(person);
