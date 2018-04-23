import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import Util from '../../../util/util';
export default class recharge extends Component < {} > {
  constructor() {
    super();
    this.state = {
      btn10: true,
      btn20: false,
      btn30: false,
      btn40: false,
      btn50: false,
      btn60: false,
      show:false,
    }
  }
  static navigationOptions = {
    headerTitle: '充值'
  }
  render() {
    return(
      <View style={styles.container} >
        <View style={styles.btnsView}>
          <View style={styles.rowView} >
            <TouchableOpacity style={[styles.BtnStyle,{marginLeft: 20,marginTop: 20,backgroundColor: this.state.btn10 ? 'red' : '#fff'}]} onPress={this._pay.bind(this,10)} >
              <Text style={{margin:10,color: this.state.btn10 ? '#fff' : 'red'}} >10元</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.BtnStyle,{marginRight: 20,marginLeft:20 ,marginTop: 20,backgroundColor: this.state.btn20 ? 'red' : '#fff'}]} onPress={this._pay.bind(this,20)} >
              <Text style={{margin:10,color:this.state.btn20 ? '#fff' : 'red'}} >20元</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView} >
            <TouchableOpacity style={[styles.BtnStyle,{marginLeft: 20,marginTop: 20,backgroundColor: this.state.btn30 ? 'red' : '#fff'}]} onPress={this._pay.bind(this,30)} >
              <Text style={{margin:10,color:this.state.btn30 ? '#fff' : 'red'}} >30元</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.BtnStyle,{marginRight: 20,marginLeft:20 ,marginTop: 20,backgroundColor: this.state.btn40 ? 'red' : '#fff'}]} onPress={this._pay.bind(this,40)} >
              <Text style={{margin:10,color:this.state.btn40 ? '#fff' : 'red'}} >40元</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView} >
            <TouchableOpacity style={[styles.BtnStyle,{marginLeft: 20,marginTop: 21, marginBottom: 20,backgroundColor: this.state.btn50 ? 'red' : '#fff'}]} onPress={this._pay.bind(this,50)} >
              <Text style={{margin:10,color:this.state.btn50 ? '#fff' : 'red'}} >50元</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.BtnStyle,{marginRight: 20,marginLeft:20 ,marginTop: 21,marginBottom: 20,backgroundColor: this.state.btn60 ? 'red' : '#fff'}]} onPress={this._pay.bind(this,60)} >
              <Text style={{margin:10,color:this.state.btn60 ? '#fff' : 'red'}} >60元</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.rechargeBtnStyle} onPress={this._recharge.bind(this)} >
          <Text style={{margin:10,color:'#fff'}} >充值</Text>
        </TouchableOpacity>
        <Modal
            animationType='slide'
            transparent={true}
            visible={this.state.show}
            onShow={() => {}}
            onRequestClose={() => {}} >
            <View style={styles.modalStyle}>
                <View style={styles.subView}>
                    <View style={styles.topTitleView} >
                        <Text style={{marginLeft: Util.size.width*155/375,fontSize:18}} >充值支付</Text>
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

                    <TouchableOpacity style={styles.cellStyle} onPress={this._chosePayType.bind(this,'支付宝支付')} >
                        <View style={{flexDirection: 'row',alignItems: 'center',}} >
                        <Image source={{uri: 'alipay'}} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>
                            支付宝支付
                        </Text>
                        </View>
                        <Image source={require('./../../..//source/icons/more.png')} style={{width:20,height:20,marginRight:10}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cellStyle} onPress={this._chosePayType.bind(this,'微信支付')} >
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
  _recharge() {
    this.makeSurePay()
  }
  _rightButtonClick() {
      this._setModalVisible();
  }
  makeSurePay() {
      this._setModalVisible();
  }
  _chosePayType(type) {
      // alert(type)
      this._setModalVisible();
      // this.props.navigation.navigate('makeSureOpenCabinet');
  }
  _setModalVisible() {
      let isShow = this.state.show;
      this.setState({
        show:!isShow,
      });
  }
  _pay(tag) {
    // alert(tag)
    switch (tag) {
      case 10:
        this.setState({
          btn10: !this.state.btn10,
          btn20: false,
          btn30: false,
          btn40: false,
          btn50: false,
          btn60: false,
        })
        break;
      case 20:
        this.setState({
          btn20: !this.state.btn20,
          btn10: false,
          btn30: false,
          btn40: false,
          btn50: false,
          btn60: false,
        })
        break;
      case 30:
      this.setState({
        btn30: !this.state.btn30,
        btn20: false,
        btn10: false,
        btn40: false,
        btn50: false,
        btn60: false,
      })
        break;
      case 40:
        this.setState({
          btn40: !this.state.btn40,
          btn20: false,
          btn30: false,
          btn10: false,
          btn50: false,
          btn60: false,
        })
          break;
      case 50:
      this.setState({
        btn50: !this.state.btn50,
        btn20: false,
        btn30: false,
        btn40: false,
        btn10: false,
        btn60: false,
      })
        break;
      case 60:
      this.setState({
        btn60: !this.state.btn60,
        btn20: false,
        btn30: false,
        btn40: false,
        btn50: false,
        btn10: false,
      })
        break;
      default:
        break;

    }

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  btnsView: {
    backgroundColor: '#fff'
  },
  rowView: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BtnStyle: {
    flex: 1,
    borderRadius: 20,
    borderWidth: Util.pixel,
    borderColor: 'red',
    alignItems: 'center',
  },
  rechargeBtnStyle: {
    backgroundColor: 'red',
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 100,
    padding:5,
    width: Util.size.width*0.8,
    marginLeft: Util.size.width*0.1,
  },
  // modal的样式
  modalStyle: {
      // backgroundColor:'#ccc',
      alignItems: 'center',
      justifyContent:'center',
      // marginBottom:0,
      marginTop: 500*Util.size.height/812,
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
  cellStyle: {
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
