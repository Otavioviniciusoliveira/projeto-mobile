
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.subtitle}>Bem vindo de volta!</Text>

      <TextInput placeholder="Usuário" style={styles.input} />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry />

      <TouchableOpacity>
        <Text style={styles.registerText}>
          Não tem uma conta? <Text style={styles.registerLink}>Registre-se</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.googleButtonText}>Continuar com Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003399',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  subtitle: {
    color: '#fff',
    marginBottom: 20,
    fontSize: 18,
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  registerText: {
    color: '#fff',
    marginTop: 10,
  },
  registerLink: {
    color: '#fcb900',
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: '#fff',
    padding: 10,
    width: '80%',
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  googleButtonText: {
    color: '#333',
  },
});
