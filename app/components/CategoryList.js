import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../consts/colors'

export default function CategoryList({categories}) {
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={()=> setCategoryIndex(0)} style={categoryIndex === 0 && styles.categorySelected}>
        <Text style={[styles.categoryText, categoryIndex === 0 && styles.categoryTextSelected]}>ALL PLANTS</Text>
      </TouchableOpacity>
      {categories.map((category, index)=> (
        <TouchableOpacity activeOpacity={0.8} onPress={()=> setCategoryIndex(index + 1)} key={index} style={index + 1 === categoryIndex && styles.categorySelected}>
          <Text style={[styles.categoryText, index + 1 === categoryIndex && styles.categoryTextSelected]}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    marginRight: 10,
  },
  categorySelected: {
    paddingBottom: 5,
    borderColor: COLORS.green,
    borderBottomWidth: 2,
  },
  categoryTextSelected: {
    color: COLORS.green,
  }
  
})