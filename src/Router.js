import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';



const Stack = createNativeStackNavigator();

// const headShowy = {headerShown: false}; bu sekilde options={headShowy} de olur asagidaki gibi globalde de olur


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen
          name="WelcomeScreen"
          component={Welcome}
        />
        <Stack.Screen
          name='MemberSignScreen'
          component={MemberSign}
        />
        <Stack.Screen 
          name='MemberResultScreen'
          component={MemberResult}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default App;