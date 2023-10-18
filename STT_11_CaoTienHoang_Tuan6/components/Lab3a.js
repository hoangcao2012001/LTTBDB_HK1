import React, { useState } from 'react';
import { Pressable, Button, View, Image, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


function Lab3a() {
  const navigation = useNavigation();

  var [image, setImage] = useState(require('../assets/anhdo.png'));
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 7 }}>
        <Image
          source={image}
          style={{ width: null, height: '270px' }}
          resizeMode="contain"
        />
      </View>

      <View style={{ flex: 1 , alignItems:'center'}}>
      <Pressable
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            width: '90%',
            height: '30px',
            borderWidth: '1px',
            borderColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: 'black' }}>CHỌN MÀU</Text>
        </Pressable>
        
      </View>
      <View style={{ flex: 1 }}>
      <Button
          title="Màu Đen"
          onPress={() => {
            //click đỏ
            setImage(require('../assets/anh2 den.jpg'));
          }}
          color="black"
        />
      </View>

      <View style={{ flex: 1 }}>
      <Button
          title="Màu Đỏ"
          onPress={() => {
            //click đỏ
            setImage(require('../assets/anhdo.png'));
          }}
          color="red"
        />
        
        
      </View>
      <View style={{ flex: 1 }}>
      <Button
          title="Màu Đỏ"
          onPress={() => {
            //click đỏ
            setImage(require('../assets/anh 4 tim.jpg'));
          }}
          color="purple"
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}></View>
      <View style={{ flex: 1, alignItems: 'center' }}>
       
      <Button title="Chọn Mua"
  onPress ={()=>{
    navigation.navigate('detail');
  }}
>


      </Button>
          
        
      </View>
    </View>
  );
}

export default Lab3a;
