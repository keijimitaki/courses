package com.example.app01.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.example.app01.screens.home.HomeScreen
import com.example.app01.screens.details.DetailsScreen


@Composable
fun FoodNavigation(){
    val navController = rememberNavController()
    NavHost(navController = navController
        , startDestination = FoodScreens.HomeScreen.name){
        composable(FoodScreens.HomeScreen.name){
            HomeScreen(navController = navController)
        }

        composable(FoodScreens.DetailsScreen.name+"/{food}",
            arguments = listOf(navArgument(name="food"){
                type = NavType.StringType
            })){
            backStackEntry ->
            DetailsScreen(navController = navController ,backStackEntry.arguments?.getString("food"))
        }


    }
}
