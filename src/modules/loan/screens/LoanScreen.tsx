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
  const cuotas = [
    { label: '12 meses', value: '12' },
    { label: '24 meses', value: '24' },
    { label: '36 meses', value: '36' },
  ]

  const [selectedOption, setSelectedOption] = useState<string>()
  const [selectedCuotas, setSelectedCuotas] = useState<string>()
  const [data, setData] = useState({
    dni: '',
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    loanAmount: '',
  })
  const [submitData, setSubmitData] = useState({})

  const handleSubmit = () => {
    setSubmitData({
      ...data,
      typeDocument: selectedOption,
      cuotas: selectedCuotas,
    })
    console.log(submitData);
    setData({
      dni: '',
      email: '',
      phone: '',
      firstName: '',
      lastName: '',
      loanAmount: '',
    })
    setSelectedOption(undefined)
    setSelectedCuotas(undefined)
    Alert.alert("Información guardada correctamente")
  }

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar barStyle="dark-content" />
      <Header title="Préstamos" />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Formulario</Text>
        <Text style={styles.subtitle}>Completa tus datos y un colaborador se contactara contigo</Text>
        <View style={styles.dniContainer}>
          <CustomSelect
            options={options}
            value={selectedOption}
            onChange={setSelectedOption}
            placeholder="Seleccionar..."
          />
          <TextInput
            style={[styles.input, { width: '70%' }]}
            placeholder='Ingrese su DNI'
            value={data.dni}
            onChangeText={(text) => setData({ ...data, dni: text })}
            maxLength={8} />
        </View>
        <TextInput
          style={styles.input}
          placeholder='Correo electrónico'
          value={data.email}
          onChangeText={(text) => setData({ ...data, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder='Numero de celular'
          value={data.phone}
          onChangeText={(text) => setData({ ...data, phone: text })}
        />
        <TextInput
          style={styles.input}
          placeholder='Nombres'
          value={data.firstName}
          onChangeText={(text) => setData({ ...data, firstName: text })}
        />
        <TextInput
          style={styles.input}
          placeholder='Apellidos'
          value={data.lastName}
          onChangeText={(text) => setData({ ...data, lastName: text })}
        />
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder='Monto de préstamo'
          value={data.loanAmount}
          onChangeText={(text) => setData({ ...data, loanAmount: text })}
        />
        <CustomSelect
          options={cuotas}
          value={selectedCuotas}
          onChange={setSelectedCuotas}
          placeholder="Plazo del préstamo"
        />
      </View>
      {/* <Text>
        {
          JSON.stringify(data, null, 2)
        }
      </Text> */}
      <TouchableOpacity
        onPress={() => {
          handleSubmit()
        }}
        style={styles.button}>
        <Text style={styles.textButton}>
          Enviar datos
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 15,
    color: '#555',
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