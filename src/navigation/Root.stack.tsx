import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../modules/Login/screens/Login.screen';
import MainScreen from '../modules/Main/screens/Main.screen';
import TarjetScreen from '../modules/Tarjet/screens/Tarjet.screen';
import MovementsScreen from '../modules/Movements/screens/Movements.screen';
import BottomTabNavigation from './BottomTabNavigation.stack';
import LoadingScreen from './LoadingScreen';

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  Tarjet: undefined;
  Movements: undefined;
  CoreBottomTab: undefined;
  Loading: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
       <Stack.Screen name='Loading' component={LoadingScreen} />
      <Stack.Screen name='CoreBottomTab' component={BottomTabNavigation} />
      <Stack.Screen 
        name="Main"
        component={MainScreen}
        options={{ title: 'Main' }}
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
    </Stack.Navigator>
  );
};

export default RootStack;
