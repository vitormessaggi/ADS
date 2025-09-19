package org.example;

import javax.swing.*;

public class Conversoes {
    public static void main(String[] args) {
        //entrada
        String nota1 = JOptionPane.showInputDialog("Digite a nota 1");
        String nota2 = JOptionPane.showInputDialog("Digite a nota 2");

        //processamento
        double nota1Convertida = Double.parseDouble(nota1);
        double nota2Convertida = Double.parseDouble(nota2);
        double resultado = (nota1Convertida + nota2Convertida)/2;

        //saída
        JOptionPane.showMessageDialog(null, "A média é: " + resultado);
    }
}
