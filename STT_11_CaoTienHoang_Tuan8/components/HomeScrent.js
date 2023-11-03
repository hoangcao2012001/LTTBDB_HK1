import React, { useState } from 'react';
import { Pressable, Button, View, Image, Text, TextInput } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function HomeScrent(){
  const navigation = useNavigation();
  
  return (
    

    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 ,alignItems: 'center'}}>

        <Text  style={{fontSize:20}}>MENAGE YOUR </Text>
   <Text style={{fontSize:20}}>TASK</Text>

      </View>


      <View style={{ flex: 6 }}>
        <TextInput>Email Input</TextInput>
      </View>

      <View style={{ flex: 2 ,alignItems: 'center'}}>

        <Text  style={{fontSize:30}}>POWER BIKE </Text>
        <Text  style={{fontSize:30}}>SHOP </Text>

        
      
      </View>



      </View>

  );
}

export default HomeScrent;