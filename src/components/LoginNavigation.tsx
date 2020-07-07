import * as React from 'react';
import {Button, Text, StyleProvider} from 'native-base';
import {StyleSheet, View} from 'react-native';
import customVariable from '../../native-base-theme/variables/platform';
import getTheme from '../../native-base-theme/components';
import * as Animatable from 'react-native-animatable';

interface IProps {
  login: boolean,
  register: boolean,
  onSetLogin: () => void,
  onSetRegister: () => void;
}
const LoginNavigation = (props: IProps) => {
  return (
    <StyleProvider style={getTheme(customVariable)}>
      <Animatable.View style={styles.bottom}>
        {props.login ?
          <View>
            <Button style={styles.buttonBorder}
              transparent
              onPress={props.onSetLogin}>
              <Text style={styles.text}>Login</Text>
            </Button>
          </View> :
          <View>
            <Button style={styles.button}
              transparent
              onPress={props.onSetLogin}>
              <Text style={styles.text}>Login</Text>
            </Button>
          </View>
        }
        {props.register ?
          <View>
            <Button style={styles.buttonBorder}
              transparent
              onPress={props.onSetRegister}>
              <Text style={styles.text}>Register</Text>
            </Button>
          </View> :
          <View>
            <Button style={styles.button}
              transparent
              onPress={props.onSetRegister}>
              <Text style={styles.text}>Register</Text>
            </Button>
          </View>
        }
      </Animatable.View>
    </StyleProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    backgroundColor: 'black',
  },
  text: {
    color: '#272D2F',
  },
  buttonBorder: {
    borderBottomWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  button: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
});

export default LoginNavigation;
