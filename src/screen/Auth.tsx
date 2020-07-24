import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import {StackNavigationProp} from '@react-navigation/stack';
import AuthComponent from '../components/AuthComponent';
import {host} from '../constants/host';
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../redux/login";
import {Alert,
  StatusBar, StyleSheet, Text, View} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import {slides} from "../constants/sliders";
import AppIntroSlider from "react-native-app-intro-slider";
import LottieView from "lottie-react-native";

type AuthScreenProps = StackNavigationProp<any, any>;

interface IProps {
  navigation: AuthScreenProps,
}
export interface Login {
  login: {
    jwtToken: string,
    email: string,
  }
}

const Auth = ({navigation, ...props}: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordView, setPasswordView] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState('eye-off');
  const [emailValidation, setEmailValidation] = useState(false);
  const [mode, setMode] = useState('login');
  const user = useSelector((state: Login) => state.login);
  const dispatch = useDispatch();
  const [welcome, setWelcome] = useState(false);
  const onDone = () => {
    setWelcome(true);
  };
  const _renderItem = ({item}: {item: Item}) => {
    return (
      <View style={styles.slide}>
        <LottieView source={item.image} autoPlay loop/>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  const _keyExtractor = (item: Item) => item.title;
  const storeToken = async (token: string, email: string) => {
    try {
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('email', email);
    } catch (e) {
      console.log('Something wrong', e);
    }
  };
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const emailStorage = await AsyncStorage.getItem('email');

      if (token !== null) {
        dispatch(
            signIn({
              jwtToken: token,
              email: emailStorage,
            }),
        );
      }
    } catch (e) {
      console.log("Something wrong " + e);
    }
  };
  const loginAsync = async () => {
    try {
      await fetch(host + '/api/v1/identity/' + mode, {
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }).then(async (response) => {
        if (response.status === 200) {
          if (mode === 'login') {
            const json = await response.json();
            dispatch(
                signIn({
                  jwtToken: json.jwtToken,
                  email: email,
                }),
            );
            await storeToken(json.jwtToken, email);
          } else {
            Alert.alert("Register successful, please login!");
            navigation.navigate("Auth");
          }
        } else {
          const data = await response.json();
          Alert.alert("Error: " + data.errors);
        }
      }).catch((error) => {
        Alert.alert(error);
      });
    } catch (e) {
      Alert.alert(e);
    } finally {
      console.log('Done');
    }
  };
  const onEmailChange = (value: string) => {
    // eslint-disable-next-line max-len
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setEmail(value);
    setEmailValidation(reg.test(String(value).toLowerCase()));
  };

  const onEyePress = () => {
    if (passwordIcon === 'eye') {
      setPasswordIcon('eye-off');
    } else {
      setPasswordIcon('eye');
    }
    setPasswordView(!passwordView);
  };

  const loginClick = async () => {
    if (emailValidation) {
      console.log('Login...');
      await loginAsync();
    } else {
      Alert.alert("Email must valid!");
    }
  };

  useEffect(() => {
    getToken().then((r) => console.log(r));
  }, []);

  useEffect(() => {
    const checkLogin = () => {
      if (user.jwtToken !== "") {
        navigation.navigate("Home");
      }
    };
    checkLogin();
  }, [user]);

  if (welcome) {
    return (
      <AuthComponent email={email}
        mode={mode}
        setMode={setMode}
        password={password}
        passwordView={passwordView}
        passwordIcon={passwordIcon}
        emailValidation={emailValidation}
        onEmailChange={onEmailChange}
        onEyePress={onEyePress}
        loginClick={loginClick}
        setPassword={setPassword}
      />
    );
  } else {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={_keyExtractor}
          renderItem={_renderItem}
          data={slides}
          onDone={onDone}
        />
      </View>
    );
  }
};
Auth.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  slide: {
    backgroundColor: "#FFC529",
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    color: '#fff',
    marginTop: 92,
    fontSize: 32,
    textAlign: 'center',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});

type Item = typeof slides[0];

export default Auth;
