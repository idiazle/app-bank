import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { BannerInformativo, Header, TargetOption } from 'react-native-library-app-bank';
import { SafeAreaView } from 'react-native-safe-area-context';

const options = [
  { title: 'Tarjetas', description: 'Se listaran tus tarjetas de credito y debito', route: 'Tarjet', icon: 'credit-card' },
  { title: 'Movimientos', description: 'Aqui veras todos tus movimientos', route: 'Loading', icon: 'list' },
  { title: 'Prestamos', description: 'Descubre los prestamos que tenemos para ti', route: 'Loans', icon: 'money-bills' },
  { title: 'Servicios', description: 'Aqui podras pagar todos tus servicios', route: 'Services', icon: 'lightbulb ' },
]
const banner = [
  "Item 1",
  "Item 2",
  "Item 3",
]

const MainScreen = () => {
  const route = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Inicio' />
      <Text>Bienvenido <Text style={styles.username}>Ivan Diaz</Text></Text>
      <View style={styles.containerOptions}>
        {
          options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => route.navigate(option.route)}
            >
              <TargetOption
                title={option.title}
                description={option.description}
                icon={<FontAwesome6 name={option.icon as any} size={20} color="#fff" iconStyle="solid" />}
              />
              
            </TouchableOpacity>
          ))
        }
      </View>
      <View style={styles.containerBanner}>
        <Text style={styles.bannerTitle}>Banner Informativos</Text>
        <BannerInformativo arrayItems={banner} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  username: {
    fontWeight: 'bold',
    color: '#7300df'
  },
  containerOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  containerBanner: {
    marginTop: 30,
    rowGap: 10,
  },
  bannerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default MainScreen;
