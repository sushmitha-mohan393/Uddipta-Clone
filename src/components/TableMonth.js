import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const data = [
    {id: 1, name: 'Jan', consumption:"500"},
    {id: 2, name: 'Feb', consumption:"380"},
    {id: 3, name: 'Mar', consumption:"225"},
    {id: 4, name: 'Apr', consumption:"240"},
    {id: 5, name: 'May', consumption:"650"},
    {id: 6, name: 'Jun', consumption:"196"},
   
]
const TableMonth = () => {
    const item = ({ item }) => (
    
        <View style={{ flexDirection: 'row',gap:50}}>
            
           <View>
                <Text style={{ fontSize: 16,width:50}}>{item.id}</Text>
            </View>
          
                <Text style={{ fontSize: 16,width:60,left:-15}}>{item.name}</Text>
            
           
                <Text style={{ fontSize: 16,  width:30,left:-25}}>{item.consumption}</Text>
            
        </View>
    )
    return (
        <View style={{flex:1,marginTop:30
        }}>
            <View style={{flexDirection:"row",gap:20,margin:"auto"}}> 
                <Text style={{ fontSize: 16, fontWeight: 'bold',width:68 ,textAlign:"center",}}>      SL.No  </Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold',width:50 ,textAlign:"center",marginLeft:10}}>   Days</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold',textAlign:"center",marginLeft:10}}>Consumption(M3)</Text>
            </View >

            <View style={styles.seperator}></View>
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