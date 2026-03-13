import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";


export default function Sobre() {

  const player = useVideoPlayer('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', player => {
    player.loop = true
    //player.play()
  });

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} resizeMode="contain" style={styles.logo}/>
      <Text style={styles.text}>Luxor Stdio automotivo APP</Text>
      <Image source={require('./assets/im3.png')} resizeMode="contain" style={styles.imagem}/>
      <StatusBar style="light" animated />
      <VideoView player={player}   style = {styles.video} allowsPictureInPicture />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  imagem: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },

  video: {
    width: 350,
    height: 275,
    alignSelf: "center",
  },
});
