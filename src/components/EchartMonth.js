import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BarChart } from "react-native-gifted-charts";
import { BorderlessButton } from 'react-native-gesture-handler';
import { heightValue, widthValue } from '../../styles';
import { useSelector } from 'react-redux';
import { Colors } from '../../Colors';


const EchartMonth = () => {
      const darkMode = useSelector((state) => state?.darkMode?.darkMode);
      const barData = [

        {value: 500, label: 'Jan',frontColor: "#6AC26A"},
        {value: 380, label: 'Feb', frontColor: "#5c5e5bff"},
        {value: 225, label: 'Mar', frontColor: "#5c5e5bff"},
        {value: 240, label: 'Apr',frontColor: "#64ad54ff" },
        {value: 650, label: 'May', frontColor: "#5c5e5bff"},
        {value: 196, label: 'Jun',frontColor: "#64ad54ff"},
        
    ];
  return (
   <View style={{width:widthValue(1.2)}}>
            <BarChart
               barWidth={widthValue(22)}
                noOfSections={3}
                barBorderRadius={10}
               initialSpacing={widthValue(20)}
                           spacing={widthValue(18)}
              data={barData}
                hideRules
                height={heightValue(4)}
                yAxisThickness={0}
                xAxisThickness={0}
                   xAxisLabelTextStyle={{fontSize:heightValue(60),color:darkMode?Colors.white:Colors.black}}
                               yAxisTextStyle={{fontSize:heightValue(60),color:darkMode?Colors.white:Colors.black}}
               
               
            />
  <View style={styles.legendContainer}>
            <View style={styles.legendRow}>
              <View style={[styles.dot,{backgroundColor:darkMode?Colors.white:Colors.black}] } />
              <Text style={[styles.legendText,{color:darkMode?Colors.white:Colors.black}]}>X-axis--Months</Text>
            </View>
            <View style={styles.legendRow}>
              <View style={[styles.dot,{backgroundColor:darkMode?Colors.white:Colors.black} ]} />
              <Text style={[styles.legendText,{color:darkMode?Colors.white:Colors.black}]}>
               Y-axis--
               Consumption(M3)
              </Text>
            </View>
          </View>
    </View>
   

  )
}

export default EchartMonth
const styles = StyleSheet.create({

   legendContainer: {
  flex:1,margin:"auto",marginTop:10,paddingBottom:10
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  dot: {
    width: widthValue(60),
    height: widthValue(60),
    borderRadius: 6,
    marginRight: 8,
    backgroundColor:"black"
  },
  legendText: {
    color: 'black',
    fontSize:  heightValue(70),
  },
})


