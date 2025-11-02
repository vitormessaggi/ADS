public class App {

    public static void main(String[] args) {

        System.out.println("### Sistema Acadêmico###\n");

        Aluno a1 = new Aluno("ana paula", "ana@email.com", "A123", 2020);
        Aluno a2 = new Aluno("Bruno Silva", "bruno@email.com", "A456", 2021);

        Professor p1 = new Professor("Carlos Andrade", "carlos@prof.com", 5000.0, 40);
        Professor p2 = new Professor("Daniela Motta", "daniela@prof.com", 4500.0, 30);

        Tecnico t1 = new Tecnico("Eduardo Costa", "edu@tec.com", 2500.0, "TI - Suporte");
        Tecnico t2 = new Tecnico("Fernanda Lima", "fer@tec.com", 2800.0, "Recursos Humanos");

        a1.exibir();
        a2.exibir();
        p1.exibir();
        p2.exibir();
        t1.exibir();
        t2.exibir();

    }
}