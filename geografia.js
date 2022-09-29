document.querySelector('h1').innerHTML = 'Quiz Geografia';
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
        pergunta: 'Quantos oceanos tem no globo?',
        respostas: [1, 6, 8, 5],
        correta: 3,
    },
    
    
    {
        pergunta: 'Qual destes países faz fronteira com o Brasil?',
        respostas: ["Canadá", "Argentina", "México", "Portugal"],
        correta: 1,
    },
    
    {
        pergunta: 'O oscar de melhor longa estrangeiro de 2020 foi para:',
        respostas: ["Parasita", "Aquaman", "As Golpistas", "Tubarão"],
        correta: 0,
    },
    
    {
        pergunta: 'O que é Cartografia?',
        respostas: ["A escrita das cartas", "O estudo dos Mapas", "A leitura antiga", "Nenhuma das opções"],
        correta: 1,
    },
];

arr.forEach((e, i) => {
  const pg = arr[0];
  const quest = pg.pergunta;
  h2.innerHTML = quest;
  const resp = pg.respostas[i];
  op[i].innerHTML = `<div id="resp"> ${resp} </div>`;

  op.forEach((op, i) => op.addEventListener('click', () => {
     if(i==pg.correta) {
        op.classList.add('clickedgreen');
            acerto = 1;
            acertos.innerHTML = `${acerto} acertos.`;
     }else{
        op.classList.add('clickedred');
        acerto = 0;
     }
  }));
});

button.addEventListener('click', () => {
nquestao++;
result.innerHTML = `Questão ${nquestao} de 4`;
if(nquestao==2) {
    arr.forEach((e, i) => {
        const pg = arr[1];
        const quest = pg.pergunta;
        h2.innerHTML = quest;
        const resp = pg.respostas[i];
        op[i].innerHTML = `<div id="resp"> ${resp} </div>`;

        op.forEach((op, i) => {
        op.classList.remove('clickedgreen');
        op.classList.remove('clickedred');
        
        op.addEventListener('click', () => {
            if(i===pg.correta) {
                op.classList.remove('clickedred');
                op.classList.add("clickedgreen");
                if(acerto===0) {
                    acerto = 1;
                    acertos.innerHTML = `${acerto} acertos.`;
                 }else if(acerto===1) {
                    acerto = 2;
                    acertos.innerHTML = `${acerto} acertos.`;
                 }
            }else{
            op.classList.add('clickedred');
            }
        });
        
        });
      });
}else if(nquestao==3) {
    arr.forEach((e, i) => {
        const pg = arr[2];
        const quest = pg.pergunta;
        h2.innerHTML = quest;
        const resp = pg.respostas[i];
        op[i].innerHTML = `<div id="resp"> ${resp} </div>`;
      
        op.forEach((op, i) => {
            op.classList.remove('clickedgreen');
            op.classList.remove('clickedred');
            
            op.addEventListener('click', () => {
                if(i==pg.correta) {
                    op.classList.remove('clickedred');
                    op.classList.add('clickedgreen');
                    if(acerto===0) {
                        acerto = 1;
                        acertos.innerHTML = `${acerto} acertos.`;
                     }else if(acerto===1) {
                        acerto = 2;
                        acertos.innerHTML = `${acerto} acertos.`;
                     }else if(acerto===2) {
                        acerto = 3;
                        acertos.innerHTML = `${acerto} acertos.`;
                     }
                }else{
                op.classList.add('clickedred');
                }
            });
            });
      });
}else if(nquestao==4) {
    arr.forEach((e, i) => {
        button.innerHTML = 'Terminar';
        const pg = arr[3];
        const quest = pg.pergunta;
        h2.innerHTML = quest;
        const resp = pg.respostas[i];
        op[i].innerHTML = `<div id="resp"> ${resp} </div>`;
      
        op.forEach((op, i) => {
            op.classList.remove('clickedgreen');
            op.classList.remove('clickedred');
    
            op.addEventListener('click', () => {
                if(i==pg.correta) {
                    op.classList.remove('clickedred');
                    op.classList.add('clickedgreen');
                    if(acerto===0) {
                        acerto = 1;
                        acertos.innerHTML = `${acerto} acertos.`;
                     }else if(acerto===1) {
                        acerto = 2;
                        acertos.innerHTML = `${acerto} acertos.`;
                     }else if(acerto===2) {
                        acerto = 3;
                        acertos.innerHTML = `${acerto} acertos.`;
                     }else if(acerto===3) {
                        acerto = 4;
                        acertos.innerHTML = `${acerto} acertos.`;
                     }
                }else{
                op.classList.add('clickedred');
                }
            });
            });
      });
}
if(nquestao==5) {
    quiz.classList.add('hidden');
    end.style = `display: flex;`
    document.querySelector('h3').innerHTML = `VOCÊ ACERTOU ${acerto}/4 PERGUNTAS.`;
    document.querySelector('h4').innerHTML = 'Obrigado pela participação :)';
}
});


acertos.innerHTML = `${acerto} acertos.`
result.innerHTML = `Questão ${nquestao} de 4`;

voltaInicio.addEventListener('click', () => {
    window.location.href = "file:///C:/Users/User/Documents/pwquiz/pwquiz-1/inicial.html";
});