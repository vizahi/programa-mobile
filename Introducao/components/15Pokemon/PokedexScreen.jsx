import {View, Text, Button, FlatList, ScrollView, Image} from "react-native"
import { useState, useEffect } from "react"
import PokeButton from "./PokeButton"

const Pokedex = ({navigation}) =>{

    const [pokemons, setPokemons] = useState([])
    
    useEffect(
        () => {
            fetchPokemons()
        }
        ,
        //lista de variáveis de estado que disparam esse efeito
        //se deixar a lista vazia o efeito será sempre disparado quando o componente é inicializado, recarregado.
        //funciona como um construtor
        []
    )
    
    //primeira coisa é pegar os dados da internet
    const fetchPokemons = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
        .then(response => response.json())
        .then(
            json => {

                //let id = 0
                //map é um laço que vai modificar cada elemento do vetor
                //segundo pega o vetor que vem da internet e transforma em um novo vetor só pra ter um id
                const vetorFormatado = json.results.map(
                    ({name, url}) => {
                        return {id: url.split("/")[6],name, url}
                    }
                )// map termina aqui
                // console.log(vetorFormatado[0].id[6])
                //para usar as imagens preciso dos id's
                // console.log(vetorFormatado)
                setPokemons(vetorFormatado)
            }
        )  
        .catch(error => console.log(error))
    }

    //terceiro renderizar o vetor([]json-->[]jsx)
    const renderPokemons = () =>{
        return(
            <ScrollView style={{width:"95%"}}>
                <View style={{
                    flex:1, 
                    flexDirection:"row", 
                    justifyContent:"space-evenly",
                    //para pular linha use flexWrap
                    flexWrap: "wrap"
                    }}>
                    {/* implementando flatlist sem o flat list para tentar renderizar um ao lado do outro*/}
                    {
                        //renderizando os pokemons
                        //o map retorna um vetor
                        pokemons.map(
                            //pega cada objeto json e transforma em um objeto jsx
                            (pokemonObj) =>{
                                return(
                                    //vai sair um vetor de componentes jsx
                                    <View style={{
                                        margin:2,
                                        marginBottom:15,
                                        backgroundColor:"antiquewhite",
                                        padding:2,
                                        alignItems:"center",
                                        width:100,
                                        borderColor:"brown",
                                        borderWidth:2,
                                        borderRadius:5
                        

                                    }}>
                                        <Text style={{fontWeight:"bold", fontSize:10,}}>{pokemonObj.name.toUpperCase()}</Text>
                                        <Image
                                            source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonObj.id}.png`}}
                                            style={{width:60, height:60}}
                                        />
                                        <PokeButton
                                            title="Detalhes"
                                            onPress= {
                                                ()=>{
                                                    //passar pro modal as informações
                                                    navigation.navigate("PokemonModal",{url:pokemonObj.url})
                                                }
                                            }
                                        />
                                    </View>

                                )
                            }
                        )
                    }
                </View>
            </ScrollView>
        )
    }

    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text 
                style={{fontSize:25, fontWeight:"bold", margin:10, color:"orange"}}
            >
                Pokedex Screen
            </Text>
            {/* <Button
                title="ABRIR MODAL"
                onPress={()=>navigation.navigate("PokemonModal")}
            /> */}
            {/* <FlatList
                data={pokemons}
                renderItem={
                    ({item})=>{
                        return(
                        <Text>
                            {item.name}
                        </Text>
                        )
                    }
                }
            /> */}
            {renderPokemons()}
        </View>
    )
}

export default Pokedex