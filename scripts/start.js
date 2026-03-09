// start.js
// 객체 사용 전 반드시 변수(저장소) 등록하기!
// 변수생성키워드 생성변수명;
var box; //변수 생성 
var box2; //undefined (값이 정의되지 않음)
box = 1; //값1을 box변수에 대입한다.
box = 2; // 이전값 1은 지워지고 box 는 2가 됨
box2 = 5; //undefined -> 5 값 변경
box = box2; // 2 -> 5 변경
box2 = 10; 