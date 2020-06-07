import React, {useEffect, useState} from 'react';

import {
  Button,
  WingBlank,
  WhiteSpace,
  InputItem,
  List,
}
  from '@ant-design/react-native';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect( () => {
    if (username !== '') {
      setUsername(username);
    }
  }, [username]);
  return (
    <WingBlank>
      <List renderHeader={'Login'}>
        <InputItem value={username} onChange={setUsername}>
          Username
        </InputItem>
        <WhiteSpace/>
        <InputItem value={password} onChange={setPassword}>
          Password
        </InputItem>
      </List>
      <WhiteSpace/>
      <Button type="primary">Login</Button>
      <WhiteSpace/>
      <Button type="warning">Back</Button>
      <WhiteSpace/>
    </WingBlank>
  );
};

export default Login;
