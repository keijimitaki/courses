package com.example.app00.components

import androidx.compose.runtime.Composable
import androidx.navigation.NavController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.app00.screens.DetailScreen
import com.example.app00.screens.TopDummyScreen
import com.example.app00.screens.TopScreen

@Composable
fun AppContainer(){
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = "Top"){
        composable(route = "Top") {
            TopScreen(navController = navController)
        }
        composable(route = "TopDummy"){
            TopDummyScreen(navController = navController)
        }
        composable(route = "Detail"){
            DetailScreen(navController = navController)
        }
    }
}
