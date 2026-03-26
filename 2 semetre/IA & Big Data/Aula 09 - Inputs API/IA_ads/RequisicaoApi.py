import requests
import pandas as pd

url = "http://localhost:8000/api/"
#url = 
data = {
      'buying' : 4,
     'maint' : 4,
      'lug_boot' : 0,
     'safety' : 3,
      'doors_2' : 1,
     'doors_3' : 0,
      'doors_4' : 0,
     'doors_5more' : 0,
      'persons_2' : 0,
      'persons_4' : 1,    
      'persons_more' : 0
}

#enviar a requisição post
response = requests.post(url, json=data)

#Verificar a resposta da api

if response.status_code == 200:
    print("Dados enviados com sucesso!")
    resposta = response.json() #Faz a convesão de json para python
    print("Para os dados enviados a estimativa foi: ")
    print(resposta["previsao"])
else:
    print("Erro!! Dados não foram enviados")