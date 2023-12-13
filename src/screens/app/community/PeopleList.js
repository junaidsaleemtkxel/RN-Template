import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import PeopleListShimmer from './PeopleListShimmer';

// Dummy Data with Image URLs
const data = new Array(40).fill(null).map((_, index) => ({
  id: String(index),
  name: `Person ${index + 1}`,
  age: 20 + (index % 30),
  imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
}));

// Card Component with Image
const PersonCard = ({name, age, imageUrl}) => (
  <View style={styles.card}>
    <Image source={{uri: imageUrl}} style={styles.image} />
    <Text style={styles.name}>{name}</Text>
    <Text>Age: {age}</Text>
    {/* Render more details here */}
  </View>
);

// People List Component with FlatList
const PeopleList = ({loading}) =>
  loading ? (
    <PeopleListShimmer />
  ) : (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <PersonCard name={item.name} age={item.age} imageUrl={item.imageUrl} />
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );

// Styles
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10, // Rounded corners
    // Additional styling for the card
    shadowColor: '#000', // Optional shadow for depth (iOS)
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // Shadow for Android
  },
  image: {
    width: '100%',
    height: 150, // Adjust height as needed
    borderRadius: 10, // Rounded corners for image
    marginBottom: 10, // Space between image and text
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    // Additional styling for the name
  },
  listContainer: {
    paddingBottom: 50,
  },
  shimmerPlaceholder: {
    height: 100, // Set appropriate height
    width: '100%',
    marginVertical: 8,
  },
  // Add more styles as needed
});

export default PeopleList;
