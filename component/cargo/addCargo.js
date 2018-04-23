import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import Util from '../../util/util';

export default class addCargo extends Component < {} > {
  constructor() {
    super();
    this.state = {
      text1: '',
      text2: '',
      text3: '',
      foucs: 0
    }
  }
  static navigationOptions = {
    headerTitle: '上架玩具'
  }
  render() {
    return(
      <View style={styles.container} >
        <View style={styles.topView}>
          <Text style={{fontSize:18,color:'#333',marginTop:38*Util.size.height/667,marginLeft:97*Util.size.width/375}} >请输入需上架商品编码</Text>
          <View style={{flexDirection:'row',marginTop:54*Util.size.height/667,marginLeft:48*Util.size.width/375,marginBottom:56*Util.size.height/667}} >
            <View style={{borderColor:'#979797',borderWidth:1,alignItems:'center',justifyContent:'center'}} >
              <View>
                <TextInput
                  ref={(input) => {
                      _input = input
                  }}
                  selectionColor='#E22924'
                  keyboardType='numeric'
                  paddingLeft={25*Util.size.width/375}
                  underlineColorAndroid='transparent'
                  style={{width:72*Util.size.width/375,height:72*Util.size.width/375,fontSize:40,color:'#E22924'}}
                  onChangeText={(text) => {
                    if (text.length !== 0) {
                      this.setState({
                        focus: 1,
                        text1:text
                      });
                      _input.blur();
                    }
                  }}
                  maxLength={1}
                  value={this.state.text}
                  autoFocus={this.state.foucs===0 ? true : false}
                />
              </View>
            </View>
            <View style={{borderColor:'#979797',borderWidth:1,alignItems:'center',justifyContent:'center',marginLeft:32*Util.size.width/375}} >
              <View>
                <TextInput
                  ref={(input) => {
                      _input1 = input
                  }}
                  selectionColor='#E22924'
                  keyboardType='numeric'
                  paddingLeft={25*Util.size.width/375}
                  underlineColorAndroid='transparent'
                  style={{width:72*Util.size.width/375,height:72*Util.size.width/375,fontSize:40,color:'#E22924'}}
                  onChangeText={(text) => {
                    this.setState({
                      focus: 2,
                      text2:text
                    });
                    _input1.blur();
                  }}
                  maxLength={1}
                  value={this.state.text}
                  autoFocus={this.state.foucs===1 ? true : false}
                />
              </View>
            </View>
            <View style={{borderColor:'#979797',borderWidth:1,alignItems:'center',justifyContent:'center',marginLeft:32*Util.size.width/375}} >
              <View>
                <TextInput
                  ref={(input) => {
                      _input2 = input
                  }}
                  selectionColor='#E22924'
                  keyboardType='numeric'
                  paddingLeft={25*Util.size.width/375}
                  underlineColorAndroid='transparent'
                  style={{width:72*Util.size.width/375,height:72*Util.size.width/375,fontSize:40,color:'#E22924'}}
                  onChangeText={(text) => {
                    if (text.length !== 0) {
                      this.setState({
                        focus: 2,
                        text3:text
                      });
                      _input2.blur();
                      this.props.navigation.navigate('choseCabinet');
                    }
                  }}
                  maxLength={1}
                  value={this.state.text}
                  autoFocus={this.state.foucs===2 ? true : false}
                />
              </View>
            </View>

          </View>
        </View>
      </View>
    )
  }
  componentDidMount() {

  }
  componentWillUpdate() {
    console.log('重新加载');
  }
  _renderTextInput() {
    return(
      <View style={{flex:1,width: 72*Util.size.width/375,height:72*Util.size.width/375,backgroundColor:'#fff',borderColor:'#000',borderwborderWidth:5}}>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    )


  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  topView: {
    backgroundColor: '#fff'
  }
})
