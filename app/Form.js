import * as React from 'react';
import { Text, StyleSheet, SafeAreaView, Button } from 'react-native';

const Form = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Form</Text>
      <Button title="Form" onPress={navigation.navigate('Form')} />
    </SafeAreaView>
  );
}

export default Form;
