import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedBlock, JumpLogo } from '../components/LoadingScreen';
import GlobalFontSize, {
  GlobalColor,
  LoadingScreenStyles
} from '../constants/GlobalStyles';

/**
 * Rendered during init function to give the user something to look at
 * other than a white screen during storage retrieval.
 */
export default function LoadingScreen() {
  return (
    <View
      style={[
        LoadingScreenStyles.container,
        GlobalColor().LoadingScreenBKColor
      ]}
    >
      <JumpLogo />
      <View style={LoadingScreenStyles.blockcontainer}>
        <Text style={[LoadingScreenStyles.text, GlobalFontSize().regularText]}>
          LAUNCHING
        </Text>
        <AnimatedBlock />
        <View style={LoadingScreenStyles.spacer} />
        <AnimatedBlock />
        <View style={LoadingScreenStyles.spacer} />
        <AnimatedBlock />
        <View style={LoadingScreenStyles.spacer} />
        <AnimatedBlock />
        <View style={LoadingScreenStyles.spacer} />
        <AnimatedBlock />
      </View>
    </View>
  );
}
