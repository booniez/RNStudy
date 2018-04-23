import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
} from 'react-native';
import Util from '../../../util/util';
export default class myDeposit extends Component < {} > {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2,
    });
    this.state = {
        dataSource: ds.cloneWithRows(['','']),
    };
  }
  static navigationOptions = {
    headerTitle: '我的押金'
  }
  render() {
    return(
      <View style={styles.container}>
       <View style={styles.amountView} >
        <View style={{flexDirection:'row'}} >
          <Text>我的现有押金：</Text>
          <Text style={{color:'#E22924'}} >99</Text>
          <Text>元</Text>
        </View>
        <TouchableOpacity style={styles.BtnStyle} onPress={this._pay.bind(this)} >
          <Text style={{margin:10,color:'#fff'}} >充值押金</Text>
        </TouchableOpacity>
       </View>
       <ListView
       ref={(listView) => {
           _listView = listView
       }}
       style={styles.container}
       dataSource={this.state.dataSource}
       renderRow={(rowData) => (
           <TouchableOpacity style={styles.cellStyle} onPress={this._showDetail.bind(this, rowData)} >
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
                <View style={{flexDirection:'row',alignItems:'center'}} >
                  <Text style={{fontSize:52,color:'red'}} >99</Text>
                  <Text style={{fontSize:22,color:'red',marginTop:17*Util.size.width/375}} > 元</Text>
                </View>
                <TouchableOpacity style={styles.convertStyle} onPress={this._convert.bind(this)} >
                  <Text style={{color:'#fff'}} >提现</Text>
                </TouchableOpacity>
              </View>
              <View style={{ borderColor: '#F0F0F0', borderWidth: Util.pixel, marginTop:10 }} />
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                <Text style={{color:'#333'}} >充值时间：2017-11-11 11:11</Text>
                <Text style={{color:'#333'}} >状态：可提现</Text>
              </View>

           </TouchableOpacity>
       )}
       horizontal={false}
       showsHorizontalScrollIndicator={false}
       enableEmptySections={true}
       style={{flex:1,backgroundColor:'#F7F7F&'}}>
       </ListView>
      </View>
    )
  }
  _showDetail() {

  }
  _convert() {

  }
  _pay() {

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  amountView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  BtnStyle: {
    backgroundColor: '#E22924',
    borderRadius: 20,
    alignItems: 'center',
  },
  convertStyle: {
    backgroundColor: '#E22924',
    borderRadius: 20,
    width: 80*Util.size.width/375,
    height: 35*Util.size.height/667,
    alignItems: 'center',
    justifyContent:'center',
  },
  cellStyle: {
      flex: 1,
      width: Util.size.width*0.9,
      marginLeft: Util.size.width*0.035,
      borderColor: '#E22924',
      padding: 15,
      marginTop: 20,
      borderWidth: Util.pixel,
      borderBottomWidth: Util.pixel*10,
      backgroundColor: '#fff',
  },
})
