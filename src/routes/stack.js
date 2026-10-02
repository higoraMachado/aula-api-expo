import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../telas/login';
import CadusuarioScreen from '../telas/cad-usuario';
import RecSenhaScreen from '../telas/recSenha';
import TabNavigator from './tabNavigator';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0B0B0B',
        },

        headerTintColor: '#FFFFFF',

        headerTitleStyle: {
          fontWeight: '700',
        },

        contentStyle: {
          backgroundColor: '#0B0B0B',
        },
      }}
    >

      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="home"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="cadUsu"
        component={CadusuarioScreen}
        options={{
          title: 'Criar conta',
        }}
      />

      <Stack.Screen
        name="recSenha"
        component={RecSenhaScreen}
        options={{
          title: 'Recuperar senha',
        }}
      />

    </Stack.Navigator>
  );
}

export default RootStack;