import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MainBox from './MainBox';
import CountriesDropdown from '../ProfileDocument/CountryDropdown';
import { RadioButton } from 'react-native-paper';
import { DataEntry, Prompt, RadioButtons, TextEntry } from '../../utils/Types';
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalFontSize, {
  PassportBoxStyles,
  GlobalColor,
  BurgerIconColor
} from '../../constants/GlobalStyles';

/**
 * Container in the home page for the first section of the profile.
 *
 * Needs to be redone more modularly to facilitate better integration with the
 * profile object (found in src/utils/Profile.ts). For reference, see how all
 * other sections are handled by the function generateProfile (found in
 * src/utils/GenerateJSX.tsx).
 *
 * @param Props.data - Relevant data entries from the profile object, to keep
 * track of the state of the input elements.
 * @param Props.handleChange - Function to apply changes, made to input
 * components, to the profile object.
 * @param Props.profilePic - Image stored in the current profile object.
 */
export default function PassportBox({
  data,
  handleChange,
  profilePic
}: {
  data: DataEntry[];
  handleChange(
    sectionID: string,
    dataID: string,
    value: boolean | string
  ): void;
  profilePic: string | null;
}) {
  const [radioSelection, setRadioSelection] = useState(
    data[11] instanceof RadioButtons ? data[11].value : 'null'
  );
  const [textbox0, setTextbox0] = useState(
    data[1] instanceof TextEntry ? data[1].value : ''
  );
  const [textbox1, setTextbox1] = useState(
    data[3] instanceof TextEntry ? data[3].value : ''
  );
  const [textbox2, setTextbox2] = useState(
    data[5] instanceof TextEntry ? data[5].value : ''
  );
  const [textbox3, setTextbox3] = useState(
    data[7] instanceof TextEntry ? data[7].value : ''
  );
  const [textbox4, setTextbox4] = useState(
    data[9] instanceof TextEntry ? data[9].value : ''
  );
  const [textbox5, setTextbox5] = useState(
    data[13] instanceof TextEntry ? data[13].value : ''
  );
  const [textbox6, setTextbox6] = useState(
    data[15] instanceof TextEntry ? data[15].value : ''
  );

  const handler = (dataID: string, value: string, selector: string) => {
    console.log(dataID, value);
    switch (selector) {
      case 'radio':
        setRadioSelection(value);
        break;
      case 'text0':
        setTextbox0(value);
        break;
      case 'text1':
        setTextbox1(value);
        break;
      case 'text2':
        setTextbox2(value);
        break;
      case 'text3':
        setTextbox3(value);
        break;
      case 'text4':
        setTextbox4(value);
        break;
      case 'text5':
        setTextbox5(value);
        break;
      case 'text6':
        setTextbox6(value);
        break;
    }
    handleChange('GHP', dataID, value);
  };

  if (!data) {
    return <View></View>;
  }

  return (
    <MainBox>
      {profilePic && (
        <Image
          style={PassportBoxStyles.picture}
          source={{ uri: profilePic }}
        ></Image>
      )}
      {!profilePic && (
        <Icon name="user-circle" style={PassportBoxStyles.icon} />
      )}
      <View style={PassportBoxStyles.LabelContainers}>
        <Text style={[PassportBoxStyles.text, GlobalFontSize().regularText]}>
          {data[0] instanceof Prompt ? data[0].value : 'null'}
        </Text>
        <Text
          style={[
            PassportBoxStyles.text,
            GlobalFontSize().regularText,
            GlobalColor().PromptTranslationColor
          ]}
        >
          {data[0] instanceof Prompt ? data[0].translation : 'null'}
        </Text>
      </View>
      <TextInput
        style={[PassportBoxStyles.input, GlobalColor().TextInputColor]}
        value={textbox0}
        onChangeText={(newText) => handler(data[1].key, newText, 'text0')}
        editable={data[1].isEditable}
      />
      <View style={PassportBoxStyles.LabelContainers}>
        <Text style={[PassportBoxStyles.text, GlobalFontSize().regularText]}>
          {data[2] instanceof Prompt ? data[2].value : 'null'}
        </Text>
        <Text
          style={[
            PassportBoxStyles.text,
            GlobalFontSize().regularText,
            GlobalColor().PromptTranslationColor
          ]}
        >
          {data[2] instanceof Prompt ? data[2].translation : 'null'}
        </Text>
      </View>
      <TextInput
        style={[PassportBoxStyles.input, GlobalColor().TextInputColor]}
        value={textbox1}
        onChangeText={(newText) => handler(data[3].key, newText, 'text1')}
        editable={data[3].isEditable}
      />
      <View style={PassportBoxStyles.LabelContainers}>
        <Text style={[PassportBoxStyles.text, GlobalFontSize().regularText]}>
          {data[4] instanceof Prompt ? data[4].value : 'null'}
        </Text>
        <Text
          style={[
            PassportBoxStyles.text,
            GlobalFontSize().regularText,
            GlobalColor().PromptTranslationColor
          ]}
        >
          {data[4] instanceof Prompt ? data[4].translation : 'null'}
        </Text>
      </View>
      <View style={{ zIndex: 4002 }}>
        <CountriesDropdown
          isMultiple={false}
          setUp={false}
          id={data[5].key}
          value={textbox2}
          selector={'text2'}
          onChange={handler}
          editable={data[5].isEditable}
        />
      </View>
      <View style={PassportBoxStyles.LabelContainers}>
        <Text style={[PassportBoxStyles.text, GlobalFontSize().regularText]}>
          {data[6] instanceof Prompt ? data[6].value : 'null'}
        </Text>
        <Text
          style={[
            PassportBoxStyles.text,
            GlobalFontSize().regularText,
            GlobalColor().PromptTranslationColor
          ]}
        >
          {data[6] instanceof Prompt ? data[6].translation : 'null'}
        </Text>
      </View>
      <TextInput
        style={[PassportBoxStyles.input, GlobalColor().TextInputColor]}
        value={textbox3}
        onChangeText={(newText) => handler(data[7].key, newText, 'text3')}
        editable={data[7].isEditable}
      />
      <View style={PassportBoxStyles.LabelContainers}>
        <Text style={[PassportBoxStyles.text, GlobalFontSize().regularText]}>
          {data[8] instanceof Prompt ? data[8].value : 'null'}
        </Text>
        <Text
          style={[
            PassportBoxStyles.text,
            GlobalFontSize().regularText,
            GlobalColor().PromptTranslationColor
          ]}
        >
          {data[8] instanceof Prompt ? data[8].translation : 'null'}
        </Text>
      </View>
      <TextInput
        style={[PassportBoxStyles.input, GlobalColor().TextInputColor]}
        value={textbox4}
        onChangeText={(newText) => handler(data[9].key, newText, 'text4')}
        editable={data[9].isEditable}
      />
      <View style={PassportBoxStyles.LabelContainers}>
        <Text style={[PassportBoxStyles.text, GlobalFontSize().regularText]}>
          {data[10] instanceof Prompt ? data[10].value : 'null'}
        </Text>
        <Text
          style={[
            PassportBoxStyles.text,
            GlobalFontSize().regularText,
            GlobalColor().PromptTranslationColor
          ]}
        >
          {data[10] instanceof Prompt ? data[10].translation : 'null'}
        </Text>
      </View>
      <RadioButton.Group
        onValueChange={(value) => handler(data[11].key, value, 'radio')}
        value={radioSelection}
      >
        <View style={PassportBoxStyles.cbContainer}>
          <View style={PassportBoxStyles.cbBtns}>
            {data[11] instanceof RadioButtons ? (
              <RadioButton
                value={data[11].options[0]}
                status={
                  radioSelection === data[11].options[0]
                    ? 'checked'
                    : 'unchecked'
                }
                uncheckedColor={BurgerIconColor()}
                disabled={!data[11].isEditable}
              />
            ) : (
              <></>
            )}
            <Text
              style={[PassportBoxStyles.text, GlobalFontSize().regularText]}
            >
              {data[11] instanceof RadioButtons ? data[11].options[0] : 'null'}
            </Text>
            <Text
              style={[
                PassportBoxStyles.text,
                GlobalFontSize().regularText,
                GlobalColor().RadioTranslationColor
              ]}
            >
              {data[11] instanceof RadioButtons
                ? data[11].translations[0]
                : 'null'}
            </Text>
          </View>
          <View style={PassportBoxStyles.cbBtns}>
            {data[11] instanceof RadioButtons ? (
              <RadioButton
                value={data[11].options[1]}
                status={
                  radioSelection === data[11].options[1]
                    ? 'checked'
                    : 'unchecked'
                }
                uncheckedColor={BurgerIconColor()}
                disabled={!data[11].isEditable}
              />
            ) : (
              <></>
            )}
            <Text
              style={[PassportBoxStyles.text, GlobalFontSize().regularText]}
            >
              {data[11] instanceof RadioButtons ? data[11].options[1] : 'null'}
            </Text>
            <Text
              style={[
                PassportBoxStyles.text,
                GlobalFontSize().regularText,
                GlobalColor().RadioTranslationColor
              ]}
            >
              {data[11] instanceof RadioButtons
                ? data[11].translations[1]
                : 'null'}
            </Text>
          </View>
        </View>
      </RadioButton.Group>
      <View style={PassportBoxStyles.LabelContainers}>
        <Text style={[PassportBoxStyles.text, GlobalFontSize().regularText]}>
          {data[12] instanceof Prompt ? data[12].value : 'null'}
        </Text>
        <Text
          style={[
            PassportBoxStyles.text,
            GlobalFontSize().regularText,
            GlobalColor().PromptTranslationColor
          ]}
        >
          {data[12] instanceof Prompt ? data[12].translation : 'null'}
        </Text>
      </View>
      <View style={{ zIndex: 4001 }}>
        <CountriesDropdown
          isMultiple={true}
          id={data[13].key}
          selector={'text5'}
          value={textbox5.split(',')}
          setUp={false}
          onChange={handler}
          editable={data[13].isEditable}
        />
      </View>
      <View style={PassportBoxStyles.LabelContainers}>
        <Text style={[PassportBoxStyles.text, GlobalFontSize().regularText]}>
          {data[14] instanceof Prompt ? data[14].value : 'null'}
        </Text>
        <Text
          style={[
            PassportBoxStyles.text,
            GlobalFontSize().regularText,
            GlobalColor().PromptTranslationColor
          ]}
        >
          {data[14] instanceof Prompt ? data[14].translation : 'null'}
        </Text>
      </View>
      <View style={{ zIndex: 4000 }}>
        <CountriesDropdown
          isMultiple={true}
          id={data[15].key}
          selector={'text6'}
          value={textbox6.split(',')}
          setUp={false}
          onChange={handler}
          editable={data[15].isEditable}
        />
      </View>
    </MainBox>
  );
}
