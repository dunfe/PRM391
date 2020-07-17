import * as React from "react";
import {Text, View} from "react-native";
import {Button} from "native-base";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

const User = () => {
  const navigation = useNavigation();
  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('token');
      navigation.navigate("Auth");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button primary onPress={removeToken}>
        <Text>Log out</Text>
      </Button>
    </View>
  );
};

export default User;
