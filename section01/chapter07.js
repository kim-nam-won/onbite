// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2; // 나머지 연산자 모듈러라고 한다  * / % 는 우선순위가 덧셈과 뺄셈보다 높다

let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자
let num7 = 10;
num7 = num7 + 20;
num7 += 20; // 위에것과 같은것
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감 연산자 (++, --) 앞에 붙이면 먼저 계산하고 뒤에 붙이면 나중에 계산한다
let num8 = 10;
num8++; // 후위 연산
++num8; // 전위 연산
num8++;
num8--;

// 5. 논리 연산자
let or = true || false; // or 연산 두개의 값 중에 하나라도 true 면 true
let and = true && false; // and 연산 두개의 값이 모두 true 여야 true
let not = !true; // not 연산 true 는 false 로 false 는 true 로 바꾼다 반전 시켜주기기

// 6. 비교 연산자
let comp1 = 1 === 2; // 일치 연산자 값과 타입이 모두 같아야 true
let comp01 = 1 == 2; // 동등 연산자 값만 같으면 true
let comp2 = 1 !== 2; // 불일치 연산자 값과 타입이 모두 다르면 true

let comp3 = 1 > 2; // 크다
let comp4 = 1 < 2; // 작다
let comp5 = 1 >= 2; // 크거나 같다
let comp6 = 1 <= 2; // 작거나 같다
