import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNTextDetector from "react-native-text-detector";
import { utils } from '@react-native-firebase/app';
import vision from '@react-native-firebase/ml-vision';

const Camera = ({ navigation }) => {
  const takePicture = async () => {
    if (camera) {
      const options = { base64: true };
      const { uri } = await camera.takePictureAsync(options);
      console.log('uri: ', uri);
      const visionResp = await RNTextDetector.detectFromUri(uri);

      const text = visionResp.reduce((array, obj) => {
        array.push(obj.text);
        return array;
      }, []);
      console.log('RNTextDetector text: ', text);

      const processed = await vision().cloudDocumentTextRecognizerProcessImage(uri);
      console.log('MLVision: ');
      console.log('Found text in document: ', processed.text);

      processed.blocks.forEach(block => {
        console.log('Found block with text: ', block.text);
        console.log('Confidence in block: ', block.confidence);
        console.log('Languages found in block: ', block.recognizedLanguages);
      });
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={(ref) => {
          camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.auto}
        captureAudio={false}
        onTextRecognized={({textBlocks}) => console.log(textBlocks)} 
      />
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default Camera;
