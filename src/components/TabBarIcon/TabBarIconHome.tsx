import * as React from "react";
import {Icon} from "native-base";

const TabBarIconHome = (props: {color: string}) => (
  <Icon name='home'
    type={"Feather"}
    style={{fontSize: 20, color: props.color}}/>
);

export default TabBarIconHome;
