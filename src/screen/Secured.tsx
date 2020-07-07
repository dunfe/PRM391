import * as React from 'react';
import {Text, Container} from 'native-base';

interface IProps {
  route: {
    params: {
      jwt: string
    }
  }
}
const Secured = ({route, ...props}: IProps) => {
  const {jwt} = route.params;
  return (
    <Container>
      {jwt ? <Text>Logged In: jwtToken: {jwt}</Text> : <Text> </Text>}
    </Container>
  );
};

export default Secured;
