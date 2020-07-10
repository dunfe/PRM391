/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,

} from 'react-native';

import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';


const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#f7f7f7",
    position: 'relative',
  },
  image: {
    marginTop: 20,
    flex: 1,
    width: '100%',
    height: 200,
  },
  btnLeft: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  btnRight: {
    marginTop: 8,
  },
  btnPlus: {
    backgroundColor: '#FFC529',
    justifyContent: 'center',
    padding: 10,
    paddingRight: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    fontWeight: "bold",
  },
  btnMinus: {
    backgroundColor: '#FFC529',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    fontWeight: "bold",
  },
  btnText: {
    backgroundColor: '#FFC529',
    width: 30,
    alignContent: 'center',
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    
  },

  bottomComponent: {
    borderRadius: 20,
    marginTop: 15,
    backgroundColor: 'white',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  returnBtn: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  title: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  foodName: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'black',
    marginLeft: 5,
  },
  foodPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
    color: 'black',
  },
  detail: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'black',
    marginLeft: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: -20,
  },
  addBtnContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  bottomFlex: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  category: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 5,
  },
  categoryField: {
    padding: 8,
    paddingRight: 20,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: "#FFFAFA",
  },
  detailInfor: {
    marginTop: 25,
  },
  categoryText: {
    marginLeft: 5,
  },
  detailInformation: {
    marginTop: 10,
    color: '#D7D7D7',
    fontWeight: "bold",
  },
  btnAdd: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#FFC529',
  },
  detailContainer: {
    marginTop: 20,
  },
});

const detailProduct =
{
  id: 1,
  name: 'Oni Sandwich',
  price: 6.99,
  rate: 2.6,
  calories: 65,
  time: '20 - 30',
  detail: 'Chicken dimsum recipe is the delicious evening snack during winter',
  imgUri: 'https://www.arcgis.com/sharing/rest/content/items/8f762395cd204552bb958ecb1b54339d/resources/1588745514029.jpeg?w=2932',
};

const Detail = () => {
  const [count, setCount] = useState(0);
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.returnBtn}>
          <TouchableOpacity >
            <View>
              <IconAnt
                name="left"
                color={'black'}
                size={20}
                style={styles.btnLeft} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <IconAnt name="heart" color="#FE724C" style={styles.btnRight} size={20} />
          </TouchableOpacity>
        </View>
        <View>
          <Image source={{uri: detailProduct.imgUri}} resizeMode={'contain'} style={styles.image}>
          </Image>
        </View>
      </View>
      <View style={styles.bottomFlex}>
        <View style={styles.bottomComponent}>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnMinus} onPress={() => setCount(count - 1)}>
              <Text >
                <IconAnt name="minus" color="black" size={15} />
              </Text>
            </TouchableOpacity>
            <Text style={styles.btnText}>
              {count}
            </Text>
            <TouchableOpacity style={styles.btnPlus} onPress={() => setCount(count + 1)}>
              <Text>
                <IconAnt name="plus" color="black" size={15} />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.title}>
              <Text style={styles.foodName}> {detailProduct.name} </Text>
              <Text style={styles.foodPrice}>{detailProduct.price}</Text>
            </View>
            <View style={styles.category}>
              <View style={styles.categoryField}>
                <IconAnt name="star" color="#FFC529" size={20} />
                <Text style={styles.categoryText}>{detailProduct.rate}</Text>
              </View>
              <View style={styles.categoryField}>
                <IconAwesome name="fire-alt" color="#FE724C" size={20} />
                <Text style={styles.categoryText}>{detailProduct.calories} Calories</Text>
              </View>
              <View style={styles.categoryField}>
                <IconAwesome name="clock" color="black" size={20} />
                <Text style={styles.categoryText}>{detailProduct.time} Min</Text>
              </View>
            </View>
            <View style={styles.detailInfor} >
              <Text style={styles.detail}>Details</Text>
              <Text style={styles.detailInformation}>{detailProduct.detail}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.addBtnContainer}>
          <TouchableOpacity style={styles.btnAdd}>
            <Text>
              <IconAnt name="plus" color="black" size={15} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
