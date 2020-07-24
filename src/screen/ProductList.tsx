import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Category from '../components/CategoryList';
import Product from '../components/Product';
import {Icon} from 'native-base';
import {host} from "../constants/host";
import {useSelector} from "react-redux";
import {useNavigation} from '@react-navigation/native';

interface Login {
  login: {
    jwtToken: string,
  }
}

interface Category {
  categoryId: number,
  categoryName: string,
  categoryImage: string,
}
interface Product {
  productId: number,
  productName: string,
  shortDescription: string,
  detail: string,
  calories: number,
  price: number,
  productImage: string,
  timeToMake: number,
  categoryId: number,

}

const ProductListScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchText, setSearchText] = useState('');
  const user = useSelector((state: Login) => state.login);
  const navigation = useNavigation();
  const displayArray = products.map((item) => (
    <View key={item.productId}>
      <Product
        product={item}
      />
    </View>
  ));

  useEffect(() => {
    const getCategories = () => {
      fetch(host + '/api/v1/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + user.jwtToken,
        },
      })
          .then((response) => response.json())
          .then(async (data) => {
            await setCategories(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    };
    const getProducts = () => {
      if (selectedCategory === 0) {
        fetch(host + '/api/v1/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + user.jwtToken,
          },
        })
            .then((response) => response.json())
            .then(async (data) => {
              await setProducts(data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
      } else {
        fetch(host + '/api/v1/categories/' + selectedCategory + '/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + user.jwtToken,
          },
        })
            .then((response) => response.json())
            .then(async (data) => {
              await setProducts(data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
      }
    };
    getCategories();
    getProducts();
  }, [selectedCategory]);

  const categoriesList = () => {
    const thisCategoriesList = categories.map((item) => {
      return (
        <Category
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          categoryId={item.categoryId}
          key={item.categoryId}
          imgUri={item.categoryImage}
          name={item.categoryName}
        />
      );
    });
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {thisCategoriesList}
      </ScrollView>
    );
  };

  const onSearch = () => {
    navigation.navigate("Search", {
      searchTextTemp: searchText,
    });
  };
  const onUser = () => {
    navigation.navigate("User");
  };
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.flexbox}>
        <TouchableOpacity onPress={onUser} style={styles.box2}>
          <Icon
            name="user"
            onPress={() => navigation.navigate("User")}
            type="Feather"
            style={{fontSize: 20, color: '#FFFFFF'}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 35,
        }}>
        <Text style={styles.topText}>Lets eat</Text>
        <Text style={styles.topText}>Quality food 😋</Text>
      </View>
      <View style={styles.flex}>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../images/search.png')}
            style={styles.ImageStyle}
          />
          <TextInput
            placeholder="Search food"
            onSubmitEditing={onSearch}
            style={styles.textInput} value={searchText}
            onChangeText={(value) => setSearchText(value)}/>
        </View>
      </View>
      <View style={{marginTop: 20, marginRight: 20}}>
        {categoriesList()}
      </View>
      <View style={{marginTop: 15, marginRight: 20}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {displayArray}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box1: {
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFC529',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    height: 55,
    width: 250,
    borderRadius: 15,
    backgroundColor: '#e3e3e3',
  },
  searchOption: {
    marginRight: 0,
    borderRadius: 0,
    width: 55,
    height: 55,
    backgroundColor: '#FFC529',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    marginLeft: 20,
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexbox: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  topText: {
    fontSize: 35,
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  SectionStyle: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
    // borderWidth: 1,
    // borderColor: 'red',
    height: 55,
    borderRadius: 15,
  },
  ImageStyle: {
    padding: 10,
    marginLeft: 15,
    marginRight: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  categoryStyle: {
    borderWidth: 1,
    borderColor: '#FFC529',
    width: 125,
    height: 55,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
});

export default ProductListScreen;
