package com.example.app00

import com.example.app00.model.FoodShop



class DummyData {

    val foodShopList = listOf(
        FoodShop("c1", "河童ラーメン本舗 枚方店", "麺", rating = 3.5,"2021-05-05", "テスト" ),
        FoodShop("c2", "東京純豆腐 くずはモール店", "韓国料理",null, null ,"" ),
        FoodShop("c3", "はま寿司 松井山手店", "寿司",null, null ,""),
        FoodShop("c4", "香の川製麺 枚方招提店", "麺",rating = 4.1 ,"2021-10-15","子供のうどん打ち体験イベントがある。その時を狙え！"),
        FoodShop("c5", "牛たん専門店せんり 枚方店", "和食",null, null ,""),
        FoodShop("c6", "ふぐ・うなぎ料理 玄品 楠葉", "和食",null, null ,""),
        FoodShop("c7", "とろ穴子と鰻 対馬厳原 枚方", "和食",null, null,""),
        FoodShop("c8", "インド料理 LUMBINI 枚方店", "インド料理", rating = 4.0 ,"2021-08-20",""),
        FoodShop("c9", "オイスターハウスカイ", "イタリア料理",null, null ,""),
        FoodShop("c10", "Basic Waffle", "デザート",null, null ,""),
    )

    fun getAllFoodShops(): List<FoodShop>{
        return foodShopList
    }

    fun getFoodShop(shopId: String): FoodShop{
        return foodShopList.first{ it.id.equals(shopId) }
    }

}