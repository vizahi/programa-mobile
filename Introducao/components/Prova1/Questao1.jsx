import { View, SectionList, Text, Button} from "react-native";
import dados from "./Dados";
import estiloP from "./EstiloP";
import Questao2 from "./PrintsProva/Questao2";

const Questao1 = ({navigation}) =>{
    return(
        <View style={estiloP.container}>
            <SectionList
            sections={dados}
            keyExtractor={(item)=> item.id + item}
            renderItem={
                ({item})=>{
                    return (
                        <View style={estiloP.header}>
                        <Text style={estiloP.text}>        
                                             
                            {item.nome}
                            {item.horario}
                            {item.valor}
                        </Text>
                        <Button
                            title={item.icon}
                            onPress={()=>navigation.navigate("Questao2")}
                        />
                        </View>
                        
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

export default Questao1