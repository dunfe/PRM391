import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import {StackNavigationProp} from '@react-navigation/stack';
import AuthComponent from '../components/AuthComponent';
import {host} from '../constants/host';
import {Toast} from "native-base";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {signIn} from "../redux/login";

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

  let modeURL = '/api/v1/identity/login';
  useEffect(() => {
    if (mode === 'login') {
      modeURL = '/api/v1/identity/login';
    } else {
      modeURL = '/api/v1/identity/register';
    }
    console.log(mode);
  }, [mode]);

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
          const json = await response.json();
          dispatch(
              signIn({
                jwtToken: json,
              }),
          );
        } else {
          Toast.show({
            text: "Login fail!Error: Code " + response.status,
            duration: 300,
          });
        }
      }).catch((error) => {
        console.log(error);
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

  useEffect(() => {
    const checkLogin = () => {
      if (user.jwtToken !== "") {
        navigation.navigate("List");
      }
    };
    checkLogin();
  }, [user]);

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
};
Auth.propTypes = {
  navigation: PropTypes.object,
};

export default Auth;
