import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>
            Olá! 👋
          </Text>

          <Text style={styles.title}>
            Hope Barbearia
          </Text>
        </View>

        <Pressable
          style={styles.notificationButton}
          onPress={() => {}}
        >
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#ffffff"
          />
        </Pressable>
      </View>

      <View style={styles.content}>

        <Text style={styles.sectionTitle}>
          Acesso rápido
        </Text>

        <View style={styles.cards}>

          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('itens')}
          >
            <View style={styles.iconContainer}>
              <Ionicons
                name="calendar-outline"
                size={28}
                color="#D4AF37"
              />
            </View>

            <Text style={styles.cardTitle}>
              Agendar horário
            </Text>

            <Text style={styles.cardDescription}>
              Marque seu próximo atendimento
            </Text>
          </Pressable>

          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('perfil')}
          >
            <View style={styles.iconContainer}>
              <Ionicons
                name="person-outline"
                size={28}
                color="#D4AF37"
              />
            </View>

            <Text style={styles.cardTitle}>
              Meu perfil
            </Text>

            <Text style={styles.cardDescription}>
              Consulte seus dados
            </Text>
          </Pressable>

        </View>

        <View style={styles.infoCard}>

          <Ionicons
            name="cut-outline"
            size={32}
            color="#D4AF37"
          />

          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>
              Hope Barbearia
            </Text>

            <Text style={styles.infoDescription}>
              Seu estilo, nossa experiência.
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
  },

  header: {
    paddingHorizontal: 24,
    paddingTop: 55,
    paddingBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  welcome: {
    color: '#999999',
    fontSize: 15,
    marginBottom: 5,
  },

  title: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },

  notificationButton: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
  },

  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  cards: {
    flexDirection: 'row',
    gap: 12,
  },

  card: {
    flex: 1,
    backgroundColor: '#161616',
    borderRadius: 15,
    padding: 18,
    minHeight: 170,
  },

  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  cardTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
  },

  cardDescription: {
    color: '#888888',
    fontSize: 12,
    lineHeight: 18,
  },

  infoCard: {
    marginTop: 25,
    backgroundColor: '#161616',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoText: {
    marginLeft: 15,
  },

  infoTitle: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  infoDescription: {
    color: '#888888',
    fontSize: 13,
  },
});

export default HomeScreen;