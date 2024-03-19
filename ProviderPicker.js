import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { serviceProviders } from './ServiceP';
// Sample object array of service providers
// const serviceProviders = [
//   {
//     fullName: "John Doe",
//     services: ["Captioning", "Local Sign", "Guide", "Tactile"],
//     location: "New York",
//   },
//   {
//     fullName: "Jane Smith",
//     services: ["Captioning", "Guide"],
//     location: "Los Angeles",
//   },
//   // Add more service providers as needed
// ];

const ServiceProviderDropdown = () => {
  const [selectedServiceProvider, setSelectedServiceProvider] = useState(null);

  const handleServiceProviderChange = (value) => {
    setSelectedServiceProvider(value);
  };

  return (
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
            Services Offered: {selectedServiceProvider.services.join(", ")}
          </Text>
        </View>
      )}
    </View>
  );
};

export default ServiceProviderDropdown;