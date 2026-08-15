import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../telas/home';
import PerfilScreen from '../telas/perfil';
import ItemScreen from '../telas/item';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Item" component={ItemScreen} />
    </Tab.Navigator>
  );
}