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
import {useEffect} from 'react';
import getTheme from "../../native-base-theme/components";
import customVariables from "../../native-base-theme/variables/platform";

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
        <Button primary rounded block
          onPress={() => props.loginClick()}
          style={styles.button}>
          <Text style={styles.text}>
            {props.mode === 'login' ? 'Login' : 'Register'}
          </Text>
        </Button>
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
