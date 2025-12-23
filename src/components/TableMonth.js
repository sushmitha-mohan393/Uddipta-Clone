import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightValue } from '../../styles'
import { useSelector } from 'react-redux'
import { Colors } from '../../Colors'
const data = [
    {id: 1, name: 'Jan', consumption:"500"},
    {id: 2, name: 'Feb', consumption:"380"},
    {id: 3, name: 'Mar', consumption:"225"},
    {id: 4, name: 'Apr', consumption:"240"},
    {id: 5, name: 'May', consumption:"650"},
    {id: 6, name: 'Jun', consumption:"196"},
   
]
const TableMonth = () => {
      const darkMode = useSelector((state) => state?.darkMode?.darkMode);
    const item = ({ item }) => (
    
        <View style={{ flexDirection: 'row',gap:50}}>
            
           <View>
                <Text style={{ fontSize:  heightValue(55),width:50,color:darkMode?Colors.white:Colors.black}}>{item.id}</Text>
            </View>
          
                <Text style={{ fontSize:  heightValue(55),width:60,left:-15,color:darkMode?Colors.white:Colors.black}}>{item.name}</Text>
            
           
                <Text style={{ fontSize:  heightValue(55),  width:30,left:-25,color:darkMode?Colors.white:Colors.black}}>{item.consumption}</Text>
            
        </View>
    )
    return (
        <View style={{flex:1,marginVertical:30
        }}>
            <View style={{flexDirection:"row",gap:20,margin:"auto"}}> 
                <Text style={{ fontSize:  heightValue(55), fontWeight: 'bold',width:68 ,textAlign:"center",color:darkMode?Colors.white:Colors.black}}>     SL.No  </Text>
                <Text style={{ fontSize:  heightValue(55), fontWeight: 'bold',width:50 ,textAlign:"center",marginLeft:10,color:darkMode?Colors.white:Colors.black}}>   Days</Text>
                <Text style={{ fontSize:  heightValue(55), fontWeight: 'bold',textAlign:"center",marginLeft:10,color:darkMode?Colors.white:Colors.black}}>Consumption(M3)</Text>
            </View >

            <View style={[styles.seperator,{backgroundColor:darkMode?Colors.white:Colors.black}]}></View>
            <FlatList data={data} renderItem={item} keyExtractor={item => item.id.toString()} style={{marginHorizontal:50}}/>
        </View>
    )
}
export default TableMonth
 const styles=StyleSheet.create({
    seperator:{
        height:1,marginVertical:5,backgroundColor:"black",marginHorizontal:20
      }
 })