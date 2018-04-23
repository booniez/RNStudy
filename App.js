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
  Image,

} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Util from './util/util';

import home from './component/home/home';
import revertScroll from './component/revert/revertScroll';
import revertToys from './component/revert/revertToys';
import wantrent from './component/wantrent/wantrent';
import wantrentlist from './component/wantrent/wantrentlist';
import cabinet from './component/wantrent/cabinet';
import SecondView from './component/wantrent/collection';
import pop from './component/wantrent/pop';
import popPay from './component/wantrent/popPay';
import toyMsg from './component/wantrent/toyMsg';
import depositNotice from './component/wantrent/depositNotice';
import scan from './component/wantrent/scan';
import awards from './component/awards/awards';
import makeSureOpenCabinet from './component/wantrent/makeSureOpenCabinet';
import openCaninetFinish from './component/wantrent/openCaninetFinish';
import revertRecognition from './component/revert/revertRecognition';
import revertFinish from './component/revert/revertFinish';
import myrent from './component/myrent/myrent';
import refundCash from './component/myrent/refundCash';
import profile from './component/profile/profile';
import notificationCenter from './component/profile/notificationCenter';
import notificationDetail from './component/profile/notificationDetail';
import profileMessage from './component/profile/profileMessage';
import mybalance from './component/profile/balance/mybalance';
import recharge from './component/profile/balance/recharge';
import myDeposit from './component/profile/deposit/myDeposit';
import depositRecharge from './component/profile/deposit/depositRecharge';
import historyAddress from './component/profile/historyAddress';
import advice from './component/profile/advice';
import setting from './component/profile/setting';
import about from './component/profile/about';
import cargo from './component/cargo/cargo';
import addCargo from './component/cargo/addCargo';
import choseCabinet from './component/cargo/choseCabinet';
import addCargoSuccess from './component/cargo/addCargoSuccess';
import remove from './component/cargo/remove';
import removeCargoSuccess from './component/cargo/removeCargoSuccess';
import recycle from './component/cargo/recycle';
import recycleClearSuccess  from './component/cargo/recycleClearSuccess';
import logoin from './component/profile/logoin';
import register from './component/profile/register';
import scrollView from './component/revert/scrollView';
import resetPassword from './component/profile/resetPassword';
import modifyName from './component/profile/modifyName';
import editSex from './component/profile/editSex';

export default class App extends Component< {} > {
  render() {
    console.disableYellowBox = true
    return (
      <StackNavigators />
    );
  }
}

const StackNavigators = StackNavigator({
  home: {screen: home},
  revertScroll: {screen: revertScroll},
  revertToys: {screen: revertToys},
  wantrent: {screen: wantrent},
  wantrentlist: {screen: wantrentlist},
  cabinet: {screen: cabinet},
  SecondView: {screen: SecondView},
  pop: {screen: pop},
  popPay: { screen: popPay },
  toyMsg: { screen: toyMsg },
  depositNotice: { screen: depositNotice },
  scan: { screen: scan },
  awards: { screen: awards },
  makeSureOpenCabinet: { screen: makeSureOpenCabinet },
  openCaninetFinish: {screen: openCaninetFinish},
  revertRecognition: {screen: revertRecognition},
  revertFinish: {screen: revertFinish},
  myrent: {screen: myrent},
  refundCash: {screen: refundCash},
  profile: {screen: profile},
  notificationCenter: {screen: notificationCenter},
  notificationDetail: {screen: notificationDetail},
  profileMessage: {screen: profileMessage},
  mybalance: {screen: mybalance},
  recharge: {screen: recharge},
  myDeposit: {screen: myDeposit},
  depositRecharge: {screen: depositRecharge},
  historyAddress: {screen: historyAddress},
  advice: {screen: advice},
  setting: {screen: setting},
  about: {screen: about},
  cargo: {screen: cargo},
  addCargo: {screen: addCargo},
  choseCabinet: {screen: choseCabinet},
  addCargoSuccess: {screen: addCargoSuccess},
  remove: {screen: remove},
  removeCargoSuccess: {screen: removeCargoSuccess},
  recycle: {screen: recycle},
  recycleClearSuccess: {screen: recycleClearSuccess},
  logoin: {screen: logoin},
  register: {screen: register},
  scrollView: {screen: scrollView},
  resetPassword: {screen: resetPassword},
  modifyName: {screen: modifyName},
  editSex: {screen: editSex},
},
{
  navigationOptions:{
    headerTitleStyle:{
         flex: 1,
         textAlign: 'center',
     },
     headerBackTitle: null ,
     headerTintColor: '#333',
     headerRight:<View />,

  }

})
