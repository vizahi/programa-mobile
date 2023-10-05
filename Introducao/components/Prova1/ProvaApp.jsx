import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Questao1 from "./Questao1";
import Questao2 from "./PrintsProva/Questao2";


const NativeStack = createNativeStackNavigator()


const ProvaApp = () => {
    return (
    //vai criar um contexto que vai dizer todas as telas que fazem parte da navegação
    <NavigationContainer>
    {/* Dentro do Container estou usando o navegador tipo pilha: */}
    <NativeStack.Navigator>

        {/* ao trabalhar com modais precisamos de grupos */}
        {/* TELAS PRINCIPAIS */}
        <NativeStack.Group>
            <NativeStack.Screen name="Questao1" component={Questao1} />
        </NativeStack.Group>

        {/* TELAS MODAIS */}
        <NativeStack.Group screenOptions={{ presentation: "modal" }}>
            <NativeStack.Screen name="Questao2" component={Questao2} />
        </NativeStack.Group>

    </NativeStack.Navigator>

</NavigationContainer>
    )
}

export default ProvaApp