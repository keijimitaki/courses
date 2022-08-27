
import * as React from 'react';

import { StyleSheet, Text, View ,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Searchbar ,DataTable } from 'react-native-paper';

import { SettingPage } from './SettingPage';
import { SummaryPage } from './SummaryPage';

// import { SettingPage ,SummaryPage } from './screens';

export const TopPage = ({ navigation }) => {

  const optionsPerPage = [2, 3, 4];
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);


  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  // const [count, setCount] = React.useState(0);

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
  //     ),
  //   });
  // }, [navigation]);

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  const press = () => {
    window.alert('clicked');
  }

  return (
    
    <>
    
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
        
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Dessert</DataTable.Title>
        <DataTable.Title numeric>Calories</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row onPress={ press } >
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
    </DataTable>    

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
