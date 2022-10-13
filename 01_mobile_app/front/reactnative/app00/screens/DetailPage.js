
import * as React from 'react';
import { Text, View } from 'react-native';

export const DetailPage = ({ route }) => {

  const shop = route.params.shop;

  return (
    <View style={{ margin: 48 }}>
      <Text style={{ fontSize: 16, marginTop: 40 }}>
        <Text style={{ fontWeight: "bold" }}>名前 : </Text>    
        <Text>{shop.name}</Text>
      </Text>
      
      <Text style={{ fontSize: 16, marginTop: 40 }}>
        <Text style={{ fontWeight: "bold" }}>点数 : </Text>    
        <Text>{shop.rating}</Text>      
      </Text>

      <Text style={{ fontSize: 16, marginTop: 40 }}>
        <Text style={{ fontWeight: "bold" }}>ジャンル : </Text>    
        <Text>{shop.genre}</Text>      
      </Text>

      <Text style={{ fontSize: 16, marginTop: 40 }}>
        <Text style={{ fontWeight: "bold" }}>最終利用 : </Text>    
        <Text>{shop.lastUsedDate}</Text>      
      </Text>

      <Text style={{ fontSize: 16, marginTop: 40 }}>
        <Text style={{ fontWeight: "bold" }}>メモ : </Text>    
        <Text>{shop.memo}</Text>      
      </Text>

    </View>
  );
}
