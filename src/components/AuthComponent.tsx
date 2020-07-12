import * as React from 'react';
import {
  StyleSheet, Image, KeyboardAvoidingView, Keyboard,
} from 'react-native';
import {Container, Tab, Tabs, Content} from 'native-base';
import {useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import LoginRegister from './LoginRegister';

interface IProps {
  email: string,
  password: string,
  passwordView: boolean,
  passwordIcon: string,
  emailValidation: boolean,
  onEmailChange: (value: string) => void;
  onEyePress: () => void;
  loginClick: () => void;
  setPassword: (value: string) => void;
  setMode: (value: string) => void;
  mode: string;
}

const AuthComponent = (props: IProps) => {
  const [keyboardOn, setKeyboard] = useState(false);

  const showImage = () => {
    if (!keyboardOn) {
      return (
        <Animatable.View animation='bounceInDown'>
          <Image
            style={styles.backgroundImage}
            source={require('../images/login_img_2-01.jpg')}/>
        </Animatable.View>
      );
    }
  };
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setKeyboard(true);
  };

  const _keyboardDidHide = () => {
    setKeyboard(false);
  };
  return (
    <KeyboardAvoidingView behavior='height' style={{flex: 1}}>
      <Container style={styles.container}>
        {showImage()}
        <Content style={styles.content}>
          <Tabs tabBarUnderlineStyle={styles.tabUnderStyle}
          >
            <Tab heading="Login"
              activeTextStyle={{color: '#272D2F', fontWeight: 'bold'}}
              textStyle={{color: '#272D2F', fontSize: 12}}
              tabStyle={{backgroundColor: 'white'}}
              activeTabStyle={{backgroundColor: 'white'}} >
              {<LoginRegister email={props.email}
                password={props.password}
                passwordView={props.passwordView}
                passwordIcon={props.passwordIcon}
                emailValidation={props.emailValidation}
                onEmailChange={props.onEmailChange}
                onEyePress={props.onEyePress}
                loginClick={props.loginClick}
                mode='login'
                setMode={() => props.setMode('login')}
                setPassword={props.setPassword}/>}
            </Tab>
            <Tab heading="Register"
              activeTextStyle={{color: '#272D2F', fontWeight: 'bold'}}
              textStyle={{color: '#272D2F', fontSize: 12}}
              tabStyle={{backgroundColor: 'white'}}
              activeTabStyle={{backgroundColor: 'white'}} >
              {<LoginRegister email={props.email}
                password={props.password}
                passwordView={props.passwordView}
                passwordIcon={props.passwordIcon}
                emailValidation={props.emailValidation}
                onEmailChange={props.onEmailChange}
                onEyePress={props.onEyePress}
                loginClick={props.loginClick}
                mode='register'
                setMode={() => props.setMode('register')}
                setPassword={props.setPassword}/>}
            </Tab>
          </Tabs>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  content: {

  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tab: {

  },
  backgroundImage: {
    width: '100%',
    height: 370,
    resizeMode: 'cover',

  },
  tabUnderStyle: {
    backgroundColor: '#FFC529',
    width: 100,
    marginHorizontal: 50,
  },
});

export default AuthComponent;
