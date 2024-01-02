import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalFontSize, {
  GlobalColor,
  CurrentLanguageBoxStyles
} from '../../constants/GlobalStyles';

/**
 * Shows the current base language and translation language. Names for the two
 * languages are shown in both languages. Base language on the left, followed
 * by an arrow pointing to the translation language on the right.
 *
 * @param LanguageStrings.LanguageOne - The base language name in its own language.
 * @param LanguageStrings.TranslationOne - The base language name in the translation language.
 * @param LanguageStrings.LanguageTwo - The translation language name in the base language.
 * @param LanguageStrings.TranslationTwo - The translation language name in its own language.
 */
export default function LanguageBox({
  LanguageOne,
  TranslationOne,
  LanguageTwo,
  TranslationTwo
}: {
  LanguageOne: string;
  TranslationOne: string;
  LanguageTwo: string;
  TranslationTwo: string;
}) {
  return (
    <View
      style={[
        CurrentLanguageBoxStyles.container,
        GlobalColor().CurrentLanguageContainerBKColor
      ]}
    >
      <View style={CurrentLanguageBoxStyles.languageSet}>
        <Text
          style={[
            CurrentLanguageBoxStyles.text,
            GlobalFontSize().irregularHeaderText
          ]}
        >
          {LanguageOne}
          {'\n'}
          {LanguageTwo}
        </Text>
      </View>
      <Icon style={CurrentLanguageBoxStyles.arrow} name="arrow-right" />
      <View style={CurrentLanguageBoxStyles.languageSet}>
        <Text
          style={[
            CurrentLanguageBoxStyles.text,
            GlobalFontSize().irregularHeaderText,
            GlobalColor().ExpandHeaderTranslationColor
          ]}
        >
          {TranslationOne}
          {'\n'}
          {TranslationTwo}
        </Text>
      </View>
    </View>
  );
}
