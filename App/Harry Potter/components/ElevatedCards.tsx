import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function ElevatedCards() {
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View>
      <Text style={styles.headingText}>Movies</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <TouchableOpacity onPress={() => handlePress('https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone_(film)')}>
          <View style={[styles.card, styles.cardElevated]}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Harry_Potter_and_the_Philosopher%27s_Stone_poster.jpg' }} style={styles.image} resizeMode="cover" />
            <Text style={styles.cardTitle}>Harry Potter and the Philosopher's Stone</Text>
            <Text style={styles.cardSubtitle}>Tap to know more</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('https://en.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets_(film)')}>
          <View style={[styles.card, styles.cardElevated]}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg' }} style={styles.image} resizeMode="cover" />
            <Text style={styles.cardTitle}>Harry Potter and the Chamber of Secrets</Text>
            <Text style={styles.cardSubtitle}>Tap to know more</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('https://en.wikipedia.org/wiki/Harry_Potter_and_the_Prisoner_of_Azkaban_(film)')}>
          <View style={[styles.card, styles.cardElevated]}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Prisoner_of_azkaban_UK_poster.jpg' }} style={styles.image} resizeMode="cover" />
            <Text style={styles.cardTitle}>Harry Potter and the Prisoner of Azkaban</Text>
            <Text style={styles.cardSubtitle}>Tap to know more</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('https://en.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire_(film)')}>
          <View style={[styles.card, styles.cardElevated]}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Harry_Potter_and_the_Goblet_of_Fire_Poster.jpg' }} style={styles.image} resizeMode="cover" />
            <Text style={styles.cardTitle}>Harry Potter and the Goblet of Fire</Text>
            <Text style={styles.cardSubtitle}>Tap to know more</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('https://en.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix_(film)')}>
          <View style={[styles.card, styles.cardElevated]}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/e/e7/Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg' }} style={styles.image} resizeMode="cover" />
            <Text style={styles.cardTitle}>Harry Potter and the Order of the Phoenix</Text>
            <Text style={styles.cardSubtitle}>Tap to know more</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('https://en.wikipedia.org/wiki/Harry_Potter_and_the_Half-Blood_Prince_(film)')}>
          <View style={[styles.card, styles.cardElevated]}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/3/3f/Harry_Potter_and_the_Half-Blood_Prince_poster.jpg' }} style={styles.image} resizeMode="cover" />
            <Text style={styles.cardTitle}>Harry Potter and the Half-Blood Prince</Text>
            <Text style={styles.cardSubtitle}>Tap to know more</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('https://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1')}>
          <View style={[styles.card, styles.cardElevated]}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg/330px-Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg' }} style={styles.image} resizeMode="cover" />
            <Text style={styles.cardTitle}>Harry Potter and the Deathly Hallows – Part 1</Text>
            <Text style={styles.cardSubtitle}>Tap to know more</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('https://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_2')}>
          <View style={[styles.card, styles.cardElevated]}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/d/df/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_2.jpg' }} style={styles.image} resizeMode="cover" />
            <Text style={styles.cardTitle}>Harry Potter and the Deathly Hallows – Part 2</Text>
            <Text style={styles.cardSubtitle}>Tap to know more</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          You can watch these movies on{' '}
          <TouchableOpacity onPress={() => handlePress('https://www.primevideo.com/region/eu/detail/0N4SXOJTJ2MHYF5FP83P84G7RL/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B09HVZ7NVR&qid=1719069686390')}>
            <Text style={styles.footerLink}>Amazon Prime</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    textDecorationLine: 'underline'
  },
  container: {
    padding: 10
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 300,
    borderRadius: 2,
    margin: 8,
  },
  cardElevated: {
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#000000',
    shadowOpacity: 100,
    shadowRadius: 2
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 2,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  footer: {
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
  footerLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
