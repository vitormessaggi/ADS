package org.example;

public class Aluno {
    String nome, ra;
    int idade;
    double n1,n2;

    double calcularMedia(double pn1, double pn2){
        double media;
        media = (pn1+pn2)/2;
        return media;
    }

    boolean verificarAprovacao(double pmedia){
        if(pmedia>=5){
            return true;
        }

        else{
            return false;
        }
    }
}
