let aux;
function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma:\n 2 - Subtração: \n 3 - Divisão: \n 4 - Potencialização \n 5 - Multiplicação\n '));
    let n1 ;
    let n2 ;
    let resultado; 

    if(operacao == 1){
        soma();        
    }
    else if(operacao == 2){
        subtracao();
    }
    else if(operacao == 3){
        divisao();
    }
    else if(operacao == 4){
        potencializacao();
    }
    else if(operacao == 5){
        multiplicacao();
    }
    else{
        alert('Parametros inválidos!\nPor favor coloque uma opção válida');
        calculadora();
    }

    function soma(){
        n1 = Number(prompt('insira o primeiro número: '));
        n2 = Number(prompt('insira o segundo número: '));
        resultado = n1+n2;
        alert(`resultado de ${n1} + ${n2} = ${resultado}`);
        aux = Number(prompt('Deseja realizar outra operação?\n 1 - Sim\n 2 - Não'));
    }
    
    function subtracao(){
        n1 = Number(prompt('insira o primeiro número: '));
        n2 = Number(prompt('insira o segundo número: '));
        resultado = n1-n2;
        alert(`resultado de ${n1} - ${n2} = ${resultado}`);
        aux = Number(prompt('Deseja realizar outra operação?\n 1 - Sim\n 2 - Não'));
    }
    function divisao(){
        n1 = Number(prompt('insira o primeiro número: '));
        n2 = Number(prompt('insira o segundo número: '));
        resultado = n1/n2;
        alert(`resultado de ${n1} / ${n2} = ${resultado}`);
        aux = Number(prompt('Deseja realizar outra operação?\n 1 - Sim\n 2 - Não'));
    }
    function potencializacao(){
        n1 = Number(prompt('insira o primeiro número: '));
        n2 = Number(prompt('insira o segundo número: '));
        resultado = n1**n2;
        alert(`resultado de ${n1} ** ${n2} = ${resultado}`);
        aux = Number(prompt('Deseja realizar outra operação?\n 1 - Sim\n 2 - Não'));
    }
    function multiplicacao(){
        n1 = Number(prompt('insira o primeiro número: '));
        n2 = Number(prompt('insira o segundo número: '));
        resultado = n1*n2;
        alert(`resultado de ${n1} * ${n2} = ${resultado}`);
        aux = Number(prompt('Deseja realizar outra operação?\n 1 - Sim\n 2 - Não'));
    }

    
}

while(aux!=2){
    calculadora();
}
