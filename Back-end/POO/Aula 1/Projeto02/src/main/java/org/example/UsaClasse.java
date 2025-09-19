package org.example;

public class UsaClasse {
    public static void main(String[] args) {
        Pessoa obj1 = new Pessoa(); //Criação do objeto
        Pessoa obj2 = new Pessoa();
        obj1.nome = "Luiz";
        obj1.salario = 600;
        obj1.vendas = 5000;


        obj2.nome = "Maria";
        obj2.salario = 3000;
        obj2.vendas = 2000;


        obj1.imprimir(obj1.calcularComissao());
        obj1.bonificar();
        obj1.atualizarRenda(obj1.salario);


        obj2.imprimir(obj2.calcularComissao());
        obj2.bonificar();
        obj2.atualizarRenda(obj1.salario);
    }
}
