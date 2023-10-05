import { View, Text, StyleSheet } from "react-native";

const MyFlexBox = () =>{
    return(
        <View style={estilos.container}>
            <View style={estilos.view1}></View>
            <View style={estilos.view2}></View>
            <View style={estilos.view3}></View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        marginTop:25,
        backgroundColor:"red",
        //define como os itens vão preencher o espaço disponível
        //divide a tela proporcionalmente
        flex:1,

    },
    view1:{
        backgroundColor:"green",
        flex:1
    },
    view2:{
        backgroundColor:"pink",
        flex:2
    },
    view3:{
        backgroundColor:"blue",
        flex:1
    },
})

export default MyFlexBox