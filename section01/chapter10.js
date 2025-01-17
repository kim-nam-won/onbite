// 반복문
// 초기식 반복문 내에서만 쓸수있는 변수 count 변수라고 한다.
// for (초기식식; 조건식; 증감식) {
//   // 실행문
// }

// continue, break
// continue: 조건이 참이면 컨티뉴 아래의 코드를 실행하지 않고 다음 반복문으로 넘어간다.
// break: 조건이 참이면 반복문을 빠져나간다.
for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
