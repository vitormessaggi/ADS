package org.example;

public class UsaClasses {
    public static void main(String[] args) {
        Aluno objA1 = new Aluno();
        objA1.nome = "João";
        objA1.curso = "ADS";
        objA1.ano = 2024;
        objA1.diciplina = 15;
        objA1.media = 7.2;
        Aluno objA2 = new Aluno();
        objA2.nome = "Maria";
        objA2.curso = "Engenharia Civil";
        objA2.ano = 2023;
        objA2.diciplina = 40;
        objA2.media = 6.8;
        Aluno objA3 = new Aluno();
        objA3.nome = "Pedro";
        objA3.curso = "Arquitetura";
        objA3.ano = 2022;
        objA3.diciplina = 30;
        objA3.media = 5.3;

        objA1.imprimir();
        objA2.imprimir();
        objA3.imprimir();
    }
}
