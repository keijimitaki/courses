package com.example.app00.screens

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import androidx.navigation.compose.rememberNavController
import com.example.app00.DummyData
import com.example.app00.components.DetailAppBar
import com.example.app00.model.FoodShop

@Composable
fun DetailScreen(navController: NavController, foodShop: FoodShop){

    val scaffoldState = rememberScaffoldState()
    val coroutineScope = rememberCoroutineScope()
    val scrollState = rememberScrollState()

    Scaffold(
        scaffoldState = scaffoldState,
        topBar = { DetailAppBar(scaffoldState, coroutineScope, navController) },
    ) {

        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 48.dp, vertical = 48.dp),

            ) {

            Row(
                modifier = Modifier.padding(top = 24.dp, bottom = 16.dp)
            ) {
               Column(
                   modifier = Modifier.padding(end = 8.dp)
               ) {
                   Text(text = "名前 : " , fontWeight = FontWeight.SemiBold , fontSize = 20.sp)
               }
                Column() {
                    Text(text = "${foodShop.name}", fontSize = 20.sp )
                }
            }

            Row(
                modifier = Modifier.padding(top = 24.dp, bottom = 16.dp)
            ) {
                Column(
                    modifier = Modifier.padding(end = 8.dp)
                ) {
                    Text(text = "点数 : " , fontWeight = FontWeight.SemiBold, fontSize = 20.sp)
                }
                Column() {
                    Text(text = "${foodShop.rating}" , fontSize = 20.sp)
                }
            }

            Row(
                modifier = Modifier.padding(top = 24.dp, bottom = 16.dp)
            ) {
                Column(
                    modifier = Modifier.padding(end = 8.dp)
                ) {
                    Text(text = "ジャンル : " , fontWeight = FontWeight.SemiBold, fontSize = 20.sp)
                }
                Column() {
                    Text(text = "${foodShop.genre}" , fontSize = 20.sp)
                }
            }

            Row(
                modifier = Modifier.padding(top = 24.dp, bottom = 16.dp)
            ) {
                Column(
                    modifier = Modifier.padding(end = 8.dp)
                ) {
                    Text(text = "最終利用 : " , fontWeight = FontWeight.SemiBold, fontSize = 20.sp)
                }
                Column() {
                    Text(text = "${foodShop.lastUsedDate}" , fontSize = 20.sp)
                }
            }

            Row(
                modifier = Modifier.padding(top = 24.dp, bottom = 16.dp)
            ) {
                Column(
                    modifier = Modifier.padding(end = 12.dp)
                ) {
                    Text(text = "メモ : " , fontWeight = FontWeight.SemiBold, fontSize = 20.sp)
                }
                Column() {
                    Text(text = "${foodShop.memo}" , fontSize = 20.sp)
                }
            }

        }

    }


}

@Preview(showBackground = true)
@Composable
fun DetailScreenPreview() {
    val dummyData = DummyData()
    val FoodShop = dummyData.getFoodShop("c1")
    DetailScreen(rememberNavController(),FoodShop)
}