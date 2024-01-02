import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  determineLangPacks,
  Languages,
  ProfileStackParamList
} from '../../utils/Types';
import { DisclaimerTemplate } from '../../constants/Templates';
import { constructSection } from '../../utils/ConstructObjects';
import { generateSection } from '../../utils/GenerateJSX';
import { Checkbox } from 'react-native-paper';
import {
  ContinueButton,
  SkipButton,
  ProgressBar
} from '../../components/SetupPage';
import GlobalFontSize, {
  BurgerIconColor,
  DisclaimerAgreementStyles,
  GlobalColor,
  LogoStyles,
  ProfileStackButtonsContainer
} from '../../constants/GlobalStyles';
import { UseProfileContext } from '../../utils/context';

type Props = StackNavigationProp<ProfileStackParamList, 'DisclaimerAgreement'>;

/**
 * Generate disclaimer text in a scrollable view. Checkbox indicating the user
 * has read and understands disclaimer must be checked in order to advance to
 * the next screen. User can also click the cancel button to return to the
 * Welcome screen.
 */
export default function DisclaimerAgreement() {
  const navigation = useNavigation<Props>();
  const { tempProfile } = UseProfileContext();
  const { basePack } = determineLangPacks(tempProfile.baseLang as Languages);
  const [checked, setChecked] = React.useState(false);

  const pressHandler = (button: string) => {
    if (button === 'Next') {
      console.log('Navigating to PersonalInfo');
      navigation.navigate('PersonalInfo');
    } else {
      console.log('Returning to Welcome.');
      navigation.popToTop();
    }
  };

  const generateDisclaimer = () => {
    const template: DisclaimerTemplate = new DisclaimerTemplate();
    const disclaimer = constructSection(template, basePack);
    const elements = generateSection(disclaimer);
    return elements;
  };

  return (
    <SafeAreaView
      style={[
        DisclaimerAgreementStyles.safeContainer,
        GlobalColor().DisclaimerAgreementContainerBKColor
      ]}
    >
      <View style={LogoStyles.container}>
        <Image
          style={LogoStyles.bigIcon}
          source={require('../../../assets/ML_Logo.png')}
        />
      </View>
      <View style={DisclaimerAgreementStyles.container}>
        <Text
          style={[
            DisclaimerAgreementStyles.header,
            GlobalFontSize().irregularText
          ]}
        >
          Disclaimer
        </Text>
        <ScrollView
          style={[
            DisclaimerAgreementStyles.disclaimer,
            GlobalColor().DisclaimerBDBKColor
          ]}
          overScrollMode="auto"
        >
          <View>{generateDisclaimer()}</View>
        </ScrollView>
        <View style={DisclaimerAgreementStyles.agreeContainer}>
          <View style={DisclaimerAgreementStyles.checkbox}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                console.log('Checkbox is checked.');
                setChecked(!checked);
              }}
              uncheckedColor={BurgerIconColor()}
            />
          </View>
          <Text
            style={[
              DisclaimerAgreementStyles.text,
              GlobalFontSize().regularText
            ]}
          >
            I Read and Understand the Disclaimer.
          </Text>
        </View>
      </View>
      <View style={ProfileStackButtonsContainer.container}>
        <TouchableOpacity
          onPress={() => {
            if (!checked) {
              Alert.alert(
                'Disclaimer Agreement',
                'You must read the disclaimer, then check the box to agree and continue.',
                [
                  {
                    text: 'I understand.',
                    onPress: () => console.log('I understand pressed.')
                  }
                ]
              );
            } else pressHandler('Next');
          }}
        >
          <ContinueButton ButtonText="Next" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressHandler('Cancel')}>
          <SkipButton text="Cancel" />
        </TouchableOpacity>
      </View>
      <ProgressBar stepCurrent={3} stepsTotal={5} />
    </SafeAreaView>
  );
}
