import * as React from 'react';
import { Text, StyleSheet, SafeAreaView, Button } from 'react-native';

const Camera = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Camera</Text>
      <Button title="Crop" onPress={() => navigation.navigate('Crop')} />
    </SafeAreaView>
  );
};

export default Camera;
