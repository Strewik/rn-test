import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";

const Register = (route) => {
  const router = useRouter();
  const navigation = useNavigation();
  const params = useLocalSearchParams();

  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");
  const [service, setService] = useState(params.title || "");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedServiceProvider, setSelectedServiceProvider] = useState(null);

  const handleNextStep = () => {
    if (step === 1) {
      if (!location || !selectedDate || !selectedTime) {
        Alert.alert("Error", "All fields are required");
        return;
      }
    }
    setStep(step + 1);
  };

  const handleSubmit = () => {
    Alert.alert("Success", "Your request has been submitted");
    // Handle form submission
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date.toLocaleDateString());
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    setSelectedTime(time.toLocaleTimeString());
    hideTimePicker();
  };

  const locationChange = (val) => {
    setLocation(val);
  };

  const handleServiceProviderChange = (value) => {
    setSelectedServiceProvider(value);
  };

  // Sample object array of service providers
  const serviceProviders = [
    {
      fullName: "John Doe",
      services: ["Captioning", "Local Sign", "Guide", "Tactile"],
      location: "New York",
    },
    {
      fullName: "Jane Smith",
      services: ["Captioning", "Guide"],
      location: "Los Angeles",
    },
    // Add more service providers as needed
  ];

  const handlePayment = () => {
    const amount = 100; // Replace with the actual amount
    router.push({ pathname: "/payment", params: { amount } });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      {step === 1 && (
        <View>
          <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
          </View>
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <ScrollView>
              <Text style={styles.text_footer}>Service</Text>
              <View style={styles.action}>
                <FontAwesome name="briefcase" color="#05375a" size={20} />
                <TextInput
                  placeholder="Service"
                  value={service}
                  style={styles.textInput}
                  onChangeText={(val) => setService(val)}
                />
              </View>
              <Text style={styles.text_footer}>Location</Text>
              <View style={styles.action}>
                <FontAwesome name="map-marker" color="#05375a" size={20} />
                <TextInput
                  placeholder="Location"
                  style={styles.textInput}
                  value={location}
                  onChangeText={(val) => locationChange(val)}
                />
              </View>
              <Text style={styles.text_footer}>Date</Text>
              <View style={styles.action}>
                <FontAwesome name="calendar" color="#05375a" size={20} />
                <TouchableOpacity
                  onPress={showDatePicker}
                  style={styles.textInput}
                >
                  <Text>{selectedDate || "Select Date"}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleDateConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
              <Text style={styles.text_footer}>Time</Text>
              <View style={styles.action}>
                <FontAwesome name="clock-o" color="#05375a" size={20} />
                <TouchableOpacity
                  onPress={showTimePicker}
                  style={styles.textInput}
                >
                  <Text>{selectedTime || "Select Time"}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isTimePickerVisible}
                  mode="time"
                  onConfirm={handleTimeConfirm}
                  onCancel={hideTimePicker}
                />
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                  style={styles.signIn}
                  onPress={handleNextStep}
                >
                  <LinearGradient
                    colors={["#08d4c4", "#01ab9d"]}
                    style={styles.signIn}
                  >
                    <Text
                      style={[
                        styles.textSign,
                        {
                          color: "#fff",
                        },
                      ]}
                    >
                      Next
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => router.push("/login")}
                  style={[
                    styles.signIn,
                    {
                      borderColor: "#009387",
                      borderWidth: 1,
                      marginTop: 15,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: "#009387",
                      },
                    ]}
                  >
                    Back
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Animatable.View>
        </View>
      )}
      {step === 2 && (
        <View>
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <ScrollView>
              <View>
                <Text>Select a Service Provider:</Text>
                <Picker
                  selectedValue={selectedServiceProvider}
                  onValueChange={handleServiceProviderChange}
                >
                  <Picker.Item label="Select a Service Provider" value={null} />
                  {serviceProviders.map((provider, index) => (
                    <Picker.Item
                      key={index}
                      label={`${provider.fullName} - ${provider.location}`}
                      value={provider}
                    />
                  ))}
                </Picker>
                {selectedServiceProvider && (
                  <View style={{ marginTop: 20 }}>
                    <Text>Selected Service Provider:</Text>
                    <Text>Name: {selectedServiceProvider.fullName}</Text>
                    <Text>Location: {selectedServiceProvider.location}</Text>
                    <Text>
                      Services Offered:{" "}
                      {selectedServiceProvider.services.join(", ")}
                    </Text>
                  </View>
                )}
              </View>

              <View style={styles.button}>
                <TouchableOpacity
                  style={styles.signIn}
                  onPress={handleNextStep}
                >
                  <LinearGradient
                    colors={["#08d4c4", "#01ab9d"]}
                    style={styles.signIn}
                  >
                    <Text
                      style={[
                        styles.textSign,
                        {
                          color: "#fff",
                        },
                      ]}
                    >
                      Next
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setStep(1)}
                  style={[
                    styles.signIn,
                    {
                      borderColor: "#009387",
                      borderWidth: 1,
                      marginTop: 15,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: "#009387",
                      },
                    ]}
                  >
                    Back
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Animatable.View>
        </View>
      )}
      {step === 3 && (
        <View>
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <ScrollView>
              <View style={styles.reviewContainer}>
                <Text style={styles.reviewTitle}>Review Your Details</Text>
                <Text style={styles.reviewText}>Service: {service}</Text>
                <Text style={styles.reviewText}>Location: {location}</Text>
                <Text style={styles.reviewText}>Date: {selectedDate}</Text>
                <Text style={styles.reviewText}>Time: {selectedTime}</Text>
                {selectedServiceProvider && (
                  <View style={styles.reviewProvider}>
                    <Text style={styles.reviewText}>
                      Service Provider: {selectedServiceProvider.fullName}
                    </Text>
                    <Text style={styles.reviewText}>
                      Location: {selectedServiceProvider.location}
                    </Text>
                    <Text style={styles.reviewText}>
                      Services Offered:{" "}
                      {selectedServiceProvider.services.join(", ")}
                    </Text>
                  </View>
                )}
              </View>

              <View style={styles.button}>
                <TouchableOpacity
                  style={styles.signIn}
                  onPress={handlePayment}
                >
                  <LinearGradient
                    colors={["#08d4c4", "#01ab9d"]}
                    style={styles.signIn}
                  >
                    <Text
                      style={[
                        styles.textSign,
                        {
                          color: "#fff",
                        },
                      ]}
                    >
                      Proceed to Payment
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setStep(2)}
                  style={[
                    styles.signIn,
                    {
                      borderColor: "#009387",
                      borderWidth: 1,
                      marginTop: 15,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: "#009387",
                      },
                    ]}
                  >
                    Back
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Animatable.View>
        </View>
      )}
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
    marginTop: 35,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  reviewContainer: {
    marginVertical: 20,
  },
  reviewTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  reviewText: {
    fontSize: 16,
    marginBottom: 10,
  },
  reviewProvider: {
    marginTop: 20,
  },
});
