import * as React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform, ImageBackground,
} from 'react-native';
import {Tab, Tabs} from 'native-base';
import LoginRegister from './LoginRegister';
import {Row, Grid} from "react-native-easy-grid";

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
  const onTabChange = (value: any) => {
    if (value.i === 1) {
      props.setMode("register");
    } else props.setMode("login");
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding': 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Grid >
          <Row size={50}>
            <ImageBackground
              resizeMode={"cover"}
              style={styles.backgroundImage}
              source={require('../images/login_img_2-01.jpg')}/>
          </Row>
          <Row size={50}>
            <Tabs tabBarUnderlineStyle={styles.tabUnderStyle}
              onChangeTab={onTabChange}>
              <Tab heading="Login"
                activeTextStyle={{color: '#272D2F', fontWeight: 'bold'}}
                textStyle={{color: '#272D2F', fontSize: 12}}
                tabStyle={{backgroundColor: 'white'}}
                activeTabStyle={{backgroundColor: 'white'}} >
                <LoginRegister email={props.email}
                  password={props.password}
                  passwordView={props.passwordView}
                  passwordIcon={props.passwordIcon}
                  emailValidation={props.emailValidation}
                  onEmailChange={props.onEmailChange}
                  onEyePress={props.onEyePress}
                  loginClick={props.loginClick}
                  mode='login'
                  setPassword={props.setPassword}/>
              </Tab>
              <Tab heading="Register"
                activeTextStyle={{color: '#272D2F', fontWeight: 'bold'}}
                textStyle={{color: '#272D2F', fontSize: 12}}
                tabStyle={{backgroundColor: 'white'}}
                activeTabStyle={{backgroundColor: 'white'}} >
                <LoginRegister email={props.email}
                  password={props.password}
                  passwordView={props.passwordView}
                  passwordIcon={props.passwordIcon}
                  emailValidation={props.emailValidation}
                  onEmailChange={props.onEmailChange}
                  onEyePress={props.onEyePress}
                  loginClick={props.loginClick}
                  mode='register'
                  setPassword={props.setPassword}/>
              </Tab>
            </Tabs>
          </Row>
        </Grid>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  tabUnderStyle: {
    backgroundColor: '#FFC529',
    width: 100,
    marginHorizontal: 50,
  },
});

export default AuthComponent;
