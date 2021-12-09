import React, { Component } from 'react';
import { Text } from 'react-native';

export default class BoldAndBeautiful extends Component {



  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
componentDidMount(){
    return fetch('http://localhost:3000/marka ')
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
      <Text style={{fontWeight: 'bold'}}>
        I am bold
        <Text style={{color: 'red'}}>
          and red
        </Text>
      </Text>
    );
  }
}