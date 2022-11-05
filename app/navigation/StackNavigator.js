import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import CreateScreen from '../screens/CreateScreen';
import CreateDetailsScreen from '../screens/CreateDetailsScreen';


const AuthStack = createStackNavigator();
export const AuthStackScreen = ()=> (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="Signin" component={SigninScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
)

const CreateStack = createStackNavigator();
export const CreateStackScreen = ()=> (
  <CreateStack.Navigator screenOptions={{headerShown: false}}>
    <CreateStack.Screen name="Create" component={CreateScreen} />
    <CreateStack.Screen name="CreateDetails" component={CreateDetailsScreen} />
  </CreateStack.Navigator>
)

const ProductStack = createStackNavigator();
export const ProductStackScreen = ()=> (
  <ProductStack.Navigator screenOptions={{headerShown: false}}>
    <ProductStack.Screen name="Product" component={HomeScreen} />
    <ProductStack.Screen name="ProductDetails" component={DetailsScreen} />
  </ProductStack.Navigator>
)

