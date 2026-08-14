import {View, Text, Pressable} from "react-native";
import { Button } from '@react-navigation/elements';
import { Link } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";

function Login() {

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button screen="home">Acessar o App</Button>
      <Link screen="cadUsu">Cadastro de usúarios</Link>
      <Pressable onPress={() => navigation.navigate('recSenha')}>
        <Text>Recuperação de senha</Text>
      </Pressable>
    </View>
  );
}

export default Login;