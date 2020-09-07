import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import styles from './styleZ'
const DataFromLocal = require('./AllData.json')




export default class CryptoList extends Component {
  constructor(props) {
    super(props);
    this.state = {

      Data: [],
      DataFL: DataFromLocal,
      DataHC_eth_dominance: [],
      DataHC_btc_dominance: [],
      DataHC_total_market_cap: [],


    };
  }

  componentDidMount() {

    //this.getData()
    this.getData2()

  }

  getData = async () => {


    const apiURL = "http://172.20.10.5:8082/getapi/data"

    fetch(apiURL,
      {

        method: 'GET',
        json: true,
        gzip: true
      })

      .then((res) => res.json())
      .then((resJson) => {

        let saveData = resJson

        this.setState({
          Data: saveData

        })


      })

  }

  getData2 = async () => {

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
      .then((resJson) => {


        let eth_dominance = resJson.data.eth_dominance
        let btc_dominance = resJson.data.btc_dominance
        let total_market_cap = resJson.data.quote.USD.total_market_cap


        this.setState({

          DataHC_eth_dominance: eth_dominance.toFixed(1),
          DataHC_btc_dominance: btc_dominance.toFixed(1),
          DataHC_total_market_cap: total_market_cap.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")

        })

      })

  }

  redCard(item) {
    return (
      <View style={{
        alignItems: 'center',
        height: 20,
        width: 60,
        backgroundColor: '#FF0000',
        borderRadius: 60 / 2,
        justifyContent: 'center'
      }}>

        <Text style={{ fontSize: 14, color: '#000030' }}>
          {

            item.percent_change_24h.toFixed(2) + " %"
          }
        </Text>
      </View>
    )
  }

  greenCard(item) {
    return (
      <View style={{
        alignItems: 'center',
        height: 20,
        width: 60,
        backgroundColor: '#00FF00',
        borderRadius: 60 / 2,
        justifyContent: 'center',

      }}>

        <Text style={{ fontSize: 14, color: '#000030' }}>
          {

            item.percent_change_24h.toFixed(2) + ' %'
          }
        </Text>


      </View>
    )
  }


  bodyCardItem(item) {
    return (
      <View
        style={styles.bodyCardItem}>

        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: item.logo }} resizeMode='cover' style={styles.bodyCardItemImg} />

          <View style={{ flex: 0.8, marginTop: 15, marginLeft: 15, }}>
            <Text style={styles.bodyCardItemText}>{item.name}</Text>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 14, color: '#f8f8f8', marginRight: 15 }}>{item.symbol}</Text>
              <View style={styles.bodyCardItemRank} >
                <Text style={{ fontSize: 14, color: '#f8f8f8' }}>{item.cmc_rank}</Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 0.3, marginRight: 15, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 19, color: '#f8f8f8', marginLeft: -22, marginBottom: 5 }}>
              {
                item.prices >= 1 ? item.prices.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : item.prices.toFixed(4)
              }
            </Text>

            <View style={styles.bodyCardSubItem}>
              <Text style={{ fontSize: 14, color: '#000030' }}>
                {
                  item.percent_change_24h < 0 ? this.redCard(item) : this.greenCard(item)
                }
              </Text>
            </View>
          </View>



        </View>

      </View>
    );
  }

  headerCard(item) {


    return (

      <View style={styles.headerCard}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
          <Text style={{ marginLeft: 20, fontSize: 15, fontFamily: 'fantasy', marginVertical: 5, color: '#cccccc' }}>Total Market Capitalization</Text>
          <Text style={{ marginLeft: 20, fontSize: 40, fontFamily: 'fantasy', color: '#FFFFFF', marginVertical: 10 }}>{'$ ' + this.state.DataHC_total_market_cap}</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >

          <Image source={ require('./img/btc-img.png')} resizeMode='cover' style={{ height: 64, width: 64, marginHorizontal: 10 }} />

          <Text style={{ fontSize: 20, fontFamily: 'fantasy', color: '#FFFFFF', marginHorizontal: 10 }}>{this.state.DataHC_btc_dominance + ' %'}</Text>
          <Text style={{ fontSize: 50, fontFamily: 'fantasy', color: '#FFFFFF', marginHorizontal: 10 }}>|</Text>

          <Image source={source=require('./img/ETH-img.png')} resizeMode='cover' style={{ height: 64, width: 64, marginHorizontal: 10 }} />

          <Text style={{ fontSize: 20, fontFamily: 'fantasy', color: '#FFFFFF', marginHorizontal: 10 }}>{this.state.DataHC_eth_dominance + ' %'}</Text>

        </View>
      </View>

    )
  }


  render() {
    return (


      <View style={styles.container}>

        <FlatList
          data={this.state.DataFL}
          renderItem={({ item }) => this.bodyCardItem(item)}
          ListHeaderComponent={({ item }) => this.headerCard(item)}
          keyExtractor={(item, index) => index.toString()}
        />

      </View>

    );
  }
}


