import React, { Component } from 'react';
import {StyleSheet, Text,View, FlatList, Image, TouchableOpacity } from 'react-native';

export default class Nissan extends Component {



  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      dataSource:[]
    }
  }
componentDidMount(){ 
  alert("hello")

    return fetch('http://192.168.1.119:3000/mindenadat')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function(){

        });
alert(JSON.stringify(this.state.dataSource))
      })
      .catch((error) =>{
        console.error(error);
      });  

  }





  render() {
    return (
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View >
          <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.tipus_nev} </Text>
          <Image  source={{uri: 'http://192.168.1.119:3000/'+item.tipus_kep}} style={{width:300,height:300,marginLeft:"auto",marginRight:"auto"}} />  
          <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >
            {item.tipus_evjarat}</Text>
            <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.tipus_ajtokszama} </Text>
            <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   > {item.tipus_motor}</Text>
            <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{ item.tipus_km }</Text>
            <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.tipus_gumimeret} </Text>
            <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.tipus_allapot} </Text>

          <TouchableOpacity
        style={styles.kekgomb}
        onPress={async ()=>this.szavazat(item.tipus_id)}
      >
        <Text style={{color:"white",fontWeight:"bold",fontSize:15}}  >Erre szavazok</Text>
      </TouchableOpacity>
          </View>
        
        }

        
          keyExtractor={({tipus_id}, index) => tipus_id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
  }
});