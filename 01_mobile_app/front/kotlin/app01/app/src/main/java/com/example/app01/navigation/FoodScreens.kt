package com.example.app01.navigation

import java.lang.IllegalArgumentException

enum class FoodScreens {
    HomeScreen,
    DetailsScreen;
    companion object {
        fun fromRoute(route: String?): FoodScreens
        = when (route?.substringBefore("/")){
            HomeScreen.name -> HomeScreen
            DetailsScreen.name -> DetailsScreen
            null -> HomeScreen
            else -> throw IllegalArgumentException("Route $route is not recognized")
        }
    }

}