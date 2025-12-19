import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { Header } from 'react-native-library-app-bank'
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { SafeAreaView } from 'react-native-safe-area-context';

const options = [
  {
    icon: 'gear',
    title: 'Seguridad',
    description: 'Bloquea tu tarjeta y administra la app',
  },
  {
    icon: 'gear',
    title: 'Configuración',
    description: 'Compra por internet, efectivo, extranjero',
  },
  {
    icon: 'gear',
    title: 'Apple Pay',
    description: 'Administra tus tajeras afiliadas',
  },
  {
    icon: 'gear',
    title: 'Personaliza tu APP',
    description: 'Yapea por celular, oculta saldos, productos principales',
  }
]


const ConfigurationScreen = () => {
  const navigation = useNavigation()

  const phoneNumber = '+51983004074';

  const handlePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Configuración de la aplicación" />
      <View style={styles.optionsContainer}>
        {
          options.map((option, index) => (
            <TouchableOpacity key={index} style={styles.optionItem}>
              <View style={styles.optionIcon}>
                <FontAwesome6 name={option.icon as any} size={20} color="#7300df" iconStyle="solid" />
              </View>
              <View style={styles.optionText}>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionDescription}>{option.description}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
        <View style={styles.contactContainer}>
          <Text>Si tienes alguna duda, contactar al <Text onPress={handlePress} style={{color: 'blue'}}>{phoneNumber}</Text></Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonCloseSession}
        onPress={()=>{navigation.navigate('Login' as never)}}
      >
        <FontAwesome6 name="right-from-bracket" size={20} color="#7300df" iconStyle="solid" />
        <Text style={styles.buttonCloseSessionText}> Cerrar Sesión</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  optionsContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  optionIcon:{
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 50,
    paddingVertical: 20,
    columnGap: 10,
    alignItems: 'center',
    marginVertical: 1,
  },
  optionText: {
    flexDirection: 'column',
    rowGap: 4
  },
  optionTitle: {
    fontWeight: 'bold',
  },
  optionDescription: {
    color: '#777777',
  },
  contactContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginVertical: 1,
  },
  buttonCloseSession: {
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCloseSessionText: {
    fontWeight: 'bold',
    marginLeft: 10,
  }
})

export default ConfigurationScreen