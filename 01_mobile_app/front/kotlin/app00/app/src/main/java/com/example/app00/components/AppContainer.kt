package com.example.app00.components

import androidx.compose.runtime.Composable
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.example.app00.DummyData
import com.example.app00.screens.DetailScreen
import com.example.app00.screens.TopDummyScreen
import com.example.app00.screens.TopScreen

@Composable
fun AppContainer(){
    val navController = rememberNavController()
    val dummyData = DummyData()
    NavHost(navController = navController, startDestination = "Top"){
        composable(route = "Top") {
            TopScreen(navController = navController)
        }
        composable(route = "TopDummy"){
            TopDummyScreen(navController = navController)
        }
        composable(route = "Detail/{shopId}",
            arguments = listOf(navArgument("shopId"){type = NavType.StringType})
            ){
            NavBackStackEntry ->
            val shopId = NavBackStackEntry.arguments?.get("shopId")
            val foodShop =  dummyData.getFoodShop(shopId.toString())
            DetailScreen(navController = navController ,foodShop)
        }
    }
}
