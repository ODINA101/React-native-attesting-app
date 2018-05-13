import React, { Component } from 'react';
import { Image,Text, View, StyleSheet,ScrollView } from 'react-native';
import arr from "./components/subjects";
 
 
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
       <ScrollView style={{flex:1}}>

     {
       
       arr.map(item => {
         return(
           <View style={{height:130,backgroundColor:item.color,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
       <Image style={{width:60,height:60}} source={item.img} />
       <Text style={{fontSize:20,color:"#FFF",marginLeft:10}}>{item.name}</Text>
       </View>
)
       })
     }
       

       </ScrollView>
      </View>
    );
  }
}

 