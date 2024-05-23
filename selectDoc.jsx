import {View, Text, Button} from 'react-native';
import React from 'react';
import DocumentPicker from 'react-native-document-picker';

export default function App() {
  const selectDoc = async () => {
    try {
      // const doc = await DocumentPicker.pick({
      //   type: [DocumentPicker.types.pdf],
      //   allowMultiSelection: true
      // });
      // const doc = await DocumentPicker.pickSingle()
      const doc = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images]
      })
      console.log(doc)
    } catch(err) {
      if(DocumentPicker.isCancel(err)) 
        console.log("User cancelled the upload", err);
      else 
        console.log(err)
    }
  }

  return (
    <View>
      <Text
        style={{
          color: 'black',
          fontSize: 28,
          textAlign: 'center',
          marginVertical: 40,
        }}>
        Document Picker
      </Text>
      <View style={{marginHorizontal: 40}}>
        <Button title="Select Document" onPress={selectDoc} />
      </View>
    </View>
  );
}

// import React, { useState, useEffect, useCallback } from 'react';
// import { View, Text, Button, Animated, Easing, StyleSheet } from 'react-native';
// import * ImagePicker from 'react-native-image-picker';
// import DocumentPicker from 'react-native-document-picker';

// const DocumentUploader = () => {
//   const [cv, setCv] = useState(null);
//   const [cvName, setCvName] = useState('');
//   const [photo, setPhoto] = useState(null);
//   const [photoName, setPhotoName] = useState('');
//   const [recommendation, setRecommendation] = useState(null);
//   const [recommendationName, setRecommendationName] = useState('');
//   const [nationalID, setNationalID] = useState(null);
//   const [nationalIDName, setNationalIDName] = useState('');
//   const [showCvTick, setShowCvTick] = useState(false);
//   const [showPhotoTick, setShowPhotoTick] = useState(false);
//   const [showRecommendationTick, setShowRecommendationTick] = useState(false);
//   const [showNationalIDTick, setShowNationalIDTick] = useState(false);
//   const [error, setError] = useState('');
//   const tickAnimationValue = new Animated.Value(0);

//   useEffect(() => {
//     if (cv || photo || recommendation || nationalID) {
//       startTickAnimation();
//     }
//   }, [cv, photo, recommendation, nationalID]);

//   const startTickAnimation = useCallback(() => {
//     if (tickAnimationValue !== 1) {
//       Animated.timing(tickAnimationValue, {
//         toValue: 1,
//         duration: 1000,
//         easing: Easing.ease,
//         useNativeDriver: true,
//       }).start();
//     }
//   }, [tickAnimationValue]);

//   const handleFileUpload = async (setter, setterName, setShowTick) => {
//     try {
//       const result = await DocumentPicker.pick({
//         type: [DocumentPicker.types.pdf],
//       });
//       setter(result);
//       setterName(result.name);
//       setShowTick(true);
//       setError(''); // Clear any previous errors
//     } catch (error) {
//       console.error('Error selecting file:', error);
//       setError('Failed to select file. Please try again.');
//     }
//   };

//   const handleImageUpload = useCallback(() => {
//     const options = {
//       title: 'Select Photo',
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     ImagePicker.showImagePicker(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.error('ImagePicker Error:', response.error);
//         setError('Failed to select image. Please try again.');
//       } else {
//         setPhoto(response);
//         setPhotoName(response.fileName);
//         setShowPhotoTick(true);
//         setError(''); // Clear any previous errors
//       }
//     });
//   }, []);

//   const handleSubmit = async () => {
//     try {
//       // Handle form submission
//       // You can submit the form data to your backend here
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setError('Failed to submit form. Please try again.');
//     }
//   };

//   const renderTick = () => {
//     const opacity = tickAnimationValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0, 1],
//     });
//     return (
//       <Animated.View style={[styles.tick, { opacity }]}><Text>✓</Text></Animated.View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.uploadButton}>
//         <Button
//           title={`Upload CV ${cvName ? `- ${cvName}` : ''}`}
//           onPress={() => handleFileUpload(setCv, setCvName, setShowCvTick)}
//         />
//         {showCvTick && renderTick()}
//       </View>

//       <View style={styles.uploadButton}>
//         <Button
//           title={`Upload Photo ${photoName ? `- ${photoName}` : ''}`}
//           onPress={handleImageUpload}
//         />
//         {showPhotoTick && renderTick()}
//       </View>

//       <View style={styles.uploadButton}>
//         <Button
//           title={`Upload Recommendation ${recommendationName ? `- ${recommendationName}` : ''}`}
//           onPress={() => handleFileUpload(setRecommendation, setRecommendationName, setShowRecommendationTick)}
//         />
//         {showRecommendationTick && renderTick()}
//       </View>

//       <View style={styles.uploadButton}>
//         <Button
//           title={`Upload National ID ${nationalIDName ? `- ${nationalIDName}` : ''}`}
//           onPress={() => handleFileUpload(setNationalID, setNationalIDName, setShowNationalIDTick)}
//         />
//         {showNationalIDTick && renderTick()}
//       </View>

//       <View style={styles.submitButton}>
//         <Button title="Submit" onPress={handleSubmit} />
//       </View>
//       {error && <Text style={styles.errorText}>{error}</Text>}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   uploadButton: {
//     marginBottom: 20,
//   },
//   tick: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     backgroundColor: 'transparent',
//     zIndex: 1,
//   },
//   submitButton: {
//     marginTop: 20,
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 10,
//   }
// });

// export default DocumentUploader;

// // import {View, Text, Button} from 'react-native';
// // import React from 'react';
// // import DocumentPicker from 'react-native-document-picker';

// // export default function App() {
// //   const selectDoc = async () => {
// //     try {
// //       // const doc = await DocumentPicker.pick({
// //       //   type: [DocumentPicker.types.pdf],
// //       //   allowMultiSelection: true
// //       // });
// //       // const doc = await DocumentPicker.pickSingle()
// //       const doc = await DocumentPicker.pickMultiple({
// //         type: [DocumentPicker.types.pdf, DocumentPicker.types.images]
// //       })
// //       console.log(doc)
// //     } catch(err) {
// //       if(DocumentPicker.isCancel(err))
// //         console.log("User cancelled the upload", err);
// //       else
// //         console.log(err)
// //     }
// //   }

// //   return (
// //     <View>
// //       <Text
// //         style={{
// //           color: 'black',
// //           fontSize: 28,
// //           textAlign: 'center',
// //           marginVertical: 40,
// //         }}>
// //         Document Picker
// //       </Text>
// //       <View style={{marginHorizontal: 40}}>
// //         <Button title="Select Document" onPress={selectDoc} />
// //       </View>
// //     </View>
// //   );
// // }

// // import React from 'react';
// // import { View ,Button} from 'react-native';
// // import {launchCamera} from 'react-native-image-picker';
// // import DocumentPicker from 'react-native-document-picker';
// // import RNFS from 'react-native-fs';

// // const App = () => {

// //   const handleCameraLaunch = async (isCamera) => {
// //     const options = {
// //       mediaType: isCamera ? 'photo' : 'video',
// //     };

// //     try {
// //       const response = await launchCamera(options);
// //       console.log('pickedFile',response);
// //     } catch (error) {
// //       console.error('Error:', error);
// //     }
// //   };
// //   const uploadFileOnPressHandler = async () => {
// //     try {
// //       const pickedFile = await DocumentPicker.pickSingle({
// //         type: [DocumentPicker.types.allFiles],
// //       });
// //       console.log('pickedFile',pickedFile);

// //       await RNFS.readFile(pickedFile.uri, 'base64').then(data => {
// //         console.log('base64',data);
// //       });
// //     } catch (err) {
// //       if (DocumentPicker.isCancel(err)) {
// //         console.log(err);
// //       } else {
// //         console.log(error);
// //         throw err;
// //       }
// //     }
// //   };

// //   return (
// //     <View style={{ flex: 1 }}>
// //        <Button title="Camera" onPress={async () => {
// //               handleCameraLaunch(true);
// //           }} />
// //        <Button title="Video" onPress={async () => {
// //               handleCameraLaunch(false);
// //           }} />
// //           <Button title="Gallary" onPress={async () => {
// //               uploadFileOnPressHandler();
// //           }} />
// //     </View>
// //   );
// // };

// // export default App;

// // import { StyleSheet, Text, View, SafeAreaView, StatusBar, Button } from 'react-native';
// // import React, { useState, useCallback } from 'react';
// // import DocumentPicker from 'react-native-document-picker';

// // const App = () => {
// //   const [fileResponse, setFileResponse] = useState([]);

// //   const handleDocumentSelection = useCallback(async () => {
// //     try {
// //       const response = await DocumentPicker.pick({
// //         presentationStyle: 'fullScreen',
// //       });
// //       setFileResponse(response);
// //     } catch (err) {
// //       if (DocumentPicker.isCancel(err)) {
// //         console.warn("User cancelled the document picker");
// //       } else {
// //         console.error("An unexpected error occurred:", err);
// //       }
// //     }
// //   }, []);

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle={'dark-content'} />
// //       {fileResponse.length > 0 ? (
// //         fileResponse.map((file, index) => (
// //           <Text
// //             key={index.toString()}
// //             style={styles.uri}
// //             numberOfLines={1}
// //             ellipsizeMode={'middle'}>
// //             {file?.uri}
// //           </Text>
// //         ))
// //       ) : (
// //         <Text>No file selected</Text>
// //       )}
// //       <Button title="Select 📑" onPress={handleDocumentSelection} />
// //     </SafeAreaView>
// //   );
// // };

// // export default App;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     padding: 20,
// //   },
// //   uri: {
// //     color: 'black',
// //     fontSize: 16,
// //     marginVertical: 10,
// //   }
// // });

// // import { pick } from '@react-native-documents/picker'
// // const UploadDocumentComponent = () => {
// // return (
// //   <Button
// //     title="open file"
// //     onPress={async () => {
// //       try {
// //         const [result] = await pick({
// //           mode: 'open',
// //         })
// //         console.log(result)
// //       } catch (err) {
// //         // see error handling
// //       }
// //     }}
// //   />
// // )
// // }

// // import React, { useState } from 'react';
// // import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
// // import DocumentPicker from '@react-native-community/document-picker';

// // const UploadDocumentComponent = () => {
// //   const [documents, setDocuments] = useState({
// //     CV: null,
// //     photo: null,
// //     recommendation: null,
// //     nationalID: null
// //   });

// //   const [tickAnimations] = useState({
// //     CV: new Animated.Value(0),
// //     photo: new Animated.Value(0),
// //     recommendation: new Animated.Value(0),
// //     nationalID: new Animated.Value(0)
// //   });

// //   const handleUpload = async (documentType) => {
// //     try {
// //       const res = await DocumentPicker.pick({
// //         type: [DocumentPicker.types.allFiles],
// //       });
// //       // You may want to handle multiple document selection here
// //       const documentPath = res.uri;

// //       setDocuments(prevState => ({
// //         ...prevState,
// //         [documentType]: documentPath
// //       }));

// //       // Start tick animation
// //       Animated.timing(tickAnimations[documentType], {
// //         toValue: 1,
// //         duration: 1000,
// //         easing: Easing.ease,
// //         useNativeDriver: true
// //       }).start();
// //     } catch (err) {
// //       if (DocumentPicker.isCancel(err)) {
// //         // User cancelled the picker
// //         console.log('Document picker cancelled.');
// //       } else {
// //         console.error('Error while picking the document:', err);
// //       }
// //     }
// //   };

// //   const handleSubmit = () => {
// //     // Code to post documents to API
// //     console.log("Documents posted to API:", documents);
// //   };

// //   const renderDocumentItem = (label, documentType) => {
// //     const tickOpacity = tickAnimations[documentType].interpolate({
// //       inputRange: [0, 1],
// //       outputRange: [0, 1]
// //     });

// //     return (
// //       <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
// //         <Text style={{ flex: 1 }}>{label}</Text>
// //         <TouchableOpacity onPress={() => handleUpload(documentType)}>
// //           <Text style={{ color: 'blue' }}>Select</Text>
// //         </TouchableOpacity>
// //         <Animated.View style={{ marginLeft: 10, opacity: tickOpacity }}>
// //           <Text style={{ color: 'green' }}>✓</Text>
// //         </Animated.View>
// //       </View>
// //     );
// //   };

// //   return (
// //     <View style={{ padding: 20 }}>
// //       {renderDocumentItem("CV", "CV")}
// //       {renderDocumentItem("Photo", "photo")}
// //       {renderDocumentItem("Recommendation", "recommendation")}
// //       {renderDocumentItem("National ID", "nationalID")}
// //       <TouchableOpacity onPress={handleSubmit} style={{ marginTop: 20, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
// //         <Text style={{ color: 'white', textAlign: 'center' }}>Submit Documents</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // export default UploadDocumentComponent;
