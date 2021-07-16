const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav');
const form = document.querySelector('.register-form');



hamburguer.onclick = function () {
  hamburguer.classList.toggle('active');
  nav.classList.toggle('active');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let email = document.querySelector('.txt-register').value;
  console.log(email);
  let data = {
    email,
  }
  let convertData = JSON.stringify(data);
  localStorage.setItem('lead', convertData);
})