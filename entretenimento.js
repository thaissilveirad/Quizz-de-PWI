document.querySelector('h1').innerHTML = 'Quiz Entretenimento';
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
        pergunta: 'O personagem "Harry Potter" é interpretado por qual ator?',
        respostas: ["Tom felton", "Chris Evans", "Daniel Radcliffe", "Rupert Grint"],
        correta: 2,
    },
    
    
    {
        pergunta: 'Qual é o termo correto para o Pop coreano?',
        respostas: ["Jpop", "Kpop", "Cpop", "Tpop"],
        correta: 1,
    },
    
    {
        pergunta: 'O personagem "Stefan Salvatore" pertence à série:',
        respostas: ["The Vampire Diaries", "Supernatural", "Teen Wolf", "Riverdale"],
        correta: 0,
    },
    
    {
        pergunta: 'Sam e Dean Winchester protagonizam a série:',
        respostas: ["Sense8", "Supernatural", "Breaking Bad", "Black Mirror"],
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