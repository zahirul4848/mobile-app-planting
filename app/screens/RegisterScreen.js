import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, StatusBar, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import { COLORS } from '../consts/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function RegisterScreen({navigation}) {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const submitHandler = ()=> {
    if(password !== confirmedPassword) {
      alert('Password and Confirmed Password mismatched');
    } else {
      console.log(fullname, email, password, confirmedPassword);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={()=> navigation.pop()} style={styles.closeIcon}>
            <MaterialCommunityIcons name="close" color={COLORS.white} size={24} />
          </TouchableOpacity>
          <MaterialCommunityIcons name="account" size={100} color={COLORS.white} />
          <Text style={styles.topText}>Sign Up</Text>
        </View>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.formContainer}>
          <ScrollView style={styles.subFormContainer}>
            <TextInput value={fullname} onChangeText={(txt)=> setFullname(txt)} style={styles.input} placeholder="Full Name" />
            <TextInput value={email} onChangeText={(txt)=> setEmail(txt)} keyboardType="email-address" autoCapitalize={false} style={styles.input} placeholder="Email" />
            <TextInput value={password} onChangeText={(txt)=> setPassword(txt)} secureTextEntry={true} style={styles.input} placeholder="Password" />
            <TextInput value={confirmedPassword} onChangeText={(txt)=> setConfirmedPassword(txt)} secureTextEntry={true} style={styles.input} placeholder="Confirmed Password" />
            <TouchableOpacity onPress={submitHandler} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
            <View style={styles.linkContainer}>
              <Text style={styles.linkText}>Already have an account? </Text>
              <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Text style={styles.linkBtn}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  topContainer: {
    backgroundColor: COLORS.green,
    flex: 0.30,
    borderBottomLeftRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight : 10,
    right: 10,
    backgroundColor: COLORS.rgba,
    padding: 10,
    borderRadius: 50,
  },
  topText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  formContainer: {
    flex: 0.70,
  },
  subFormContainer: {
    flex: 1,
    padding: 30,
  },
  input: {
    height: 60,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    height: 60,
    backgroundColor: COLORS.green,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.white,
    marginHorizontal: 5,
  },
  linkContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 16,
  },
  linkBtn: {
    fontSize: 16,
    color: COLORS.green,
  }
})
