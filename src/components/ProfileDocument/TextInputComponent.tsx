import React, { memo, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { TextEntry } from '../../utils/Types';
import GlobalFontSize, {
  textInputComponentStyles,
  GlobalColor
} from '../../constants/GlobalStyles';

/**
 * Modular component composed of a text input, its description, and
 * translation.
 *
 * @param Props.sectionID - The id of the section that this text input belongs
 * to.
 * @param Props.data - TextEntry object from profile object holding the current
 * values / state of the text input and accompanying text.
 * @param Props.handleChange - Function to update the Profile object.
 */
const TextInputComponent = ({
  sectionID,
  data,
  handleChange
}: {
  sectionID: string;
  data: TextEntry;
  handleChange(
    sectionID: string,
    dataID: string,
    value: boolean | string
  ): void;
}) => {
  const [text, setText] = useState(data.value);

  const handler = (text: string) => {
    setText(text);
    handleChange(sectionID, data.key, text);
  };

  return (
    <View
      style={[
        textInputComponentStyles.textInputContainer,
        data.indented ? textInputComponentStyles.indented : null
      ]}
    >
      <Text
        style={[
          textInputComponentStyles.textInputDescription,
          GlobalFontSize().regularText
        ]}
      >
        {data.description}
      </Text>
      <Text
        style={[
          textInputComponentStyles.textInputTranslation,
          GlobalColor().TextInputTranslationColor,
          GlobalFontSize().regularText
        ]}
      >
        {data.translation}
      </Text>
      <TextInput
        style={[
          textInputComponentStyles.textInput,
          GlobalColor().TextInputColor
        ]}
        value={text}
        onChangeText={(newText) => {
          // data.value = text
          handler(newText);
        }}
        editable={data.isEditable}
      />
    </View>
  );
};

export default memo(TextInputComponent);
