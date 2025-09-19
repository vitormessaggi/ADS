package org.example;

public class UsaClasses {
    public static void main(String[] args) {
        Carro obj1 = new Carro();
        Carro obj2 = new Carro();
        Carro obj3 = new Carro();

        obj1.modelo = "Onix";
        obj1.ano = 2022;
        obj1.preco = 50000;

        obj2.modelo = "Fiorino";
        obj2.ano = 2015;
        obj2.preco = 70000;

        obj3.modelo = "Cruze";
        obj3.ano = 2021;
        obj3.preco = 90000;

        obj1.imprimir(argPreco);
        obj1.aplicarDesconto();
        obj2.imprimir();
        obj2.aplicarDesconto();
        obj3.imprimir();
        obj3.aplicarDesconto();
    }
}
