package model;

public abstract class Vestuario extends Produto {
    private String nome;
    private String cor;
    private String tamanho;

    public Vestuario(int c, String d, double v, String n, String co, String t) {
        super(c, d, v);
        this.setNome(n);
        this.setCor(co);
        this.setTamanho(t);

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String argNome) {
        if(argNome.length() > 1 && argNome.length()<10){
        this.nome = argNome;}
        else {
            System.out.println("Erro");}
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String argCor) {
        if(argCor.length()>1 && argCor.length()<10){
            this.cor = argCor;}
        else {
            System.out.println("Erro");}
    }


    public String getTamanho() {
        return tamanho;
    }

    public void setTamanho(String argTamanho) {
        if(argTamanho.length()>1 && argTamanho.length()<20){
            this.tamanho = argTamanho;}
        else {
            System.out.println("Erro");}
    }

    public String print(){
        String ret;
        ret = super.print();
        ret = ret + "\nNome: " + this.nome + "\nCor " + this.cor + "\nTamanho " + this.tamanho;
        return ret;
    }


}
