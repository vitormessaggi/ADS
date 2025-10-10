public class ContaCorrente extends Conta {
    private double limite;

    public ContaCorrente(String banco, int agencia, int conta, double limite) {
        super(banco, agencia, conta);
//        this.limite = limite;
        this.setLimite(limite);
    }

    public double getLimite() {
        return limite;
    }

    public void setLimite(double limite) {
        if(limite >=0 && limite <=10000){
        this.limite = limite;}
        else{
            System.out.println("Limite inválido");
        }
    }

    public void sacar (double saque){
        if(saque<= (this.getSaldo() + this.limite)){
            this.setSaldo(this.getSaldo() - saque);
        }
        else{
            System.out.println("Falha em sacar");
        }
    }


    public String toString() {
        //   return "Banco " + super.getBanco() + "\n Agencia " + super.getAgencia() + "\n Conta " + super.getBanco() + "\n Saldo " + super.getSaldo() + "\nLimite " + this.limite;
        return super.toString() + "\nLimite " + this.limite;
    }

}

