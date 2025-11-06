import { Text, View,TextInput,Button,StyleSheet, TouchableOpacity} from "react-native";
import React,{useState} from 'react';
export default function Index() {

  const [nome,setNome] = useState('');
  const [curso,setCurso] = useState('');
  const [mensagem,setMensagem] =useState('');
  const[focado,setFocado] = useState(false);
  
  const mostrarDados =() => {
    if(nome.trim() === "" || curso.trim() ===""){
      setMensagem("Preencha todos os campos, por favor!")
    }
    else{
    setMensagem(`Olá ${nome}, você está no curso de ${curso}!`);
    }

  }
  return (
    <View style={estilo.corpo}>
      <Text style={estilo.titulo}>Bem vindo,insira seus dados</Text>
      {/*Entrada do nome*/}
 <TextInput
       style={[
          estilo.entrada,
          focado && estilo.entradaFocado]}
        placeholder="Insira seu nome"
        placeholderTextColor="#aaa"
        value={nome}
        onChangeText={setNome}
        onFocus={() => setFocado(true)}
        onBlur={() => setFocado(false)}
      />
      {/*Entrada do curso*/}
      <TextInput
        style={[estilo.entrada,focado && estilo.entradaFocado]}
        placeholder="Insira seu curso"
        placeholderTextColor="#aaa"
        value={curso}
        onChangeText ={setCurso}
        onFocus={() => setFocado(true)}
        onBlur={() => setFocado(false)}
      ></TextInput>
     <TouchableOpacity style={estilo.botao} onPress={mostrarDados}>
        <Text style={estilo.textoBotao}>Enviar</Text>
      </TouchableOpacity>

       {mensagem !== "" && <Text style={estilo.mensagem}>{mensagem}</Text>}
    </View>
  );
}

const estilo = StyleSheet.create({

titulo:{
   borderWidth:2,
   borderColor:'#8B8B9A',
   fontSize:30,
   marginTop:20,
   backgroundColor:'#FFD700',
   justifyContent:'center',
   alignSelf:'center',
   padding:15,
   borderRadius:20,
},

corpo:{
  backgroundColor:'#1E1E2E',
  flex:1,
},

entrada:{
  backgroundColor:'#2E2E3E',
  width:'80%',
  borderWidth:1,
  borderColor:'white',
  borderRadius:20,
  height:'4%',
  paddingHorizontal:10,
  color:'#fff',
  marginTop:20,
  alignSelf:"center"
},

entradaFocado: {
    height: 60, 
    borderColor: "#00ff08ff", 
  },

  botao: {
    backgroundColor: "#FFD700",
    width: "80%",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 30,
    alignSelf:'center',
  },

  textoBotao: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },

  mensagem: {
    color: "#FFD700",
    marginTop: 25,
    fontSize: 18,
    textAlign: "center",
  },
})
