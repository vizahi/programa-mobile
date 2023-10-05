import { View, Text, SectionList, StyleSheet } from "react-native";

const dados = [
    {  
        title: "V", data:[
            { nome: "Vívian", id: 1},
            { nome: "Victor", id: 2}
        ]
    },
    {  
        title: "L", data:[
        { nome: "Lucas", id: 3},
        { nome: "Levi", id: 4}
        ]
    },
    {  
        title: "M", data:[
        { nome: "Maria", id: 5},
        { nome: "Mário", id: 6}
        ]
    }

]

const MySectionList = () =>{
    return(
        <View style={estilos.container}>
            <SectionList
                sections={dados}
                keyExtractor={(item)=> item.id + item}
                renderItem={
                    ({item})=>{
                        return (
                            <Text>
                                {item.nome}
                            </Text>
                        )
                    }
                }
                renderSectionHeader={
                    ({section})=>{
                        return(
                            <Text>{section.title}</Text>
                        )
                    }
                }
            />
        </View>

    )
}

const estilos = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        paddingTop:25
    },
})

export default MySectionList