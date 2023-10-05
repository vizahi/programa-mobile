import { useState } from "react";
import { View, Text, Button } from "react-native";
//para o react a modificação da variável local não significa que essa mudança será renderizada

const State = () =>{
    //let contador = 0
    const [contador, setContador] = useState(0)

    return(
        <View>
            <Text style={{fontSize:25,fontWeight:"bold"}}>
                Contador:{contador}
            </Text>
            <Button
                title="CONTAR + 1"
                onPress={
                    ()=>{
                        //contador+=1
                        // setContador(contador+1)
                        setContador(prev => prev + 1)
                    }
                }
            />
        </View>
    )
}

export default State