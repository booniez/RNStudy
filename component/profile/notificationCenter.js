import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity,
} from 'react-native';
import Util from '../../util/util';

export default class  notificationCenter extends Component < {} > {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }
  static navigationOptions = {
    headerTitle: '消息中心'
  }
  render() {
    return(
      <View style={styles.container} >
        <ListView dataSource={this.state.dataSource} enableEmptySections={true}
                  renderRow={(rowData) =>
          (
          <TouchableOpacity style={[styles.item, styles.row]} onPress={this._showDetail.bind(this, rowData.id)} >
            <View style={{justifyContent:'center'}} >
              <Image style={styles.img} source={{uri:'icon_message'}} resizeMode="cover"/>
            </View>
            <View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:7,marginTop:10}} >
                <Text style={{fontSize:16,color:'#333'}}>消息通知</Text>
                <Text style={{fontSize:11,color:'#999'}}>2017-11-11</Text>
              </View>
              <View style={styles.text}>
                <Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
              </View>
            </View>

          </TouchableOpacity>
          )
        }/>
      </View>
    );
  }
  _showDetail() {
    this.props.navigation.navigate('notificationDetail');
  }
  componentDidMount() {
    let self = this;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    Util.get('https://news-at.zhihu.com/api/4/news/latest',function(data){
      console.log(data.stories);
      self.setState({
        dataSource: ds.cloneWithRows(data.stories)
      });
    },function(error){

    });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: Util.pixel,
    borderTopColor: '#D8D8D8',
  },
  item:{
    height:70,
    borderBottomWidth: Util.pixel,
    borderBottomColor:'#ccc'
  },
  row:{
    flexDirection: 'row'
  },
  img:{
    height:26*Util.size.width/375,
    width:36*Util.size.width/375,
    marginLeft:10,
    borderWidth:Util.pixel,
    borderRadius:3,
    borderColor:'#fff'
  },
  text:{
    marginLeft:7
  },
  title:{
    fontSize:14,
    marginTop:10,
    color:'#999',
    width:Util.size.width -80
  },
})
