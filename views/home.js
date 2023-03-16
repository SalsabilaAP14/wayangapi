import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import { styleGlobal } from '../styles-global';
import DetailMateri from './detail';

const HomePage = ({navigation}) => {

    const [isSelected, setIsSelected] = useState(0);

    return(
        <View style={styleGlobal.home}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Image style={{width: 164, height: 36, marginTop: 69}} source={require("../assets/wayang.png")}/>
                <Text style={{color: "#6D6969", marginRight: 110, marginTop:32, fontSize: 14}}>Mari kenali budaya wayang kita.</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('search')}} style={styleGlobal.search}>
                    <Text style={{color: '#ABABAB'}}>Cari nama tokoh wayang...</Text>
                    <Image style={{width: 16, height: 16}} source={require('../assets/magnifier.png')}/>
                </TouchableOpacity>
                <ScrollView style={{marginLeft: 48, maxHeight: 32}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={isSelected == 1 ? styleGlobal.buttonActive : styleGlobal.button} onPress={() => {setIsSelected(1)}}>
                        <Text style={{color: 'white'}}>Wayang Kulit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={isSelected == 2 ? styleGlobal.buttonActive : styleGlobal.button} onPress={() => {setIsSelected(2)}}>
                        <Text style={{color: 'white'}}>Wayang Golek</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={isSelected == 3 ? styleGlobal.buttonActive : styleGlobal.button} onPress={() => {setIsSelected(3)}}>
                        <Text style={{color: 'white'}}>Wayang Beber</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={isSelected == 4 ? styleGlobal.buttonActive : styleGlobal.button} onPress={() => {setIsSelected(4)}}>
                        <Text style={{color: 'white'}}>Wayang Wong</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={isSelected == 5 ? styleGlobal.buttonActive : styleGlobal.button} onPress={() => {setIsSelected(5)}}>
                        <Text style={{color: 'white'}}>Wayang Potehi</Text>
                    </TouchableOpacity>
                </ScrollView>
                
                {
                    isSelected == 1 ? 
                        <TouchableOpacity style={styleGlobal.listContainer} onPress={()=>{navigation.navigate('detail', {number: 1})}}>
                            <Image style={{width: 62, height: 62}} source={require('../assets/content/WayangKulit.png')}/>
                            <View style={styleGlobal.textContainer}>
                                <Text style={styleGlobal.textHead}>Wayang Kulit</Text>
                                <Text style={styleGlobal.textDesc} numberOfLines={3}>Wayang kulit adalah seni tradisional asli Negara Kesatuan Republik Indonesia... <Text style={{fontWeight:500, fontSize: 12}}>Baca Selengkapnya</Text></Text>
                            </View>
                        </TouchableOpacity>
                    : isSelected == 2 ?
                        <TouchableOpacity style={styleGlobal.listContainer} onPress={()=>{navigation.navigate('detail', {number: 2})}}>
                            <Image style={{width: 62, height: 62}} source={require('../assets/content/WayangGolek.png')}/>
                            <View style={styleGlobal.textContainer}>
                                <Text style={styleGlobal.textHead}>Wayang Golek</Text>
                                <Text style={styleGlobal.textDesc} numberOfLines={3}>Wayang Golek menjadi menjadi salah satu ciri khas kesenian dari Jawa Barat. Boneka kayu ...<Text style={{fontWeight:500, fontSize: 12}}>Baca Selengkapnya</Text></Text>
                            </View>
                        </TouchableOpacity>
                    : isSelected == 3 ?
                        <TouchableOpacity style={styleGlobal.listContainer} onPress={()=>{navigation.navigate('detail', {number: 3})}}>
                            <Image style={{width: 62, height: 62}} source={require('../assets/content/WayangBeber.png')}/>
                            <View style={styleGlobal.textContainer}>
                                <Text style={styleGlobal.textHead}>Wayang Beber</Text>
                                <Text style={styleGlobal.textDesc} numberOfLines={3}>Wayang Beber adalah seni wayang berupa lembaran-lembaran yang muncul ...<Text style={{fontWeight:500, fontSize: 12}}>Baca Selengkapnya</Text></Text>
                            </View>
                        </TouchableOpacity>
                    : isSelected == 4 ?
                        <TouchableOpacity style={styleGlobal.listContainer} onPress={()=>{navigation.navigate('detail', {number: 4})}}>
                            <Image style={{width: 62, height: 62}} source={require('../assets/content/WayangWong.png')}/>
                            <View style={styleGlobal.textContainer}>
                                <Text style={styleGlobal.textHead}>Wayang Wong</Text>
                                <Text style={styleGlobal.textDesc} numberOfLines={3}>Wayang Wong adalah adalah salah satu jenis teater tradisional Jawa yang merupakan...<Text style={{fontWeight:500, fontSize: 12}}>Baca Selengkapnya</Text></Text>
                            </View>
                        </TouchableOpacity>
                    : isSelected == 5 ?
                        <TouchableOpacity style={styleGlobal.listContainer} onPress={()=>{navigation.navigate('detail', {number: 5})}}>
                            <Image style={{width: 62, height: 62}} source={require('../assets/content/WayangPotehi.png')}/>
                            <View style={styleGlobal.textContainer}>
                                <Text style={styleGlobal.textHead}>Wayang Potehi</Text>
                                <Text style={styleGlobal.textDesc} numberOfLines={3}>Wayang Potehi merupakan salah satu jenis wayang khas Tionghoa yang berasal...<Text style={{fontWeight:500, fontSize: 12}}>Baca Selengkapnya</Text></Text>
                            </View>
                        </TouchableOpacity>
                    : 
                        <TouchableOpacity style={styleGlobal.listContainer} onPress={()=>{navigation.navigate('detail', {number: 1})}}>
                                <Image style={{width: 62, height: 62}} source={require('../assets/content/WayangKulit.png')}/>
                                <View style={styleGlobal.textContainer}>
                                    <Text style={styleGlobal.textHead}>Wayang Kulit</Text>
                                    <Text style={styleGlobal.textDesc} numberOfLines={3}>Wayang kulit adalah seni tradisional asli Negara Kesatuan Republik Indonesia... <Text style={{fontWeight:500, fontSize: 12}}>Baca Selengkapnya</Text></Text>
                                </View>
                        </TouchableOpacity>
                }
            </View>

            <View style={styleGlobal.bottomNavigationBar}>
                <TouchableOpacity>
                    <Image style={{width: 20, height: 20}} source={require('../assets/icon/Message.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('home')}}>
                    <Image style={{width: 20, height: 20, marginHorizontal: 88}} source={require('../assets/icon/Home.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{width: 20, height: 20}} source={require('../assets/icon/Like.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
} 
export default HomePage;