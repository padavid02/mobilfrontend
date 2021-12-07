import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';





function Nissan({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Toyota')}
        title="Toyota"
      />
    </View>
  );
}

function Toyota({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Nissan" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Nissan">
        <Drawer.Screen name="Nissan" component={Nissan} />
        <Drawer.Screen name="Toyota" component={Toyota} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
