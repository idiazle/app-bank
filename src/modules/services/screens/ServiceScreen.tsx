import { View, Text, StatusBar, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-library-app-bank'
import { SafeAreaView } from 'react-native-safe-area-context'

const ServiceScreen = () => {
  const data =[
    {id:1, name:"Agua"},
    {id:2, name:"Luz"},
    {id:3, name:"Internet"},
    {id:4, name:"Teléfono"},
    {id:5, name:"Cable TV"},
    {id:6, name:"Gas"},
    {id:7, name:"Recolección de basura"},
  ]

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Header title="Servicios" />
      <View>
        <TextInput style={styles.input} placeholder='Buscar...' />
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.serviceContainer}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.serviceItem}>
              <Text style={styles.serviceText}>{item.name}</Text>
              
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#7300df',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    margin: 20,
  },
  serviceContainer: {
    rowGap: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  serviceItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceText: {
    fontSize: 16,
  },
})

export default ServiceScreen