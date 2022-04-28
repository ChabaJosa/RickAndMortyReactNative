import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
//
const HomeStack = createNativeStackNavigator();
import Home from "../screens/home";
import Character from "../screens/character";
//
function HomeScreen() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Character" component={Character} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
