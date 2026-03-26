public class Poupanca extends Conta{

    private int aniversario;

    public Poupanca(String banco, int agencia, int conta, int aniversario) {
        super(banco, agencia, conta);
        //this.aniversario = aniversario;
        this.setAniversario(aniversario);
    }

    public int getAniversario() {
        return aniversario;
    }

    public void setAniversario(int aniversario) {
       if(aniversario<=12 && aniversario>=1){
        this.aniversario = aniversario;}
       else {
           System.out.println("Aniversário errado");
       }
    }


    public String toString() {
    /*    return "Banco " + super.getBanco() + "\n Agencia " + super.getAgencia() + "\n Conta " + super.getBanco() + "\n Saldo " + super.getSaldo() + "\nAniversario " + this.aniversario;
    */

    return super.toString() + "\nAniversário" + this.aniversario;
    }
}
