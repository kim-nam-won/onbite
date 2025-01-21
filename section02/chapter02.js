// 단락 평가
// 논리 연산자를 사용할 때, 코드를 단축시킬 수 있는 방법이 있다.
// && 연산자
// 앞의 피연산자가 Truthy한 값이면 뒤의 피연산자를 반환한다.
// 앞의 피연산자가 Falsy한 값이면 앞의 피연산자를 반환한다.
// || 연산자
// 앞의 피연산자가 Truthy한 값이면 앞의 피연산자를 반환한다.
// 앞의 피연산자가 Falsy한 값이면 뒤의 피연산자를 반환한다.
// function returnFalse() {
//   console.log("False 함수");
//   return undefined; // Falsy한 값
// }
// function returnTrue() {
//   console.log("True 함수");
//   return 10; // Truthy한 값
// }

// console.log(returnFalse() && returnTrue());
// console.log(returnTrue() || returnFalse());

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;

  console.log(name || "person의 값이 없음");
}

printName(); // undefined\
printName({ name: "John" }); // John
