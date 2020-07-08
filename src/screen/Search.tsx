/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const styles = StyleSheet.create({

  container: {
    marginTop: 10,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "#FFFAFA",
    fontFamily: "Roboto",
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  resultFood: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
  },

  image: {
    marginTop: 20,
    width: 130,
    height: 130,
    marginLeft: 20,
  },

  leftContainer: {


  },

  rightContainer: {

    marginTop: 20,
  },

  foodContainer: {

    borderRadius: 12,
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

const Search = () => {
  return (

    <ScrollView style={styles.container}>
      <View>
        <View style={styles.returnBtn}>
          <TouchableOpacity >
            <View>
              <IconAnt name="left" color={'black'} size={20} style={styles.btnLeft} />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.searchTitle}>Search Food</Text>
          </View>
          <TouchableOpacity>
            <IconAnt name="user" color="#FE724C" style={styles.btnRight} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <View style={styles.searchIcon}>
            <IconAnt name="search1" color="black" style={styles.btnRight} size={20} />
          </View>
          <TextInput>
            Hello
          </TextInput>
        </View>
        <View >
          <TouchableOpacity>
            <View style={styles.filterIcon}>
              <IconAnt name="filter" color="black" style={styles.btnRight} size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.resultFood}> Found 80 results</Text>
          <View style={styles.foodContainer}>
            <TouchableOpacity>
              <Image source={require('./image/4.jpg')} style={styles.image}/>
              <View>
                <View style={styles.category}>
                  <View style={styles.categoryField}>
                    <Text style={styles.titleFood}>Oni Sandwich </Text>
                  </View>
                  <View style={styles.categoryField}>
                    <Text style={styles.nameFood}>Spicy Chicken Sandwich </Text>
                  </View>
                  <View style={styles.categoryField}>
                    <IconAwesome name="fire-alt" color="#FE724C" size={20} />
                    <Text style={styles.caloriesFood}> 65 Calories</Text>
                  </View>
                  <View style={styles.categoryField}>
                    <MaterialIcons style={styles.moneyIcon} name="attach-money" color="#FFC529" size={22} />
                    <Text style={styles.foodPrice}> 6,72</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.foodContainer}>
            <TouchableOpacity>
              <Image source={require('./image/4.jpg')} style={styles.image}/>
              <View>
                <View style={styles.category}>
                  <View style={styles.categoryField}>
                    <Text style={styles.titleFood}>Oni Sandwich </Text>
                  </View>
                  <View style={styles.categoryField}>
                    <Text style={styles.nameFood}>Spicy Chicken Sandwich </Text>
                  </View>
                  <View style={styles.categoryField}>
                    <IconAwesome name="fire-alt" color="#FE724C" size={20} />
                    <Text style={styles.caloriesFood}> 65 Calories</Text>
                  </View>
                  <View style={styles.categoryField}>
                    <MaterialIcons style={styles.moneyIcon} name="attach-money" color="#FFC529" size={22} />
                    <Text style={styles.foodPrice}> 6,72</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.foodContainer}>
            <TouchableOpacity>
              <Image source={require('./image/4.jpg')} style={styles.image}/>
              <View>
                <View style={styles.category}>
                  <View style={styles.categoryField}>
                    <Text style={styles.titleFood}>Oni Sandwich </Text>
                  </View>
                  <View style={styles.categoryField}>

                    <Text style={styles.nameFood}>Spicy Chicken Sandwich </Text>
                  </View>
                  <View style={styles.categoryField}>
                    <IconAwesome name="fire-alt" color="#FE724C" size={20} />
                    <Text style={styles.caloriesFood}> 65 Calories</Text>
                  </View>
                  <View style={styles.categoryField}>
                    <MaterialIcons style={styles.moneyIcon} name="attach-money" color="#FFC529" size={22} />
                    <Text style={styles.foodPrice}> 6,72</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.foodContainer}>
            <TouchableOpacity>
              <Image source={require('./image/4.jpg')} style={styles.image}/>
              <View>
                <View style={styles.category}>
                  <View style={styles.categoryField}>
                    <Text style={styles.titleFood}>Oni Sandwich </Text>
                  </View>
                  <View style={styles.categoryField}>

                    <Text style={styles.nameFood}>Spicy Chicken Sandwich </Text>
                  </View>
                  <View style={styles.categoryField}>
                    <IconAwesome name="fire-alt" color="#FE724C" size={20} />
                    <Text style={styles.caloriesFood}> 65 Calories</Text>
                  </View>
                  <View style={styles.categoryField}>
                    <MaterialIcons style={styles.moneyIcon} name="attach-money" color="#FFC529" size={22} />
                    <Text style={styles.foodPrice}> 6,72</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Search;
