import React from 'react';
import {Button, WingBlank, WhiteSpace} from '@ant-design/react-native';
import PropTypes from 'prop-types';
import { StackNavigationProp } from '@react-navigation/stack';

type AuthScreenProps = StackNavigationProp<any, any>;
interface IProps {
  navigation: AuthScreenProps,
}
const Auth = ({navigation, ...props} : IProps) => {
  return (
    <WingBlank>
      <WhiteSpace/>
      <Button type="primary"
        onPress={ () => navigation.navigate('Login')}>Login</Button>
      <WhiteSpace/>
      <Button type="warning">Register</Button>
    </WingBlank>
  );
};
Auth.propTypes = {
  navigation: PropTypes.object,
};

export default Auth;
