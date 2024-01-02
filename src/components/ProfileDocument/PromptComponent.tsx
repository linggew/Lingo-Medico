import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { Prompt } from '../../utils/Types';
import {
  PromptComponentStyles,
  GlobalColor
} from '../../constants/GlobalStyles';
import GlobalFontSize from '../../constants/GlobalStyles';

/**
 * Component for the prompts preceeding input components in the profile
 * document.
 *
 * @param Props.data - Prompt object from profile object holding the current
 * values / state of the prompt text.
 */
const PromptComponent = ({ data }: { data: Prompt }) => {
  return (
    <View
      style={[
        PromptComponentStyles.promptContainer,
        data.indented ? PromptComponentStyles.indented : null
      ]}
    >
      <Text
        style={[PromptComponentStyles.promptText, GlobalFontSize().regularText]}
      >
        {data.value}
      </Text>
      <Text
        style={[
          PromptComponentStyles.promptTranslation,
          GlobalFontSize().regularText,
          GlobalColor().PromptTranslationColor
        ]}
      >
        {data.translation}
      </Text>
    </View>
  );
};

export default memo(PromptComponent);
