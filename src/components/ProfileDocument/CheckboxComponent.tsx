import React, { memo, useState } from 'react';
import { Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { CheckBox } from '../../utils/Types';
import {
  checkboxComponentStyles,
  GlobalColor
} from '../../constants/GlobalStyles';
import GlobalFontSize, { BurgerIconColor } from '../../constants/GlobalStyles';

/**
 * Modular component composed of a checkbox, its description, and translation.
 *
 * @param Props.sectionID - The id of the section that this checkbox belongs
 * to.
 * @param Props.data - Checkbox object from profile object holding the current
 * values / state of the checkbox and accompanying text.
 * @param Props.handleChange - Function to update the Profile object.
 */
const CheckboxComponent = ({
  sectionID,
  data,
  handleChange
}: {
  sectionID: string;
  data: CheckBox;
  handleChange(
    sectionID: string,
    dataID: string,
    value: boolean | string
  ): void;
}) => {
  const [checked, setChecked] = useState(data.value);

  const handler = (checked: boolean) => {
    setChecked(checked);
    handleChange(sectionID, data.key, checked);
  };

  return (
    <View
      style={[
        checkboxComponentStyles.checkboxContainer,
        data.indented ? checkboxComponentStyles.indented : null
      ]}
    >
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        uncheckedColor={BurgerIconColor()}
        onPress={() => {
          // data.value = !data.value
          handler(!checked);
        }}
        disabled={!data.isEditable}
      />
      <View style={checkboxComponentStyles.checkboxTextView}>
        <Text
          style={[
            checkboxComponentStyles.checkboxDescription,
            GlobalFontSize().regularText
          ]}
        >
          {data.description}
        </Text>
        <Text
          style={[
            checkboxComponentStyles.checkboxTranslation,
            GlobalFontSize().regularText,
            GlobalColor().CheckBoxTranslationColor
          ]}
        >
          {data.translation}
        </Text>
      </View>
    </View>
  );
};

export default memo(CheckboxComponent);
