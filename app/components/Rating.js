import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { COLORS } from '../consts/colors';

export default function Rating({rating, numReviews}) {
  return (
    <View style={styles.container}>
      <Ionicons name={rating >= 1 ? "star" : rating >= 0.5 ? "star-half-outline" : "star-outline"} size={16} color={COLORS.dark} />
      <Ionicons name={rating >= 2 ? "star" : rating >= 1.5 ? "star-half-outline" : "star-outline"} size={16} color={COLORS.dark} />
      <Ionicons name={rating >= 3 ? "star" : rating >= 2.5 ? "star-half-outline" : "star-outline"} size={16} color={COLORS.dark} />
      <Ionicons name={rating >= 4 ? "star" : rating >= 3.5 ? "star-half-outline" : "star-outline"} size={16} color={COLORS.dark} />
      <Ionicons name={rating >= 5 ? "star" : rating >= 4.5 ? "star-half-outline" : "star-outline"} size={16} color={COLORS.dark} />
      <Text>({numReviews})</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
})
