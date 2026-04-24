import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// 1. IMPORTANTE: Importe o seu COMPONENTE Sobre, não a imagem!
// Supondo que o arquivo sobre.tsx esteja na mesma pasta
import Sobre from "./tela/Sobre"

const Tab = createBottomTabNavigator();

function Menu() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false, // Esconde a barra superior se quiser um visual mais limpo
        tabBarActiveTintColor: '#d63384', // Cor do ícone ativo
        tabBarStyle: { backgroundColor: '#111111' } // Fundo do menu escuro
      }}
    >
      {/* 2. O component agora recebe a função 'Sobre', que é a sua tela */}
      <Tab.Screen name="Sobre" component={Sobre} />    
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
}