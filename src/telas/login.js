import { useState } from 'react';
import logoHope from '../../assets/logo-hope.png';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function entrar() {
    // Vamos conectar com a API na próxima etapa.
    navigation.navigate('home');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        {/* LOGO / MARCA */}
        <View style={styles.brandContainer}>

          <View style={styles.logoCircle}>
              <Image
                source={logoHope}
                style={styles.logo}
                resizeMode="contain"
            />
          </View>

          <Text style={styles.brandName}>
            HOPE
          </Text>

          <Text style={styles.brandSubtitle}>
            BARBEARIA
          </Text>

        </View>

        {/* TÍTULO */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Bem-vindo de volta
          </Text>

          <Text style={styles.description}>
            Entre na sua conta para continuar.
          </Text>
        </View>

        {/* FORMULÁRIO */}
        <View style={styles.form}>

          {/* EMAIL */}
          <View style={styles.inputGroup}>

            <Text style={styles.label}>
              E-mail
            </Text>

            <View style={styles.inputContainer}>

              <Ionicons
                name="mail-outline"
                size={21}
                color="#777777"
                style={styles.inputIcon}
              />

              <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                placeholderTextColor="#666666"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />

            </View>

          </View>

          {/* SENHA */}
          <View style={styles.inputGroup}>

            <Text style={styles.label}>
              Senha
            </Text>

            <View style={styles.inputContainer}>

              <Ionicons
                name="lock-closed-outline"
                size={21}
                color="#777777"
                style={styles.inputIcon}
              />

              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#666666"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={!mostrarSenha}
                autoCapitalize="none"
              />

              <Pressable
                onPress={() =>
                  setMostrarSenha(!mostrarSenha)
                }
                style={styles.eyeButton}
              >
                <Ionicons
                  name={
                    mostrarSenha
                      ? 'eye-outline'
                      : 'eye-off-outline'
                  }
                  size={21}
                  color="#777777"
                />
              </Pressable>

            </View>

          </View>

          {/* ESQUECI A SENHA */}
          <Pressable
            style={styles.forgotButton}
            onPress={() => navigation.navigate('recSenha')}
          >
            <Text style={styles.forgotText}>
              Esqueci minha senha
            </Text>
          </Pressable>

          {/* BOTÃO ENTRAR */}
          <Pressable
            style={styles.loginButton}
            onPress={entrar}
          >
            <Text style={styles.loginButtonText}>
              Entrar
            </Text>

            <Ionicons
              name="arrow-forward"
              size={21}
              color="#0B0B0B"
            />
          </Pressable>

        </View>

        {/* CADASTRO */}
        <View style={styles.registerContainer}>

          <Text style={styles.registerText}>
            Ainda não possui uma conta?
          </Text>

          <Pressable
            onPress={() => navigation.navigate('cadUsu')}
          >
            <Text style={styles.registerLink}>
              Criar conta
            </Text>
          </Pressable>

        </View>

        {/* RODAPÉ */}
        <Text style={styles.footer}>
          © Hope Barbearia
        </Text>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 65,
    paddingBottom: 30,
  },

  brandContainer: {
    alignItems: 'center',
    marginBottom: 42,
  },
  logo: {
    width: 78,
    height: 78,
  },

  logoCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  brandName: {
    color: '#FFFFFF',
    fontSize: 29,
    fontWeight: '800',
    letterSpacing: 6,
  },

  brandSubtitle: {
    color: '#D4AF37',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 5,
    marginTop: 3,
  },

  titleContainer: {
    marginBottom: 28,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '700',
    marginBottom: 8,
  },

  description: {
    color: '#777777',
    fontSize: 14,
    lineHeight: 21,
  },

  form: {
    width: '100%',
  },

  inputGroup: {
    marginBottom: 19,
  },

  label: {
    color: '#D0D0D0',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 9,
  },

  inputContainer: {
    height: 56,
    backgroundColor: '#151515',
    borderWidth: 1,
    borderColor: '#292929',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputIcon: {
    marginLeft: 17,
  },

  input: {
    flex: 1,
    height: '100%',
    color: '#FFFFFF',
    fontSize: 15,
    paddingHorizontal: 13,
  },

  eyeButton: {
    padding: 15,
  },

  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: -3,
    marginBottom: 25,
  },

  forgotText: {
    color: '#D4AF37',
    fontSize: 13,
    fontWeight: '600',
  },

  loginButton: {
    height: 56,
    borderRadius: 13,
    backgroundColor: '#D4AF37',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  loginButtonText: {
    color: '#0B0B0B',
    fontSize: 16,
    fontWeight: '800',
  },

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    gap: 5,
  },

  registerText: {
    color: '#777777',
    fontSize: 13,
  },

  registerLink: {
    color: '#D4AF37',
    fontSize: 13,
    fontWeight: '700',
  },

  footer: {
    color: '#444444',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 'auto',
    paddingTop: 35,
  },
});

export default Login;