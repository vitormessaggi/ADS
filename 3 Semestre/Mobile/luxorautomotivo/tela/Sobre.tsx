import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";

export default function Sobre() {
  // Configuração do vídeo
  const videoSource = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play(); // Descomentei para o vídeo iniciar sozinho
  });

  return (
    <View style={styles.container}>
      {/* Verifique se a logo está em ../assets/ */}
      <Image 
      source={require('../assets/logo.png')} 
        style={styles.logo}
      />

      <Text style={styles.text}>Luxor Studio Automotivo APP</Text>

      {/* Ajustei de ./assets para ../assets assumindo que estão no mesmo lugar */}
      <Image 
        source={require('../assets/im3.png')}
        resizeMode="contain" 
        style={styles.imagem}
      />

      <VideoView 
        player={player} 
        style={styles.video} 
        allowsPictureInPicture 
        nativeControls={true} // Adicionado para você conseguir controlar o vídeo
      />

      <StatusBar style="light" animated />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "space-evenly", // Distrui melhor os itens na tela verticalmente
    paddingVertical: 40,
  },
  text: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: 'center',
  },
  imagem: {
    width: 300,
    height: 200,
  },
  logo: {
    width: 150,
    height: 150,
  },
  video: {
    width: 350,
    height: 200,
    borderRadius: 15, // Dá um toque mais moderno
    overflow: 'hidden',
  },
});