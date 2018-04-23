import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    NativeModules,
    InteractionManager,
  } from 'react-native';

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';


import Swiper from 'react-native-swiper'


import Util from './../../util/util';
import revertScroll from './../revert/revertScroll';
import revertToys from './../revert/revertToys';
import wantrent from './../wantrent/wantrent';
import scan from './../wantrent/scan';
import awards from './../awards/awards';
import revertRecognition from './../revert/revertRecognition';

// var Push = NativeModules.PushNative;

  export default class home extends Component < {} > {
    static navigationOptions = {
        headerTitle: '共享玩具',
        headerRight: null,
    };
      render() {
        let view1 = [];
        let view2 = [];
        let view3 = [];
        let array = ["我要租","我要还","我的租用","个人中心","抽奖通知","货品管理",];
        let imgArray = ['rent','return_an','orders','mine','lottery','management',];
        for(let i = 0;i < array.length; i++) {
                if (i<4) {
                    view1.push(
                        <View style={styles.moduleRow} key={i}>
                            <TouchableOpacity style={{flex: 1, alignItems: 'center',  borderRightColor:'#F5F5F5', borderBottomColor: '#F5F5F5',borderRightWidth: Util.pixel, borderBottomWidth: Util.pixel }} onPress={this.choseModule.bind(this,i)} >
                                <View key={i} >
                                    <Image source={{uri: imgArray[i]}} style={styles.imageStyle}/>
                                    <View style={{alignItems:'center'}} >
                                      <Text style={styles.title} > {array[i]} </Text>
                                    </View>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center',borderBottomColor: '#F5F5F5', borderBottomWidth: Util.pixel}} onPress={this.choseModule.bind(this,i+1)} >
                                <View key={i+1} >
                                    <Image source={{uri: imgArray[i+1]}} style={styles.imageStyle}/>
                                      <View style={{alignItems:'center'}} >
                                        <Text style={styles.title} > {array[i+1]} </Text>
                                      </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                    i = i +  1;
                }else {
                    view1.push(
                        <View style={styles.moduleRow} key={i}>
                            <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderRightColor:'#F5F5F5', borderRightWidth: Util.pixel }} onPress={this.choseModule.bind(this, i)} >
                                <View key={i} >
                                    <Image source={{uri: imgArray[i]}} style={styles.imageStyle}/>
                                      <View style={{alignItems:'center'}} >
                                        <Text style={styles.title} > {array[i]} </Text>
                                      </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center',}} onPress={this.choseModule.bind(this, i+1)} >
                                <View key={i+1} >
                                    <Image source={{uri: imgArray[i+1]}} style={styles.imageStyle}/>
                                      <View style={{alignItems:'center'}} >
                                        <Text style={styles.title} > {array[i+1]} </Text>
                                      </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                    i = i +  1;
                }
        }
          return (
              <ScrollView style={styles.container} >
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
                        <Image source={{uri: 'banner'}} style={styles.bannerImg} />
                        <Image source={{uri: 'banner'}} style={styles.bannerImg} />
                        <Image source={{uri: 'banner'}} style={styles.bannerImg} />
                        <Image source={{uri: 'banner'}} style={styles.bannerImg} />
                    </Swiper>
                </View>
                <View style={styles.moduleView} >
                    {view1}
                </View>
            </ScrollView>
          );
      }
    choseModule(key) {
        if (key === 0) {
          this.props.navigation.navigate('wantrent');
        }else if (key === 1) {
          this.props.navigation.navigate('scrollView');
        }else if (key===2) {
          this.props.navigation.navigate('myrent');
        }else if (key===3) {
          this.props.navigation.navigate('profile');
        } else if (key === 4) {
            this.props.navigation.navigate('awards');
        } else if (key === 5) {
            this.props.navigation.navigate('cargo');
        }
    }
  }
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: '#fff',
      },
      wrapper: {

      },
      bannerView: {
        width: Util.size.width,
        height: 80*Util.size.height/334,
      },
      bannerImg: {
        width: Util.size.width,
        height: 80*Util.size.height/334,
      },
      moduleView: {
        flex: 1,
        flexDirection:'column',
        marginBottom: 0,
        marginTop: 0,
        width: Util.size.width,
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      },
      moduleRow: {
        width: Util.size.width,
        flexDirection: 'row'

    },
      moduleItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:Util.pixel,
        backgroundColor: 'black'

      },
      imageStyle: {
        width: 84*Util.size.width/375,
        height: 84*Util.size.width/375,
        marginTop: 16*Util.size.height/667,
        borderRadius: 42*Util.size.width/375,
        // marginLeft:54*Util.size.width/375
      },
      title: {
        marginTop: 12*Util.size.height/667,
        marginBottom: 15*Util.size.height/667,
        fontSize: 14,
        color: '#333',
      }
  })
