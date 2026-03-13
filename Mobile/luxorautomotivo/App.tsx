//menu
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//menu sobre
import telaSobre from "./tela/Sobre"
// menu botton
const Tab = createBottomTabNavigator();


function Menu(){
  return <Tab.Navigator>
          <Tab.Screen name="sobre" component={telaSobre}/>    
        </Tab.Navigator>
}
//menu


export default function App() {
  return <NavigationContainer>
          <Menu />
        </NavigationContainer>
}
