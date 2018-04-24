import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import Util from './../../util/util';


export default class openCaninetFinish extends Component<{}> {

    static navigationOptions = {
        headerTitle: '开柜完成'
    }
    constructor(props) {
        super(props);
        this.state = {
          show:false,
        };
    }
    render() {
        return (
            <View style={styles.container} >
                <Image style={styles.img} source={{uri:'success'}} />
                <Text style={{marginTop:60*Util.size.height/667,fontSize: 20,color:'#333'}} >开柜成功！</Text>
                <Text style={{marginTop:16*Util.size.height/667,fontSize:16,color:'#333'}}>请拿取玩具后关上柜门</Text>
                <TouchableOpacity style={styles.navBtnStyle} onPress={this._finish.bind(this)} >
                    <Text style={{margin:15,color:'#fff'}} >完成</Text>
                </TouchableOpacity>
            </View>

        )
    }
    _finish() {
      this.props.navigation.pop(7)
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    navBtnStyle: {
        backgroundColor: 'red',
        borderRadius: 40,
        marginTop: 60*Util.size.height/667,
        alignItems: 'center',
        width: Util.size.width * 0.8,
    },
    img: {
        marginTop:20,
        width: Util.size.width*115/375,
        height: Util.size.width*115/375,
    },
    // modal的样式
    modalStyle: {
        // backgroundColor:'#ccc',
        alignItems: 'center',
        justifyContent:'center',
        // marginBottom:0,
        marginTop: 500*Util.size.height/812,
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
        height: 40*Util.size.height/812,
        flexDirection: 'row',
    },
    amount: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 90*Util.size.height/812,

    },
    cellStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,
        height:40*Util.size.height/812,
    },

})
