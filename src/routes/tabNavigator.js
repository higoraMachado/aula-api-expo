import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../telas/home';
import PerfilScreen from '../telas/perfil';
import ItemScreen from '../telas/item';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#111111',
        },

        headerTintColor: '#ffffff',

        tabBarStyle: {
          backgroundColor: '#111111',
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarActiveTintColor: '#D4AF37',
        tabBarInactiveTintColor: '#888888',

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'perfil') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'itens') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Início',
        }}
      />

      <Tab.Screen
        name="itens"
        component={ItemScreen}
        options={{
          title: 'Agendamentos',
        }}
      />

      <Tab.Screen
        name="perfil"
        component={PerfilScreen}
        options={{
          title: 'Perfil',
        }}
      />
    </Tab.Navigator>
  );
}