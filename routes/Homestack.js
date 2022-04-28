import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
const Home = createNativeStackNavigator();
import Home from '../App'
import Character from '../screens/character'
//
function HomeStack() {
  return (
    <Home.Navigator>
      <Home.Screen name="Home" component={Home} />vS
      <Home.Screen name="Profile" component={Profile} />v
    </Home.Navigator>
  );
}