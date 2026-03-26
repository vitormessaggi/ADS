var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){ //Escuta doble click
   // console.log(event.target.parentNode);
    event.target.parentNode.classList.add("fadeOut"); //Efeito de apagar
    
    setTimeout(function(){
        event.target.parentNode.remove(); //Exclui a linha
    }, 600);    
});
