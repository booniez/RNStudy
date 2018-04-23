import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
} from 'react-native';

import Util from './../../util/util';
import makeSureOpenCabinet from './makeSureOpenCabinet';

export default class depositNotice extends Component<{}> {

    static navigationOptions = {
        headerTitle: '押金'
    }
    constructor(props) {
        super(props);
        this.state = {
          show:false,
        };
    }
    render() {
        return (
            <View style={styles.container} >
                <Image style={styles.img} source={{uri: 'caveat'}} resizeMode='contain'/>
                <Text style={{marginTop:60*Util.size.height/667,fontSize: 20,color:'#333'}} >押金不足</Text>
                <Text style={{marginTop:18*Util.size.height/667,fontSize:16,color:'#333'}}>请缴纳99元押金以继续租用操作</Text>
                <TouchableOpacity style={styles.navBtnStyle} onPress={this.makeSurePay.bind(this)} >
                    <Text style={{color:'#fff'}} >确认缴纳</Text>
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
                            <TouchableOpacity style={styles.cellStyle} onPress={this._chosePayType.bind(this,'余额支付')} >
                                <View style={{flexDirection: 'row',alignItems: 'center',}} >
                                <Image source={{uri: 'balance'}} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>
                                余额支付
                                </Text>
                                </View>
                                <Image source={require('./../..//source/icons/more.png')} style={{width:20,height:20,marginRight:10}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cellStyle} onPress={this._chosePayType.bind(this,'支付宝支付')} >
                                <View style={{flexDirection: 'row',alignItems: 'center',}} >
                                <Image source={{uri: 'alipay'}} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>
                                    支付宝支付
                                </Text>
                                </View>
                                <Image source={require('./../..//source/icons/more.png')} style={{width:20,height:20,marginRight:10}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cellStyle} onPress={this._chosePayType.bind(this,'微信支付')} >
                                <View style={{flexDirection: 'row',alignItems: 'center',}} >
                                <Image source={{uri: 'wechat_pay'}} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>
                                    微信支付
                                </Text>
                                </View>
                                <Image source={require('./../..//source/icons/more.png')} style={{width:20,height:20,marginRight:10}} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>
            </View>

        )
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
        this.props.navigation.navigate('makeSureOpenCabinet');
    }
    _setModalVisible() {
        let isShow = this.state.show;
        this.setState({
          show:!isShow,
        });
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    navBtnStyle: {
        backgroundColor: 'red',
        justifyContent:'center',
        borderRadius: 24.5*Util.size.height/667,
        height:40*Util.size.height/667,
        marginTop: 40,
        alignItems: 'center',
        width: Util.size.width * 0.8,
    },
    img: {
        marginTop:61*Util.size.height/667,
        width: Util.size.width*200/375,
        height: 163*Util.size.height/667,
    },
    // modal的样式
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
