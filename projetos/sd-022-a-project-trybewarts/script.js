const expectedEmail = 'tryber@teste.com';
const expectedPassword = '123456';
const checkInfo = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const form = document.getElementById('evaluation-form');
const radioInputs = document.querySelectorAll('input[type=radio]');
const subjects = document.querySelectorAll('.subject');
const name = document.getElementById('input-name');
const lastname = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');
const textArea = document.querySelector('textarea');
const charCounter = document.querySelector('#counter');
const menu = document.querySelector('#menu');
const menuLogin = document.querySelector('.menu-login');

function checkLogin() {
  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('pwd-input');
  if (emailInput.value === expectedEmail && passwordInput.value === expectedPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function checkLoginMenu() {
  const emailInput = document.getElementById('email-input-menu');
  const passwordInput = document.getElementById('pwd-input-menu');
  if (emailInput.value === expectedEmail && passwordInput.value === expectedPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function checkBtn() {
  if (checkInfo.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function getCheckedRadio() {
  const checkedRadioInputs = [];
  for (let i = 0; i < radioInputs.length; i += 1) {
    if (radioInputs[i].checked) {
      checkedRadioInputs.push(radioInputs[i].value); // [family, rate]
    }
  }
  return checkedRadioInputs;
}

function getCheckedSubjects() {
  const checkedSubjects = [];
  for (let i = 0; i < subjects.length; i += 1) {
    if (subjects[i].checked) {
      checkedSubjects.push(subjects[i].value);
    }
  }
  return checkedSubjects;
}

function fillFormWithUserInfo() {
  const checkedRadioInputs = getCheckedRadio();
  const checkedSubjects = getCheckedSubjects();
  form.innerHTML = `<h2>Formulário enviado!</h2>
                    <p>Nome: ${name.value} ${lastname.value}</p>
                    <p>Email: ${email.value}</p>
                    <p>Casa: ${house.value}</p>
                    <p>Família: ${checkedRadioInputs[0]}</p>
                    <p>Matérias: ${checkedSubjects.join(', ')}</p>
                    <p>Avaliação: ${checkedRadioInputs[1]}</p>
                    <p>Observações: ${textArea.value}</p>`;
}

document.getElementById('login-btn').addEventListener('click', checkLogin);

checkInfo.addEventListener('change', checkBtn);

submitBtn.addEventListener('click', fillFormWithUserInfo);

// Fiz baseado no site: https://thewebdev.info/2021/08/15/how-to-count-text-area-characters-with-javascript/
charCounter.innerHTML = 500;
textArea.onkeyup = (event) => {
  charCounter.innerHTML = `${500 - event.target.value.length}`;
};

menu.addEventListener('click', () => {
  if (menuLogin.classList.contains('move-in')) {
    menuLogin.classList.remove('move-in');
    menuLogin.classList.add('move-out');
  } else {
    menuLogin.classList.remove('move-out');
    menuLogin.classList.add('move-in');
  }
  if (menu.classList.contains('menu-open')) {
    menu.classList.remove('menu-open');
    menu.classList.add('menu-close');
    menu.innerHTML = '&#x2630;';
  } else {
    menu.classList.add('menu-open');
    menu.classList.remove('menu-close');
    menu.innerHTML = '&#x2715;';
  }
});
document.getElementById('menu-login-btn').addEventListener('click', checkLoginMenu);
