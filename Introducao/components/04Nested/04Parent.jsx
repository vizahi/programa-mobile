import { View, Text } from "react-native";
import ChildA from "./04ChildA";
import ChildB from "./04ChildB";
//um componente Pai pode ser formado por vários componentes Filhos
//a variável de estado interfere na visualização do componente

const Parent = () => {
    return(
        <View> 
        <Text style={{fontSize:25,fontWeight:"bold"}}>
            Eu sou a componente Mãe
        </Text>
        <ChildA/>
        {/* criei a props chamada dica */}
        <ChildB dica="Escreva seu nome"/>
        <ChildB dica="Escreva seu sobrenome"/>
        <ChildB dica="Escreva seu endereço"/>
        </View>
    )
}

export default Parent