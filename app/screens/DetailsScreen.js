import React from 'react'
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../consts/colors';
import { Feather } from '@expo/vector-icons';
import CustomHeader from '../components/CustomHeader';
import Rating from '../components/Rating';
import Swiper from 'react-native-swiper';
import { baseUrl } from '../utils';


export default function DetailsScreen({navigation, route}) {
  const product = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader navigation={navigation} />
      <View style={styles.imgContainer}>
        <Swiper>
          {product.images.map(img=> (
            <Image key={img} source={{uri: baseUrl + img}} style={styles.img} />
          ))}
        </Swiper>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.bestChoice}>___ Best Choice</Text>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.titleText}>{product.name}</Text>
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceTxt}>Tk. {product.price}</Text>
          </View>
        </View>
        <Text style={styles.aboutTxt}>About</Text>
        <Text style={styles.description} numberOfLines={6}>{product.description}</Text>
        <View style={styles.counterContainer}>
          <Feather name="minus-square" size={40} color="black" />
          <Text style={{fontSize: 25}}>1</Text>
          <Feather name="plus-square" size={40} color="black" />
          <View style={styles.buyContainer}>
            <Text style={styles.priceTxt}>Buy</Text>
          </View>
        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.white,
  },
  imgContainer: {
    flex: 0.45,
    marginTop: 10,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    marginTop: 20,
    marginHorizontal: 10,
    flex: 0.55,
    backgroundColor: COLORS.light,
    borderRadius: 20,
    marginBottom: 10,
    paddingTop: 20,
    paddingLeft: 20,
  },
  bestChoice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceContainer: {
    backgroundColor: COLORS.green,
    padding: 15,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  priceTxt: {
    color: COLORS.white,
  },
  aboutTxt: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    marginTop: 10,
    marginRight: 20,
    marginBottom: 10,
    fontSize: 15,
    textAlign: 'justify',
    color: 'gray',
  },
  buyContainer: {
    backgroundColor: COLORS.green,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 20,
    
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
  }
})
