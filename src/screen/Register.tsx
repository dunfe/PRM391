import React, {useState} from 'react';
import {StyleSheet, Alert} from 'react-native';
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

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordView, setPasswordView] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState('eye-off');
  const [emailValidation, setEmailValidation] = useState(false);

  const registerAsync = async () => {
    try {
      await fetch(host + '/api/v1/identity/register', {
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
          Alert.alert('Success');
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

  const registerClick = async () => {
    await registerAsync();
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
  return (
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
      <StyleProvider style={getTheme(customVariables)}>
        <Button primary rounded block
          onPress={() => registerClick()}
          style={styles.button}>
          <Text>
            Register
          </Text>
        </Button>
      </StyleProvider>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  button: {
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
  },
});

export default Register;
