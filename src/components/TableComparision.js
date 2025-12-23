import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightValue, widthValue } from '../../styles'
import { useSelector } from 'react-redux'
import { Colors } from '../../Colors'
const data = [
    {id: 1, name: 'Mon', last:"40",current:"20"},
    {id: 2, name: 'Tue', last:"50",current:"40"},
    {id: 3, name: 'Wed',last:"40",current:"55"},
    {id: 4, name: 'Thu', last:"30",current:"20"},
    {id: 5, name: 'Fri',last:"50",current:"60"},
    {id: 6, name: 'Sat',last:"65",current:"30"},
    {id: 7, name: 'Sun', last:"25",current:"50"},
]
const TableComparision = () => {
    const darkMode = useSelector((state) => state?.darkMode?.darkMode);
    const item = ({ item }) => (
    
        <View style={{ flexDirection: 'row',gap:20,paddingLeft:10,textAlign:"center"}}>
            
           
                <Text style={{ fontSize: heightValue(55),width:widthValue(4),color:darkMode?Colors.white:Colors.black}}>{item.name}</Text>
            
          
                <Text style={{ fontSize: heightValue(55),width:widthValue(4),color:darkMode?Colors.white:Colors.black}}>{item.last}</Text>
            
           
                <Text style={{ fontSize: heightValue(55),width:widthValue(4),color:darkMode?Colors.white:Colors.black}}>{item.current}</Text>
            
        </View>
    )
    return (
        <View style={{flex:1,marginTop:30
        }}>
            <View style={{flexDirection:"row",gap:20,justifyContent:"space-between",paddingLeft:10}}> 
                <Text style={{ fontSize:heightValue(55), fontWeight: 'bold',textAlign:"center",color:darkMode?Colors.white:Colors.black}}>Day </Text>
                <Text style={{ fontSize: heightValue(55), fontWeight: 'bold' ,textAlign:"center",color:darkMode?Colors.white:Colors.black}}>    Last Week</Text>
                <Text style={{ fontSize:heightValue(55), fontWeight: 'bold',textAlign:"center",color:darkMode?Colors.white:Colors.black}}>Current Week</Text>
            </View >

            <View style={[styles.seperator,{backgroundColor:darkMode?Colors.white:Colors.black}]}></View><View style={{justifyContent:"space-around"}}>
            <FlatList data={data} renderItem={item} keyExtractor={item => item.id.toString()} />
              </View>
        </View>
    )
}
export default TableComparision
 const styles=StyleSheet.create({
    seperator:{
        height:1,marginVertical:5,backgroundColor:"black",
      }
 })