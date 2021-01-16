var arrayNotas = [80,80,80,80,80];

let mediaTotal = calcularMedia(arrayNotas);

avaliacao(mediaTotal);

function somarNotas (arrayNotas){
    let soma = 0;    
    for (let i = 0; i < arrayNotas.length; i++){
        soma += arrayNotas[i];
    }
    return soma;
}

function calcularMedia (arrayNotas){
    if (arrayNotas === 4){
            return (somarNotas(arrayNotas) / 4) + arrayNotas[4];
        } else{
            return somarNotas(arrayNotas) / 4;
        }
}

function avaliacao (mediaTotal){    
    if(mediaTotal === 100){
        console.log('O aluno passou com a nota máxima!');
        return true;
    } else if (mediaTotal >= 70) {
        console.log('O aluno passou!');
        return true;
     } else {
        console.log('O aluno reprovou!');        
     }
     return false;
}
