// 함수 선언

let area = getArea(3, 4);
console.log(area);

// 호이스팅 -> 끌어올리다
function getArea(width, height) {
  function another() {
    // 함수 안에 함수 선언 가능 -> 중첩함수
    console.log("another");
  }
  another();
  let area = width * height;
  return area;
}
