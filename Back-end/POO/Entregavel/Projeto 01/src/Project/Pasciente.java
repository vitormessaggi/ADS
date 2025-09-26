package Project;

public class Pasciente {
    private String nome;
    private String rg;
    private String endereco;
    private String telefone;
    private String nascimento;
    private String profissao;

    public Pasciente() {
    }

    public Pasciente(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getNascimento() {
        return nascimento;
    }

    public void setNascimento(String nascimento) {
        this.nascimento = nascimento;
    }

    public String getProfissao() {
        return profissao;
    }

    public void setProfissao(String profissao) {
        this.profissao = profissao;
    }

    public String Imprimir(){
        return "nome: " + this.nome + "\n"+ "rg: " + this.rg + "\n"+ "endereco: " + this.endereco + "\n" + "telefone: " + this.telefone + "\n"+ "data de nascimento: " + this.nascimento + "\n"+ "profissao: " + this.profissao + "\n"+ "\n";
    }
}
