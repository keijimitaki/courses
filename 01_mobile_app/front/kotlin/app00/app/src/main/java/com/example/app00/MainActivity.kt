package com.example.app00

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.rememberScrollState
import androidx.compose.material.*
import androidx.compose.runtime.SideEffect
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import com.example.app00.components.AppContainer
import com.example.app00.components.DrawerMenu
import com.example.app00.components.HomeAppBar
import com.example.app00.components.HomeBottomMenu
import com.example.app00.ui.theme.App00Theme
import com.google.accompanist.systemuicontroller.rememberSystemUiController

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {

            val systemUiController = rememberSystemUiController()
            SideEffect {
                systemUiController.setStatusBarColor(Color.Black)
                systemUiController.setNavigationBarColor(Color.Black)
            }

            App00Theme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    //App()
                    AppContainer()
                }
            }
        }
    }
}

@Composable
fun App() {

    val scaffoldState = rememberScaffoldState()
    val coroutineScope = rememberCoroutineScope()
    val scrollState = rememberScrollState()


    Scaffold(
        scaffoldState = scaffoldState,
        topBar = { HomeAppBar(scaffoldState, coroutineScope) },
        drawerContent = {
            DrawerMenu(scrollState)
        },
        bottomBar = { HomeBottomMenu()}
    ) {
//        LazyColumn{
//            items(count = 0){
//                    index ->
//                Text(text = "Index @ $index")
//                Divider()
//            }
//        }
    }

}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    App00Theme {
        App()
    }
}