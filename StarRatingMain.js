import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StarRating from "./StarRating2";

const App = () => {
  const rating = 4.25; // Example rating

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rating:</Text>
      <StarRating rating={rating} maxStars={5} />
      <Text style={styles.ratingText}>Your Rating: {rating}</Text>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  ratingText: {
    fontSize: 20,
    marginTop: 20,
  },
});
