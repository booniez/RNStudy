import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Util from './../../util/util';

export default class about extends Component < {} >{
  constructor() {
    super();
  }
  static navigationOptions = {
    headerTitle: '关于'
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}} >

          <Image source={{uri: 'logo'}} style={{width:91*Util.size.width/375,height:91*Util.size.width/375,marginTop:29*Util.size.height/667}} />
          <Text style={{fontSize:16,color:'#333',marginTop: 18*Util.size.height/667}} >APP名称</Text>
        </View>
        <View style={{borderColor:'#F7F7F7',borderWidth: Util.pixel,marginTop:27*Util.size.height/667}} />
        <Text style={styles.title}>详情介绍详情介绍详情介绍详情介绍详情介绍详情介绍详情介绍详情介绍详情介绍详情介绍详情介绍详情介绍</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  title: {
    fontSize:14,
    color:'#333',
    marginLeft:20*Util.size.width/375,
    marginRight:20*Util.size.width/375,
    marginTop:18*Util.size.height/667,
  }
})
