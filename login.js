const botao = document.querySelector(".submit");
const mensagem = document.querySelector("#message");
const user = document.querySelector("#user");
const senha = document.querySelector("#senha");

let users = localStorage.getItem('users');
if (!users) {
    users = [];
}
else {
    users = JSON.parse(users);
}
console.log(users);

botao.addEventListener('click', () => {
    let logged = false;
    for (let i in users) {
        if (users[i].user == user.value && users[i].senha == senha.value) {
            logged = users[i];
            break;
        }
    }
    if (logged != false) {
        localStorage.setItem('logged', JSON.stringify(logged));
        window.location.href = "file:///C:/Users/User/Documents/pwquiz/pwquiz-1/inicial.html";
        alert(`${user.value}, seu login foi efetuado com sucesso!`);
}
    else {
        document.querySelector('#message').innerHTML = 'Usuário ou senha inválidos!';
    }
});