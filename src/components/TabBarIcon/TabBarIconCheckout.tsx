import * as React from "react";
import {Icon} from "native-base";

const TabBarIconCheckout = (props: {color: string}) => (
  <Icon name='check'
    type={"Feather"}
    style={{fontSize: 20, color: props.color}}/>
);

export default TabBarIconCheckout;
