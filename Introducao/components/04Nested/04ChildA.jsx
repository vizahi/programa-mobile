import { View, Text, Image, TextInput } from "react-native";

const ChildA = () =>{
    return(
        <View style={{alignItems:"center"}}>
            <Image
                source={{uri:"https://www.quixada.ufc.br/wp-content/uploads/2015/05/Alisson-Barbosa-de-Souza1-225x300.png"}}
                style={{height:200,width:200}}
            >
            </Image>
        </View>

    )
}

export default ChildA