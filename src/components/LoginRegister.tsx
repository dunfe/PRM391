import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Button,
  Form,
  Item,
  Input,
  Text,
  Label,
  Icon,
  StyleProvider,
} from 'native-base';
import getTheme from "../../native-base-theme/components";
import customVariables from "../../native-base-theme/variables/platform";
import {useSelector} from "react-redux";
import {Login} from "../screen/Auth";
import {useEffect, useState} from "react";
import LottieView from 'lottie-react-native';

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
    mode: string;
}

const LoginRegister = (props: IProps) => {
  const user = useSelector((state: Login) => state.login);
  const [buttonClick, setButtonClick] = useState(false);
  const [loading, setLoading] = useState(false);
  const login = () => {
    props.loginClick();
    if (props.emailValidation) {
      setLoading(true);
    }
    setButtonClick(!buttonClick);
  };

  useEffect(() => {
    const changeLoading = () => {
      if (user.jwtToken === "") {
        setLoading(false);
      }
    };
    changeLoading();
  }, [user, buttonClick]);
  return (
    <StyleProvider style={getTheme(customVariables)}>
      <View>
        <Form>
          <Item floatingLabel>
            <Label>Email Address</Label>
            <Input value={props.email}
              onChangeText={(value) => props.onEmailChange(value)}/>
            {props.emailValidation ? <Icon name='checkmark'
              style={{color: '#FFC529'}}/> : props.email ? <Icon name='close'
                style={{color: '#FE724C'}}/> :
                            <Icon/>}
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input value={props.password}
              secureTextEntry={props.passwordView}
              onChangeText={(value) => props.setPassword(value)}/>
            {props.password ? <Icon name={props.passwordIcon}
              style={{color: '#FFC529'}}
              onPress={props.onEyePress}/> : <Icon/>}
          </Item>
        </Form>
        {loading ? <LottieView
          source={require('../images/loading.json')}
          autoPlay loop/> :
            <Button primary rounded block
              onPress={login}
              style={styles.button}>
              <Text style={styles.text}>
                {props.mode === 'login' ? 'Login' : 'Register'}
              </Text>
            </Button> }
      </View>
    </StyleProvider>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  button: {
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
  },
});

export default LoginRegister;
