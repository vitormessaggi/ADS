import joblib 
import pandas as pd 
import uvicorn
import nest_asyncio
from pydantic import BaseModel
from fastapi import FastAPI

#Validação de estrutura dos dados com o pydantic
class InputData(BaseModel):
    buying : float
    maint : float
    lug_boot : float
    safety : float
    doors_2 : int
    doors_3 : int
    doors_4 : int
    doors_5more : int
    persons_2 : int
    persons_4 : int    
    persons_more : int

# Instanciar um objeto em fastAPI
app = FastAPI()

#Definindo a rota que recebera os dados via post
@app.post("/api/")
async def recebe_dados(data : InputData):
    #Caminho para o pre processamento e do modelo
    pre_processamento = "scaler.pkl"
    modelo = "modelo_SVM.pkl"
    #Carregando os modelos salvos
    scaler = joblib.load(pre_processamento)
    model = joblib.load(modelo)
    dados = {'buying' : [data.buying],
            'maint' : [data.maint],
            'lug_boot' : [data.lug_boot],
            'safety' : [data.safety],
            'doors_2' : [data.doors_2],
            'doors_3' : [data.doors_3],
            'doors_4' : [data.doors_4],
            'doors_5more' : [data.doors_5more],
            'persons_2' : [data.persons_2],
            'persons_4' : [data.persons_4],    
            'persons_more' : [data.persons_more]   
        }
    #Transformando o dado recebido em dataframe
    dados_previsao = pd.DataFrame(dados)
    #Ajustand oa escala dos dados
    dados_previsao = scaler.transform(dados_previsao)
    #Fazendo a previsao do m.l
    resultado = model.predict(dados_previsao)
    return{"previsao" : resultado[0]}
print("Em funcionamento")
uvicorn.run(app, host="0.0.0.0", port=8000)