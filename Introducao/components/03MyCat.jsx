import { View, Text } from "react-native";

//JSX é uma sintaxe que permite que você escreva elementos dentro do JavaScript


const MyCat = () =>{
    let nomeDoGato = "Lua"

    const getFullName = (primeiroNome, segundoNome) =>{
        return primeiroNome + " " + segundoNome
    }

    return(
        <View>
            <Text>O nome da minha gata é {getFullName("Lua","Perigosa")}</Text>
        </View>
    )
}

export default MyCat