
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { View, Text,TextInput, TouchableOpacity,FlatList,ScrollView, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import Box from '../components/Box'
import { fontStyles, heightValue, widthValue } from '../../styles'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBox from '../components/SearchBox';




 

const BoxMeters = () => {
      const translateX = useSharedValue(0)
      const carouselRef=useRef(null);
const [currentHistory,setCurrentHistory] = useState('Box');
  const [search, setSearch] = useState("");
  const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
  const handleToggleButton = (activeButton) => {
    setCurrentHistory(activeButton);
    translateX.value = withTiming(activeButton === 'Box' ? 0 : widthValue(2.2), { duration:450});
    if (carouselRef.current) {
      const newIndex = activeButton === 'Box' ? 0 : 1;
      carouselRef.current.scrollTo({ index: newIndex, animated: true });
    }
  };
 
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  const data=[
        {id:1,BoxNo:11084,Quantity:"05",Serial:110008008},
        {id:2,BoxNo:11085,Quantity:"05",Serial:110008009},
        {id:3,BoxNo:11086,Quantity:"05",Serial:110008010},
        {id:4,BoxNo:11087,Quantity:"05",Serial:110008011},
        {id:5,BoxNo:11088,Quantity:"05",Serial:110008012},
        {id:6,BoxNo:11089,Quantity:"05",Serial:110008013},
        {id:7,BoxNo:11090,Quantity:"05",Serial:110008014},
        {id:8,BoxNo:11091,Quantity:"05",Serial:110008015},
        {id:9,BoxNo:11092,Quantity:"05",Serial:110008016},
        {id:10,BoxNo:11093,Quantity:"05",Serial:110008017},
        {id:11,BoxNo:11094,Quantity:"05",Serial:110008018},
        {id:12,BoxNo:11095,Quantity:"05",Serial:110008019},
        {id:13,BoxNo:11096,Quantity:"05",Serial:110008020},
        {id:14,BoxNo:11097,Quantity:"05",Serial:110008021},
]  
const filteredData = data.filter(item =>
    item.BoxNo.toString().includes(search)
  );
const filtered = data.filter(item =>
    item.Serial.toString().includes(search)
  );
const renderItem=({item})=>(
   
  <Box style={{paddingHorizontal:34,paddingVertical:22,gap:5,marginVertical:10}}>
        <Text style={[fontStyles.fontSize15]}><Text style={{fontWeight:"500"}}>Box No : </Text>{item.BoxNo}</Text>
        <Text  style={[fontStyles.fontSize15]}><Text style={{fontWeight:"500"}}>Quantity : </Text>{item.Quantity}</Text>
       
      </Box>
    
)
const renderMeter=({item})=>(
   
  <Box style={{gap:5,marginVertical:10,paddingVertical:22,paddingHorizontal:15,alignItems:"center"}}>
        <Text style={[fontStyles.fontSize15]}><Text style={{fontWeight:"500"}}>Meter Serial Number</Text></Text>
        <Text  style={[fontStyles.fontSize15]}>{item.Serial}</Text>
       
       
      </Box>
    
)
  return (
    <ScrollView style={{paddingBottom:20,paddingTop:20}}>
        <View style={{flexDirection:'row',width:widthValue(1.1),backgroundColor:"white",borderRadius:15,height:heightValue(18), marginHorizontal:"auto", shadowOffset: { width: 0, height: 4 }, marginTop:20,// Shadow's offset (x, y)
    shadowOpacity: 0.2, // Shadow's opacity
    shadowRadius: 4, // Shadow's blur radius
    elevation: 4,
    backgroundColor:"#EFF1FF"}}>
     <AnimatedLinearGradient
  colors={[ '#7B80B1','#585d9bff']} // Define gradient colors
  start={{ x: 0, y: 1 }} // Gradient direction
  end={{ x: 0, y: 0 }}
  style={[
    {
      position: 'absolute',
      width: widthValue(2.2),
      height: '100%',
      borderRadius: 15,
    },
    animatedStyle, // Apply animations
  ]}
/>
  <TouchableOpacity onPress={()=>handleToggleButton('Box')} style={{width:widthValue(2.2),justifyContent:'center',alignItems:'center',borderRadius:15,flexDirection:"row",gap:10}}>
     <Feather name="box" color={currentHistory === 'Box' ? 'white' : 'black'} size={24} />
  <Text style={{textAlign:'center',color:currentHistory === 'Box' ? 'white' : 'black',fontSize:16,fontWeight:'500'}}>Box Meters</Text>
  </TouchableOpacity>
  <TouchableOpacity  onPress={()=>handleToggleButton('Individual')} style={{width:widthValue(2.2),justifyContent:'center',alignItems:'center',borderRadius:15,flexDirection:"row",gap:10}}>
   <MaterialCommunityIcons name="text-box-outline" color={currentHistory === 'Individual' ? 'white' : 'black'} size={24} />
  <Text style={{textAlign:'center',color:currentHistory === 'Individual' ? 'white' : 'black',fontSize:16,fontWeight:'500'}}>Individual Meters</Text>
  </TouchableOpacity>
    </View>
            <View style={{paddingHorizontal:20}}>
            <SearchBox search={search} setSearch={setSearch} placeholder={"Search Box No"}/></View>
        {currentHistory==="Box"?
<FlatList data={filteredData} renderItem={renderItem} keyExtractor={item => item.id.toString()}  numColumns={2} columnWrapperStyle={{ justifyContent:"space-between"}}  contentContainerStyle={{padding:20,paddingTop:0}}/>:
<FlatList data={filtered} renderItem={renderMeter} keyExtractor={item => item.id.toString()}  numColumns={2} columnWrapperStyle={{ justifyContent:"space-between"}}  contentContainerStyle={{padding:20,paddingTop:0}}/>
}
    </ScrollView>
  )
}
export default BoxMeters


