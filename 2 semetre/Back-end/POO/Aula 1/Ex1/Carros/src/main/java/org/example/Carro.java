package org.example;

public class Carro {
    String modelo;
    int ano;
    double preco;

    void aplicarDesconto(){
        this.preco = preco*0.8;
        System.out.println("Desconto: "+preco);
    }

    void imprimir(double argPreco){
        System.out.println("Modelo: "+modelo+
                           "\nAno: "+ano+
                            "\n Preco: "+ argPreco);
    }
}
