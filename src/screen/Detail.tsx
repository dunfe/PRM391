import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity, ImageBackground,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Dimensions} from 'react-native';

type RootStackParamList = {
    product: {
        productId: number;
        productName: string;
        shortDescription: string;
        detail: string;
        calories: number;
        price: number;
        productImage: string;
        timeToMake: number;
        categoryId: number;
    }
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'product'>;
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'product'>;

interface IProps {
    route: ProfileScreenRouteProp;
    navigation: ProfileScreenNavigationProp;
}

const windowWidth = Dimensions.get('window').width;

const Detail = ({route, navigation}: IProps) => {
  const {product} = route.params;
  const [count, setCount] = useState(0);
  const changeQuality = (action: string) => () => {
    if (action === 'decrease') {
      if (count > 0) {
        setCount((count) => count - 1);
      }
    } else {
      setCount((count) => count + 1);
    }
  };

  const goBackClick = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <ImageBackground
          imageStyle={styles.imageStyle}
          source={{uri: product.productImage}}
          style={styles.image}/>
        <View style={styles.bottomFlex}>
          <View style={styles.bottomComponent}>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={changeQuality("decrease")}>
                <Text>
                  <IconAnt name="minus" color="black" size={15}/>
                </Text>
              </TouchableOpacity>
              <Text style={styles.btnText}>
                {count}
              </Text>
              <TouchableOpacity style={styles.btnPlus}
                onPress={changeQuality("increase")}>
                <Text>
                  <IconAnt name="plus" color="black" size={15}/>
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.detailContainer}>
              <View style={styles.title}>
                <Text style={styles.foodName}>{product.productName}</Text>
                <View style={styles.price}>
                  <IconAwesome name="dollar-sign" color="#FE724C" size={20}/>
                  <Text style={styles.foodPrice}>{product.price}</Text>
                </View>
              </View>
              <View style={styles.category}>
                <View style={styles.categoryField}>
                  <IconAwesome name="fire-alt" color="#FE724C" size={20}/>
                  <Text style={styles.categoryText}>
                    {product.calories} Calories
                  </Text>
                </View>
                <View style={styles.categoryField}>
                  <IconAwesome name="clock" color="black" size={20}/>
                  <Text style={styles.categoryText}>
                    {product.timeToMake} Min
                  </Text>
                </View>
              </View>
              <View style={styles.detailInfor}>
                <Text style={styles.detail}>Details</Text>
                <Text style={styles.detailInformation}>
                  {product.detail}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{paddingBottom: 70}}><Text> </Text></View>
      </ScrollView>
      <View style={styles.btnLeftPosition}>
        <TouchableOpacity onPress={goBackClick}>
          <IconAnt
            name="left"
            color={'black'}
            size={20}
            style={styles.btnLeft}/>
        </TouchableOpacity>
      </View>
      <View style={styles.btnRightPosition}>
        <TouchableOpacity >
          <IconAnt
            name="heart"
            color="#FE724C"
            style={styles.btnRight} size={20}/>
        </TouchableOpacity>
      </View>
      <View style={styles.btnAddView}>
        <TouchableOpacity style={styles.btnAdd}>
          <IconAnt name="plus" color="black" size={15}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    position: 'relative',
  },
  imageStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    bottom: -20,
    width: '100%',
    height: 400,
  },
  btnLeftPosition: {
    position: "absolute",
    top: 30,
    left: 10,
  },
  btnLeft: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  btnRightPosition: {
    position: "absolute",
    top: 30,
    right: 10,
  },
  btnRight: {
    right: 10,
    marginTop: 8,
  },
  btnPlus: {
    backgroundColor: '#FFC529',
    justifyContent: 'center',
    padding: 10,
    paddingRight: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    fontWeight: "bold",
  },
  btnMinus: {
    backgroundColor: '#FFC529',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 20,
    right: -1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    fontWeight: "bold",
  },
  btnText: {
    backgroundColor: '#FFC529',
    width: 50,
    textAlign: 'center',
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomComponent: {
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  returnBtn: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  title: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  foodName: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'black',
    marginLeft: 5,
  },
  foodPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
    color: 'black',
  },
  detail: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'black',
    marginLeft: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: -20,
  },
  addBtnContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  bottomFlex: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  category: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 5,
  },
  categoryField: {
    padding: 8,
    paddingRight: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
  detailInfor: {
    marginTop: 25,
  },
  categoryText: {
    marginLeft: 5,
  },
  detailInformation: {
    marginTop: 10,
    color: '#D7D7D7',
    fontWeight: "bold",
  },
  btnAddView: {
    position: "absolute",
    bottom: 20,
    left: (windowWidth / 2) - (45 / 2),
    width: 45,
  },
  btnAdd: {
    borderWidth: 5, borderColor: "white",
    borderRadius: 30,
    width: 55,
    padding: 15,
    backgroundColor: '#FFC529',
  },
  detailContainer: {
    marginTop: 20,
  },
});

export default Detail;
