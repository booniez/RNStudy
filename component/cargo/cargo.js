import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Util from './../../util/util';
export default class cargo extends Component <{}> {
  constructor() {
    super()
  }
  static navigationOptions = {
    headerTitle: '货品管理'
  }
  render(){
    return(
      <View>
        {this.renderCell('上架玩具',0,'shelf')}
        {this.renderCell('下架玩具',1,'drop_off')}
        {this.renderCell('清空归还柜',2,'empty')}
      </View>
    )
  }
  _funcMudle(tag) {
    switch (tag) {
      case 0:
        this.props.navigation.navigate('addCargo');
        break;
      case 1:
        this.props.navigation.navigate('remove');
        break;
      case 2:
        this.props.navigation.navigate('recycle');
        break;
      default:
        break;
    }
  }
  renderCell(title,tag,img) {
    return(
      <TouchableOpacity style={styles.cellStyle} onPress={this._funcMudle.bind(this,tag)} >
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image source={{uri: img}} style={{width:76*Util.size.width/375,height:76*Util.size.width/375,borderRadius:38*Util.size.width/375}} />
          <Text style={{marginLeft:48*Util.size.width/375,fontSize:19,color:'#333'}} >{title}</Text>
        </View>
        <Image source={require('./../..//source/icons/more.png')} style={{width:10*Util.size.width/375,height:18*Util.size.height/667,marginRight:38*Util.size.width/375}} />
      </TouchableOpacity>
    )
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
    alignItems: 'center',

    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingTop: 10*Util.size.height/667,
    paddingBottom: 10*Util.size.height/667,
    paddingLeft: 38*Util.size.width/375,
    marginBottom: Util.pixel,
  }
})
