package Project_Produto;

import javax.swing.*;

public class UsaProduto {
    public static void main(String[] args) {
        Produto p1 = new Produto();
        p1.setMarca(JOptionPane.showInputDialog(null, "CADASTRO PACIENTE 1\n\nDigite a marca:"));
        p1.setFabricante(JOptionPane.showInputDialog(null,"Digite o fabricante:"));
        p1.setCod_barras(JOptionPane.showInputDialog(null, "Digite o código de barras:"));
        p1.setPreco(Float.parseFloat(JOptionPane.showInputDialog(null, "Digite o preço:")));

        String p1_dados = p1.Imprimir();
        JOptionPane.showMessageDialog(null, p1_dados, "Produto Cadastrado", JOptionPane.INFORMATION_MESSAGE);
    }
}
