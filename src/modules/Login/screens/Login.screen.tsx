import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="dark-content" />
      <View style={style.containerLogo}>
        <FontAwesome6 name="person" size={200} color="#7300df" iconStyle="solid" />
      </View>
      <View style={style.containerForm}>
        <TextInput style={style.input} placeholder="Usuario" />
        <TextInput style={style.input} placeholder="Contraseña" secureTextEntry={true} />
        <TouchableOpacity
        style={style.button}
        onPress={()=> navigation.navigate('CoreBottomTab' as never)}
        >
          <Text style={style.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  containerForm: {
    width: '80%',
    marginTop: 100,
    alignSelf: 'center',
    rowGap: 15,
  },
  input:{
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: '#7300df',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#7300df',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 10,
  }
});

export default LoginScreen;
