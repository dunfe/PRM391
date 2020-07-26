import * as React from 'react';
import {Icon} from 'native-base';
import {StyleSheet, View, Text} from 'react-native';

interface IProps {
    userDetail: {
        id: string,
        phoneNumber: string,
        email: string,
        gender: boolean,
        address: string,
        dateOfBirth: string,
        userImage: string,
    }
}

const UserInfomation = (props: IProps) => {
  return (
    <View style={styles.userContainer}>
      <View style={styles.informationContainer}>
        <Icon
          type="Feather"
          name="user"
          style={{fontSize: 20, color: '#FFC529', paddingRight: 10}}
        />
        <Text>{props.userDetail.gender} Male</Text>
      </View>
      <View style={styles.informationContainer}>
        <Icon
          type="Feather"
          name="home"
          style={{fontSize: 20, color: '#FFC529', paddingRight: 10}}
        />
        <Text>{props.userDetail.address}</Text>
      </View>
      <View style={styles.informationContainer}>
        <Icon
          type="Feather"
          name="gift"
          style={{fontSize: 20, color: '#FFC529', paddingRight: 10}}
        />
        <Text>{new Date(props.userDetail.dateOfBirth).toDateString()}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    alignItems: 'center',
  },
  informationContainer: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 10,
    borderRadius: 10,
    height: 50,
    backgroundColor: "#fff",
  },
});

export default UserInfomation;
