package model;

public class Roupa extends Vestuario{

    private String tecido;

    public Roupa(int c, String d, double v, String n, String co, String t, String te) {
        super(c, d, v, n, co, t);
        this.setTecido(te);
        this.imprimirTipoProd();
    }

    public String getTecido() {
        return tecido;
    }

    public void setTecido(String argTec) {
        if(argTec.length()>1 && argTec.length()<10){
        this.tecido = argTec;}
    }

    public String print(){
        String ret;
        ret = super.print();
        ret = ret + "\ntecido " + this.tecido;
        return ret;
    }

    @Override
    public void imprimirTipoProd() {
        System.out.println("Este é o setor de roupas");
    }
}
