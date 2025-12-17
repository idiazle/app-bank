import { Text, StatusBar } from 'react-native'
import { Header } from 'react-native-library-app-bank'
import { SafeAreaView } from 'react-native-safe-area-context'

const ServicesDetailScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Header title="Pagar Servicio" />
      <Text>ServicesDetailScreen</Text>
    </SafeAreaView>
  )
}

export default ServicesDetailScreen