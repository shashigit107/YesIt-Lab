
import React from 'react';

import {
  Text,
  View,
  StatusBar
} from 'react-native';
import HomeScreen from './src/screen/HomeScreen';

function App() {
 
return (
     <>
     <StatusBar
          barStyle="dark-content"
          backgroundColor="#90ee90"
        />
    <HomeScreen/>
    </>
     
 
)
  
};

export default App;
