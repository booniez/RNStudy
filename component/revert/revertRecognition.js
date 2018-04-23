import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import TimerMixin from 'react-timer-mixin';

import Util from './../../util/util';
import revertFinish from './revertFinish';


export default class revertRecognition extends Component<{}> {

    static navigationOptions = {
        headerTitle: '归还识别'
    }
    constructor(props) {
        super(props);
        this.state = {
          show:false,
          isRecognition: false
        };
    }
    render() {
        return (
            <View style={styles.container} >
                <Image style={styles.img} source={{uri:'success'}} />
                <Text style={{marginTop:65*Util.size.height/667,fontSize: 20,color:'#333'}} >归还柜门已开！</Text>
                <Text style={{marginTop:24*Util.size.height/667,fontSize:16,color:'#666',width: Util.size.width*0.7253}}>请将需要归还的单件玩具放入柜格中，等待识别，识别成功后将自动回收玩具</Text>
                <View style={{height: this.state.isRecognition ? 0 : 200*Util.size.height/667,}}>
                  <TouchableOpacity style={styles.BtnStyle} onPress={this._recognition.bind(this)} >
                      <Text style={{margin:15,color:'#fff'}} >开始识别</Text>
                  </TouchableOpacity>
                </View>
                <View><Text style={[styles.recognitionText,{color:this.state.isRecognition ? '#E22924' : '#F7F7F7' ,}]}>识别中...</Text></View>
            </View>

        )
    }
    _recognition() {
      this.setState({
        isRecognition: true
      })
      this.timer = setTimeout(() => {
            // this.props.navigation.navigate("Main");
            this.props.navigation.navigate('revertFinish')
            this.setState({
              isRecognition: false
            })
        }, 1000);
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        borderTopWidth: Util.pixel,
        borderTopColor: '#D8D8D8',
        backgroundColor: '#F7F7F7',
    },
    BtnStyle: {
        backgroundColor: '#E22924',
        borderRadius: 40,
        marginTop: 79*Util.size.height/667,
        alignItems: 'center',
        marginLeft: Util.size.width * 0.005,
        width: Util.size.width * 0.9,
    },
    img: {
        marginTop:60*Util.size.height/667,
        width: Util.size.width*115/375,
        height: Util.size.width*115/375,
    },
    // modal的样式
    modalStyle: {

        alignItems: 'center',
        justifyContent:'center',

        marginTop: 500*Util.size.height/812,
        flex:1,
    },
    recognitionText: {
      fontSize: 18,
      color: '#E22924',
      marginTop: 78*Util.size.height/667,
    }


})
