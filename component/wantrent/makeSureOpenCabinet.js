

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import Util from './../../util/util';
import openCaninetFinish from './openCaninetFinish';

export default class makeSureOpenCabinet extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static navigationOptions = {
        headerTitle: '确认开柜'
    }
    _makeSureRent() {
      // alert('开柜租用');
      this.props.navigation.navigate('openCaninetFinish');
    }
    render() {
        return (
            <View style={styles.container} >
                <Text style={{color:'#333',fontSize:18,marginTop:28*Util.size.height/667}} >
                    你将开柜 3-3-3
                </Text>
                <View style={styles.toy} >
                    <Image source={{ uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2200875053,59610386&fm=27&gp=0.jpg' }} style={styles.imageStyle} />
                    <Text style={{color:'#333',fontSize:18,marginTop:18*Util.size.height/667}} >玩具汽车</Text>
                    <View style={{ flexDirection: 'row', alignItems:'flex-end',marginTop:10*Util.size.height/667}} >
                        <Text style={{color:'#D8111C',fontSize:26}} >2</Text>
                        <Text style={{color:'#333',fontSize:19,marginBottom:2}} >元/天</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.BtnStyle} onPress={this._makeSureRent.bind(this)} >
                  <Text style={{margin:15,color:'#fff'}} >确认开柜租用</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent:'center',
    },
    toy: {
        // flex: 1,
        alignItems: 'center',
        backgroundColor:'#fff',
        width: Util.size.width * 311/375,
        height: 365 * Util.size.height / 667 ,
        marginTop: 26 * Util.size.height / 667,

        borderRadius:20,
        shadowColor:'#333',
        shadowOffset:{h:Util.pixel,w:Util.pixel},
        shadowRadius:20,
        borderRadius:20,
        shadowOpacity:0.1,

    },
    imageStyle: {
        width: Util.size.width * 0.78,
        height: 261 * Util.size.height / 667,
        borderRadius:20,
  },
  BtnStyle: {
    marginTop: 44*Util.size.height/667,
    width: Util.size.width * 0.9,
    backgroundColor: 'red',
    borderRadius: 40,
    alignItems: 'center',
  },
})
