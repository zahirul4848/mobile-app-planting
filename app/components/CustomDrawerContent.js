import React, {useState} from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../consts/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function CustomDrawerContent({navigation, state}) {
  const [selected, setSelected] = useState('HomeStack');
  const handlePress = (nav)=> {
    setSelected(nav);
    navigation.navigate(nav);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate("AuthStack")} style={styles.signinContainer}>
          <MaterialCommunityIcons name="account" color={COLORS.dark} size={40} />
          <Text style={styles.signinText}>Login/Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> handlePress('HomeStack')} style={[styles.categoryContainer, selected === "HomeStack" ? styles.selectedContainer : {}]}>
          <MaterialIcons name="home" size={30} color={selected === "HomeStack" ? COLORS.green : "gray"} />
          <Text style={[styles.categoryTxt, selected === "HomeStack" ?styles.selectedTxt : {}]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> handlePress("CreateStack")} style={[styles.categoryContainer, selected === "CreateStack" ? styles.selectedContainer : {}]}>
          <MaterialIcons name="add" size={30} color={selected === "CreateStack" ? COLORS.green : "gray"} />
          <Text style={[styles.categoryTxt, selected === "CreateStack" ?styles.selectedTxt : {}]}>Create</Text>
        </TouchableOpacity>
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
  subContainer: {
    padding: 20,
    flex: 1,
  },
  signinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  signinText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selectedContainer: {
    backgroundColor: COLORS.rgba,
    borderRadius: 10,
  },
  categoryTxt: {
    fontSize: 20,
    marginLeft: 10,
    color: 'gray',
  },
  selectedTxt: {
    color: COLORS.green,
  },
})
