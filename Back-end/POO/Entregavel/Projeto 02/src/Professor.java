public class Professor extends Funcionario {

    private int horasSemana;

    public Professor() {
        super();
    }

    public Professor(String nome, String email, double salarioBase, int horasSemana) {
        super(nome, email, salarioBase);
        this.setHorasSemana(horasSemana);
    }

    public int getHorasSemana() {
        return horasSemana;
    }


    public void setHorasSemana(int argHorasSemana) {
        if (argHorasSemana >= 1 && argHorasSemana <= 44) {
            this.horasSemana = argHorasSemana;
        } else {
            System.out.println("Erro: Horas semanais inválidas. Deve ser entre 1 e 44.");
        }
    }

    public double calcularSalario() {
        return this.salarioBase + (this.horasSemana * 50.0);
    }

    @Override
    public String getTipo() {
        return "Professor";
    }

    @Override
    public void exibir() {
        System.out.println("--- DADOS DO PROFESSOR ---");
        System.out.println("Tipo: " + this.getTipo());
        System.out.println("Nome: " + this.nome);
        System.out.println("Email: " + this.email);
        System.out.println("Salário Base: R$ " + String.format("%.2f", this.salarioBase));
        System.out.println("Horas Semanais: " + this.horasSemana);
        System.out.println("Salário Calculado: R$ " + String.format("%.2f", this.calcularSalario()));
        System.out.println("--------------------------\n");
    }
}