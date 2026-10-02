import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

function PerfilScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.avatar}>
        <Ionicons
          name="person"
          size={40}
          color="#D4AF37"
        />
      </View>

      <Text style={styles.title}>
        Meu perfil
      </Text>

      <Text style={styles.subtitle}>
        Dados da sua conta
      </Text>

      <View style={styles.card}>

        <View style={styles.row}>
          <Ionicons
            name="person-outline"
            size={22}
            color="#D4AF37"
          />

          <View>
            <Text style={styles.label}>
              Nome
            </Text>

            <Text style={styles.value}>
              Usuário
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Ionicons
            name="mail-outline"
            size={22}
            color="#D4AF37"
          />

          <View>
            <Text style={styles.label}>
              E-mail
            </Text>

            <Text style={styles.value}>
              E-mail do usuário
            </Text>
          </View>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 35,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
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

  card: {
    width: '100%',
    backgroundColor: '#161616',
    borderRadius: 15,
    marginTop: 30,
    padding: 20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingVertical: 10,
  },

  label: {
    color: '#777777',
    fontSize: 12,
    marginBottom: 3,
  },

  value: {
    color: '#ffffff',
    fontSize: 15,
  },

  divider: {
    height: 1,
    backgroundColor: '#292929',
    marginVertical: 10,
  },
});

export default PerfilScreen;