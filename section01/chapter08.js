// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자
// -> 변수에 기본값을 설정할 때 사용
// -> 왼쪽 피연산자가 null, undefined일 때 오른쪽 피연산자를 반환
// -> 왼쪽 피연산자가 null, undefined가 아니면 왼쪽 피연산자를 반환
// -> null 병합 연산자는 || 연산자와 다르게 0, '', false도 null, undefined가 아니므로 반환하지 않는다.

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var3 ?? var2;

let userName; // 유저네임이 있다면 유저네임을 사용하고, 없다면 유저닉네임을 사용한다.
let userNickName = "Winterlood";

let displayName = userName ?? userNickName;

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "Hello";
var7 = true;

let t1 = typeof var7;
console.log(t1); // string

// 3. 삼항 연산자
// -> 조건에 따라 값을 반환하는 연산자\
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
// -> 조건 ? 참일 때 반환할 값 : 거짓일 때 반환할 값
// -> 항을 3개 사용하는 연산자

let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝수입니다." 홀수 -> "홀수입니다."를 저장
let res = var8 % 2 === 0 ? "짝수입니다." : "홀수입니다.";
console.log(res);
