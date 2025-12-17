import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6'
import HomeStackNavigation from './HomeStackNavigation.stack';
import ConfigurationScreen from '../modules/Configuration/screens/ConfigurationScreen';
import ChatScreen from '../modules/Chat/screens/ChatScreen';

export type RootStackParamList = {
  Home: undefined;
  Chat: undefined;
  Configuration: undefined;
}

const Tab = createBottomTabNavigator<RootStackParamList>();

const HomeIcon = ({ color, size }: { color: string; size: number }) => (
  <FontAwesome6 name="house" size={size} color={color} iconStyle='solid' />
);

const ChatIcon = ({ color, size }: { color: string; size: number }) => (
  <FontAwesome6 name="comments" size={size} color={color} iconStyle='solid' />
);

const ConfigurationIcon = ({ color, size }: { color: string; size: number }) => (
  <FontAwesome6 name="gear" size={size} color={color} iconStyle='solid'/>
);

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ChatIcon,
        }}
      />
      <Tab.Screen
        name="Configuration"
        component={ConfigurationScreen}
        options={{
          tabBarLabel: 'Configuración',
          tabBarIcon: ConfigurationIcon,
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation