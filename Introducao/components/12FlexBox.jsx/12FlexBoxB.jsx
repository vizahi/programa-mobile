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
        backgroundColor:"lightgray",
        //define como os itens vão preencher o espaço disponível
        //divide a tela proporcionalmente
        flex:1,
        //diz em que direção será organizado os elementos filhos
        flexDirection:"column",
        //obedece o flex direction, alinha em relação a coluna
        justifyContent:"flex-start",
        //ajusta na linha
        //alignSelf desobedece alignItens
        alignItems:"flex-start",
        //flexWrap, inicia uma nova coluna ao invés de estrapolar
    },
    view1:{
        backgroundColor:"steelblue",
        width:100,
        height:100
    },
    view2:{
        backgroundColor:"pink",
        width:100,
        height:100
    },
    view3:{
        backgroundColor:"powderblue",
        width:100,
        height:100
    },
})

export default MyFlexBox