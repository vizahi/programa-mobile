import { FlatList, View, Text } from "react-native";

// const dados = [
//     {key:1,nome:"Vívian",nota:9.3},
//     {key:2,nome:"Lucas",nota:9},
//     {key:3,nome:"Victor",nota:9.5},
//     {key:4,nome:"Lázaro",nota:8.1},
//     {key:5,nome:"Gamal",nota:7.3},
//     {key:6,nome:"Amara",nota:3.9},
//     {key:7,nome:"Vívian",nota:9.3},
//     {key:8,nome:"Lucas",nota:9},
//     {key:9,nome:"Victor",nota:9.5},
//     {key:10,nome:"Lázaro",nota:8.1},
//     {key:11,nome:"Gamal",nota:7.3},
//     {key:12,nome:"Amara",nota:3.9}
// ]

const dados = [
    {nome:"Vívian",nota:9.3},
    {nome:"Lucas",nota:9},
    {nome:"Victor",nota:9.5}
]

const MyFlatList = () =>{
    return(
        <View
            style={{
                flex:1,
                justifyContent:"flex-start",
                alignItems:"center",
                marginTop:20
            }}
        >
            <FlatList
             data={dados}
             renderItem={
                ({item})=>{
                    return (
                        <View>
                            <Text style={{fontSize:25, fontWeight:"bold"}}>
                                {item.nome} - {item.nota}
                            </Text>
                        </View>
                    )
                }
             }

             keyExtractor={
                (elemento)=>{
                    return elemento.nome + elemento
                }
             }

            />

        </View>
    )
}

export default MyFlatList