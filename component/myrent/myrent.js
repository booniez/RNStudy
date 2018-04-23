import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';
import Util from './../../util/util';

let dataArray =[''];

export default class myrent extends Component < {} > {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2,
    });
    this.state = {
        dataSource: ds.cloneWithRows(dataArray),
    };
  }
  static navigationOptions ={
    headerTitle: '我的租用'
  }
  render() {
    return(
      <View style={styles.container} >
          <ListView
          ref={(listView) => {
              _listView = listView
          }}
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <View style={{backgroundColor:'#fff'}} >

              <View style={styles.topOrderInfo} >
                <View style={{flexDirection:'row'}} >
                  <Text style={[styles.title,{color:'#333',marginLeft:12*Util.size.width/375}]} >订单号：89492749</Text>
                  <Text style={[styles.title,{color:'#333',marginLeft:29*Util.size.width/375}]} >2017-08-03 17:32</Text>
                </View>
                <TouchableOpacity style={[{marginRight:12*Util.size.width/375}]} >
                  <Text style={[styles.title,{color:'#E22924'}]}>已购买</Text>
                </TouchableOpacity>
              </View>
              <View style={{backgroundColor:'#fff',marginTop:10}} >
                <View style={{ backgroundColor: '#D8D8D8', height: Util.pixel,marginLeft:12*Util.size.width/375,marginRight:12*Util.size.width/375}} ></View>
              </View>


              <View style={styles.toyMsg} >
                <Image source={{uri: 'toy_4'}} style={{width:100,height:100}} />
                <View>
                  <Text style={{marginTop:20,fontSize:16,color:'#333'}} >玩具汽车</Text>
                  <View style={{flexDirection:'row',justifyContent: 'space-between'}} >
                    <Text style={{fontSize:14,color:'#666',marginTop:20*Util.size.height/667}} >已租：5天</Text>
                    <View style={{flexDirection:'row',marginLeft:50*Util.size.width/375}} >
                        <Text style={{fontSize:14,color:'#666',marginTop:20*Util.size.height/667}}>产生租金：</Text>
                        <Text style={{fontSize:18,color:'#E22924',marginTop:15*Util.size.height/667}}>10</Text>
                        <Text style={{fontSize:14,color:'#666',marginTop:20*Util.size.height/667}}>元</Text>

                    </View>

                  </View>
                </View>
              </View>
              <View style={{backgroundColor:'#fff',marginTop:10}} >
                <View style={{ backgroundColor: '#D8D8D8', height: Util.pixel,marginLeft:12*Util.size.width/375,marginRight:12*Util.size.width/375}} ></View>
              </View>

              <View style={styles.actionView} >
                <TouchableOpacity style={styles.BtnStyle} onPress={this._applyReimburse.bind(this)} >
                  <Text style={{margin:10,color:'#fff'}} >申请退款</Text>
                </TouchableOpacity>
              </View>
              <View style={{ borderColor: '#F7F7F7', borderWidth: Util.pixel*3, marginTop: 5 }} ></View>
            </View>

          )}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          enableEmptySections={true}
          style={{flex:1}} />
      </View>
    )
  }
  _applyReimburse() {
    this.props.navigation.navigate('refundCash');
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  topOrderInfo: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:10
  },
  toyMsg: {
    flexDirection: 'row',
  },
  actionView: {

  },
  BtnStyle: {
    margin:10,
    width: Util.size.width*0.4,
    marginLeft: Util.size.width*0.3,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems:'center',
  },
  title: {
    fontSize: 14,
  }
})
