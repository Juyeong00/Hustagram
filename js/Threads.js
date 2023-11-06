const button = document.getElementsByClassName("login_btn")[0];
    const inputId = document.getElementsByClassName("id")[0];
    const inputPw = document.getElementsByClassName("pw")[0];

    inputId.addEventListener("keyup", validate);
    inputPw.addEventListener("keyup", validate);

    function validate() {
        if (!(inputId.value && inputPw.value)) {
        button.disabled = true;
        } else {
        button.disabled = false;
        button.style.cursor = "pointer";
        }

    if (!(inputId.value && inputPw.value)) {
        button.classList.remove("login_btnDisabled");
        } else {
        button.classList.add("login_btnDisabled");
        }
    }

    const idInput = document.getElementById('id');
    const pwInput = document.getElementById('pw');
    const loginBtn = document.getElementById('login_btn');


    const isActiveLogin = () => {
        let idValue = idInput.value;
        let pwValue = pwInput.value;

    if(
        (idValue && pwValue) && 
        (pwValue.length >= 5) && 
        (idValue.includes('@') || idValue.length >= 5)
        ) {
        loginBtn.disabled = false;
        loginBtn.style.opacity = 1;
        loginBtn.style.cursor = 'pointer';
        }
        else {
            loginBtn.disabled = true;
            loginBtn.style.opacity = .3;
            }
        }

        const init = () => {
            idInput.addEventListener('input', isActiveLogin);
            pwInput.addEventListener('input', isActiveLogin);
            idInput.addEventListener('keyup', isActiveLogin);
            pwInput.addEventListener('keyup', isActiveLogin);
        }

        init();