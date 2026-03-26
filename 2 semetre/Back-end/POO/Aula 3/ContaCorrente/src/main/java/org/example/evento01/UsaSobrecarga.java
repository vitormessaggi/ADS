package org.example.evento01;

public class UsaSobrecarga {
    public static void main(String[] args) {
        Sobrecarga obj_Sobrecarga = new Sobrecarga();
        obj_Sobrecarga.somar(5.0,4.0);

        double resultado = obj_Sobrecarga.somar(5.0,4.0);
        System.out.println(resultado);

        System.out.println(obj_Sobrecarga.somar(2.0,3.5,9.0));
        System.out.println(obj_Sobrecarga.somar(2.0,3.5,9.0));
    }
}
