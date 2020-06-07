import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigationProp} from '@react-navigation/stack';
import {Container, Button, Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

type AuthScreenProps = StackNavigationProp<any, any>;

interface IProps {
  navigation: AuthScreenProps,
}

const Auth = ({navigation, ...props}: IProps) => {
  return (
    <Container>
      <Grid>
        <Row size={75}>
        </Row>
        <Row size={25}>
          <Col>
            <Button primary
              onPress={() => navigation.navigate('Login')}
              style={styles.button}>
              <Text>
                Login
              </Text>
            </Button>
            <Button primary style={styles.button}
              onPress={() => navigation.navigate('Register')}>
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
Auth.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default Auth;
