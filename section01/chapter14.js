// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프는 어디서든 사용 가능
// -> 지역 스코프는 해당 영역에서만 사용 가능
// -> 함수도 변수처럼 지역스코프를 가진다.
let a = 1; // 전역 스코프

function funcA() {
  let a = 2; // 지역 스코프
  console.log(a);

  function funcB() {
    let b = 3; // 지역 스코프
    console.log(a);
  }
}

funcA(); // 2
// console.log(a); // 1
funcB(); // 오류발생 funcB는 funcA의 지역 스코프이기 때문에 사용 불가능

// 예외적으로, if문, 반복문에서는 함수 선언식일때 지역스코프를 가지지않는다. 그러나 이렇게 코드를 짜는 경우는 거의없다.
if (true) {
  let c = 1;
  function funcB() {
    // 지역 스코프 가지지않음.
    let b = 3;
    console.log(a);
  }
}

for (let i = 0; i < 10; i++) {
  let d = 1;
  function funcB() {
    // 지역 스코프 가지지않음.
    let b = 3;
    console.log(a);
  }
}
// console.log(c); // 오류발생 c는 if의 지역 스코프이기 때문에 사용 불가능
