import { View } from "react-native";
import dados from "../Dados";
import estiloP from "../EstiloP";

const Questao2 = ({navigation}) =>{

    // const {dados} = route.params
    // const [dados1, setDados] = useState({})

    // useEffect(
    //     ()=>{
    //         fetchDados()
    //     }
    //     ,
    //     []
    // )

    // const fetchDados = () =>{
    //     fetch(dados)
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         const compra = {
    //             nome:data.nome,
    //             horario:data.horario,
    //             valor:data.valor,
    //         }
    //         setDados(compra)
            
    //     })
    //     .catch(error=>console.log(error))
    // }

 return(
    <View style={estiloP.container} 
    >
        <Text>TELA MODAL</Text>
        {/* <Text style={{fontSize:25,}}>{dados1.compra}</Text> */}
        <Button
            title="FECHAR MODAL"
            onPress={()=> navigation.goBack()}
        />
    </View>
 )
}

export default Questao2