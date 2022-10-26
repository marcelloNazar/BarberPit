import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/stacks/MainStack'
import UserContextProvider from './src/contexts/UserContext'

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    
    </UserContextProvider>
    
  )
}

const styles = StyleSheet.create({})