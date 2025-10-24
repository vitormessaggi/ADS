
package model;

public class Produto implements Iimprimivel, Iseguranca {
    private String descricao;
    private int quantidade;

    public Produto(String descricao, int quantidade) {
        this.setDescricao(descricao);
        this.setQuantidade(quantidade);
    }

    public Produto() {}

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    @Override
    public String formatoString() {
        return "Produto: " + descricao + nlin +
                "Quantidade: " + quantidade + nlin;
    }

    @Override
    public void formatoSystemOut() {
        System.out.println(formatoString());
    }

    @Override
    public boolean validar() {
        return descricao != null && !descricao.isEmpty() && quantidade > 0;
    }
}
