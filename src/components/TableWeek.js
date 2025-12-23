import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { heightValue } from '../../styles'
import { useSelector } from 'react-redux'
import { Colors } from '../../Colors'
import axios from 'axios'
const data = [
    {id: 1, name: 'Mon', consumption:"250"},
    {id: 2, name: 'Tue', consumption:"500"},
    {id: 3, name: 'Wed', consumption:"745"},
    {id: 4, name: 'Thu', consumption:"320"},
    {id: 5, name: 'Fri', consumption:"600"},
    {id: 6, name: 'Sat', consumption:"256"},
    {id: 7, name: 'Sun', consumption:"300"},
]
const TableWeek = () => {
      const darkMode = useSelector((state) => state?.darkMode?.darkMode);
        const [tableData, setTableData] = useState(null);
         const loginResponse = useSelector((state) => state?.auth?.loginResponse);
          useEffect(() => {
            apigraph()},[]);
             const apigraph = async () => {
    try {
      const apiData = await axios.get(
        `https://cportalapi-agcl-tnd.esyasoft.com/api/Dashboard/mobile/ConsumptionLogHistorybyAccountId?ConsumerNo=${loginResponse?.consumerId}`,
        { 
       
          headers: {
            Authorization: `Bearer ${loginResponse?.jwtToken}`,
          },
        }
      );
      
const graph = apiData?.data?.lastSevenHoursHistory?.graphData;
if (graph) {
      const formatted = graph.map((item, index) => ({
        id: index + 1,
        name: item.x,
        consumption: item.y,
      }));
      setTableData(formatted);
    }
   
      
     

    } catch (error) {
      console.log("Balance API error:", error);
    }
  };
    

    const item = ({ item }) => (
    
        <View style={{ flexDirection: 'row',gap:50}}>
            
           
                <Text style={{ fontSize: heightValue(55),width:50,color:darkMode?Colors.white:Colors.black}}>{item.id}</Text>
            
          
                <Text style={{ fontSize:  heightValue(55),width:60,left:-15,color:darkMode?Colors.white:Colors.black}}>{item.name}</Text>
            
           
                <Text style={{ fontSize:  heightValue(55),  width:50,left:-25,color:darkMode?Colors.white:Colors.black}}>{item.consumption}</Text>
            
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
export default TableWeek
 const styles=StyleSheet.create({
    seperator:{
        height:1,marginVertical:5,backgroundColor:"black",marginHorizontal:20
      }
 })