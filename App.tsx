import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Binario from "./Binario";

export default function App() {
  const [binary, setBinary] = useState("1");

  const handleTextInput = (text: string) => {
    let format = "";
    for (let index = 0; index < text.length; index++) {
      const element = text[index];
      if (element.match(/[0-9]/i)) {
        format += element;
      }
    }

    setBinary(format);
  };
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: "30%" }}>
        <Text style={styles.textConverter}>
          Converter Valor de Decimal para Binário
        </Text>
      </View>
      <TextInput
        onChangeText={(text) => handleTextInput(text)}
        maxLength={6}
        style={styles.input}
        value={binary}
        placeholder="Insira o valor..."
        keyboardType="numeric"
      />

      <Binario binary={binary} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    height: "8%",
    margin: 90,
    width: "36%",
    borderWidth: 1,
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 10,
  },
  textConverter: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
