import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import Util from '../../util/util';

export default class setting extends Component < {} > {
  constructor() {
    super();
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
          <Text style={{color:'#fff',fontSize:16}} >退出登陆</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _logout() {

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
})
