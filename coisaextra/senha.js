const alvo = 'dc5cbbdffd37d6a5c532cb51a4de540e8758fb34b6a5033a06cdf1a3708f1bd1';

document.getElementById('btn_login').onclick = () => {
    const entrada = document.getElementById('senha').value; 
    const mensagem = document.getElementById('mensagem');

    if (hex_sha256(entrada) === alvo){
        mensagem.innerHTML = '<h3>Senha Correta! Carregando...</h3>';
        sessionStorage.setItem('logado', 1);

        setTimeout(() => {
            mensagem.innerHTML = '';
            window.location.href = 'main.html'; 
        }, 2000);

    } else {
        mensagem.innerHTML = '<h1 style="color: red">Senha incorreta!!!</h1>';
    }
}