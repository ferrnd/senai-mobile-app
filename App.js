import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.icon}>
        <Ionicons name="school" size={70} color="#7B2CBF" />
      </View>
      <View>
        <Text style={styles.welcome}>Bem Vindo de Volta</Text>
        <Text style={styles.subtitle}>Acesse sua Conta do SENAI</Text>
      </View>
      <Text style={styles.email}>
        Email
      </Text>
      <View style={styles.label}>
        <TextInput placeholder="seu@email.com" />
      </View>
      <Text style={styles.password}>
        Senha
      </Text>
      <View style={styles.label}>
        <TextInput placeholder="Sua senha" />
      </View>
      <Text style={styles.purple}>Esqueci minha senha</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Entrar →</Text>
      </TouchableOpacity>
      <Text style={styles.text}>--------------- Ou entre com ---------------</Text>
      <View style={styles.father}>
        <View style={styles.ball}>
          <Ionicons name="logo-github" size={30} color="#7B2CBF" />
        </View>
        <View style={styles.ball}>
          <Ionicons name="logo-linkedin" size={30} color="#7B2CBF" />
        </View>
        <View style={styles.ball}>
          <Ionicons name="logo-youtube" size={30} color="#7B2CBF" />
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100
  },

  father: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },

  text: {
    marginTop: 30,
    color: '#bdbdbd'
  },

  ball: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',

  },

  label: {
    width: 350,
    height: 55,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },

  email: {
    marginTop: 30,
    marginRight: 300
  },

  password: {
    marginTop: 30,
    marginRight: 300
  },

  purple: {
    color: '#7B2CBF',
    marginLeft: 200,
    marginTop: 15,
  },

  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 90,
    width: 110,
    height: 110,
    borderRadius: 30,
    backgroundColor: '#ffffff'
  },

  welcome: {
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },

  subtitle: {
    color: '#bbbbbb',
  },

  button: {
    width: 350,
    height: 60,
    backgroundColor: '#7B2CBF',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  }
});