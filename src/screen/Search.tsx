import * as React from 'react';
import {FlatList, StyleSheet, Text, View, Dimensions,
} from 'react-native';
import {
  TouchableOpacity,
} from 'react-native';
import {Container, Icon, Input, Item} from 'native-base';
import {useEffect, useState} from "react";
import {host} from "../constants/host";
import {useSelector} from "react-redux";
import ProductInSearch from "../components/ProductInSearch";

interface IProps {
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

interface Login {
  login: {
    jwtToken: string,
  }
}

// @ts-ignore
const Search = ({route, navigation}) => {
  const [orientation, setOrientation] = useState('');
  const [columnCount, setColumnCount] = useState(2);

  useEffect(() => {
    setColumnCount(orientation === 'landscape' ? 4 : 2);
  }, [orientation]);

  Dimensions.addEventListener('change', () => {
    setOrientation(isPortrait() ? 'portrait': 'landscape');
  });
  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const goBackClick = () => {
    navigation.goBack();
  };

  const {searchTextTemp} = route.params ? route.params : '';
  const [searchText, setSearchText] = useState(searchTextTemp);
  const [count, setCount] = useState(0);
  const user = useSelector((state: Login) => state.login);
  const [array, setArray] = useState([]);

  useEffect(() => {
    console.log(searchText);
    const searchProduct = () => {
      if (searchText !== '') {
        fetch(host + '/api/v1/products/search/' + searchText, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + user.jwtToken,
          },
        })
            .then((response) => response.json())
            .then(async (data) => {
              await setArray(data.foods);
              await setCount(data.count);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
      }
    };
    searchProduct();
  }, [searchText]);
  return (
    <Container style={styles.container}>
      <View style={styles.returnBtn}>
        <TouchableOpacity onPress={goBackClick}>
          <View>
            <Icon name="arrow-left"
              type="Feather"
              color={'black'}
              style={styles.btnLeft}/>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.searchTitle}>Search Food</Text>
        </View>
        <TouchableOpacity>
          <Icon type="Feather" name="user"
            color="#FE724C" style={{fontSize: 20}}/>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 30, marginHorizontal: 20}}>
        <Item rounded style={styles.searchBar}>
          <Icon
            name="search"
            type="Feather"
            style={{fontSize: 20, color: '#000', paddingLeft: 10}}
          />
          <Input placeholder={"Search..."}
            onChangeText={(value) => setSearchText(value)}>
            {searchText}
          </Input>
        </Item>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.resultFood}> Found {count} results</Text>
          <FlatList data={array}
            key={columnCount}
            numColumns={2}
            keyExtractor = { (item, index) => index.toString() }
            renderItem={({item} : {item: IProps, index: number}) => (
              <ProductInSearch product={item}/>
            )}/>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "#f2f2f2",
    flex: 1,
    justifyContent: 'center',
  },
  btnLeft: {
    fontSize: 20,
    backgroundColor: 'white',
  },
  returnBtn: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  searchTitle: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  searchContainer: {
    marginTop: 30,
  },
  searchBar: {
    backgroundColor: '#D7D7D7',
    paddingLeft: 15,
  },
  searchIcon: {
    marginTop: 7,
  },
  filterIcon: {
    backgroundColor: '#FFC529',
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 10,
  },
  bottomContainer: {
    flex: 1,
    marginLeft: 15,
  },
  resultFood: {
    marginTop: 15,
    paddingLeft: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
  },
  image: {
    flex: 1,
    width: '100%',
    height: 130,
  },
  foodContainer: {
    borderRadius: 12,
    justifyContent: 'center',
    padding: 10,
  },
  category: {
    marginTop: 15,
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryField: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  titleFood: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  nameFood: {
    color: 'grey',
  },
  caloriesFood: {
    color: 'red',
    paddingLeft: 5,
  },
  foodPrice: {
    fontWeight: 'bold',
    fontSize: 21,
    color: 'black',
    marginRight: 15,
  },
  moneyIcon: {
    fontSize: 20,
    marginTop: 5,
  },
});

export default Search;
