import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image,TextInput } from 'react-native';

import { styleGlobal } from '../styles-global';

const Search = ({navigation}) => {
    return (
        <View style={styleGlobal.mainSearch}>
            <View style={{justifyContent: 'space-between', width: '80%', marginBottom: 18}}>
                <TouchableOpacity onPress={() => {navigation.navigate('home')}}><Image style={{width: 10, height: 18, marginTop: 60}} source={require('../assets/icon/Back.png')}/></TouchableOpacity>
                <View></View>
            </View>
            <Image style={{width: 164, height: 36}} source={require('../assets/wayang.png')}/>
            <View style={styleGlobal.search}>
                <TextInput placeholder="Cari nama tokoh wayang..." placeholderTextColor={'#ABABAB'}/>
                <Image style={{width: 16, height: 16}} source={require('../assets/icon/Magnify.png')}/>
            </View>
        </View>
    );
}
export default Search;