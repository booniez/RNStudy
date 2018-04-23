import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';

import Util from './../../util/util';
import scan from './scan';
import depositNotice from './depositNotice';

export default class toyMsg extends Component < {} > {
  static navigationOptions = {
    headerTitle: '玩具详情'
}
  render() {
    return(
      <View style={styles.container} >
        <ScrollView>
          <Image style={styles.img} source={{ uri: 'toy_big' }} />

          <View style={{flexDirection:'row',justifyContent:'space-between'}} >
            <Text style={styles.nameText} >遥控汽车</Text>
            <Text style={styles.thread} >------------</Text>
            <Text style={styles.cabinetText} >柜门号：1-1-1</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:13*Util.size.width/375}} >
            <Text style={{fontSize:14,color:'#333',marginTop:23*Util.size.height/667}} >租金：</Text>
            <Text style={{color:'#E22924',fontSize:20,marginTop:17*Util.size.height/667}}>¥5</Text>
            <Text style={{fontSize:14,color:'#333',marginTop:23*Util.size.height/667}} >/天</Text>
            <Text style={{fontSize:14,color:'#999',marginLeft:14*Util.size.width/375,marginTop:23*Util.size.height/667}}>吊牌价格：100元</Text>
            <Text style={{fontSize:14,color:'#333',marginLeft:40*Util.size.width/375,marginTop:23*Util.size.height/667}}>购买价：</Text>
            <Text style={{fontSize:20,color:'#E22924',marginTop:17*Util.size.height/667,marginRight:10*Util.size.width/375,}}>¥95</Text>
          </View>
          <View style={{ borderColor: '#F0F0F0', borderWidth: Util.pixel, marginTop: 5 }} />
          <Text>玩具参数</Text>
          <Text>图文详情图文详情图文详情</Text>
          <Text>图文详情图文详情图文详情</Text>
          <Text>图文详情图文详情图文详情</Text>
        </ScrollView>
        <View style={styles.rentView} >
          <TouchableOpacity style={styles.navBtnStyle} onPress={this.immediatelyRent.bind(this)} >
            <Text style={{margin:10,color:'#fff'}} >立即租用</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  immediatelyRent() {
    // this.props.navigation.navigate('scan', {isDiscriminate:false});
    this.props.navigation.navigate('depositNotice');
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  img: {
    width: Util.size.width,
    height: Util.size.height * 200 / 736,
  },
  navBtnStyle: {
    backgroundColor: '#E22924',
    borderRadius: 20,
    alignItems: 'center',
  },
  rentView: {
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 10,
  },
  nameText: {
    fontSize:18,
    color: '#333',
    marginLeft: 13*Util.size.width/375,
    marginTop:18*Util.size.height/667,
  },
  thread: {
    marginLeft: 10*Util.size.width/375,
    marginTop: 25*Util.size.height/667,
    fontSize:12,
    color:'#E22924',
    width:150*Util.size.width/375,
  },
  cabinetText: {
    marginRight:10*Util.size.width/375,
    marginTop:23*Util.size.height/667,
    fontSize:14,
    color: '#333'
  }
})
