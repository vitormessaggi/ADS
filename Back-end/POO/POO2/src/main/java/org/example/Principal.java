public static void main(String[] args) {
    //vaiaveis
    String nome;
    int idade;
    double renda;

    //entradas
    nome = "Vinicius";
    idade = 20;
    renda = 600.0;

    //processamento
    double bonus = bonificar();
    renda = renda + bonus;
    atualizarRenda(renda);

    //saida
    System.out.println("A renda do " + nome + " é de: " + renda);
}

private static void atualizarRenda(double argsRenda) {
    double rendaAtualizada = argsRenda + ((argsRenda * 10) / 100);
    System.out.println("Renda atualizada é " + rendaAtualizada);
}

private static double bonificar() {
    double valorBonus = 100;
    return valorBonus;
}