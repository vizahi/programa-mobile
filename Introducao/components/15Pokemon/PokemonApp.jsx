//as telas são empilhas, o modal aparece por cima, e obriga o usuário a tomar alguma atitude.

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "./PokedexScreen";
import PokemonModalScreen from "./PokemonModalScreen";

const NativeStack = createNativeStackNavigator()

const PokemonApp = () => {
    return (

        //vai criar um contexto que vai dizer todas as telas que fazem parte da navegação
        <NavigationContainer>
            {/* Dentro do Container vc esta usando o navegador tipo pilha: */}
            <NativeStack.Navigator>

                {/* ao trabalhar com modais precisamos de grupos */}
                {/* TELAS PRINCIPAIS */}
                <NativeStack.Group>
                    <NativeStack.Screen name="Pokedex" component={Pokedex} />
                </NativeStack.Group>

                {/* TELAS MODAIS */}
                <NativeStack.Group screenOptions={{ presentation: "modal" }}>
                    <NativeStack.Screen name="PokemonModal" component={PokemonModalScreen} />
                </NativeStack.Group>

            </NativeStack.Navigator>

        </NavigationContainer>
    )
}

export default PokemonApp