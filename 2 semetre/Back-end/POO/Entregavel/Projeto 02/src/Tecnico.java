public class Tecnico extends Funcionario {

    private String setor;

    public Tecnico() {
        super();
    }

    public Tecnico(String nome, String email, double salarioBase, String setor) {
        super(nome, email, salarioBase);
        this.setSetor(setor);
    }

    public String getSetor() {
        return setor;
    }

    public void setSetor(String argSetor) {
        if (argSetor != null && !argSetor.trim().isEmpty()) {
            this.setor = argSetor.trim();
        } else {
            System.out.println("Erro: O setor não pode ser nulo ou vazio.");
        }
    }

    @Override
    public String getTipo() {
        return "Técnico Administrativo";
    }

    @Override
    public void exibir() {
        System.out.println("--- DADOS DO TÉCNICO ---");
        System.out.println("Tipo: " + this.getTipo());
        System.out.println("Nome: " + this.nome);
        System.out.println("Email: " + this.email);
        System.out.println("Salário Base: R$ " + String.format("%.2f", this.salarioBase));
        System.out.println("Setor: " + this.setor);
        System.out.println("------------------------\n");
    }
}