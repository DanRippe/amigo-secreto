let arrayListaAmigos = [];
let nomeAmigo = document.getElementById('nome-amigo');
let listaAmigo = document.getElementById('lista-amigos');
let sorteio = document.getElementById('lista-sorteio');

function adicionar() {   
    if (nomeAmigo.value == '') {
        alert('Não é permitido incluir nomes vazios!');
    } else if (listaAmigo.textContent.includes(nomeAmigo.value)) {
        alert('Não é permitido incluir um nome repetido!');
    } else {
        arrayListaAmigos.push(nomeAmigo.value);
        if (listaAmigo.textContent == '') {
            listaAmigo.textContent = nomeAmigo.value;
        } else {
            listaAmigo.textContent = listaAmigo.textContent + ', ' + nomeAmigo.value;
        }  
    }

    nomeAmigo.value = '';
}

function sortear() {
    if (arrayListaAmigos.length < 4){
        alert('É necessário que a lista tenha pelo menos 4 pessoas.');
    } else {
        embaralhar(arrayListaAmigos);
        console.log(arrayListaAmigos);
        sorteio.innerHTML = '';
    
        for (let i = 0; i < arrayListaAmigos.length; i++) {
            if (i == arrayListaAmigos.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + arrayListaAmigos[i] +' --> ' +arrayListaAmigos[0] + '<br/>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML + arrayListaAmigos[i] +' --> ' +arrayListaAmigos[i + 1] + '<br/>';
            }
        }
    }
    
}

function reiniciar() {
    arrayListaAmigos = [];
    listaAmigo.textContent = '';
    sorteio.innerHTML = '';
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}