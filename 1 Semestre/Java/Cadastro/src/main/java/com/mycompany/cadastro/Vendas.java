/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.cadastro;

public class Vendas {
    
    private String data,preco,comprador,corretor;

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getPreco() {
        return preco;
    }

    public void setPreco(String preco) {
        this.preco = preco;
    }

    public String getComprador() {
        return comprador;
    }

    public void setComprador(String comprador) {
        this.comprador = comprador;
    }

    public String getCorretor() {
        return corretor;
    }

    public void setCorretor(String corretor) {
        this.corretor = corretor;
    }
   
    public String status(){
        return "-------Dados Cadastrados-------"+
                "\nData da venda:" + this.data + 
                "\nValor:" + this.preco +
                "\nNome do comprador:" + this.comprador+
                "\nNome do corretor:" + this.corretor;
        
    }
}
