import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
} from 'react-native';

import Util from './../../util/util';
import Video from 'react-native-video';
 var sections = [
      { key: "A", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
    ];
export default class awards extends Component<{}> {
    static navigationOptions = {
        headerTitle: '获奖通知',
    };
    constructor(props) {
      super(props);
      this.state = {
        dataSource: sections
      };
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.video} >
                  <Video source={{uri: 'http://123.207.181.131/x.mp4'}}   // Can be a URL or a local file.
                   // poster="http://pic29.photophoto.cn/20131204/0034034499213463_b.jpg" // uri to an image to display until the video plays
                   ref={(ref) => {
                     this.player = ref
                   }}                                      // Store reference
                   rate={1.0}                              // 0 is paused, 1 is normal.
                   volume={1.0}                            // 0 is muted, 1 is normal.
                   muted={false}                           // Mutes the audio entirely.
                   paused={false}                          // Pauses playback entirely.
                   resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                   repeat={true}                           // Repeat forever.
                   playInBackground={false}                // Audio continues to play when app entering background.
                   playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                   ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                   progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                   onLoadStart={this.loadStart}            // Callback when video starts to load
                   onLoad={this.setDuration}               // Callback when video loads
                   onProgress={this.setTime}               // Callback every ~250ms with currentTime
                   onEnd={this.onEnd}                      // Callback when playback finishes
                   onError={this.videoError}               // Callback when video cannot be loaded
                   onBuffer={this.onBuffer}                // Callback when remote video is buffering
                   onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                   style={styles.backgroundVideo} />
                </View>
                <SectionList
                  renderSectionHeader={this._sectionComp}
                  renderItem={this._renderItem}
                  sections={this.state.dataSource}
                  />
            </View>
        );
    }
    _renderItem() {
      return(
        <View>
            <TouchableOpacity style={[styles.item, styles.row]} >
              <View>
                <Text style={{fontSize:14,color:'#333'}} >成功支付订单</Text>
                <Text style={{fontSize:12,color:'#999',marginTop:5*Util.size.height/667}} >2017-08-10 15:32</Text>
              </View>
              <Text style={{fontSize:18,color:'#D90016'}}>500元</Text>
            </TouchableOpacity>
            <View style={{backgroundColor:'#fff'}} >
              <View style={{ backgroundColor: '#D8D8D8', height: Util.pixel,marginLeft:12*Util.size.width/375,marginRight:12*Util.size.width/375}} ></View>
            </View>
        </View>

      )
    }
    _sectionComp() {
      return(
        <View style={{backgroundColor:'#F7F7F7',padding: 12*Util.size.width/375,}} >
          <Text style={{fontSize:13,color:'#E31B1B'}}>中奖名单</Text>
        </View>
      )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    video: {
      height: 196*Util.size.height/667,
    },
    item:{
      // height:70,
      paddingTop: 14*Util.size.height/667,
      paddingBottom: 14*Util.size.height/667,
      paddingLeft: 12*Util.size.width/375,
      paddingRight: 12*Util.size.width/375,
      backgroundColor: '#fff'
    },
    row:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
})
