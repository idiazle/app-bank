import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './src/navigation/Root.stack'
import { linking } from './src/navigation/linking'

function App() {
  return (
    <NavigationContainer
      linking={linking}
    >
      <RootStack />
    </NavigationContainer>
  )
}

export default App
