package com.example.myapplication;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class Principal extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_principal);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        Button btOla = findViewById(R.id.btOla);
        btOla.setOnClickListener(v->{
            Intent rota = new Intent(this, MainActivity.class);
            startActivity(rota);
        });

        Button btCiclo = findViewById(R.id.btCiclo);
        btCiclo.setOnClickListener(v->{
            Intent rota = new Intent(this, CicloVida.class);
            startActivity(rota);
        });

        Button btSorteio = findViewById(R.id.btSorteio);
        btSorteio.setOnClickListener(v->{
            Intent rota = new Intent(this, Sorteio.class);
            startActivity(rota);
        });


        Button btNetflix = findViewById(R.id.btnetflix);
        btNetflix.setOnClickListener(v->{
            Intent rota = new Intent(this, Netflix.class);
            startActivity(rota);
        });

        Button btMax = findViewById(R.id.btMax);
        btMax.setOnClickListener(v->{
            Intent rota = new Intent(this, Max.class);
            startActivity(rota);
        });

    }
}