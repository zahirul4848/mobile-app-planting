import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { AppDrawerScreen } from './DrawerNavigator';
import { AuthStackScreen } from './StackNavigator';

const RootStack = createStackNavigator();
const RootStackScreen = ()=> {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="AppDrawer" component={AppDrawerScreen} />
      <RootStack.Screen name="AuthStack" component={AuthStackScreen} options={{presentation: "modal"}} />
    </RootStack.Navigator>
  )
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>
  );
}