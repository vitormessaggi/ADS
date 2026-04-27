import streamlit as st
import numpy as np
import pandas as pd
import time
import random

# --- CONFIGURAÇÃO DA PÁGINA ---
st.set_page_config(page_title="Monitor Industrial v6.0", layout="wide")

st.title("Monitor de Produção")
st.markdown("---")

# --- INICIALIZAÇÃO DO ESTADO (SESSION STATE) ---
if 'faturamento' not in st.session_state:
    st.session_state.faturamento = 0.0
if 'prejuizo' not in st.session_state:
    st.session_state.prejuizo = 0.0
if 'total_pecas' not in st.session_state:
    st.session_state.total_pecas = 0
if 'total_perdas' not in st.session_state:
    st.session_state.total_perdas = 0
if 'historico_completo' not in st.session_state:
    st.session_state.historico_completo = []

# --- BARRA LATERAL (CONTROLES) ---
st.sidebar.header("Painel de Controle")
esteira_ligada = st.sidebar.toggle("LIGAR ESTEIRA SENSORIZADA", value=False)

# Lógica do Botão CSV
if not esteira_ligada and st.session_state.historico_completo:
    st.sidebar.markdown("---")
    st.sidebar.subheader("💾 Exportar Dados")
    df_para_csv = pd.DataFrame(st.session_state.historico_completo)
    csv_bytes = df_para_csv.to_csv(index=False, sep=';', decimal=',').encode('utf-8-sig')
    st.sidebar.download_button(
        label="📥 Baixar Relatório CSV",
        data=csv_bytes,
        file_name=f'relatorio_producao_{time.strftime("%Y%m%d_%H%M")}.csv',
        mime='text/csv'
    )

if st.sidebar.button("Zerar Sistema"):
    for key in list(st.session_state.keys()):
        del st.session_state[key]
    st.rerun()

# --- ÁREA DE MÉTRICAS (VISUALIZAÇÃO DE TOPO) ---
col1, col2, col3, col4 = st.columns(4)
p_faturamento = col1.empty()
p_prejuizo = col2.empty()
p_producao = col3.empty()
p_perdas = col4.empty()

st.write("### Produção em tempo real")
p_tabela = st.empty()

# --- FUNÇÃO DE ESTILIZAÇÃO DA TABELA ---
def aplicar_estilo(linha):
    status = linha['Classificação']
    if status == "Crítico":
        cor = 'background-color: #ff4b4b; color: white; font-weight: bold'
    elif status == "Retrabalho":
        cor = 'background-color: #ffa500; color: white; font-weight: bold'
    else:
        cor = 'background-color: #28a745; color: white; font-weight: bold'
    return [cor if col == 'Classificação' else '' for col in linha.index]

# --- LÓGICA DE EXECUÇÃO (LOOP CONTÍNUO) ---
if esteira_ligada:
    while esteira_ligada:
        for _ in range(5):
            time.sleep(0.5) 
            
            leitura_qualidade = random.uniform(0, 100)
            
            # Regras de Negócio Financeiras
            valor_venda = 100.00   
            custo_perda_total = 100.00 
            custo_correcao = 60.00    
            
            if leitura_qualidade < 5:
                status = "Crítico"
                ganho = 0.00
                perda_financeira = custo_perda_total
                st.session_state.total_perdas += 1
            elif 5 <= leitura_qualidade <= 10:
                status = "Retrabalho"
                ganho = 40.00
                perda_financeira = custo_correcao
            else:
                status = "Aprovado"
                ganho = valor_venda
                perda_financeira = 0.00
            
            # Atualiza Memória da Sessão
            st.session_state.total_pecas += 1
            st.session_state.faturamento += ganho
            st.session_state.prejuizo += perda_financeira
            
            # Adiciona ao Histórico com 2 casas decimais forçadas
            st.session_state.historico_completo.append({
                "Peça ID": st.session_state.total_pecas,
                "Score": round(float(leitura_qualidade), 2),
                "Classificação": status,
                "Ganho (R$)": round(float(ganho), 2),
                "Prejuízo (R$)": round(float(perda_financeira), 2),
                "Hora": time.strftime("%H:%M:%S")
            })
            
            # Atualização das métricas com 2 casas decimais
            p_faturamento.metric("Faturamento Líquido", f"R$ {st.session_state.faturamento:,.2f}")
            p_prejuizo.metric("Prejuízo Acumulado", f"R$ {st.session_state.prejuizo:,.2f}", 
                             delta=f"+{perda_financeira:.2f}" if perda_financeira > 0 else None, 
                             delta_color="inverse")
            p_producao.metric("Total Produzido", f"{st.session_state.total_pecas} pçs")
            p_perdas.metric("Peças Críticas", st.session_state.total_perdas)
            
            # Formata o DataFrame para garantir a exibição de .00 na tabela
            df_atual = pd.DataFrame(st.session_state.historico_completo)
            p_tabela.table(df_atual.style.format({
                "Score": "{:.2f}",
                "Ganho (R$)": "{:.2f}",
                "Prejuízo (R$)": "{:.2f}"
            }).apply(aplicar_estilo, axis=1))

        time.sleep(0.1)
        if not esteira_ligada:
            st.rerun()
            break
else:
    p_faturamento.metric("Faturamento Líquido", f"R$ {st.session_state.faturamento:,.2f}")
    p_prejuizo.metric("Prejuízo Acumulado", f"R$ {st.session_state.prejuizo:,.2f}")
    p_producao.metric("Total Produzido", f"{st.session_state.total_pecas} pçs")
    p_perdas.metric("Peças Críticas", st.session_state.total_perdas)
    
    if st.session_state.historico_completo:
        df_estatico = pd.DataFrame(st.session_state.historico_completo)
        p_tabela.table(df_estatico.style.format({
            "Score": "{:.2f}",
            "Ganho (R$)": "{:.2f}",
            "Prejuízo (R$)": "{:.2f}"
        }).apply(aplicar_estilo, axis=1))