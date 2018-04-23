import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Modal,
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
        show:false,
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
       <Modal
           animationType='slide'
           transparent={true}
           visible={this.state.show}
           onShow={() => {}}
           onRequestClose={() => {}} >
           <View style={styles.modalStyle}>
               <View style={styles.subView}>
                   <View style={styles.topTitleView} >
                       <Text style={{marginLeft: Util.size.width*155/375,fontSize:18}} >押金缴纳</Text>
                       <View>
                       <TouchableOpacity onPress={this._rightButtonClick.bind(this)} >
                         <Text style={styles.cancelText}>取消</Text>
                       </TouchableOpacity>
                       </View>
                   </View>
                   <View style={{ borderColor: '#F0F0F0', borderWidth: Util.pixel, marginTop: 5 }} />
                   <View style={styles.amount} >
                       <Text style={{fontSize:16,marginLeft: Util.size.width*175/375 - 4,marginTop:24*Util.size.height/667}} >¥ </Text>
                       <Text style={{fontSize:24,marginTop:16*Util.size.height/667}} >99</Text>
                   </View>
                   <TouchableOpacity style={styles.paycellStyle} onPress={this._chosePayType.bind(this,'余额支付')} >
                       <View style={{flexDirection: 'row',alignItems: 'center',}} >
                       <Image source={{uri: 'balance'}} style={styles.imageStyle} />
                       <Text style={styles.textStyle}>
                       余额支付
                       </Text>
                       </View>
                       <Image source={require('./../../..//source/icons/more.png')} style={{width:20,height:20,marginRight:10}} />
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.paycellStyle} onPress={this._chosePayType.bind(this,'支付宝支付')} >
                       <View style={{flexDirection: 'row',alignItems: 'center',}} >
                       <Image source={{uri: 'alipay'}} style={styles.imageStyle} />
                       <Text style={styles.textStyle}>
                           支付宝支付
                       </Text>
                       </View>
                       <Image source={require('./../../..//source/icons/more.png')} style={{width:20,height:20,marginRight:10}} />
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.paycellStyle} onPress={this._chosePayType.bind(this,'微信支付')} >
                       <View style={{flexDirection: 'row',alignItems: 'center',}} >
                       <Image source={{uri: 'wechat_pay'}} style={styles.imageStyle} />
                       <Text style={styles.textStyle}>
                           微信支付
                       </Text>
                       </View>
                       <Image source={require('./../../..//source/icons/more.png')} style={{width:20,height:20,marginRight:10}} />
                   </TouchableOpacity>

               </View>
           </View>
       </Modal>
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
  },// modal的样式
  modalStyle: {
      // backgroundColor:'#ccc',
      alignItems: 'center',
      justifyContent:'center',
      // marginBottom:0,
      marginTop: 450*Util.size.height/812,
      flex:1,
  },
  // modal上子View的样式
  subView:{
      backgroundColor:'#fff',

      // justifyContent:'center',

  },
  topTitleView: {
      justifyContent: 'space-between',
      alignItems: 'center',
      width: Util.size.width,
      // height: 40*Util.size.height/812,
      paddingTop:14*Util.size.height/667,
      paddingBottom:14*Util.size.height/667,
      flexDirection: 'row',
  },
  amount: {
      flexDirection: 'row',
      // alignItems: 'center',
      height: 80*Util.size.height/667,

  },
  paycellStyle: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      borderBottomColor: '#dddddd',
      borderBottomWidth: 0.5,
      height:40*Util.size.height/812,
  },
  textStyle: {
    fontSize:16,
    color:'#333',
    marginLeft: 12*Util.size.width/375,
  },
  imageStyle: {
    width:28*Util.size.width/375,
    height:28*Util.size.width/375,
    marginLeft: 16*Util.size.width/375
  },
  cancelText: {
    fontSize:16,
    color:'#333',
    marginRight:18*Util.size.width/375,
  }
})
