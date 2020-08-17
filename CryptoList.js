/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import {View, Text, FlatList, Image, Button} from 'react-native';

export default class CryptoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  bodyCardItem(item) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#343434',
          padding: 10,
          borderRadius: 8,
          height:100,
          width:undefined,
          margin:5,
        }}>

        <View style={{flexDirection:'row'}}>
        <Image source={require('./img/profile.jpg')} resizeMode='cover' style={{height : 50, width : 50,margin:10,padding:10,borderRadius:(45/2)}}/>
        
        <View style={{flex:0.8,marginTop:15,marginLeft:15,}}>
        <Text style={{flexDirection:'column'}}>Title</Text>
        <Text style={{flexDirection:'column'}}>Subtitle</Text>
        </View>
        
        <View style={{flex:0.2,marginTop:15,marginRight:15}}>
        <Text style={{flexDirection:'column'}}>Title</Text>
        <Text style={{flexDirection:'column'}}>Subtitle</Text>
        </View>


        </View>

      </View>
    );
  }

  headerCard() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#3105FF',
          padding: 10,
          borderRadius: 10,
          height:200,
          width:undefined,
        }}>

        <View style={{flex:1}}> 
        <Text style={{flex:0.2,marginLeft:10,fontSize:20,fontFamily:'fantasy'}}>Total Market Capitalization</Text>
        <Text style={{flex:0.8,marginLeft:10,fontSize:30}}>Global Charts</Text>
        </View>
        
       
        

      </View>
    );
  }

  render() {
    return (

      
      <View style={{flex:1,backgroundColor:'#272728'}}>
        
        <FlatList
          data={[1, 2, 3, 4, 5,7,8,9]}
          renderItem={({item}) => this.bodyCardItem(item)} 
          ListHeaderComponent = {this.headerCard}
          keyExtractor={(item,index) => index.toString()}
          />


      </View>
      
    );
  }
}
