import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { COLORS } from '../consts/colors';
import { baseUrl } from '../utils';

export default function CustomHeader({navigation, isHome}) {
  return (
    <View style={styles.header}>
      {isHome ? (
        <>
          <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.toggleDrawer()}>
            <Ionicons name="menu" size={28} color={COLORS.dark} />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image style={styles.logoImg} source={require('../assets/planting_logo_sm.png')}/>
            <Text style={styles.plantTxt}>Plant Shop</Text>
          </View>
        </>
      ) : (
        <>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={28} color={COLORS.dark} />
        </TouchableOpacity>
        <Text style={styles.detailsTxt}>Item</Text>
        </>
      )}
      <Ionicons name="cart-outline" size={28} color={COLORS.dark} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    
    shadowColor: COLORS.dark,
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    elevation: 3,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  plantTxt: {
    fontSize: 22, 
    fontWeight: 'bold',
    color: COLORS.green,
  },
  logoImg: {
    height: 40,
    width: 40,
    resizeMode: 'contain'
  },
  detailsTxt: {
    fontSize: 20,
  },
})
