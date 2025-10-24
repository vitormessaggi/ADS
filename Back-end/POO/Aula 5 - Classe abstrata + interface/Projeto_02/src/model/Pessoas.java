package model;

public class Pessoas {
    protected String nomeCompleto;
    protected int idade;

    public Pessoas(String nomeCompleto, int idade) {
        this.setNomeCompleto(nomeCompleto);
        this.setIdade(idade);
    }

    public Pessoas() {
    }

    public String getNomeCompleto() {
        return nomeCompleto;
    }

    public void setNomeCompleto(String nomeCompleto) {
        this.nomeCompleto = nomeCompleto;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }
}
