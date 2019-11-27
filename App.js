import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Permissions, Camera, FaceDetector } from 'expo';



export default function App() {
  const [outputText, setOutputText] = useState('Text in State')

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change Text" onPress={()=>setOutputText('New Text')} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
