package org.example;

public class Pessoa {
    String nome;
    double salario;
    double vendas;


    void atualizarRenda(double argrenda){
        double rendaAtualizada = salario *1.1;
        System.out.println("Renda atualizada: " + rendaAtualizada);
    }

    void bonificar(){
        if(this.salario <= 1000) {
            this.salario = this.salario + 100; //Chama renda e adiciona 100
        }
    }

    void imprimir(double argcomissao){
        System.out.println("Nome: " + this.nome+
                            "\nVendas: " + this.vendas+
                            "\nSalario: " + this.salario +
                            "\nComissão:" + argcomissao);
    }

    double calcularComissao(){
        if (this.vendas < 2000){
            return 0;
        }
        else if (this.vendas < 3000){
            return (this.vendas * 1.5);
        }
        else if (this.vendas < 5000){
            return (this.vendas * 1.7);
        }
        else {
            return (this.vendas * 2);
        }
    }
}
