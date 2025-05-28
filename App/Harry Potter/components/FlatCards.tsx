import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={styles.headingText}>Main Leads</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.card]}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>Harry</Text>
          </View>
          <View style={[styles.card]}>
            <Image
              source={{ uri: 'https://static.wikia.nocookie.net/characters/images/a/a5/Latest_%2810%29.jpg/revision/latest/scale-to-width-down/1200?cb=20141230074301' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>Hermione</Text>
          </View>
          <View style={[styles.card]}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>Ron</Text>
          </View>
          <View style={[styles.card]}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Ootp076.jpg/220px-Ootp076.jpg' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>Snape</Text>
          </View>
          <View style={[styles.card]}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIHBT8BqAlQLixDbKJSqk0dGvltGJ9RAFfw&s' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>Dumbledore</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    paddingHorizontal: 8,
    textDecorationLine: 'underline',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 160,
    borderRadius: 2,
    margin: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    paddingVertical: 4,
    position: 'absolute',
    bottom: 0,
  },
});

export default App;
