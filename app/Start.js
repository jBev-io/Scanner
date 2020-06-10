import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity, SafeAreaView, Button, View } from 'react-native';

const Processing = ({ navigation }) => {
  return (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Camera')}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>File a Claim</Text>
            </View>
          </TouchableOpacity>
  );
}

export default Processing;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 20,
    marginLeft: 9,
    marginRight: 9,
    marginTop: 100,
    marginBottom: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#38B2B8',
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2, // Android
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});