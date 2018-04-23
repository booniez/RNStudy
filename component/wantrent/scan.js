import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';

import {QRScannerView} from './../common/scan/QRScanner';
import Util from './../../util/util';
import depositNotice from './depositNotice';
export default class scan extends Component<{}> {
    constructor(props) {
        super(props);    
        this.state = {
            fromView: 0, // 默认为0：来自我要租
            isDiscriminate: false,
        }
    }
    render() {
        return (
            < QRScannerView
                onScanResultReceived
                ={this.barcodeReceived.bind(this)}                
            />
        );
    }
    barcodeReceived(e) {
        // console.log('\nData: ' + e.data);
        this.setState = {
            isDiscriminate: true
        }
        if (this.state.isDiscriminate) {
            
        } else {
            if (this.state.fromView === 0) {
                this.props.navigation.navigate('depositNotice');
            } else {
                this.props.navigation.goBack();
            }
        }
        
        
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})