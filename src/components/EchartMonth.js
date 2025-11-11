import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BarChart } from "react-native-gifted-charts";
import { BorderlessButton } from 'react-native-gesture-handler';


const EchartMonth = () => {
      const barData = [

        {value: 500, label: 'Jan',frontColor: "#6AC26A"},
        {value: 380, label: 'Feb', frontColor: "#5c5e5bff"},
        {value: 225, label: 'Mar', frontColor: "#5c5e5bff"},
        {value: 240, label: 'Apr',frontColor: "#64ad54ff" },
        {value: 650, label: 'May', frontColor: "#5c5e5bff"},
        {value: 196, label: 'Jun',frontColor: "#64ad54ff"},
        
    ];
  return (
   <View >
            <BarChart
                barWidth={22}
                noOfSections={3}
                barBorderRadius={10}
              
              data={barData}
                hideRules
                
                yAxisThickness={0}
                xAxisThickness={0}
               
               
            />
  <View style={styles.legendContainer}>
            <View style={styles.legendRow}>
              <View style={styles.dot } />
              <Text style={styles.legendText}>X-axis--Months</Text>
            </View>
            <View style={styles.legendRow}>
              <View style={[styles.dot ]} />
              <Text style={styles.legendText}>
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
  flex:1,margin:"auto",marginTop:10
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 6,
    marginRight: 8,
    backgroundColor:"black"
  },
  legendText: {
    color: 'black',
    fontSize: 12,
  },
})


