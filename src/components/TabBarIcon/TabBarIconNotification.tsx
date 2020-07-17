import * as React from "react";
import {Icon} from "native-base";

const TabBarIconNotification = (props: {color: string}) => (
  <Icon name='bell'
    type={"Feather"}
    style={{fontSize: 20, color: props.color}}/>
);

export default TabBarIconNotification;
