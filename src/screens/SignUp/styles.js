import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
background-color: #FF7F00;
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const ImputArea = styled.View`
    padding: 40px;
    width: 100%;
`
export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #111;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`
export const CusromButtonText = styled.Text`
    font-size: 20px;
    color: #FFF;
`
export const SignMessageButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
margin-top: 50px;
margin-bottom: 20px;
`
export const SignMessageButtonText = styled.Text`
font-size: 16px;
color: #111;
`
export const SignMessageButtonTextBold = styled.Text`
font-size: 16px;
color: #111;
font-weight: bold;
margin-left: 5px;
`