import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native'
import { Header } from 'react-native-library-app-bank'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import CustomSelect from '../../../components/SelectCustom'

const LoanScreen = () => {
  const options = [
    { label: 'DNI', value: 'dni' },
    { label: 'CE', value: 'ce' },
    { label: 'RUT', value: 'rut' },
  ]

  const [selectedOption, setSelectedOption] = useState<string>()

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar barStyle="dark-content" />
      <Header title="Préstamos" />
      <View style={styles.formContainer}>
        <Text>Formulario</Text>
        <Text>Completa tus datos y un colaborador se contactara contigo</Text>
        <View style={styles.dniContainer}>
          <CustomSelect
            options={options}
            value={selectedOption}
            onChange={setSelectedOption}
            placeholder="Seleccionar..."
          />
         
          <TextInput style={[styles.input, { width: '70%' }]} placeholder='Ingrese su DNI' maxLength={8} />
        </View>
        <TextInput style={styles.input} placeholder='Correo electrónico' />
        <TextInput style={styles.input} placeholder='Numero de celular' />
        <TextInput style={styles.input} placeholder='Nmbres' />
        <TextInput style={styles.input} placeholder='Apellidos' />
        <TextInput style={styles.input} placeholder='Monto de préstamo' />
        <TextInput style={styles.input} placeholder='Cuotas' />
      </View>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("Datos enviados correctamente")
        }}
        style={styles.button}>
        <Text style={styles.textButton}>Enviar datos</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  formContainer: {
    rowGap: 5,
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  dniContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  input: {
    borderColor: '#7300df',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#7300df',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    margin: 20,
  },
  textButton: {
    color: '#fff',
  }
})

export default LoanScreen