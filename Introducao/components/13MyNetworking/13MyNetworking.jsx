import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import estilos from "./13Estilos";

const MyNetworking = () =>{

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [movies, setMovies] = useState([])

    //hook que é chamado toda vez que uma determinada ação acontece em uma variável de estado, então ele causa um efeito.
    useEffect(
        ()=>{
            getMovies()
        }
        ,
        []
    )

    const getMovies = () =>{
        //promessa pode dar certo ou errado
        fetch("https://reactnative.dev/movies.json")
        .then(response =>response.json())
        //o nome dados pode ser qualquer um e nesse caso pode ser substituido por ({title})
        .then(dados =>{
            setTitle(dados.title)
            setDescription(dados.description)
            setMovies(dados.movies)
        })
        .catch(error=>console.log(error))
    }
    
    return (
        <View style={estilos.container}>
            <Text style={estilos.header}>{title}</Text>
            <Text style={estilos.description}>{description}</Text>
            <FlatList
            style={{width:"100%"}}
            data={movies}
            renderItem={
                ({item})=>{
                    return(
                        <View style={{flex:1,flexDirection:"row", padding:10}}>
                            <View>
                                <Text style={{fontSize:25, fontWeight:"bold"}}>{item.id}</Text>
                            </View>
                            <View>
                                <Text>Título: {item.title}</Text>
                                <Text>Ano de Lançamento: {item.releaseYear}</Text>
                            </View>
                        </View>
                    )
                }
            }
            />
        </View>
        
    )
}

export default MyNetworking