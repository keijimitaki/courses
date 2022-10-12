package com.example.app00.screens

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.rememberScrollState
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
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

        Column(modifier = Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally) {
            Text(text = "Detail Screen ${foodShop.name}" , fontWeight = FontWeight.SemiBold)
            Button(onClick = {
                navController.navigate(route = "Top")
            }) {
                Text(text = "Go to Top Screen")
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