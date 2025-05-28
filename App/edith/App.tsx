import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';

function App() {
  const [loading, setLoading] = useState(false);
  const [reply, setReply] = useState('');

  const handleButtonPress = () => {
    setLoading(true);
    // Simulate async operation
    setTimeout(() => {
      setReply('Hello App'); // Set reply message
      setLoading(false);
    }, 1000); // Simulate loading for 1 second
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <View>
          <Text>Hello User!!!</Text>

          {/* Button component */}
          <Button
            title="Press Me"
            onPress={handleButtonPress}
            disabled={loading}
          />

          {/* ActivityIndicator component */}
          {loading && <ActivityIndicator size="large" color="#0000ff" />}

          {/* Reply message */}
          {reply !== '' && <Text>{reply}</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink', // Set background color to pink
  },
});

export default App;