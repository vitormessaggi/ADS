import { FlatList, View } from "react-native";

import TextoPadrao from "../../componentes/TextoPadrao";
import CadaProduto from "../Produtos/Produto";

export default function Index({itens}:any){
    return <View>
        <TextoPadrao>{itens.titulo}</TextoPadrao>
        <FlatList 
            data={itens.lista}
            renderItem={({item})=> <CadaProduto item={item} />}
            keyExtractor={itens.lista.id}
        />
    </View>
}