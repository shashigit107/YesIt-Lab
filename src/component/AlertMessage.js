import { View, Text,Alert } from 'react-native'
import React from 'react'

export default function AlertMessage(message){
    
    console.log(message)
    Alert.alert("Weather App",message,[
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
 
}