import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { COLORS } from '../consts/colors'

export default function LoadingBox() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={COLORS.green} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  }
})
