import React from "react";
import { View, Text} from "react-native";

type Questao03Props = {
    cor: string;
  };

const Questao03 = (props:Questao03Props) => {
    return (
        <View style={{ alignItems: "center" }}>
            <Text style={{ color: props.cor }}>
                Projeto de Interfaces para Dispositivos Móveis, Desenho I, Ux, e Ética.
            </Text>
        </View>
    )
}

export default Questao03