import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

//Componente de Texto
import Texto from '../componentes/Texto'

export default function Sobre() {

  //Indica o vídeo e coloca ele em loop
  const player = useVideoPlayer(require('../assets/Video Apresentacao.mp4'), player => {
      player.loop = true
      //player.play()
  })

  return (
    <ScrollView style={styles.container}>
      
      <Image source={require('../assets/Logo.png')} style={styles.logo} resizeMode="contain"/>
      
      <Texto estiloEspecifico={styles.texto}>Sobre o Luxor Studio{'\n\n'}
  Há exatamente 1 ano, o Luxor Studio abriu suas portas com um propósito claro: transformar o cuidado automotivo em uma verdadeira experiência de excelência.{'\n\n'}
  Nós entendemos que o seu carro é mais do que transporte. Ele é uma conquista, uma paixão e um investimento.{'\n\n'}
  Por isso, ao longo destes 12 meses, consolidamos o Padrão Luxor: um atendimento baseado na técnica, no uso de produtos premium mundiais e em um foco obsessivo por detalhes.{'\n\n'}
  Da lavagem minuciosa à vitrificação de alta performance, nossa missão é devolver o brilho e proteger o seu veículo para o futuro.{'\n\n'}
  Obrigado por fazer parte do nosso primeiro ano de história.{'\n\n'}
  Luxor Studio — Onde o brilho do seu carro é a nossa maior conquista.
      </Texto>
      
      
      <StatusBar style="dark" animated />

      <VideoView player={player} style={styles.video} allowsPictureInPicture/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal:16,
  },
  texto:{
    color: '#ffffff',
    paddingVertical: 12,
  },
  imagem:{
    width: '100%',
    height: 280,
    alignSelf: "center",
    marginVertical: 16,
    resizeMode: 'contain',
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  video: {
    width: 350,
    height: 275,
    alignSelf: "center",
  },
});