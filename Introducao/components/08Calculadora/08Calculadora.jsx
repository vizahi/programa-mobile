import { View,Text, TextInput, Button } from "react-native";
import { useState } from "react";
import estilos from "./08CSS";
import MyPressable from "./08MyPressable";

const Calculadora = () =>{

    const [number1, setNumber1] = useState("0")
    const [number2, setNumber2] = useState("0")
    const [result, setResult] = useState("")

    function somar() {
        setResult(parseInt(number1) + parseInt(number2))
    }

    function subtrair() {
        setResult(parseInt(number1) - parseInt(number2))
    }

    function multiplicar() {
        setResult(parseFloat(number1) * parseFloat(number2))

    }
    function dividir() {
        setResult( (parseFloat(number1) / parseFloat(number2)).toFixed(2) )

    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.header}>
                CALCULADORA 0.1
            </Text>
            <TextInput
                style={estilos.input}
                onChangeText={(numero)=>setNumber1(numero)}
                keyboardType="numeric"
            />
            <TextInput
                style={estilos.input}
                onChangeText={(numero)=>setNumber2(numero)}
                keyboardType="numeric"
            />
            <View style={estilos.containerBotoes}>
                <Button title="SOMAR" onPress={somar}/>
                <Button title="SUBTR" onPress={subtrair}/>
                <Button title="MULTI" onPress={multiplicar}/>
                <Button title="DIVID"onPress={dividir}/>
            </View>
            <View style={estilos.containerBotoes}>

            <MyPressable funcao={somar} titulo={"Somar"}/>
            <MyPressable funcao={subtrair} titulo={"Subtrair"}/>
            <MyPressable funcao={multiplicar} titulo={"Multiplicar"}/>
            <MyPressable funcao={dividir} titulo={"Dividir"}/>

            </View>


            <Text>Resultado:{result}</Text>
        </View>
    )
}

export default Calculadora