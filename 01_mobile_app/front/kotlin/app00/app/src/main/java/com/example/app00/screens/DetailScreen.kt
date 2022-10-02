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
import com.example.app00.components.DetailAppBar
import com.example.app00.components.HomeBottomMenu

@Composable
fun DetailScreen(navController: NavController){

    val scaffoldState = rememberScaffoldState()
    val coroutineScope = rememberCoroutineScope()
    val scrollState = rememberScrollState()

    Scaffold(
        scaffoldState = scaffoldState,
        topBar = { DetailAppBar(scaffoldState, coroutineScope, navController) },
    ) {

        Column(modifier = Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally) {
            Text(text = "Detail Screen", fontWeight = FontWeight.SemiBold)
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
    DetailScreen(rememberNavController())
}