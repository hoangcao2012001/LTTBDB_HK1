import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lab3a from './components/Lab3a'
import Lab3b from './components/Lab3b'

function Home({}) {
  return (
    <View style={{flex:1}}>
     
      
      <Lab3a/> 
   

      
    </View>
  );
}
function Detail(route) {
  return (
    <View>
      <Button title="back"
      onPress ={()=>{
    navigation.navigate('home');
  }}>

      </Button>
      <Lab3b/> 
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;