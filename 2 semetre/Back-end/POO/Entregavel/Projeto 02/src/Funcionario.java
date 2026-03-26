public abstract class Funcionario extends Pessoa implements Exibivel {

    protected double salarioBase;

    public Funcionario() {
        super();
    }

    public Funcionario(String nome, String email, double salarioBase) {
        super(nome, email);
        this.setSalarioBase(salarioBase);
    }

    public double getSalarioBase() {
        return salarioBase;
    }

    public void setSalarioBase(double argSalarioBase) {
        if (argSalarioBase >= 0) {
            this.salarioBase = argSalarioBase;
        } else {
            System.out.println("Erro: O salário base não pode ser negativo.");
        }
    }
}