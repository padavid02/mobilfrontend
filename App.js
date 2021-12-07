import * as React from 'react';
import { Button, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (



    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

<View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View >
          <Text style={{color:"blue",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.marka_nev} </Text>
          <Image  source={{uri: 'http://localhost:3000/'+item.tipus_kep}} style={{width:100,height:100,marginLeft:"auto",marginRight:"auto"}} />  

          
          </View>
        
        }

        
          
        />
      </View>

      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Toyota"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
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
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Nissan" component={HomeScreen} />
        <Drawer.Screen name="Toyota" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
