import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Image, FlatList, View, TouchableOpacity } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';
import { useState, useRef } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'; // Importando os ícones

//Componente de Texto
import Texto from '../componentes/Texto';

export default function Sobre() {

  // Indica o vídeo e coloca ele em loop
  const player = useVideoPlayer(require('../assets/Video Apresentacao.mp4'), player => {
      player.loop = true;
  });

  const imagensCarrossel = [
    { id: '1', imagem: require('../assets/Logo.png') }, 
    { id: '2', imagem: require('../assets/Logo.png') },
    { id: '3', imagem: require('../assets/Logo.png') },
  ];

  // --- CONTROLES DO CARROSSEL ---
  const flatListRef = useRef(null);
  const [indiceAtual, setIndiceAtual] = useState(0);

  // Função para avançar a foto
  const handleAvancar = () => {
    if (indiceAtual < imagensCarrossel.length - 1) {
      flatListRef.current.scrollToIndex({
        index: indiceAtual + 1,
        animated: true,
      });
    }
  };

  // Função para voltar a foto
  const handleVoltar = () => {
    if (indiceAtual > 0) {
      flatListRef.current.scrollToIndex({
        index: indiceAtual - 1,
        animated: true,
      });
    }
  };

  // Detecta quando o usuário desliza com o dedo e atualiza o índice
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setIndiceAtual(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 }).current;
  // -------------------------------

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <Image source={require('../assets/Logo.png')} style={styles.logo} resizeMode="contain"/>
      
      <Texto estiloEspecifico={styles.texto}>Sobre o Luxor Studio{'\n\n'}
  Há exatamente 1 ano, o Luxor Studio abriu suas portas com um propósito claro: transformar o cuidado automotivo em uma verdadeira experiência de excelência.{'\n\n'}
  Nós entendemos que o seu carro é mais do que transporte. Ele é uma conquista, uma paixão e um investimento.{'\n\n'}
  Por isso, ao longo destes 12 meses, consolidamos o Padrão Luxor: um atendimento baseado na técnica, no uso de produtos premium mundiais e em um foco obsessivo por detalhes.{'\n\n'}
  Da lavagem minuciosa à vitrificação de alta performance, nossa missão é devolver o brilho e proteger o seu veículo para o futuro.{'\n\n'}
  Obrigado por fazer parte do nosso primeiro ano de história.{'\n\n'}
  Luxor Studio — Onde o brilho do seu carro é a nossa maior conquista.
      </Texto>
      

      <View style={styles.containerCarrossel}>
        <FlatList
          ref={flatListRef}
          data={imagensCarrossel}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16 }}
          snapToInterval={316} // Largura da imagem (300) + gap (16)
          decelerationRate="fast"
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          renderItem={({ item }) => (
            <Image 
              source={item.imagem} 
              style={styles.imagemCarrossel} 
              resizeMode="cover"
            />
          )}
        />


        {indiceAtual > 0 && (
          <TouchableOpacity style={[styles.botaoNavegacao, styles.botaoEsquerda]} onPress={handleVoltar}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
        )}

        {/* Botão de Avançar (Só aparece se não estiver na última foto) */}
        {indiceAtual < imagensCarrossel.length - 1 && (
          <TouchableOpacity style={[styles.botaoNavegacao, styles.botaoDireita]} onPress={handleAvancar}>
            <Ionicons name="chevron-forward" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>

      <VideoView player={player} style={styles.video} allowsPictureInPicture/>
      
      <View style={{ height: 40 }} />

      <StatusBar style="light" animated />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 16,
  },
  texto:{
    color: '#ffffff',
    paddingVertical: 12,
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  containerCarrossel: {
    marginVertical: 20,
    position: 'relative', // Necessário para os botões flutuarem sobre a lista
    justifyContent: 'center',
  },
  imagemCarrossel: {
    width: 300, 
    height: 200, 
    borderRadius: 12, 
    borderWidth: 1,
    borderColor: '#333333',
  },
  botaoNavegacao: {
    position: 'absolute',
    top: '50%',
    marginTop: -20, // Metade da altura do botão para centralizar perfeitamente
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fundo preto semi-transparente
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)', // Borda sutil para destacar do fundo
  },
  botaoEsquerda: {
    left: 10, // Posiciona na beirada esquerda
  },
  botaoDireita: {
    right: 10, // Posiciona na beirada direita
  },
  video: {
    width: 350,
    height: 275,
    alignSelf: "center",
    borderRadius: 12,
    overflow: 'hidden',
  },
});