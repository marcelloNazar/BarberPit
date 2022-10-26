import React from 'react'
import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons';

const ImputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #DDD;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`
const Imput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #555;
    margin-left: 15px;

`


export default( {placeholder, value, onChangeText, password })=>{
    return(
        <ImputArea>
            <Imput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </ImputArea>
    )
}