import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MainPage from './pages/MainPage';

const Stack = createNativeStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name='WelcomeScreen'
          component={Welcome}
        />
        <Stack.Screen
          name='MemberSignScreen'
          component={MemberSign}
        />
        <Stack.Screen
          name='MainPageScreen'
          component={MainPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;