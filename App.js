import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const BlogCard = () => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => {}}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }} // replace with your image URL
          style={styles.image}
        />
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Read our blog</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>This is the body of the card.</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 18,
    marginVertical: 38,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "#fff",
    height: 250
  },
  imageContainer: {
    position: "relative",
    height: "80%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  overlayText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "white",
    padding: 10,
  },
  bodyText: {
    fontSize: 16,
    color: "#333",
  },
});
