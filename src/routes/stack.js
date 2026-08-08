import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../telas/login';
import HomeScreen from '../telas/home';
import CadusuarioScreen from '../telas/cad-usuario';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CadUsu" component={CadusuarioScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;