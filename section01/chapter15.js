// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴( 대부분 사용)

// 2. 객체 프로퍼티 ( 객체 속성성)
// 키값: 문자열, 숫자 가능 띄어쓰기 쓸려면 ""로 감싸야함
let person = {
  name: "홍길동",
  age: 20,
  height: 175.5,
  isMarried: false,
  sayHello: function () {
    console.log("안녕하세요");
  },
  "like cat": true,
};

// 3. 객체 프로퍼티 다루는 방법
// 3. 1 특정 프로퍼티 접근( 점표기법, 괄호 표기법)

let name = person.name; // 존재 하지 않는 값 접근시 undefined 반환
// console.log(name); // name에 줄이 그어지는 이유는 vscode 타입스크립트 때문!

let age = person["age"]; // 괄호 표기법 사용시 키값은 ""문자열로 작성해야함
// console.log(age);

let property = "isMarried";
let isMarried = person[property];
// console.log(isMarried);

// 3.2 새로운 프로퍼티 추가하는 방법
person.job = "developer";
person["favoriteFood"] = "라면";
// console.log(person);

// 3. 3. 프로퍼티 수정하는 방법
person.job = "designer";
person["favoriteFood"] = "치킨";
// console.log(person);

// 3. 4. 프로퍼티 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3. 5 프로퍼티 존재 여부 확인하는 방법(in 연산자) key값이 존재하면 true, 존재하지 않으면 false
let result1 = "name" in person;
let result2 = "kim" in person;
console.log(result1, result2);
