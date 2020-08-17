import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import FloatingActionButton from  './FloatingActionButton';
import CryptoList from './CryptoList';


export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  render() {
    return (
      <View style={styles.container}>
        <CryptoList/>

      
      <View style={styles.floatingAB}>
      <FloatingActionButton />
      </View>
      </View>


    );
  }
}



const styles = StyleSheet.create({

  container:{
    flex: 1,
  },
  floatingAB:{
    alignItems:"center",
     bottom:100,


  }
 

})

