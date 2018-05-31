import React, { Component } from 'react'
import { Text, View,Dimensions } from 'react-native'
import   Touchable   from 'react-native-platform-touchable';
export default class TestPage extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:"#C6394A",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

  <View style={{width:Dimensions.get("window").width/1.1,height:(Dimensions.get("window").width*1.2),backgroundColor:"#FFF",elevation:3,marginTop:-30}} >
      <View style={{padding:20}}>
      <Text style={{fontSize:18,color:"#000",fontWeight:"bold"}}>Question !</Text>
  
     </View>
  
  <View style={{height:10,flexDirection:"row",backgroundColor:"pink"}} >
 <View  style={{flex:0.1,backgroundColor:"#C6394A",borderTopRightRadius:20,borderBottomRightRadius:20}}/>
<View style={{flex:1,backgroundColor:"pink"}} />
 <View style={{flex:0.1,backgroundColor:"#C6394A",borderTopLeftRadius:20,borderBottomLeftRadius:20}} />
 </View>
<View style={{flex:1}}>
{

Array.apply(null,Array(4)).map((item,i) => {
  return (
<Touchable  style={{flex:1}}>
<Text>პასუხი {i}</Text>
</Touchable>
 
  )
})

}
 </View>

  
  </View>
     



 
      </View>
    )
  }
}