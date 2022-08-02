/*
    propriedade
    método
    evento
*/
// document.location = 'index.html'

const emailCorreto = "ygor@ygorlazaro.com";
const senhaCorreta = "1234";

const onEnviarClicado = () => {
    const emailInserido = document.getElementById("txtEmail").value;
    const senhaInserida = document.getElementById("txtSenha").value;

    if (!emailInserido || !senhaInserida){
        alert("Você precisa informar e-mail e senha");

        return;
    }


    if (emailInserido === emailCorreto && senhaInserida === senhaCorreta){
        localStorage.setItem("isLogado", true);

        return;
    }

    localStorage.clear();
    alert("Usuario invalido");
};

document.getElementById("btnEnviar").addEventListener("click", onEnviarClicado);
