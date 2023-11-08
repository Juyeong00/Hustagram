//아래는 모달창 띄우는 코드입니다.

const modal_wrap = document.querySelector('.modal_wrap');
const modal_background = document.querySelector('.modal_background');

document.querySelector('.img1').addEventListener('click', () => {
    open()
});

document.querySelector('.xclose').addEventListener('click', () => {
    close()
});

window.addEventListener('click', (e) => {
    e.target === modal_background ? close() : false
})
function close() {
    modal_wrap.classList.remove('show-modal');
    modal_background.classList.remove('show-modal');
    document.body.style.overflowY = 'scroll';
}
function open() {
    modal_wrap.classList.add('show-modal')
    modal_background.classList.add('show-modal')
    document.body.style.overflowY = 'hidden';
}


//아래는 무한스크롤 코드입니다.

let count = 3;

window.addEventListener("scroll", (e) => {
    const isScrollEnd = window.innerHeight + window.scrollY + 200 > document.body.offsetHeight;

    if (isScrollEnd && count < 5) {
        for (let i = 0; i < 2; i++) {

            const $img1 = document.createElement("div");
            const $img2 = document.createElement("div");
            const $img3 = document.createElement("div");
            const $img4 = document.createElement("div");
            const $img5 = document.createElement("div");
            const $img1_ = document.createElement("div");
            const $img2_ = document.createElement("div");
            const $img3_ = document.createElement("div");
            const $img4_ = document.createElement("div");
            const $img5_ = document.createElement("div");

            const $item2 = document.createElement("div");
            const $item2_ = document.createElement("div");

            const $item1 = document.createElement("div");
            const $item1_ = document.createElement("div");

            const $item2_2 = document.createElement("div");
            const $item2_2_ = document.createElement("div");

            const $item5 = document.createElement("div");
            const $item5_ = document.createElement("div");

            const $mulpic1 = document.createElement("span");
            const $mulpic2 = document.createElement("span");
            const $mulpic3 = document.createElement("span");
            const $mulpic4 = document.createElement("span");
            const $mulpic1_ = document.createElement("span");
            const $mulpic2_ = document.createElement("span");
            const $mulpic3_ = document.createElement("span");
            const $mulpic4_ = document.createElement("span");

            const $video = document.createElement("i");
            const $video_ = document.createElement("i");

            const pictext1 = document.createTextNode("filter_none");
            const pictext2 = document.createTextNode("filter_none");
            const pictext3 = document.createTextNode("filter_none");
            const pictext4 = document.createTextNode("filter_none");
            const pictext1_ = document.createTextNode("filter_none");
            const pictext2_ = document.createTextNode("filter_none");
            const pictext3_ = document.createTextNode("filter_none");
            const pictext4_ = document.createTextNode("filter_none");

            const $text1 = document.createElement("div");
            const $text2 = document.createElement("div");
            const $text3 = document.createElement("div");
            const $text4 = document.createElement("div");
            const $text5 = document.createElement("div");
            const $text1_ = document.createElement("div");
            const $text2_ = document.createElement("div");
            const $text3_ = document.createElement("div");
            const $text4_ = document.createElement("div");
            const $text5_ = document.createElement("div");

            const $iheart1 = document.createElement("i");
            const $iheart2 = document.createElement("i");
            const $iheart3 = document.createElement("i");
            const $iheart4 = document.createElement("i");
            const $iheart5 = document.createElement("i");
            const $iheart1_ = document.createElement("i");
            const $iheart2_ = document.createElement("i");
            const $iheart3_ = document.createElement("i");
            const $iheart4_ = document.createElement("i");
            const $iheart5_ = document.createElement("i");

            const $icomment1 = document.createElement("i");
            const $icomment2 = document.createElement("i");
            const $icomment3 = document.createElement("i");
            const $icomment4 = document.createElement("i");
            const $icomment5 = document.createElement("i");
            const $icomment1_ = document.createElement("i");
            const $icomment2_ = document.createElement("i");
            const $icomment3_ = document.createElement("i");
            const $icomment4_ = document.createElement("i");
            const $icomment5_ = document.createElement("i");

            const heart1 = document.createTextNode(" 100");
            const heart2 = document.createTextNode(" 100");
            const heart3 = document.createTextNode(" 100");
            const heart4 = document.createTextNode(" 100");
            const heart5 = document.createTextNode(" 100");
            const heart1_ = document.createTextNode(" 100");
            const heart2_ = document.createTextNode(" 100");
            const heart3_ = document.createTextNode(" 100");
            const heart4_ = document.createTextNode(" 100");
            const heart5_ = document.createTextNode(" 100");

            const comment1 = document.createTextNode(" 100");
            const comment2 = document.createTextNode(" 100");
            const comment3 = document.createTextNode(" 100");
            const comment4 = document.createTextNode(" 100");
            const comment5 = document.createTextNode(" 100");
            const comment1_ = document.createTextNode(" 100");
            const comment2_ = document.createTextNode(" 100");
            const comment3_ = document.createTextNode(" 100");
            const comment4_ = document.createTextNode(" 100");
            const comment5_ = document.createTextNode(" 100");

            let nbsp11 = document.createTextNode("\u00a0");
            let nbsp12 = document.createTextNode("\u00a0");
            let nbsp13 = document.createTextNode("\u00a0");
            let nbsp14 = document.createTextNode("\u00a0");

            let nbsp21 = document.createTextNode("\u00a0");
            let nbsp22 = document.createTextNode("\u00a0");
            let nbsp23 = document.createTextNode("\u00a0");
            let nbsp24 = document.createTextNode("\u00a0");

            let nbsp31 = document.createTextNode("\u00a0");
            let nbsp32 = document.createTextNode("\u00a0");
            let nbsp33 = document.createTextNode("\u00a0");
            let nbsp34 = document.createTextNode("\u00a0");

            let nbsp41 = document.createTextNode("\u00a0");
            let nbsp42 = document.createTextNode("\u00a0");
            let nbsp43 = document.createTextNode("\u00a0");
            let nbsp44 = document.createTextNode("\u00a0");
            
            let nbsp51 = document.createTextNode("\u00a0");
            let nbsp52 = document.createTextNode("\u00a0");
            let nbsp53 = document.createTextNode("\u00a0");
            let nbsp54 = document.createTextNode("\u00a0");

            let nbsp11_ = document.createTextNode("\u00a0");
            let nbsp12_ = document.createTextNode("\u00a0");
            let nbsp13_ = document.createTextNode("\u00a0");
            let nbsp14_ = document.createTextNode("\u00a0");

            let nbsp21_ = document.createTextNode("\u00a0");
            let nbsp22_ = document.createTextNode("\u00a0");
            let nbsp23_ = document.createTextNode("\u00a0");
            let nbsp24_ = document.createTextNode("\u00a0");

            let nbsp31_ = document.createTextNode("\u00a0");
            let nbsp32_ = document.createTextNode("\u00a0");
            let nbsp33_ = document.createTextNode("\u00a0");
            let nbsp34_ = document.createTextNode("\u00a0");

            let nbsp41_ = document.createTextNode("\u00a0");
            let nbsp42_ = document.createTextNode("\u00a0");
            let nbsp43_ = document.createTextNode("\u00a0");
            let nbsp44_ = document.createTextNode("\u00a0");

            let nbsp51_ = document.createTextNode("\u00a0");
            let nbsp52_ = document.createTextNode("\u00a0");
            let nbsp53_ = document.createTextNode("\u00a0");
            let nbsp54_ = document.createTextNode("\u00a0");

            const $box1 = document.createElement("div");
            const $box2 = document.createElement("div");
            const $box3 = document.createElement("div");
            const $box4 = document.createElement("div");
            const $box5 = document.createElement("div");

            const $box1_ = document.createElement("div");
            const $box2_ = document.createElement("div");
            const $box3_ = document.createElement("div");
            const $box4_ = document.createElement("div");
            const $box5_ = document.createElement("div");

            $img1.className = "image img1";
            $img2.className = "image img2";
            $img3.className = "image img3";
            $img4.className = "image img4";
            $img5.className = "images img5";

            $img1_.className = "image img1";
            $img2_.className = "image img2";
            $img3_.className = "image img3";
            $img4_.className = "image img4";
            $img5_.className = "images img5";

            $item2.className = "item2";
            $item2_.className = "item2-2";

            $item2_2.className = "item2";
            $item2_2_.className = "item2-2";

            $item1.className = "item1";
            $item1_.className = "item1";

            $item5.className = "item5";
            $item5_.className = "item5-2";

            $mulpic1.className = "material-symbols-outlined mulpic"
            $mulpic2.className = "material-symbols-outlined mulpic"
            $mulpic3.className = "material-symbols-outlined mulpic"
            $mulpic4.className = "material-symbols-outlined mulpic"
            $mulpic1_.className = "material-symbols-outlined mulpic"
            $mulpic2_.className = "material-symbols-outlined mulpic"
            $mulpic3_.className = "material-symbols-outlined mulpic"
            $mulpic4_.className = "material-symbols-outlined mulpic"

            $video.className = "fa-solid fa-clapperboard vidi2"
            $video_.className = "fa-solid fa-clapperboard vidi2"

            $text1.className = "text";
            $text2.className = "text";
            $text3.className = "text";
            $text4.className = "text";
            $text5.className = "text2";
            $text1_.className = "text";
            $text2_.className = "text";
            $text3_.className = "text";
            $text4_.className = "text";
            $text5_.className = "text2";

            $iheart1.className = "fa-solid fa-heart";
            $iheart2.className = "fa-solid fa-heart";
            $iheart3.className = "fa-solid fa-heart";
            $iheart4.className = "fa-solid fa-heart";
            $iheart5.className = "fa-solid fa-heart";
            $iheart1_.className = "fa-solid fa-heart";
            $iheart2_.className = "fa-solid fa-heart";
            $iheart3_.className = "fa-solid fa-heart";
            $iheart4_.className = "fa-solid fa-heart";
            $iheart5_.className = "fa-solid fa-heart";

            $icomment1.className = "fa-solid fa-comment fa-flip-horizontal"
            $icomment2.className = "fa-solid fa-comment fa-flip-horizontal"
            $icomment3.className = "fa-solid fa-comment fa-flip-horizontal"
            $icomment4.className = "fa-solid fa-comment fa-flip-horizontal"
            $icomment5.className = "fa-solid fa-comment fa-flip-horizontal"
            $icomment1_.className = "fa-solid fa-comment fa-flip-horizontal"
            $icomment2_.className = "fa-solid fa-comment fa-flip-horizontal"
            $icomment3_.className = "fa-solid fa-comment fa-flip-horizontal"
            $icomment4_.className = "fa-solid fa-comment fa-flip-horizontal"
            $icomment5_.className = "fa-solid fa-comment fa-flip-horizontal"

            $box1.className = "box";
            $box2.className = "box";
            $box3.className = "box";
            $box4.className = "box";
            $box5.className = "box";
            $box1_.className = "box";
            $box2_.className = "box";
            $box3_.className = "box";
            $box4_.className = "box";
            $box5_.className = "box";


            $text1.appendChild($iheart1);
            $text1.appendChild(heart1);
            $text1.appendChild(nbsp11);
            $text1.appendChild(nbsp12);
            $text1.appendChild(nbsp13);
            $text1.appendChild(nbsp14);
            $text1.appendChild($icomment1);
            $text1.appendChild(comment1);
            $box1.appendChild($text1);
            $mulpic1.appendChild(pictext1);
            $img1.appendChild($mulpic1);
            $box1.appendChild($img1);
            $item2.appendChild($box1);

            $text2.appendChild($iheart2);
            $text2.appendChild(heart2);
            $text2.appendChild(nbsp21);
            $text2.appendChild(nbsp22);
            $text2.appendChild(nbsp23);
            $text2.appendChild(nbsp24);
            $text2.appendChild($icomment2);
            $text2.appendChild(comment2);
            $box2.appendChild($text2);
            $mulpic2.appendChild(pictext2);
            $img2.appendChild($mulpic2);
            $box2.appendChild($img2);
            $item2.appendChild($box2);
            $item5.appendChild($item2);

            $text3.appendChild($iheart3);
            $text3.appendChild(heart3);
            $text3.appendChild(nbsp31);
            $text3.appendChild(nbsp32);
            $text3.appendChild(nbsp33);
            $text3.appendChild(nbsp34);
            $text3.appendChild($icomment3);
            $text3.appendChild(comment3);
            $box3.appendChild($text3);
            $mulpic3.appendChild(pictext3);
            $img3.appendChild($mulpic3);
            $box3.appendChild($img3);
            $item2_.appendChild($box3);

            $text4.appendChild($iheart4);
            $text4.appendChild(heart4);
            $text4.appendChild(nbsp41);
            $text4.appendChild(nbsp42);
            $text4.appendChild(nbsp43);
            $text4.appendChild(nbsp44);
            $text4.appendChild($icomment4);
            $text4.appendChild(comment4);
            $box4.appendChild($text4);
            $mulpic4.appendChild(pictext4);
            $img4.appendChild($mulpic4);
            $box4.appendChild($img4);
            $item2_.appendChild($box4);
            $item5.appendChild($item2_);

            $text5.appendChild($iheart5);
            $text5.appendChild(heart5);
            $text5.appendChild(nbsp51);
            $text5.appendChild(nbsp52);
            $text5.appendChild(nbsp53);
            $text5.appendChild(nbsp54);
            $text5.appendChild($icomment5);
            $text5.appendChild(comment5);
            $box5.appendChild($text5);
            $img5.appendChild($video);
            $box5.appendChild($img5);
            $item1.appendChild($box5);
            $item5.appendChild($item1);
            document.querySelector(".content").append($item5);

            $text5_.appendChild($iheart5_);
            $text5_.appendChild(heart5_);
            $text5_.appendChild(nbsp51_);
            $text5_.appendChild(nbsp52_);
            $text5_.appendChild(nbsp53_);
            $text5_.appendChild(nbsp54_);
            $text5_.appendChild($icomment5_);
            $text5_.appendChild(comment5_);
            $box5_.appendChild($text5_);
            $img5_.appendChild($video_);
            $box5_.appendChild($img5_);
            $item1_.appendChild($box5_);
            $item5_.appendChild($item1_);

            $text1_.appendChild($iheart1_);
            $text1_.appendChild(heart1_);
            $text1_.appendChild(nbsp11_);
            $text1_.appendChild(nbsp12_);
            $text1_.appendChild(nbsp13_);
            $text1_.appendChild(nbsp14_);
            $text1_.appendChild($icomment1_);
            $text1_.appendChild(comment1_);
            $box1_.appendChild($text1_);
            $mulpic1_.appendChild(pictext1_);
            $img1_.appendChild($mulpic1_);
            $box1_.appendChild($img1_);
            $item2_2.appendChild($box1_);

            $text2_.appendChild($iheart2_);
            $text2_.appendChild(heart2_);
            $text2_.appendChild(nbsp21_);
            $text2_.appendChild(nbsp22_);
            $text2_.appendChild(nbsp23_);
            $text2_.appendChild(nbsp24_);
            $text2_.appendChild($icomment2_);
            $text2_.appendChild(comment2_);
            $box2_.appendChild($text2_);
            $mulpic2_.appendChild(pictext2_);
            $img2_.appendChild($mulpic2_);
            $box2_.appendChild($img2_);
            $item2_2.appendChild($box2_);
            $item5_.appendChild($item2_2);

            $text3_.appendChild($iheart3_);
            $text3_.appendChild(heart3_);
            $text3_.appendChild(nbsp31_);
            $text3_.appendChild(nbsp32_);
            $text3_.appendChild(nbsp33_);
            $text3_.appendChild(nbsp34_);
            $text3_.appendChild($icomment3_);
            $text3_.appendChild(comment3_);
            $box3_.appendChild($text3_);
            $mulpic3_.appendChild(pictext3_);
            $img3_.appendChild($mulpic3_);
            $box3_.appendChild($img3_);
            $item2_2_.appendChild($box3_);

            $text4_.appendChild($iheart4_);
            $text4_.appendChild(heart4_);
            $text4_.appendChild(nbsp41_);
            $text4_.appendChild(nbsp42_);
            $text4_.appendChild(nbsp43_);
            $text4_.appendChild(nbsp44_);
            $text4_.appendChild($icomment4_);
            $text4_.appendChild(comment4_);
            $box4_.appendChild($text4_);
            $mulpic4_.appendChild(pictext4_);
            $img4_.appendChild($mulpic4_);
            $box4_.appendChild($img4_);
            $item2_2_.appendChild($box4_);
            $item5_.appendChild($item2_2_);
            document.querySelector(".content").append($item5_);
        

        }
    }
    wait(0.5); //임의로 지연시간 주기
});


function wait(sec) {
    let start = Date.now(), now = start;
    while (now - start < sec * 1000) {
        now = Date.now();
    }
}

//모달창 하트 아이콘 클릭시 효과주는 코드
let likeht = document.getElementsByClassName("likeht")[0];
let likeht2 = document.getElementsByClassName("likeht2")[0];
let htcount = document.getElementById('count');
let count1 = 100;

likeht.addEventListener('click',function(){
    likeht.classList.toggle('active');
    likeht2.classList.toggle('active');
    htcount.textContent = ++count1;
})

likeht2.addEventListener('click',function(){
    likeht2.classList.toggle('active');
    likeht.classList.toggle('active');
    htcount.textContent = --count1;
})

let small_like11 = document.getElementsByClassName("small-like")[0];
let small_like12 = document.getElementsByClassName("small-like")[1];
let small_like13 = document.getElementsByClassName("small-like")[2];
let small_like14 = document.getElementsByClassName("small-like")[3];
let small_like15 = document.getElementsByClassName("small-like")[4];
let small_like21 = document.getElementsByClassName("small-like2")[0];
let small_like22 = document.getElementsByClassName("small-like2")[1];
let small_like23 = document.getElementsByClassName("small-like2")[2];
let small_like24 = document.getElementsByClassName("small-like2")[3];
let small_like25 = document.getElementsByClassName("small-like2")[4];


small_like11.addEventListener('click',function(){
    small_like11.classList.toggle('active');
    small_like21.classList.toggle('active');
})

small_like21.addEventListener('click',function(){
    small_like21.classList.toggle('active');
    small_like11.classList.toggle('active');
})

small_like12.addEventListener('click',function(){
    small_like12.classList.toggle('active');
    small_like22.classList.toggle('active');
})

small_like22.addEventListener('click',function(){
    small_like22.classList.toggle('active');
    small_like12.classList.toggle('active');
})

small_like13.addEventListener('click',function(){
    small_like13.classList.toggle('active');
    small_like23.classList.toggle('active');
})

small_like23.addEventListener('click',function(){
    small_like23.classList.toggle('active');
    small_like13.classList.toggle('active');
})

small_like14.addEventListener('click',function(){
    small_like14.classList.toggle('active');
    small_like24.classList.toggle('active');
})

small_like24.addEventListener('click',function(){
    small_like24.classList.toggle('active');
    small_like14.classList.toggle('active');
})

small_like15.addEventListener('click',function(){
    small_like15.classList.toggle('active');
    small_like25.classList.toggle('active');
})

small_like25.addEventListener('click',function(){
    small_like25.classList.toggle('active');
    small_like15.classList.toggle('active');
})


//모달창 이미지 슬라이더 코드
let slides = document.querySelector('.slides');
let slideImg = document.querySelectorAll('.slides li');
let currentIdx = 0;
let slideCount = slideImg.length;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
slideWidth = 680;

makeClone();

initfunction();
function makeClone() {
    let cloneSlide_first = slideImg[0].cloneNode(true);
    let cloneSlide_last = slides.lastElementChild.cloneNode(true);
    slides.append(cloneSlide_first);
    slides.insertBefore(cloneSlide_last, slides.firstElementChild);
}
function initfunction() {
    slides.style.width = (slideWidth) * (slideCount + 2) + 'px';
    slides.style.left = -(slideWidth) + 'px';
}
next.addEventListener('click', function () {

    if (currentIdx <= slideCount - 1) {
        slides.style.left = -(currentIdx + 2) * slideWidth + 'px';
        slides.style.transition = `${0.5}s ease-out`;
    }
    if (currentIdx === slideCount - 1) {
        setTimeout(function () {
            slides.style.left = -slideWidth + 'px';
            slides.style.transition = `${0}s ease-out`;
        }, 500);
        currentIdx = -1;
    }
    currentIdx += 1;
});
prev.addEventListener('click', function () {
    console.log(currentIdx);
    if (currentIdx >= 0) {
        slides.style.left = -currentIdx * (slideWidth) + 'px';
        slides.style.transition = `${0.5}s ease-out`;
    }
    if (currentIdx === 0) {
        setTimeout(function () {
            slides.style.left = -slideCount * (slideWidth) + 'px';
            slides.style.transition = `${0}s ease-out`;
        }, 500);
        currentIdx = slideCount;
    }
    currentIdx -= 1;
});