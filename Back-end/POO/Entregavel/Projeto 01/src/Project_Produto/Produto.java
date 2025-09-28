package Project_Produto;

public class Produto {
    public String marca;
    public String fabricante;
    public String cod_barras;
    public float preco;

    public Produto(){
    }
    public Produto(String marca, String fabricante, String cod_barras, float preco) {
        this.marca = marca;
        this.fabricante = fabricante;
        this.cod_barras = cod_barras;
        this.preco = preco;
    }

    public String getMarca() {
        return marca;
    }

    public String getFabricante() {
        return fabricante;
    }

    public String getCod_barras() {
        return cod_barras;
    }

    public float getPreco() {
        return preco;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public void setCod_barras(String cod_barras) {
        this.cod_barras = cod_barras;
    }

    public void setPreco(float preco) {
        this.preco = preco;
    }

    public String Imprimir(){
        return "Marca " + this.marca + "\n" + "Fabricante " + this.fabricante + "\n" + "cod_barras " + this.cod_barras + "\n" + "preco " + this.preco;
    }
}
