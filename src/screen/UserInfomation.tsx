import { Container } from 'native-base';
import * as React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { StyleSheet, View, Image, Text } from 'react-native';

interface IProps {
  userDetail: {
    userId: string,
    userName: string,
    email: string,
    sex: boolean,
    address: string,
    dateOfBirth: string,
  }
}

const UserInfomation = (props: IProps) => {
  return (
    <View>
      <View>
        <Text>{props.userDetail.userName}</Text>
      </View>
      <View>
        <Text>{props.userDetail.userName}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    opacity: 0.8,
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 180,
    bottom: 150,
    shadowColor: '#FFC529',
    shadowOpacity: 0.3,
    shadowOffset: { height: 10, width: 10 },
  },

  FloatingButtonStyle: {
    height: 30,
    width: 30,
  },
  ViewFloatingIcon: {
    width: 60,
    height: 60,
    padding: 13.5,
    backgroundColor: '#FFC529',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2,
  },
});

export default UserInfomation;
