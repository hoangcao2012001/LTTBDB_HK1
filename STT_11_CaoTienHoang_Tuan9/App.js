import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './compoments/Login';

function Home({ navigation }) {
  const handleSignIn = (user) => {
    console.log('Đăng nhập thành công', user);
    navigation.navigate('DETAIL', { user });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Login signIn={handleSignIn} />
    </View>
  );
}

function Detail({ route }) {
  // Truy cập thông tin người dùng từ đối tượng route
  const { user } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{`Welcome, ${user.User}!`}</Text>
      {/* Các thành phần khác của màn hình Detail */}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LINKEDIN" component={Home} />
        <Stack.Screen name="DETAIL" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
