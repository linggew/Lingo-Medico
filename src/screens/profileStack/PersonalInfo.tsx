import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProfileStackParamList } from '../../utils/Types';
import { UseProfileContext } from '../../utils/context';
import GlobalFontSize, {
  GlobalColor,
  LogoStyles,
  PersonalInfoStyles,
  ProfileStackButtonsContainer
} from '../../constants/GlobalStyles';
import { CountryDropdown } from '../../components/ProfileDocument';
import { ContinueButton, ProgressBar } from '../../components/SetupPage';

type Props = StackNavigationProp<ProfileStackParamList, 'PersonalInfo'>;

/**
 * User inputs personal info fields saved to profile object. All fields
 * are optional with the exception of the profileName which is used as
 * the profile object's ID in storage. The user is unable to change this
 * value later and it must be alphanumeric.
 */
export default function PersonalInfo() {
  const [profileName, setProfileName] = React.useState('');
  const [countryOrigin, setCountryOrigin] = React.useState('');
  const [physicianName, setPhysicianName] = React.useState('');
  const [physicianPhone, setPhysicianPhone] = React.useState('');
  const [physicianEmail, setPhysicianEmail] = React.useState('');
  const navigation = useNavigation<Props>();
  const { tempProfile, state } = UseProfileContext();

  const pressHandler = () => {
    if (profileName.length > 1) {
      // Validate profile name, which must be alphanumeric
      // so that they don't use protected string IDs like _state
      const regex = new RegExp('^[a-zA-Z][a-zA-Z0-9]+$');
      if (!regex.test(profileName)) {
        Alert.alert(
          'Personal Information',
          'Your profile name must be alphanumeric and without spaces.',
          [
            {
              text: 'Okay'
            }
          ]
        );
      } else {
        // Make sure profile name is not already in storage
        if (state.savedProfiles !== undefined) {
          for (const name of state.savedProfiles) {
            if (name.toLowerCase() === profileName.toLowerCase()) {
              Alert.alert(
                'Personal Information',
                'That name is already used in another profile. Please choose a different name.',
                [
                  {
                    text: 'Okay'
                  }
                ]
              );
              return;
            }
          }
        }
        tempProfile.name = profileName;
        tempProfile['sections'][0]['data'][5]['value'] = countryOrigin;
        tempProfile['sections'][0]['data'][7]['value'] = physicianName;
        if (physicianPhone && physicianEmail) {
          tempProfile['sections'][0]['data'][9]['value'] =
            physicianPhone + ', ' + physicianEmail;
        } else {
          tempProfile['sections'][0]['data'][9]['value'] =
            physicianPhone + physicianEmail;
        }
        navigation.navigate('UploadPhoto');
      }
    } else {
      Alert.alert(
        'Personal Information',
        'Please provide a unique profile name.',
        [
          {
            text: 'Okay'
          }
        ]
      );
    }
  };
  return (
    <SafeAreaView
      style={[
        PersonalInfoStyles.safeContainer,
        GlobalColor().DrawerMenuBKColor
      ]}
    >
      <View style={LogoStyles.container}>
        <Image
          style={LogoStyles.bigIcon}
          source={require('../../../assets/ML_Logo.png')}
        />
      </View>
      <View style={PersonalInfoStyles.container}>
        <Text style={[PersonalInfoStyles.header, GlobalFontSize().regularText]}>
          Enter your personal information.
        </Text>

        <KeyboardAwareScrollView enableOnAndroid={true}>
          <View style={PersonalInfoStyles.inputsContainer}>
            <Text
              style={[PersonalInfoStyles.text, GlobalFontSize().regularText]}
            >
              Profile Name (required)
            </Text>
            <TextInput
              style={[PersonalInfoStyles.input, GlobalColor().TextInputColor]}
              onChangeText={setProfileName}
              value={profileName}
            />
            <Text
              style={[PersonalInfoStyles.text, GlobalFontSize().regularText]}
            >
              Country of Origin
            </Text>
            <View style={PersonalInfoStyles.dropdown}>
              <CountryDropdown
                isMultiple={false}
                setUp={true}
                value={countryOrigin}
                onChange2={setCountryOrigin}
                editable={true}
              />
            </View>
            <Text
              style={[PersonalInfoStyles.text, GlobalFontSize().regularText]}
            >
              Physician Name
            </Text>
            <TextInput
              style={[PersonalInfoStyles.input, GlobalColor().TextInputColor]}
              onChangeText={setPhysicianName}
              value={physicianName}
            />
            <Text
              style={[PersonalInfoStyles.text, GlobalFontSize().regularText]}
            >
              Physician Phone
            </Text>
            <TextInput
              keyboardType="numeric"
              style={[PersonalInfoStyles.input, GlobalColor().TextInputColor]}
              onChangeText={setPhysicianPhone}
              value={physicianPhone}
            />
            <Text
              style={[PersonalInfoStyles.text, GlobalFontSize().regularText]}
            >
              Physician Email
            </Text>
            <TextInput
              style={[PersonalInfoStyles.input, GlobalColor().TextInputColor]}
              onChangeText={setPhysicianEmail}
              value={physicianEmail}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <View style={ProfileStackButtonsContainer.container}>
        <TouchableOpacity onPress={() => pressHandler()}>
          <ContinueButton ButtonText="Next" />
        </TouchableOpacity>
      </View>
      <ProgressBar stepCurrent={4} stepsTotal={5} />
    </SafeAreaView>
  );
}
