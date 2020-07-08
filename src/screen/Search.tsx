/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {FlatList, StyleSheet, Text, View, Dimensions} from 'react-native';
import {
  Image,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from "react-native-gesture-handler";
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Container} from 'native-base';
import {useEffect, useState} from "react";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "#FFFAFA",
    fontFamily: "Roboto",
    flex: 1,
    justifyContent: 'center',
  },
  btnLeft: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  btnRight: {
    marginTop: 8,
    marginRight: 2,
  },
  returnBtn: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  searchTitle: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  searchContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBar: {
    backgroundColor: '#D7D7D7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 200,
    borderRadius: 10,
  },
  searchIcon: {
    marginTop: 7,
  },
  filterIcon: {
    backgroundColor: '#FFC529',
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 10,
  },
  bottomContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: 100,
    margin: 5,
  },
  resultFood: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
  },
  image: {
    flex: 1,
    width: '100%',
    height: 130,
  },
  foodContainer: {
    borderRadius: 12,
    justifyContent: 'center',
    padding: 10,
  },
  category: {
    marginTop: 15,
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryField: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  titleFood: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  nameFood: {
    color: 'grey',
  },
  caloriesFood: {
    color: 'red',
    paddingLeft: 5,
  },
  foodPrice: {
    fontWeight: 'bold',
    fontSize: 21,
    color: 'black',
    marginRight: 15,
  },
  moneyIcon: {
    marginTop: 5,
  },
});

const array = [
  {
    id: 1,
    name: 'Oni Sandwich',
    body: 'Spicy Chicken Sandwich',
    description: '65 Calories',
    price: '6.72',
  },
  {
    id: 2,
    name: 'Oni Sandwich 2',
    body: 'Spicy Chicken Sandwich',
    description: '65 Calories',
    price: '6.7',
  },
  {
    id: 3,
    name: 'Oni Sandwich 3',
    body: 'Spicy Chicken Sandwich',
    description: '65 Calories',
    price: '72',
  },
  {
    id: 4,
    name: 'Oni Sandwich 4',
    body: 'Spicy Chicken ',
    description: '65 Calories',
    price: '6.2',
  },
  {
    id: 5,
    name: 'Oni Sandwich 5',
    body: 'Spicy Chicken ',
    description: '65 Calories',
    price: '6.2',
  },
  {
    id: 6,
    name: 'Oni Sandwich 6',
    body: 'Spicy Chicken ',
    description: '65 Calories',
    price: '6.2',
  },
  {
    id: 7,
    name: 'Oni Sandwich 7',
    body: 'Spicy Chicken ',
    description: '65 Calories',
    price: '6.2',
  },
];

const Search = () => {
  const [orientation, setOrientation] = useState('');
  const [columnCount, setColumnCount] = useState(2);

  useEffect(() => {
    setColumnCount(orientation === 'landscape' ? 4 : 2);
  }, [orientation]);

  Dimensions.addEventListener('change', () => {
    setOrientation(isPortrait() ? 'portrait': 'landscape');
  });
  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };
  return (
    <Container style={styles.container}>
      <View style={styles.returnBtn}>
        <TouchableOpacity>
          <View>
            <IconAnt name="left"
              color={'black'}
              size={20} style={styles.btnLeft}/>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.searchTitle}>Search Food</Text>
        </View>
        <TouchableOpacity>
          <IconAnt name="user"
            color="#FE724C"
            style={styles.btnRight} size={20}/>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <View style={styles.searchIcon}>
            <IconAnt name="search1"
              color="black"
              style={styles.btnRight} size={20}/>
          </View>
          <TextInput>
                        Hello
          </TextInput>
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.filterIcon}>
              <IconAnt name="filter"
                color="black"
                style={styles.btnRight} size={20}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.resultFood}> Found 80 results</Text>
          <FlatList data={array}
            key={columnCount}
            numColumns={columnCount}
            keyExtractor = { (item, index) => index.toString() }
            renderItem={({item, index}) => (
              <TouchableOpacity>
                <View key={`${index}`} style={styles.foodContainer}>
                  <Image source={require('../images/4.jpg')}
                    resizeMode={'contain'}
                    style={styles.image}/>
                  <View>
                    <View style={styles.category}>
                      <View style={styles.categoryField}>
                        <Text style={styles.titleFood}>{item.name}</Text>
                      </View>
                      <View style={styles.categoryField}>
                        <Text style={styles.nameFood}>{item.body}</Text>
                      </View>
                      <View style={styles.categoryField}>
                        <IconAwesome name="fire-alt" color="#FE724C" size={20}/>
                        <Text style={styles.caloriesFood}>
                          {item.description}
                        </Text>
                      </View>
                      <View style={styles.categoryField}>
                        <MaterialIcons style={styles.moneyIcon}
                          name="attach-money" color="#FFC529" size={22}/>
                        <Text style={styles.foodPrice}>{item.price}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}/>
        </View>
      </View>
    </Container>
  );
};

export default Search;
