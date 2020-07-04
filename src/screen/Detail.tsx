/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity

} from 'react-native';

import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';

const Welcome = () => {

    return (

      <ScrollView style={styles.container}>
      <View>
        <View style={styles.returnBtn}>
          <TouchableOpacity >
            <View>
              <IconAnt name="left" color={'black'} size={20} style={styles.btnLeft} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <IconAnt name="heart" color="#FE724C" style={styles.btnRight} size={20} />
          </TouchableOpacity>
        </View>

        <View>
          <Image source={require('./image/dimsum.jpg')} style={styles.image}>

          </Image>

        </View>

      </View>

      <View style={[styles.bottomFlex]}>



        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnMinus}>
            <Text >
              <IconAnt name="minus" color="black" size={15} />
            </Text>
          </TouchableOpacity>

          <Text style={styles.btnText}>
            1
            </Text>

          <TouchableOpacity style={styles.btnPlus}>
            <Text>
              <IconAnt name="plus" color="black" size={15} />
            </Text>
          </TouchableOpacity>

        </View>



        <View style={styles.bottomComponent}>

          <View style={styles.title}>
            <Text style={styles.foodName}> Title</Text>
            <Text style={styles.foodPrice}> Price</Text>
          </View>

          <View style={styles.category}>
            <View style={styles.categoryField}>
              <IconAnt name="star" color="#FFC529" size={20} />
              <Text style={styles.categoryText}> Price</Text>
            </View>
            <View style={styles.categoryField}>
              <IconAwesome name="fire-alt" color="#FE724C" size={20} />
              <Text style={styles.categoryText}> Price</Text>
            </View>
            <View style={styles.categoryField}>
              <IconAwesome name="clock" color="black" size={20} />
              <Text style={styles.categoryText}> Price</Text>
            </View>

          </View>

          <View style={styles.detailInfor} >

            <Text style={styles.detail}>Details</Text>

            <Text style={styles.detailInformation}>Whatever its form may be upon being cooked, its flavour may change but its flesh remains high in protein, low in fat and can be digested easily.
            </Text>

          </View>

        </View>

        <View style={styles.btnContainer}>
         
         <TouchableOpacity style={styles.btnAdd}>
           <Text>
             <IconAnt name="plus" color="black" size={15} />
           </Text>
         </TouchableOpacity>

       </View>



      </View>


    </ScrollView>


    );


}


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

  image: {
    marginTop: 20,
    width: 350,
    height: 300
  },

  btnLeft: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  btnRight: {
    marginTop: 8,
  },


  btnPlus: {
    backgroundColor: '#FFC529',
    justifyContent: 'center',
    padding: 10,
    paddingRight:20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    fontWeight: "bold"
  },

  btnMinus: {
    backgroundColor: '#FFC529',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingLeft:20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    fontWeight: "bold"
  },

  btnText: {
    backgroundColor: '#FFC529',
    width: 30,
    alignContent: 'center',
    padding: 7,
    fontSize: 20,
    fontWeight: "bold"
  },


  bottomComponent: {
    borderRadius: 20,
    margin:5,

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
    color:'black',
  },

  foodPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight:10,
    color:'black',
  },


  detail: {
    fontSize: 20,
    fontWeight: "bold",
    color:'black',
  },

  btnContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',

  },

  bottomFlex: {
    flexDirection: 'column',
    backgroundColor: 'white',
    height: 500,
    marginTop: 30,

  },
  category: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  },

  categoryField: {
    padding: 8,
    paddingRight: 20,
    marginRight: 15,
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

  detailInformation:{
    marginTop:10,
    color:'#D7D7D7',
    fontWeight:"bold",
  },  
  btnAdd: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#FFC529',
    
  },
});


export default Welcome;