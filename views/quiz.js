import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import { styleGlobal } from '../styles-global';

const Quiz = () => {
    return(
        <View style={styleGlobal.mainQuiz}>
            <View style={styleGlobal.headMateri}>
                <TouchableOpacity onPress={() => {navigation.navigate('home')}}>
                    <Image style={{width: 10, height:18}} source={require('../assets/icon/Back.png')}/>
                </TouchableOpacity>
                <Text style={{alignSelf: 'center', fontSize:20, fontWeight: 500}}>Start Quiz</Text>
                <View></View>
            </View>
            <View style={styleGlobal.contentQuiz}>
                <Text style={{marginTop: 8, fontWeight: 500, fontSize: 16, color: 'white', marginBottom: 16}}>Quiz Wayang Kulit</Text>
                <View>
                    <Image style={{width: 326, height: 177}} source={require('../assets/quiz/WayangKulit.png')}/>
                    <View style={{width: 326, height: 60, backgroundColor: '#162023', borderBottomLeftRadius: 16, borderBottomRightRadius: 16, paddingHorizontal: 16}}>
                        <Text style={{color: 'white', marginTop: 8}}>Subject   : <Text style={{fontWeight: 700}}>Wayang Kulit</Text></Text>
                        <Text style={{color: 'white'}}>Chapter   : <Text style={{fontWeight: 700}}>01</Text></Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default Quiz;