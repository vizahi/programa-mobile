import { NavigationContainer } from "@react-navigation/native";
//Native Stack: performace nativa, pode não ser tão customizável
//Stack: não tem funcionalidades nativas, mais customização

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen01 from "./Screen01";
import Screen02 from "./Screen02";
import Screen03 from "./Screen03";

//pilha
const Stack = createNativeStackNavigator()

const MainScreen = () =>{
    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Screen01" component={Screen01} options={{title:"Tela 01"}}/>
            <Stack.Screen name="Screen02" component={Screen02} options={{title:"Tela 02"}}/>
            <Stack.Screen name="Screen03" component={Screen03} 
            options={{title:"Tela 03",
            headerStyle:{
                backgroundColor:"#f45100"
            },
            headerTintColor: "#fff",
            headerTitleStyle:{
                fontWeight:"bold",

            }
            }}/>
        </Stack.Navigator>

    </NavigationContainer>

    )
    
}

export default MainScreen