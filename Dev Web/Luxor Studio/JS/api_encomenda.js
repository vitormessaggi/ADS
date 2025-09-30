var botaoAPI = document.querySelector("#api-encomenda")

botaoAPI.addEventListener("click", function(){
    //Consome api
    var api = new XMLHttpRequest();
    api.open("GET", "http://localhost:3000/encomendas_web");
    api.addEventListener("load",function(){
        var resposta = JSON.parse(api.responseText);
        resposta.forEach(function(encomendaAPI) {
            adicionarEncomendaTabela(encomendaAPI);});
    });
})