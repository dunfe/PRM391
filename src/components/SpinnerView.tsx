import * as React from "react";
import {StyleSheet, View} from "react-native";
import {Spinner} from "native-base";

const SpinnerView = () => (
  <View style={styles.spinnerView}>
    <Spinner/>
  </View>
);

const styles = StyleSheet.create({
  spinnerView: {
    top: 0,
    width: "100%",
    height: 200,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default SpinnerView;
