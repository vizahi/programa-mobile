import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const MyTextInput = () => {
    
    const [frase, setFrase] = useState("")

    return (
        <View style={estilos.view}>
            <Text style={estilos.header}>Tradutor de Emojis</Text>
            <TextInput 
                style={estilos.input}
                placeholder="Digite uma frase"
                defaultValue={frase}
                onChangeText={(textoDigitado)=>setFrase(textoDigitado)}
            />
            <Text style={estilos.frase}>
                {
                frase
                .split(" ")
                //aqui ele testa se palavra existe, ao invés de colocar if coloca palavra &&
                .map((palavra)=> palavra && "😂")
                .join("  ")
                }
            </Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    header:{
        fontSize:40,
        fontWeight:"bold",
        color:"red",
        paddingBottom:20
    },
    view: {
        flex:1,
        alignItems:"center",
        padding: 20,
        backgroundColor: "#C0C0C0"
    },
    input: {
        height: 60,
        width:300,
        borderColor: "black",
        borderWidth: 2,
        paddingLeft:20,
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 10
        
    },
    frase:{
        fontSize:20,
        fontWeight:"bold",
        paddingTop:40
    }
})

export default MyTextInput