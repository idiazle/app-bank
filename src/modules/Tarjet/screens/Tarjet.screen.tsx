import { View, StyleSheet, ScrollView } from 'react-native'
import { Header } from 'react-native-library-app-bank'
import Card from '../components/Card'
import { SafeAreaView } from 'react-native-safe-area-context'

const cards = [
  {
    balance: '$5,000.00',
    cardNumber: '3456',
    cardHolder: 'JOHN DOE',
    expiryDate: '12/24',
    brand: 'VISA',
  },
  {
    balance: '$3,200.50',
    cardNumber: '7654',
    cardHolder: 'JANE SMITH',
    expiryDate: '11/23',
    brand: 'VISA',
  },
  {
    balance: '$7,850.75',
    cardNumber: '6789',
    cardHolder: 'ALICE JOHNSON',
    expiryDate: '10/25',
    brand: 'VISA',
  }
]

const TarjetScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Tarjetas' />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.containerCards}>
          {cards.map((card, index) => (
            <Card
              key={index}
              balance={card.balance}
              cardNumber={card.cardNumber}
              cardHolder={card.cardHolder}
              expiryDate={card.expiryDate}
              brand={card.brand}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  containerCards: {
    padding: 20,
    gap: 20,
    alignItems: 'center',
  },
})

export default TarjetScreen