package com.example.app00.screens

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.rememberScrollState
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import androidx.navigation.compose.rememberNavController
import com.example.app00.components.DrawerMenu
import com.example.app00.components.HomeAppBar
import com.example.app00.components.HomeBottomMenu
import com.example.app00.model.FoodShop

@Composable
fun TopScreen(navController: NavController){

    val scaffoldState = rememberScaffoldState()
    val coroutineScope = rememberCoroutineScope()
    val scrollState = rememberScrollState()

    val foodShopList = listOf(
        FoodShop("c1", "河童ラーメン本舗 枚方店", "麺","2021-05-05", rating = 3.5, "テスト" ),
        FoodShop("c2", "東京純豆腐 くずはモール店", "韓国料理",null, rating = null ,"" ),
        FoodShop("c3", "はま寿司 松井山手店", "寿司",null, rating = null ,""),
        FoodShop("c4", "香の川製麺 枚方招提店", "麺","2021-10-04", rating = 4.1 ,""),
        FoodShop("c5", "牛たん専門店せんり 枚方店", "和食",null, rating = null ,""),
        FoodShop("c6", "ふぐ・うなぎ料理 玄品 楠葉", "和食",null, rating = null ,""),
        FoodShop("c7", "とろ穴子と鰻 対馬厳原 枚方", "和食",null, rating = null ,""),
        FoodShop("c8", "インド料理 LUMBINI 枚方店", "インド料理","2021-08-20", rating = 4.0 ,""),
        FoodShop("c9", "オイスターハウスカイ", "イタリア料理",null, rating = null ,""),
        FoodShop("c10", "Basic Waffle", "デザート",null, rating = null ,""),
    )

    Scaffold(
        scaffoldState = scaffoldState,
        topBar = { HomeAppBar(scaffoldState, coroutineScope) },
        drawerContent = {
            DrawerMenu(scrollState)
        },
        bottomBar = { HomeBottomMenu() }
    ) {
            LazyColumn{
                items(count = foodShopList.size) { index ->
                    Row(
                        modifier = Modifier
                            .padding(10.dp)
                            .fillMaxWidth()
                            .clickable {
                                navController.navigate(route = "Detail")
                            },
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.SpaceBetween,

                        ) {
                        Text(text = foodShopList[index].name, fontWeight = FontWeight.SemiBold)
                        Text(text = "Index @ $index", fontWeight = FontWeight.SemiBold)
                    }


                    Column(modifier = Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally) {
                        Text(text = "Index @ $index", fontWeight = FontWeight.SemiBold)
                        Button(onClick = {
                            //navController.navigate(route = "Detail")
                        }) {
                            Text(text = "Go to Derail Screen")
                        }
                    }
                    Divider()
                }
        }

    }

}

@Preview(showBackground = true)
@Composable
fun TopScreenPreview() {
    TopScreen(rememberNavController())
}