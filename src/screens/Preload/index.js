import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {Container, LoadingIcon} from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'


export default function Preload() {
  const navigation = useNavigation()
 
  useEffect(()=>{
    const checkToken = async()=>{
      const token = await AsyncStorage.getItem('token')
      if(token){

      }else{
        navigation.navigate('SignIn')
      }
    }
    checkToken()
  },[])
  return (
    <Container>
        <Text>LOGO</Text>
        <LoadingIcon size='large' color='#FFF' />
    </Container>
    
  )
}

const styles = StyleSheet.create({})