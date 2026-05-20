import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { useState } from 'react';

//Componente de Texto
import Texto from '../componentes/Texto'

interface Produto {
  id: string;
  nome: string;
  preco: number;
  servico: string;
  descricao: string;
  imagem: any;
}

export default function TelaProdutos() {
  const [esporteSelecionado, setEsporteSelecionado] = useState('Todos');

  const servico = ['Todos', 'Estética', 'Lavagem', 'Proteção', 'Serviços Especiais'];

  const produtosData: Produto[] = [
    {
    id: '1',
    nome: 'Lavagem Detalhada',
    preco: 150.00,
    servico: 'Lavagem',
    descricao: 'Limpeza externa profunda com foco em frestas e detalhes',
    imagem: '../assets/Audi.png'
  } as any,
  {
    id: '2',
    nome: 'Lavagem de Manutenção',
    preco: 89.00,
    servico: 'Lavagem',
    descricao: 'Lavagem técnica segura para veículos já vitrificados',
  } as any,
  {
    id: '3',
    nome: 'Polimento Técnico',
    preco: 450.00,
    servico: 'Estética',
    descricao: 'Remoção de riscos leves e restauração do brilho',
  } as any,
  {
    id: '4',
    nome: 'Correção de Pintura',
    preco: 850.00,
    servico: 'Estética',
    descricao: 'Nivelamento do verniz e remoção de marcas profundas',
  } as any,
  {
    id: '5',
    nome: 'Remoção de Chuva Ácida',
    preco: 120.00,
    servico: 'Estética',
    descricao: 'Descontaminação e cristalização dos vidros',
  } as any,
  {
    id: '6',
    nome: 'Vitrificação de Pintura',
    preco: 1200.00,
    servico: 'Proteção',
    descricao: 'Proteção cerâmica (Coating) com durabilidade de até 3 anos',
  } as any,
  {
    id: '7',
    nome: 'Aplicação de Cera Premium',
    preco: 180.00,
    servico: 'Proteção',
    descricao: 'Proteção com cera de carnaúba e brilho intenso',
  } as any,
  {
    id: '8',
    nome: 'Vitrificação de Plásticos',
    preco: 250.00,
    servico: 'Proteção',
    descricao: 'Restauração e proteção UV para plásticos externos',
  } as any,
  {
    id: '9',
    nome: 'Higienização Interna',
    preco: 350.00,
    servico: 'Serviços Especiais',
    descricao: 'Limpeza profunda de estofados, teto e carpetes',
  } as any,
  {
    id: '10',
    nome: 'Hidratação de Couro',
    preco: 150.00,
    servico: 'Serviços Especiais',
    descricao: 'Limpeza e condicionamento dos bancos de couro',
  } as any,
  {
    id: '11',
    nome: 'Revitalização de Faróis',
    preco: 130.00,
    servico: 'Serviços Especiais',
    descricao: 'Lixamento, polimento e proteção UV das lentes',
  } as any,
  {
    id: '12',
    nome: 'Lavagem Técnica de Motor',
    preco: 180.00,
    servico: 'Serviços Especiais',
    descricao: 'Limpeza segura com pincéis e proteção de contatos elétricos',
  } as any,
];

  const produtosFiltrados = esporteSelecionado === 'Todos'
    ? produtosData
    : produtosData.filter(p => p.servico === esporteSelecionado);

  const renderizarFiltro = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[
        styles.botaoFiltro,
        esporteSelecionado === item && styles.botaoFiltroAtivo
      ]}
      onPress={() => setEsporteSelecionado(item)}
    >
      <Text style={[
        styles.textoBotaoFiltro,
        esporteSelecionado === item && styles.textoBotaoFiltroAtivo
      ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderizarProduto = ({ item }: { item: Produto }) => (
    <View style={styles.cardProduto}>
      <View style={styles.containerImagem}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.imagemProduto}
          resizeMode="contain"
        />
        {/* Deixando espaço comentado para adicionar imagem depois */}
        {/* <Image source={{uri: item.imagem}} style={styles.imagemProduto} /> */}
      </View>

      <View style={styles.infosProduto}>
        <Text style={styles.nomeProduto}>{item.nome}</Text>
        
        <Text style={styles.descricaoProduto}>{item.descricao}</Text>
        
        <View style={styles.linhaEsporte}>
          <View style={styles.badgeEsporte}>
            <Text style={styles.textoEsporte}>{item.servico}</Text>
          </View>
        </View>

        <Text style={styles.precoProduto}>R$ {item.preco.toFixed(2)}</Text>

        <TouchableOpacity style={styles.botaoAdicionar}>
          <Text style={styles.textoBotaoAdicionar}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderizarHeader = () => (
    <View>
      <View style={styles.headerProdutos}>
        <Texto estiloEspecifico={styles.tituloProdutos}>
          Nossos Produtos
        </Texto>
      </View>

      {/* Filtro por Esporte */}
      <View style={styles.containerFiltro}>
        <Texto estiloEspecifico={styles.labelFiltro}>
          Filtrar por Esporte:
        </Texto>
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
      <StatusBar style="dark" animated />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000000',
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  headerProdutos: {
    marginBottom: 20,
  },
  tituloProdutos: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
  },
  containerFiltro: {
    marginBottom: 20,
  },
  labelFiltro: {
    color: '#9c9c9c',
    fontSize: 14,
    marginBottom: 10,
  },
  listaFiltros: {
    paddingRight: 16,
    gap: 8,
  },
  botaoFiltro: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    borderWidth: 1.5,
    borderColor: '#004E89',
  },
  botaoFiltroAtivo: {
    backgroundColor: '#001799',
    borderColor: '#ffffff',
  },
  textoBotaoFiltro: {
    color: '#004E89',
    fontFamily: 'FontePadrao',
    fontSize: 12,
    fontWeight: '600',
  },
  textoBotaoFiltroAtivo: {
    color: 'white',
  },
  cardProduto: {
    backgroundColor: '#030318',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 16,
  },
  containerImagem: {
    width: '100%',
    height: 200,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#001799',
  },
  imagemProduto: {
    width: '80%',
    height: '80%',
  },
  infosProduto: {
    padding: 16,
  },
  nomeProduto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'FontePadrao',
    marginBottom: 6,
  },
  descricaoProduto: {
    color: '#666666',
    fontSize: 12,
    fontFamily: 'FontePadrao',
    lineHeight: 18,
    marginBottom: 10,
  },
  linhaEsporte: {
    marginBottom: 10,
  },
  badgeEsporte: {
    alignSelf: 'flex-start',
    backgroundColor: '#001799',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  textoEsporte: {
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
    fontFamily: 'FontePadrao',
  },
  precoProduto: {
    color: '#004E89',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'FontePadrao',
    marginBottom: 12,
  },
  botaoAdicionar: {
    backgroundColor: '#001799',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotaoAdicionar: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'FontePadrao',
  },
});
