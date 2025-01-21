// 1. 상수 객체

const animal = {
  name: "멍멍이",
  type: "개",
  color: "black ",
};

animal.age = 2; //추가
animal.name = "뭉뭉이"; //수정
delete animal.type; //삭제

// animal = 123; //에러발생 상수객체이기 때문에 재할당 불가능 const는 재할당 불가능
console.log(animal);

const person = {
  name: "철수",
  age: 12,
  // 매서드 선언
  sayHello() {
    console.log("안녕하세요");
  },
  // 매서드 일반 함수
  sayHello2: function () {
    console.log("안녕하세요2");
  },
  // 매서드 화살표 함수
  sayHello3: () => {
    console.log("안녕하세요3");
  },
};

// 매서드는 객체의 동작을 정의한다.
person.sayHello();
person["sayHello2"]();
