// Validamos que el texto solo contenga minúsculas y sin caracteres especiales
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function mostrarError(mensaje) {
    alert(mensaje);
    document.getElementById('no-message').classList.remove('hidden');
}

function encriptar() {
    let texto = document.getElementById('input-text').value;
    document.getElementById('no-message').classList.add('hidden');
    
    if (!validarTexto(texto)) {
        mostrarError('El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }

    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    document.getElementById('output-text').value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById('input-text').value;
    document.getElementById('no-message').classList.add('hidden');
    
    if (!validarTexto(texto)) {
        mostrarError('El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }

    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    document.getElementById('output-text').value = textoDesencriptado;
}

function copiarTexto() {
    let texto = document.getElementById('output-text');
    texto.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

