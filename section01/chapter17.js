// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 리터럴 (대부분 사용)

let arrC = [1, 2, 3, 4, true, "hello" /*, undefined, null*/]; // 배열 요소에는 어떤 값이든 들어갈 수 있다.

// 2. 배열 요소 접근
let item1 = arrC[0]; // 1
let item2 = arrC[1]; // 2

arrC[0] = 100; // 배열 요소 수정
console.log(arrC[0]); // 100
console.log(item1, item2);
