package com.example.myapplication;

import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import java.util.Random;

public class Sorteio extends AppCompatActivity {
    private TextView txtSort;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_sorteio);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        Button btsorteio = findViewById(R.id.btSortear);
        Button btLimpar = findViewById(R.id.btLimpar);
        txtSort = findViewById(R.id.txtSort);

        btsorteio.setOnClickListener(v->{
            Random gerador = new Random();
            int min = 10;
            int max = 50;
            int numeroNoIntervalo = gerador.nextInt((max - min) + 1) + min;
            txtSort.setText(String.valueOf(numeroNoIntervalo));
        });

        btLimpar.setOnClickListener(v->{
            int limp = 0;
            txtSort.setText(String.valueOf(limp));
        });
    }
}