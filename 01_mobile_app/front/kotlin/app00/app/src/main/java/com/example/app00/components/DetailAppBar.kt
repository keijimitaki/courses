package com.example.app00.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Menu
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.example.app00.App
import com.example.app00.R
import com.example.app00.ui.theme.App00Theme
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch

@Composable
fun DetailAppBar(scaffoldState: ScaffoldState, scope: CoroutineScope, navController: NavController) {
    Box(modifier = Modifier.padding(0.dp),
            ){
        Card(modifier = Modifier.requiredHeight(50.dp),
            shape = RoundedCornerShape(2.dp), elevation = 0.dp) {
            Row(verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier
                    .fillMaxSize()
                    .padding(0.dp)
                    .background(color = Color(113,131,85)),
                ) {
                IconButton(onClick = {
                    scope.launch {
                        navController.navigate(route = "Top")
                    }
                }

                ) {
                    Icon(Icons.Default.ArrowBack, contentDescription = "Menu",
                        tint = Color(233,245,219))

                }

                Text(text = "Food ", modifier = Modifier.weight(2.0f) )

            }
        }
    }
}
