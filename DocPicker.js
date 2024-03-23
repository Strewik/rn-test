import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import * as DocumentPicker from "expo-document-picker";

const App = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });
      if (result.type === "success") {
        setSelectedPdf(result);
      } else {
        console.log("Document picking canceled");
      }
    } catch (error) {
      console.error("Error picking document:", error);
      Alert.alert("Error", "Failed to pick PDF document. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickDocument} style={styles.button}>
        <Text style={styles.buttonText}>Pick PDF Document</Text>
      </TouchableOpacity>
      {selectedPdf && (
        <View style={styles.selectedPdfContainer}>
          <Text style={styles.selectedPdfText}>{selectedPdf.name}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#37BEA7",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  selectedPdfContainer: {
    marginTop: 20,
  },
  selectedPdfText: {
    fontSize: 16,
  },
});

export default App;
