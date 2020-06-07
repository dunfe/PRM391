import React, {useState} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {
  Container,
  Button,
  Content,
  Form,
  Item,
  Input,
  Text,
} from 'native-base';
import {host} from '../constants/host';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');

  const registerAsync = async () => {
    try {
      await fetch(host + '/api/v1/identity/register', {
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      }).then(async (response) => {
        if (response.status === 200) {
          const json = await response.json();
          setUser(json.jwtToken);
          Alert.alert('Success');
        } else {
          Alert.alert('Error: Code ' + response.status);
        }
      }).catch((error) => {
        setMessage(error.message);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setMessage('Done');
    }
  };

  const registerClick = async () => {
    setMessage('Register...');
    await registerAsync();
  };
  return (
    <Container>
      <Grid>
        <Row size={25}>
          {message ? <Text>{message}</Text> : <Text> </Text>}
          <Text>{user}</Text>
        </Row>
        <Row size={50}>
          <Content>
            <Form>
              <Item>
                <Input placeholder="username" value={username}
                  onChangeText={(value) => setUsername(value)}/>
              </Item>
              <Item>
                <Input placeholder="password" value={password}
                  onChangeText={(value) => setPassword(value)}/>
              </Item>
            </Form>
          </Content>
        </Row>
        <Row size={25}>
          <Col>
            <Button primary
              onPress={() => registerClick()}
              style={styles.button}>
              <Text>
                Register
              </Text>
            </Button>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default Register;
