
import React, {useState, useEffect} from 'react';

import { StyleSheet, Text, View ,Button, SafeAreaView, SectionList, StatusBar, FlatList,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { SettingPage } from './SettingPage';
import { SummaryPage } from './SummaryPage';

// import { SettingPage ,SummaryPage } from './screens';

export const TopPage = ({ navigation }) => {


  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    },
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }    
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const press = () => {
    window.alert('clicked');
  }

  //search box 
  // https://snack.expo.dev/embedded/@aboutreact/react-native-search-bar-filter-on-listview?preview=true&platform=ios&iframeId=qn4os3zz2g&theme=dark
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const [searchText, onChangeSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  


  useEffect(() => {
    const filtered = DATA.filter(item =>
      item.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    if (searchText === '') {
      return setFilteredData(DATA);
    }

    setFilteredData(filtered);
  }, [searchText]);
  
  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
    navigation.navigate('Detail')
    
  };

  //search box end


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24
    },
    textInputStyle: {
      height: 40,
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      borderColor: '#009688',
      backgroundColor: '#FFFFFF',
    },

  });

  
  return (
    
    <>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />

      <TextInput
        style={{
          height: 50,
          borderColor: '#919191',
          borderWidth: 1,
          margin: 10,
          paddingLeft: 15,
          borderRadius: 10,
        }}
        onChangeText={newText => onChangeSearch(newText)}
        placeholder="Axtaris..."
      />
    <TextInput inlineImageLeft="search_icon" />
    
        
    <SafeAreaView style={styles.container}>

    <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />


    <FlatList
      // sections={DATA}
      data={DATA}
      keyExtractor={(item, index) => item + index}
      ItemSeparatorComponent={ItemSeparatorView}
      renderItem={({ item }) => (
          <View>
            <Text style={{ color: 'green' }}>{item.title}</Text>
            <Text style={{ color: 'red' }} onPress={ (e) => {alert(e)} }>{item.data}</Text>
          </View>
        )}
      // renderSectionHeader={({ section: { title } }) => (
      //   <Text style={styles.header} onPress={ (e)=>{ alert(e)} }>{title}</Text>
      // )}
    />
    </SafeAreaView>



      <Tab.Navigator initialRouteName="Summary" 
        screenOptions={{
          tabBarStyle: { color: 'white' ,backgroundColor: '#718355' }
          ,tabBarActiveTintColor: 'white'
          ,tabBarInactiveTintColor: '#E9F5DB'
      }}
      >
        <Tab.Screen name="Summary" component={SummaryPage} options={{ fontSize: '21px' ,textColor: 'white', headerShown: false }}/>
        <Tab.Screen name="Settings" component={SettingPage} options={{ textColor: 'white', headerShown: false }}/>
      </Tab.Navigator>

    </>




  );



  
}


// https://stackoverflow.com/questions/71832806/search-from-list-in-react-native

