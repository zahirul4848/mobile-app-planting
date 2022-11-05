import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, StatusBar, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { COLORS } from '../consts/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {signin} from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const {loading, error, userInfo} = userSignin;

  const dispatch = useDispatch();
  const submitHandler = ()=> {
    dispatch(signin(email, password));
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity style={styles.closeIcon} onPress={()=> navigation.pop()}>
            <MaterialCommunityIcons name="close" color={COLORS.white} size={24} />
          </TouchableOpacity>
          <MaterialCommunityIcons name="account" size={100} color={COLORS.white} />
          <Text style={styles.topText}>Sign In</Text>
        </View>
        {loading && <LoadingBox />}
        {error && <MessageBox>{error}</MessageBox>}
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.formContainer}>
          <View style={styles.subFormContainer}>
            <TextInput value={email} onChangeText={(txt)=> setEmail(txt)} keyboardType="email-address" style={styles.input} placeholder="Email" />
            <TextInput value={password} onChangeText={(txt)=> setPassword(txt)} secureTextEntry={true} style={styles.input} placeholder="Password" />
            <TouchableOpacity onPress={submitHandler} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
            <View style={styles.linkContainer}>
              <Text style={styles.linkText}>Don't have an account? </Text>
              <TouchableOpacity onPress={()=> navigation.navigate("Register")}>
                <Text style={styles.linkBtn}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    flex: 0.35,
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
    flex: 0.60,
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
