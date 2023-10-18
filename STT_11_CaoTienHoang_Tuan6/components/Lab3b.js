import React, { useState } from 'react';

import { Pressable, Button, View, Image, Text } from 'react-native';

//khai báo 1 component là lab3 -> để hiển thị giao diện
//flex: 6 là lấy chiếm 6 phần k gian trống
//flexDirection: 'row' sắp xếp theo chiều ngang
// Điều này sẽ chia thành phần ra thành hai phần: một phần chứa hình ảnh và một phần chứa văn bản.


// image là lấy ảnh tạo  bỏ vào tên source và resizeMode="contain" để cho vừa ảnh vào kích thước

//alignItems căn theo trục ngang x
//justifyContent theo trục y dọc

//Pressable tạo 1 cái giống nút có thể nhấp vào bởi ng dùng
//onPress là con của press để xd hành động của ng dùng
function Lab3b() {
  //sử dụng đường dẫn mặc định mặc định đỏ
  var [image, setImage] = useState(require('../assets/anhdo.png'));
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 6, backgroundColor: 'white', flexDirection: 'row' }}>
        <Image
          source={image}
          style={{ width: '200px', height: '500px' }}
          resizeMode="contain"
          
        />
      
        <Text style={{color:'red',fontSize:'50PX'}}>
  Puffer  {'\n'}  Jackets  {'\n'}
  {'\n'}
  <Text style={{color:'black',fontSize:'30px'}}>
    SIZE S : 45KG
    SIZE M : 70KG
    SIZE X : 90KG


  </Text>
 

</Text>




      </View>
     
        
      BẢNG MÀU

      <View
      
      //style này là tổng của cái ô dưới
        style={{
          width: '400px',
          height: '5px',
          flex: 4,
          //flexDirection: 'row', cho nằm ngang
          flexDirection: 'row',
          backgroundColor: '#C4C4C4',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          
        <Pressable
          onPress={() => {
            //click đỏ
            setImage(require('../assets/anhdo.png'));
          }}
          style={{
            width: '70px',
            height: '70px',
            backgroundColor: 'red',
          }}></Pressable>
        <Pressable
          onPress={() => {
            setImage(require('../assets/anh2 den.jpg'));
          }}
          style={{
            width: '70px',
            height: '70px',
            backgroundColor: 'black',
          }}></Pressable>
          
        <Pressable
        onPress={() => {
            setImage(require('../assets/anh 4 tim.jpg'));
          }}
          style={{
            width: '70px',
            height: '70PX',
            backgroundColor: 'purple',
          }}></Pressable>


        <Pressable
        onPress={() => {
            setImage(require('../assets/anh3 xanh den.jpg'));
          }}
          style={{
            width: '70px',
            height: '70px',
            backgroundColor: '#000080',
          }}></Pressable>
      </View>
    </View>
  );
}

export default Lab3b;
