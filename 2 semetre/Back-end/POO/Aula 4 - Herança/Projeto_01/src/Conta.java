public class Conta {
    private String banco;
    private int agencia;
    private int conta;
    private double saldo;

    public Conta(String banco, int agencia, int conta) {
//        this.banco = banco;
//        this.agencia = agencia;
//        this.conta = conta;
//        this.saldo = saldo;
        this.setBanco(banco);
        this.setAgencia(agencia);
        this.setConta(conta);
        this.saldo = 0;
    }

    public String getBanco() {
        return banco;
    }

    public void setBanco(String banco) {
        if(banco.length() >=2){
        this.banco = banco;}
        else {
            System.out.println("Numero de banco inválido");}
    }

    public int getAgencia() {
        return agencia;
    }

    public void setAgencia(int agencia) {
        if(agencia>0 && agencia <10000){
        this.agencia = agencia;}
        else{
            System.out.println("Agência inválida");
        }
    }

    public int getConta() {
        return conta;
    }

    public void setConta(int conta) {
        if(conta > 0 && conta < 10000){
        this.conta = conta;}
        else{
            System.out.println("Conta inválida");}
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public void depositar(double deposito){
        if (deposito>0){
            this.saldo = this.saldo + deposito;
        }
        else{
            System.out.println("Falha no depósito!!");
        }
    }

    public void sacar (double saque){
        if(saque<=this.saldo){
            this.saldo = this.saldo - saque;
        }
        else{
            System.out.println("Falha em sacar");
        }
    }

    public String toString(){
        return "Banco " + this.banco + "\n Agencia " + this.agencia + "\n Conta " + this.conta + "\n Saldo " + this.saldo;
    }
}
