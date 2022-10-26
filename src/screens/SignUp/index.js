import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {Container,
ImputArea,
CustomButton,
CusromButtonText,
SignMessageButton,
SignMessageButtonText,
SignMessageButtonTextBold
} from './styles'
import SignImput from '../../components/SignImput'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignIn() {

  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignClick=()=>{

  }

  const handleMessageButtonClick =()=>{
    navigation.reset({
      routes: [{name: 'SignIn'}]
    })
  }


  return (
    <Container>
        <Text>LOGO</Text>
        <ImputArea>
        <SignImput
            placeholder="Digite seu nome"
            value={name}
            onChangeText={t=>setName(t)}
          />
          <SignImput
            placeholder="Digite seu email"
            value={email}
            onChangeText={t=>setEmail(t)}
          />
          <SignImput
            placeholder="Digite sua senha"
            value={password}
            onChangeText={t=>setPassword(t)}
            password={true}
          />

          <CustomButton onPress={handleSignClick}>
            <CusromButtonText>Cadastrar</CusromButtonText>
          </CustomButton>

        </ImputArea>

        <SignMessageButton onPress={handleMessageButtonClick}>
          <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
          <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
        </SignMessageButton>
    </Container>
    
  )
}

const styles = StyleSheet.create({})