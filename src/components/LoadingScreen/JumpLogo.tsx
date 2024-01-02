import { Image } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  withSequence,
  FadeIn
} from 'react-native-reanimated';
import { JumpLogoStyles } from '../../constants/GlobalStyles';

const BOOST_SCALE = 1.0;
const BOOST_INTER_SCALE = 2.5;

/**
 * Animated app logo. Scales from large to small, then slightly larger again.
 * Resenmbles dropping the logo into the page where it springs back a little
 * after landing.
 */
export default function JumpLogo() {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale:
            // withSequence allows to chain multiple animations
            withSequence(
              // withTiming shows the big scale for a specific time, here 100 ms
              withTiming(BOOST_INTER_SCALE, { duration: 100 }),
              // withSpring renders the light bouncing animation at the end
              withSpring(BOOST_SCALE)
            )
        }
      ]
    };
  });
  return (
    <Animated.View style={animatedStyles} entering={FadeIn}>
      <Image
        source={require('../../../assets/Logo.png')}
        style={JumpLogoStyles.img}
      />
    </Animated.View>
  );
}
