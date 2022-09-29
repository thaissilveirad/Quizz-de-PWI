const entrar = document.querySelector("#entrar");
const criaConta = document.querySelector("#criaconta");
const sobre = document.querySelector("#sobre");
const contato = document.querySelector("#contato");
const mostrar = document.querySelector("#mostrar");

sobre.addEventListener('click', () => {
  document.querySelector("#navbar").classList.add('hidden');
  document.querySelector("#nav2").classList.add('active');
  document.querySelector("#nav4").classList.add('hidden');
  document.querySelector("#back-to-top").classList.add('hidden');

});

contato.addEventListener('click', () => {
  document.querySelector("#navbar").classList.add('hidden');
  document.querySelector("#nav2").classList.remove('active');
  document.querySelector("#nav3").classList.add('active');
  document.querySelector("#nav4").classList.add('hidden');
  document.querySelector("#back-to-top").classList.add('hidden');

});

let state = 0;
mostrar.addEventListener('click', () => {
  if(state == 0) {
    state=1;
    document.querySelector("#categ").classList.add('active');
  }else if(state==1) {
    document.querySelector("#categ").classList.remove('active');
    state=0;
  }
});

const btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function() {
  window.scrollTo({
        top: 0,
         behavior: 'smooth'
  })
});

const mostra = document.querySelector("#mostra");

mostra.addEventListener('click', function() {
  window.scrollTo({
    top: 600,
    behavior: 'smooth'
  })
});

let logged = localStorage.getItem('logged');
if (logged) {
    criaConta.remove();
    entrar.style = `margin-left: 100%;`;
    document.querySelector('#inicio').style = `margin-left: 40%;`;
}

