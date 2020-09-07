
import {StyleSheet} from 'react-native'



    const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#272728',
  
    },
    headerCard: {
  
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#3105FF',
      padding: 10,
      borderRadius: 15,
      height: 200,
      width: undefined,
      marginVertical: 5,
      marginHorizontal: 0
  
  
  
    },
    bodyCardItem: {
  
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#343434',
      padding: 10,
      borderRadius: 8,
      height: 90,
      width: undefined,
      marginHorizontal: 15,
      marginVertical: 5,
      justifyContent: 'center',
  
  
    },
    bodyCardItemImg: {
  
      height: 44,
      width: 44,
      margin: 10,
      padding: 10,
      borderRadius: (44 / 2),
    },
    bodyCardSubItem: {
  
      // alignItems: 'center',
      // height: 20,
      // width: 60,
      // borderRadius: 60 / 2,
      // justifyContent: 'center'
  
    },
    bodyCardItemText: {
  
      flexDirection: 'column',
      fontSize: 19,
      fontFamily: 'fantasy',
      color: '#ff0074'
  
  
    },
    bodyCardItemRank: {
      width: 30,
      height: 30,
      backgroundColor: '#272728',
      borderRadius: 5,
      alignItems: 'center',
      marginTop: -1,
      justifyContent: 'center',
  
    }
  
  
  })
  export default styles;