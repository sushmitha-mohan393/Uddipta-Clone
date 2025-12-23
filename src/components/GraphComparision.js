import React from 'react';
import {View, Text} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import { heightValue, widthValue } from '../../styles';
import { useSelector } from 'react-redux';
import { Colors } from '../../Colors';

export default function GraphComparision () {
    const darkMode = useSelector((state) => state?.darkMode?.darkMode);
    const barData = [
        {
          value: 40,
          label: 'Mon',
          spacing: 2,
         
          frontColor: '#64ad54ff',
        },
        {value: 20, frontColor: '#ecd735ff',spacing:15},
        {
          value: 50,
          label: 'Tue',
          spacing: 2,
        
          frontColor: '#64ad54ff',
        },
        {value: 40, frontColor: '#ecd735ff',spacing:15},
        {
          value: 40,
          label: 'Wed',
          spacing: 2,
         
          frontColor: '#64ad54ff',
        },
        {value: 55, frontColor: '#ecd735ff',spacing:15},
        {
          value: 30,
          label: 'Thu',
          spacing: 2,
         
          frontColor: '#64ad54ff',
        },
        {value: 20, frontColor: '#ecd735ff',spacing:15},
        {
          value: 50,
          label: 'Fri',
          spacing: 2,
         
          frontColor: '#64ad54ff',
        },
        {value: 60, frontColor: '#ecd735ff',spacing:15},
        {
          value: 65,
          label: 'Sat',
          spacing: 2,
          
          frontColor: '#64ad54ff',
        },
        {value: 30, frontColor: '#ecd735ff',spacing:15},
        
        {
          value: 25,
          label: 'Sun',
          spacing: 2,
          
          frontColor: '#64ad54ff',
        },
        {value: 50, frontColor: '#ecd735ff'},
      ];

      const renderTitle = () => {
          return(
            <View style={{marginTop: 20}}>
           
           <View  style={{flexDirection: 'row',justifyContent:"space-around"}}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    height: widthValue(45),
                    width:  widthValue(45),
                    borderRadius: 6,
                    backgroundColor: '#64ad54ff',
                    marginRight: 3,
                  }}
                />
                <Text
                  style={{
                  
                    fontSize:heightValue(90),bottom:1,color:darkMode?Colors.white:Colors.black
                    
                  }}>
                 Last Week Consumption:M3
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                  height: widthValue(45),
                    width:  widthValue(45),
                    borderRadius: 6,
                    backgroundColor: '#ecd735ff',
                    marginRight: 3,
                  }}
                />
                <Text
                  style={{
                   fontSize:heightValue(90),bottom:2,color:darkMode?Colors.white:Colors.black
                  
                
                  }}>
                 Current Week Consumption:M3
                </Text>
              </View>
          </View>
          </View>
          )
      }

    return (
        <View
        style={{
         paddingBottom:0,
     
          borderRadius: 10,
        }}>
       
        <BarChart
          data={barData}
          barWidth={widthValue(45)}
         
      
           yAxisTextStyle={{fontSize:heightValue(60),color:darkMode?Colors.white:Colors.black}}
           
          height={heightValue(4)}
          roundedTop
          roundedBottom
          hideRules
          xAxisThickness={0}
          yAxisThickness={0}
          spacing={10}
          noOfSections={3}
         xAxisLabelTextStyle={{width:widthValue(12),color:darkMode?Colors.white:Colors.black}}
          maxValue={75}
          initialSpacing={5}
              
        />
         {renderTitle()}
      </View>
    );
};
