import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import {StackNavigationProp} from '@react-navigation/stack';
import AuthComponent from '../components/AuthComponent';
import {host} from '../constants/host';
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../redux/login";
import {Alert, Image, ImageBackground, StatusBar, StyleSheet, Text, View} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import {slides} from "../constants/sliders";
import AppIntroSlider from "react-native-app-intro-slider";

type AuthScreenProps = StackNavigationProp<any, any>;

interface IProps {
  navigation: AuthScreenProps,
}
interface Login {
  login: {
    jwtToken: string,
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
      <ImageBackground style={styles.slide} source={item.image}>
        <Text style={styles.text}>{item.text}</Text>
      </ImageBackground>
    );
  };
  const _keyExtractor = (item: Item) => item.title;

  let modeURL = '/api/v1/identity/login';
  useEffect(() => {
    if (mode === 'login') {
      modeURL = '/api/v1/identity/login';
    } else {
      modeURL = '/api/v1/identity/register';
    }
    console.log(mode);
  }, [mode]);

  const storeToken = async (token: string) => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (e) {
      console.log('Something wrong', e);
    }
  };

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        dispatch(
            signIn({
              jwtToken: token,
            }),
        );
      }
    } catch (e) {
      console.log("Something wrong " + e);
    }
  };

  const loginAsync = async () => {
    try {
      await fetch(host + modeURL, {
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
                }),
            );
            await storeToken(json.jwtToken);
          } else {
            Alert.alert("Register successful, please login!");
            navigation.navigate("Auth");
          }
        } else {
          Alert.alert("error: " + response.status);
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
    console.log('Login...');
    await loginAsync();
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
