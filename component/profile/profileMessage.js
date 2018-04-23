import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Util from '../../util/util';

export default class profileMessage extends Component < {} > {
  constructor() {
    super()
  }
  static navigationOptions = {
    headerTitle: '个人信息'
  }
  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
          {this._renderCell('头像',0,'','user_head_1',false)}
          {this._renderCell('昵称',1,'JLM','',false)}
          {this._renderCell('性别',2,'男','',false)}
          {this._renderCell('手机号码',3,'18328067022','',true)}
        </ScrollView>
      </View>
    )
  }

  _renderCell(title,tag,rightTitle,img,isHiddenMore) {
    return(
      <TouchableOpacity activeOpacity={0.5} onPress={this._choseMudel.bind(this,tag)}>
        <View style={styles.cellContainer}>
          { /*左边*/ }
          <View style={styles.leftViewStyle}>
            <Text style={styles.leftTitleStyle}>{title}</Text>
          </View>
          { /*右边*/ }
          <View style={styles.rightViewStyle}>
            {this.rightSubView(rightTitle,img,isHiddenMore)}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  //右边的内容
  rightSubView(title,img,isHiddenMore){
    return(
      <View style={{flexDirection:'row',alignItems:'center'}}>
        {this.renderRightContent(title,img)}
        { /*箭头*/ }
        <Image source={require('./../..//source/icons/more.png')} style={{width:15,height:isHiddenMore ? 0 : 15,marginRight:8, marginLeft:5,marginTop:10,marginBottom:10}} />
      </View>
    )
  }
  // 右边具体返回的值
  renderRightContent(rightTitle,rightIconName){
    if (rightIconName.length == 0) { //不返回图片
      return(
        <Text style={{color:'gray',marginTop:10,marginBottom:10}}>{rightTitle}</Text>
      )
    }else {
      return(
        <Image source={{uri: rightIconName}} style={{width:54*Util.size.width/375,height:54*Util.size.width/375,marginTop:18*Util.size.height/667,marginBottom:18*Util.size.height/667,}} />
      )
    }
  }
  _choseMudel(tag) {
    switch (tag) {
      case 0:
        // this.props.navigation.navigate('notificationCenter');
        break;
      default:

    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
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
    // height: 43,
    //下边框
    borderBottomColor:'#e8e8e8',
    borderBottomWidth:0.5
  },
  leftViewStyle: {
    // 主轴方向
    flexDirection:'row',
    //侧轴居中
    alignItems:'center',
    //左外边距
    marginLeft: 8
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
    fontSize:15
  }
})
