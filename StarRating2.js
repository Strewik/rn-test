import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const StarRating = ({ rating, maxStars = 5 }) => {
  const renderStar = (index) => {
    const whole = Math.floor(rating);
    const fraction = rating - whole;

    if (index < whole) {
      return 'star';
    } else if (index === whole) {
      if (fraction >= 0.75) {
        return 'star';
      } else if (fraction >= 0.25) {
        return 'star-half-full';
      } else {
        return 'star-o';
      }
    } else {
      return 'star-o';
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: maxStars }, (_, index) => (
        <FontAwesome
          key={index}
          name={renderStar(index)}
          size={32}
          color="#FFD700"
          style={styles.star}
        />
      ))}
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  star: {
    marginHorizontal: 2,
  },
});
