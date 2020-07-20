import {Container} from 'native-base';
import * as React from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {StyleSheet, View, Image, Text} from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
    // User Container chứa toàn bộ thông tin của user
    <View style={styles.userContainer}>
      <View >
        {/* thông tin của từng attribute  */}
        <View style={styles.informationContainer}>
          <IconAwesome
            name="transgender"
            style={{fontSize: 20, color: 'black', paddingRight: 10}}
          />
          <Text>{props.userDetail.sex} Male</Text>
          {/* {userDetail.userName.length > 15 ? userDetail.userName.substring(0, 15) + '...' : userDetail.userName} */}
        </View>
        {/* thông tin của từng attribute  */}
        <View style={styles.informationContainer}>
          <FontAwesome
            name="address-card-o"
            style={{fontSize: 20, color: 'black', paddingRight: 10}}
          />
          <Text>{props.userDetail.address}</Text>
        </View>
        <View style={styles.informationContainer}>
          <FontAwesome
            name="birthday-cake"
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
