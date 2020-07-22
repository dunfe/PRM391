import * as React from 'react';
// import {View, Text} from 'native-base';
import {Container, Tab, Tabs, Content, Text} from 'native-base';
import {KeyboardAvoidingView, View, Image} from 'react-native';
import FavouriteFood from './FavouriteFood';
import UserInformation from '../screen/UserInfomation';
import {ScrollView} from 'react-native-gesture-handler';

const favouriteProductArray = [
  {
    id: 1,
    productName: 'Fried Chickenaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    description: 'Spicy fried chicken',
    price: '9.80',
    productImage: '../images/fried-chicken.png',
  },
  {
    id: 2,
    productName: 'Gà Rán',
    description: 'Gà Không Có Cay',
    price: '90.80',
    productImage: '../images/fried-chicken.png',
  },
  {
    id: 3,
    productName: 'Gà Chiên Giòn Giònnn',
    description: 'Gà Siêu nhạt lun',
    price: '9.80',
    productImage: '../images/fried-chicken.png',
  },
  {
    id: 4,
    productName: 'Fried Chickenaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    description: 'Spicy fried chicken',
    price: '9.80',
    productImage: '../images/fried-chicken.png',
  },
  {
    id: 5,
    productName: 'Gà Rán',
    description: 'Gà Không Có Cay',
    price: '90.80',
    productImage: '../images/fried-chicken.png',
  },
  {
    id: 6,
    productName: 'Gà Chiên Giòn Giònnn',
    description: 'Gà Siêu nhạt lun',
    price: '9.80',
    productImage: '../images/fried-chicken.png',
  },
];

const displayArray = favouriteProductArray.map((item) => (
  <View key={item.id} style={{marginTop: 20}}>
    <FavouriteFood
      productName={item.productName}
      description={item.description}
      price={item.price}
      productImage={require('../images/fried-chicken.png')}
    />
  </View>
));

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
    <Container>
      <Tabs>
        <Tab
          heading="User Information"
          activeTextStyle={{color: '#FFC529', fontWeight: 'bold'}}
          textStyle={{color: '#272D2F', fontSize: 15}}
          tabStyle={{backgroundColor: '#FFC529'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          {<UserInformation userDetail={props.userDetail} />}
        </Tab>
        <Tab
          key={1}
          heading="Favourite"
          activeTextStyle={{color: '#FFC529', fontWeight: 'bold'}}
          textStyle={{color: '#272D2F', fontSize: 15}}
          tabStyle={{backgroundColor: '#FFC529'}}
          activeTabStyle={{backgroundColor: 'white'}}>
          <ScrollView>
            {displayArray}
          </ScrollView>
        </Tab>
      </Tabs>
    </Container>
  );
};


export default UserBar;
