import * as React from 'react';
import { Text, StyleSheet, SafeAreaView, Button } from 'react-native';

const Processing = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Processing</Text>
      <Button title="Done" onPress={() => console.log('Done')} />
    </SafeAreaView>
  );
}

export default Processing;
