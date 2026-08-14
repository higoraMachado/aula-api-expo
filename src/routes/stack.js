import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../telas/login';
import HomeScreen from '../telas/home';
import CadusuarioScreen from '../telas/cad-usuario';
import RecSenhaScreen from '../telas/recSenha';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName='login'
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
    <Stack.Screen name="login" component={LoginScreen}
      options={{ title: 'Login' }} />

    <Stack.Screen name="home" component={HomeScreen}
      options={{ title: 'Home' }} />

    <Stack.Screen name="cadUsu" component={CadusuarioScreen}
      options={{ title: 'Cadastro de Usúario' }} />

    <Stack.Screen name="recSenha" component={RecSenhaScreen}
      options={{ title: 'Recuperação de Senha' }} />
    </Stack.Navigator>
  );
}

export default RootStack;