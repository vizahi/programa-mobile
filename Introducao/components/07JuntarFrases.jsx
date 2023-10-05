import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const JuntarFrases = () => {
    
    const [frase1, setFrase1] = useState("")
    const [frase2, setFrase2] = useState("")
    const [frase3, setFrase3] = useState("Resultado")

    return (
        <View style={estilos.view}>
            <Text style={estilos.header}>Junte suas Frases!</Text>
            <TextInput 
                style={estilos.input}
                placeholder="Digite seu nome"
                defaultValue={frase1}
                onChangeText={(textoDigitado)=>setFrase1(textoDigitado)}
            />
            <TextInput 
                style={estilos.input}
                placeholder="Digite seu sobrenome"
                defaultValue={frase2}
                onChangeText={(textoDigitado)=>setFrase2(textoDigitado)}
            />
            <View style={{width:300, height:100, fontSize:100,padding: 30, borderColor:"black", backgroundColor:"grey"}}>
                <Button
                    title="Juntar"
                    onPress={
                        ()=> setFrase3(frase1 + " " + frase2)
                    }
                   
                />
            </View>
            <Text style={estilos.frase}>
                    {frase3}
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
        margin:10,
        padding:20,
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

export default JuntarFrases