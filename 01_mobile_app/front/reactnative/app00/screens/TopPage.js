
import * as React from 'react';
import { StyleSheet, Text, View, Pressable, SafeAreaView, FlatList } from 'react-native';
import { FOODSHOPS } from '../DummyData';

export const TopPage = ({ navigation }) => {
  
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
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 8,
      paddingRight: 8,
      marginHorizontal: 16,
    },

    header: {
      fontSize: 64,
      backgroundColor: "#fff"
    },




  });

  return (

    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={FOODSHOPS}
        keyExtractor={(item, index) => item + index}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={({ item }) => (
          <Pressable onPress={ (e) => {
            navigation.navigate('Detail',{'shop': item})
          }}>

            {/*
            https://reactnative.dev/docs/flexbox
            */}
            <View style={styles.container}>
              
              <View style={{flexDirection: "row" ,justifyContent: "space-between"}}>
                  <View><Text style={{ fontWeight: "bold" }} >{item.name}</Text></View>
                  <View><Text>点数: {item.rating}</Text></View>
              </View>

              <View style={{flexDirection: "row", marginTop: 16 }}>
                <View><Text>ジャンル: {item.genre}</Text></View>
                <View><Text style={{ marginLeft: 12 }} >最終利用: {item.lastUsedDate}</Text></View>
              </View>

              <View style={{marginTop: 16}}>
                  <Text>{item.memo}</Text>
              </View>

            </View>
          </Pressable>
        )}
      />

    </SafeAreaView>

  );
}

