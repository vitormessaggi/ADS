//document.querySelector(".total").textContent=document.querySelector(".qtde").textContent * document.querySelector(".unitario").textContent

//captura das encomendas
var clientes = document.querySelectorAll(".cliente");

// Calcula o valor total de todas as encomendas
for(var count=0; count <clientes.length; count++){ //roda o for enquanto o numero de clientes for menor que a variável de contagem
    const quantidade = clientes[count].querySelector(".qtd").textContent;
    const unitario = clientes[count].querySelector(".unitario").textContent;

    //verificação se a quantidade é valida
    if(quantidade < 1 || isNaN(quantidade)){ //Quantidade menor que 1 ou não numerico
        clientes[count].querySelector(".qtd ").textContent = "Quantidade errada";
        //clientes[count].querySelector(".qtd").style.color = "red";
        //clientes[count].style.color = "red";
        clientes[count].classList.add("txt-invalido");
    }

    else{
        clientes[count].querySelector(".total").textContent= calculoTotal(quantidade,unitario);
    }

    //verificação se o valor unitario é valido
    if(unitario <1 || isNaN(unitario)){
        clientes[count].querySelector(".unitario").textContent = "Valor unitario errado!";
        clientes[count].classList.add("info-invalida");
    }

    else{
        clientes[count].querySelector(".unitario").textContent = calculoTotal(quantidade,unitario);
    }
}

//função de Calculo total dos valores
function calculoTotal(qtde,unit){ //variáveis não precisam ser da tabela
    var total = 0;
    total = qtde*unit;
    return formatarValor(total);
}

//função formatar valor em R$
function formatarValor(valor){
    var valor_format = valor.toLocaleString('pt-br', {style:'currency', currency:'BRL'});
    return valor_format;
};