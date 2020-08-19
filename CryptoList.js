import React, {Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
const CallLogo = require('./Logo');

export default class CryptoList extends Component {
  constructor(props) {
    super(props);
    this.state = {

      Data :[],


    };
  }

  componentDidMount(){

    this.getData()
    
  }

  getData = async () =>{

    // const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=10"
    const apiURL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100"
    // const apiURL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=1,2"
    fetch(apiURL,
      {
      
    method: 'GET',
    qs: {
     
    },
    headers: {
      'X-CMC_PRO_API_KEY': '631cf6a4-cd39-4359-8a31-c8142aac780a',
    },
    json: true,
    gzip: true
  })
  
    .then((res) => res.json())
    .then((resJson) =>{

      let saveData = resJson.data

      this.setState({
        Data:saveData
   
      })
    
      //  console.log('DataAfterGet :', this.state.Data);
     
    })

    }


  bodyCardItem(item) {
    return (
      <View
        style={styles.bodyCardItem}>

        <View style={{flexDirection:'row'}}>
        <Image source={{uri:CallLogo.Bitcoin}} resizeMode='cover' style={styles.bodyCardItemImg}/>
        
        <View style={{flex:0.8,marginTop:15,marginLeft:15,}}>
        <Text style={styles.bodyCardItemText}>{item.name}</Text>

        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:14,color:'#f8f8f8',marginRight:15}}>{item.symbol}</Text>
        <View style={styles.bodyCardItemRank} >
        <Text style={{fontSize:14,color:'#f8f8f8'}}>{item.cmc_rank}</Text>
        </View>
        </View>
        </View>
        
        <View style={{flex:0.3,marginRight:15,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:16,color:'#f8f8f8',marginLeft:-15,marginBottom:5}}>
        {
          item.quote.USD.price.toFixed( 4 )
          //.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
          </Text>
        
        <View style={styles.bodyCardSubItem}>
        <Text style={{fontSize:14,color:'#000030'}}>{item.quote.USD.percent_change_24h.toFixed( 2 )}</Text>
        </View>
        </View>
        


        </View>

      </View>
    );
  }

  headerCard() {
    return (
      <View
        style={styles.headerCard}>

        <View style={{flex:1}}> 
        <Text style={{flex:0.2,marginLeft:10,fontSize:20,fontFamily:'fantasy',color:'#f8f8f8'}}>Total Market Capitalization</Text>
        <Text style={{flex:0.8,marginLeft:10,fontSize:30,fontFamily:'fantasy',color:'#f8f8f8'}}>Global Charts</Text>
        </View>
        
       
        

      </View>
    );
  }

  render() {
    return (

      
      <View style={styles.container}>
        
        <FlatList
          data={this.state.Data}
          renderItem={({item}) => this.bodyCardItem(item)} 
          ListHeaderComponent = {this.headerCard}
          keyExtractor = {(item,index) => index.toString()}
          />

      

      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#272728',

  },
  headerCard:{
          
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#3105FF',
          padding: 10,
          borderRadius: 10,
          height:200,
          width:undefined,

  },
  bodyCardItem:{
          
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#343434',
          padding: 10,
          borderRadius: 8,
          height:100,
          width:undefined,
          margin:5,
          justifyContent:'center',
  },
  bodyCardItemImg:{
     
      height : 64, 
      width : 64,
      margin:10,
      padding:10,
      borderRadius:(64/2),
  },
  bodyCardSubItem:{
    
    alignItems:'center',
    height:20,
    width:60,
    backgroundColor:'#00ff00',
    borderRadius:60/2,
    justifyContent:'center'

  },
  bodyCardItemText:{

    flexDirection:'column',
    fontSize:19,
    fontFamily:'fantasy',
    color:'#ff0074'


  },
  bodyCardItemRank:{
    width:30,
    height:30,
    backgroundColor:'#272728',
    borderRadius:5,
    alignItems:'center',
    marginTop:-1,
    justifyContent:'center',

  }


})