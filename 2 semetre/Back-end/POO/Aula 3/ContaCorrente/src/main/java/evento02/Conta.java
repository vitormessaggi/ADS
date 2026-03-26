package evento02;

public class Conta {
    private int agencia;
    private int numero;
    private double saldo;

    public Conta(int agencia, int numero) {
        //this.agencia = agencia;
        //this.numero = numero;

        this.setAgencia(agencia);
        this.setNumero(numero);
        this.setSaldo(100);
    }

    public Conta(int numero){
        this.agencia = 15000;
        this.setNumero(numero);
        this.setSaldo(0);
    }

    public Conta() {
    }

    public void setAgencia(int agencia) {
        if (agencia >= 1 && agencia <= 9999) {
        this.agencia = agencia; }
        else {
            System.out.println("Agencia invalido");
        }
    }

    public void setNumero(int numero) {
        if (numero >= 10000 && numero <= 20000) {
            this.numero = numero;
        }
        else {
            System.out.println("Numero invalido");
        }

    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public int getAgencia() {
        return agencia;
    }

    private double getSaldo() {
        return saldo;
    }

    public int getNumero() {
        return numero;
    }

    public boolean depositar(double valor_deposito) {
        if (valor_deposito <= 0) {
            System.out.println("Valor invalido");
            return false;
        }
        else {
            this.setSaldo(this.saldo + valor_deposito);
            return true;
        }
    }

    public boolean sacar(double valor_sacar) {
        if (valor_sacar <= 0) {
            System.out.println("Valor invalido");
            return false;
        }
        else {
            this.setSaldo(this.saldo - valor_sacar);
            return true;
        }
    }

    public String imprimirDados(){
        return("Agência: " + this.agencia
                + "\nConta: " + this.numero
                + "\nSaldo: " + this.saldo);
    }
}
