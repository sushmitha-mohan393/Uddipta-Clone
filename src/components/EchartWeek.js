import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BarChart } from "react-native-gifted-charts";
import { BorderlessButton } from 'react-native-gesture-handler';


const EchartWeek= () => {
      const barData = [
        
        {value: 250, label: 'Mon',frontColor: "#64ad54ff"},
        {value: 500, label: 'Tue', frontColor: "#5c5e5bff"},
        {value: 745, label: 'Wed', frontColor: "#64ad54ff"},
        {value: 320, label: 'Thu',frontColor: "#5c5e5bff"},
        {value: 600, label: 'Fri', frontColor: "#5c5e5bff"},
        {value: 256, label: 'Sat',frontColor: "#64ad54ff"},
        {value: 300, label: 'Sun',frontColor: "#5c5e5bff"},
    
        
    ];
  return (
   <View >
            <BarChart
                barWidth={22}
                noOfSections={3}
                barBorderRadius={10}
              
              data={barData}
                hideRules
                height={200}
                yAxisThickness={0}
                xAxisThickness={0}
               
               
            />
  <View style={styles.legendContainer}>
            <View style={styles.legendRow}>
              <View style={styles.dot } />
              <Text style={styles.legendText}>X-axis--Days</Text>
            </View>
            <View style={styles.legendRow}>
              <View style={styles.dot} />
              <Text style={styles.legendText}>Y-axis--
               Consumption(M3)
              </Text>
            </View>
          </View>
    </View>
   

  )
}

export default EchartWeek
const styles = StyleSheet.create({

   legendContainer: {
  margin:"auto",marginTop:10,paddingBottom:50
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