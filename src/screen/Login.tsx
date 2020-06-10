import React, {useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
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
import {host} from '../constants/host';
import getTheme from '../../native-base-theme/components';
import customVariables from '../../native-base-theme/variables/platform';
import * as Animatable from 'react-native-animatable';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordView, setPasswordView] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState('eye-off');
  const [emailValidation, setEmailValidation] = useState(false);

  const loginAsync = async () => {
    try {
      await fetch(host + '/api/v1/identity/login', {
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
          const json = await response.json();
          console.log(json);
        } else {
          Alert.alert('Error: Code ' + response.status);
        }
      }).catch((error) => {
        console.log(error.message);
      });
    } catch (e) {
      console.log(e);
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
  return (
    <StyleProvider style={getTheme(customVariables)}>
      <Animatable.View style={styles.container} animation="bounceIn">
        <Form>
          <Item floatingLabel>
            <Label>Email Address</Label>
            <Input value={email}
              onChangeText={(value) => onEmailChange(value)}/>
            {emailValidation ? <Icon name='checkmark'
              style={{color: '#FFC529'}}/> : email ? <Icon name='close'
                style={{color: '#FE724C'}}/> : <Icon/>}
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input value={password}
              secureTextEntry={passwordView}
              onChangeText={(value) => setPassword(value)}/>
            {password ? <Icon name={passwordIcon}
              style={{color: '#FFC529'}}
              onPress={onEyePress} /> : <Icon/>}
          </Item>
        </Form>
        <Button primary rounded block
          onPress={() => loginClick()}
          style={styles.button}>
          <Text style={styles.text}>
                  Login
          </Text>
        </Button>
      </Animatable.View>
    </StyleProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'flex-end',
    position: 'relative',
    backgroundColor: 'transparent',
  },
  text: {
    color: 'white',
  },
  button: {
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
  },
});

export default Login;
