import paho.mqtt.client as mqtt
from paho.mqtt import client as mqtt_client
import time
import json

# Configurações
BROKER = "broker.hivemq.com"
PORT = 8080  # Alterado para evitar bloqueios de firewall
TOPIC = "fabrica/sensor/temp/grupoX" # Use um tópico único
payload = json.dumps({"sensor": "temp", "valor": 25})

# Instanciando com a nova API Version 2
client = mqtt_client.Client(mqtt_client.CallbackAPIVersion.VERSION2)

try:
    print(f"Conectando ao broker {BROKER} na porta {PORT}...")
    client.connect(BROKER, PORT, 60)
    client.loop_start()

    print("Iniciando envio de 100 mensagens...")
    start_time = time.time()

    for i in range(100):
        client.publish(TOPIC, payload)

    end_time = time.time()
    total_duration = end_time - start_time

    print("-" * 30)
    print(f"Sucesso! Tempo Total MQTT: {total_duration:.4f}s")
    
    client.loop_stop()
    client.disconnect()

except Exception as e:
    print(f"\nERRO: Não foi possível conectar. Detalhes: {e}")
    print("DICA: Verifique se sua internet possui firewall bloqueando a porta 1883 ou 8080.")