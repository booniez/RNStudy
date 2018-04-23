import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image
  }from 'react-native';

var Dimensions = require('Dimensions');//获取屏幕的宽高
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

export default class SecondView extends Component <{}> {
  constructor(props) {
    super(props);
    var ds = new  ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
        dataSource : ds.cloneWithRows(this.getRows({}))
    }
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
    render(){
        return(
              <ListView     //创建ListView
                    dataSource={this.state.dataSource} //设置数据源
                    renderRow={this.renderRow} //设置cell
                    contentContainerStyle={styles.listViewStyle}//设置cell的样式
            />)
      }
//返回cell的方法
  renderRow(rowData,sectionID,rowID,highlightRow){
    console.log('看数据' +sectionID+ 'rowID' + rowID);
    this.setState = {
      rowID: rowID
    }
      return(
          <View style={[styles.bgStyle,{borderRightWidth: (rowID + 1) % 3 == 0 ? 0 : 1}]}>
              <Image source={{uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2200875053,59610386&fm=27&gp=0.jpg'}} style={styles.imageStyle}/>
              <Text>遥控汽车</Text>
              <View style={{flexDirection:'row'}} >
                <Text>租金:</Text>
                <Text style={{color:'red'}} >¥5</Text>
                <Text>/天</Text>
              </View>
              <Text>{'柜台号'+(rowID)}</Text>
          </View>
        )
      }
  }

//样式
const styles = StyleSheet.create({
        listViewStyle:{
              flexDirection:'row', //设置横向布局
              flexWrap:'wrap'    //设置换行显示
        },
        bgStyle:{
              // backgroundColor:'gray',
              width:(ScreenWidth-3)/3, //cell的宽度
              height:200,
              marginLeft:1,
              // marginTop:10,
              borderBottomWidth: 1,
              borderBottomColor: '#000',

              borderRightColor: '#000',
        },
        imageStyle:{
              width:(ScreenWidth-4)/3,
              height:100,
              backgroundColor:'white',
              marginBottom:0,
      }
});
