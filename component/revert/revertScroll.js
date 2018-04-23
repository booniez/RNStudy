/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

import Util from './../../util/util';

var dataArray = ['page 1', 'page 2', 'page 3','page 4', 'page 5', 'page 6','page 7', 'page 8', 'page 9'];

export default class revertScroll extends Component< {} > {
    static navigationOptions = {
        headerTitle: '我要还',
    };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        var ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 != row2,
        });
        this.state = {
            dataSource: ds.cloneWithRows(dataArray),
        };

    }
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.titleView} >
            <Text style={styles.titleText} >请选择您要归还的玩具</Text>
        </View>

        <ListView
                ref={(listView) => {
                    _listView = listView
                }}
                style={styles.ListViewcontainer}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                onScroll={(event) => {
                    this._scroll(event);
                }}
                onScrollEndDrag={(event)=>{
                    this._handleEndDrag(event,_listView);
                }}
                enableEmptySections={true}
                // renderFooter={ this._renderFooter.bind(this) }
                // onEndReached={ this._toEnd.bind(this) }
                // onEndReachedThreshold={-1}
            >
        </ListView>
        <Text>2/3</Text>
      </View>
    );
  }
  _handleEndDrag(event,_scrollView) {
    var scrollView = event.nativeEvent;
    var x = scrollView.contentOffset.x;
    var SVNWidth = scrollView.layoutMeasurement.width;
    var contentSize = scrollView.contentSize.width;
    var page = parseInt((x + Util.size.width * 0.6) % Util.size.width*0.8);
    // _scrollView.scrollTo({x: page * Util.size.width * 0.8 });
    console.log('滚动到' + page + '页');
  }
  _renderRow(rowData) {
    return (
        <View style={styles.cellStyle}>
            <Text style={styles.textStyle}>
                {rowData}
            </Text>
        </View>
        );
    }

    _scroll(event) {
    var scrollView = event.nativeEvent;
    var x = scrollView.contentOffset.x;

    var SVNWidth = scrollView.layoutMeasurement.width;
    var contentSize = scrollView.contentSize.width;

    console.log(x + ", " + SVNWidth + ", " + contentSize + "," + Util.size.height + "," + Util.size.width);

    // console.log(parseInt(page));

    if (x > 0 && x + SVNWidth > contentSize + 20) {


    }
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ListViewcontainer: {
      width: Util.size.width * 0.8,
      marginLeft: Util.size.width*0.1,
    },
    titleView: {
        alignItems: 'center',
        marginTop: 20,
    },
    titleText: {
        fontSize: 14,
        color: 'rgba(95,95,95,1)',
    },
    cellStyle: {
        flex: 1,
        width: Util.size.width * 0.8,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'red',
    },
})
