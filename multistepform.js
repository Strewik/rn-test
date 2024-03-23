

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const App = ({ navigation, route }) => {
  const [step, setStep] = useState(1);
 
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");


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

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

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

  
    const [selectedServiceProvider, setSelectedServiceProvider] =
      useState(null);

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

    return (
      <View style={styles.container}>
        {step === 1 && (
          <View style={styles.formContainer}>
            <Text style={styles.stepText}>Step 1</Text>
            <TextInput
              style={styles.input}
              value={location}
              onChangeText={setLocation}
              placeholder="Enter Location"
            />
            <View>
              <TouchableOpacity onPress={showDatePicker} style={styles.input}>
                <Text>{selectedDate || "Select Date"}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
              />
              <TouchableOpacity onPress={showTimePicker} style={styles.input}>
                <Text>{selectedTime || "Select Time"}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleNextStep}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {step === 2 && (
          <View style={styles.formContainer}>
            <Text style={styles.stepText}>Step 2</Text>
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

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setStep(step - 1)}
              >
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  };
  export default App;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    formContainer: {
      width: "80%",
    },
    stepText: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    input: {
      borderBottomWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    picker: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
    },
    button: {
      backgroundColor: "blue",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      width: "45%",
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
    },
  });


