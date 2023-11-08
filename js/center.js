const drop1 = document.querySelector('.use');
const low = document.querySelector('.use-menu-low');
const drop = document.querySelectorAll('.drop')[0];
let a = true;

function toggle1() {
    if(a == true){
        low.classList.add('none');
        drop.classList.remove('drop-select');
        a = false;
    }else{
        low.classList.remove('none');
        drop.classList.add('drop-select');
        a = true;
    };
};

drop1.addEventListener('click',toggle1);

const message = document.querySelector('.message-menu');
const low2 = document.querySelector('.message-low');
const drop2 = document.querySelector('#d2');
let b = true;



function toggle2() {
    if(b == true){
        low2.classList.add('none');
        drop2.classList.remove('drop-select');
        b = false;
    }else{
        low2.classList.remove('none');
        drop2.classList.add('drop-select');
        b = true;
    };
};

message.addEventListener('click',toggle2);


// 언어 팝업
const languageModal = document.querySelector('.language-modal');
const close = document.querySelector('.close');
const close2 = document.querySelector('.btn');
const languageBtn = document.querySelector('.language-btn');

close.addEventListener('click',()=>{
    languageModal.classList.add('none');
});

close2.addEventListener('click',()=>{
    languageModal.classList.add('none');
});

languageBtn.addEventListener('click',()=>{
    languageModal.classList.remove('none');
});



window.onclick = function(pop){
    if(pop.target == languageModal){
        languageModal.classList.add('none');
    }
}

// 평가 팝업
const appraisalClose = document.querySelector('.appraisal-close');
const appraisal = document.querySelector('.appraisal');


appraisalClose.addEventListener('click',()=>{
    appraisal.classList.add('none');
});

// 평가 버튼 클릭 시 
const yes = document.querySelector('.yes-box');
const no = document.querySelector('.no-box');
const commentClose = document.querySelector('.appraisal-comment-close');
const comment = document.querySelector('.appraisal-comment');
const noBox = document.querySelector('.appraisal-no');
const noClose = document.querySelector('.no-close');
const why = document.querySelector('.why');

yes.addEventListener('click',()=>{
    appraisal.classList.add('none');
    comment.classList.remove('none');
})

no.addEventListener('click',()=>{
    appraisal.classList.add('none');
    noBox.classList.remove('none');
})

commentClose.addEventListener('click',()=>{
    comment.classList.add('none');
})


noClose.addEventListener('click',()=>{
    noBox.classList.add('none');
})

why.addEventListener('click',()=>{
    noBox.classList.add('none');
    comment.classList.remove('none');
})




