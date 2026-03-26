package usavel;
import model.Produto;
import model.Usuario;

public class Principal {
    public static void main(String[] args) {
        Usuario usuario = new Usuario("Vinícius Porcionato", 22, "viniciusdev", "1234");
        Produto produto = new Produto("Notebook Lenovo", 5);

        System.out.println("Validação do Usuário: " + (usuario.validar() ? "Válido" : "Inválido"));
        System.out.println("Validação do Produto: " + (produto.validar() ? "Válido" : "Inválido"));
        System.out.println("-------------------------------------------------");

        usuario.formatoSystemOut();
        produto.formatoSystemOut();
    }
}
