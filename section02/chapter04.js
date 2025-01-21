// 1. spread 연산자
// -> Spread:   흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는역할
// 배열이라는 것은 값을 바꿔가면서 쓰려고 만든다.

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
// console.log(arr2);

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { ...obj1, d: 4, e: 5 };
// console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

// funcA(...arr1);

// 2. rest 매개변수
// -> rest: 나머지 , 나머지 매개변수
// -> rest 매개변수 뒤에는 다른 매개변수가 올 수 없다. 나머지 모두 받아서 배열로 만든다.
// rest 이름 대신 다른 이름을 사용할 수 있다.
// rest 매개변수는 함수의 마지막에 위치해야 한다. (맨 마지막에 위치해야 한다.)
function funcB(one, ...rest) {
  // one은 첫번째 값(만 다른 이름의 변수로 받고싶을때), 나머지 값들은 rest에 들어간다.
  console.log(one, rest); // rest는 배열로 들어간다.
}

funcB(...arr1);
