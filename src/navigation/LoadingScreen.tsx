import { View, ActivityIndicator, StyleSheet, StatusBar, Text } from 'react-native';
import { useEffect } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.dispatch(
        StackActions.replace('Movements') // pantalla destino
      );
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <ActivityIndicator size="large" />
      <Text>Cargando informacion...</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    
  },
});