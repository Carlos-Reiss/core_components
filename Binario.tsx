import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
type Props = {
  binary: string;
};

type PropsBinary = {
  value: string;
  position: number;
};
const Binario = ({ binary }: Props) => {
  const [binaryArray, setBinaryArray] = useState<PropsBinary[]>([
    {} as PropsBinary,
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const convertedBinary = Number(binary.trim()).toString(2);

  useEffect(() => {
    const array: PropsBinary[] = [];

    const arrayPosition: number[] = [];
    let position = 1;

    for (let index = 0; index < convertedBinary.length; index++) {
      const element = convertedBinary[index];
      array.push({
        value: element,
        position: 0,
      });
      arrayPosition.push(position);
      position = position * 2;
    }

    arrayPosition.reverse().map((pos, index) => {
      array[index].position = pos;
    });

    setBinaryArray(array);
  }, [binary]);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{convertedBinary}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Voltar para Conversão</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <ScrollView horizontal>
        {binary ? (
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.container}
          >
            {binaryArray.map((props, index) => (
              <View style={{ padding: 10 }} key={index}>
                {props.value === "0" ? (
                  <View style={styles.bit}>
                    <Entypo name="circle" size={38} color="black" />
                    <Text>{props.position}</Text>
                  </View>
                ) : (
                  <View style={styles.bit}>
                    <FontAwesome name="circle" size={38} color="black" />
                    <Text>{props.position}</Text>
                  </View>
                )}
              </View>
            ))}
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    flexDirection: "row",
  },
  bit: {
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Binario;
