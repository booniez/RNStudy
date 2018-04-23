import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  WebView,
  TouchableOpacity,
} from 'react-native';

import Util from './../../util/util';
import wantrentlist from './wantrentlist';

export default class wantrent extends Component < {} > {
    constructor(props) {
        super(props);

    }

    static navigationOptions = ({navigation}) =>  ({
        headerTitle: '我要租',
        headeBackTitle: null,
        headerRight: <TouchableOpacity onPress={() => {
            navigation.navigate('wantrentlist');
        }} >
          <Text style={styles.rightTitle} >列表模式  </Text>
        </TouchableOpacity>


    });
    render() {
        return(
            <View style={{flex:1,borderTopWidth: Util.pixel,borderTopColor: '#D8D8D8',}} >
                { <WebView source = {{uri:'http://123.207.181.131/html/nearby.html'}} /> }
            </View>
            // <View />

        );
    }
}
const styles = StyleSheet.create({
  rightTitle: {
    fontSize: 14,
    color: '#333',
  }
})
