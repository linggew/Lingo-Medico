import React, { memo, useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { RadioButtons } from '../../utils/Types';
import {
  RadioComponentStyles,
  GlobalColor,
  BurgerIconColor
} from '../../constants/GlobalStyles';
import GlobalFontSize from '../../constants/GlobalStyles';

/**
 * Modular component composed of a set of radio buttons, their descriptions,
 * and translations.
 *
 * @param Props.sectionID - The id of the section that this radio button
 * component belongs to.
 * @param Props.data - RadioButtons object from profile object holding the
 * current values / state of the radio buttons and accompanying text.
 * @param Props.handleChange - Function to update the Profile object.
 */
const RadioComponent = ({
  sectionID,
  data,
  handleChange
}: {
  sectionID: string;
  data: RadioButtons;
  handleChange(
    sectionID: string,
    dataID: string,
    value: boolean | string
  ): void;
}) => {
  const [radioSelection, setRadioSelection] = useState(data.value);

  const handler = (selection: string) => {
    setRadioSelection(selection);
    handleChange(sectionID, data.key, selection);
  };

  if (data.options.length === 2) {
    return (
      <View style={RadioComponentStyles.radioContainer}>
        <View style={RadioComponentStyles.optionsContainer}>
          <RadioButton
            value={data.options[0]}
            status={
              radioSelection === data.options[0] ? 'checked' : 'unchecked'
            }
            uncheckedColor={BurgerIconColor()}
            onPress={() => {
              // data.value = data.options[0]
              handler(data.options[0]);
            }}
            disabled={!data.isEditable}
          />
          <Text
            style={[
              RadioComponentStyles.radioOptions,
              GlobalFontSize().regularText
            ]}
          >
            {data.options[0]}
          </Text>
          <Text
            style={[
              RadioComponentStyles.radioTranslations,
              GlobalFontSize().regularText,
              GlobalColor().RadioTranslationColor
            ]}
          >
            {data.translations[0]}
          </Text>
        </View>
        <View style={RadioComponentStyles.optionsContainer}>
          <RadioButton
            value={data.options[1]}
            status={
              radioSelection === data.options[1] ? 'checked' : 'unchecked'
            }
            uncheckedColor={BurgerIconColor()}
            onPress={() => {
              // data.value = data.options[1]
              handler(data.options[1]);
            }}
            disabled={!data.isEditable}
          />
          <Text
            style={[
              RadioComponentStyles.radioOptions,
              GlobalFontSize().regularText
            ]}
          >
            {data.options[1]}
          </Text>
          <Text
            style={[
              RadioComponentStyles.radioTranslations,
              GlobalFontSize().regularText,
              GlobalColor().RadioTranslationColor
            ]}
          >
            {data.translations[1]}
          </Text>
        </View>
      </View>
    );
  } else if (data.options.length === 3) {
    return (
      <View style={RadioComponentStyles.radioContainer}>
        <View style={RadioComponentStyles.optionsContainer}>
          <RadioButton
            value={data.options[0]}
            status={
              radioSelection === data.options[0] ? 'checked' : 'unchecked'
            }
            uncheckedColor={BurgerIconColor()}
            onPress={() => {
              // data.value = data.options[0]
              handler(data.options[0]);
            }}
            disabled={!data.isEditable}
          />
          <Text
            style={[
              RadioComponentStyles.radioOptions,
              GlobalFontSize().regularText
            ]}
          >
            {data.options[0]}
          </Text>
          <Text
            style={[
              RadioComponentStyles.radioTranslations,
              GlobalFontSize().regularText,
              GlobalColor().RadioTranslationColor
            ]}
          >
            {data.translations[0]}
          </Text>
        </View>
        <View style={RadioComponentStyles.optionsContainer}>
          <RadioButton
            value={data.options[1]}
            status={
              radioSelection === data.options[1] ? 'checked' : 'unchecked'
            }
            uncheckedColor={BurgerIconColor()}
            onPress={() => {
              // data.value = data.options[1]
              handler(data.options[1]);
            }}
            disabled={!data.isEditable}
          />
          <Text
            style={[
              RadioComponentStyles.radioOptions,
              GlobalFontSize().regularText
            ]}
          >
            {data.options[1]}
          </Text>
          <Text
            style={[
              RadioComponentStyles.radioTranslations,
              GlobalFontSize().regularText,
              GlobalColor().RadioTranslationColor
            ]}
          >
            {data.translations[1]}
          </Text>
        </View>
        <View style={RadioComponentStyles.optionsContainer}>
          <RadioButton
            value={data.options[2]}
            status={
              radioSelection === data.options[2] ? 'checked' : 'unchecked'
            }
            uncheckedColor={BurgerIconColor()}
            onPress={() => {
              // data.value = data.options[1]
              handler(data.options[2]);
            }}
            disabled={!data.isEditable}
          />
          <Text
            style={[
              RadioComponentStyles.radioOptions,
              GlobalFontSize().regularText
            ]}
          >
            {data.options[2]}
          </Text>
          <Text
            style={[
              RadioComponentStyles.radioTranslations,
              GlobalFontSize().regularText,
              GlobalColor().RadioTranslationColor
            ]}
          >
            {data.translations[2]}
          </Text>
        </View>
      </View>
    );
  } else if (data.options.length === 4) {
    return (
      <View style={RadioComponentStyles.radioContainer}>
        <View style={RadioComponentStyles.optionsContainer}>
          <RadioButton
            value={data.options[0]}
            status={
              radioSelection === data.options[0] ? 'checked' : 'unchecked'
            }
            uncheckedColor={BurgerIconColor()}
            onPress={() => {
              // data.value = data.options[0]
              handler(data.options[0]);
            }}
            disabled={!data.isEditable}
          />
          <Text
            style={[
              RadioComponentStyles.radioOptions,
              GlobalFontSize().regularText
            ]}
          >
            {data.options[0]}
          </Text>
          <Text
            style={[
              RadioComponentStyles.radioTranslations,
              GlobalFontSize().regularText,
              GlobalColor().RadioTranslationColor
            ]}
          >
            {data.translations[0]}
          </Text>
        </View>
        <View style={RadioComponentStyles.optionsContainer}>
          <RadioButton
            value={data.options[1]}
            status={
              radioSelection === data.options[1] ? 'checked' : 'unchecked'
            }
            uncheckedColor={BurgerIconColor()}
            onPress={() => {
              // data.value = data.options[1]
              handler(data.options[1]);
            }}
            disabled={!data.isEditable}
          />
          <Text
            style={[
              RadioComponentStyles.radioOptions,
              GlobalFontSize().regularText
            ]}
          >
            {data.options[1]}
          </Text>
          <Text
            style={[
              RadioComponentStyles.radioTranslations,
              GlobalFontSize().regularText,
              GlobalColor().RadioTranslationColor
            ]}
          >
            {data.translations[1]}
          </Text>
        </View>
        <View style={RadioComponentStyles.optionsContainer}>
          <RadioButton
            value={data.options[2]}
            status={
              radioSelection === data.options[2] ? 'checked' : 'unchecked'
            }
            uncheckedColor={BurgerIconColor()}
            onPress={() => {
              // data.value = data.options[2]
              handler(data.options[2]);
            }}
            disabled={!data.isEditable}
          />
          <Text
            style={[
              RadioComponentStyles.radioOptions,
              GlobalFontSize().regularText
            ]}
          >
            {data.options[2]}
          </Text>
          <Text
            style={[
              RadioComponentStyles.radioTranslations,
              GlobalFontSize().regularText,
              GlobalColor().RadioTranslationColor
            ]}
          >
            {data.translations[2]}
          </Text>
        </View>
        <View style={RadioComponentStyles.optionsContainer}>
          <RadioButton
            value={data.options[3]}
            status={
              radioSelection === data.options[3] ? 'checked' : 'unchecked'
            }
            uncheckedColor={BurgerIconColor()}
            onPress={() => {
              // data.value = data.options[3]
              handler(data.options[3]);
            }}
            disabled={!data.isEditable}
          />
          <Text
            style={[
              RadioComponentStyles.radioOptions,
              GlobalFontSize().regularText
            ]}
          >
            {data.options[3]}
          </Text>
          <Text
            style={[
              RadioComponentStyles.radioTranslations,
              GlobalFontSize().regularText,
              GlobalColor().RadioTranslationColor
            ]}
          >
            {data.translations[3]}
          </Text>
        </View>
      </View>
    );
  } else {
    return <Text>Error: unsupported number of radio buttons</Text>;
  }
};

export default memo(RadioComponent);
