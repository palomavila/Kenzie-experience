/************************************************************************************
 *                                    PASSO 1                                      */ 
const EXPLORADOR = 'Paloma';
let bolsaDeItens = [];
let moedas = 0;
let energia = 5;
let recompensas = ['Chave', 'Duck, o Pato de Borracha', 'Moeda', 'Moeda', 'Moeda', 'Moeda', 'Moeda'];
/************************************************************************************
 *                                    PASSO 2                                       *
 ************************************************************************************/

function taverna(){
    console.log ('Bem vindo(a) ' + EXPLORADOR + ', você entrou na Taverna!');
        if (energia < 5){
            for (let i = 1; energia < 5; i++) {           
                energia += 1;
            }
            console.log (EXPLORADOR + ' está descansando!');
         } else {
            console.log(EXPLORADOR + ' está revitalizado(a)!');
        }   
  }

/************************************************************************************
 *                                    PASSO 3                                       *
 ************************************************************************************/

function pegarItem (item){
        if (item === 'Moeda'){
            console.log ('PARABÉNS ' + EXPLORADOR + '! Tu ganhou uma Moeda!');
            moedas += 1;
        }else{
            console.log ('PARABÉNS ' + EXPLORADOR + '! Tu ganhou um Item!');
            bolsaDeItens.push(item);
        }         
    }

/************************************************************************************
 *                                    PASSO 4                                       *
 ************************************************************************************/

function batalha(){
    console.log(EXPLORADOR + ' encontrou um Monstro!');
    if (energia < 1){
        console.log (EXPLORADOR + ' fugiu para a Taverna.');
        return false;
    }else{
        console.log ('PARABÉNS ' + EXPLORADOR + ', você derrotou o monstro!');
        energia -= 1;
        if (energia === 0){
        console.log (EXPLORADOR + ' fugiu para a Taverna.');
          return false;
        }else{
            return true;
        }
    }
}

function explorar(){
    console.log (EXPLORADOR + ' saiu para explorar.');
    if (energia < 1){
        console.log(EXPLORADOR + ' não pode explorar!');
        taverna();
        return false;
    }else{
        if (batalha() === true){
            roletarRecompensas();
            return true;
        }else{
            taverna();
            return false;
        }
    }
}

/************************************************************************************
 *                                    PASSO 5                                       *
 ************************************************************************************/

function abrirBau (){
    for (let i = 0; i < bolsaDeItens.length; i++){
        if (bolsaDeItens[i] === 'Chave'){
            console.log('Parabéns, você finalmente abriu o baú, é perigoso lá fora, leve seu certificado!')
            return true;
        }else{
            return false;
        }
    }
}
