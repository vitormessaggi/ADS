public class UsaClasse {
    public static void main(String[] args) {
        ContaCorrente cc = new ContaCorrente("Bradesco", 0020, 2517, 1000);
        cc.depositar(200);
        cc.sacar(1200);
        System.out.println(cc);

        System.out.println("-------------------------------------------");

        Poupanca pc = new Poupanca("Itau", 0030, 7812, 8);
        pc.depositar(200);
        System.out.println(pc);
    }
}
