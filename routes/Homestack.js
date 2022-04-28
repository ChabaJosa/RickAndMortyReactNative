import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
//
const Home = createNativeStackNavigator();
import Home from "../App";
import Character from "../screens/character";
//
function HomeStack() {
  return (
    <NavigationContainer>
      <Home.Navigator>
        <Home.Screen name="Home" component={Home} />
        
        <Home.Screen name="Character" component={Character} />
      </Home.Navigator>
    </NavigationContainer>
  );
}
