import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Util from '../../util/util';
export default class recycleClearSuccess extends Component < {} > {
  constructor() {
    super()
  }
  static navigationOptions = {
    headerTitle: '清零成功'
  }
  render() {
    return(
      <View style={styles.container} >
        <Image source={{uri: 'success'}} style={styles.imageStyle}/>
        <Text style={styles.tipText} >清零成功!</Text>
        <Text style={styles.cabinetText} >当前回收柜计数：0</Text>
        <View />
        <TouchableOpacity style={styles.BtnStyle} onPress={this._confirm.bind(this)} >
          <Text style={{color:'#fff',fontSize:16}} >完成</Text>
        </TouchableOpacity>
      </View>
    )
  }
  _confirm() {

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  imageStyle: {
    width: 115*Util.size.width/375,
    height: 115*Util.size.width/375,
    marginTop:60*Util.size.height/667,
  },
  tipText: {
    fontSize: 20,
    color: '#333333',
    marginTop: 42*Util.size.height/667,
  },
  cabinetText: {
    fontSize: 16,
    color: '#333',
    marginTop: 12*Util.size.height/667,
  },
  whiteBtnStyle: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 58*Util.size.height/667,
    width: 351*Util.size.width/375,
    marginLeft: 12*Util.size.width/375,
    height: 49*Util.size.height/667,
    backgroundColor: '#fff',
    borderRadius: 49*Util.size.height/667/2,
    borderWidth: Util.pixel*2,
    borderColor: '#E22924',

  },
  BtnStyle: {
    marginTop: 86*Util.size.height/667,
    width: 351*Util.size.width/375,
    height: 49*Util.size.height/667,
    backgroundColor: '#E22924',
    borderRadius: 49*Util.size.height/667/2,
    alignItems: 'center',
    justifyContent:'center',
  },
})
