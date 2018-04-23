import React, { Component } from 'react';
import { Dimensions, View, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {ENTRIES2} from './../../source/static/entries';
import SliderEntry from '../../source/components/SliderEntry';
// import { sliderWidth, itemWidth } from '../../source/styles/SliderEntry.style';
import styles, { colors } from '../../source/styles/index.style';

export default class MyCarousel extends Component {

    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }

    render () {
        return (
            <Carousel
                  data={ENTRIES2}
                  renderItem={this._renderItem}
                  sliderWidth={300}
                  itemWidth={300}
                  inactiveSlideScale={1}
                  inactiveSlideOpacity={0.999999}
                  enableMomentum={true}
                  activeSlideAlignment={'start'}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  activeAnimationType={'spring'}
                  activeAnimationOptions={{
                      friction: 4,
                      tension: 40
                  }}
                />
        );
    }
}
