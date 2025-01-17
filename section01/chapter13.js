// 1. 콜백함수 -> 뒷전에 실행되는 나중에 실행되는 함수수

function main(value) {
  value(); // value는 함수이므로 함수 호출
}

main(() => {
  //   console.log("i am sub");
}); // sub 함수를 main 함수의 매개변수(인수)로 전달

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(3, (idx) => {
  console.log(idx);
});

repeat(3, (idx) => {
  console.log(idx * 2);
});
