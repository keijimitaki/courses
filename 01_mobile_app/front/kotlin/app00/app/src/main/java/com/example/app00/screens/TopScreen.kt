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
import com.example.app00.DummyData
import com.example.app00.components.DrawerMenu
import com.example.app00.components.HomeAppBar
import com.example.app00.components.HomeBottomMenu
import com.example.app00.model.FoodShop

@Composable
fun TopScreen(navController: NavController){

    val scaffoldState = rememberScaffoldState()
    val coroutineScope = rememberCoroutineScope()
    val scrollState = rememberScrollState()

    val dummyData = DummyData()
    val foodShopList = dummyData.getAllFoodShops()

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
                            .padding(vertical = 16.dp , horizontal = 24.dp)
                            .fillMaxWidth()
                            .clickable {
                                navController.navigate(route = "Detail/${foodShopList[index].id}")
                            },
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.SpaceBetween,

                        ) {
                        Text(text = foodShopList[index].name, fontWeight = FontWeight.SemiBold)
                        Text(text = "点数 : ${foodShopList[index].rating}")
                    }
                    Row(
                        modifier = Modifier
                            .padding(vertical = 8.dp , horizontal = 24.dp)
                            .fillMaxWidth()
                            .clickable {
                                navController.navigate(route = "Detail/${foodShopList[index].id}")
                            },
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.SpaceBetween,

                        ) {
                        Text(text = "ジャンル : ${foodShopList[index].genre}")
                        Text(text = "最終利用 : ${foodShopList[index].lastUsedDate}")
                    }
                    Row(
                        modifier = Modifier
                            .padding(top = 8.dp, bottom = 32.dp)
                            .fillMaxWidth()
                            .clickable {
                                navController.navigate(route = "Detail/${foodShopList[index].id}")
                            },
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.SpaceBetween,

                        ) {
                        foodShopList[index].memo?.let { it1 -> Text(text = it1) }
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