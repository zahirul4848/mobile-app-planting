import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function CreateScreen({navigation}) {
  return (
    <View style={{marginTop: 100}}>
      <Button title="Details" onPress={()=> navigation.navigate("CreateDetails")} />   
      <Button title="Click to signin or register" onPress={()=> navigation.navigate("AuthStack")} />   
    </View>
  )
}

const styles = StyleSheet.create({})
