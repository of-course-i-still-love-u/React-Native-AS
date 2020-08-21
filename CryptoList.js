import React, {Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
const CallLogo = require('./Logo');


export default class CryptoList extends Component {
  constructor(props) {
    super(props);
    this.state = {

      Data :[],
      DataHC_eth_dominance:[],
      DataHC_btc_dominance :[],
      DataHC_total_market_cap :[],


    };
  }

  componentDidMount(){

    this.getData()
    this.getData2()
    
  }

  getData = async () =>{

    
    const apiURL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100"
    
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

    getData2 = async () =>{

    
      const apiURL = "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest"
      
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
  

        let eth_dominance = resJson.data.eth_dominance
        let btc_dominance = resJson.data.btc_dominance
        let total_market_cap =  resJson.data.quote.USD.total_market_cap
  

        this.setState({

           DataHC_eth_dominance:eth_dominance.toFixed(1),
           DataHC_btc_dominance:btc_dominance.toFixed(1),
           DataHC_total_market_cap:total_market_cap.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
     
        })


        //  console.log('DataAfterGet2 :', this.state.Data2_2)

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
        <Text style={{fontSize:19,color:'#f8f8f8',marginLeft:-22,marginBottom:5}}>
        {
          item.quote.USD.price.toFixed( 4 )
          //.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
          </Text>
        
        <View style={styles.bodyCardSubItem}>
        <Text style={{fontSize:14,color:'#000030'}}>{item.quote.USD.percent_change_24h.toFixed( 2 )+' %'}</Text>
        </View>
        </View>
        


        </View>

      </View>
    );
  }

  // headerCard = () =>{

    
  //   return (
  //     <View
  //       style={styles.headerCard}>

  //       <View style={{flex:1}}> 
  //       <Text style={{flex:0.2,marginLeft:10,fontSize:20,fontFamily:'fantasy',color:'#f8f8f8'}}>Total Market Capitalization</Text>
  //       <Text style={{flex:0.8,marginLeft:10,fontSize:30,fontFamily:'fantasy',color:'#f8f8f8'}}>{this.state.Data2.btc_dominance}</Text>
  //       </View>
  //     </View>
  //   );
    
  // }

  render() {
    return (

      
      <View style={styles.container}>
        
        <FlatList
          data={this.state.Data}
          renderItem={({item}) => this.bodyCardItem(item)} 
          ListHeaderComponent = {

          <View style={styles.headerCard}>
          <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}> 
          <Text style={{marginLeft:20,fontSize:15,fontFamily:'fantasy',marginVertical:5,color:'#cccccc'}}>Total Market Capitalization</Text>
          <Text style={{marginLeft:20,fontSize:40,fontFamily:'fantasy',color:'#FFFFFF',marginVertical:10}}>{'$ '+this.state.DataHC_total_market_cap}</Text>
          </View>

          <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',}} >
        
            <Image source={{uri:CallLogo.Bitcoin}} resizeMode='cover' style={{height:34,width:34,borderRadius:34/2,marginHorizontal:10}} />
          
          <Text style={{fontSize:20,fontFamily:'fantasy',color:'#FFFFFF',marginHorizontal:10}}>{this.state.DataHC_btc_dominance+' %'}</Text>
          <Text style={{fontSize:50,fontFamily:'fantasy',color:'#FFFFFF',marginHorizontal:10}}>|</Text>
          
            <Image source={{uri:CallLogo.Ethereum}} resizeMode='cover' style={{height:34,width:34,borderRadius:34/2,marginHorizontal:10}} />
         
          <Text style={{fontSize:20,fontFamily:'fantasy',color:'#FFFFFF',marginHorizontal:10}}>{this.state.DataHC_eth_dominance+' %'}</Text>

          
          
          </View>
          </View>
          }
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
          borderRadius: 20,
          height:200,
          width:undefined,
          marginVertical:5,
          marginHorizontal:0
          
          

  },
  bodyCardItem:{
          
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#343434',
          padding: 10,
          borderRadius: 8,
          height:100,
          width:undefined,
          marginHorizontal:15,
          marginVertical:5,
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