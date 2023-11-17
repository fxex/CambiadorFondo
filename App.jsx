/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet,TouchableOpacity, Text,Dimensions} from 'react-native';

const App = () => {
    const [rojo, setRojo] = useState(255);
    const [verde, setVerde] = useState(255);
    const [azul, setAzul] = useState(255);
    const [hexa, setHexa] = useState("#FFFFFF");
    const { height } = Dimensions.get('window');
    const cambiarRojo=()=>{
        if (rojo == 255) {
            setRojo(0);
        }else{
            setRojo(rojo+15);
        }
    }

    const cambiarVerde=()=>{
        if (verde == 255) {
            setVerde(0);
        }else{
            setVerde(verde+15);
        }
    }

    const cambiarAzul=()=>{
        if (azul == 255) {
            setAzul(0);
        }else{
            setAzul(azul+15);
        }
    }

    useEffect(() => {
        const convertirHexadecimal = ()=>{
            let valorRojo = rojo.toString(16).toUpperCase();
            let valorVerde = verde.toString(16).toUpperCase();
            let valorAzul = azul.toString(16).toUpperCase();
            if (valorRojo.length <2) {
                valorRojo = valorRojo+"0";
            }
            if (valorVerde.length <2) {
                valorVerde = valorVerde+"0";
            }
            if (valorAzul.length <2) {
                valorAzul = valorAzul+"0";
            }
            const hexadecimal = `#${valorRojo}${valorVerde}${valorAzul}`;
            setHexa(hexadecimal)
        }
        convertirHexadecimal()
        
    }, [rojo, verde, azul]);

    return (
        <View style={{backgroundColor:`${hexa}`, display:'flex', justifyContent:'space-evenly', alignItems:'center', height:height}}>
            <TouchableOpacity style={{backgroundColor:"red",padding:20, minWidth:80, borderWidth:0.5, borderColor:'white'}} onPress={cambiarRojo}>
                <Text style={{color:'white', textAlign:'center'}}>{rojo}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"green",padding:20, minWidth:80, borderWidth:0.5, borderColor:'white'}} onPress={cambiarVerde}>
                <Text style={{color:'white', textAlign:'center'}}>{verde}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"blue",padding:20, minWidth:80, borderWidth:0.5, borderColor:'white'}} onPress={cambiarAzul}>
                <Text style={{color:'white',textAlign:'center'}}>{azul}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default App;
