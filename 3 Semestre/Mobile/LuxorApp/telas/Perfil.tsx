import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Image, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import { useState, useRef } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';

// Ícones
import Ionicons from '@expo/vector-icons/Ionicons';

// Componente de Texto
import Texto from '../componentes/Texto';

export default function TelaPerfil() {
  const [nome, setNome] = useState('João Silva');
  const [email, setEmail] = useState('joao@example.com');
  const [whatsapp, setWhatsapp] = useState('(11) 99999-9999');
  
  // Estado que controla se a tela está em modo de edição
  const [isEditando, setIsEditando] = useState(false);
  
  // Mantemos o estado da foto para manipulação de dados, mas não o exibimos no círculo padrão
  const [fotoUsuario, setFotoUsuario] = useState(null);
  
  // Estados e referências para a Câmera
  const [permissao, pedirPermissao] = useCameraPermissions();
  const [isCameraAtiva, setIsCameraAtiva] = useState(false);
  const cameraRef = useRef(null);

  const handleAbrirCamera = async () => {
    // Verifica permissão antes de abrir
    if (!permissao?.granted) {
      const { status } = await pedirPermissao();
      if (status !== 'granted') {
        Alert.alert('Permissão negada', 'Precisamos da câmera para atualizar sua foto.');
        return;
      }
    }
    // Ativa o preview da câmera dentro do círculo
    setIsCameraAtiva(true);
  };

  const handleTirarFoto = async () => {
    if (cameraRef.current) {
      try {
        // Captura a foto
        const foto = await cameraRef.current.takePictureAsync({
          quality: 0.7, // Boa qualidade sem pesar muito
          base64: false,
        });
        
        // Salva a imagem interna, desativa o preview e volta para a logo
        setFotoUsuario(foto.uri);
        setIsCameraAtiva(false);
        // Opcional: Avisar o usuário que a foto foi capturada
        Alert.alert('Sucesso', 'Foto capturada!');
      } catch (erro) {
        Alert.alert('Erro', 'Não foi possível capturar a foto.');
      }
    }
  };

  const handleSalvarAlteracoes = () => {
    setIsEditando(false);
    setIsCameraAtiva(false); // Garante que a câmera seja fechada se o usuário salvar enquanto ela estiver aberta
    // Exemplo de log para mostrar que os dados (incluindo a URI da nova foto) estão prontos
    console.log('Dados salvos:', { nome, email, whatsapp, fotoUsuario });
  };

  const handleCancelarEdicao = () => {
    setIsEditando(false);
    setIsCameraAtiva(false); // Fecha a câmera caso o usuário cancele a edição no meio do processo
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Seção de Foto de Perfil */}
      <View style={styles.secaoFoto}>
        <View style={styles.containerFoto}>
          {isCameraAtiva ? (
            // Exibe a câmera ao vivo se o modo câmera estiver ativo
            <CameraView 
              style={styles.cameraLive} 
              facing="front" // Câmera frontal
              ref={cameraRef}
            />
          ) : (
            // Se a câmera não estiver ATIVA, sempre exibe a logo padrão
            <Image
              source={require('../assets/Logo.png')}
              style={styles.fotoPerfil}
              resizeMode="contain"
            />
          )}
        </View>
        
        {/* O botão da câmera e da lente SÓ APARECE se o modo de edição estiver ativo */}
        {isEditando && (
          <TouchableOpacity 
            style={styles.botaoCamara}
            onPress={isCameraAtiva ? handleTirarFoto : handleAbrirCamera}
          >
            <Ionicons 
              name={isCameraAtiva ? "aperture" : "camera"} 
              size={isCameraAtiva ? 24 : 20} 
              color="white" 
            />
          </TouchableOpacity>
        )}

        {/* Botão vermelho para cancelar e fechar apenas a câmera */}
        {isCameraAtiva && (
          <TouchableOpacity 
            style={styles.botaoCancelarCamera}
            onPress={() => setIsCameraAtiva(false)}
          >
            <Ionicons name="close" size={16} color="white" />
          </TouchableOpacity>
        )}
      </View>

      {/* Seção de Informações */}
      <View style={styles.secaoInfo}>
        <View style={styles.containerCampo}>
          <Text style={styles.labelCampo}>Nome</Text>
          <TextInput
            style={[styles.input, !isEditando && styles.inputDesabilitado]}
            value={nome}
            onChangeText={setNome}
            editable={isEditando}
            placeholder="Digite seu nome"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.containerCampo}>
          <Text style={styles.labelCampo}>Email</Text>
          <TextInput
            style={[styles.input, !isEditando && styles.inputDesabilitado]}
            value={email}
            onChangeText={setEmail}
            editable={isEditando}
            placeholder="Digite seu email"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.containerCampo}>
          <Text style={styles.labelCampo}>WhatsApp</Text>
          <TextInput
            style={[styles.input, !isEditando && styles.inputDesabilitado]}
            value={whatsapp}
            onChangeText={setWhatsapp}
            editable={isEditando}
            placeholder="(XX) XXXXX-XXXX"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />
        </View>
      </View>

      {/* Botões de Ação */}
      <View style={styles.secaoBotoes}>
        {!isEditando ? (
          <TouchableOpacity 
            style={styles.botaoEditar}
            onPress={() => setIsEditando(true)}
          >
            <Ionicons name="pencil" size={18} color="white" />
            <Text style={styles.textoBotaoEditar}>Editar Perfil</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity 
              style={styles.botaoSalvar}
              onPress={handleSalvarAlteracoes}
            >
              <Ionicons name="checkmark" size={18} color="white" />
              <Text style={styles.textoBotaoSalvar}>Salvar Alterações</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.botaoCancelar}
              onPress={handleCancelarEdicao}
            >
              <Ionicons name="close" size={18} color="white" />
              <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <StatusBar style="dark" animated />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  secaoFoto: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
    position: 'relative', 
    alignSelf: 'center',
  },
  containerFoto: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#001799',
    overflow: 'hidden', 
  },
  fotoPerfil: {
    width: '90%',
    height: '90%',
  },
  // fotoPerfilAtiva: { // Removido, pois não estamos exibindo a foto do usuário neste círculo
  //   width: '100%',
  //   height: '100%',
  // },
  cameraLive: {
    width: '100%',
    height: '100%', 
  },
  botaoCamara: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#001799',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  botaoCancelarCamera: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FF3B30',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  secaoInfo: {
    marginBottom: 30,
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 24,
    elevation: 2,
  },
  containerCampo: {
    marginBottom: 18,
  },
  labelCampo: {
    color: '#004E89',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: '#004E89',
    fontSize: 15,
    fontWeight: '600',
  },
  inputDesabilitado: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E8E8E8',
    color: '#999999',
  },
  secaoBotoes: {
    gap: 12,
    marginBottom: 30,
  },
  botaoEditar: {
    backgroundColor: '#001799',
    paddingVertical: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  textoBotaoEditar: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  botaoSalvar: {
    backgroundColor: '#00A86B',
    paddingVertical: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  textoBotaoSalvar: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  botaoCancelar: {
    backgroundColor: '#CCCCCC',
    paddingVertical: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  textoBotaoCancelar: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});