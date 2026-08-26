package com.example.myapplication;

import android.os.Bundle;
import android.os.PersistableBundle;
import android.util.Log;
import android.widget.Button;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class CicloVida extends AppCompatActivity {
    private static final String TAG = "LogCicloVida";
    private int contador = 0;
    private TextView txtSaida;
    private int num=0;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_ciclo_vida);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
        Button btLimpar=findViewById(R.id.btLimpar);
        Button btSomar = findViewById(R.id.btSomar);
        txtSaida = findViewById(R.id.txtSaida);
        txtSaida.setText(String.valueOf(num));

        btSomar.setOnClickListener(v -> {
            contador ++;
            txtSaida.setText(String.valueOf(contador));

        });

        btLimpar.setOnClickListener(v->{
            txtSaida.setText(String.valueOf(num));
            contador =0;
        });



    }

    @Override
    public void onSaveInstanceState(@NonNull Bundle outState) {
        super.onSaveInstanceState(outState);
        outState.putInt("Valor", contador);
    }

    @Override
    public void onRestoreInstanceState(@Nullable Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);

        if(savedInstanceState != null){
            contador = savedInstanceState.getInt("Valor");
            txtSaida.setText(String.valueOf(contador));
        }
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.e(TAG,"Entrou no on start");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.d(TAG,"Entrou no on stop");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.v(TAG,"Entrou no On restart");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.v(TAG,"Entrou no On Pause");
    }


}