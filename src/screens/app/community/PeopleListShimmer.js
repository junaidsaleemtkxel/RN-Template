import React, {useState, useEffect} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const CardShimmer = () => {
  return (
    <View style={styles.shimmerCard}>
      <ShimmerPlaceholder
        autoRun={true}
        visible={false}
        style={styles.shimmerImage}
      />
      <View style={styles.shimmerTextContainer}>
        <ShimmerPlaceholder autoRun={true} style={styles.shimmerText} />
        <ShimmerPlaceholder autoRun={true} style={styles.shimmerText} />
        {/* Add more shimmer placeholders as needed for other text elements */}
      </View>
    </View>
  );
};

const PeopleListShimmer = () => {
  return (
    <ScrollView style={styles.container}>
      {new Array(10).fill(null).map((_, index) => (
        <CardShimmer key={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 50,
  },
  shimmerCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  shimmerImage: {
    height: 150,
    width: '100%',
  },
  shimmerTextContainer: {
    padding: 10,
  },
  shimmerText: {
    height: 20,
    marginBottom: 10,
    borderRadius: 4,
  },
  // Add more styles as needed
});

export default PeopleListShimmer;
