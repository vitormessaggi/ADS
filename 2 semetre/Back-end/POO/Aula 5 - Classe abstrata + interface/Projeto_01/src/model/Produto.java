package model;

public abstract class Produto {
    private int codigo;
    private String descricao;
    private double valor;

    public Produto(int c, String d, double v) {
//        this.codigo = codigo;
//        this.descricao = descricao;
//        this.valor = valor;
        this.setCodigo(c);
        this.setDescricao(d);
        this.setValor(v);
        this.imprimirTipoProd();

    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int argCod) {
        //Aceita apenas entre 1 e 10000
        if(argCod >=1 && argCod<=10000){
            this.codigo = argCod;}
        else{
            System.out.println("Erro código inválido");
        }
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String argDesc) {
        //Aceita apenas entre 3 e 10 caracteres
        if(argDesc.length() > 3 && argDesc.length()<10){
        this.descricao = argDesc;}
        else {
            System.out.println("Erro na descrição");
        }
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double argValor) {
        if(argValor>0){
        this.valor = argValor;}
        else {
            System.out.println("Valor inválido0");
        }
    }

    public String print(){
        String ret;
        ret = "Código: " + this.codigo + "\nDescrição: " + this.descricao + "\nValor: R$" + this.valor;
        return ret;
    }


    public abstract void imprimirTipoProd();
}
