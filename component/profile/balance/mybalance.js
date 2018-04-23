import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  SectionList,
  Image,
  TouchableOpacity,
} from 'react-native';

var sections = [
      { key: "A", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
    ];
import Util from './../../../util/util';
export default class mybalance extends Component < {} > {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: sections
    };
  }
  static navigationOptions = {
    headerTitle: '我的余额'
  }
  _renderItem() {
    return(
      <View>
        <TouchableOpacity style={[styles.item, styles.row]} >
          <View>
            <Text style={{fontSize:14,color:'#333'}} >成功支付订单</Text>
            <Text style={{fontSize:12,color:'#999',marginTop:5*Util.size.height/667}} >2017-08-10 15:32</Text>
          </View>
          <Text style={{fontSize:16,color:'#D90016'}} >+10</Text>
        </TouchableOpacity>
        <View style={{backgroundColor:'#fff'}} >
          <View style={{ backgroundColor: '#F7F7F7', height: Util.pixel,marginLeft:12*Util.size.width/375,marginRight:12*Util.size.width/375}} ></View>
        </View>
      </View>

    )
  }
  _sectionComp() {
    return(
      <View style={{backgroundColor:'#F7F7F7',padding: 10,}} >
        <Text style={{fontSize:13,color:'#999'}}>余额明细</Text>
      </View>
    )
  }
  render() {
    return(
      <View style={styles.container} >
        <SectionList
          renderSectionHeader={this._sectionComp}
          renderItem={this._renderItem}
          ListHeaderComponent={() => (
            <View style={styles.headerView} >
              <Image source={{uri: 'icon_money'}} style={styles.img} resizeMode='cover' />
              <Text style={{fontSize: 18,color:'#333',marginTop: 10}} >我的余额</Text>
              <Text style={{fontSize: 24,color:'#E22924',marginTop: 10}} >¥111</Text>
              <TouchableOpacity style={styles.BtnStyle} onPress={this._pay.bind(this)} >
                <Text style={{margin:15,color:'#fff'}} >充值</Text>
              </TouchableOpacity>

            </View>
          )}
          sections={this.state.dataSource}
          />
      </View>
    )
  }
  _pay() {
    this.props.navigation.navigate('recharge');
  }
  _showDetail() {

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  item:{
    // height:70,
    padding: 10,

    backgroundColor: '#fff'
  },
  row:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  img: {
    marginTop:34*Util.size.height/667,
    height: 95*Util.size.width/375,
    width: 90*Util.size.height/667,
  },
  BtnStyle: {
    backgroundColor: 'red',
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
    width: Util.size.width*0.8,
  },
})
