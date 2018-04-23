import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Util from '../../util/util';

export default class notificationDetail extends Component < {} > {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerTitle: '消息详情'
  }
  render() {
    return(
      <View style={styles.container} >
        <View style={{margin:10}} >
          <Text style={{fontSize: 17,color:'red'}} >购买通知</Text>
          <Text style={{fontSize: 14,color:'#999',marginTop:10}} >11:11</Text>
          <View style={{ borderColor: '#F7F7F7', borderWidth: Util.pixel, marginTop: 5 }} ></View>
          <Text style={{fontSize: 14,color:'#333',marginTop:10}} >RN 组件的生命周期大致分为了三个阶段： 第一阶段：绘制组件，完成组件的加载和初始化 第二阶段：组件运行交互阶段。 第三阶段：组件消亡阶段。</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  }
})
