package org.example;




import java.util.Scanner;

public class Entrada {
    public static void main(String[] args) {
        Scanner obj_leia = new Scanner(System.in);

        //entrada
        System.out.println("Digite uma String: ");
        String nome = obj_leia.nextLine();

        System.out.println("Digite um float: ");
        float numero1 = obj_leia.nextFloat();

        System.out.println("Digite um double: ");
        double numero2 = obj_leia.nextDouble();

        System.out.println("Digite um int: ");
        int numero3 = obj_leia.nextInt();

        System.out.println("Digite um byte: ");
        byte numero4 = obj_leia.nextByte();

        System.out.println("Digite um long: ");
        long numero5 = obj_leia.nextLong();

        System.out.println("Digite um boolean: ");
        boolean numero6 = obj_leia.nextBoolean();

        //saída
        System.out.println("A String digitado foi: " + nome);
        System.out.println("O float digitado foi: " + numero1);
        System.out.println("O double digitado foi: " + numero2);
        System.out.println("O int digitado foi: " + numero3);
        System.out.println("O byte digitado foi: " + numero4);
        System.out.println("O long digitado foi: " + numero5);
        System.out.println("O boolean digitado foi: " + numero6);
    }

}

