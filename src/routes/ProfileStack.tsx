import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Welcome,
  DisclaimerAgreement,
  LanguageSelect,
  PersonalInfo,
  UploadPhoto
} from '../screens';
import GlobalFontSize, {
  GlobalColor,
  BurgerIconColor
} from '../constants/GlobalStyles';
const Stack = createNativeStackNavigator();

/**
 * Render the profile creation screen stack which the user
 * steps through to create a new profile.
 */
export default function ProfileStack() {
  return (
    <Stack.Navigator
      id="ProfileStack"
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: true,
        headerStyle: GlobalColor().DrawerMenuBKColor,
        headerTintColor: BurgerIconColor()
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: 'Welcome',
          headerShown: true,
          headerTitleStyle: GlobalFontSize().regularText
        }}
      />
      <Stack.Screen
        name="LanguageSelect"
        component={LanguageSelect}
        options={{
          title: 'Select Languages',
          headerTitleStyle: GlobalFontSize().regularText
        }}
      />
      <Stack.Screen
        name="DisclaimerAgreement"
        component={DisclaimerAgreement}
        options={{
          title: 'Disclaimer Agreement',
          headerTitleStyle: GlobalFontSize().regularText
        }}
      />
      <Stack.Screen
        name="PersonalInfo"
        component={PersonalInfo}
        options={{
          title: 'Personal Information',
          headerTitleStyle: GlobalFontSize().regularText
        }}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{
          title: 'Upload Photo',
          headerTitleStyle: GlobalFontSize().regularText
        }}
      />
    </Stack.Navigator>
  );
}
