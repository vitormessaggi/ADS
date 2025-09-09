var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    //console.log(this.value);
    var clientes = document.querySelectorAll(".cliente");

    if (this.value.length > 0) {
        for (var cli = 0; cli < clientes.length; cli++) {
            var cliente = clientes[cli];
            var nome = cliente.querySelector('.nome').textContent;
            var expressao = new RegExp(this.value,"i");

            //Verifica se o nome digitado é ugual da busca

            if (!expressao.test(nome)) {
                cliente.classList.add("invisivel");
            }
            else {
                cliente.classList.remove("invisivel");
            }
        }
    }
    else {
        for (var cli = 0; cli < clientes.length; cli++) {
            var cliente = clientes[cli];
            clientes[cli].classList.remove("invisivel")
        }
    }
});