const textArea = document.querySelector(".conteudo_textarea");
const mensagem = document.querySelector(".mensagem");
const copiar = document.querySelector("#copiar");


function removerImagem() {
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function btnCopiar(){
    const textToCopy = mensagem.value;
    navigator.clipboard.writeText(textToCopy);
}

function btnEncriptar(){
    const textoEncriptado = encriptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    if(mensagem !== ""){
        mensagem="";
    }
    removerImagem();
}

function encriptografar(stringEncriptada){
    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    if(mensagem !== ""){
        mensagem="";
    }
    removerImagem();
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}


