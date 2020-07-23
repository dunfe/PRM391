import * as React from 'react';
import {Icon} from 'native-base';
import {StyleSheet, View, Text} from 'react-native';

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
    <View style={styles.userContainer}>
      <View >
        <View style={styles.informationContainer}>
          <Icon
            type="Feather"
            name="heart"
            style={{fontSize: 20, color: 'black', paddingRight: 10}}
          />
          <Text>{props.userDetail.sex} Male</Text>
        </View>
        <View style={styles.informationContainer}>
          <Icon
            type="Feather"
            name="heart"
            style={{fontSize: 20, color: 'black', paddingRight: 10}}
          />
          <Text>{props.userDetail.address}</Text>
        </View>
        <View style={styles.informationContainer}>
          <Icon
            type="Feather"
            name="gift"
            style={{fontSize: 20, color: 'red', paddingRight: 10}}
          />
          <Text>{props.userDetail.dateOfBirth}</Text>
        </View>
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
    justifyContent: 'flex-start',
    padding: 20,
    marginTop: 20,
    margin: 10,
    borderRadius: 10,
    borderColor: '#FFC529',
    borderWidth: 10,
  },
});

export default UserInfomation;
