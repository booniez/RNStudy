import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableHighlight
} from 'react-native';
import Util from '../../util/util';
export default class recycle extends Component < {} > {
  constructor() {
    super();
    this.state = {
      show:false,
    };
  }
  static navigationOptions = {
    headerTitle: '货柜清零'
  }
  render() {
    return(
      <View style={styles.container} >
        <Text style={styles.numTitle} >您将清零环球中心2号回收柜</Text>
        <Text style={styles.totalTitle} >当前回收柜计数：12</Text>
        <TouchableOpacity style={styles.BtnStyle} onPress={this._confirm.bind(this)} >
          <Text style={{color:'#fff',fontSize:16}} >确认清零</Text>
        </TouchableOpacity>
        <Modal
          animationType='slide'
          transparent={true}
          visible={this.state.show}
          onShow={() => {}}
          onRequestClose={() => {}} >
          <View style={styles.modalStyle}>
            <View style={styles.subView}>
              <Text style={styles.contentText}>
                确定清空回收柜？
              </Text>
              <View style={styles.horizontalLine} />
              <View style={styles.buttonView}>
                <TouchableHighlight underlayColor='transparent'
                  style={styles.buttonStyle}
                  onPress={this._cancel.bind(this)}>
                  <Text style={styles.cancelbuttonText}>
                    取消
                  </Text>
                </TouchableHighlight>
                <View style={styles.verticalLine} />
                <TouchableHighlight underlayColor='transparent'
                  style={styles.buttonStyle}
                  onPress={this._makeSure.bind(this)}>
                  <Text style={styles.buttonText}>
                    确定
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
       </Modal>
      </View>
    )
  }
  _setModalVisible() {
    let isShow = this.state.show;
    this.setState({
      show:!isShow,
    });
  }
  _cancel() {
    this._setModalVisible()
  }
  _makeSure() {
    this._setModalVisible();
    this.props.navigation.navigate('recycleClearSuccess');
  }
  _confirm() {
    this._setModalVisible()
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  numTitle: {
    fontSize: 20,
    color: '#333',
    marginTop: 72*Util.size.height/667,
  },
  totalTitle: {
    fontSize: 16,
    color: '#333',
    marginTop: 32*Util.size.height/667,
  },
  BtnStyle: {
    marginTop: 128*Util.size.height/667,
    width: 351*Util.size.width/375,
    height: 49*Util.size.height/667,
    backgroundColor: '#E22924',
    borderRadius: 49*Util.size.height/667/2,
    alignItems: 'center',
    justifyContent:'center',
  },
  modalStyle: {
    // backgroundColor:'#ccc',
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
  },
  // modal上子View的样式
  subView:{
    marginLeft:60,
    marginRight:60,
    backgroundColor:'#fff',
    alignSelf: 'stretch',
    justifyContent:'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor:'#ccc',
  },
  // 标题
  titleText:{
    marginTop:10,
    marginBottom:5,
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
  },
  // 内容
  contentText:{
    marginTop:32*Util.size.height/667,
    marginBottom:32*Util.size.height/667,
    fontSize:16,
    color:'#333',

    textAlign:'center',
  },
  // 水平的分割线
  horizontalLine:{
    marginTop:5,
    height:0.5,
    backgroundColor:'#ccc',
  },
  // 按钮
  buttonView:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle:{
    flex:1,
    height:44,
    alignItems: 'center',
    justifyContent:'center',
  },
  // 竖直的分割线
  verticalLine:{
    width:0.5,
    height:44,
    backgroundColor:'#ccc',
  },
  buttonText:{
    fontSize:16,
    color:'#E22924',
    textAlign:'center',
  },
  cancelbuttonText:{
    fontSize:16,
    color:'#333',
    textAlign:'center',
  },

})
