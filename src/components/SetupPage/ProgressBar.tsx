import React, { useEffect, useState, useRef, FunctionComponent } from 'react';
import { Animated, Text, View } from 'react-native';
import { ProgressBarStyles } from '../../constants/GlobalStyles';

/**
 * Progress bar for showing progression through the setup pages.
 *
 * @param Props.stepCurrent - Current setup page number.
 * @param Props.stepsTotal - Total number of pages in the setup process.
 */
const ProgressBar: FunctionComponent<{
  stepCurrent: number;
  stepsTotal: number;
}> = ({
  stepCurrent,
  stepsTotal
}: {
  stepCurrent: number;
  stepsTotal: number;
}) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 700,
      useNativeDriver: true
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * stepCurrent) / stepsTotal);
  }, [stepCurrent, width]);
  return (
    <View style={ProgressBarStyles.container}>
      <Text style={ProgressBarStyles.ProgressBarText}>
        {stepCurrent}/{stepsTotal}
      </Text>
      <View
        style={ProgressBarStyles.viewfirst}
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
      >
        <Animated.View
          style={[
            ProgressBarStyles.viewsecond,
            { transform: [{ translateX: animatedValue }] }
          ]}
        ></Animated.View>
      </View>
    </View>
  );
};
export default ProgressBar;
