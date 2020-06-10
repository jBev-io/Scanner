import * as React from 'react';
import { Text, StyleSheet, SafeAreaView, Button } from 'react-native';

const Crop = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Crop</Text>
      <Button title="Processing" onPress={() => navigation.navigate('Processing')} />
    </SafeAreaView>
  );
};

export default Crop;
