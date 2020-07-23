import * as React from 'react';
import {View} from 'react-native';
import UserInformation from '../screen/UserInfomation';


interface IProps {
    userDetail: {
        userId: string,
        userName: string,
        email: string,
        sex: boolean,
        address: string,
        dateOfBirth: string,
    }
}

const UserBar = (props: IProps) => {
  return (
    <UserInformation userDetail={props.userDetail} />
  );
};


export default UserBar;
