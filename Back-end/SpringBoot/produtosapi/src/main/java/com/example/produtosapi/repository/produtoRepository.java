package com.example.produtosapi.repository;

import com.example.produtosapi.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface produtoRepository extends JpaRepository<Produto,String> {
}


