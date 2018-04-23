import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Util from './../../util/util';
export default class historyAddress extends Component < {} > {
  constructor() {
    super();
  }
  static navigationOptions = {
    headerTitle: '历史地点'
  }
  render() {
    return(
      <View style={styles.container} >
        <FlatList
          data={['1','2','3']}
          renderItem={({item}) => (
            <View style={styles.cellStyle} >
              <View>
                <Text style={{fontSize: 16,color: '#333'}} >环球中心东门214号柜</Text>
                <View style={{flexDirection:'row',marginTop: 10*Util.size.height/667}} >
                  <Image source={{uri:'navigation'}} style={styles.navImg} />
                  <Text style={{fontSize: 14,color: '#999'}} >环球中心东门214号柜</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity style={styles.BtnStyle} onPress={this._nav.bind(this)} >
                  <Text style={{marginLeft:16,marginRight:16,marginTop:6,marginBottom:6,color:'#fff',fontSize:14}} >导航到此</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    )
  }
  _nav() {
    alert('开始导航');
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  cellStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 18*Util.size.height/667,
    paddingBottom: 18*Util.size.height/667,
    paddingLeft: 14*Util.size.width/375,
    paddingRight: 14*Util.size.width/375,
    backgroundColor: '#fff',
    borderBottomColor: '#D7D7D7',
    borderBottomWidth: Util.pixel,
  },
  BtnStyle: {
    backgroundColor: '#E22924',
    borderRadius: 20,
    alignItems: 'center',
  },
  navImg: {
    width:13*Util.size.width/375,
    height:16*Util.size.width/375,
    marginRight:10*Util.size.width/375
  }
})
