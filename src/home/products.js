'use strict';

import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import toast from '../utils/toast';

export default class extends React.Component {
    render() {
    //toast("这是产品列表");
        return <View style={{marginTop: 200}}>
            <Text>这是产品列表</Text>
        </View>
    }
}