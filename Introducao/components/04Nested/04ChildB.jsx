import { View, Text, TextInput } from "react-native";
//props para aumentar a coesão e diminuir o acoplamento

const ChildB = ({dica}) => {
    return(
        <View>
            <TextInput
            style={{
                height:40,
                borderColor:"gray",
                borderWidth:1,
            }}
            placeholder={dica}
        />
        </View>
    )

}

export default ChildB;