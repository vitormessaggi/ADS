package model;

public class Eletronico extends Produto implements Seguranca{
    public int voltagem;

    public Eletronico(int c, String d, double v, int vo) {
        super(c, d, v);
       // this.voltagem = voltagem;
        this.setVoltagem(vo);
        this.imprimirTipoProd();
        this.imprimirMensagemSeguranca();
    }

    public int getVoltagem() {
        return voltagem;
    }

    public void setVoltagem(int argVolt) {
        if (argVolt == 110 || argVolt == 220){
        this.voltagem = argVolt;}
        else {
            System.out.println("Erro!");
        }
    }
    public String print(){
        String ret;
        ret = super.print();
        ret = ret + "\nVoltagem " + this.voltagem + "V";
        return ret;
    }

    public void imprimirTipoProd(){
        System.out.println("Você está no setor de eletrônicos");
    }

    @Override
    public void imprimirMensagemSeguranca() {
        System.out.println("Verificar voltagem do produto");
    }
}


