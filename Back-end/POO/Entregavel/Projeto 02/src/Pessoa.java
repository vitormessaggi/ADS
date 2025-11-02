
public abstract class Pessoa {

    protected String nome;
    protected String email;

    public Pessoa() {
    }

    public Pessoa(String nome, String email) {
        this.setNome(nome);
        this.setEmail(email);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String argNome) {
        if (argNome != null && !argNome.trim().isEmpty()) {
            this.nome = argNome.trim(); // Ajustado para usar trim()
        } else {
            System.out.println("Erro: O nome não pode ser nulo ou vazio.");
        }
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String argEmail) {
        if (argEmail != null && argEmail.contains("@")) {
            this.email = argEmail;
        } else {
            System.out.println("Erro: O email fornecido é inválido (deve conter '@').");
        }
    }

    public abstract String getTipo();
}