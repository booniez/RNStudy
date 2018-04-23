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

export default class logoin extends Component < {} > {
  constructor() {
    super()
    this.state = {
      phone: '',
      password: '',
      code: ''
    }
  }
  static navigationOptions = {
    headerTitle: '登录'
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
        <View style={styles.cell} >
          <Text style={styles.text} >密 码：</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            underlineColorAndroid='transparent'

            placeholder='请输入您的密码'
          />
        </View>
        <View style={{backgroundColor:'#fff'}} >
          <View style={{ backgroundColor: '#D8D8D8', height: Util.pixel,marginLeft:12*Util.size.width/375,marginRight:12*Util.size.width/375}} ></View>
        </View>
        <TouchableOpacity style={styles.resetView} onPress={this._resetPassword.bind(this)} >
          <Text style={styles.resetTitle}>忘记密码？</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BtnStyle} onPress={this._logo.bind(this)} >
          <Text style={{margin:10,color:'#fff'}} >登录</Text>
        </TouchableOpacity>
      </View>
    )
  }
  _resetPassword() {
    this.props.navigation.navigate('resetPassword')
  }
  _logo() {

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
  text: {
    color:'#333333',
    fontSize: 16
  },
  input: {
    color:'#333333',
    marginTop:0,
    width: 0.6*Util.size.width,
  },
  resetView: {
    alignItems: 'center',
    marginTop:24*Util.size.height/667,
  },
  resetTitle: {
    color:'#999',
    fontSize:12
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
