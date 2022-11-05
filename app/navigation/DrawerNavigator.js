import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { CreateStackScreen, ProductStackScreen } from './StackNavigator';
import CustomDrawerContent from '../components/CustomDrawerContent';

const AppDrawer = createDrawerNavigator();
export const AppDrawerScreen = ()=> (
  <AppDrawer.Navigator screenOptions={{headerShown: false}} drawerContent={(props)=> <CustomDrawerContent {...props}/>}>
    <AppDrawer.Screen name="HomeStack" component={ProductStackScreen} />
    <AppDrawer.Screen name="CreateStack" component={CreateStackScreen} />
  </AppDrawer.Navigator>
)