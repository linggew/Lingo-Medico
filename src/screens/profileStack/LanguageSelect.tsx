import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import { ContinueButton, ProgressBar } from '../../components/SetupPage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProfileStackParamList, determineLangPacks } from '../../utils/Types';
import { UseProfileContext } from '../../utils/context';
import GlobalFontSize, {
  languageSelectStyles,
  GlobalColor,
  LogoStyles,
  ProfileStackButtonsContainer
} from '../../constants/GlobalStyles';
import { setLanguages } from '../../utils/Storage';

type Props = StackNavigationProp<ProfileStackParamList, 'LanguageSelect'>;
const languageOptions = [
  { label: 'English', value: 'English' },
  { label: '日本', value: 'Japanese' },
  { label: '한국어', value: 'Korean' },
  { label: 'Français', value: 'French' },
  { label: 'العربية', value: 'Arabic' }
  // { label: '简体中文', value: 'Mandarin' },
  // { label: 'Español', value: 'Spanish' }
];

/**
 * User selects a base and translation language from two dropdown menus containing
 * available language packs. A selection for each language type is needed in order
 * to advance to the DisclaimerAgreement screen.
 */
export default function LanguageSelect() {
  const navigation = useNavigation<Props>();
  const { tempProfile } = UseProfileContext();

  const [baseOpen, setbaseOpen] = useState(false);
  const [baseValue, setbaseValue] = useState(null);
  const [baseLanguages, setbaseLanguage] = useState(languageOptions);

  const [translationOpen, setTranslationOpen] = useState(false);
  const [translationValue, setTranslationValue] = useState(null);
  const [translationLanguages, setTranslationLanguage] =
    useState(languageOptions);

  // If both a base and translation value is selected, use them to retrieve their
  // associated language packs. Display an alert message if one or both values are
  // missing.
  const pressHandler = () => {
    if (baseValue && translationValue) {
      const languages = determineLangPacks(baseValue, translationValue);
      if (languages.basePack && languages.translationPack) {
        setLanguages(
          languages.basePack,
          languages.translationPack,
          tempProfile
        );
        tempProfile.baseLang = baseValue;
        tempProfile.transLang = translationValue;
        console.log(
          'Lanaguages saved:\nbase - ' +
            tempProfile.baseLang +
            '\nTranslated - ' +
            tempProfile.transLang +
            '\nNavigating to DisclaimerAgreement.'
        );
        navigation.navigate('DisclaimerAgreement');
      }
    } else {
      Alert.alert(
        'Language Select',
        'Please selct both a base and translated language.',
        [
          {
            text: 'Okay',
            onPress: () => console.log('Okay pressed')
          }
        ]
      );
    }
  };

  return (
    <SafeAreaView
      style={[
        languageSelectStyles.safeContainer,
        GlobalColor().LanguageSelectContainerBKColor
      ]}
    >
      <View style={LogoStyles.container}>
        <Image
          style={LogoStyles.bigIcon}
          source={require('../../../assets/ML_Logo.png')}
        />
      </View>
      <View style={languageSelectStyles.container}>
        <Text
          style={[languageSelectStyles.header, GlobalFontSize().regularText]}
        >
          Please select your default language and the translation language. This
          can be changed later.
        </Text>
        <View style={languageSelectStyles.inputContainer}>
          <Text
            style={[languageSelectStyles.text, GlobalFontSize().regularText]}
          >
            Default Language:
          </Text>
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
            containerStyle={languageSelectStyles.dropdown}
          />
        </View>
        <View style={languageSelectStyles.inputContainer}>
          <Text
            style={[languageSelectStyles.text, GlobalFontSize().regularText]}
          >
            Translation Language:
          </Text>
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
            containerStyle={languageSelectStyles.dropdown}
          />
        </View>
      </View>
      <View style={ProfileStackButtonsContainer.container}>
        <TouchableOpacity onPress={() => pressHandler()}>
          <ContinueButton ButtonText="Next" />
        </TouchableOpacity>
      </View>
      <ProgressBar stepCurrent={2} stepsTotal={5} />
    </SafeAreaView>
  );
}
