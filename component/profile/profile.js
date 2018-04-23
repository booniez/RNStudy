import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Util from '../../util/util';

export default class profile extends Component < {} >{
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerTitle: '个人中心'
  }
  render() {
    return(
      <ScrollView style={styles.container} >

        <View style={styles.headerView} >
          <TouchableOpacity style={{width:79*Util.size.width/375,height:79*Util.size.width/375,borderRadius:39.5*Util.size.width/375,marginLeft:23*Util.size.width/375}} onPress={this._profile.bind(this)} >
            <Image source={{uri:'user_head'}} style={{width:79*Util.size.width/375,height:79*Util.size.width/375,borderRadius:39.5*Util.size.width/375}} />
          </TouchableOpacity>
          <View style={styles.offLine} >
            <TouchableOpacity style={styles.navBtnStyle} onPress={this._logo.bind(this)} >
              <Text style={{color:'#fff'}} >登录</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBtnStyle} onPress={this._register.bind(this)} >
              <Text style={{color:'#fff'}} >注册</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ backgroundColor: '#D8D8D8', width: Util.pixel}} ></View>

        <View style={styles.money} >
          <TouchableOpacity style={styles.balance} onPress={this._balance.bind(this)} >
            <Text style={{fontSize: 16,color: '#333'}}>我的余额</Text>
            <Text style={{fontSize: 22,color: '#E22924',marginTop: 10}}>0</Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: '#D8D8D8', width: Util.pixel, marginTop: 5,marginBottom: 5}} ></View>
          <TouchableOpacity style={styles.balance} onPress={this._deposit.bind(this)} >
            <Text style={{fontSize: 16,color: '#333'}}>我的押金</Text>
            <Text style={{fontSize: 22,color: '#E22924',marginTop: 10}}>0</Text>
          </TouchableOpacity>
        </View>

        <View style={{height:Util.pixel*20}} />

         {this._renderCell('消息中心',0,'message')}
         {this._renderCell('历史地点',1,'history_address')}
         {this._renderCell('意见反馈',2,'feedback')}
         {this._renderCell('设置',3,'setting')}

      </ScrollView>
    );
  }
  _balance() {
    this.props.navigation.navigate('mybalance');
  }
  _deposit() {
    this.props.navigation.navigate('myDeposit');
  }
  _logo() {
    this.props.navigation.navigate('logoin');
  }
  _profile() {
    this.props.navigation.navigate('profileMessage');
  }
  _register() {
    this.props.navigation.navigate('register');
  }
  _renderCell(title,tag,img) {
    return(
      <View>
        <TouchableOpacity activeOpacity={0.5} onPress={this._choseMudel.bind(this,tag)}>
          <View style={styles.cellContainer}>
            { /*左边*/ }
            <View style={styles.leftViewStyle}>
              <Image source={{uri:img}} style={styles.leftImageStyle} />
              <Text style={styles.leftTitleStyle}>{title}</Text>
            </View>
            { /*右边*/ }
            <View style={styles.rightViewStyle}>
              {this.rightSubView()}
            </View>
          </View>
        </TouchableOpacity>
        <View style={{backgroundColor:'#fff'}} >
          <View style={{ backgroundColor: '#D8D8D8', height: Util.pixel,marginLeft:12*Util.size.width/375,marginRight:12*Util.size.width/375}} ></View>
        </View>
      </View>
    )
  }
  //右边的内容
  rightSubView(){
    return(
      <View style={{flexDirection:'row',alignItems:'center'}}>
        {this.renderRightContent()}
        { /*箭头*/ }
        <Image source={require('./../..//source/icons/more.png')} style={{width:15,height:15,marginRight:8, marginLeft:5}} />
      </View>
    )
  }
  // 右边具体返回的值
  renderRightContent(){

  }
  _choseMudel(tag) {
    switch (tag) {
      case 0:
        this.props.navigation.navigate('notificationCenter');
        break;
      case 1:
        this.props.navigation.navigate('historyAddress');
        break;
      case 2:
        this.props.navigation.navigate('advice');
        break;
      default:
        this.props.navigation.navigate('setting');
        break;

    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  navBtnStyle: {
    // flex: 1,
    backgroundColor: 'red',
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    // margin: 10,
    width: 200*Util.size.width/812,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: 18*Util.size.height/667,
    paddingBottom: 20*Util.size.height/667,
  },
  offLine: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  money: {
    flexDirection: 'row',
    marginTop: Util.pixel,
    backgroundColor: '#fff',
  },
  balance: {
    alignItems: 'center',
    marginTop:10,
    marginBottom:10,
    width: (Util.size.width - Util.pixel) / 2,

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
    height: 43,
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
    width:25*Util.size.width/375,
    height:25*Util.size.width/375,
    marginRight:15*Util.size.width/375,
    //设置圆角
    borderRadius:12.5*Util.size.width/375
  },
  leftTitleStyle: {
    fontSize:15
  }
})
