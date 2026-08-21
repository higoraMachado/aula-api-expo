import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../telas/login';
import HomeScreen from '../telas/home';
import CadusuarioScreen from '../telas/cad-usuario';
import RecSenhaScreen from '../telas/recSenha';
import TabNavigator from './tabNavigator';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName='login'
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}
    >
    <Stack.Screen name="login" component={LoginScreen}
      options={{ title: 'Login' }} />

    <Stack.Screen name="home" component={TabNavigator}
      options={{ title: 'Home', headerShown:false }} />

    <Stack.Screen name="cadUsu" component={CadusuarioScreen}
      options={{ title: 'Cadastro de Usúario' }} />

    <Stack.Screen name="recSenha" component={RecSenhaScreen}
      options={{ title: 'Recuperação de Senha',
        headerStyle: {
            backgroundColor: '#f4e91e',
          },
          headerTintColor: '#f90404',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
       }} />
    </Stack.Navigator>
  );
}

export default RootStack;