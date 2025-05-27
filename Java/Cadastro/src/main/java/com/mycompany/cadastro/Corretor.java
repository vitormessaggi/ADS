/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.cadastro;

public class Corretor {
    private String nome,creci,email,telefone;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getCreci() {
        return creci;
    }
    public void setCreci(String creci) {
        this.creci = creci;
    }

    public void setCpf(String creci) {
        this.creci = creci;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

   
    
    
    public String status(){
        return "-------Dados Cadastrados-------"+
                "\nnome:" + this.nome + 
                "\nCreci:" + this.creci +
                "\nEmail:" + this.email+
                "\nTelefone:" + this.telefone;
        
    }
}
