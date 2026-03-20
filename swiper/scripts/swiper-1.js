const wrap = document.querySelector('#wrap');
const web = document.querySelector('.web');
const graphic = document.querySelector('.graphic');
const wrapSlide = new Swiper(wrap,{
    loop:true,
    mousewheel:true,
    speed:1000,
    direction:`horizontal`,
})
const webSlide = new Swiper(web,{
    nested:true, //부모요소와 중첩될 때 충돌나지 않게 만들어주는 옵션
    // mousewheel:true,
    // effect:'fade',
    autoplay:{delay:2000,},
    loop:true,
    speed:300,
    direction:'horizontal',
    pagination:{
        // 페이지 대상 HTML연결, 모양, 동적옵션
        el:'.web + .web_page', //부모선택자 1~2개는 작성해서 구분해주기
        type:'fraction', // bullets(기본값)(점으로 페이지번호표기), fraction(페이지번호/총번호)
        //dynamicBullets:true, // type이 bullets(기본값)일때만 사용 가능, 양 옆 점이 점점 작아지는 디자인
    }
})
const graphicSlide = new Swiper(graphic,{
    nested:true,
    loop:true,
    pagination:{
        el: '.project2 .group .graphic_page',
        type:'bullets',
    }
})
console.log(wrap);
console.log(web);
console.log(graphic);