import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Picker,
  Modal,
} from 'react-native';
import Util from '../../util/util';
import ImagePicker from 'react-native-image-picker';


var photoOptions = {
    //底部弹出框选项
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
}
export default class profileMessage extends Component < {} > {
  constructor() {
    super()
    this.state = {
      headerImg: 'user_head_1',
      sex: '男',
      name: Util.name,
      isHiddenPicker: true,
      show:false,
    }
  }
  static navigationOptions = {
    headerTitle: '个人信息'
  }
  componentWillMount() {
    // alert(Util.name)
  }
  componentDidMount() {

  }
  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
          {this._renderCell('头像',0,'',this.state.headerImg,false)}
          {this._renderCell('昵称',1,this.state.name,'',false)}
          {this._renderCell('性别',2,this.state.sex,'',false)}
          {this._renderCell('手机号码',3,'18328067022','',true)}
        </ScrollView>
        <Modal
            animationType='slide'
            transparent={true}
            visible={this.state.show}
            onShow={() => {}}
            onRequestClose={() => {}} >
            <View style={styles.modalStyle}>
                <View style={styles.subView}>
                    <View style={styles.topTitleView} >
                        <Text style={{marginLeft: Util.size.width*155/375,fontSize:18}} >选择性别</Text>
                        <View>
                        <TouchableOpacity onPress={this._rightButtonClick.bind(this)} >
                          <Text style={styles.cancelText}>取消</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ borderColor: '#F0F0F0', borderWidth: Util.pixel, marginTop: 5 }} />

                    <TouchableOpacity style={styles.cellStyle} onPress={this._chosePayType.bind(this,'男')} >
                      <Text style={styles.textStyle}>
                          男
                      </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cellStyle} onPress={this._chosePayType.bind(this,'女')} >

                        <Text style={styles.textStyle}>
                            女
                        </Text>

                    </TouchableOpacity>

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
  _chosePayType(type) {
      // alert(type)
      this._setModalVisible();
      this.setState({
        sex: type
      })
      // this.props.navigation.navigate('makeSureOpenCabinet');
  }
  _rightButtonClick() {
      this._setModalVisible();
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
        <Image source={{uri: rightIconName}} style={{width:54*Util.size.width/375,height:54*Util.size.width/375,marginTop:18*Util.size.height/667,marginBottom:18*Util.size.height/667,borderRadius:(Platform.OS === 'ios' ? 27 : 54)*Util.size.width/375}} />
      )
    }
  }
  _choseMudel(tag) {
    switch (tag) {
      case 0:

      ImagePicker.showImagePicker(photoOptions,(response) =>{


               if (response.didCancel){
                   return
               }
               if(!response.error) {
                 this.setState({
                   headerImg: response.uri
                 })
               }
           })
        break;
      case 1:
        this.props.navigation.navigate('modifyName',{callBack:(name)=>{this.setState({name:name})}})
        break;
      case 2:
        this._setModalVisible()
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
  },
  // modal的样式
  modalStyle: {
      // backgroundColor:'#ccc',
      alignItems: 'center',
      justifyContent:'center',
      // marginBottom:0,
      marginTop: 600*Util.size.height/812,
      flex:1,
  },
  // modal上子View的样式
  subView:{
      backgroundColor:'#fff',

      // justifyContent:'center',

  },
  topTitleView: {
      justifyContent: 'space-between',
      alignItems: 'center',
      width: Util.size.width,
      // height: 40*Util.size.height/812,
      paddingTop:14*Util.size.height/667,
      paddingBottom:14*Util.size.height/667,
      flexDirection: 'row',
  },
  amount: {
      flexDirection: 'row',
      // alignItems: 'center',
      height: 80*Util.size.height/667,

  },
  cellStyle: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
      borderBottomColor: '#dddddd',
      borderBottomWidth: 0.5,
      height:40*Util.size.height/812,
  },
  textStyle: {
    fontSize:16,
    color:'#333',
    marginLeft: 12*Util.size.width/375,
  },
  imageStyle: {
    width:28*Util.size.width/375,
    height:28*Util.size.width/375,
    marginLeft: 16*Util.size.width/375
  },
  cancelText: {
    fontSize:16,
    color:'#333',
    marginRight:18*Util.size.width/375,
  }
})
