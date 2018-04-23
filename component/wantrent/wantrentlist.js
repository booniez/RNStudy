import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Util from './../../util/util';
import cabinet from './cabinet';


var dataArray = ['环球中心东门 1', '环球中心东门 2', '环球中心东门 3','环球中心东门 4', '环球中心东门 5', '环球中心东门 6','环球中心东门 7', '环球中心东门 8', '环球中心东门 9'];
export default class wantrentlist extends Component < {} > {

    static navigationOptions = {
        headerTitle: '列表模式',
    }
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 != row2,
        });
        this.state = {
            dataSource: ds.cloneWithRows(dataArray),
        };
    }
    render() {
        return(
            <View style={styles.container} >
                <ListView
                ref={(listView) => {
                    _listView = listView
                }}
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => (
                    <TouchableOpacity style={styles.cellStyle} onPress={this._showDetail.bind(this, rowData)} >
                        <View style={{flexDirection: 'row',alignItems: 'center',}} >
                            <Image source={{uri: 'grid'}} style={{width:19*Util.size.width/375,height:26*Util.size.height/667,margin:14*Util.size.width/375}} />
                            <Text style={styles.textStyle}>
                                {rowData}
                            </Text>
                        </View>
                        <Image source={require('./../..//source/icons/more.png')} style={{width:20,height:20,marginRight:10}} />
                    </TouchableOpacity>
                )}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                enableEmptySections={true}
                style={{flex:1}}>
                </ListView>
            </View>
        )
    }
    _showDetail(id) {
        this.props.navigation.navigate('cabinet');
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: Util.pixel,
        borderTopColor: '#D8D8D8',
    },
    cellStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,
        height:41
    },
    textStyle: {
      fontSize: 16,
      color: '#333',
      // marginLeft: 14*Util.size.width/375,
    }
})
