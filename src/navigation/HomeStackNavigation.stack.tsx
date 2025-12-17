import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from '../modules/Main/screens/Main.screen';
import TarjetScreen from '../modules/Tarjet/screens/Tarjet.screen';
import MovementsScreen from '../modules/Movements/screens/Movements.screen';
import LoanScreen from '../modules/loan/screens/LoanScreen';
import ServiceScreen from '../modules/services/screens/ServiceScreen';
import LoadingScreen from './LoadingScreen';

export type RootStackParamList = {
  Main: undefined;
  Tarjet: undefined;
  Movements: undefined;
  Loans: undefined;
  Services: undefined;
  Loading: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="Main"
        component={MainScreen}
        options={{ title: 'Main' }}
      />
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{ title: 'Loading' }}
      />
      <Stack.Screen
        name="Tarjet"
        component={TarjetScreen}
        options={{ title: 'Tarjet' }}
      />
      <Stack.Screen
        name="Movements"
        component={MovementsScreen}
        options={{ title: 'Movements' }}
      />
      <Stack.Screen
        name="Loans"
        component={LoanScreen}
        options={{ title: 'Loan' }}
      />
      <Stack.Screen
        name="Services"
        component={ServiceScreen}
        options={{ title: 'Services' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;