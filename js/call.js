const call1 = document.getElementsByClassName('call')[0];
const call2 = document.getElementsByClassName('call')[1];
const access = document.querySelector('.access');
const accessFail = document.querySelector('.access-fail');
const callStart = document.querySelector('.call-start-btn');
const MVFail = document.querySelector('.mic-video-fail');


call1.addEventListener('click',()=>{
    access.style.display = 'none'
    accessFail.style.display = "flex"
});

call2.addEventListener('click',()=>{
    access.style.display = 'none'
    accessFail.style.display = "flex"
});

callStart.addEventListener('click',()=>{
    MVFail.style.display = "flex"
});
