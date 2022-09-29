package com.example.app00.screens

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.lazy.LazyColumn
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
import com.example.app00.components.DrawerMenu
import com.example.app00.components.HomeAppBar
import com.example.app00.components.HomeBottomMenu

@Composable
fun TopScreen(navController: NavController){

    val scaffoldState = rememberScaffoldState()
    val coroutineScope = rememberCoroutineScope()
    val scrollState = rememberScrollState()

    Scaffold(
        scaffoldState = scaffoldState,
        topBar = { HomeAppBar(scaffoldState, coroutineScope) },
        drawerContent = {
            DrawerMenu(scrollState)
        },
        bottomBar = { HomeBottomMenu() }
    ) {
        LazyColumn{
            items(count = 50){
                    index ->
                Column(modifier = Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally) {
                    Text(text = "Index @ $index", fontWeight = FontWeight.SemiBold)
                    Button(onClick = {
                        navController.navigate(route = "Detail")
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