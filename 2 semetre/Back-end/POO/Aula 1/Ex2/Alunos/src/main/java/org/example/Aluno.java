package org.example;
public class Aluno {
    String nome, curso;
    int ano, diciplina;
    double media;

    double calcularSemestresConcluidos(){
        int semestres;
        semestres = this.diciplina/5;
        return semestres;
    }

    boolean aprovado(){
        if (this.media >= 6){
            return true;
        }
        else{
            return false;
        }
    }
    void imprimir(){
        System.out.println("Nome: " + this.nome +
                            "\nCurso: " + this.curso +
                            "\nAno: " + this.ano +
                            "\nMedia: " + this.media +
                            "\nDiciplina: " + this.diciplina +
                            "\nSemestres concluidos: " + this.calcularSemestresConcluidos() +
                            "\nAprovado?: " + (this.aprovado() ? "sim":"Não") + "\n"+"\n"); //condição ? resposta verdadeira:resposta falsa
    }
}
