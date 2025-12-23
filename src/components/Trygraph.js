import { BarChart } from "react-native-gifted-charts";
import { View, Text } from 'react-native';
import { heightValue, widthValue } from "../../styles";
import { useSelector } from "react-redux";
import { Colors } from "../../Colors";

const Trygraph = () => {
  const darkMode = useSelector((state) => state?.darkMode?.darkMode);
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
      barWidth={widthValue(20)}
      
      barBorderTopLeftRadius={50}
     height={heightValue(20)}
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
