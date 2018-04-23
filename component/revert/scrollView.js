
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Swiper from './swip';
import Util from './../../util/util';
export default class scrollView extends Component < {} > {
  constructor() {
    super()
    // this.state = {
    //   index: 0
    // }
  }

  state = {
    swipperIndex: 1,
  }

  static navigationOptions = {
      headerTitle: '归还选择',
  };

  toggleSwipper = (_, state) => {
    // console.log(state.index, 'swipper');
    const stateCopy = Object.assign({}, state);
    this.setState({
      swipperIndex: Number(stateCopy.index) + 1,
    });
  }

  render() {
    return(
      <View style={styles.container} >
        <View>
          <Text style={styles.tipText} >请选择您要归还的玩具</Text>
        </View>
        <View style={styles.contentView}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={{uri:'more_left'}} style={{width:20*Util.size.width/375,height:20*Util.size.width/375,marginRight:5*Util.size.width/375}} />
          </View>
          <View style={styles.swiper}>

            <Swiper loop={false}  onMomentumScrollEnd={this.toggleSwipper} showsPagination={false}  horizontal={true} showsButtons={false}
            >
                {this._renderCell()}
                {this._renderCell()}
                {this._renderCell()}
                {this._renderCell()}
                {this._renderCell()}
                {this._renderCell()}
            </Swiper>

          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={{uri:'more_rignt'}} style={{width:20*Util.size.width/375,height:20*Util.size.width/375,marginLeft:5*Util.size.width/375}} />
          </View>
        </View>

        <View style={{alignItems:'center',marginTop:16*Util.size.height/667}} ><Text style={{color:'#999',fontSize:16}}>{this.state.swipperIndex}/6</Text></View>
        <TouchableOpacity style={styles.BtnStyle} onPress={this._makeSureRent.bind(this)} >
          <Text style={{margin:15,color:'#fff'}} >归还</Text>
        </TouchableOpacity>
      </View>

    )
  }
  _makeSureRent() {
    this.props.navigation.navigate('revertRecognition')
  }
  _renderCell() {
    return(
      <View style={styles.toy} >
          <Image source={{ uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2200875053,59610386&fm=27&gp=0.jpg' }} style={styles.imageStyle} />
          <Text style={{color:'#333',fontSize:18,marginTop:24*Util.size.height/667}} >玩具汽车</Text>
          <Text style={{color:'#333',fontSize:16,marginTop:18*Util.size.height/667}} >已租用: 10天</Text>
          <View style={{ flexDirection: 'row',marginTop:14*Util.size.height/667}} >
              <Text style={{color:'#333',fontSize:16,marginTop:4*Util.size.height/667}} >租金</Text>
              <Text style={{color:'#D8111C',fontSize:19}} >¥20</Text>
          </View>
          <View style={{ flexDirection: 'row',marginTop:14*Util.size.height/667}} >

          </View>
          <View style={{height:100*Util.size.height/667,backgroundColor:'orange'}}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
  },
  bannerImg: {
    width: Util.size.width,
    height: 80*Util.size.height/334,
  },
  tipText: {
    color: '#333',
    fontSize: 18,
    marginTop: 28*Util.size.height / 667,
  },
  contentView: {
    flexDirection: 'row',

  },
  swiper: {
    flexDirection:'row',
    marginTop: (Platform.os === 'ios' ? 26 : 10) * Util.size.height / 667,
    height: 392 * Util.size.height / 667 ,
    width: Util.size.width * 311/375,
    shadowColor:'#333',
    shadowOffset:{h:Util.pixel,w:Util.pixel},
    shadowRadius:20,
    borderRadius:20,
    shadowOpacity:0.1,
    overflow:'hidden',


  },
  toy: {
      // flex: 1,
      alignItems: 'center',
      backgroundColor:'#fff',



  },
  imageStyle: {
      width: Util.size.width * 0.78,
      height: (Platform.os === 'ios' ? 261 : 240) * Util.size.height / 667,
      borderRadius:20,
  },
  BtnStyle: {
    marginTop: 22*Util.size.height/667,
    width: Util.size.width * 0.9,
    backgroundColor: '#E22924',
    borderRadius: 40,
    alignItems: 'center',
  },
})
