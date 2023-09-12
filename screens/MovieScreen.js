import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon} from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation, useRoute } from '@react-navigation/native';
import {styles, theme} from '../theme'
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/cast';
import MovieList from '../components/movieList';

var {width, height} = Dimensions.get('window')
const ios = Platform.OS === 'ios';
const topMargin = ios? '': 'mt-3';

export default function MovieScreen() {
    const {params: item} = useRoute();
    const [isFavourite, toggleFavourite] = useState(false);
    const navigation = useNavigation();
    const [cast, setCast] = useState([1,2,3,4,5]);
    const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5]);
    let movieName = 'Ant-Man and the Wasp: Quantumania';
    useEffect(()=>{
        // api
    },[item])
  return (
    <ScrollView 
        contentContainerStyle={{paddingBottom: 20}} 
        className="bg-neutral-900 flex-1" 
    >
        {/*back button ve poster*/}
        <View className="w-full">
            <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4"+topMargin}>
            <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={()=> navigation.goBack()}>
                <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)}>
                <HeartIcon size="35" color={isFavourite? theme.background: 'white'} />
            </TouchableOpacity>
        </SafeAreaView>
            <View>
                <Image
                    source={require('../assets/images/moviePoster2.png')}
                    style={{width, height: height*0.55}}
                />
                <LinearGradient
                    colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                    style={{width, height: height*0.40}}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute bottom-0"
                    />
            </View>
        </View>

        <View style={{marginTop:-(height*0.09)}} className="space-y-3">
            <Text className="text-white text-center text-3xl font-bold tracking-wider">
                {
                    movieName
                }
            </Text>
            <Text className="text-neutral-400 font-semibold text-base text-center">
                Released - 2020 - 170 min
            </Text>

            <View className="flex-row justify-center mx-4 space-x-2">
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Action -
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Thrill -
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Comedy
                </Text>
            </View>

            <Text className="text-neutral-400 mx-4 tracking-wide">
                Scott Lang ve Hope Van Dyne, Ant-Man ve Wasp olarak maceralarına devam etmek üzere geri dönüyor. Kızları Cassie’nin Kuantum Alemi’ne sinyal göndermesi sonucu kendilerini bir anda büyüleyici, tehlikeli ve sıra dışı bir evrende bulan aileye, Hope’un babası Hank Pym ve annesi Janet Van Dyne da eşlik ediyor. Aile, Kuantum Alemi’ni keşfederken olağanüstü yeni yaratıklarla karşılaşıyorlar.
            </Text>
        </View>

        <Cast navigation={navigation} cast={cast} />

        <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />
</ScrollView>
  )
}