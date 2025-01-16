// 1. if 조건문 (if문)

let num = 9;
if (num >= 10) {
  //   console.log("10보다 크거나 같습니다.");
  //   console.log("조건이 참입니다.!");
} else if (num >= 5) {
  //   console.log("5보다 크거나 같습니다.");
} else if (num >= 0) {
  //   console.log("0보다 크거나 같습니다.");
} else {
  //   console.log("조건이 거짓입니다.!!");
}

// 2. switch 조건문 (switch문)
// -> if문과 같은 역할을 하지만, switch문은 조건이 많을 때 사용하기 좋다.
// -> if문과 다르게 조건이 여러개일 때, else if를 사용하지 않아도 된다.
// -> switch문은 break를 사용해야 한다.
// -> break를 사용하지 않으면, break를 만날 때까지 아래의 case를 모두 실행한다.
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "cat";

switch (animal) {
  case "dog":
    console.log("강아지입니다.");
    break;
  case "cat":
    console.log("고양이입니다.");
    break;
  case "bird":
    console.log("새입니다.");
    break;
  default:
    console.log("해당하는 동물이 없습니다.");
    break;
}
