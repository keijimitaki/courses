import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { TopPage } from './screens/TopPage';
import { DetailPage } from './screens/DetailPage';
import { SummaryPage } from './screens/SummaryPage';
import { SettingPage } from './screens/SettingPage';
import { DrawerContents } from './components/DrawerContents';

import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return (
    
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={TabMenu1} />
      <Tab.Screen name="Tab2" component={TabMenu2} />
      <Tab.Screen name="Drawer" component={DrawerScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>

   

  );
}


// drawer menu
function DrawerMenu1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function DrawerMenu2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>

        <StatusBar
          backgroundColor="white"
          translucent={true}
        />

          <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#718355' }
            ,headerTintColor: '#E9F5DB'
            ,contentStyle: { backgroundColor: 'white' }
          }}>

          <Stack.Screen
            name="Drawer"
            component={DrawerContents}
            options={{ 
              title:'All Categories',
              headerShown: false }}
          />
          <Stack.Screen name="Detail" component={DetailPage} />
    
        </Stack.Navigator>
      
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
