import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Image,
} from 'react-native';
const options = [
    { label: '1号柜', value: '0' },
    { label: '2号柜', value: '1' },
    { label: '3号柜', value: '2' }
];
const imgArray = ['toy_1','toy_2','toy_3','toy_4','toy_5','toy_6'];
import Util from '../../util/util';
import SwitchSelector from '../wantrent/switchSelector';
import Swiper from 'react-native-swiper'
export default class remove extends Component < {} >{
  constructor(props) {
    super(props);
    var ds = new  ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
        dataSource : ds.cloneWithRows(this.getRows({})),
        navigator: props.navigate,
    }
  }
  static navigationOptions = {
    headerTitle: '下架货品'
  }
  getRows() {
    var Arr = [];
    for(var i = 0; i<5; i++){
           Arr.push(
               {
                 image: '111',
                 price:'222'
              }            )
      }
  return Arr;
  }
  render() {
    return(
      <View style = {styles.container} >
        <View style={styles.tipView} >
          <Text style={{fontSize:16,color:'#333'}} >请选择需要下架的格子</Text>
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
        </View>
        <ListView     //创建ListView
            dataSource={this.state.dataSource} //设置数据源
            renderRow={(rowData,sectionID,rowID,highlightRow) => {
                return(
                  <TouchableOpacity style={styles.bgStyle} onPress={this._toyMsg.bind(this)} >
                    <View  style={[styles.bgStyle,{borderRightWidth: (rowID + 1) % 3 == 0 ? 0 : 1}]} >
                        <Image source={{uri: imgArray[parseInt(Math.random() * (6) + 0)]}} style={styles.imageStyle}/>

                        <View style={{width:(Util.size.width-4)/3,backgroundColor:'#fff',flex:1}} >
                          <Text style={styles.cabinetTitle}>柜号1-1-5</Text>
                        </View>

                    </View>
                  </TouchableOpacity>

                  )
            }} //设置cell
            renderHeader={this._renderHeader.bind(this)}
            contentContainerStyle={styles.listViewStyle}//设置cell的样式
        />
      </View>
    )
  }
  _toyMsg() {
    // this.props.navigation.navigate('toyMsg');
    this.props.navigation.navigate('removeCargoSuccess');
  }
  _renderHeader() {
      if (this.state.selector === '1') {
        return (
          <View style={{flexDirection:'row',flexWrap:'wrap'}} >
            <TouchableOpacity style={styles.bgStyle} onPress={this._toyMsg.bind(this)} >
              <View  style={[styles.bgStyle,{borderRightWidth: 1}]} >
                  <Image source={{uri: imgArray[parseInt(Math.random() * (6) + 0)]}} style={styles.imageStyle}/>

                  <View style={{width:(Util.size.width-4)/3,backgroundColor:'#fff',flex:1}} >
                    <Text style={styles.cabinetTitle}>柜号1-1-5</Text>
                  </View>

              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bgStyle} onPress={this._toyMsg.bind(this)} >
              <View  style={[styles.bgStyle,{borderRightWidth: 1}]} >
                  <Image source={{uri: imgArray[parseInt(Math.random() * (6) + 0)]}} style={styles.imageStyle}/>

                  <View style={{width:(Util.size.width-4)/3,backgroundColor:'#fff',flex:1}} >
                    <Text style={styles.cabinetTitle}>柜号1-1-5</Text>
                  </View>

              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bgStyle} onPress={this._toyMsg.bind(this)} >
              <View  style={[styles.bgStyle,{borderRightWidth: 0}]} >
                  <Image source={{uri: imgArray[parseInt(Math.random() * (6) + 0)]}} style={styles.imageStyle}/>

                  <View style={{width:(Util.size.width-4)/3,backgroundColor:'#fff',flex:1}} >
                    <Text style={styles.cabinetTitle}>柜号1-1-5</Text>
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


  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  tipView: {
    paddingTop: 18*Util.size.height/667,

    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#F7F7F7',
    borderBottomWidth: Util.pixel,
  },
  selectView: {
      width: Util.size.width,
      height: 60,
      marginTop: 10,
      backgroundColor: 'white',
  },
  selectSuperView: {
    marginTop: 10,
    width: Util.size.width * 0.9,
    alignItems: 'center',
    marginLeft: Util.size.width*0.05,
    // borderColor: 'red',
    // borderRadius: 30,

  },
  listViewStyle:{
    flexDirection:'row', //设置横向布局
    flexWrap:'wrap'    //设置换行显示
  },
  bgStyle:{
        // backgroundColor:'gray',
        width:(Util.size.width-3)/3, //cell的宽度
        height:143*Util.size.height/667,
        marginLeft:1,
        alignItems: 'center',
        // marginTop:10,
        borderBottomWidth: 1,
        borderBottomColor: '#F7F7F7',

        borderRightColor: '#F7F7F7',
  },
  imageStyle:{
        width: 105*Util.size.width/375, //(Util.size.width-4)/3,
        height:88*Util.size.height/667,
        marginLeft: 8*Util.size.width/375,
        marginTop: 8*Util.size.width/375,
        backgroundColor:'white',
        marginBottom:0,
  },
  cabinetTitle: {
    fontSize: 12,
    color: '#333',
    marginTop: 15*Util.size.height/667,
    marginLeft: 10*Util.size.width/375,
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
