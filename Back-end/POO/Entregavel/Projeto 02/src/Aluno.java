public class Aluno extends Pessoa implements Exibivel {

    private String matricula;
    private int anoIngresso;

    public Aluno() {
        super();
    }

    public Aluno(String nome, String email, String matricula, int anoIngresso) {
        super(nome, email);
        this.setMatricula(matricula);
        this.setAnoIngresso(anoIngresso);
    }

    public String getMatricula() {
        return matricula;
    }


    public void setMatricula(String argMatricula) {
        if (argMatricula != null && argMatricula.startsWith("A")) {
            this.matricula = argMatricula;
        } else {
            System.out.println("Erro: Matrícula inválida. Deve começar com 'A'.");
        }
    }


    public int getAnoIngresso() {
        return anoIngresso;
    }


    public void setAnoIngresso(int argAnoIngresso) {
        if (argAnoIngresso >= 2000) {
            this.anoIngresso = argAnoIngresso;
        } else {
            System.out.println("Erro: Ano de ingresso inválido. Deve ser >= 2000.");
        }
    }

    @Override
    public String getTipo() {
        return "Aluno";
    }

    @Override
    public void exibir() {
        System.out.println("--- DADOS DO ALUNO ---");
        System.out.println("Tipo: " + this.getTipo());
        System.out.println("Nome: " + this.nome);
        System.out.println("Email: " + this.email);
        System.out.println("Matrícula: " + this.matricula);
        System.out.println("Ano de Ingresso: " + this.anoIngresso);
        System.out.println("------------------------\n");
    }
}