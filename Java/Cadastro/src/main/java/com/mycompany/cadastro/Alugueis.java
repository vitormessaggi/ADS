/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.cadastro;

public class Alugueis {
    private String inicio,termino,preco,locatario,corretor;

    public String getInicio() {
        return inicio;
    }

    public void setInicio(String inicio) {
        this.inicio = inicio;
    }

    public String getTermino() {
        return termino;
    }

    public void setTermino(String termino) {
        this.termino = termino;
    }

    public String getPreco() {
        return preco;
    }

    public void setPreco(String preco) {
        this.preco = preco;
    }

    public String getLocatario() {
        return locatario;
    }

    public void setLocatario(String locatario) {
        this.locatario = locatario;
    }

    public String getCorretor() {
        return corretor;
    }

    public void setCorretor(String corretor) {
        this.corretor = corretor;
    }
   
    public String status(){
        return "-------Dados Cadastrados-------"+
                "\nData de inicio:" + this.inicio + 
                "\nData de termino:" + this.termino +
                "\nPreço Mensal:" + this.preco+
                "\nLocatario:" + this.locatario +
                "\nCorretor:" + this.corretor;
        
    }
}
