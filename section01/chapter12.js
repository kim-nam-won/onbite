function funcA() {
  //   console.log("funcA");
}

let varA = funcA; // 함수 자체를 변수에 담아놓을수도 있다 호출하지 않고
varA();

// 값으로써 만든 함수를 함수 표현식이라고 한다. -> 호이스팅 안된다 변수에 담았기때문 let, const가 호이스팅이 안되잖아!
let varB = function funcB() {
  // 익명함수
  // console.log("funcB");
};

varB(); // 가능하다 그런데 funcB(); 는 불가능하다
// funcB(); // 불가능하다 -> 함수의 이름이 funcB가 아니라 varB이기 때문이다

// 2. 화살표 함수

let varC = (value) => {
  console.log(value);
  return value + 3;
};

console.log(varC(10));
