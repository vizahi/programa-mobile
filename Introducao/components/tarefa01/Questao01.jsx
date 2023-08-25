import React, { useState } from "react";
import { View, Text, Image, Button } from "react-native";

const Questao01 = () => {

    const [Imagem, setImagem] = useState(true);

    const imagens = Imagem ? 'https://img.freepik.com/vetores-gratis/gato-bonito-jogando-bola-de-fios-dos-desenhos-animados-ilustracao-em-vetor-icone-conceito-de-icone-de-natureza-animal-isolado-de-vetor-premium-estilo-de-desenho-animado-plano_138676-4169.jpg?w=2000' : 'https://static.vecteezy.com/ti/vetor-gratis/p3/13089641-ilustracao-de-gato-colorido-bonito-imagem-de-desenho-animado-de-gato-em-formato-eps10-adequado-para-elementos-de-design-de-livros-infantis-introducao-de-gatos-para-criancas-livros-ou-cartazes-sobre-animais-vetor.jpg';

    return (
        <View style={{ alignItems: "center" }}>
            <Image

                source={{
                    uri: imagens}}
                style={{ width: 200, height: 200 }}

            />

            <Button 

                onPress={()=>{
                    setImagem(!Imagem);
                    
                }}
            
                title={Imagem ? 'Clique aqui!' : 'Mais uma vez'}
            
            />

            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Vívian Pedrosa Moreira Pereira
            </Text>
            <Text>
                Mombaça-CE
            </Text>
            <Text style={{ color: "red" }}>
                Design Digital-6° Semestre
            </Text>
        </View>
    )
}

export default Questao01