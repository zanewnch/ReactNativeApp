/* 
1. state practice with useEffect
2. css 套用
3. using tailwind css with twrnc library, the syntax is 
<Text style={tw`bg-red-300 justify-center item-center text-blue-300`}>

key point
文字一定要丟在 Text 裡面
不能放在View 


*/
import { View, Text, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import tw from "twrnc";
export default function prac() {
  // state
  const [outputText, setOutputText] = useState("The initial text.");

  // real-time render with useEffect
  useEffect(() => {}, [outputText]);

  const handleClick = () => {
    setOutputText("change value.");
  };

  // using css
  const styles = StyleSheet.create({
    container: {
      color: "red",
      backgroundColor: "gray",
    },
  });

  return (
    <View>
      <Text style={styles.container}>{outputText}</Text>
      <Button title="click me" onPress={handleClick} />
      <Text style={tw`bg-red-300 justify-center item-center text-blue-300`}>
        tailwind test
      </Text>
    </View>
  );
}
