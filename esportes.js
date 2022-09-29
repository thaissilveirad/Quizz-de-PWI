document.querySelector('h1').innerHTML = 'Quiz Esportes';
const quiz = document.querySelector('#quiz');
const end = document.querySelector('#end');
const acertos = document.querySelector('#acertos');
const result = document.querySelector('#result');
const op = document.querySelectorAll('.op');
const button = document.querySelector('#next');
const h2 = document.querySelector('h2');
const voltaInicio = document.querySelector('#volta');
let nquestao = 1;
let acerto = 0;

const arr = [
    {
        pergunta: 'Qual o primeiro clube brasileiro a aceitar pobres e negros?',
        respostas: ["Santos", "Olaria", "Corinthians", "Vasco da Gama"],
        correta: 3,
    },
    
    {
        pergunta: 'Qual o primeiro movimento que inicia o jogo no vôlei?',
        respostas: ["Soco", "Manchete", "Toque", "Saque"],
        correta: 3,
    },
    
    {
        pergunta: 'O 7x1 da Alemanha aconteceu na copa de:',
        respostas: [2002, 2001, 2014, 2010],
        correta: 2,
    },
    
    {
        pergunta: 'Qual foi a última copa que o Brasil ganhou?',
        respostas: [2010, 2002, 2000, 2014],
        correta: 1,
    },
];

arr.forEach((e, i) => {
    acertos.innerHTML = `${acerto} acertos.`
    result.innerHTML = `Questão ${nquestao} de 4`;
    const pg = arr[nquestao-1];
    const quest = pg.pergunta;
    h2.innerHTML = quest;
    const resp = pg.respostas[i];
    op[i].innerHTML = `<div id="resp"> ${resp} </div>`;
  
    op.forEach((o, i) => o.addEventListener('click', () => {
    op.forEach((op, i) => op.classList.remove('clickedred', 'clickedgreen'));
       if(i==pg.correta) {
          o.classList.add('clickedgreen');
          acerto=1;
          acertos.innerHTML = `${acerto} acertos.`;
       }else{
          o.classList.add('clickedred');
       }
    }));
  });
  
  button.addEventListener('click', () => {
  nquestao++;
  
  if(nquestao==4) {
      button.innerHTML = 'Terminar';
  }
  if(nquestao==5) {
      result.remove();
      quiz.classList.add('hidden');
      end.style = `display: flex;`
      document.querySelector('h3').innerHTML = `VOCÊ ACERTOU ${acerto}/4 PERGUNTAS.`;
      document.querySelector('h4').innerHTML = 'Obrigado pela participação :)';
  }
  
          result.innerHTML = `Questão ${nquestao} de 4`;
          const pg = arr[nquestao-1];
          const quest = pg.pergunta;
          h2.innerHTML = quest;
          pg.respostas.forEach((e, i) => {
              const resp = pg.respostas[i];
              op[i].innerHTML = `<div id="resp"> ${resp} </div>`;
          })
  
          op.forEach((op, i) => {
          op.classList.remove('clickedgreen');
          op.classList.remove('clickedred');
          
          op.addEventListener('click', () => {
              if(i===pg.correta) {
                  op.classList.remove('clickedred');
                  op.classList.add("clickedgreen");
                  acerto++;
                  acertos.innerHTML = `${acerto} acertos.`;
              }else{
              op.classList.add('clickedred');
              }
          });
          });
  
  
        });
  
  
        
  voltaInicio.addEventListener('click', () => {
      window.location.href = "inicial.html";
  });