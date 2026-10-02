import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

function ItemScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>
          Agendamentos
        </Text>

        <Text style={styles.subtitle}>
          Seus próximos horários
        </Text>
      </View>

      <View style={styles.emptyContainer}>

        <View style={styles.iconContainer}>
          <Ionicons
            name="calendar-outline"
            size={45}
            color="#D4AF37"
          />
        </View>

        <Text style={styles.emptyTitle}>
          Nenhum agendamento
        </Text>

        <Text style={styles.emptyText}>
          Seus próximos horários aparecerão aqui.
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    paddingHorizontal: 24,
  },

  header: {
    paddingTop: 25,
    paddingBottom: 20,
  },

  title: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#888888',
    fontSize: 14,
    marginTop: 5,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },

  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  emptyTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  emptyText: {
    color: '#777777',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ItemScreen;