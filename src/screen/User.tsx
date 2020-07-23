import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon, Container} from 'native-base';
import UserBar from '../components/UserBar';

const userDetail = {
  userId: '156A860',
  userName: 'Hai Rio',
  email: 'hainn@gmail.com',
  sex: true,
  address: 'Hà Nội',
  dateOfBirth: '23/8/1999',
};

const User = () => {
  const clickHandler = () => {
    // function to handle click on floating Action Button
    Alert.alert('1');
  };

  const updateAVatar = () => {
    // function to handle click on floating Action Button
    Alert.alert('Bạn có muốn update hokkk?');
  };

  return (
    <Container>
      <View style={{backgroundColor: 'white'}}>
        <View style={styles.flexbox}>
          <TouchableOpacity style={styles.returnBtn} onPress={clickHandler}>
            <Icon
              name="chevron-left"
              type="Feather"
              style={{fontSize: 25, color: '#272D2F'}}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>My Profile</Text>
          </View>
          <TouchableOpacity onPress={clickHandler} style={styles.editBtn}>
            <View>
              <Icon
                name="edit"
                type="Feather"
                style={{fontSize: 20, color: '#FFFFFF'}}
              />
            </View>
          </TouchableOpacity>

        </View>
        <View style={styles.userDetailContainer}>
          <View>
            <TouchableOpacity onPress={updateAVatar}>
              <Image style={styles.userImage}
                source={{uri: 'https://st.quantrimang.com/photos/image/072015/22/avatar.jpg'}} />
            </TouchableOpacity>
          </View>
          <View style={{paddingLeft: 20}}>
            <Text style={{marginTop: 10, fontSize: 20, fontWeight: 'bold'}}>
              <Text>{userDetail.userName.length > 15 ?
                  userDetail.userName.substring(0, 15) + '...' : userDetail.userName}</Text>
            </Text>
            <Text style={{marginTop: 5, fontSize: 15, color: '#D7D7D7'}}>
              {userDetail.email.length > 30 ?
                  userDetail.email.substring(0, 30) + '...' : userDetail.email}
            </Text>
            <Text style={{marginTop: 5, fontSize: 15, color: '#d7d7d7'}}>
              User ID: {userDetail.userId.length > 30 ?
                userDetail.userId.substring(0, 30) + '...' : userDetail.userId}</Text>
          </View>
        </View>
      </View>
      <UserBar userDetail={userDetail} />
    </Container>
  );
};

const styles = StyleSheet.create({
  flexbox: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 10,
    flex: 1,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  returnBtn: {
    borderColor: '#272D2F',
    borderWidth: 0.25,
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBtn: {
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFC529',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    paddingTop: 5,
    fontSize: 25,
    fontWeight: 'bold',
  },
  userDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    marginTop: 50,
    borderColor: '#D7D7D7',
  },
  userImage: {
    height: 100,
    width: 100,
    margin: 15,
    borderRadius: 5,
  },
});

export default User;
