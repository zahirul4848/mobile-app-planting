import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Keyboard, Platform, SafeAreaView, StatusBar, StyleSheet, TextInput, TouchableWithoutFeedback, View, Text } from 'react-native'
import {COLORS} from '../consts/colors';
import {Ionicons} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CategoryList from '../components/CategoryList';
import Card from '../components/Card';
import CustomHeader from '../components/CustomHeader';
import { listProduct, listProductCategory } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen({navigation}) {
  const productList = useSelector(state => state.productList);
  const {loading, error, products} = productList;
  const productCategoryList = useSelector(state => state.productCategoryList);
  const {categories} = productCategoryList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProductCategory({}));
    dispatch(listProduct({}));
  }, [dispatch])
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <CustomHeader isHome={true} navigation={navigation} />
      <View style={styles.sub}>
        <View style={styles.searchBar}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={24} />
            <TextInput style={styles.searchInput} placeholder="Search"/>
          </View>
          <View style={styles.sortBtn}>
            <MaterialCommunityIcons name="sort-variant" size={30} color="white" />
          </View>
        </View>
        {categories && (
          <CategoryList categories={categories}/>
        )}
        {loading ? <LoadingBox/> : error ? <MessageBox>{error}</MessageBox> : (
          <FlatList 
          contentContainerStyle={{marginTop: 10, paddingBottom: 300}} 
          showsVerticalScrollIndicator={false} 
          numColumns={2} 
          columnWrapperStyle={{justifyContent: 'space-between'}} 
          keyExtractor={(item)=> item._id} 
          data={products} 
          renderItem={({item})=> (
            <Card product={item} navigation={navigation} />
          )} />
        )}
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.white,
  },
  sub: {
    paddingHorizontal: 20,
  },
  searchBar: {
    marginTop: 20,
    flexDirection: 'row',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInput: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginLeft: 10,
  },
  sortBtn: {
    backgroundColor: COLORS.green,
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    backgroundColor: 'blue',
    flex: 1,
  }
})
