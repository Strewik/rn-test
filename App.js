import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const App = () => {
  const [image, setImage] = useState(null);
  const [cv, setCv] = useState(null);
  const [certificates, setCertificates] = useState(null);
  const [recommendationLetter, setRecommendationLetter] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // for square cropping
      quality: 1,
    });

    if (!result.canceled) {
      ImageCropPicker.openCropper({
        path: result.assets[0].uri,
        width: 300,
        height: 300,
        cropping: true,
      }).then(image => {
        setImage(image.path);
      }).catch(err => console.error(err));
    }
  };

  const pickDocument = async (setDocument) => {
    let result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
    });

    if (result.type === 'success') {
      setDocument(result);
      Alert.alert("Document Selected", result.name);
    }
  };

  const uploadFiles = async () => {
    if (!image || !cv || !certificates || !recommendationLetter) {
      Alert.alert("Error", "Please select all files before uploading");
      return;
    }

    const formData = new FormData();
    formData.append('image', {
      uri: image,
      name: 'profile.jpg',
      type: 'image/jpeg',
    });
    formData.append('cv', {
      uri: cv.uri,
      name: cv.name,
      type: 'application/pdf',
    });
    formData.append('certificates', {
      uri: certificates.uri,
      name: certificates.name,
      type: 'application/pdf',
    });
    formData.append('recommendationLetter', {
      uri: recommendationLetter.uri,
      name: recommendationLetter.name,
      type: 'application/pdf',
    });

    try {
      const response = await fetch('YOUR_UPLOAD_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (response.ok) {
        Alert.alert("Success", "Files uploaded successfully");
      } else {
        Alert.alert("Upload Failed", "Failed to upload files");
      }
    } catch (error) {
      console.error("Upload Error: ", error);
      Alert.alert("Error", "Failed to upload files");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>File Upload Example</Text>

      <Button title="Pick and Crop Image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}

      <Button title="Pick CV (PDF)" onPress={() => pickDocument(setCv)} />
      {cv && <Text style={styles.documentInfo}>Selected CV: {cv.name}</Text>}

      <Button title="Pick Certificates (PDF)" onPress={() => pickDocument(setCertificates)} />
      {certificates && <Text style={styles.documentInfo}>Selected Certificates: {certificates.name}</Text>}

      <Button title="Pick Recommendation Letter (PDF)" onPress={() => pickDocument(setRecommendationLetter)} />
      {recommendationLetter && <Text style={styles.documentInfo}>Selected Recommendation Letter: {recommendationLetter.name}</Text>}

      <TouchableOpacity style={styles.uploadButton} onPress={uploadFiles}>
        <Text style={styles.uploadButtonText}>Upload Files</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
  },
  documentInfo: {
    fontSize: 16,
    marginVertical: 10,
  },
  uploadButton: {
    marginTop: 30,
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
