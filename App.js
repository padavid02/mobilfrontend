import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Nissan from "./Nissan";
import Toyota from "./Toyota";




function Nissanlap({ navigation }) {
  return (
   <Nissan />
  );
}

function Toyotalap({ navigation }) {
  return (
    <Toyota />
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Nissan">
        <Drawer.Screen name="Nissan" component={Nissanlap} />
        <Drawer.Screen name="Toyota" component={Toyotalap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
