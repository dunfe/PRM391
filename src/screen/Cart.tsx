import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';
import TopTab from '../components/TopTabbar';

const CartScreen = () => {
  const clickHandler = () => {
    // function to handle click on floating Action Button
    Alert.alert('Floating Button Clicked');
  };

  return (
    <ScrollView
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: 'white'}}>
        <View style={styles.flexbox}>
          <TouchableOpacity style={styles.box1} onPress={clickHandler}>
            <Icon
              name="chevron-left"
              type="Feather"
              style={{fontSize: 25, color: '#272D2F'}}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>Cart Food</Text>
          </View>
          <TouchableOpacity onPress={clickHandler} style={styles.box2}>
            <View>
              <Icon
                name="user"
                type="Feather"
                style={{fontSize: 20, color: '#FFFFFF'}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TopTab />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexbox: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 10,
    flex: 1,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box1: {
    borderColor: '#272D2F',
    borderWidth: 0.25,
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFC529',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    // alignItems: 'center',
    paddingTop: 5,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default CartScreen;
