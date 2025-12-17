import { View, Image, StyleSheet } from 'react-native'
import { Header } from 'react-native-library-app-bank'

const TarjetScreen = () => {
  return (
    <View style={styles.container}>
      <Header title='Tarjetas' />
      <Image
        source={require('../images/img1.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
   image: {
    width: '80%',
  },
})

export default TarjetScreen
