import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from 'native-base';
import {useNavigation} from "@react-navigation/native";
import ProductInCart from "../components/ProductInCart";
import {SwipeListView} from "react-native-swipe-list-view";
import {host} from "../constants/host";
import {useSelector} from "react-redux";
import {logOut} from "../redux/login";
import {useDispatch} from "react-redux";
import {Login} from "./Auth";
import {Product} from "../containers/cartInterface";
import UserInfomation from "./UserInfomation";
import AsyncStorage from '@react-native-community/async-storage';

interface User {
  id: string,
  phoneNumber: string,
  email: string,
  gender: boolean,
  address: string,
  dateOfBirth: string,
  userImage: string,
}

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: Login) => state.login);
  const [userInformation, setUserInformation] = useState<User>({
    "id": "4eb16f6e-4202-499f-8d0e-c9d310a7b4a0",
    "email": "dung@gmail.com",
    "phoneNumber": "09123456789",
    "address": "Km 26 Đại Lộ Thăng Long, Đại học FPT Hòa Lạc",
    "gender": true,
    "dateOfBirth": "1997-01-01T00:00:00",
    "userImage": 'https://st.quantrimang.com/photos/image/072015/22/avatar.jpg',
  });
  const navigation = useNavigation();
  const [favourite, setFavourite] = useState([]);
  const [favouriteChange, setFavouriteChange] = useState(false);

  const updateAVatar = () => {
    // function to handle click on floating Action Button
    Alert.alert('Bạn có muốn update hokkk?');
  };

  const goBackClick = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const getUserInformation = () => {
      fetch(host + '/api/v1/users/' + user.email, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + user.jwtToken,
        },
      })
          .then( async (response) => {
            console.log(response.status + user.email);
            if (response.status === 200) {
              const data = await response.json();
              await setUserInformation(data);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    };
    getUserInformation();
  }, []);

  useEffect(() => {
    const getFavourite = () => {
      fetch(host + '/api/v1/favourites/' + user.email, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + user.jwtToken,
        },
      })
          .then( async (response) => {
            console.log(response.status);
            if (response.status === 200) {
              const data = await response.json();
              await setFavourite(data);
            } else {
              setFavourite([]);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    };
    getFavourite();
  }, [favouriteChange]);

  const removeFavourite = (productId: number) => {
    const remove = () => {
      fetch(host + '/api/v1/favourites/' + user.email + "/" +
          productId, {
        method: 'DELETE',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + user.jwtToken,
        },
      })
          .then((response) => {
            console.log(response.status);
            setFavouriteChange(!favouriteChange);
          });
    };
    remove();
  };

  const header = () => {
    return (
      <View style={{marginHorizontal: 20}}>
        <TouchableOpacity onPress={goBackClick}
          style={styles.btnLeftPosition}>
          <Icon
            type="Feather"
            name="arrow-left"
            style={styles.btnLeft}/>
        </TouchableOpacity>
        <View style={styles.userDetailContainer}>
          <TouchableOpacity onPress={updateAVatar}>
            <Image style={styles.userImage}
              source={{uri: userInformation.userImage}} />
          </TouchableOpacity>
          <View style={{flexDirection: "column",
            width: 200,
            marginVertical: 10}}>
            <Text numberOfLines={1}
              style={{fontSize: 20,
                flex: 1, textAlign: "left", fontWeight: 'bold'}}>
              {userInformation.email}
            </Text>
            <View>
              <Text numberOfLines={1}
                style={{flex: 1,
                  textAlign: "left",
                  fontSize: 15,
                  color: '#D7D7D7'}}>
                {userInformation.phoneNumber}
              </Text>
              <Text numberOfLines={1}
                style={{flex: 1,
                  textAlign: "left",
                  fontSize: 15,
                  color: '#d7d7d7'}}>
                {userInformation.address}
              </Text>
            </View>
          </View>
        </View>
        <UserInfomation userDetail={userInformation} />
        <Text style={{fontSize: 20, marginBottom: 10, fontWeight: "bold"}}>
          Favourite Products: {favourite.length}
        </Text>
      </View>
    );
  };

  const onLogOut = async () => {
    try {
      console.log(await AsyncStorage.getItem('token'));
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('email');

      console.log(await AsyncStorage.getItem('token'));
      await dispatch(
          logOut(),
      );
      navigation.navigate("Auth");
    } catch (exception) {
      console.log("Error: " + exception);
    }
  };

  const footer = () => {
    return (
      <TouchableOpacity onPress={onLogOut} style={{backgroundColor: "#FFC529",
        margin: 20,
        borderRadius: 30,
        height: 40,
        alignItems: "center",
        justifyContent: "center"}}>
        <Text>Log out</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SwipeListView
      data={favourite}
      ListHeaderComponent={header}
      ListFooterComponent={footer}
      keyExtractor={(item: Product) => item.productId + ""}
      renderItem={ (data) => (
        <ProductInCart
          quality={0}
          product={data.item}
        />
      )}
      renderHiddenItem={ (data) => (
        <View style={styles.rowBack}>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => removeFavourite(data.item.productId)}
          >
            <Icon type="Feather" name="trash"/>
          </TouchableOpacity>
        </View>
      )}
      rightOpenValue={-75}
    />
  );
};

const styles = StyleSheet.create({
  headerText: {
    paddingTop: 5,
    fontSize: 25,
    fontWeight: 'bold',
  },
  userDetailContainer: {
    marginTop: 100,
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderColor: '#D7D7D7',
  },
  userImage: {
    height: 100,
    width: 100,
    margin: 15,
    borderRadius: 5,
  },
  btnLeftPosition: {
    position: "absolute",
    top: 20,
    borderColor: '#272D2F',
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLeft: {
    fontSize: 20,
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    right: 10,
  },
  flexbox: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    marginBottom: 10,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box1: {
    borderColor: '#272D2F',
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFC529',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default User;
