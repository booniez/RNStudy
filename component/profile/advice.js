import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Util from './../../util/util';

export default class advice extends Component < {} > {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }
  static navigationOptions = {
    headerTitle: '意见反馈'
  }
  render() {
    return(
      <View style={styles.container} >
      <TextInput
        padding={14*Util.size.width/375}
        style={{height: 178*Util.size.height/667,backgroundColor:'#fff'}}
        multiline={true}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        underlineColorAndroid='transparent'
        textAlignVertical= 'top'
        placeholder='请输入您的意见反馈，以帮助我们改进'
      />
      <TouchableOpacity style={styles.BtnStyle} onPress={this._confirm.bind(this)} >
        <Text style={{color:'#fff',fontSize:16}} >确认提交</Text>
      </TouchableOpacity>
      </View>
    )
  }
  _confirm() {

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  BtnStyle: {
    marginTop: 78*Util.size.height/667,
    width: 351*Util.size.width/375,
    marginLeft: 12*Util.size.width/375,
    height: 49*Util.size.height/667,
    backgroundColor: '#E22924',
    borderRadius: 49*Util.size.height/667/2,
    alignItems: 'center',
    justifyContent:'center',
  },
})
