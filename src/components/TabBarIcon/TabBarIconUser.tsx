import * as React from "react";
import {Icon} from "native-base";

const TabBarIconUser = (props: {color: string}) => (
  <Icon name='user'
    type={"Feather"}
    style={{fontSize: 20, color: props.color}}/>
);

export default TabBarIconUser;
