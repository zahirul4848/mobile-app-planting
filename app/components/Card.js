import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { COLORS } from '../consts/colors';
import Rating from './Rating';
import { baseUrl } from '../utils';


export default function Card({product, navigation}) {
  return (
    <TouchableOpacity onPress={()=> navigation.navigate("ProductDetails", product)} activeOpacity={0.5} style={styles.container}>
      <View style={styles.iconContainer}>
        {/* <View style={{width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: plant.like ? 'rgba(245, 42, 42, 0.2)' : 'rgba(0, 0, 0, 0.2)'}}>
          <Ionicons name="heart" size={20} color={plant.like ? 'red' : 'black'} />
        </View> */}
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.img} resizeMode="contain" source={{uri: baseUrl + product.images[0]}} />
      </View>
      <Text numberOfLines={1} lineBreakMode="tail" style={styles.text}>{product.name}</Text>
      <View style={styles.ratingContainer}>
        <Rating rating={product.rating} numReviews={product.numReviews} />
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.priceContainer}>
          <MaterialCommunityIcons name="currency-bdt" size={20} color="black" />
          <Text style={styles.price}>{product.price}</Text>
        </View>
        <View style={styles.addIconContainer}>
          <Entypo name="plus" size={20} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    //height: 260,
    backgroundColor: COLORS.light,
    width: Dimensions.get('screen').width / 2 - 30,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,

  },
  iconContainer: {
    alignItems: 'flex-end',
  },
  imageContainer: {
    height: 100,
    width: '100%',
  },
  img: {
    height: 100,
    width: '100%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 10,
  },
  ratingContainer: {
    marginVertical: 5,
  },
  lowerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 17,
  },
  addIconContainer: {
    backgroundColor: COLORS.green,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

})
