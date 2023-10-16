const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const passwordAError = document.getElementById('passwordA-error');
const phoneError = document.getElementById('phone-error');
const submitError = document.getElementById('submit-error');
const telSelector = document.getElementById('contact-phone');

const inputName = document.getElementById('contact-name');
const inputEmail = document.getElementById('contact-email');
const inputPassword = document.getElementById('contact-password');
const inputPasswordA = document.getElementById('contact-passwordA');
const inputPhone = document.getElementById('contact-phone');

const btnReset = document.getElementById('btn-reset');
const btnSubmit = document.getElementById('btn-submit');


const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);


function validateName() {
    const names = inputName.value;
    if(names.length == 0 || names.length < 3) {
        inputName.style.border = '2px solid red';
        nameError.innerHTML = 'Имя обязательно для заполнения';
        return false;
    }
    inputName.style.border = '2px solid rgb(46, 138, 86)';
    nameError.innerHTML = ''
    return true;
}
function validateEmail() {
    const email = inputEmail.value;
    if(email.length == 0) {
        inputEmail.style.border = '2px solid red';
        emailError.innerHTML = 'Введите корректный адрес электронной почты';
        return false;
    }
    if(!email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        inputEmail.style.border = '2px solid red';
        emailError.innerHTML = 'Введите корректный адрес электронной почты'
        return false;
    }
    emailError.innerHTML = '';
    inputEmail.style.border = '2px solid rgb(46,138,86)';
    return true;
}
function validatePassword() {
    const password = inputPassword.value;
    if(password.length == 0 || password.length < 6) {
        inputPassword.style.border = '2px solid red';
        passwordError.innerHTML = 'Пароль должен быть не менее 6 символов';
        return false;
    }
    passwordError.innerHTML = '';
    inputPassword.style.border = '2px solid rgb(46,138,86)';
}
function validatePasswordA() {
    const passwordA = inputPasswordA.value;
    const passwordB = inputPassword.value;
    if(passwordA !== passwordB || passwordA == 0) {
        inputPasswordA.style.border = '2px solid red';
        passwordAError.innerHTML = 'Пароли не совпадают';
        return false;
    }
    passwordAError.innerHTML = '';
    inputPasswordA.style.border = '2px solid rgb(46,138,86)';
}
btnReset.addEventListener('click', () => {
    inputName.style.border = '';
    inputEmail.style.border = '';
    inputPassword.style.border = '';
    inputPasswordA.style.border = '';
    nameError.innerHTML = ''
    emailError.innerHTML = ''
    passwordError.innerHTML = ''
    passwordAError.innerHTML = ''
    submitError.innerHTML = ''
})
btnSubmit.addEventListener('click', () => {
    if(!validateName() || !validateEmail() || validatePassword() || validatePasswordA()) {
        submitError.style.display = 'block'
        submitError.style.color = 'red';
        submitError.innerHTML = 'Пожалуйста, исправьте ошибки';
        setTimeout(function() {
            submitError.style.display = 'none';
        }, 4500)
        return false;
    }
    submitError.style.display = 'block'
    submitError.style.color = 'rgb(46,138,86)'
    submitError.innerHTML = 'Данные успешно отправлены!';
    setTimeout(function() {
        submitError.style.display = 'none';
    }, 5000)

})
