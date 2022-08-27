package com.example.app01.screens.home

import android.util.Log
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CornerSize
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountBox
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.example.app01.navigation.FoodScreens

@Composable
fun HomeScreen(navController: NavController){
    Scaffold(topBar = {
        TopAppBar(backgroundColor = Color.Transparent, elevation = 0.dp) {
            Text(text = "Want Foods")
        }
    },) {
        MainContent(navController = navController)
    }
}

@Composable
fun MainContent(
    navController: NavController,
    foodList: List<String> = listOf(
    "和食",
    "中華",
    "焼肉",
    "ラーメン",
    "イタリアン",
    "海鮮",
    "パスタ",
    "ピザ"
)) {

    Column (modifier = Modifier.padding(12.dp)){
        LazyColumn {
            items(items = foodList) {
                FoodRow(food = it) { food ->
                    //Log.d("TAG" ,"MainContent: $food")
                    navController.navigate(route = FoodScreens.DetailsScreen.name+"/$food")
                }

            }
        }
    }
}

@Composable
fun FoodRow(food: String ,onItemClick: (String) -> Unit = {}){
    Card(modifier = Modifier
        .padding(4.dp)
        .fillMaxWidth()
        .height(130.dp)
        .clickable { onItemClick(food) },
        shape = RoundedCornerShape(corner = CornerSize(16.dp)),elevation = 6.dp) {
        Row(verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.Start) {
            Surface(modifier = Modifier
                .padding(12.dp)
                .size(100.dp),
                shape = RectangleShape,
                elevation = 4.dp) {
                Icon(imageVector = Icons.Default.AccountBox,
                    contentDescription = "Food Shop Image")
            }
            Text(text = food)
        }
    }

}

