const ssfHero = document.querySelector('.ssf_hero');
const brandBnr = document.querySelector('.brand_slide');
const newStyle = document.querySelector('.left_btm');
console.log(ssfHero,brandBnr,newStyle);

const newSwiper = new Swiper(newStyle,{
    loop:true,
    slidesPerView:3,
    spaceBetween:40,
    autoplay:{delay:2000,},
})

const brandSwiper = new Swiper(brandBnr,{
    loop:true,
    slidesPerView:3,
    slidesPerGroup:3,
    spaceBetween:20,
    autoplay:{delay:2000,},
    navigation:{
        nextEl:'.brand_slide ~ .next',
        prevEl:'.brand_slide ~ .prev',
    }
})

const ssfSwiper = new Swiper(ssfHero,{
    loop:true,
    slidesPerGroup:3,
    slidesPerView:3, //한번에 보이는 슬라이드 개수
    spaceBetween:0,
    autoplay:{delay:2000,},
    //pagination:{el:'',},
    navigation:{
        nextEl:'.ssf_hero .next',
        prevEl:'.ssf_hero .prev',
    }
})