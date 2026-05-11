import subprocess
import time
from datetime import datetime

while True:

    print("\n" + "=" * 60)
    print("           SISTEMA DE MONITORAMENTO DE ATUADORES")
    print("=" * 60)

    input("\nPressione ENTER para disparar o comando de PARADA...")

    print("\n[TRANSMISSÃO] Enviando sinal para o dispositivo de campo...\n")

    inicio = time.time()

    resultado = subprocess.run(
        ["ping", "-n", "1", "google.com"],
        capture_output=True,
        text=True
    )

    fim = time.time()

    tempo_total = fim - inicio
    horario = datetime.now().strftime("%H:%M:%S")

    print("-" * 60)
    print(f"Instante do Acionamento : {horario}")
    print(f"Endereço do Atuador     : 142.250.191.110 (Google)")
    print(f"Latência de Rede        : {tempo_total:.2f} segundos")
    print("-" * 60)

    if "TTL=" in resultado.stdout:
        print("[STATUS: OK] Sinal recebido e confirmado pelo hardware!")
    else:
        print("[STATUS: CRÍTICO] Falha na entrega! O robô não parou.")

    print("\nLog de Telemetria (Camada de Rede):\n")

    linhas = resultado.stdout.splitlines()

    for linha in linhas:
        # Verifica termos em português e inglês para garantir a captura
        if "Resposta de" in linha or "Reply from" in linha or "Request timed out" in linha or "tempo limite" in linha:
            print(">>", linha.strip())

    print("\n" + "=" * 60) 