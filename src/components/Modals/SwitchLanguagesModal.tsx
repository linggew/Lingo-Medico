import React, { useState } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { UseProfileContext } from '../../utils/context';
import { Profile } from '../../utils/Profile';
import GlobalFontSize, {
  DropdownBKColor,
  DropdownTextColor,
  GlobalColor,
  ModalStyles
} from '../../constants/GlobalStyles';
import { storeProfile } from '../../utils/Storage';

/**
 * Modal for allowing a user to change the base language and translation
 * language for the app.
 *
 * @param Props.visible - Controls whether or not the modal is visible.
 * @param Props.handleClose - Function called by pressing the modal's button.
 */
const SwitchLanguagesModal = ({
  visible,
  handleClose
}: {
  visible: boolean;
  handleClose(): void;
}) => {
  const languageOptions = [
    { label: 'English', value: 'English' },
    { label: '日本', value: 'Japanese' },
    { label: '한국어', value: 'Korean' },
    { label: 'Français', value: 'French' },
    { label: 'العربية', value: 'Arabic' }
  ];

  const { currProfile, setCurrProfile, state } = UseProfileContext();

  const [baseOpen, setbaseOpen] = useState(false);
  const [baseValue, setbaseValue] = useState(null);
  const [baseLanguages, setbaseLanguage] = useState(languageOptions);

  const [translationOpen, setTranslationOpen] = useState(false);
  const [translationValue, setTranslationValue] = useState(null);
  const [translationLanguages, setTranslationLanguage] =
    useState(languageOptions);

  const pressHandler = () => {
    if (baseValue && translationValue) {
      currProfile.baseLang = baseValue;
      currProfile.transLang = translationValue;
      setCurrProfile(new Profile(currProfile));
      console.log(
        'Lanaguages saved:\nbase - ' +
          currProfile.baseLang +
          '\nTranslated - ' +
          currProfile.transLang
      );
      storeProfile(currProfile, state);
    }
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={ModalStyles.container}>
        <View style={[ModalStyles.modalView, GlobalColor().DrawerMenuBKColor]}>
          <Text
            style={[ModalStyles.header, GlobalFontSize().irregularHeaderText]}
          >
            Choose Languages
          </Text>
          <View style={ModalStyles.languageSwapContent}>
            <Text style={[ModalStyles.label, GlobalFontSize().regularText]}>
              Default Language:
            </Text>
            <View style={ModalStyles.dropdown}>
              <DropDownPicker
                open={baseOpen}
                value={baseValue}
                items={baseLanguages}
                placeholder="Select Language"
                placeholderStyle={{ textAlign: 'center', color: '#949494' }}
                dropDownDirection="TOP"
                setOpen={setbaseOpen}
                setValue={setbaseValue}
                setItems={setbaseLanguage}
                onChangeValue={(value) => {
                  console.log('Base language chosen:', value);
                }}
                onSelectItem={(item) => {
                  console.log('Base language chosen. Item:', item);
                }}
                style={[
                  GlobalColor().TextInputColor,
                  { backgroundColor: DropdownBKColor() }
                ]}
                containerStyle={{ width: '60%', height: '10%' }}
                listItemLabelStyle={{
                  color: DropdownTextColor()
                }}
                listItemContainerStyle={{
                  backgroundColor: DropdownBKColor()
                }}
                selectedItemLabelStyle={{
                  fontWeight: 'bold'
                }}
                selectedItemContainerStyle={{
                  backgroundColor: 'blue'
                }}
                textStyle={{
                  color: DropdownTextColor()
                }}
                searchContainerStyle={{
                  backgroundColor: DropdownBKColor()
                }}
                searchPlaceholderTextColor={DropdownTextColor()}
                searchTextInputStyle={{
                  color: DropdownTextColor()
                }}
                showArrowIcon={true}
              />
            </View>
            <Text style={[ModalStyles.label, GlobalFontSize().regularText]}>
              Translation Language:
            </Text>
            <View style={ModalStyles.dropdown}>
              <DropDownPicker
                open={translationOpen}
                value={translationValue}
                items={translationLanguages}
                placeholder="Select Language"
                placeholderStyle={{ textAlign: 'center', color: '#949494' }}
                dropDownDirection="TOP"
                setOpen={setTranslationOpen}
                setValue={setTranslationValue}
                setItems={setTranslationLanguage}
                onChangeValue={(value) => {
                  console.log('Translation language chosen:', value);
                }}
                onSelectItem={(item) => {
                  console.log('Translation language chosen. Item:', item);
                }}
                style={[
                  GlobalColor().TextInputColor,
                  { backgroundColor: DropdownBKColor() }
                ]}
                containerStyle={{ width: '60%', height: '10%' }}
                listItemLabelStyle={{
                  color: DropdownTextColor()
                }}
                listItemContainerStyle={{
                  backgroundColor: DropdownBKColor()
                }}
                selectedItemLabelStyle={{
                  fontWeight: 'bold'
                }}
                selectedItemContainerStyle={{
                  backgroundColor: 'blue'
                }}
                textStyle={{
                  color: DropdownTextColor()
                }}
                searchContainerStyle={{
                  backgroundColor: DropdownBKColor()
                }}
                searchPlaceholderTextColor={DropdownTextColor()}
                searchTextInputStyle={{
                  color: DropdownTextColor()
                }}
                showArrowIcon={true}
              />
            </View>
          </View>
          <View style={ModalStyles.buttonContainer}>
            <Pressable
              style={[ModalStyles.button, GlobalColor().ButtonHeaderBKColor]}
              onPress={() => {
                pressHandler();
                handleClose();
              }}
            >
              <Text
                style={[
                  ModalStyles.buttonText,
                  GlobalColor().ExpandButtonColor
                ]}
              >
                OK
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SwitchLanguagesModal;
