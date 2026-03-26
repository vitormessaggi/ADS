package Project_Pasciente;

import javax.swing.JOptionPane;

public class UsaPasciente {
    public static void main(String[] args) {

        Pasciente p1 = new Pasciente();

        p1.setNome(JOptionPane.showInputDialog(null, "CADASTRO PACIENTE 1\n\nDigite o nome:"));
        p1.setRg(JOptionPane.showInputDialog(null, "CADASTRO PACIENTE 1\n\nDigite o RG:"));
        p1.setEndereco(JOptionPane.showInputDialog(null, "CADASTRO PACIENTE 1\n\nDigite o endereço:"));
        p1.setTelefone(JOptionPane.showInputDialog(null, "CADASTRO PACIENTE 1\n\nDigite o telefone:"));
        p1.setNascimento(JOptionPane.showInputDialog(null, "CADASTRO PACIENTE 1\n\nDigite a data de nascimento:"));
        p1.setProfissao(JOptionPane.showInputDialog(null, "CADASTRO PACIENTE 1\n\nDigite a profissão:"));

        String nomeP2 = JOptionPane.showInputDialog(null, "CADASTRO PACIENTE 2\n\nDigite o nome:");

        Pasciente p2 = new Pasciente(nomeP2);

        p2.setRg(JOptionPane.showInputDialog(null, "Digite o RG:"));
        p2.setEndereco(JOptionPane.showInputDialog(null, "Digite o endereço:"));
        p2.setTelefone(JOptionPane.showInputDialog(null, "Digite o telefone:"));
        p2.setNascimento(JOptionPane.showInputDialog(null, "Digite a data de nascimento:"));
        p2.setProfissao(JOptionPane.showInputDialog(null, "Digite a profissão:"));


        String dadosP1 = p1.Imprimir();
        String dadosP2 = p2.Imprimir();
        JOptionPane.showMessageDialog(null, dadosP1 + dadosP2, "Resultado Pascientes", JOptionPane.INFORMATION_MESSAGE);

    }
}
