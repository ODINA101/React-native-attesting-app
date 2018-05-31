import React, { Component } from 'react';
import { Image,Text, View, StyleSheet,ScrollView,TouchableNativeFeedback,StatusBar } from 'react-native';
import arr from "./subjects";
import Touchable from 'react-native-platform-touchable';
 
export default class Home extends Component {
  render() {
    return (
      <View style={{flex:1}}>
       <StatusBar
          backgroundColor="#C6394A"
          barStyle="light-content"
        />
       <ScrollView style={{flex:1}}>

     {
       
       arr.map(item => {
         return(
          
         
             <Touchable style={{height:130,backgroundColor:item.color,flexDirection:"row",justifyContent:"center",alignItems:"center"}} onPress={() => this.props.navigation.navigate("testPage")}>
         <View style={{backgroundColor:"transparent",flexDirection:"row"}}>
            <Image style={{width:60,height:60}} source={item.img} />
            <Text style={{fontSize:20,color:"#FFF",marginLeft:10}}>{item.name}</Text>
            </View>
         
        </Touchable>
)
       })
     }
       

       </ScrollView>
      </View>
      
    );
  }
}

 