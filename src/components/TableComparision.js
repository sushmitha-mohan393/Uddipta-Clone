import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const data = [
    {id: 1, name: 'Mon', last:"40",current:"40"},
    {id: 2, name: 'Tue', last:"40",current:"40"},
    {id: 3, name: 'Wed',last:"40",current:"40"},
    {id: 4, name: 'Thu', last:"40",current:"40"},
    {id: 5, name: 'Fri',last:"40",current:"40"},
    {id: 6, name: 'Sat',last:"40",current:"40"},
    {id: 7, name: 'Sun', last:"40",current:"40"},
]
const TableComparision = () => {
    const item = ({ item }) => (
    
        <View style={{ flexDirection: 'row',gap:20,paddingLeft:10}}>
            
           
                <Text style={{ fontSize: 16,width:100}}>{item.name}</Text>
            
          
                <Text style={{ fontSize: 16,width:120}}>{item.last}</Text>
            
           
                <Text style={{ fontSize: 16,width:100}}>{item.current}</Text>
            
        </View>
    )
    return (
        <View style={{flex:1,marginTop:30
        }}>
            <View style={{flexDirection:"row",gap:20,justifyContent:"space-between",paddingLeft:10}}> 
                <Text style={{ fontSize: 16, fontWeight: 'bold',textAlign:"center",}}>Day </Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' ,textAlign:"center",}}>    Last Week</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold',textAlign:"center",}}>Current Week</Text>
            </View >

            <View style={styles.seperator}></View><View style={{justifyContent:"space-between"}}>
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