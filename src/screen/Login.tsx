import React from 'react';

import {Button, Flex} from '@ant-design/react-native';

const Login: React.FC = () => {
  return (
    <Flex direction="column">
      <Flex.Item>
        <Button type="primary">Login</Button>
      </Flex.Item>
      <Flex.Item>
        <Button type="warning">Register</Button>
      </Flex.Item>
    </Flex>
  );
};

export default Login;
