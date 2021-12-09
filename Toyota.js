import React, { Component } from 'react';
import { Text,FlatList,Image,View} from 'react-native';

export default class BoldAndBeautiful extends Component {
   
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    componentDidMount(){
        return fetch('http://localhost:3000/tipus')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson,
            }, function(){
    
            });
    
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
          <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.marka_nev, item.tipus_nev} </Text>
          <Image  source={{uri: 'http://localhost:3000/'+item.tipus_kep}} style={{width:300,height:300,marginLeft:"auto",marginRight:"auto"}} />         
          </View>      
        }        
        />
      </View>
    );
  }
}