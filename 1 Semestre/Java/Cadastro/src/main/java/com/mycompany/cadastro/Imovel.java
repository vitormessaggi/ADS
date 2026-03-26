/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.cadastro;

public class Imovel {

    private String endereco,preco,areaa,vagas;
    
    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getPreco() {
        return preco;
    }

    public void setPreco(String preco) {
        this.preco = preco;
    }

    public String getAreaa() {
        return areaa;
    }

    public void setAreaa(String areaa) {
        this.areaa = areaa;
    }

    public String getVagas() {
        return vagas;
    }

    public void setVagas(String vagas) {
        this.vagas = vagas;
    }
   
    
    
    public String status(){
        return "-------Dados Cadastrados-------"+
                "\nEndereço:" + this.endereco + 
                "\nPreço:" + this.preco +
                "\nÁrea:" + this.areaa+
                "\nVagas:" + this.vagas;
        
    }
}
