import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function CreateDetailsScreen({navigation}) {
  return (
    <View style={{marginTop: 100}}>
      <Text>This is details page</Text>
      <Button title="Click to signin or register" onPress={()=> navigation.goBack()} />   
    </View>
  )
}

const styles = StyleSheet.create({})