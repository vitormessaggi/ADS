import requests
import time

url = "https://httpbin.org/post"
total_requests = 100
payload = {"sensor": "temp", "valor": 25}

print(f"Iniciando envio de {total_requests} mensagens via HTTP...")
start_time = time.time()

for i in range(total_requests):
    try:
        response = requests.post(url, json=payload)
        print(f"Envio {i+1} status: {response.status_code}")
    except Exception as e:
        print(f"Erro no envio {i+1}: {e}")

end_time = time.time()
total_duration = end_time - start_time
average_latency = total_duration / total_requests

print("-" * 30)
print(f"Tempo Total: {total_duration:.2f} segundos")
print(f"Latência Média por Peça: {average_latency:.4f} segundos")