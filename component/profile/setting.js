import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  TouchableHighlight,
} from 'react-native';

import Util from '../../util/util';

export default class setting extends Component < {} > {
  constructor() {
    super();
    this.state = {
      show:false,
    }
  }
  static navigationOptions = {
    headerTitle:'设置'
  }
  render() {
    return(
      <View style={styles.container} >
        <View style={{backgroundColor:'#D8D8D8',height:Util.pixel,marginBottom:Util.pixel}} />
        {this._renderCell('关于',0)}
        {this._renderCell('检查更新',1)}
        {this._renderCell('清除缓存',2)}
        {this._renderCell('推送开关',3)}
        <TouchableOpacity style={styles.BtnStyle} onPress={this._logout.bind(this)} >
          <Text style={{color:'#fff',fontSize:16}} >退出登录</Text>
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
                确定清空缓存12M？
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

  _logout() {

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
  }
  _renderCell(title,tag) {
    return(
      <TouchableOpacity activeOpacity={0.5} onPress={this._choseMudel.bind(this,tag)}>
        <View style={styles.cellContainer}>
          { /*左边*/ }
          <Text style={styles.leftTitleStyle}>{title}</Text>
          { /*右边*/ }
          <View style={styles.rightViewStyle}>
            {this.rightSubView(tag)}
          </View>
        </View>
        <View style={{backgroundColor:'#fff'}} >
          <View style={{ backgroundColor: '#D8D8D8', height: Util.pixel,marginLeft:12*Util.size.width/375,marginRight:12*Util.size.width/375}} ></View>
        </View>
      </TouchableOpacity>
    )
  }
  //右边的内容
  rightSubView(tag){
    return(
      <View style={{flexDirection:'row',alignItems:'center'}}>
        {this.renderRightContent()}
        { /*箭头*/ }
        <Image source={require('./../..//source/icons/more.png')} style={{width:15,height:tag === 3 ? 0 : 15,marginRight:8, marginLeft:5}} />
      </View>
    )
  }
  // 右边具体返回的值
  renderRightContent(){

  }
  _choseMudel(tag) {
    switch (tag) {
      case 0:
        this.props.navigation.navigate('about');
        break;
      case 1:

        break;
      case 2:
        this._setModalVisible()
        break;
      default:

        break;

    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cellContainer: {
    // 主轴方向
    flexDirection:'row',
    //主轴的对其方式
    justifyContent:'space-between',
    //背景颜色
    backgroundColor: 'white',
    //设置垂直居中
    alignItems: 'center',
    //高度
    paddingLeft: 12*Util.size.width/375,
    paddingRight: 12*Util.size.width/375,
    paddingTop: 18*Util.size.height/667,
    paddingBottom: 18*Util.size.height/667,

    //下边框
    // borderBottomColor:'#D8D8D8',
    // borderBottomWidth:Util.pixel
  },
  leftViewStyle: {
    // 主轴方向
    flexDirection:'row',
    //侧轴居中
    alignItems:'center',
    //左外边距
  },
  rightViewStyle: {

  },
  leftImageStyle: { // 左边的图片
    width:25,
    height:25,
    marginRight:6,
    //设置圆角
    borderRadius:12
  },
  leftTitleStyle: {
    fontSize:16,
    color: '#333',
  },
  BtnStyle: {
    marginTop: 78*Util.size.height/667,
    width: 351*Util.size.width/375,
    marginLeft: 12*Util.size.width/375,
    height: 49*Util.size.height/667,
    backgroundColor: 'red',
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
