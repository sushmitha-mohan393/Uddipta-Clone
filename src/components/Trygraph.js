import { BarChart } from "react-native-gifted-charts";
import { View, Text } from 'react-native';

const Trygraph = () => {
  const barData = [
    {
      value: 50,
    },
    { value: 80, frontColor:"gray" },
    { value: 90,   },
    { value: 70, frontColor:"gray" },
    {
      value: 50,
    },
    { value: 80, frontColor:"gray" },
    { value: 90,   },
    { value: 70, frontColor:"gray" },
  ];

  return (
    <BarChart
      data={barData}
      barWidth={18}
      barBorderTopLeftRadius={50}
     height={50}
     spacing={5}
      barBorderTopRightRadius={50}
      hideYAxisText={true} 
            frontColor={'#64ad54ff'}
           yAxisLabelTexts={false}
            hideRules
            yAxisThickness={0}
            xAxisThickness={0}
     
          
    />
  );
};

export default Trygraph;
