import React from 'react';
import Animated, {
  useAnimatedStyle,
  withDelay,
  withRepeat,
  withSequence,
  withTiming
} from 'react-native-reanimated';
import { GlobalColor, AnimatedBlockStyles } from '../../constants/GlobalStyles';

/**
 * Animated squares to make up a loading ellipsis.
 */
export default function AnimatedBlock() {
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withDelay(
      // random offset to make it prettier
      2000 * Math.random(),
      withRepeat(
        withSequence(
          withTiming(0.4, { duration: 1000 }),
          withTiming(1.0, { duration: 1000 })
        ),
        // "-1" => the loop is infinite
        -1,
        // "true" => when the animation has ended, it is triggered backwards
        true
      )
    )
  }));

  return (
    <Animated.View
      style={[
        animatedStyle,
        AnimatedBlockStyles.block,
        GlobalColor().AnimatedBlockBKColor
      ]}
    ></Animated.View>
  );
}
