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

function funcB(one, ...rest) {
  console.log(rest, one);
}

funcB(...arr1);
