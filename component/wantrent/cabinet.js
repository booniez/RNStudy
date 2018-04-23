import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Util from './../../util/util';
import SwitchSelector from './switchSelector';
import SecondView from './collection';
import pop from './pop';
import toyMsg from './toyMsg';
import Swiper from 'react-native-swiper'

const options = [
    { label: '1号柜', value: '0' },
    { label: '2号柜', value: '1' },
    { label: '3号柜', value: '2' }
];
const imgArray = ['toy_1','toy_2','toy_3','toy_4','toy_5','toy_6'];

export default class cabinet extends Component < {} > {
    static navigationOptions = {
        headerTitle: '柜子详情'
    }
    constructor(props) {
      super(props);
      var ds = new  ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
      this.state = {
          dataSource : ds.cloneWithRows(this.getRows({})),
          navigator: props.navigate,
          selector: 0,
      }
    }
    getRows() {
      var Arr = [];
      for(var i = 0; i<3; i++){
             Arr.push(
                 {
                   image: '111',
                   price:'222'
                }            )
        }
  return Arr;
}
    render() {
        const _this = this;
        return (
            <View style={styles.container} >
                <View style={styles.topInfo} >
                  <View style={{height:Util.size.height*104/667*0.7,width:Util.size.width*0.65,borderRightWidth:Util.pixel,borderRightColor:'#D8D8D8'}}>
                    <Text style={{fontSize: 16,color:'#333',marginTop:5*Util.size.height/667,marginLeft:22*Util.size.width/375}} >环球中心东门4号</Text>
                    <Text style={{fontSize: 14,color:'#999',marginTop:18*Util.size.height/667,marginLeft:22*Util.size.width/375}} >地址：环球中心东门8栋8楼1号</Text>
                  </View>
                  <View style={styles.navView} >
                    <TouchableOpacity style={styles.navBtnStyle} onPress={this._nav.bind(this)} >
                      <Text style={{margin:10,color:'#fff',fontSize:14}} >导航到此</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.selectView} >
                  <View style={styles.selectSuperView} >
                    <SwitchSelector hasPadding={true} buttonColor='red' options={options} initial={0} onPress={ (value) => {
                      this.setState({
                        selector: value,
                      })
                    }
                  } />
                  </View>
                </View>


                <ListView     //创建ListView
                    dataSource={this.state.dataSource} //设置数据源
                    renderRow={(rowData,sectionID,rowID,highlightRow) => {
                        return(
                          <TouchableOpacity style={styles.bgStyle} onPress={this._toyMsg.bind(this)} >
                            <View  style={[styles.bgStyle,{borderRightWidth: (rowID + 1) % 3 == 0 ? 0 : 1}]} >
                                <Image source={{uri: imgArray[parseInt(Math.random() * (6) + 0)]}} style={styles.imageStyle}/>

                                <View style={{width:(Util.size.width-4)/3,backgroundColor:'#fff',flex:1}} >
                                  <Text style={{fontSize:14,color:'#333',marginLeft:13*Util.size.width/375,marginTop:12*Util.size.height/667}} >遥控汽车</Text>
                                  <View style={{flexDirection:'row',marginTop:10*Util.size.height/667}} >
                                    <Text style={{fontSize:12,color:'#333',marginLeft:13*Util.size.width/375}} >租金:</Text>
                                    <Text style={{color:'#E22924',fontSize:12}} >¥5</Text>
                                    <Text style={{fontSize:12,color:'#333'}}>/天</Text>
                                  </View>
                                  <Text style={{fontSize:12,color:'#333',marginLeft:13*Util.size.width/375,marginTop:6*Util.size.height/667,marginBottom:16*Util.size.height/667}} >{'柜台号'+(rowID)}</Text>
                                </View>

                            </View>
                          </TouchableOpacity>

                          )
                    }} //设置cell
                    renderHeader={this._renderHeader.bind(this)}
                    contentContainerStyle={styles.listViewStyle}//设置cell的样式
                />

            </View>
        );
    }
    _select = (value) => {
      console.log(this);

    }
    _renderHeader() {
        if (this.state.selector === '1') {
          return (
            <View style={{flexDirection:'row',flexWrap:'wrap'}} >
              <TouchableOpacity style={styles.bgStyle} onPress={this._toyMsg.bind(this)} >
                <View  style={[styles.bgStyle,{borderRightWidth: 1}]} >
                    <Image source={{uri: imgArray[parseInt(Math.random() * (6) + 0)]}} style={styles.imageStyle}/>

                    <View style={{width:(Util.size.width-4)/3,backgroundColor:'#fff',flex:1}} >
                      <Text style={{fontSize:14,color:'#333',marginLeft:13*Util.size.width/375,marginTop:12*Util.size.height/667}} >遥控汽车</Text>
                      <View style={{flexDirection:'row',marginTop:10*Util.size.height/667}} >
                        <Text style={{fontSize:12,color:'#333',marginLeft:13*Util.size.width/375}} >租金:</Text>
                        <Text style={{color:'#E22924',fontSize:12}} >¥5</Text>
                        <Text style={{fontSize:12,color:'#333'}}>/天</Text>
                      </View>
                      <Text style={{fontSize:12,color:'#333',marginLeft:13*Util.size.width/375,marginTop:6*Util.size.height/667,marginBottom:16*Util.size.height/667}} >{'柜台号'}</Text>
                    </View>

                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bgStyle} onPress={this._toyMsg.bind(this)} >
                <View  style={[styles.bgStyle,{borderRightWidth: 1}]} >
                    <Image source={{uri: imgArray[parseInt(Math.random() * (6) + 0)]}} style={styles.imageStyle}/>

                    <View style={{width:(Util.size.width-4)/3,backgroundColor:'#fff',flex:1}} >
                      <Text style={{fontSize:14,color:'#333',marginLeft:13*Util.size.width/375,marginTop:12*Util.size.height/667}} >遥控汽车</Text>
                      <View style={{flexDirection:'row',marginTop:10*Util.size.height/667}} >
                        <Text style={{fontSize:12,color:'#333',marginLeft:13*Util.size.width/375}} >租金:</Text>
                        <Text style={{color:'#E22924',fontSize:12}} >¥5</Text>
                        <Text style={{fontSize:12,color:'#333'}}>/天</Text>
                      </View>
                      <Text style={{fontSize:12,color:'#333',marginLeft:13*Util.size.width/375,marginTop:6*Util.size.height/667,marginBottom:16*Util.size.height/667}} >{'柜台号'}</Text>
                    </View>

                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bgStyle} onPress={this._toyMsg.bind(this)} >
                <View  style={[styles.bgStyle,{borderRightWidth:  0}]} >
                    <Image source={{uri: imgArray[parseInt(Math.random() * (6) + 0)]}} style={styles.imageStyle}/>

                    <View style={{width:(Util.size.width-4)/3,backgroundColor:'#fff',flex:1}} >
                      <Text style={{fontSize:14,color:'#333',marginLeft:13*Util.size.width/375,marginTop:12*Util.size.height/667}} >遥控汽车</Text>
                      <View style={{flexDirection:'row',marginTop:10*Util.size.height/667}} >
                        <Text style={{fontSize:12,color:'#333',marginLeft:13*Util.size.width/375}} >租金:</Text>
                        <Text style={{color:'#E22924',fontSize:12}} >¥5</Text>
                        <Text style={{fontSize:12,color:'#333'}}>/天</Text>
                      </View>
                      <Text style={{fontSize:12,color:'#333',marginLeft:13*Util.size.width/375,marginTop:6*Util.size.height/667,marginBottom:16*Util.size.height/667}} >{'柜台号'}</Text>
                    </View>

                </View>
              </TouchableOpacity>
              <View style={styles.bannerView} >
                  <Swiper style={styles.wrapper} height={200} horizontal={true} paginationStyle={{bottom: 10}} showsButtons={false} autoplay={true}
                  dot={<View style={{           //未选中的圆点样式
                      backgroundColor: 'rgba(153, 153, 153, 0.4)',
                      width: 8,
                      height: 8,
                      borderRadius: 10,
                      marginLeft: 10,
                      marginRight: 9,
                      marginTop: 9,
                      marginBottom: 9,
                  }}/>}
                  activeDot={<View style={{    //选中的圆点样式
                      backgroundColor: 'rgba(153,153,153,1)',
                      width: 8,
                      height: 8,
                      borderRadius: 10,
                      marginLeft: 10,
                      marginRight: 9,
                      marginTop: 9,
                      marginBottom: 9,
                  }}/>}
                  >
                      <Image source={{uri: 'ad'}} style={styles.bannerImg} />
                      <Image source={{uri: 'ad'}} style={styles.bannerImg} />
                      <Image source={{uri: 'ad'}} style={styles.bannerImg} />
                      <Image source={{uri: 'ad'}} style={styles.bannerImg} />
                  </Swiper>
              </View>
            </View>
          )
        }else {
          return(
            <View />
          )
        }
        // if ( 1 === 1) {

        // }else {
        //   <View />
        // }


    }
    // componentWillUpdate() {
    //   console.log('重新加载');
    // }
    _toyMsg() {
      this.props.navigation.navigate('toyMsg');
    }
    _nav() {      
      // this.props.navigation.navigate('popPay');
      // alert('开始导航');
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: Util.pixel,
        borderTopColor: '#D8D8D8',
    },
    headerContainer: {
      flex: 1,
      width: Util.size.width,
      backgroundColor: 'gray',
      height: 500,
    },
    topInfo: {
        width: Util.size.width,
        height: Util.size.height * 104 / 667,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'#fff',
    },
    selectView: {
        width: Util.size.width,
        height: 60,
        marginTop: 4*Util.size.height/667,
        backgroundColor: 'white',
        borderBottomWidth: Util.pixel,
        borderBottomColor: '#D8D8D8',
    },
    selectSuperView: {
      marginTop: 10,
      width: Util.size.width * 0.9,
      alignItems: 'center',
      marginLeft: Util.size.width*0.05,
      // borderColor: 'red',
      // borderRadius: 30,

    },
    navView: {
      flex:1,
      justifyContent: 'center' ,
      alignItems: 'center',
    },
    navBtnStyle: {
      backgroundColor: 'red',
      borderRadius: 20,
    },
    listViewStyle:{
      flexDirection:'row', //设置横向布局
      flexWrap:'wrap'    //设置换行显示
    },
    bgStyle:{
          backgroundColor:'#fff',
          width:(Util.size.width-3)/3, //cell的宽度
          // height:197*Util.size.height/667,
          marginLeft:1,
          // marginTop:10,
          borderBottomWidth: Util.pixel,
          borderBottomColor: '#F7F7F7',

          borderRightColor: '#F7F7F7',
    },
    imageStyle:{
          width: 105*Util.size.width/375,//(Util.size.width-4)/3,
          height:88*Util.size.height/667,
          marginLeft: 8*Util.size.width/375,
          marginTop: 8*Util.size.width/375,
          backgroundColor:'white',
          marginBottom:0,
    },
    bannerView: {
      width: Util.size.width,
      height: 80*Util.size.height/334,
    },
    bannerImg: {
      width: Util.size.width,
      height: 80*Util.size.height/334,
    },


})
