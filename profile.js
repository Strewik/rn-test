import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";

const App = () => {
  let profile = {
    profileUrl: "https://example.com/profile",
    name: "Jane Doe",
    phoneNum: "+1234567890",
    address: "123 Main Street, City, Country",
    dob: "1990-05-15",
    gender: "Female",
    disability: "Can't hear",
    password: "mySecurePassword123",
    account: "User-D0005U",
  };

  isServiceProvider = true;
  return (
    <View style={styles.container}>
      {/* Background */}
      <View style={styles.background}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={{ alignItems: "center", marginBottom: 60 }}>
          <Image
            style={styles.profilePicture}
            source={require("./assets/prince.jpg")}
          />
          <Text>Name</Text>
          <Text>{profile.name}</Text>
          <Text>Account</Text>
          <Text>{profile.account}</Text>
        </View>
        {/* Your content here */}

        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <View style={styles.content}>
            <ScrollView>
              <Text style={styles.text_header}>Personal data</Text>
              <Text style={styles.text_label}>Email:</Text>
              <Text style={styles.text_data}>jane@mail.com</Text>
              <View style={styles.divider}></View>
              <Text style={styles.text_label}>Phone number:</Text>
              <Text style={styles.text_data}>0752 123456</Text>
              <View style={styles.divider}></View>
              <Text style={styles.text_label}>Address:</Text>
              <Text style={styles.text_data}>Gayaza, Kasangati</Text>
              <View style={styles.divider}></View>
              <Text style={styles.text_label}>Date of birth:</Text>
              <Text style={styles.text_data}>14/07/1994</Text>
              <View style={styles.divider}></View>
              <Text style={styles.text_label}>Gender:</Text>
              <Text style={styles.text_data}>Female</Text>
              <View style={styles.divider}></View>
              <Text style={styles.text_label}>Nature of disability:</Text>
              <Text style={styles.text_data}>Blindness</Text>
              <View style={styles.divider}></View>
              <Text style={styles.text_label}>Change password</Text>
              <Text style={styles.text_data}>************</Text>
              <View style={styles.divider}></View>
              {isServiceProvider && (
                <>
                  <Text>KYC</Text>
                  <Text style={styles.text_header}>Personal data</Text>
                  <Text style={styles.text_label}>Email:</Text>
                  <Text style={styles.text_data}>jane@mail.com</Text>
                  <View style={styles.divider}></View>
                  <Text style={styles.text_label}>Phone number:</Text>
                  <Text style={styles.text_data}>0752 123456</Text>
                  <View style={styles.divider}></View>
                  <Text style={styles.text_label}>Address:</Text>
                  <Text style={styles.text_data}>Gayaza, Kasangati</Text>
                  <View style={styles.divider}></View>
                  <Text style={styles.text_label}>Date of birth:</Text>
                  <Text style={styles.text_data}>14/07/1994</Text>
                  <View style={styles.divider}></View>
                  <Text style={styles.text_label}>Gender:</Text>
                  <Text style={styles.text_data}>Female</Text>
                </>
              )}
              <View>
                <Text>Sign Out</Text>
              </View>
            </ScrollView>
          </View>
        </Animatable.View>
      </View>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: "#009387",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    // flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginTop: -30,
  },
  divider: {
    width: "90%",
    height: 1,
    backgroundColor: "black",
    marginTop: 10,
    opacity: 0.4,
  },
  profilePicture: {
    // marginTop: 4000,
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    marginTop: 20,
    alignItems: "center",
   
  },
  text_header: {
    color: "#009387",
    fontWeight: "bold",
    fontSize: 20,
  },
});

// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar,
//   Image,
//   ScrollView,
// } from "react-native";
// import React from "react";
// import * as Animatable from "react-native-animatable";

// const App = () => {
//   return (
//     <View>
//       <View style={styles.container}>
//         <StatusBar backgroundColor="#009387" barStyle="light-content" />
//         <View style={styles.head}>
//           <View style={(alignItems = "center")}>
//             <Image
//               style={styles.profilePicture}
//               source={require("./assets/prince.jpg")}
//             />
//           </View>
//           <Text>Name</Text>
//           <Text>some cool name</Text>
//           <Text>Account holder</Text>
//           <Text>Star rating</Text>
//         </View>
//         <View style={styles.body}>
//           <Animatable.View animation="fadeInUpBig" style={styles.footer}>
//             <ScrollView>
//               <Text style={styles.text_header}>Personal data</Text>
//               <Text style={styles.text_label}>Email:</Text>
//               <Text style={styles.text_data}>john@mail.com</Text>
//               <View style={styles.divider}></View>
//               <Text style={styles.text_label}>Phone number:</Text>
//               <Text style={styles.text_data}>0752 123456</Text>
//               <View style={styles.divider}></View>
//               <Text style={styles.text_label}>Address:</Text>
//               <Text style={styles.text_data}>Gayaza, Kasangati</Text>
//               <View style={styles.divider}></View>
//               <Text style={styles.text_label}>Date of birth:</Text>
//               <Text style={styles.text_data}>14/07/1994</Text>
//               <View style={styles.divider}></View>
//               <Text style={styles.text_label}>Gender:</Text>
//               <Text style={styles.text_data}>Male</Text>
//               <View style={styles.divider}></View>
//               <Text style={styles.text_label}>Nature of disability:</Text>
//               <Text style={styles.text_data}>Blindness</Text>
//               <View style={styles.divider}></View>
//               <Text style={styles.text_label}>Change password</Text>
//               <Text style={styles.text_data}>************</Text>
//               <View style={styles.divider}></View>
//               <View>

//                 <Text>Sign Out</Text>
//               </View>
//             </ScrollView>
//           </Animatable.View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#009387",
//   },
//   head: {
//     backgroundColor: "green",
//     paddingBottom: 40,
//     alignContent: "center",
//   },
//   body: {
//     backgroundColor: "gold",
//     // backgroundColor: "#fff",
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingHorizontal: 30,
//     paddingVertical: 30,
//     marginTop: -30,
//   },
//   profilePicture: {
//     // marginTop: 4000,
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 20,
//     marginTop: 20,
//     alignItems: "center",
//     borderWidth: 2,
//     borderColor: "fff",
//   },
//   divider: {
//     width: "90%",
//     height: 1,
//     backgroundColor: "black",
//     marginTop: 10,
//     opacity: 0.4,
//   },
// });






// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Button,
//   TouchableOpacity,
//   Dimensions,
//   TextInput,
//   Platform,
//   StyleSheet,
//   ScrollView,
//   StatusBar,
//   Alert,
//   Image,
// } from "react-native";
// import { useRouter } from "expo-router";
// import axios from "axios";
// import * as Animatable from "react-native-animatable";
// import { LinearGradient } from "expo-linear-gradient";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import Feather from "react-native-vector-icons/Feather";
// import { Ionicons } from "@expo/vector-icons";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [profileImage, setProfileImage] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();
//   const handleRegister = () => {
//     console.log("hello");
//     const user = {
//       name: name,
//       email: email,
//       password: password,
//       profileImage: profileImage,
//     };
//     console.log("User data: " + user.email);
//     axios
//       .post("http://10.0.2.2:3000/register", user)
//       .then((response) => {
//         console.log(response);
//         Alert.alert(
//           "Registration successful",
//           "You have been registered successfully"
//         );
//         setName("");
//         setEmail("");
//         setPassword("");
//         profileImage("");
//       })
//       .catch((error) => {
//         Alert.alert(
//           "Registration failed",
//           "An error occurred while registering"
//         );
//         console.log("registration failed", error);
//       });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   let profile = {
//     profileUrl: "https://example.com/profile",
//     name: "John Doe",
//     phoneNum: "+1234567890",
//     address: "123 Main Street, City, Country",
//     dob: "1990-05-15",
//     gender: "male",
//     disability: "false",
//     password: "mySecurePassword123",
//   };

//   return (
//     <View>
//       <View style={styles.container}>
//         <StatusBar backgroundColor="#009387" barStyle="light-content" />

//         <View style={styles.header}>
//           <Text style={styles.text_header}>Register Now now!</Text>
//           <View style={(alignItems = "center")}>
//             <Image
//               style={styles.profilePicture}
//               source={require("./assets/prince.jpg")}
//             />
//           </View>
//           <View>
//             <Text>{profile.name}</Text>
//           </View>
//         </View>
//         <Animatable.View animation="fadeInUpBig" style={styles.footer}>
//           <ScrollView>
//             <Text style={styles.text_header}>Personal data</Text>
//             <Text style={styles.text_label}>Email:</Text>
//             <Text style={styles.text_data}>john@mail.com</Text>
//             <View style={styles.divider}></View>
//             <Text style={styles.text_label}>Phone number:</Text>
//             <Text style={styles.text_data}>0752 123456</Text>
//             <View style={styles.divider}></View>
//             <Text style={styles.text_label}>Address:</Text>
//             <Text style={styles.text_data}>Gayaza, Kasangati</Text>
//             <View style={styles.divider}></View>
//             <Text style={styles.text_label}>Date of birth:</Text>
//             <Text style={styles.text_data}>14/07/1994</Text>
//             <View style={styles.divider}></View>
//             <Text style={styles.text_label}>Gender:</Text>
//             <Text style={styles.text_data}>Male</Text>
//             <View style={styles.divider}></View>
//             <Text style={styles.text_label}>Nature of disability:</Text>
//             <Text style={styles.text_data}>Blindness</Text>
//             <View style={styles.divider}></View>
//             <Text style={styles.text_label}>Change password</Text>
//             <Text style={styles.text_data}>************</Text>
//             <View style={styles.divider}></View>
//             <View> Sign Out</View>

//           </ScrollView>
//         </Animatable.View>
//       </View>
//     </View>
//   );
// };

// export default Register;

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: "#009387",
//   },
//   header: {
//     flex: 1,
//     justifyContent: "flex-end",
//     paddingHorizontal: 20,
//     paddingBottom: 50,
//   },
//   footer: {
//     // flex: Platform.OS === "ios" ? 3 : 5,
//     backgroundColor: "#fff",
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingHorizontal: 30,
//     paddingVertical: 30,
//     marginTop: 200,
//   },
//   text_header: {
//     color: "#009387",
//     fontWeight: "bold",
//     fontSize: 20,
//   },
//   text_footer: {
//     color: "#05375a",
//     fontSize: 18,
//   },
//   action: {
//     flexDirection: "row",
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#f2f2f2",
//     paddingBottom: 5,
//   },
//   text_data: {
//     color: "#05375a",
//   },
//   text_label: {
//     opacity: 0.4,
//     fontSize: 12

//   },
//   button: {
//     alignItems: "center",
//     marginTop: 50,
//   },
//   signIn: {
//     width: "100%",
//     height: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//   },
//   textSign: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   textPrivate: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     marginTop: 20,
//   },
//   color_textPrivate: {
//     color: "grey",
//   },
//   profilePicture: {
//     // marginTop: 4000,
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 20,
//     marginTop: 20,
//     alignItems: "center",
//     borderWidth: 2,
//     borderColor: "fff",
//   },
//   divider: {
//     width: "90%",
//     height: 1,
//     backgroundColor: "black", // Adjust the color of the divider as needed
//     marginTop: 10, // Adjust the spacing above the divider as needed
//     opacity: 0.4,
//   },
// });
