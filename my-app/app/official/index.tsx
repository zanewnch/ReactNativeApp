import React from "react";
import { Text, StyleSheet, Button, View, TextInput } from "react-native";
import tw from "twrnc";

export default function official() {
  return (
    <View style={tw`p-2 border`}>
      <View style={[tw`flex flex-row justify-between items-center` ]} >
        <TextInput
          placeholder="input data"
          style={[
            tw`p-2`,
            {
              width: "200px",
              borderColor: "black",
              borderWidth: 1,
            },
          ]}
        />
        <Button title="Add" />
      </View>

      <View>
        
      </View>
    </View>
  );
}
