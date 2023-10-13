import React, { useState } from 'react';

import { Pressable, Button, View, Image, Text } from 'react-native';

function Lab3b() {
  var [image, setImage] = useState(require('../assets/vs_red.png'));
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3, backgroundColor: 'white', flexDirection: 'row' }}>
        <Image
          source={image}
          style={{ width: '100px', height: '100px' }}
          resizeMode="contain"
        />
        <Text>some text here</Text>
      </View>

      <View
        style={{
          flex: 8,
          backgroundColor: '#C4C4C4',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={() => {
            setImage(require('../assets/vs_red.png'));
          }}
          style={{
            width: '70px',
            height: '70px',
            backgroundColor: 'red',
          }}></Pressable>
        <Pressable
          onPress={() => {
            setImage(require('../assets/vs_black.png'));
          }}
          style={{
            width: '70px',
            height: '70px',
            backgroundColor: 'black',
          }}></Pressable>
        <Pressable
        onPress={() => {
            setImage(require('../assets/vs_silver.png'));
          }}
          style={{
            width: '70px',
            height: '70px',
            backgroundColor: 'pink',
          }}></Pressable>
        <Pressable
        onPress={() => {
            setImage(require('../assets/vs_blue.png'));
          }}
          style={{
            width: '70px',
            height: '70px',
            backgroundColor: 'lightblue',
          }}></Pressable>
      </View>
    </View>
  );
}

export default Lab3b;
