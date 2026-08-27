package com.example.notes;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class AdapterNota extends RecyclerView.Adapter<AdapterNota.ViewHolder> {
    private ArrayList<nota>listaNota;


    public AdapterNota(ArrayList<nota> listanota) {
        this.listaNota = listanota;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View tela = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_nota, parent, false);
        return new ViewHolder(tela);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        //Monta o card intem do recyle view
        nota item = listaNota.get(position);
        holder.txt_titulo.setText(item.getTitulo());
        holder.txt_descricao.setText(item.getDescricao());
    }

    @Override
    public int getItemCount() {
        return listaNota.size();
    }

    public class ViewHolder  extends RecyclerView.ViewHolder{
        TextView txt_titulo;
        TextView txt_descricao;
        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            txt_titulo = itemView.findViewById(R.id.txt_titulo);
            txt_descricao = itemView.findViewById(R.id.txt_descricao);
        }
    }
}
