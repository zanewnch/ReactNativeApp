/* 
1. state practice with useEffect
2. css 套用
*/
import { View,Text,Button,StyleSheet } from "react-native";
import { useEffect, useState } from "react";
export default function prac(){
    // state
    const [outputText,setOutputText] = useState("The initial text.")

    // real-time render with useEffect
    useEffect(()=>{},[outputText]);

    const handleClick = ()=>{
        setOutputText("change value.")
    }
    

    // using css
    const styles = StyleSheet.create({
        container:{
            color:"red",
            backgroundColor:"gray"
        }
    })
    
    return (
        <View>
            <Text style={styles.container}>{outputText}</Text>
            <Button title="click me" onPress={handleClick}/>
        </View>
    );
}