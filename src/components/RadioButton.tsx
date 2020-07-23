/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';


interface IProps {
  cards: any;
}
const RadioButton = (props: IProps) => {
  const [value, setValue] = useState('');

  return (
    <View>
      {props.cards.map(
          (res: {
            key: string;
            text: React.ReactNode;
            imgUri: string;
            cardNumber: string;
          }) => {
            return (
              <View key={res.key} style={styles.container}>
                <View>
                  <Image style={styles.image} source={{uri: res.imgUri}} />
                </View>
                <View style={styles.text}>
                  <Text style={styles.radioText}>{res.text}</Text>
                  <Text style={styles.cardNumber}>{res.cardNumber}</Text>
                </View>
                <TouchableOpacity
                  style={styles.radioCircle}
                  onPress={() => setValue(res.key)}>
                  {value === res.key && <View style={styles.selectedRb} />}
                </TouchableOpacity>
              </View>
            );
          },
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 120,
    marginLeft: 20,
    marginRight: 20,
    // width: 370,
    borderRadius: 10,
    borderColor: '#D7D7D7',
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  cardNumber: {
    fontSize: 14,
    color: 'gray',
  },
  text: {
    marginLeft: 20,
    width: 180,
  },
  image: {
    marginLeft: 20,
    height: 60,
    width: 100,
    // backgroundColor: 'white',
  },
  radioText: {
    marginRight: 35,
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
  radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#FFC529',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#FFC529',
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
});

export default RadioButton;
