import { useState } from 'react';
import { Text, StatusBar, TouchableOpacity, Modal, View, Button, StyleSheet } from 'react-native'
import { getConnectionInfo, Header } from 'react-native-library-app-bank'
import { SafeAreaView } from 'react-native-safe-area-context'

const ServicesDetailScreen = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showNoInternetModal, setShowNoInternetModal] = useState(false);

  const isVisible = showSuccessModal || showNoInternetModal;
  const baseId = showSuccessModal ? 'success-modal' : 'no-internet-modal';
  const title = showSuccessModal ? 'Pago Exitoso' : 'Sin Conexión a Internet';
  const description = showSuccessModal
    ? 'Tu pago ha sido procesado con éxito.'
    : 'No hay conexión a Internet. Por favor, verifica tu conexión e intenta de nuevo.';
  const iconChild = showSuccessModal ? (
    <Text style={{ fontSize: 50, color: 'green' }}>✓</Text>
  ) : (
    <Text style={{ fontSize: 50, color: 'red' }}>✗</Text>
  );

  const onClose = () => {
    setShowSuccessModal(false);
    setShowNoInternetModal(false);
  };

  const handlePay = async () => {
    try {
      const connection = await getConnectionInfo();

      const noInternet =
        !connection.isConnected ||
        connection.type === 'none' ||
        connection.type === 'unknown';

      if (noInternet) {
        setShowNoInternetModal(true);
        return;
      }

      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error checking network status:', error);
      setShowNoInternetModal(true);
    }
  };


  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Header title="Pagar Servicio" />
      <Text>ServicesDetailScreen</Text>
      <TouchableOpacity
      style={{ padding: 10, backgroundColor: '#7300df', borderRadius: 5, margin: 20 }}
      onPress={handlePay}
      >
        <Text>Pagar Servicio</Text>
      </TouchableOpacity>

      <Text>PAGO:
        {showSuccessModal && 'Pago realizado con éxito!'}
      </Text>
      <Text>
        ESTADO:
        {showNoInternetModal && 'No hay conexión a Internet. Por favor, verifica tu conexión e intenta de nuevo.'}
      </Text>
      <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      testID={baseId}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {iconChild && iconChild}
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.description} >
            {description}
          </Text>

          <Button
            title='Aceptar'
            onPress={onClose}
          />
        </View>
      </View>
    </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ServicesDetailScreen