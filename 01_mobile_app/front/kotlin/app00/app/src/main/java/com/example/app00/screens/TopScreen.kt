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
                            .padding(10.dp)
                            .fillMaxWidth()
                            .clickable {
                                navController.navigate(route = "Detail/${foodShopList[index].id}")
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