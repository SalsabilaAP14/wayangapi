import React,{useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

import { styleGlobal } from '../styles-global';
const DetailMateri = ({route, navigation}) => {
    const { number } = route.params;
    const url = `https://9fbe-112-78-156-238.ap.ngrok.io/api/materi/materi`
    const [page, setPage] = useState(1)
    const [materi, setMateri] = useState([])
    useEffect(() => {
        getMateri();
    }, []);

    const getMateri = () => {
        axios.get(url)
        .then((res)=>{
            setMateri(res.data);
            console.log(materi)
        })
        .catch(
            (error)=>console.log(error)
        )
    }
    const value = materi.data?.find((v) => v.id === Number(number))
    console.log(value)

    return(
        <View style={styleGlobal.mainMateri}>
            <View style={styleGlobal.headMateri}>
                <TouchableOpacity onPress={() => {navigation.navigate('home')}}>
                    <Image style={{width: 10, height:18}} source={require('../assets/icon/Back.png')}/>
                </TouchableOpacity>
                <Text style={{alignSelf: 'center', fontSize:20, fontWeight: 500}}>{value?.subject}</Text>
                <View></View>
            </View>
            <View style={page == 3 ? {height: '79%', width: '100%', backgroundColor: '#A6A69C', borderRadius: 40, flexDirection: 'column', justifyContent: 'space-between',} : styleGlobal.contentMateri }>
                {
                    page == 1 ?
                        <ScrollView>
                            <Text style={styleGlobal.textMateri}>{value?.isi}</Text>
                            <Text style={styleGlobal.textMateri2}>{value?.isi2}</Text>
                        </ScrollView>
                    : page == 2 ?
                        <ScrollView>
                            <Text style={styleGlobal.textMateri}>{value?.isi3}</Text>
                            <Text style={styleGlobal.textMateri2}>{value?.isi4}</Text>
                        </ScrollView>
                    : page >= 3 ?
                        <View style={{alignItems: 'center', flexDirection: 'column'}}>
                            <Text style={{marginTop:16, marginBottom: 78, fontWeight: 500, fontSize: 20, color: 'white'}}>MATERI TELAH SELESAI</Text>
                            <Image style={{width:255, height: 424}} source={require('../assets/gunung.png')}/>
                        </View>
                    :
                    <ScrollView>
                        <Text style={styleGlobal.textMateri}>Wayang Kulit adalah seni tradisional asli Indonesia yang terutama berkembang di Jawa Tengah dan Jawa Timur.Kata wayang sendiri diketahui berasal dari ‘Ma Hyang’ yang berarti menuju kepada roh spiritual, para dewa, atau sang kuasa. Kendati begitu, ada pula yang mengatakan bahwa wayang berasal dari teknik pertunjukan yang mengandalkan bayangan pada layar.</Text>
                        <Text style={styleGlobal.textMateri2}>Wayang kulit adalah warisan budaya yang bernilai tinggi, karena merupakan sebuah seni kriya, dan penggabungan dari sastra, seni musik, sampai seni rupa. Bukan hanya terkenal di Indonesia, wayang kulit sudah dikenal di mata dunia yang dibawa oleh pedalang terkenal Ki Purbo Asmoro. Berkatnya, kini wayang kulit mulai populer di beberapa negara Asia hingga Eropa.Keberadaan wayang kulit diakui UNESCO sebagai karya kebudayaan yang mengagumkan di bidang cerita narasi dan warisan budaya yang indah dan berharga.</Text>
                    </ScrollView>
                }
                <View style={styleGlobal.bottomBarMateri}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                        <TouchableOpacity onPress={()=>{page == 1 ? setPage(page-0) : setPage(page-1); console.log(page)}} style={ page == 3 ? {paddingVertical: 16, paddingHorizontal: 26, backgroundColor: '#A6A69C', borderRadius: 8, width: 184, alignItems: 'center'} : {paddingVertical: 16, paddingHorizontal: 26, backgroundColor: '#A6A69C', borderRadius: 8, width: 94, alignItems: 'center'}}>
                            <Text style={{color: 'white', fontWeight: 500}}>{page == 3 ? 'Preview Materi' : 'Back' }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{page == 3 ? setPage(page+0) : setPage(page+1); console.log(page)}} style={ page == 3 ? {paddingVertical: 16, paddingHorizontal: 17, backgroundColor: '#6D6969', borderRadius: 8, width:94, alignItems: 'center'} : {paddingVertical: 16, paddingHorizontal: 17, backgroundColor: '#6D6969', borderRadius: 8, width:184, alignItems: 'center'}}>
                            <Text style={{color: 'white', fontWeight: 500}}>{page == 3 ? 'Quiz' : 'Materi Selanjutnya' }</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        </View>
    );
}
export default DetailMateri;