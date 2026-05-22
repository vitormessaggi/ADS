import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, TouchableOpacity, Image, Text, Modal, Alert } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; 

// Componente de Texto
import Texto from '../componentes/Texto';

interface Produto {
  id: string;
  nome: string;
  preco: number;
  servico: string;
  descricao: string;
  imagem?: any;
}

export default function TelaProdutos() {
  const [esporteSelecionado, setEsporteSelecionado] = useState('Todos');
  
  // Estados para controlar os Modais
  const [statusModal, acaoAbreFecha] = useState(false);
  const [produtoAtivo, setProdutoAtivo] = useState<Produto | null>(null);
  
  // Estados do Carrinho
  const [carrinho, setCarrinho] = useState<Produto[]>([]);
  const [modalCarrinhoVisivel, setModalCarrinhoVisivel] = useState(false);

  const servico = ['Todos', 'Estética', 'Lavagem', 'Proteção', 'Serviços Especiais'];

  const produtosData: Produto[] = [
    { id: '1', nome: 'Lavagem Detalhada', preco: 150.00, servico: 'Lavagem', descricao: 'Limpeza externa profunda com foco em frestas e detalhes', imagem: require('../assets/prod1.jpg') } as any,
    { id: '2', nome: 'Lavagem de Manutenção', preco: 89.00, servico: 'Lavagem', descricao: 'Lavagem técnica segura para veículos já vitrificados', imagem: require('../assets/prod Lavagem.jpg') } as any,
    { id: '3', nome: 'Polimento Técnico', preco: 450.00, servico: 'Estética', descricao: 'Remoção de riscos leves e restauração do brilho', imagem: require('../assets/prod 3.jpg') } as any,
    { id: '4', nome: 'Correção de Pintura', preco: 850.00, servico: 'Estética', descricao: 'Nivelamento do verniz e remoção de marcas profundas', imagem: require('../assets/prod 3.jpg') } as any,
    { id: '5', nome: 'Remoção de Chuva Ácida', preco: 120.00, servico: 'Estética', descricao: 'Descontaminação e cristalização dos vidros', imagem: require('../assets/prod 3.jpg') } as any,
    { id: '6', nome: 'Vitrificação de Pintura', preco: 1200.00, servico: 'Proteção', descricao: 'Proteção cerâmica (Coating) com durabilidade de até 3 anos', imagem: require('../assets/prod6.jpg') } as any,
    { id: '7', nome: 'Aplicação de Cera Premium', preco: 180.00, servico: 'Proteção', descricao: 'Proteção com cera de carnaúba e brilho intenso', imagem: require('../assets/prod1.jpg') } as any,
    { id: '8', nome: 'Vitrificação de Plásticos', preco: 250.00, servico: 'Proteção', descricao: 'Restauração e proteção UV para plásticos externos', imagem: require('../assets/prod8.jpg')} as any
  ];

  const produtosFiltrados = esporteSelecionado === 'Todos'
    ? produtosData
    : produtosData.filter(p => p.servico === esporteSelecionado);

  const adicionarAoCarrinho = (produto: Produto) => {
    setCarrinho(carrinhoAtual => [...carrinhoAtual, produto]);
    Alert.alert(
      "Adicionado!",
      `${produto.nome} adicionado ao seu carrinho! carrinho.`,
      [{ text: "OK", style: "default" }]
    );
  };


  const removerDoCarrinho = (indexParaRemover: number, nomeProduto: string) => {
    Alert.alert(
      "Remover Serviço",
      `Deseja remover ${nomeProduto} do seu carrinho?`,
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Remover", 
          style: "destructive", 
          onPress: () => {
            // Filtra o carrinho mantendo apenas os itens que têm um index diferente do clicado
            setCarrinho(carrinhoAtual => carrinhoAtual.filter((_, index) => index !== indexParaRemover));
          } 
        }
      ]
    );
  };

  const renderizarFiltro = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[styles.botaoFiltro, esporteSelecionado === item && styles.botaoFiltroAtivo]}
      onPress={() => setEsporteSelecionado(item)}
    >
      <Text style={[styles.textoBotaoFiltro, esporteSelecionado === item && styles.textoBotaoFiltroAtivo]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderizarProduto = ({ item }: { item: Produto }) => (
    <TouchableOpacity 
      style={styles.cardProduto} 
      activeOpacity={0.9}
      onPress={() => {
        setProdutoAtivo(item);
        acaoAbreFecha(true);
      }}
    >
      <View style={styles.containerImagem}>
        <Image 
          source={item.imagem ? item.imagem : require('../assets/Logo.png')} 
          style={styles.imagemProduto} 
          resizeMode="contain" 
        />
      </View>

      <View style={styles.infosProduto}>
        <Text style={styles.nomeProduto}>{item.nome}</Text>
        <Text style={styles.descricaoProduto} numberOfLines={2}>{item.descricao}</Text>
        
        <View style={styles.linhaEsporte}>
          <View style={styles.badgeEsporte}>
            <Text style={styles.textoEsporte}>{item.servico}</Text>
          </View>
        </View>

        <Text style={styles.precoProduto}>R$ {item.preco.toFixed(2)}</Text>

        <View style={styles.containerBotoesAcao}>
          <TouchableOpacity 
            style={styles.botaoDetalhes} 
            onPress={() => {
              setProdutoAtivo(item);
              acaoAbreFecha(true);
            }}
          >
            <Ionicons name="list" size={16} color="white" />
            <Text style={styles.textoBotaoDetalhes}>Detalhes</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.botaoAdicionar}
            onPress={() => adicionarAoCarrinho(item)}
          >
            <Text style={styles.textoBotaoAdicionar}>Carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderizarHeader = () => (
    <View>
      <View style={styles.headerContainer}>
        <Texto estiloEspecifico={styles.tituloProdutos}>Nossos Produtos</Texto>
        
        <TouchableOpacity 
          style={styles.iconeCarrinhoContainer}
          onPress={() => setModalCarrinhoVisivel(true)}
        >
          <Ionicons name="cart-outline" size={28} color="#ffffff" />
          {carrinho.length > 0 && (
            <View style={styles.badgeCarrinho}>
              <Text style={styles.textoBadgeCarrinho}>{carrinho.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.containerFiltro}>
        <Texto estiloEspecifico={styles.labelFiltro}>Filtrar por Serviço:</Texto>
        <FlatList
          data={servico}
          renderItem={renderizarFiltro}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listaFiltros}
          scrollEnabled={true}
        />
      </View>
    </View>
  );

  return (
    <>
      <FlatList
        data={produtosFiltrados}
        renderItem={renderizarProduto}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderizarHeader}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
      
      {/* 1. Modal de Detalhes do Produto */}
      <Modal animationType="slide" transparent={true} visible={statusModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            {produtoAtivo && (
              <>
                <TouchableOpacity onPress={() => acaoAbreFecha(false)} style={styles.botaoModal}>
                  <Ionicons name="close" size={28} color="#ffffff" />
                </TouchableOpacity>

                <Image 
                  source={produtoAtivo.imagem ? produtoAtivo.imagem : require('../assets/Logo.png')} 
                  resizeMode="contain" 
                  style={styles.imagemModal} 
                />
                <Text style={styles.nomeProdutoModal}>{produtoAtivo.nome}</Text>
                <Text style={styles.descProdutoModal}>{produtoAtivo.descricao}</Text>
                
                <View style={styles.modalPrecoContainer}>
                  <Text style={styles.precoProdutoModal}>R$ {produtoAtivo.preco.toFixed(2)}</Text>
                </View>

                <TouchableOpacity 
                  style={[styles.botaoAdicionar, { width: '100%', marginTop: 15 }]}
                  onPress={() => {
                    adicionarAoCarrinho(produtoAtivo);
                    acaoAbreFecha(false);
                  }}
                >
                  <Text style={styles.textoBotaoAdicionar}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* 2. Modal do Carrinho de Compras */}
      <Modal animationType="fade" transparent={true} visible={modalCarrinhoVisivel}>
        <View style={styles.modalContainer}>
          <View style={[styles.modal, { paddingVertical: 20 }]}>
            
            <View style={styles.headerModalCarrinho}>
              <Text style={styles.tituloModalCarrinho}>Seu Carrinho</Text>
              <TouchableOpacity onPress={() => setModalCarrinhoVisivel(false)}>
                <Ionicons name="close" size={28} color="#ffffff" />
              </TouchableOpacity>
            </View>

            {carrinho.length === 0 ? (
              <View style={styles.carrinhoVazioContainer}>
                <Ionicons name="cart" size={50} color="#333333" />
                <Text style={styles.textoCarrinhoVazio}>Seu carrinho está vazio.</Text>
              </View>
            ) : (
              <FlatList
                data={carrinho}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                style={{ width: '100%', maxHeight: 300, marginVertical: 15 }}
                renderItem={({ item, index }) => (
                  <TouchableOpacity 
                    style={styles.itemCarrinho}
                    activeOpacity={0.7}
                    onPress={() => removerDoCarrinho(index, item.nome)}
                  >
                    <View style={styles.infoItemCarrinho}>
                      <Ionicons name="trash-outline" size={16} color="#ff4444" style={styles.iconeLixeira} />
                      <Text style={styles.nomeItemCarrinho} numberOfLines={1}>{item.nome}</Text>
                    </View>
                    <Text style={styles.precoItemCarrinho}>R$ {item.preco.toFixed(2)}</Text>
                  </TouchableOpacity>
                )}
              />
            )}

            {carrinho.length > 0 && (
              <View style={styles.footerModalCarrinho}>
                <Text style={styles.textoTotalCarrinho}>Total:</Text>
                <Text style={styles.valorTotalCarrinho}>
                  R$ {carrinho.reduce((total, item) => total + item.preco, 0).toFixed(2)}
                </Text>
              </View>
            )}

          </View>
        </View>
      </Modal>

      <StatusBar style="light" animated /> 
    </>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#000000', paddingTop: 60, paddingHorizontal: 16, paddingBottom: 20 },
  headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  iconeCarrinhoContainer: { position: 'relative', padding: 5 },
  badgeCarrinho: { position: 'absolute', top: -2, right: -5, backgroundColor: '#004E89', borderRadius: 10, width: 20, height: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#000000' },
  textoBadgeCarrinho: { color: '#ffffff', fontSize: 10, fontWeight: 'bold' },
  tituloProdutos: { color: '#ffffff', fontSize: 28, fontWeight: '700' },
  containerFiltro: { marginBottom: 20 },
  labelFiltro: { color: '#9c9c9c', fontSize: 14, marginBottom: 10 },
  listaFiltros: { paddingRight: 16, gap: 8 },
  botaoFiltro: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: '#111111', borderWidth: 1.5, borderColor: '#333333' },
  botaoFiltroAtivo: { backgroundColor: '#004E89', borderColor: '#004E89' },
  textoBotaoFiltro: { color: '#9c9c9c', fontSize: 12, fontWeight: '600' },
  textoBotaoFiltroAtivo: { color: 'white' },
  cardProduto: { backgroundColor: '#050505', borderRadius: 12, borderWidth: 1, borderColor: '#1a1a1a', overflow: 'hidden', marginBottom: 16 },
  containerImagem: { width: '100%', height: 200, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#1a1a1a' },
  imagemProduto: { width: '80%', height: '80%' },
  infosProduto: { padding: 16 },
  nomeProduto: { color: '#ffffff', fontSize: 16, fontWeight: '700', marginBottom: 6 },
  descricaoProduto: { color: '#666666', fontSize: 12, lineHeight: 18, marginBottom: 10 },
  linhaEsporte: { marginBottom: 10 },
  badgeEsporte: { alignSelf: 'flex-start', backgroundColor: '#111111', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, borderWidth: 1, borderColor: '#333333' },
  textoEsporte: { color: '#aaaaaa', fontSize: 11, fontWeight: '700' },
  precoProduto: { color: '#ffffff', fontSize: 18, fontWeight: '700', marginBottom: 12 },
  containerBotoesAcao: { flexDirection: 'row', gap: 8 },
  botaoDetalhes: { flex: 1, backgroundColor: '#111111', flexDirection: 'row', paddingVertical: 12, borderRadius: 8, alignItems: 'center', justifyContent: 'center', gap: 6, borderWidth: 1, borderColor: '#333333' },
  textoBotaoDetalhes: { color: 'white', fontSize: 14, fontWeight: '600' },
  botaoAdicionar: { flex: 1, backgroundColor: '#004E89', paddingVertical: 12, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  textoBotaoAdicionar: { color: 'white', fontSize: 14, fontWeight: '700' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.85)' },
  modal: { width: '85%', backgroundColor: '#050505', borderRadius: 16, padding: 24, alignItems: 'center', borderWidth: 1, borderColor: '#222222' },
  botaoModal: { alignSelf: 'flex-end', marginBottom: 10 },
  imagemModal: { width: 200, height: 150, marginBottom: 20 },
  nomeProdutoModal: { color: '#ffffff', fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 12 },
  descProdutoModal: { color: '#888888', fontSize: 14, textAlign: 'center', lineHeight: 20, marginBottom: 20 },
  modalPrecoContainer: { backgroundColor: '#111111', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8, borderWidth: 1, borderColor: '#333333', width: '100%', alignItems: 'center' },
  precoProdutoModal: { color: '#ffffff', fontSize: 20, fontWeight: '700' },
  headerModalCarrinho: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', borderBottomWidth: 1, borderBottomColor: '#222222', paddingBottom: 15 },
  tituloModalCarrinho: { color: '#ffffff', fontSize: 20, fontWeight: '700' },
  carrinhoVazioContainer: { alignItems: 'center', paddingVertical: 30 },
  textoCarrinhoVazio: { color: '#888888', fontSize: 16, marginTop: 10 },
  itemCarrinho: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#111111', padding: 12, borderRadius: 8, marginBottom: 8, borderWidth: 1, borderColor: '#222222' },
  
 
  infoItemCarrinho: { flexDirection: 'row', alignItems: 'center', flex: 1, paddingRight: 10 },
  iconeLixeira: { marginRight: 8 },
  nomeItemCarrinho: { color: '#ff0000', fontSize: 14, flexShrink: 1 },
  
  precoItemCarrinho: { color: '#7bc6ff', fontSize: 14, fontWeight: '700' },
  footerModalCarrinho: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#222222', paddingTop: 15, marginTop: 5 },
  textoTotalCarrinho: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
  valorTotalCarrinho: { color: '#ffffff', fontSize: 22, fontWeight: '700' }
});