
import * as React from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

export const SettingPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>セッティング</Text>
      <Button
        title="戻る"
        onPress={() => navigation.navigate('Summary')}
      />
    </View>      
  );
}
