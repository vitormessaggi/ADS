package org.example;

import javax.swing.*;

public class usaClasse {
    public static void main(String[] args) {
        Aluno obj1 = new Aluno();

        //entradas de dados
        obj1.nome = JOptionPane.showInputDialog("Digite o nome do aluno");
        obj1.ra = JOptionPane.showInputDialog("Digite o ra do aluno");
        obj1.idade = Integer.parseInt(JOptionPane.showInputDialog("Digite o idade do aluno"));
        obj1.n1 = Double.parseDouble(JOptionPane.showInputDialog("Digite a nota 1 do aluno"));
        obj1.n2 = Double.parseDouble(JOptionPane.showInputDialog("Digite a nota 2 do aluno"));

        double media = obj1.calcularMedia(obj1.n1, obj1.n2);
        boolean status = obj1.verificarAprovacao(media);

        JOptionPane.showMessageDialog(null, "A média do aluno "+obj1.nome +
                                                                    " é "+ media + "\nSeu status é: " + ((status) ? "Aprovado":"Reprovado"));
    }
}
