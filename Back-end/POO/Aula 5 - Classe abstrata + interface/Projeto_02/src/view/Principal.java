package view;

import model.*;

public class Principal {
    public static void main(String[] args) {
//        Produto p1 = new Produto(1,"Celular", 5000);
//        System.out.println(p1.print());
//        Eletronico e1 = new Eletronico(1,"Iphone", 5000 , 110);
//        System.out.println(e1.print());
//        Vestuario e1 = new Vestuario(10,"Camisa", 20, "nike", "Azul", "GG");
//        System.out.println(e1.print());
//        Roupa r1 = new Roupa(10,"Camisa", 20, "nike", "Azul", "GG","Jeans");
//        System.out.println(r1.print());
        Calcado c1 = new Calcado(10,"Tenis", 20, "nike", "Azul", "GG","Borracha","Pano","Pano");
        System.out.println(c1.print());
    }
}
