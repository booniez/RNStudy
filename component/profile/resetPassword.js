 import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Util from '../../util/util';
import Timer from './../common/Util/timer';

export default class resetPassword extends Component < {} > {
  constructor() {
    super()
    this.state = {
      phone: '',
      password: '',
      count:60,
      isFinish:true,
      countDownText: ''
    }
  }
  static navigationOptions = {
    headerTitle: '忘记密码'
  }
  render() {
    return(
      <View style={styles.container} >
        <View style={styles.cell} >
          <Text style={styles.text} >账 号：</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.phone}
            underlineColorAndroid='transparent'
            placeholder='请输入您的手机号'
          />
        </View>
        <View style={{backgroundColor:'#fff'}} >
          <View style={{ backgroundColor: '#D8D8D8', height: Util.pixel,marginLeft:12*Util.size.width/375,marginRight:12*Util.size.width/375}} ></View>
        </View>

        <View style={styles.verificationCell} >
          <View style={{flexDirection:'row',alignItems:'center'}} >
            <Text style={styles.text} >验证码：</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(code) => this.setState({code})}
              value={this.state.code}


              placeholder='请输入验证码'
            />
          </View>
          <View>
            {this.state.isFinish ? <View /> : <Timer interval={1000} onTimer={this.onTimer}/>}
            <TouchableOpacity style={styles.verificationBtnStyle} onPress={this._verificationCode.bind(this)} >

              <Text style={{marginLeft:16,marginRight:16,marginTop:10,marginBottom:10,color:'#fff',fontSize:14}} >{this.state.countDownText}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{backgroundColor:'#fff'}} >
          <View style={{ backgroundColor: '#D8D8D8', height: Util.pixel,marginLeft:12*Util.size.width/375,marginRight:12*Util.size.width/375}} ></View>
        </View>
        <View style={styles.cell} >
          <Text style={styles.text} >密 码：</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            underlineColorAndroid='transparent'

            placeholder='请输入新密码'
          />
        </View>

        <TouchableOpacity style={styles.BtnStyle} onPress={this._logo.bind(this)} >
          <Text style={{margin:10,color:'#fff'}} >确认</Text>
        </TouchableOpacity>
      </View>
    )
  }
  componentDidMount() {
    if (this.state.isFinish) {
      this.setState({
        countDownText: '获取验证码'
      })
    }
  }

  _logo() {

  }
  _verificationCode() {
    this.againTime()
  }
  onTimer = () => {
        if(this.state.count>1){
            this.setState({countDownText: '剩余' + (this.state.count - 1) + 's',count: this.state.count - 1});
        }else {

            this.setState({isFinish:true,countDownText: '获取验证码'});
        }
  }
  againTime=()=>{
        if(this.state.isFinish){
            this.setState({
                count:60,
                isFinish:false,
            });
            //回调，当使用组件时，可用传入回调事件
            if(this.props.onPress){
                this.props.onPress();
            }
        }


  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    borderTopColor: '#D8D8D8',
    borderTopWidth: Util.pixel,
  },
  cell: {
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: '#fff',
    paddingTop: 19*Util.size.height/667,
    paddingBottom: 19*Util.size.height/667,
    paddingLeft: 14*Util.size.width/375,
  },
  verificationCell: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingTop: 19*Util.size.height/667,
    paddingBottom: 19*Util.size.height/667,
    paddingLeft: 14*Util.size.width/375,
  },
  text: {
    color:'#333333',
    fontSize: 16
  },
  input: {
    color:'#333333',
    marginTop:0,
    width: 0.4*Util.size.width,
  },
  resetView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop:24*Util.size.height/667,
  },
  resetTitle: {
    color:'#999',
    fontSize:12
  },
  protocolTitle: {
    color:'#E22924',
    fontSize:12
  },
  verificationBtnStyle: {
    backgroundColor: '#E22924',
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 14*Util.size.width/375,
  },
  BtnStyle: {
    backgroundColor: '#E22924',
    borderRadius: 40,
    marginTop: 54*Util.size.height/667,
    padding:5,
    width: 351*Util.size.width/375,
    marginLeft: 12*Util.size.width/375,
    alignItems: 'center',
  },
})
