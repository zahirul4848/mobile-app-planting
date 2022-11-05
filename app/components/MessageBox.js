import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function MessageBox(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.errorTxt}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  errorTxt: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
  }
})
