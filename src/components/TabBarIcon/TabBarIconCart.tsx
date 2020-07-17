import * as React from "react";
import {Icon} from "native-base";

const TabBarIconCart = (props: {color: string}) => (
  <Icon name='shopping-bag'
    type={"Feather"}
    style={{fontSize: 20, color: props.color}}/>
);

export default TabBarIconCart;
