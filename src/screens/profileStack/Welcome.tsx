import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  SkipButton,
  ContinueButton,
  ProgressBar
} from '../../components/SetupPage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProfileStackParamList } from '../../utils/Types';
import { Profile } from '../../utils/Profile';
import { UseProfileContext } from '../../utils/context';
import GlobalFontSize, {
  WelcomeStyles,
  GlobalColor,
  LogoStyles,
  ProfileStackButtonsContainer
} from '../../constants/GlobalStyles';

type Props = StackNavigationProp<ProfileStackParamList, 'Welcome'>;

/**
 * First screen of the profile creation stack. This stack alters a temporary
 * profile object so that the user can cancel creating a new profile and return
 * to their previous profile unaffected.
 *
 * A cancel button is only rendered if there is a profile object to return to
 * (i.e. the user is not in first time setup).
 */
export default function Welcome() {
  const navigation = useNavigation<Props>();
  const { state } = UseProfileContext();
  let { tempProfile } = UseProfileContext();
  let showCancel = true;

  // Reset temp profile object
  tempProfile = new Profile();

  // Navigate to the appropriate screen depending on button press
  const pressHandler = (button: string) => {
    if (button === 'Next') {
      console.log('Navigating to LanguageSelect.');
      navigation.navigate('LanguageSelect');
    } else {
      console.log('Profile creation cancelled, returning home.');
      navigation.reset({ routes: [{ name: 'Home' }] });
    }
  };

  if (state.currProfile === '' && showCancel) showCancel = false;

  return (
    <SafeAreaView
      style={[
        WelcomeStyles.safeContainer,
        GlobalColor().WelcomeContainerBKColor
      ]}
    >
      <View style={LogoStyles.container}>
        <Image
          style={LogoStyles.bigIcon}
          source={require('../../../assets/ML_Logo.png')}
        />
      </View>
      <View style={WelcomeStyles.container}>
        <Text style={[WelcomeStyles.header, GlobalFontSize().irregularText]}>
          Welcome!
        </Text>
        <Text style={[WelcomeStyles.text, GlobalFontSize().regularText]}>
          Continue with the guided setup to create your new health passsport.
        </Text>
      </View>
      <View style={ProfileStackButtonsContainer.container}>
        <TouchableOpacity onPress={() => pressHandler('Next')}>
          <ContinueButton ButtonText="Next" />
        </TouchableOpacity>
        {showCancel && (
          <TouchableOpacity onPress={() => pressHandler('Cancel')}>
            <SkipButton text="Cancel" />
          </TouchableOpacity>
        )}
      </View>
      <ProgressBar stepCurrent={1} stepsTotal={5} />
    </SafeAreaView>
  );
}
