import React, { Component } from 'react';
import { Image,Text, View, StyleSheet,ScrollView } from 'react-native';
import {FluidNavigator} from "react-navigation-fluid-transitions"
import Home from "./components/home"
import TestPage from "./components/testpage"

const Nav = new FluidNavigator({
  home:{
    screen:Home
  },
  testPage:{
    screen:TestPage
  }
},
{
  headerMode:"none"
}
)

export default class App extends Component {
  render() {
    return (
 <Nav />
    );
  }
}

 