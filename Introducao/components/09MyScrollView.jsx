import { View, Text, ScrollView, Image } from "react-native";

const imagem = {
    uri:"https://www.quixada.ufc.br/wp-content/uploads/2016/07/Diana-Medina-225x300.png",
    width:240,
    height:320
}

const MyScrollView = () => {
    return(
        // <View
        //     style={{
        //         flex:1,
        //         justifyContent:"flex-start",
        //         alignItems:"center",
        //         paddingTop:25
        //     }}
        // >
        //     <Text style={{fontSize:25,fontWeight:"bold"}}>Professora Diana</Text>
        //     <Image source={imagem}/>
        //     <Image source={imagem}/>
        //     <Image source={imagem}/>
        //     <Image source={imagem}/>
        // </View>
        <ScrollView>
            <View
            style={{
                        flex:1,
                        justifyContent:"flex-start",
                        alignItems:"center",
                        paddingTop:25
                    }}
            >

            
            <Text style={{fontSize:25,fontWeight:"bold"}}>Professora Diana</Text>
            <Image source={imagem}/>
            <Image source={imagem}/>
            <Image source={imagem}/>
            <Image source={imagem}/>
            </View>
        </ScrollView>
    )
}

export default MyScrollView