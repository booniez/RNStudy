import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Util from './../../util/util';
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

export default class refundCash extends Component < {} > {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dataSource: [],
      deleteIndex: 0,
      imgCount: 0,
    }
  }
  static navigationOptions = {
    headerTitle: '申请退款'
  }
  render() {
    return(
      <View style={styles.container} >
        <View style={styles.topOrderInfo} >
          <Text style={styles.title} >订单号：89492749</Text>
          <Text style={styles.title} >2017-08-03 17:32</Text>
        </View>
        <View style={{backgroundColor:'#fff'}} >
          <View style={{ backgroundColor: '#F7F7F7', height: Util.pixel,marginLeft:12*Util.size.width/375,marginRight:12*Util.size.width/375}} ></View>
        </View>


        <View style={styles.toyMsg} >
          <Image source={{uri: 'toy_4'}} style={{width:100,height:100}} />
          <View>
            <Text style={{marginTop:20,fontSize:16,color:'#333'}} >玩具汽车</Text>
            <View style={{flexDirection:'row',justifyContent: 'space-between'}} >
              <Text style={{fontSize:14,color:'#666',marginTop:20*Util.size.height/667}} >已租：5天</Text>
              <View style={{flexDirection:'row',marginLeft:50*Util.size.width/375}} >
                  <Text style={{fontSize:14,color:'#666',marginTop:20*Util.size.height/667}}>产生租金：</Text>
                  <Text style={{fontSize:18,color:'#E22924',marginTop:15*Util.size.height/667}}>10</Text>
                  <Text style={{fontSize:14,color:'#666',marginTop:20*Util.size.height/667}}>元</Text>

              </View>

            </View>
          </View>
        </View>
        <View style={{ borderColor: '#F7F7F7', borderWidth: Util.pixel*3 }} ></View>

        <View style={styles.reasonView} >
          <TextInput
            style={{height: 120*Util.size.height/812, borderColor: '#9E9E9E', borderWidth: Util.pixel,borderRadius: 5}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            multiline={true}
            underlineColorAndroid='transparent'
            textAlignVertical= 'top'
            placeholder='请输入您的退款理由'
          />
        </View>
        <View style={{backgroundColor:'#fff'}} >
          <View style={{ backgroundColor: '#F7F7F7', height: Util.pixel,marginLeft:12*Util.size.width/375,marginRight:12*Util.size.width/375}} ></View>
        </View>

        <View style={styles.listView}>
          <View>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item,index}) => (
              <View>
                <TouchableOpacity style={styles.uploadImg} onPress={this._choseImage.bind(this,item)} >
                  <Image source={{uri: item}} style={styles.uploadImgStyle} />
                  <View>
                    <TouchableOpacity style={styles.deleteImgStyle} onPress={this._deleteImg.bind(this,index,item)}>
                      <Image  source={{uri: 'delete'}} style={styles.deleteBtnStyle} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            contentContainerStyle={styles.listViewStyle}//设置cell的样式
          />
          </View>
          <View>
            <TouchableOpacity style={styles.uploadImgBtn} onPress={this._choseImage.bind(this)} >
              <Image source={{uri: 'add_image'}} style={[styles.uploadImgBtnStyle,{width:this.state.dataSource.length === 3 ? 0 : 76*Util.size.width/375,}]} />
            </TouchableOpacity>
          </View>
        </View>

         <TouchableOpacity style={styles.BtnStyle} onPress={this._confirmInfo.bind(this)} >
           <Text style={{margin:10,color:'#fff'}} >确认提交</Text>
         </TouchableOpacity>
      </View>
    );
  }
  _deleteImg(index) {
      let {dataSource} = this.state;

      let array = dataSource.slice(0);
      console.log('数据源' + array);
      let imgData = [];
      for (var i = 0; i < array.length; i++) {
        if (i === index) {
          console.log('移除这一项');
        }else {
            imgData.push(array[i])
        }
      }


      console.log('array-------' + imgData + 'index-------' + index);
      this.setState({
        dataSource: imgData,
        imgCount: this.state.imgCount-1
      })

  }
  _choseImage(item) {
    console.log(item.length);
    if (item.length>=10) {

    }else {
      ImagePicker.showImagePicker(photoOptions,(response) =>{


               if (response.didCancel){
                   return
               }
               if(!response.error) {
                 // console.log('response');
                 let {dataSource} = this.state;
                 let array = dataSource.slice(0);
                 console.log('原来的数据源');
                 console.log(array);
                 let imgData = [];
                 for (var i = 0; i < array.length; i++) {
                    imgData.push(array[i])
                 }
                 imgData.push(response.uri)
                 // imgData.length === 3 ? '' : imgData.push('add_image')
                 console.log('新的数组' +  imgData);
                 this.setState({
                   dataSource: imgData,
                 })
               }
           })
    }


  }
  _confirmInfo() {

  }
  componentWillUpdate() {
    console.log('😄');
    console.log(this.state.dataSource);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  topOrderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 13*Util.size.height/667,
  },
  toyMsg: {
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  reasonView: {
    backgroundColor: '#fff',
    padding: 10,
  },
  uploadImg: {
    backgroundColor: '#fff',
    marginBottom:0,
    flexDirection:'row'
  },
  BtnStyle: {
    backgroundColor: '#E22924',
    borderRadius: 40,
    marginTop: 72*Util.size.height/667,
    padding:5,
    width: 351*Util.size.width/375,
    marginLeft: 12*Util.size.width/375,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color:'#333',
  },
  uploadImgStyle: {
    width: 76*Util.size.width/375,
    height: 76*Util.size.width/375,
    marginLeft:16*Util.size.width/375,
    marginBottom:16*Util.size.width/375,
  },
  uploadImgBtnStyle: {
    height: 76*Util.size.width/375,
    marginLeft:16*Util.size.width/375,
    marginBottom:16*Util.size.width/375,
  },
  upLoadImgView: {
    flexDirection: 'row'
  },
  listViewStyle: {
    flexDirection:'row',
    marginRight:0
  },
  listView: {
    width: Util.size.width,
    paddingTop: 16*Util.size.width/375,
    backgroundColor: '#fff',
    flexDirection: 'row'

  },
  deleteImgStyle: {
    marginLeft: -18*Util.size.width/375,
    width: 18*Util.size.width/375,
    height: 18*Util.size.width/375,
    flex: 1,
    // backgroundColor: 'red'
  },
  deleteBtnStyle: {
    width: 18*Util.size.width/375,
    height: 18*Util.size.width/375,
  }
})
// <FlatList
//   data={this.state.dataSource}
//   renderItem={({item,index}) => (
//
//     <View>
//       <TouchableOpacity style={styles.uploadImg} onPress={this._choseImage.bind(this,item)} >
//         <Image source={{uri: item}} style={styles.uploadImgStyle} />
//         <View>
//           <TouchableOpacity style={styles.deleteImgStyle} onPress={this._deleteImg.bind(this,index,item)}>
//             <Image  source={{uri: item === 'add_image' ? '' : 'delete'}} style={styles.deleteBtnStyle} />
//           </TouchableOpacity>
//         </View>
//       </TouchableOpacity>
//     </View>
//   )}
//   contentContainerStyle={styles.listViewStyle}//设置cell的样式
// />
