import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Util from '../../../util/util';

export default class depositRecharge extends Component < {} > {
  constructor(props) {
    super(props);
    this.state = {
      show:false,
    }
  }
  static navigationOptions = {
    headerTitle: '我的押金'
  }
  render() {
    return(
      <View style={styles.container} >
        <View style={styles.topHorizontalView} >
          <Text>我的现有押金：99元</Text>
          <TouchableOpacity onPress={this._recharge.bind(this)} style={styles.rechareView} ><Text style={{marginBottom: 5,marginTop:5,marginLeft:10,marginRight:10}} >充值</Text></TouchableOpacity>
        </View>
        <View style={{ borderColor: '#D7D7D7', borderWidth: Util.pixel }} ></View>

        <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}} >
          <Text>充值时间：2011-11-11 11：11</Text>
          <Text>状态：锁定or可退还</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:50,marginRight:50,marginTop:10}} >
          <Text style={{fontSize: 24,color:'#000'}} >99元</Text>
          <TouchableOpacity style={{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,borderColor:'#333',borderWidth:Util.pixel,borderRadius:5}} onPress={this._returnDeposit.bind(this)} >
            <Text>退押金</Text>
          </TouchableOpacity>
        </View>
        <View style={{ borderColor: '#D7D7D7', borderWidth: Util.pixel, marginTop:50*Util.size.height/812 }} />
        <View style={{ borderColor: '#D7D7D7', borderWidth: Util.pixel, marginTop:200*Util.size.height/812 }} />
        <View style={styles.amountView}>
          <Text style={{fontSize:14,color:'#666',marginTop:10}} >应支付金额</Text>
          <Text style={{fontSize:30,color:'#333',marginTop:50}} >¥25.00</Text>
          <Text style={{fontSize:14,color:'#666',marginTop:60}}>请选择支付方式</Text>
        </View>
        <View style={styles.payTypeView} >
          <TouchableOpacity>
            <Image source={{uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2200875053,59610386&fm=27&gp=0.jpg'}} style={{width:100,height:100}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={{uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2200875053,59610386&fm=27&gp=0.jpg'}} style={{width:100,height:100}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={{uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2200875053,59610386&fm=27&gp=0.jpg'}} style={{width:100,height:100}} />
          </TouchableOpacity>
        </View>
        <Modal
            animationType='slide'
            transparent={true}
            visible={this.state.show}
            onShow={() => {}}
            onRequestClose={() => {}} >
            <View style={styles.modalStyle}>
                <View style={styles.subView}>
                    <View style={styles.topTitleView} >
                        <Text style={{marginLeft: Util.size.width*155/375,fontSize:17}} >充值支付</Text>
                        <View>
                        <TouchableOpacity onPress={this._rightButtonClick.bind(this)} >
                          <Text style={styles.cancelText}>取消</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ borderColor: '#F0F0F0', borderWidth: Util.pixel, marginTop: 5 }} />
                    <View style={styles.amount} >
                        <Text style={{fontSize:16,marginLeft: Util.size.width*175/375 - 4,marginTop:24*Util.size.height/667}} >¥</Text>
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
    );
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
  _returnDeposit() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  topHorizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 9,
    justifyContent: 'space-between',
  },
  rechareView: {
    alignItems: 'center',
    borderWidth: Util.pixel,
    borderColor: '#333',
    borderRadius: 5,
  },
  amountView: {
    alignItems: 'center',

  },
  payTypeView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
