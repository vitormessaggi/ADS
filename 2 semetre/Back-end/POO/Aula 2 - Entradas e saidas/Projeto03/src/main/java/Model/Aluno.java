package Model;

public class Aluno {
    public String nome, ra;
    private int idade;
    private double n1,n2;

    public double calcularMedia(double pn1, double pn2){
        double media;
        media = (pn1+pn2)/2;
        return media;
    }

    public boolean verificarAprovacao(double pmedia){
        if(pmedia>=5){
            return true;
        }

        else{
            return false;
        }
    }

    public void setNota1(double nota){
        if(nota>=0 && nota<=10){
            this.n1 = nota;
        }
        else{
            System.out.println("Nota invalida!");
        }
    }

    public void setNota2(double nota2){
        if(nota2>=0 && nota2<=10){
            this.n2 = nota2;
        }
        else{
            System.out.println("Nota invalida!");
        }
    }

    public double getNota1(){
        return this.n1;
    }
    public double getNota2(){
        return this.n2;
    }

    public void setIdade(int idade){
        if(idade>=18 && idade<=100){
            this.idade = idade;
        }
        else{
            System.out.println("Idade invalida!");
        }
    }
    public int getIdade(){
        return this.idade;
    }
}
