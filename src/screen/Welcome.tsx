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

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  bottomFlex: {

    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    height: 300,
    marginTop: 450,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 30,
    paddingVertical: 10,

  },
  title: {
    fontWeight: "bold",
    fontSize: 35
  },
  description: {
    color: '#7f8c8d',
    marginRight: 70
  },
  button: {
    backgroundColor: '#FFC529',
    borderRadius: 15,
    padding: 18,
    alignItems: 'center',

  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15
  }




})

const Welcome = () => {

    return (

      <ScrollView >

        <View>
          <ImageBackground source={require('./image/background.jpg')} style={styles.image}>

            <View style={styles.bottomFlex}>

              <View>
                <Text style={styles.title}>Order & Let's eat Healthy food</Text>
              </View>

              <View>
                <Text style={styles.description}>Ask not what you can do for your country. Ask what's for lunch</Text>
              </View>

              <View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Skip</Text>
                </TouchableOpacity>
              </View>


            </View>

          </ImageBackground>


        </View>

      </ScrollView>


    );


}

export default Welcome;