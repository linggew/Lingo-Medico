import React from 'react';
import { View, Text, Image } from 'react-native';
import {
  ContinueButtonStyles,
  GlobalColor
} from '../../constants/GlobalStyles';
import GlobalFontSize from '../../constants/GlobalStyles';

/**
 * Button to progress to the next setup page.
 *
 * @param Props.ButtonText - Text to display on the button.
 */
const ContinueButton = ({ ButtonText }: { ButtonText: string }) => {
  return (
    <View
      style={[
        ContinueButtonStyles.continue,
        GlobalColor().ContinueButtonBKColor
      ]}
    >
      <Text
        style={[
          ContinueButtonStyles.continueText,
          GlobalFontSize().irregularText,
          GlobalColor().ContinueButtonTextColor
        ]}
      >
        {ButtonText}
      </Text>
      <Image
        source={require('../../../assets/arrow_right.png')}
        style={ContinueButtonStyles.image}
      />
    </View>
  );
};

export default ContinueButton;
