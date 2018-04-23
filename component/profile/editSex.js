import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Util from '../../util/util';
export default class editSex extends Component < {} > {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }
  static navigationOptions = ({navigation,screenProps}) =>  ({
    headerTitle: '修改性别',
    headerRight: <TouchableOpacity onPress={()=>{
      navigation.goBack()
    }} >
      <Text style={styles.rightTitle} >保存  </Text>
    </TouchableOpacity>
  })
  _save= () => {
    alert(this.state.name)
  }
  componentDidMount() {
    this.props.navigation.setParams({navigatePress:this.save})
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.cell} >
          <Text style={styles.text} >性 别：</Text>
          <TextInput
            style={styles.input}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            underlineColorAndroid='transparent'
            placeholder='请输入您的性别'
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F7F7F7'
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
    width: 0.4*Util.size.width,
  },
  rightTitle: {
    fontSize: 14,
    color: '#333',
  }
})
